package models

import "time"

type Company struct {
	// gorm.Model
	ID         uint      `gorm:"primarykey" json:"id"`
	Name       string    `json:"name"`
	CallCenter string    `json:"call_center"`
	Prefix     string    `json:"prefix"`
	CreatedAt  time.Time `json:"created_at"`
	UpdatedAt  time.Time `json:"updated_at"`
}
