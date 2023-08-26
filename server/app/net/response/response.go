package response

import "github.com/gofiber/fiber/v2"

func Success(c *fiber.Ctx, data interface{}) error {
	return c.JSON(fiber.Map{
		"success": true,
		"data":    data,
		"msg":     "Muvaffaqiyatli",
	})
}

func Created(c *fiber.Ctx, data interface{}) error {
	return c.Status(201).JSON(fiber.Map{
		"success": true,
		"data":    data,
		"msg":     "Muvaffaqiyatli",
	})
}

func Fail(c *fiber.Ctx, data interface{}) error {
	return c.Status(400).JSON(fiber.Map{
		"success": false,
		"data":    data,
		"msg":     "Muvaffaqiyatsiz",
	})
}

func Error(c *fiber.Ctx, errors interface{}) error {
	return c.Status(500).JSON(fiber.Map{
		"success": false,
		"errors":  errors,
		"msg":     "Xatolik",
	})
}
