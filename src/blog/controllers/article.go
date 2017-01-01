package controllers

import (
	"github.com/astaxie/beego"

	"blog/models"
)

type ArticleController struct {
	beego.Controller
}

func (c *ArticleController) Get() {
	c.Data["Website"] = "beego.me"
	c.Data["Email"] = "astaxie@gmail.com"
	c.TplName = "index.html"
}

func (c *ArticleController) Post() {
	c.Data["Website"] = "beego.me"
	c.Data["Email"] = "astaxie@gmail.com"
	c.TplName = "index.html"
}
