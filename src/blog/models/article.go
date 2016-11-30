package models

import (
  "strings"
  "time"
	"gopkg.in/mgo.v2/bson"
)

type struct Article {
  Id_            bson.ObjectId `bson:"_id"`
	Author         string
	Title          string
	Text           string
	Tags           []string
	FeaturedPicURL string
	Summary        string
	Views          int
	Comments       []*Comment
	CreatedTime    time.Time
	ModifiedTime   time.Time
}

type Comment struct {
	Name        string
	Author      string
	ArticleName string
	// IP          string
	Email       string
	// EmailHash   string
	CreatedTime int64
  Text        string
}

type Category struct {
	Id_         bson.ObjectId `bson:"_id"`
	Name        string
	Title       string
	Content     string
	CreatedTime time.Time
	UpdatedTime time.Time
	Views       int
	NodeTime    time.Time
	Nodes       []Node
}

func (category *Category) CreatCategory() error {
	//category.Id_ = bson.NewObjectId()
	c := DB.C("category")
	err := c.Insert(category)
	SetAppCategories()
	return err
}

func (category *Category) UpdateCategory() error {
	c := DB.C("category")
	err := c.UpdateId(category.Id_, category)
	SetAppCategories()
	return err
}
