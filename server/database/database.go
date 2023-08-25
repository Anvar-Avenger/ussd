package database

import (
	"fmt"
	"joriy/tajriba/config"
	"log"
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

// Database instance
type Dbinstance struct {
	Db *gorm.DB
}

var DbConnection Dbinstance

// Connect function
func Connect() {
	// Database port
	host := config.GetDbHost()
	port := config.GetDbPort()
	user := config.Getenv("DB_USER")
	password := config.Getenv("DB_PASSWORD")
	database := config.Getenv("DB_NAME")

	// Connection url
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s?charset=utf8mb4&parseTime=True&loc=Local", user, password, host, port, database)
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info),
	})
	if err != nil {
		log.Fatal("Failed to connect to database. \n", err)
		os.Exit(2)
	}

	log.Println("Connected")
	db.Logger = logger.Default.LogMode(logger.Info)

	DbConnection = Dbinstance{
		Db: db,
	}
}
