class Color {
  static all = []

  constructor({id, colorPic}){
    this.id = id
    this.selcolor = color

    Color.all.push(this)
    }

}
console.log(Color.all)

let selCol = document.getElementById('sel-color')
selCol.addEventListener('change', ()=>{
  console.log(selCol.value)
  colorService.addColor(selCol.value)
})
