PROJECT_NAME = api
REST_OUT_DIR = ./bin

.PHONY = rest_dev rest_deploy clean

rest_dev: 
	go run main.go

rest_deploy:
	mkdir -p ${REST_OUT_DIR}
	go build main.go -o ${REST_OUT_DIR}/${PROJECT_NAME}
	nohup ${REST_OUT_DIR}/${PROJECT_NAME}&

clean:
	rm -rf ${REST_OUT_DIR}
