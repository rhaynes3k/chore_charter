class ColorService{
  constructor(endpoint){
    this.endpoint = endpoint
  }
  getColor(){
    console.log("I've been HIT!!!")
    fetch(`${this.endpoint}/colors`)
    .then(response => response.json())
    .then(result =>{
      console.log(result[result.length-1].colorPic)
      let permColor = result[result.length-1].colorPic
      // let newColor = new Color(colorPic)
      for(var c=0;c<chart.length;c++){
        chart[c].style.backgroundColor = permColor
      }
      for(var c=0;c<chartHead.length;c++){
        chartHead[c].style.backgroundColor = permColor
      }
        panel.style.background = permColor
    })
  }

  addColor() {
    console.log("HIT ME!!")
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
      console.log("I'm back baby!!!")
      console.log(result.colorPic)
      colorService.getColor()
    })
    .catch((error) => {
    console.log('Error:', error);
    })
  }


}
