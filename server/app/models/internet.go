package models

import "time"

type InternetPackage struct {
	ID        uint      `json:"id"`
	Company   string    `gorm:"size:100;not null" json:"company"`
	Traffic   uint      `json:"traffic"`
	Price     uint      `json:"price"`
	Code      string    `gorm:"size:100;not null:uniqueIndex" json:"code"`
	Term      uint      `json:"term"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}
