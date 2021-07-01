const base_url = 'http://127.0.0.1:3000'
const choreService = new ChoreService(base_url)
const userService = new UserService(base_url)

choreService.getChores()
// userService.getUsers()
// userService.getUser()
