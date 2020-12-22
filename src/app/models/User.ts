export class User {
  userId: number
  email: string
  password: string
  userName: string
  firstName: string
  lastName: string

  constructor(userId: number, email: string, password: string, userName: string, firstName: string, lastName: string) {
    this.userId = userId;
    this.email = email;
    this.password = password;
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}