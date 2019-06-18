export const ADD_USER_NAME = 'ADD_USER_NAME';
export const ADD_PASSWORD = 'ADD_PASSWORD';
export const ADD_MARKER = 'ADD_MARKER';
export const CLEAR_MARKER_LIST = 'CLEAR_MARKER_LIST';
export const LOGIN_USER = 'LOGIN_USER';

interface AddUserNameAction {
    type: typeof ADD_USER_NAME
    payload: string
}

interface AddPasswordAction {
    type: typeof ADD_PASSWORD
    payload: string
}

interface LoginUser{
    type: typeof LOGIN_USER
    logged: boolean
}

export type UserLoginAction = AddUserNameAction | AddPasswordAction | LoginUser;

export interface SimpleMarker {
    lat: number,
    lng: number
}

export interface MarkersState {
    markers: SimpleMarker[]
}

interface AddMarker {
    type: typeof ADD_MARKER
    marker: SimpleMarker
}

interface ClearMarkerList{
    type: typeof CLEAR_MARKER_LIST
}

export type MarkerAction = AddMarker | ClearMarkerList;
