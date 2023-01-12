package src

import (
	"log"
	"net/http"
	"time"

	"github.com/labstack/echo/v4"
	"golang.org/x/net/http2"
)

func Server() {
	e := echo.New()
	Router(e)

	s := &http2.Server{
		MaxConcurrentStreams: 250,
		MaxReadFrameSize:     1048576,
		IdleTimeout:          10 * time.Second,
	}
	if err := e.StartH2CServer(":8080", s); err != http.ErrServerClosed {
		log.Fatal(err)
	}
}

func Router(e *echo.Echo) {
	h := NewHandler()

	e.GET("/", h.RootHandler)

	e.GET("/earthquake_info", h.EarthquakeInfoHandler)
	e.GET("/earthquake_report", h.EarthquakeReportHandler)
	e.GET("/tsunami", h.TsunamiHandler)

	// JS配信用
	e.GET("/js/earthquake_info", h.EarthquakeInfoJsHandler)
	e.GET("/js/earthquake_report", h.EarthquakeReportJsHandler)
	e.GET("/js/tsunami", h.TsunamiJsHandler)

}
