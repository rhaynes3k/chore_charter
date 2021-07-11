class Color {
  static all = []

  constructor({id, colorPic}){
    this.id = id
    this.colorPic = colorPic

    Color.all.push(this)
    }
}
console.log(Color.all)
console.log(this.id)

let selCol = document.getElementById('sel-color')
selCol.addEventListener('change', ()=>{
  console.log(selCol.value)
  colorService.addColor(selCol.value)
})
