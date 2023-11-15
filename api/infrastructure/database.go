package infrastructure

import (
	"database/sql"
	"fmt"
	"log"
	"os"
)

var Database *sql.DB;

func initDatabase() {
	uname := os.Getenv("DB_USERNAME")
	pwd := os.Getenv("DB_PASSWORD")
	host := os.Getenv("DB_HOST")
	dbName := os.Getenv("DB_NAME")

	conStr := fmt.Sprintf("%s:%s@tcp(%s)/%s?parseTime=true", uname, pwd, host, dbName)

	db, err := sql.Open("mysql", conStr)
	if err != nil {
		log.Fatalf("ERROR: cannot connect to database %q\n", err)
	}

	err = db.Ping()
	if err != nil {
		log.Fatalf("ERROR: cannot connect to database %q\n", err)
	}

  Database = db;
}

