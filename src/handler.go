package src

import (
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
