package repos

import (
	"context"
	"database/sql"
	"fmt"

	"github.com/lulzshadowwalker/von/graph/model"
)

type NotificationsRepo repo

func NewNotificationsRepo(db *sql.DB) NotificationsRepo {
	return NotificationsRepo(newRepo(db))
}

func (n NotificationsRepo) Index() ([]*model.Notification, error) {
	// ...
	rows, err := n.db.Query(`
    SELECT n.id, n.title, n.body, n.sent_at, dm.name_en AS delivery_method, ta.name_en AS target_audience
    FROM notifications n
    JOIN notification_delivery_method ndm ON ndm.notification_id = n.id
    JOIN notification_delivery_methods dm ON ndm.delivery_method_id = dm.id 
    JOIN notification_target_audience nta ON nta.notification_id = n.id
    JOIN notification_target_audiences ta ON ta.id = nta.target_audience_id;
    `)
	if err != nil {
		return nil, fmt.Errorf("failed to query notifs from db %q", err)
	}

	notifsMap := make(map[string]*model.Notification)
	for rows.Next() {
		var dm model.NotificationDeliveryMethod
		var ta model.NotificationTargetAudience
		notif := new(model.Notification)

		err = rows.Scan(&notif.ID, &notif.Title, &notif.Body, &notif.SentAt, &dm, &ta)
		if err != nil {
			return nil, fmt.Errorf("cannot scan row from result set %q", err)
		}

		if entry, ok := notifsMap[notif.ID]; !ok {
			notifsMap[notif.ID] = notif
			notif.DeliveryMethod = []model.NotificationDeliveryMethod{dm}
			notif.TargetAudience = []model.NotificationTargetAudience{ta}
		} else {
			entry.DeliveryMethod = append(notifsMap[notif.ID].DeliveryMethod, dm)
			entry.TargetAudience = append(notifsMap[notif.ID].TargetAudience, ta)
		}
	}

	notifs := make([]*model.Notification, len(notifsMap))

  i := 0
	for _, v := range notifsMap {
		notifs[i] = v 
    i++ 
	}

	return notifs, nil
}

func (n NotificationsRepo) Store(ctx context.Context, notif model.Notification) error {
	tx, err := n.db.Begin()
	if err != nil {
		return fmt.Errorf("cannot begin db transaction %q", err)
	}

	// TODO: add sender to context
	// or maybe pass it as an arg idk
	const SENTBY = 1
	res, err := tx.Exec(`
    INSERT INTO notifications(title, body, sent_by) 
    VALUES (?, ?, ?); 
	if err != nil {
    `, notif.Title, notif.Body, SENTBY)
	if err != nil {
		tx.Rollback()
		return fmt.Errorf("cannot insert row into notifications table %q", err)
	}

	notifId, err := res.LastInsertId()
	if err != nil {
		tx.Rollback()
		return fmt.Errorf("cannot retrieve inserted notification id %q", err)
	}

	_, err = tx.Exec(`
    INSERT INTO notification_delivery_method(notification_id, delivery_method_id) VALUES(?, ?);
  `, notifId, 2)
	if err != nil {
		tx.Rollback()
		return fmt.Errorf("cannot insert record of notification into pivot table notification_delivery_method")
	}

	_, err = tx.Exec(`
    INSERT INTO notification_target_audiences(hotification_id, target_audience_id) VALUES(?, ?);
    `, notifId, 2)
	if err != nil {
		tx.Rollback()
		return fmt.Errorf("cannot insert record of notification into pivot table notification_delivery_method")
	}

	tx.Commit()
	return nil
}
