package TrafficController

import (
	"joriy/tajriba/app/models"
	TrafficService "joriy/tajriba/app/services/traffic"

	"github.com/gofiber/fiber/v2"
)

func GetByCompany(c *fiber.Ctx) error {
	internet := new(models.InternetPackage)
	c.BodyParser(&internet)

	entities, err := TrafficService.Retrieve(internet.Company)
	if err != nil {
		return c.JSON(fiber.Map{
			"status":  "error",
			"errors":  err,
			"message": "Ma\u2019lumotlar to\u2018liq daqdim etilmagan!",
		})
	}

	return c.JSON(fiber.Map{
		"status":  "success",
		"data":    entities,
		"message": "Muvaffaqiyatli",
	})
}

func Index(c *fiber.Ctx) error {
	entities, err := TrafficService.All()
	if err != nil {
		return c.JSON(fiber.Map{
			"status":  "error",
			"errors":  err,
			"message": "Ma\u2019lumotlar to\u2018liq daqdim etilmagan!",
		})
	}

	return c.JSON(fiber.Map{
		"status":  "success",
		"data":    entities,
		"message": "Muvaffaqiyatli",
	})
}

func Store(c *fiber.Ctx) error {
	entity := new(models.InternetPackage)
	err := c.BodyParser(entity)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"status":  "error",
			"erorrs":  err,
			"message": "Nimadir xato ketdi",
		})
	}

	entity, err = TrafficService.Create(entity)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"status":  "error",
			"erorrs":  err,
			"message": "Yaratishning imkoni bo\u2018lmadi",
		})
	}

	// Return the created entity
	return c.Status(201).JSON(fiber.Map{
		"status":  "success",
		"data":    entity,
		"message": "User has created",
	})
}

func Get(c *fiber.Ctx) error {
	id, _ := c.ParamsInt("id")
	entity, _ := TrafficService.Find(uint(id))

	return c.JSON(fiber.Map{
		"status":  "success",
		"data":    entity,
		"message": "Muvaffaqiyatli",
	})
}

func Update(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{})
}

func Delete(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{})
}
