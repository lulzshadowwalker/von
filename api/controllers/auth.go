package controllers

import (
	"fmt"
	"net/http"
	"strings"

	"github.com/go-playground/validator"
	"github.com/lulzshadowwalker/von/utils"
)

type LoginRequest struct {
	StudentId string `validate:"required,numeric,excludes=.,len=6"`
	Password   string `validate:"required,min=8"`
}

func handleLogin(w http.ResponseWriter, r *http.Request) error {
	stdId, pwd := r.PostFormValue("student_id"), r.PostFormValue("password")
	req := LoginRequest{
		StudentId: strings.TrimSpace(stdId),
		Password:   strings.TrimSpace(pwd),
	}

	err := validate.Struct(&req)
  fmt.Println(req.StudentId, req.Password, err);
	if err != nil {
		return utils.NewVonErr(http.StatusBadRequest, map[string]any{
			"message": "validation errors",
			"errors":  generateValidationMessage(err.(validator.ValidationErrors)),
		})
	}

	return writeJson(w, http.StatusOK, map[string]any{
		"message": "you good",
	})
}

func generateJwtToken() {
	panic("unimplemented")
}
