const base_url = 'http://127.0.0.1:3000'
const choreService = new ChoreService(base_url)
const colorService = new ColorService(base_url)
const userService = new UserService(base_url)
const chart = document.getElementsByTagName('TD')
const chartHead = document.getElementsByTagName('TH')
const panel = document.getElementById('formatter')
const selColor = document.getElementById('sel-color')

window.addEventListener('DOMContentLoaded', (event) => {
  userService.getUsers()
  makeTable()
  userList()
  colorService.getColor()
})

function makeTable(users) {
  const tableBody = document.getElementById('data')
  let data = ''
  for(const user of User.all){
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
})

function userList() {
  User.all.forEach(u =>{
    let opt = document.createElement('option')
    opt.id = u.id.id
    opt.innerHTML = u.id.fName
    opt.value = u.id.id
    let selForm = document.getElementById('chr-user')
    selForm.prepend(opt)
    selForm.selectedIndex = selForm.length.fName
    console.log(selForm.selectedIndex)
  })
}

(function chartColor() {
  let colors =
    [
      "AliceBlue",
      "AntiqueWhite",
      "Aqua",
      "Aquamarine",
      "Azure",
      "Beige",
      "Bisque",
      "Black",
      "BlanchedAlmond",
      "Blue",
      "BlueViolet",
      "Brown",
      "BurlyWood",
      "CadetBlue",
      "Chartreuse",
      "Chocolate",
      "Coral",
      "CornflowerBlue",
      "Cornsilk",
      "Crimson",
      "Cyan",
      "DarkBlue",
      "DarkCyan",
      "DarkGoldenRod",
      "DarkGray",
      "DarkGreen",
      "DarkKhaki",
      "DarkMagenta",
      "DarkOliveGreen",
      "DarkOrange",
      "DarkOrchid",
      "DarkRed",
      "DarkSalmon",
      "DarkSeaGreen",
      "DarkSlateBlue",
      "DarkSlateGray",
      "DarkTurquoise",
      "DarkViolet",
      "DeepPink",
      "DeepSkyBlue",
      "DimGray",
      "DodgerBlue",
      "FireBrick",
      "FloralWhite",
      "ForestGreen",
      "Fuchsia",
      "Gainsboro",
      "GhostWhite",
      "Gold",
      "GoldenRod",
      "Gray",
      "Green",
      "GreenYellow",
      "HoneyDew",
      "HotPink",
      "IndianRed",
      "Indigo",
      "Ivory",
      "Khaki",
      "Lavender",
      "LavenderBlush",
      "LawnGreen",
      "LemonChiffon",
      "LightBlue",
      "LightCoral",
      "LightCyan",
      "LightGoldenRodYellow",
      "LightGray",
      "LightGreen",
      "LightPink",
      "LightSalmon",
      "LightSeaGreen",
      "LightSkyBlue",
      "LightSlateGray",
      "LightSteelBlue",
      "LightYellow",
      "Lime",
      "LimeGreen",
      "Linen",
      "Magenta",
      "Maroon",
      "MediumAquaMarine",
      "MediumBlue",
      "MediumOrchid",
      "MediumPurple",
      "MediumSeaGreen",
      "MediumSlateBlue",
      "MediumSpringGreen",
      "MediumTurquoise",
      "MediumVioletRed",
      "MidnightBlue",
      "MintCream",
      "MistyRose",
      "Moccasin",
      "NavajoWhite",
      "Navy",
      "OldLace",
      "Olive",
      "OliveDrab",
      "Orange",
      "OrangeRed",
      "Orchid",
      "PaleGoldenRod",
      "PaleGreen",
      "PaleTurquoise",
      "PaleVioletRed",
      "PapayaWhip",
      "PeachPuff",
      "Peru",
      "Pink",
      "Plum",
      "PowderBlue",
      "Purple",
      "RebeccaPurple",
      "Red",
      "RosyBrown",
      "RoyalBlue",
      "SaddleBrown",
      "Salmon",
      "SandyBrown",
      "SeaGreen",
      "SeaShell",
      "Sienna",
      "Silver",
      "SkyBlue",
      "SlateBlue",
      "SlateGray",
      "Snow",
      "SpringGreen",
      "SteelBlue",
      "Tan",
      "Teal",
      "Thistle",
      "Tomato",
      "Turquoise",
      "Violet",
      "Wheat",
      "White",
      "WhiteSmoke",
      "Yellow",
      "YellowGreen",
    ]
    let selColor = document.getElementById('sel-color')
    colors.forEach(c =>{
    let colr = document.createElement('option')
    colr.id = c.count
    console.log(colors[10])
    colr.innerHTML = c
    colr.value = c
    selColor.append(colr)
    })
})()



      // console.log(this.selcolor)
