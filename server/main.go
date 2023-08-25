package main

import (
	"joriy/tajriba/config"
	"joriy/tajriba/database"
	"joriy/tajriba/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/template/jet/v2"
)

func setup() *fiber.App {
	engine := jet.New("./views", ".jet")
	app := fiber.New(fiber.Config{
		Views: engine,
	})

	app.Static("/", "./public")
	app.Use(cors.New())

	routes.Router(app)

	return app
}

func main() {
	database.Connect()
	app := setup()

	app.Listen(":" + config.Getenv("APP_PORT"))
	println("Server run: 3000")
}
