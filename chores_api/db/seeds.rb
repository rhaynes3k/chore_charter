# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create([
  {fName: 'Angelica', lName: 'Hayn', age: '32'},
  {fName: 'Rom', lName: 'Hayn', age: '28'},
  {fName: 'Pootie-Pop', lName: 'Hayn', age: '15'},
  {fName: 'Ju-Ju', lName: 'Hayn', age: '12'}
  ])

Chore.create([
  {choreName: 'sweep', choreDOW: 'tuesday', user_id: 1},
  {choreName: 'vacuum', choreDOW: 'wedneday', user_id: 2},
  {choreName: 'sweep', choreDOW: 'tuesday', user_id: 1},
  {choreName: 'bathroom1', choreDOW: 'sunday', user_id: 3},
  {choreName: 'trash', choreDOW: 'tuesday', user_id: 3},
  {choreName: 'trash', choreDOW: 'tuesday', user_id: 4}
  ])
