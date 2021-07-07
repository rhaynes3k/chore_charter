const base_url = 'http://127.0.0.1:3000'
const choreService = new ChoreService(base_url)
const userService = new UserService(base_url)

window.addEventListener('DOMContentLoaded', (event) => {
  userService.getUsers()
  makeTable()
  userList()
})

function makeTable(users) {
  const tableBody = document.getElementById('data')
  let data = ''
  for(const user of User.all){
  console.log(user)
    data +=  `
      <tr>
        <td> <a href='#' onclick='userService.delUser(${user.id.id})'>${user.id.fName}</a> </td>
        <td> ${user.chores.map(u =>`${u.choreName}`)} </td>
        <td> ${user.chores.map(u =>`${u.choreDOW}`)} </td>
      </tr>
    `
 }
  tableBody.innerHTML = data
}

let newUser = document.getElementById('new-user')
newUser.addEventListener('submit', ()=>{
  event.preventDefault()
  userService.addUser()
})

let newChore = document.getElementById('chore-form')
newChore.addEventListener('submit', ()=>{
  event.preventDefault()
  console.log('chore me')
  choreService.addChore()
  makeTable()
  location.reload()
})

function userList() {
  User.all.forEach(u =>{
    let opt = document.createElement('option')
    opt.id = u.id.id
    opt.innerHTML = u.id.fName
    opt.value = u.id.id
    let selForm = document.getElementById('chr-user')
    selForm.append(opt)
  })
}
