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
        // let choreLi = document.createElement('li')
        // for(const chr of Chore.all){
        //   let newChore = new Chore(chr)
        // choreLi.append(c.choreName)
        // choreLi.append(c.choreDOW)
        //   choreLi.append(c.user)
        //   choreUi.append(choreLi)
          // console.log(choreLi)
          // let chore_spot = document.getElementById('chore_table_container')
          // chore_spot.append(choreUi)
          // console.log(chore_spot)
        }

    })
  }
}
