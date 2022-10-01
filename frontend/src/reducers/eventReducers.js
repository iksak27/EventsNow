import { EVENT_LIST_REQUEST, EVENT_LIST_SUCCESS, EVENT_LIST_FAIL, EVENT_DETAILS_SUCCESS, EVENT_DETAILS_FAIL, EVENT_DETAILS_REQUEST } from '../constants/eventConstants';

export const eventListReducer = (state = {events: []}, action)  => {
    switch(action.type){
        case EVENT_LIST_REQUEST: {
            return {loading: true, events:[]}
        }
        case EVENT_LIST_SUCCESS: {
            return {loading: false, events: action.payload}
        }
        case EVENT_LIST_FAIL: {
            return {loading: false, error: action.payload}
        }
        default:
            return state
    }
}

export const eventDetailsReducer = (
    state = { product: { reviews: [] } },
    action ) => {
        switch (action.type) {
            case EVENT_DETAILS_REQUEST:
                return {loading: true, ...state }
            case EVENT_DETAILS_SUCCESS:
                return { loading: false, product: action.payload }
            case EVENT_DETAILS_FAIL:
                return { loading: false, error: action.payload }
            default:
                return state
        }
    }