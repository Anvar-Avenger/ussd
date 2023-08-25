package routes

import (
	CompanyController "joriy/tajriba/app/net/controllers/company"
	TrafficController "joriy/tajriba/app/net/controllers/internet"

	"github.com/gofiber/fiber/v2"
)

func Router(app *fiber.App) {
	// Render template
	app.Get("/", func(c *fiber.Ctx) error {
		return c.Render("index", fiber.Map{
			"Title": "Tizim",
		})
	})

	// Internet packages
	app.Post("/trafik-olish", TrafficController.GetByCompany)
	app.Get("/traffics", TrafficController.Index)
	app.Post("/traffics", TrafficController.Store)
	app.Get("/traffics/:id", TrafficController.Get)
	app.Put("/traffics/:id", TrafficController.Update)
	app.Delete("/traffics/:id", TrafficController.Delete)

	// Companies
	companies := app.Group("/companies")
	companies.Get("/", CompanyController.Index)
	companies.Post("/", CompanyController.Store)

	app.Post("/tizimga-kirish", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"status":  "error",
			"errors":  []string{},
			"message": "Tizimga kirish uchun ruxsat majud emas!",
		})
	})
}
