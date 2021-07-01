class Chore {
  // remember objects
  static all = []
  static chore_container = document.getElementById('chore_table_container')
constructor({id, choreName, choreDOW, user}){
  this.id = id
  this.choreName = choreName
  this.choreDOW = choreDOW
  this.userf = user.fName
  this.userl = user.lName

  this.li = document.createElement('li')
  this.li.id = this.id

  Chore.all.push(this)
  }

  choreData(){
    this.li.innerHTML += `
      <div>
        <h3> ${this.userf} ${this.userl}</h3>
        <p>
          <h4> ${this.choreName} </h4>
          <h5> ${this.choreDOW} </h5>
        </p>
      </div>
    `
    return this.li
  }

  domDisplay(){
    Chore.chore_container.append(this.choreData())
  }


}
