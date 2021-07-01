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
        console.log(c)
        c.domDisplay()
        }

    })
  }
}
