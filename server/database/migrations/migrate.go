package migrations

import (
	"joriy/tajriba/app/models"
	"log"

	"gorm.io/gorm"
)

func AutoMigrate(database *gorm.DB) {
	log.Println("Running migrations")
	database.AutoMigrate(&models.Company{}, &models.InternetPackage{})
}
