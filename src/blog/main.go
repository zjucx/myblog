package main

import (
	_ "blog/routers"
	"github.com/astaxie/beego"
	"blog/models"
)

func main() {
	beego.SetStaticPath("/public", "public")
	beego.SetStaticPath("/dist", "views/dist")

	connStr, _ := beego.AppConfig.Int("mgoconnstr")
	dbName, _ := beego.AppConfig.Int("dbname")

	session := InitDB(mgoconnstr, dbname)
	defer session.Close()
	// beego.ViewsPath = "public"
	beego.Run()
}
