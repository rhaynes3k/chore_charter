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
        // console.log(userNew.id)

//debugger
        makeTable(userNew.id)
        userList()
      }

    })
  }


  addUser() {
    let user = {
      fName: document.getElementById('fname').value,
      lName: document.getElementById('lname').value,
      age: document.getElementById('age').value
    }

    fetch(`${this.endpoint}/users`,
    {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    Accept: 'application/json'
      },
    body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)

    })
    .catch(function(error) {
      alert("WHOA!");
    })
  }

  addChore() {
    let chore = {
      choreName: document.getElementById('chore').value,
      choreDOW: document.getElementById('dow').value,
      user_id: document.getElementById('chr-user').value
    }
    fetch(`${this.endpoint}/chores`,
    {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    Accept: 'application/json'
      },
    body: JSON.stringify(chore)
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
      makeTable(response)
    })
    .catch(function(error) {
      alert("WHOA!");
    })
  }

}
