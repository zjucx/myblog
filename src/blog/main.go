package main

import (
	_ "blog/routers"
	"github.com/astaxie/beego"
)

func main() {
	beego.SetStaticPath("/public", "public")
	beego.SetStaticPath("/dist", "views/dist")
	// beego.ViewsPath = "public"
	beego.Run()
}
