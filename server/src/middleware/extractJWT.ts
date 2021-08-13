import { Router } from "express" 
import config from "../config/config"
import jwt from 'jsonwebtoken'

const extractJWT = Router()
extractJWT.use((req, res, next)=>{
    const token = req.headers['access-token']
    console.log(token)
    /*if(token){
        jwt.verify(token, config.key, (err, decoded)=>{
            if(err){
                return res.json({ mensaje: 'Unvalid token' })
            }else{
                (<any>req).decoded = decoded;    
                next();
            }
        })
    }else{
        res.send({ 
            mensaje: 'Token not found' 
        });
    }*/
})

export default extractJWT
