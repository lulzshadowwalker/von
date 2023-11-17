package utils

import "fmt"

type VonErr struct {
  StatusCode int
  Message any
}

func NewVonErr(statusCode int, message any) VonErr {
  return VonErr{
    StatusCode: statusCode,
    Message: message,
  }  
}

func (e VonErr) Error() string {
  return fmt.Sprintf("%v", e.Message);
}
