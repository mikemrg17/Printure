import { IItem } from '@/interfaces/item'
import axios from 'axios'
import store from '..'

interface IState {
    loading: boolean,
    itemsArray: IItem[] | null
}

const items = {
    namespaced: true as true,
    state: {
        loading: false,
        itemsArray: []
    } as IState,
    actions: {
        async fetchItems(){
            try {
                const { data: items } = await axios.get("http://localhost:5000/api/items")
                store.commit.items.setItems(items)
            } catch (error) {
                console.error(`Error fetching items: ${error}`)
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
