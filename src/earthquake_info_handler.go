package src

import (
	"encoding/json"
	"net/http"

	"github.com/labstack/echo/v4"
)

type EarthquakeInfoForm struct {
	Epicenter PositionData `json:"epicenter,omitempty"`
	Ints      struct {
		Int1  []PositionData `json:"int1,omitempty"`
		Int2  []PositionData `json:"int2,omitempty"`
		Int3  []PositionData `json:"int3,omitempty"`
		Int4  []PositionData `json:"int4,omitempty"`
		Int5l []PositionData `json:"int5l,omitempty"`
		Int5u []PositionData `json:"int5u,omitempty"`
		Int6l []PositionData `json:"int6l,omitempty"`
		Int6u []PositionData `json:"int6u,omitempty"`
		Int7  []PositionData `json:"int7,omitempty"`
	} `json:"ints"`
	CommonData
}

func (h *Handler) EarthquakeInfoHandler(c echo.Context) error {
	rowDate := c.QueryParam("data")
	if rowDate == "" {
		return echo.NewHTTPError(http.StatusBadRequest, "data param is not defined")
	}

	data := new(EarthquakeInfoForm)
	if err := json.Unmarshal([]byte(rowDate), data); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, err)
	}

	return c.Render(http.StatusOK, "earthquake_info.html", data)
}
