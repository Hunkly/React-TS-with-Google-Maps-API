import {ADD_MARKER, CLEAR_MARKER_LIST, MarkerAction, SimpleMarker} from "../../constants/actionTypes";

export function setMarker(coords: SimpleMarker): MarkerAction {
    console.log('test action:', coords.lat+' '+coords.lng);
    return {
        type: ADD_MARKER,
        marker: coords
    }
}

export function clearMarkers(){
    return {
        type: CLEAR_MARKER_LIST
    };
}
