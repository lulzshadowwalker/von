package main

import (
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/joho/godotenv"
	"github.com/lulzshadowwalker/von/graph"
	_ "github.com/lulzshadowwalker/von/infrastructure"
)

const defaultPort = "8080"

func main() {
  err := godotenv.Load()
  if err != nil {
    log.Fatalf("cannot init config %q", err)
  }

	port := os.Getenv("GRAPHQL_PORT")
	if port == "" {
		port = defaultPort
	}

  baseurl := os.Getenv("POCKETBASE_APP_URL")
  if baseurl == "" {
    panic("you did not initialize the config pepega ..")
  }

  pb := graph.NewRestApiController(baseurl)

	srv := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: &graph.Resolver{
    PocketbaseApiController: pb,
  }}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
