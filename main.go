package main

import "github.com/earthquake-alert/earthquake-map-v2/src"

var mode = "local"

func init() {
	src.InitLogging(mode)
}

func main() {
	src.Server()
}
