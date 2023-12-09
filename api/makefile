default: pb 
-- .DEFAULT_GOAL = pb 

PROJECT_NAME = von
GRAPHQL = ./cmd/graphql/main.go
POCKETBASE = ./cmd/pocketbase/main.go
POCKETBASE_DATA = ./pocketbase/

.PHONY = graphql pb

graphql: 
	go run ${GRAPHQL}	


pb: 
	go run ${POCKETBASE} serve --dir=${POCKETBASE_DATA}
