import { IUser } from '@/interfaces/user'
import axios from 'axios'
import store from '..'

interface IState {
    loading: boolean,
    user: IUser[] | null
}

const API_BASE_URL = 'http://localhost:3000'

const users = {
    namespaced: true as true,
    state: {
        loading: false,
        user: null,
    } as IState,
    actions: {
        async logIn(...session: any){
            try {
                const res = await axios.post(`${API_BASE_URL}/api/users/logIn`, session[1])
                const token = res['data'].token
                store.commit.users.setToken(token)
            } catch (error) {
                
            }
        }
    },
    mutations:{
        setToken(state: IState, token: string){
            window.localStorage.setItem('token', token)
        }
    }
}
export default users

