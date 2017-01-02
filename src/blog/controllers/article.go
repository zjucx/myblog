package controllers

import (
	"fmt"

	"github.com/astaxie/beego"
  "encoding/json"
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
	article := &models.Article{}
  json.Unmarshal(c.Ctx.Input.RequestBody, article)

  objectid, err := models.InsertArticle(article)
	if err != nil {
		c.Data["json"] = "{\"Insert Err\":\"" + err.Error() + "\"}"
	} else {
	  c.Data["json"] = "{\"ObjectId\":\"" + objectid + "\"}"
	}
	this.Ctx.Redirect(302, "/admin/index")
  // c.ServeJson()
}
