//puedes tener uno solo o varios depende del tamaño de tu app

import { CLOSE_MODAL, 
        OPEN_MODAL,
        SEARCH_ENTITIES,
        SEARCH_ASYNC_ENTITIES, 
        IS_LOADING} 
from '../action-types/index'


//funcion que regresa una accion
export function openModal(mediaId){
    return {
        type: OPEN_MODAL,
        payload: {
          mediaId
        }
    }
}

export function closeModal(){
    return {
        type: CLOSE_MODAL
    }
}

export function searchEntities(query){
    return {
        type: SEARCH_ENTITIES,
        payload: {
            query
          }
    }
}

export function isLoading(value){
    return {
        type: IS_LOADING,
        payload:{
            value
        }
    }
}

//usando redux thunk
export function searchAsyncEntities(query){
    return (dispatch) =>{
        // fetch().then(()=>{})
        // XHR
        // trae
        dispatch(isLoading(true))

        setTimeout(()=>{
            dispatch(isLoading(false))
            dispatch(searchEntities(query))
        }, 5000)
    }
    
    
}