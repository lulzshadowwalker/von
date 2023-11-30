package handlers 

import (
	"net/http"

	"github.com/go-playground/validator"
	"github.com/lulzshadowwalker/von/utils"
)

type CreateNotificationRequest struct {
	Title          string   `json:"title" validate:"required"`
	Body           string   `json:"body" validate:"required"`
	TargetAudience []string `json:"target_audience" validate:"required,dive,eq=passengers|eq=drivers"`
	DeliveryMethod []string `json:"delivery_method" validate:"required,dive,eq=email|eq=mobile_push"`
}

func handleSendNotification(w http.ResponseWriter, r *http.Request) error {
	payload := CreateNotificationRequest{
		Title:          r.PostFormValue("title"),
		Body:           r.PostFormValue("body"),
		TargetAudience: r.PostForm["target_audience"],
		DeliveryMethod: r.PostForm["delivery_method"],
	}
	err := validate.Struct(&payload)
	if err != nil {
		return utils.NewVonErr(http.StatusBadRequest, generateValidationMessage(err.(validator.ValidationErrors)))
	}

	return writeJson(w, 200, "cool")
}

func handleGetNotifications(w http.ResponseWriter, r *http.Request) error {
	return nil
}
