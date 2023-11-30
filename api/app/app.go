package app

import (
	"fmt"
	"net/http"

	"github.com/lulzshadowwalker/von/handlers"
)

type App struct {
	router     http.Handler
	listenAddr string
}

func NewApp(port int) *App {
	return &App{
		router:     handlers.NewRouter(),
		listenAddr: fmt.Sprintf(":%d", port),
	}
}

func (a *App) Start() error {
	server := http.Server{
		Addr:    a.listenAddr,
		Handler: a.router,
	}

  fmt.Println("listening on ", a.listenAddr)
	return server.ListenAndServe()
}
