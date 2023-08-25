package TrafficService

import (
	. "joriy/tajriba/app/models"
	"joriy/tajriba/database"
)

func All() ([]InternetPackage, error) {
	db := database.DbConnection.Db

	var entities []InternetPackage
	result := db.Find(&entities)
	if result.Error != nil {
		return nil, result.Error
	}

	return entities, nil
}

func Create(entity *InternetPackage) (*InternetPackage, error) {
	db := database.DbConnection.Db
	// Create record
	err := db.Create(&entity).Error
	return entity, err
}

func Find(Id uint) (InternetPackage, error) {
	db := database.DbConnection.Db

	var entity InternetPackage
	result := db.First(&entity, Id)
	if result.Error != nil {
		return entity, result.Error
	}

	return entity, nil
}

func Retrieve(company string) ([]InternetPackage, error) {
	db := database.DbConnection.Db

	var internetPackages []InternetPackage
	result := db.Where(&InternetPackage{Company: company}).Find(&internetPackages)
	if result.Error != nil {
		return nil, result.Error
	}

	return internetPackages, nil
}
