import { NextFunction, Request, Response } from 'express'
import bcryptjs from 'bcryptjs'

class Users {
  users = [
    {
      username: "mike_mrg17",
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
    bcryptjs.hash(password, 10, (hashError, hash) => {
      if(hashError){
        return hashError
      }

      this.users.push({username, password})

    })

    return{
      text: `User registered`
    }
  }

  logIn(username: string, password: string){
    const found = this.users.find(user => user == {username,password})
    return{
      text: `User logged in ${found}`
    }
  }

  defaultMethod() {
    return{
      text: `You've reached the ${this.constructor.name} default method`
    };
  }
}
  
export = new Users();
