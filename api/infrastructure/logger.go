package infrastructure

import (
	"errors"
	"fmt"
	"log"
	"os"
	"time"
)

type LogOutput = int

const (
	LogFile LogOutput = iota
	LogStdout
)

func NewLogger(output LogOutput) *log.Logger {
	out := os.Stdout

	if output == LogFile {
		file, err := createLogFile()
		if err != nil {
			log.Printf("cannot create log file %q", err)
			log.Printf("logging to stdout")
		} else {
			out = file
			log.Printf("logging to %s", file.Name())
		}
	}

	return log.New(out, "", log.Ldate|log.Ltime|log.Llongfile)
}

func createLogFile() (*os.File, error) {
	err := os.Mkdir("./logs", os.ModePerm)
	if err != nil && !errors.Is(err, os.ErrExist) {
		err := fmt.Errorf("ERROR: could not create the logs directory %w\n", err)
		log.Println(err.Error())
		return nil, err
	}

	date := time.Now().UTC().Format("2006-1-2 15:4:5")
	filename := "log " + date + ".txt"
	file, err := os.Create("./logs/" + filename)
	if err != nil && !errors.Is(err, os.ErrExist) {
		err = fmt.Errorf("ERROR: could not create %q log. %w\n", filename, err)
		log.Println(err.Error())
		return nil, err
	}

	return file, nil
}
