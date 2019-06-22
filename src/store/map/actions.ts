import {ADD_MARKER, CLEAR_MARKER_LIST, MarkerAction, SimpleMarker} from "../../constants/actionTypes";

export function setMarker(coords: SimpleMarker): MarkerAction {
    console.log('test action:', coords.id + ' ' + coords.coordinates.lat+' '+coords.coordinates.lng);
    return {
        type: ADD_MARKER,
        marker: {
            id: coords.id,
            coordinates: {
                lat: coords.coordinates.lat,
                lng: coords.coordinates.lng
            }
        }
    }
}

export function clearMarkers(){
    return {
        type: CLEAR_MARKER_LIST,
        marker: undefined
    };
}
