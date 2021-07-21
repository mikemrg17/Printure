class Items {

    items = [
        {
          id: 1, 
          photo: 'https://random.imagecdn.app/200/200',
          name: "Item1",
          description: "description of item 1",
          owner: "Miguel" 
        },
        {
            id: 2, 
            photo: 'https://random.imagecdn.app/200/200',
            name: "Item2",
            description: "description of item 2",
            owner: "Ruben" 
        },
        {
            id: 3, 
            photo: 'https://random.imagecdn.app/200/200',
            name: "Item3",
            description: "description of item 3",
            owner: "Eva" 
        },
        {
            id: 4, 
            photo: 'https://random.imagecdn.app/200/200',
            name: "Item4",
            description: "description of item 4",
            owner: "Sam" 
        },
        {
            id: 5, 
            photo: 'https://random.imagecdn.app/200/200',
            name: "Item5",
            description: "description of item 5",
            owner: "Miguel" 
        },
        {
            id: 6, 
            photo: 'https://random.imagecdn.app/200/200',
            name: "Item6",
            description: "description of item 6",
            owner: "Angel" 
        },
        {
            id: 7, 
            photo: 'https://random.imagecdn.app/200/200',
            name: "Item7",
            description: "description of item 7",
            owner: "Samantha" 
        },
        {
            id: 8, 
            photo: 'https://random.imagecdn.app/200/200',
            name: "Item8",
            description: "description of Item 8",
            owner: "Miguel" 
        },
        {
            id: 9, 
            photo: 'https://random.imagecdn.app/200/200',
            name: "Item9",
            description: "description of item 9",
            owner: "Miguel" 
        },
        {
            id: 10, 
            photo: 'https://random.imagecdn.app/200/200',
            name: "Item10",
            description: "description of item 10",
            owner: "Ruben" 
        },
        {
            id: 11, 
            photo: 'https://random.imagecdn.app/200/200',
            name: "Item11",
            description: "description of item 11",
            owner: "Eva" 
        },
        {
            id: 12, 
            photo: 'https://random.imagecdn.app/200/200',
            name: "Item12",
            description: "description of item 12",
            owner: "Sam" 
        },
        {
            id: 13, 
            photo: 'https://random.imagecdn.app/200/200',
            name: "Item13",
            description: "description of item 13",
            owner: "Miguel" 
        },
        {
            id: 14, 
            photo: 'https://random.imagecdn.app/200/200',
            name: "Item14",
            description: "description of item 14",
            owner: "Angel" 
        },
        {
            id: 15, 
            photo: 'https://random.imagecdn.app/200/200',
            name: "Item15",
            description: "description of item 15",
            owner: "Samantha" 
        },
        {
            id: 16, 
            photo: 'https://random.imagecdn.app/200/200',
            name: "Item16",
            description: "description of item 16",
            owner: "Miguel" 
        }
      ]


    defaultMethod() {
      return this.items 
    }

    /*addItem(item:any){
        this.items.push(item)
    }*/

    deleteItem(id:number){
        //console.log(`Delete item function executed with id: ${id} `)
        //Now we go through the array to find the object with the id  
        /*for(let i = 0; i < this.items.length; i++){
            if(id === this.items[i].id){
                console.log(`Finded id: ${id}`)
                break
            }
        }*/
        this.items = this.items.filter(item => item.id != id)
    }

    editItem(id:number,editedItem:any){
        //console.log(`Delete item function executed with id: ${id} `)
        //Now we go through the array to find the object with the id  
        /*for(let i = 0; i < this.items.length; i++){
            if(id === this.items[i].id){
                console.log(`Finded id: ${id}`)
                break
            }
        }*/
        this.items[editedItem.id -1] = editedItem
    }
  }
  
  export = new Items();