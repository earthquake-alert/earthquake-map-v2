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
}
