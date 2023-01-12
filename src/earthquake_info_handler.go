package src

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func (h *Handler) EarthquakeInfoHandler(c echo.Context) error {
	html, err := Template("public/html/earthquake_info.html", map[string]string{
		"Epicenter": "[]",
	})
	if err != nil {
		return err
	}

	return c.HTML(http.StatusOK, html)
}
