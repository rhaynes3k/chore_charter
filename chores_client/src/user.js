class User {
  // remember objects
  static all = []

constructor(id, fName, lName, age, chores){
  this.id = id
  this.fName = fName
  this.lName = lName
  this.age = age
  this.chores = chores
  
  User.all.push(this)
  }


}
