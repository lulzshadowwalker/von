package models

import "time"

type Bus struct {
	Id           int       `json:"id"`
	DriverId     Driver    `json:"driver_id"`
	Capacity     int       `json:"capacity"`
	DateCreated  time.Time `json:"date_created"`
	DateUpdated  time.Time `json:"date_updated"`
	PlateNo      string    `json:"plate_number,omitempty"`
	Manufacturer string    `json:"manufacturer,omitempty"`
	Model        string    `json:"model,omitempty"`
}
