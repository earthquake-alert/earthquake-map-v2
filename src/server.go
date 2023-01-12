package src

import (
	"log"
	"net/http"
	"text/template"
	"time"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"go.uber.org/zap"
	"golang.org/x/net/http2"
)

type CommonData struct {
	Date  time.Time `json:"date"`
	Title string    `json:"title"`
}
type PositionData struct {
	Lat float64 `json:"lat"`
	Lon float64 `json:"lon"`
}

func Server() {
	e := echo.New()

	// テンプレート設定
	t := &Template{
		templates: template.Must(template.New("templates").Funcs(Funcmap).ParseGlob("templates/*.html")),
	}
	e.Renderer = t
	e.IPExtractor = echo.ExtractIPFromXFFHeader()

	// ログを出す
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
	// `/public`を静的ファイルとして配信する
	e.Use(middleware.Static("public"))

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
	// e.POST("/earthquake_report", h.EarthquakeReportHandler)
	// e.POST("/tsunami", h.TsunamiHandler)
}
