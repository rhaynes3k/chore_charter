class UserService{
  constructor(endpoint){
    this.endpoint = endpoint
  }
  getUsers(){
    fetch(`${this.endpoint}/users`)
    .then(resp => resp.json())
    .then(users => {

      for(const u of users){
        let userNew = new User(u)
        console.log(userNew)
        
//debugger
        userNew.domDisplay()
      }

    })
  }

  // getUser(){
  //   fetch(`${this.endpoint}/users/5`)
  //   .then(resp => resp.json())
  //   .then(users => {
  //     // console.log(users)
  //       let uSer = new User(users)
  //       console.log(uSer)
  //       let userLi = document.createElement('li')
  //       // for(const chr of Chore.all){
  //       //   let newChore = new Chore(chr)
  //       userLi.append(uSer.id.fName)
  //         userLi.append(uSer.id.lName)
  //         // userUi.append(userLi)
  //         // console.log(userLi)
  //         let user_spot = document.getElementById('user_table_container')
  //         user_spot.append(userLi)
  //   })
  // }

}
