package models

import "time"

type Route struct {
	Id            int        `json:"id"`
	Name          string     `json:"name"`
	DateCreated   time.Time  `json:"date_created"`
	DateUpdated   time.Time  `json:"date_updated"`
	StartLocation Location   `json:"start_location"`
	EndLocation   Location   `json:"end_location"`
	StopPoints    []Location `json:"stop_points"`
}
