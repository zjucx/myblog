package models

import (
  // "fmt"
  "gopkg.in/mgo.v2"
  // "gopkg.in/mgo.v2/bson"
)

var DB *mgo.Database

func InitDB(connStr, dbName string) *mgo.Session {
  session, err := mgo.Dial(connStr)
  if err != nil {
    panic(err)
  }
  //defer session.Close()

  // Optional. Switch the session to a monotonic behavior.
  session.SetMode(mgo.Monotonic, true)

  DB = session.DB(dbName)
  return session
}
