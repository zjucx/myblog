package models

import (
  // "strings"
  "time"
	"gopkg.in/mgo.v2/bson"
)

type Article struct{
  Id_            bson.ObjectId `bson:"_id"`
	Author         string
	Title          string
	Text           string
	Tags           []string
  Category       string
	FeaturedPicURL string
	Summary        string
	Views          int
	Comments       []*Comment
	CreatedTime    string
	ModifiedTime   string
}

func (article *Article) CreateArticle() error {
  timestamp := time.Now().Unix()

  article.Id_ = bson.NewObjectId()
  article.CreatedTime = time.Unix(timestamp, 0).Format("2006-01-02 03:04:05 PM")
  c := DB.C("article")
  return c.Insert(article)
  // return err
}

type Comment struct {
	Name        string
	Author      string
	ArticleName string
	Email       string
	CreatedTime int64
  Text        string
}

// type Category struct {
// 	Id_         bson.ObjectId `bson:"_id"`
// 	Name        string
// 	Title       string
// 	Content     string
// 	CreatedTime time.Time
// 	UpdatedTime time.Time
// 	Views       int
// }
//
// func (category *Category) CreatCategory() error {
// 	//category.Id_ = bson.NewObjectId()
// 	c := DB.C("category")
// 	err := c.Insert(category)
// 	SetAppCategories()
// 	return err
// }
//
// func (category *Category) UpdateCategory() error {
// 	c := DB.C("category")
// 	err := c.UpdateId(category.Id_, category)
// 	SetAppCategories()
// 	return err
// }
