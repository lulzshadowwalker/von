package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/lulzshadowwalker/von/utils"
)

type WrappedHandler func(http.ResponseWriter, *http.Request) error

func unwrap(fn WrappedHandler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if err := fn(w, r); err != nil {
			if appErr, ok := err.(utils.VonErr); ok {
				writeJson(w, appErr.StatusCode, appErr.Message)
				return
			}

			_, ok := err.(utils.VonErr)
			fmt.Println("vonerr", ok)

			// TODO, log the error
			fmt.Println(err)
			writeJson(w, 500, map[any]string{
				"message": "internal server error",
				"error":   err.Error(),
			})
		}
	}
}

func writeJson(w http.ResponseWriter, statusCode int, message any) error {
	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(statusCode)
	return json.NewEncoder(w).Encode(message)
}

func NewRouter() chi.Router {
	r := chi.NewRouter()

	r.Use(middleware.Logger)

	r.Route("/auth", regAuthRoutes)
	r.Route("/notifications", regNotificationsRoutes)

	return r
}

func regAuthRoutes(r chi.Router) {
	r.Get("/login", unwrap(handleLogin))
}

func regNotificationsRoutes(r chi.Router) {
	r.Post("/", unwrap(handleSendNotification))
}
