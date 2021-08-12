import { IUser } from '@/interfaces/user'
import axios from 'axios'
import store from '..'

interface IState {
    loading: boolean,
    user: IUser[] | null
}

const users = {
    namespaced: true as true,
    state: {
        loading: false,
        user: null
    } as IState,
    actions: {
        /*async fetchItems(){
            try {
                const { data: items } = await axios.get("http://localhost:3000/api/items")
                store.commit.items.setItems(items)
            } catch (error) {
                console.error(`Error fetching items: ${error}`)
            }
        },
        async addItem(...newItem:any){
            try {
                const { data: items } = await axios.post(`http://localhost:3000/api/items`, newItem[1])
                store.commit.items.setItems(items)
            } catch (error) {
                console.error(`Error adding item: ${error}`)
            }
        },
        async deleteItem(...id:any){
            try {
                //console.log(id[1])
                const { data: items } = await axios.delete(`http://localhost:3000/api/items/${id[1]}`)
                store.commit.items.setItems(items)
            } catch (error) {
                console.error(`Error deleting item: ${error}`)
            }
        },
        async editItem(...item:any){
            try {
                //console.log(`Item received ${item[1]}`)
                const { data: items } = await axios.put(`http://localhost:3000/api/items/${item[1].id}`, item[1])
                store.commit.items.setItems(items)
            } catch (error) {
                console.error(`Error editing item: ${error}`)
            }
        }
    },
    mutations:{
        setItems(state: IState, items: IUser[] | null){
            state.itemsArray = items
        }*/
    }
}

export default users

