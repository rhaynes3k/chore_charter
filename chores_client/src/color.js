class Color {
  static all = []

}

let selCol = document.getElementById('sel-color')
selCol.addEventListener('change', ()=>{
  console.log(selCol.value)
  colorService.addColor(selCol.value)
})
