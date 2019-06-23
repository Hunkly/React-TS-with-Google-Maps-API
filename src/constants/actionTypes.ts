export const LOG_USER = 'LOG_USER';
export const ADD_MARKER = 'ADD_MARKER';
export const CLEAR_MARKER_LIST = 'CLEAR_MARKER_LIST';
export const REG_USER = 'REG_USER';

export interface User {
    userName: string,
    password: string,
    isLogged: boolean
}

export interface UsersState {
    users: User[]
}

interface LogUserAction {
    type: typeof LOG_USER
    user: User
}

interface RegUserAction {
    type: typeof REG_USER
    user: User
}

export type UserAction = LogUserAction | RegUserAction;

export interface SimpleMarker {
    id: number,
    coordinates: {
        lat: number,
        lng: number
    }
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
