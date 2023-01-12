package src

import (
	"strings"
	"text/template"
)

func Template(file string, data any) (string, error) {
	tmpl, err := template.New(file).ParseFiles(file)
	if err != nil {
		return "", err
	}

	writer := new(strings.Builder)
	if err := tmpl.Execute(writer, data); err != nil {
		return "", err
	}
	return writer.String(), nil
}
