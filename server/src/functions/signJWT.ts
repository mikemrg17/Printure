import jwt from "jsonwebtoken";
import config from '../config/config'
import IUser from '../interfaces/user'

const NAMESPACE = 'Auth'

const signJWT = (user: IUser, callback:(error: Error | null, token: string | null) => void): void =>{
    var timeSinchEpoch = new Date().getTime()
    var expirationTime = timeSinchEpoch + Number(config.token.expiretime) * 100000
    var expirationTimeInSeconds = Math.floor(expirationTime / 1000)

    try {
        jwt.sign(
            {
                username: user.username
            },
            config.token.secret,
            {
                issuer: config.token.issuer,
                algorithm: 'HS256',
                expiresIn: expirationTimeInSeconds
            },
            (error, token) => {
                if(error){
                    callback(error, null)
                }else if(token){
                    callback(null, token)
                }
            }
            )
    } catch (error) {
        callback(error, null)
    }

}

export default signJWT
