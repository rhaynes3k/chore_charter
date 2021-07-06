const base_url = 'http://127.0.0.1:3000'
const choreService = new ChoreService(base_url)
const userService = new UserService(base_url)

window.addEventListener('DOMContentLoaded', (event) => {
  userService.getUsers()
  // choreService.getChores()
})
// userService.getUser()
function makeTable(users) {

  //debugger
  const tableBody = document.getElementById('data')
  let data = ''
  for(const user of User.all){
    console.log(user)
          user.id.chores.map(u =>{
            console.log(u)
            data +=  `
              <tr> <td> ${user.id.fName} </td> <td> ${u.choreName} </td> <td> ${user.id.chores[0].choreDOW} </td> </tr>
            `
    })




 }
  tableBody.innerHTML = data
}
let btnDiv = document.getElementById('btn-user')
let newUser = document.getElementById('new-user')
newUser.addEventListener('submit', ()=>{
  event.preventDefault()
  userService.addUser()
//  addUser()
})

let newChore = document.getElementById('chore-form')
newChore.addEventListener('submit', ()=>{
  event.preventDefault()
  console.log('chore me')
  userService.addChore()
//  addUser()
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
