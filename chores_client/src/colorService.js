class ColorService{
  constructor(endpoint){
    this.endpoint = endpoint
  }
  getColor(){
    console.log("I've been HIT!!!")
    fetch(`${this.endpoint}/colors`)
    .then(response => response.json())
    .then(result =>{
      let permColor = result[result.length-1].colorPic
      for(var ch=0;ch<chartHead.length;ch++){
        chartHead[ch].style.backgroundColor = permColor
      }
      for(var c=0;c<chart.length;c++){
        chart[c].style.backgroundColor = permColor
      }
        panel.style.background = permColor
    })
  }

  addColor() {
    let colorPic = {
      colorPic: document.getElementById('sel-color').value
    }
    console.log(colorPic)
    fetch(`${this.endpoint}/colors`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        Accept: 'application/json'
          },
        body: JSON.stringify(colorPic)
      })
        .then(response => response.json())
        .then(result => {
          colorService.getColor()
        })
        .catch((error) => {
        console.log('Error:', error);
        })
  }

}
