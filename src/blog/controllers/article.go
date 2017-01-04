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
	fmt.Println("-==================")
	_, articles := models.QueryArticles(5)
	fmt.Println("-==================")
	fmt.Println(articles)
	c.Data["json"] = &articles
	c.ServeJSON()
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
	c.Ctx.Redirect(302, "/admin/index")
  // c.ServeJson()
}

func (c *ArticleController) GetArticles() {
	_, articles := models.QueryArticles(5)
	fmt.Println(articles)
	c.Data["json"] = &articles
	c.ServeJSON()
}

func (c *ArticleController) GetArticle() {
	fmt.Println("-==================")
	id := c.Ctx.Input.Param(":id")
	_, article := models.QueryArticleById(id)
	fmt.Println("-==================")
	fmt.Println(article)
	c.Data["json"] = &article
	c.ServeJSON()
}
