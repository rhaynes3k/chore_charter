class ColorService{
  constructor(endpoint){
    this.endpoint = endpoint
  }
  getColor(){
    
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
      for(var c=0;c<chart.length;c++){
        chart[c].style.backgroundColor = result.colorPic
      }
      for(var c=0;c<chartHead.length;c++){
        chartHead[c].style.backgroundColor = result.colorPic
      }
        panel.style.background = result.colorPic

    })
    .catch((error) => {
    console.log('Error:', error);
    })
  }


}
