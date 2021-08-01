import { NextFunction, Request, Response } from 'express'

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

  register(){
    return{
      text: `User registered`
    }
  }

  logIn(){
    return{
      text: `User logged in`
    }
  }

  defaultMethod() {
    return{
      text: `You've reached the ${this.constructor.name} default method`
    };
  }
}
  
export = new Users();
