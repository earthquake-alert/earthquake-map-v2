package src

import (
	"encoding/json"
	"fmt"
	"io"
	"text/template"
	"time"

	"github.com/labstack/echo/v4"
)

var Funcmap = template.FuncMap{
	"parseDate": ParseDate,
	"json":      ToJson,
}

type Template struct {
	templates *template.Template
}

func (t *Template) Render(w io.Writer, name string, data any, c echo.Context) error {
	return t.templates.ExecuteTemplate(w, name, data)
}

func ParseDate(d time.Time) string {
	return fmt.Sprintf("%d月%d日 %02d:%02dごろ", d.Month(), d.Day(), d.Hour(), d.Minute())
}

func ToJson(d any) string {
	s, err := json.Marshal(d)
	if err != nil {
		panic(err)
	}
	return string(s)
}
