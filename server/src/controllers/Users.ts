import { NextFunction, Request, Response } from 'express'
import bcryptjs from 'bcryptjs'

class Users {
  users = [
    {
      username: "mikemrg17",
      password: "password"
    },
    {
      username: "rub_mrg17",
      password: "key"
    },
    {
      username: "sky_mrg17",
      password: "keypass"
    }
  ]

  validate(){
    return{
      text: `User validated`
    }
  }

  getAll(){
    return{
      text: `All users`
    }
  }

  register(username: string, password: string){
    return{
      text: `User registered`
    }
  }

  logIn(username: string, password: string){
    //We go through the array to find the username and the password
    let userReceived = {username, password}
    for(let user of this.users){
      if(user.username.localeCompare(userReceived.username) != -1 && user.password.localeCompare(userReceived.password) != -1){
        return 0
      }else{
        return 1
      }
    }
  }

  defaultMethod() {
    return{
      text: `You've reached the ${this.constructor.name} default method`
    };
  }
}
  
export = new Users();
