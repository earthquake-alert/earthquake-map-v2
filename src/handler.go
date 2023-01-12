package src

import (
	"fmt"
	"net/http"

	"github.com/labstack/echo/v4"
)

type Handler struct {
}

func NewHandler() *Handler {
	return &Handler{}
}

func (h *Handler) RootHandler(c echo.Context) error {
	return c.String(http.StatusOK, "Hello")
}

// JSの配信

func (h *Handler) EarthquakeInfoJsHandler(c echo.Context) error {
	return c.File("public/js/earthquake_info.js")
}

func (h *Handler) EarthquakeReportJsHandler(c echo.Context) error {
	return c.File("public/js/earthquake_report.js")
}

func (h *Handler) TsunamiJsHandler(c echo.Context) error {
	return c.File("public/js/tsunami.js")
}

// HTMLの配信

func (h *Handler) EarthquakeReportHandler(c echo.Context) error {
	return c.File("public/html/earthquake_report.html")
}

func (h *Handler) TsunamiHandler(c echo.Context) error {
	return c.File("public/html/tsunami.html")
}

// 震度アイコン
func (h *Handler) EarthquakeIcon(c echo.Context) error {
	intensity := c.QueryParam("file")
	return c.File(fmt.Sprintf("public/images/icon/%s.png", intensity))
}
