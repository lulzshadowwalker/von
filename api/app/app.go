package app

import "github.com/pocketbase/pocketbase"

var App *pocketbase.PocketBase

func init() {
  App = pocketbase.New() 
}
