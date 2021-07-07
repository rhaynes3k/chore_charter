class User {
  // remember objects
  static all = []
  static user_container = document.getElementById('user_table_container')
  static choreDiv = document.getElementById(`${this.id}-chores`)
  static tableObj = {}
constructor(id, fName, lName, age, chores){
  // debugger
  this.id = id
  this.fName = id.fName
  this.lName = id.lName
  this.age = age
  this.chores = id.chores

  this.li = document.createElement('li')
  this.li.id = this.id

  User.all.push(this)
  }
}

  //makeTable()
    // User.user_container.append(this.userData())
//}


// this.chores.forEach(c =>{
//   this.li.innerHTML += `
//   <h3> ${c.choreName} </h3>
//   <h5> ${c.choreDOW} </h5>
//   `
//   console.log (this.li)
// })
