package handlers

import (
	"github.com/lulzshadowwalker/von/app"
	"github.com/pocketbase/pocketbase/core"
)

type Handler interface {
	register(e *core.ServeEvent) error
}

func Register() {
	app := app.App
	hs := []Handler{NotificationsHandler{}}

  app.OnBeforeServe().Add(func (e *core.ServeEvent) error {
    for _, h := range hs {
      err := h.register(e)
      if err != nil {
        return err 
      }
    }
    
    return nil 
  })
}
