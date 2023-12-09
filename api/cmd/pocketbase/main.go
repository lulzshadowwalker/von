package main

import (
	"log"

	"github.com/lulzshadowwalker/von/app"
	"github.com/lulzshadowwalker/von/handlers"
)

func main() {
  app := app.App
  handlers.Register()

  if err := app.Start(); err != nil {
    log.Fatal(err)
  }
}
