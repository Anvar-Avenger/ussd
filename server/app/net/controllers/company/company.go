package CompanyController

import (
	"joriy/tajriba/app/models"
	. "joriy/tajriba/app/net/response"
	"joriy/tajriba/database"

	"github.com/gofiber/fiber/v2"
)

func Index(c *fiber.Ctx) error {
	db := database.DbConnection.Db
	var entities []models.Company
	err := db.Find(&entities).Error
	if err != nil {
		return Fail(c, err)
	}

	return Success(c, entities)
}

func Store(c *fiber.Ctx) error {
	company := new(models.Company)

	// Set the body in the entity and return error if encountered
	err := c.BodyParser(company)
	if err != nil {
		return Error(c, err)
	}

	// Create record
	db := database.DbConnection.Db
	err = db.Create(&company).Error
	if err != nil {
		return Fail(c, err)
	}

	// Return the created entity
	return Created(c, company)
}

func Find() {

}

func Update() {

}

func Delete() {

}
