package models

import "gorm.io/gorm"

type Company struct {
	gorm.Model
	Name       string `json:"name"`
	CallCenter string `json:"call_center"`
	Prefix     string `json:"prefix"`
}
