package config

import (
	"fmt"
	"os"
	"strconv"

	"github.com/joho/godotenv"
)

var isLoadEnv bool = false

/*
 * Loading env file -> This function is created to call env config from anywhere!
 * Because, FileReader searches file from root path, optional paths helps to show .env file!
 * @param paths ... optional path
 */
func LoadEnv(paths ...string) error {
	// load .env file (custom -> godotenv(".env"))
	err := godotenv.Load(paths...)

	if err != nil {
		fmt.Print("Error loading .env file")
	} else {
		isLoadEnv = true
	}

	return err
}

// Getenv func to get env value from key ---
func Getenv(key string) string {
	if !isLoadEnv {
		LoadEnv()
	}

	return os.Getenv(key)
}

func GetDbHost() string {
	return Getenv("DB_HOST")
}

func GetDbPort() uint64 {
	p := Getenv("DB_PORT")
	// str to int
	port, err := strconv.ParseUint(p, 10, 32)
	if err != nil {
		fmt.Println("Error parsing str to int")
	}

	return port
}
