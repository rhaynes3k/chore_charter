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
      colorService.getColor()

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
    .then(result => {
      if(Object.values(result).length < 4){
        Object.values(result).forEach(e =>{
         alert(e)
         console.log(e)
        })
      }
      location.reload()
    })
    .catch((error) => {
//      console.error('Error:', error);
    })

  }

  delUser(user) {
    if (confirm('Are you sure you want to delte this user?')== true){
    return fetch(`${this.endpoint}/users/${user}`,
      {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(location.reload())
    } else {
        alert("Deletion Cancelled")
    }
  }

}
