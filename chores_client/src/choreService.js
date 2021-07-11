let choreUi = document.createElement('ul')

class ChoreService{
  constructor(endpoint){
    this.endpoint = endpoint
  }


  getChores(){
    fetch(`${this.endpoint}/chores`)
    .then(resp => resp.json())
    .then(chores => {
      for(const chore of chores){
        let c = new Chore(chore)
        // console.log(c)
        c.domDisplay()
        }

    })
  }


addChore() {
  let chore = {
    choreName: document.getElementById('chore').value,
    choreDOW: document.getElementById('dow').value,
    user_id: document.getElementById('chr-user').value
  }
  fetch(`${this.endpoint}/chores`,
  {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  Accept: 'application/json'
    },
  body: JSON.stringify(chore)
  })
  .then(response => response.json())
  .then(result => {
    console.log(Object.values(result).length)
    console.log(result)
    if(Object.values(result).length < 4){
      Object.values(result).forEach(e =>{
       alert(e)
       console.log(e)
      })
    }
  location.reload()
  })
  .catch((error) => {
  console.error('Error:', error);
  })
}
}
