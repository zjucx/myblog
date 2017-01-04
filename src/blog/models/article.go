package models

import (
  "strings"
  "fmt"
  "time"
	"gopkg.in/mgo.v2/bson"
)

type Article struct {
  Id             bson.ObjectId `bson:"_id"`
	Author         string        `json:"author"`
	Title          string        `json:"title"`
	Text           string        `json:"article"`
	Tags           []string      `json:"tags"`
  // Category       string     `json:"id_sensor"`
	// FeaturedPicURL string     `json:"id_sensor"`
	Comments       []*Comment    `json:"comments"`
  Summary        string        `json:"summary"`
  Likes          int           `json:"likes"`
  CComments      int           `json:"ccomments"`
	CreatedTime    string        `json:"createdtime"`
	ModifiedTime   string        `json:"modifiedtime"`
}

type SArticle struct {
  Id             bson.ObjectId `bson:"_id"`
	Author         string        `json:"author"`
	Title          string        `json:"title"`
  Tags           []string      `json:"tags"`
  Likes          int           `json:"likes"`
  CComments      int           `json:"ccomments"`
  Summary        string        `json:"summary"`
	CreatedTime    string        `json:"createdtime"`
}

func InsertArticle(article *Article) (string, error) {
  timestamp := time.Now().Unix()
  article.Id = bson.NewObjectId()
  article.CreatedTime = time.Unix(timestamp, 0).Format("2006-01-02 03:04:05 PM")
  article.Summary = generateSum(article.Text)
  fmt.Println("article.Title: " + article.Title)

  if article.Text == "" || article.Title == "" {
    return "", nil
  }
  c := DB.C("article")
  err := c.Insert(article)
  return "", err
  // return err
}

func QueryArticles(topN int) (error, []SArticle){
  //*****查询多条数据*******
  var articles []SArticle   //存放结果
  c := DB.C("article")
  fmt.Println("-==================1")
  iter := c.Find(nil).Limit(topN).Iter()
  err := iter.All(&articles)
  fmt.Println("-==================2")
  if err != nil {
      return err, nil
  }
  return nil, articles
}

func QueryArticleById(id string) (error, Article){
  // id := "5204af979955496907000001"
  objectId := bson.ObjectIdHex(id)
  var article Article
  c := DB.C("article")
  err := c.Find(bson.M{"_id": objectId}).One(&article)
  fmt.Println(article)
  if err != nil {
      return err, article
  }
  return nil, article
}

func QueryArticleByTag(tag string) (error, *[]SArticle){
  // id := "5204af979955496907000001"
  // objectId := bson.ObjectIdHex(id)
  //*****查询多条数据*******
  articles := new([]SArticle)  //存放结果
  c := DB.C("article")
  iter := c.Find(bson.M{"tags": tag}).Iter()
  err := iter.All(&articles)
  if err != nil {
      return err, nil
  }
  return nil, articles
}

func generateSum(article string) string {
  str := strings.Split(article, "<----summary---->")
  fmt.Println(str[0])
  return str[0]
}
