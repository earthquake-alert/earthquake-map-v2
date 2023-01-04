package src

import (
	"net/url"

	"github.com/go-rod/rod"
	"github.com/go-rod/rod/lib/proto"
)

type GenerateConfig struct {
	URL    url.URL
	Width  int
	Height int
	Scale  float64
}

func Generate(b *rod.Browser, c GenerateConfig) ([]byte, error) {
	page := b.MustPage(c.URL.String()).MustSetViewport(c.Width, c.Height, 0, false).MustWaitLoad()
	return page.Screenshot(true, &proto.PageCaptureScreenshot{
		Format: proto.PageCaptureScreenshotFormatPng,
		Clip: &proto.PageViewport{
			X:      0,
			Y:      0,
			Width:  float64(c.Width),
			Height: float64(c.Height),
			Scale:  c.Scale,
		},
		CaptureBeyondViewport: true,
		OptimizeForSpeed:      true,
		FromSurface:           true,
	})
}
