PROJECT_NAME = api
OUTPUT_DIR = ./bin

.PHONY = dev deploy clean

dev: 
	go run main.go

deploy:
	mkdir -p ${OUTPUT_DIR}
	go build main.go -o ${OUTPUT_DIR}/${PROJECT_NAME}
	nohup ${OUTPUT_DIR}/${PROJECT_NAME}&

clean:
	rm -rf ${OUTPUT_DIR}
