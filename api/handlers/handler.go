package handlers

import (
	"fmt"
	"github.com/go-playground/validator"
)

var validate *validator.Validate

func init() {
	validate = validator.New()
}

func generateValidationMessage(errors []validator.FieldError) []string {
	res := make([]string, len(errors))
	for i, err := range errors {
		res[i] = fmt.Sprintf("%s %s: %s", err.Kind(), err.StructField(), err.Tag())
	}

	return res
}
