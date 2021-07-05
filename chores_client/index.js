const base_url = 'http://127.0.0.1:3000'
const choreService = new ChoreService(base_url)
const userService = new UserService(base_url)

// choreService.getChores()
userService.getUsers()
// userService.getUser()
function makeTable(userData) {
  debugger
  const tableBody = document.getElementById('data')
  let data = ''
  for(const user of userData){


    data +=  `
      <tr> <td> ${user.fName} </td><td> ${user.choreName} </td><td> ${user.choreDOW} </td> </tr>
    `
    console.log(userNew)
  }
  tableBody.innerHTML = data
}
