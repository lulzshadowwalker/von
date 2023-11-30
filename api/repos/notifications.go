package repos

import (
	"database/sql"
	"fmt"
)

type NotificationsRepo repo; 

func NewNotificationsRepo(db *sql.DB) NotificationsRepo {
  return NotificationsRepo(newRepo(db));
}

func (n NotificationsRepo) GetAll() ([]model.Notification, error){
  rows, err := n.db.Query(`
    SELECT title, body, sent_by, target_audience, 
    `);
  if err != nil {
    return nil, fmt.Errorf("failed to query notifs from db %q", err); 
  }

  notifs = make([]model.Notification); 
  for rows.Next() {
    notif = new(model.Notif);  
    rows.Scan()
  }

  return nil, nil;
}
