package main

import (
	_ "blog/routers"
	"github.com/astaxie/beego"
)

func main() {
	beego.SetStaticPath("/public", "public")
	beego.Run()
}
