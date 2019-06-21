import {ADD_MARKER, CLEAR_MARKER_LIST, MarkerAction, MarkersState} from "../../constants/actionTypes";

const initialState: MarkersState = {
    markers: [{
        id: 1,
        coordinates: {
            lat: 46.446904,
            lng: 30.749284
        }
    }]
}

export default function markers(state = initialState, action: MarkerAction): MarkersState {
    switch(action.type) {
        case ADD_MARKER:
            return {
                markers: [...state.markers, action.marker]
            };
        case CLEAR_MARKER_LIST:
            console.log('CLEAR_MARKER_LIST', markers)
            return initialState;

        default:
            return state
    }
}
