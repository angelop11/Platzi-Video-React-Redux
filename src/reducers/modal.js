import { fromJS } from 'immutable'
import { OPEN_MODAL, CLOSE_MODAL } from '../action-types/index'


const initialState = fromJS({
    visibility: false,
    mediaId: null
})


//forma de darle un estado inicial con eccma scfript 6
// function modal(state = {visibility: false, mediaId: null}, action){
function modal(state = initialState, action){
    switch(action.type){
        case OPEN_MODAL:
            return state.merge({
                visibility: true,
                mediaId: action.payload.mediaId
            })
        case CLOSE_MODAL:
            return state.set('visibility', false)
        default:
            return state
    }

}

export default modal