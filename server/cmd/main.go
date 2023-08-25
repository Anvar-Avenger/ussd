package main

import (
	"joriy/tajriba/config"
	"joriy/tajriba/database"
	"joriy/tajriba/database/migrations"
)

func main() {
	config.LoadEnv("../.env")
	println(config.GetDbHost())

	database.Connect()
	migrations.AutoMigrate(database.DbConnection.Db)
}
