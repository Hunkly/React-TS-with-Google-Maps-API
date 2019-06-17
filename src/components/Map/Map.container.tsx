import {setMarker} from "../../store/map/actions";
import {GoogleMap, Marker, } from "react-google-maps";
import React from "react";
import store from '../../store/store';
import { SimpleMarker } from "../../constants/actionTypes";
//import {fetchHospitals} from './hospital';

// const google = (window as any).google;

interface IMapState {
    markerLat: any,
    markerLng: any
}

interface IMapProps{
    markersList:  SimpleMarker[]
}

export default class Map extends React.Component<IMapProps, IMapState>{
    constructor(props: any){
        super(props);
        this.state = {
            markerLat: 0,
            markerLng: 0
        };
        this.addMarker = this.addMarker.bind(this);
    }

    state = {
        markerLat: 0,
        markerLng: 0
    };

    addMarker(event: google.maps.MouseEvent){
        this.setState(
            {
                markerLat: event.latLng.lat(),
                markerLng: event.latLng.lng()
            }
        );
        store.dispatch(setMarker({lat: this.state.markerLat, lng: this.state.markerLng}));
    }



    render() {
        //const hospital = fetchHospitals( 46.446904, 30.749284);
        console.log('markersList', this.props.markersList);
        console.log('test',this.props.markersList);
        //console.log('HOSPITAL', hospital)
        return (
            <div id="map">
            <GoogleMap
                defaultZoom={14}
                defaultCenter={{lat: 46.446904, lng: 30.749284}}
                onClick={this.addMarker}
            >
                {this.props.markersList.map(coords =>
                    <Marker
                        position={{
                            lat: coords.lat,
                            lng: coords.lng
                        }}
                    />
                )}
            </GoogleMap>
            </div>
        )
    };
}


