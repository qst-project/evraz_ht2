package main

import (
	"github.com/gocarina/gocsv"
	"os"
)

type CsvSchema struct {
	SinmachineNumber string `csv:"sinmachine_number"`
	ExhausterNumber  string `csv:"exhauster_number"`
	ExhausterName    string `csv:"exhauster_name"`
	BearingNumber    string `csv:"bearing_number"`
	Measure          string `csv:"measure"`
	Signal           string `csv:"signal"`
	Code             string `csv:"code"`
	Description      string `csv:"description"`
	Type             string `csv:"type"`
	Activity         string `csv:"activity"`
}

func ReadSchemas() map[string]*CsvSchema {
	res := make(map[string]*CsvSchema)
	var schemas []*CsvSchema
	in, err := os.Open(config.schemaCsvPath)
	if err != nil {
		panic(err)
	}
	defer in.Close()

	if err := gocsv.UnmarshalFile(in, &schemas); err != nil {
		panic(err)
	}
	for _, schema := range schemas {
		res[schema.Code] = schema
	}
	return res
}
