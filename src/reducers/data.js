import schema from '../schema/index'
import { fromJS } from 'immutable'
import { SEARCH_ENTITIES } from '../action-types/index'


const initialState = fromJS({
    entities: schema.entities,
    categories: schema.result.categories,
    search: ''
})

function data(state =initialState, action){
    switch(action.type){
        case SEARCH_ENTITIES:
        //action.payload.query
            // let list = []
            // if(action.payload.query){
            //     state.data.categories.map( (category) =>{
            //         return category.playlist.filter( (item) =>{
            //             return item.author.toLowerCase().includes(action.payload.query.toLowerCase()) 
            //                     && list.push(item)
            //         })
            //     })
            // }
            // return {
            //     ...state,
            //     search: list
            // }
            return state.set('search', action.payload.query)
        default:
            return state
    }
}

export default data