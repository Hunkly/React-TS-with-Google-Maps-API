import React from "react";
import store from '../../store/store';
import MapStyled from './Map.styled';
import { setMarker } from "../../store/map/actions";
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";
import { SimpleMarker } from "../../constants/actionTypes";
import { saveState } from "../../store/localStorage";
import {AppState} from "../../store/reducers";
import {connect} from "react-redux";

interface IMapState {
    coordinates: SimpleMarker
}

interface IMapProps{
    markerList: SimpleMarker[]
}

interface IWrappedMapState {
    savedMarkers: [],
    isShowed: boolean
}

interface IWrappedMapProps{
    markerList: SimpleMarker[]
}

export class Map extends React.Component<IMapProps, IMapState>{
    constructor(props: IMapProps){
        super(props);
        this.state = {
            coordinates: {
                lat: 0,
                lng: 0
            }
        };
        this.addMarker = this.addMarker.bind(this);
    }

    addMarker(event: google.maps.MouseEvent){
        this.setState(
            {
                coordinates: {
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng()
                }
            }
        );
        store.dispatch(setMarker({lat: this.state.coordinates.lat, lng: this.state.coordinates.lng}));
    }

    render() {
        console.log('markerList', this.props.markerList);
        console.log('test',this.props.markerList);
        return (
            <div>
                <GoogleMap
                    defaultZoom={14}
                    defaultCenter={{lat: 46.446904, lng: 30.749284}}
                    onClick={this.addMarker}
                >
                    {this.props.markerList.map(coords =>
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

const WrappedMap = withScriptjs(withGoogleMap(Map));

export class WrapMap extends React.Component<IWrappedMapProps,IWrappedMapState>{
    constructor(props: IWrappedMapProps){
        super(props);
        this.state = {
            savedMarkers: [],
            isShowed: false
        };
        this.save = this.save.bind(this);
        this.show = this.show.bind(this);
    }

    save(){
        saveState(this.props.markerList);
        this.setState({isShowed: false})
    }

    show(){
        const list = JSON.parse(localStorage.getItem('state') || '{}');
        saveState(list);
        console.log('SHOW BUTTON', list);
        this.setState((state: IWrappedMapState) => ({
            savedMarkers: list,
            isShowed: !state.isShowed
        }))
    }

    render(){
        return (
            <MapStyled>
                <WrappedMap
                    markerList={this.state.isShowed ? this.state.savedMarkers : this.props.markerList}
                    googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4un_JQsqJQTH7rDez7k9SJw7-zDyZ3YA&v=3.exp&libraries=geometry,drawing,places'}
                    loadingElement={<div className="container"/>}
                    containerElement={<div className="container"/>}
                    mapElement={<div className="container"/>}
                />
                <div className="map__navigation">
                    <button
                        className="map__button"
                        onClick={this.save}
                        disabled={this.state.isShowed}
                    >
                        Save all markers
                    </button>
                    <button
                        className="map__button"
                        onClick={this.show}
                    >
                        {this.state.isShowed ? 'Hide showed markers' : 'Show saved markers'}
                    </button>
                </div>
            </MapStyled>
        )
    }
}

function mapStateToProps(state: AppState){
    console.log('markerList', state.Mark.markers);
    return {
        markerList: state.Mark.markers,
    }
}

export default connect(mapStateToProps, null)(WrapMap)
