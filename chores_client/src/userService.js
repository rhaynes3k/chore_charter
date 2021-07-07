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
      }
      userList()
      makeTable()
    })
  }

  addUser() {
    let user = {
      fName: document.getElementById('fname').value,
      lName: document.getElementById('lname').value,
      age: document.getElementById('age').value
    }
    console.log(user)
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
      userList()
      location.reload()
    })

  }

  delUser(user) {
    alert('Are you sure?')
    return fetch(`${this.endpoint}/users/${user}`,
    {
    method: 'DELETE'
    })
    .then(response => response.json())
    .then(location.reload())
  }

}
