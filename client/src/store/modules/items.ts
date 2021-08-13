import { IItem } from '@/interfaces/item'
import axios from 'axios'
import store from '..'

interface IState {
    loading: boolean,
    itemsArray: IItem[] | null
}

const API_BASE_URL = 'http://localhost:3000'

const items = {
    namespaced: true as true,
    state: {
        loading: false,
        itemsArray: []
    } as IState,
    actions: {
        async fetchItems(){
            try {
                const { data: items } = await axios.get(`${API_BASE_URL}/api/items`)
                store.commit.items.setItems(items)
            } catch (error) {
                console.error(`Error fetching items: ${error}`)
            }
        },
        async addItem(...newItem:any){
            try {
                const { data: items } = await axios.post(`${API_BASE_URL}/api/items`, newItem[1])
                store.commit.items.setItems(items)
            } catch (error) {
                console.error(`Error adding item: ${error}`)
            }
        },
        async deleteItem(...id:any){
            try {
                //console.log(id[1])
                const { data: items } = await axios.delete(`${API_BASE_URL}/api/items/${id[1]}`)
                store.commit.items.setItems(items)
            } catch (error) {
                console.error(`Error deleting item: ${error}`)
            }
        },
        async editItem(...item:any){
            try {
                //console.log(`Item received ${item[1]}`)
                const { data: items } = await axios.put(`${API_BASE_URL}/api/items/${item[1].id}`, item[1])
                store.commit.items.setItems(items)
            } catch (error) {
                console.error(`Error editing item: ${error}`)
            }
        }
    },
    mutations:{
        setItems(state: IState, items: IItem[] | null){
            state.itemsArray = items
        }
    }
}

export default items

