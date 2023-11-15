package models

import "time"


type Driver struct {
	Id            int       `json:"id"`
	Name          string    `json:"name"`
	Mobile        string    `json:"mobile"`
	BusId         int       `json:"bus_id"`
	DateCreated   time.Time `json:"date_created"`
	DateUpdated   time.Time `json:"date_updated"`
	LicenseNumber string    `json:"license_number,omitempty"`
}


