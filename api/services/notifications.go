package services

import "fmt"

type notifRecipient int

const (
	NotifRecipientPassengers notifRecipient = 0b01
	NotifRecipientDrivers    notifRecipient = 0b10
)

func SendNotifcation(title string, body string, recipient notifRecipient) {
	fmt.Println("WARN: services.SendNotification has not been implemented")

	if recipient&NotifRecipientPassengers != 0 {
		//
	}

	if recipient&NotifRecipientDrivers != 0 {
		//
	}
}
