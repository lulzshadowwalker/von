package repos

import "database/sql"

type repo struct {
	db *sql.DB;
};

func newRepo(db *sql.DB) repo {
  return repo{
    db: db,
  }
}
