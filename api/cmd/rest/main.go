package main

import (
	"github.com/lulzshadowwalker/von/app"
)

// WARN: so far this has been deprecated in favor of a graphql interface
func main() {
	a := app.NewApp(3000)
	a.Start()
}
