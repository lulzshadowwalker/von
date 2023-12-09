package handlers

import (
	"net/http"

	"github.com/labstack/echo/v5"
	"github.com/lulzshadowwalker/von/app"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/forms"
	"github.com/pocketbase/pocketbase/models"
)

type NotificationsHandler struct { }

func (h NotificationsHandler) send(c echo.Context) error {
	app := app.App
	collection, err := app.Dao().FindCollectionByNameOrId("notifications")
	if err != nil {
		return err
	}

	record := models.NewRecord(collection)
	form := forms.NewRecordUpsert(app, record)
	if err = form.LoadRequest(c.Request(), ""); err != nil {
		return err
	}

	if err = form.Submit(); err != nil {
		return err
	}

	return c.JSON(http.StatusOK, record)
}

func (h NotificationsHandler) register(e *core.ServeEvent) error {
	// overrides the default notifcations POST route
	e.Router.POST("/api/collections/notifications/records", h.send)
	return nil
}
