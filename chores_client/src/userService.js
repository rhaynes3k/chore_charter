class UserService{
  constructor(endpoint){
    this.endpoint = endpoint
  }
  getUsers(){
    fetch(`${this.endpoint}/users`)
    .then(resp => resp.json())
    .then(users => {
      console.log(users)
      for(const u of users){
        let uSer = new User(u)
        // console.log(uSer.id)
        let userLi = document.createElement('li')
        // for(const chr of Chore.all){
        //   let newChore = new Chore(chr)
        userLi.append(uSer.id.fName)
        userLi.append(uSer.id.lName)
        userLi.append(uSer.id.chores[0].choreName)
        userLi.append(uSer.id.chores[0].choreDOW)
          // userUi.append(userLi)
          // console.log(userLi)
          let user_spot = document.getElementById('user_table_container')
          user_spot.append(userLi)
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
