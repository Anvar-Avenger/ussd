package CompanyController

import (
	"joriy/tajriba/app/models"
	"joriy/tajriba/database"

	"github.com/gofiber/fiber/v2"
)

func Index(c *fiber.Ctx) error {
	return c.SendString("")
}

func Store(c *fiber.Ctx) error {
	db := database.DbConnection.Db
	company := new(models.Company)

	// Store the body in the user and return error if encountered
	err := c.BodyParser(company)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"status":  "error",
			"erorrs":  err,
			"message": "Something's wrong with your input",
		})
	}

	// Create record
	err = db.Create(&company).Error
	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"status":  "error",
			"erorrs":  err,
			"message": "Could not create user",
		})
	}

	// Return the created user
	return c.Status(201).JSON(fiber.Map{
		"status":  "success",
		"data":    company,
		"message": "User has created",
	})
}

func Find() {

}

func Update() {

}

func Delete() {

}
