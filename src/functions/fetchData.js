import axios from 'axios';
const url = 'https://winndie.github.io/data/todo.json'

export async function fetchData(set){
    try{
        const result = await axios.get(url)
        set(result.data)   
    }catch(err){
        set([])
    }
}