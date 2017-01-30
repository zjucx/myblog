package routers

import (
	"blog/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.MainController{})
		beego.Router("article/saveArticle", &controllers.ArticleController{})
		beego.Router("article/getArticle/:id", &controllers.ArticleController{}, "get:GetArticle")
		beego.Router("article/getArticles", &controllers.ArticleController{}, "get:GetArticles")
}
