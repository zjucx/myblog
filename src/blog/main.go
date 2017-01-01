package main

import (
	_ "blog/routers"
	"github.com/astaxie/beego"
	"blog/models"
)

func main() {
	beego.SetStaticPath("/public", "public")
	beego.SetStaticPath("/dist", "views/dist")

	connStr := beego.AppConfig.String("mgoconnstr")
	dbName := beego.AppConfig.String("dbname")

	session := models.InitDB(connStr, dbName)
	defer session.Close()
	// beego.ViewsPath = "public"
	beego.Run()
}
