default: dev
-- .DEFAULT_GOAL = dev 

PROJECT_NAME = api
REST_OUT_DIR = ./bin
REST_ENTRY_PT = ./cmd/rest/main.go
ENTRY_PT = ./cmd/graphql/main.go

.PHONY = rest_dev rest_deploy clean

rest_dev: 
	go run ${REST_ENTRY_PT}

rest_deploy:
	mkdir -p ${REST_OUT_DIR}
	go build ${REST_ENTRY_PT} -o ${REST_OUT_DIR}/${PROJECT_NAME}
	nohup ${REST_OUT_DIR}/${PROJECT_NAME}&

dev: 
	go run ${ENTRY_PT}	

clean:
	rm -rf ${REST_OUT_DIR}
