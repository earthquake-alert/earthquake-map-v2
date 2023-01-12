package src

import (
	"log"
	"net/http"
	"time"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"go.uber.org/zap"
	"golang.org/x/net/http2"
)

func Server() {
	e := echo.New()
	e.IPExtractor = echo.ExtractIPFromXFFHeader()

	e.Use(middleware.RequestLoggerWithConfig(middleware.RequestLoggerConfig{
		LogURI:    true,
		LogStatus: true,
		LogMethod: true,
		LogHost:   true,
		LogError:  true,

		LogValuesFunc: func(c echo.Context, v middleware.RequestLoggerValues) error {
			if v.Error != nil {
				Logger.Error("request",
					zap.String("URI", v.URI),
					zap.Int("status", v.Status),
					zap.String("host", v.Host),
					zap.String("response_time", time.Since(v.StartTime).String()),
					zap.String("error_message", v.Error.Error()),
				)
			} else {
				Logger.Info("request",
					zap.String("URI", v.URI),
					zap.String("method", v.Method),
					zap.Int("status", v.Status),
					zap.String("host", v.Host),
					zap.String("response_time", time.Since(v.StartTime).String()),
				)
			}

			return nil
		},
	}))

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

	e.GET("/image", h.EarthquakeIcon)
}
