import React from "react";
import store from '../../store/store';
import MapStyled from './Map.styled';
import { clearMarkers, setMarker}  from "../../store/map/actions";
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";
import { SimpleMarker} from "../../constants/actionTypes";
import { saveState } from "../../store/localStorage";
import { AppState } from "../../store/reducers";
import { connect } from "react-redux";

interface IMapState {
    marker: SimpleMarker
}

interface IMapProps{
    isMarkersShowed: boolean,
    isPlacedMarkersShowed: boolean,
    markerList: SimpleMarker[]
}

interface IWrappedMapState {
    savedMarkers: SimpleMarker[],
    selectedValue: string,
    isMarkersShowed: boolean,
    isPlacedMarkersShowed: boolean,
    placeMarkers: SimpleMarker[]
}

interface IWrappedMapProps{
    markerList: SimpleMarker[]
}

export class Map extends React.Component<IMapProps, IMapState>{
    constructor(props: IMapProps){
        super(props);
        this.state = {
            marker: {
                id: 0,
                coordinates: {
                    lat: 0,
                    lng: 0
                }
            }
        };
        this.addMarker = this.addMarker.bind(this);
    }

    nextMarkerId: number = 1;

    addMarker(event: google.maps.MouseEvent){
        if( !this.props.isMarkersShowed && !this.props.isPlacedMarkersShowed) {
            this.setState(
                {
                    marker: {
                        id: this.nextMarkerId++,
                        coordinates: {
                            lat: event.latLng.lat(),
                            lng: event.latLng.lng()
                        }
                    }
                }
            );
            store.dispatch(setMarker({
                id: this.nextMarkerId,
                coordinates: {lat: this.state.marker.coordinates.lat, lng: this.state.marker.coordinates.lng}
            }));
        }
    }

    render() {
        console.log('markerList', this.props.markerList);
        return (
            <div>
                <GoogleMap
                    defaultZoom={14}
                    defaultCenter={{lat: 46.446904, lng: 30.749284}}
                    onClick={this.addMarker}
                >
                    {this.props.markerList.map((coords: SimpleMarker) =>
                        <Marker
                            key = {
                                coords.id
                            }
                            position={{
                                lat: coords.coordinates.lat,
                                lng: coords.coordinates.lng
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
            selectedValue: 'school',
            isMarkersShowed: false,
            isPlacedMarkersShowed: false,
            placeMarkers:[
                {
                    id: 0,
                    coordinates:{
                        lat: 0,
                        lng: 0
                    }
                }
            ]
        };
        this.save = this.save.bind(this);
        this.show = this.show.bind(this);
        this.placeMarkerLoad = this.placeMarkerLoad.bind(this);
        this.callback = this.callback.bind(this);
        this.selectedChange = this.selectedChange.bind(this);
    }

    save(){
        saveState(this.props.markerList);
        this.setState({isMarkersShowed: false})
    }

    show(){
        const list: SimpleMarker[] = JSON.parse(localStorage.getItem('state') || '{}');
            saveState(list);
            console.log('SHOW BUTTON', list);
            this.setState((state: IWrappedMapState) => ({
                savedMarkers: list,
                isMarkersShowed: !state.isMarkersShowed,
                isPlacedMarkersShowed: false
            }))
    }

    selectedChange(event: React.ChangeEvent<HTMLSelectElement>){
        this.setState(
            {
                selectedValue: event.target.value,
                isPlacedMarkersShowed: false,
                isMarkersShowed: false
            }
        );
        store.dispatch(clearMarkers());
        console.log('MARKERS', this.props.markerList);
    }

    placeMarkerLoad(){
        /*global google*/
        let center = new google.maps.LatLng(46.446904,30.749284);
        let map = new google.maps.Map(document.getElementById('map'), {
            center: center,
            zoom: 15
        });
        let options: google.maps.places.PlaceSearchRequest = {
            location: center,
            radius: 1500,
            type: this.state.selectedValue
        };
        let service = new google.maps.places.PlacesService(map);
        service.nearbySearch(options, this.callback);
        console.log('GOT IT', options);
    }

    callback(results: google.maps.places.PlaceResult[], status: google.maps.places.PlacesServiceStatus) {
        store.dispatch(clearMarkers());
        if (status === google.maps.places.PlacesServiceStatus.OK && !this.state.isPlacedMarkersShowed) {
            for (let i = 1; i < results.length; i++) {
                store.dispatch(setMarker({id: i, coordinates: {lat: results[i].geometry!.location.lat(), lng: results[i].geometry!.location.lng()}}));
            }
            this.setState(
                {
                    isPlacedMarkersShowed: true,
                    isMarkersShowed: false
                }
            );
        } else {
            this.setState(
                {
                    isMarkersShowed: false,
                    isPlacedMarkersShowed: false
                }
            );
            store.dispatch(clearMarkers());
            console.log('MARKERS', this.props.markerList);
        }
        console.log('RESULTS', results);
    }

    render(){
        return (
            <MapStyled>
                <div id="map"/>
                <WrappedMap
                    isMarkersShowed = {this.state.isMarkersShowed}
                    isPlacedMarkersShowed = {this.state.isPlacedMarkersShowed}
                    markerList={this.state.isMarkersShowed ? this.state.savedMarkers : this.props.markerList}
                    googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyBdUVngONfd9e7jYtBVMvU1moLAM5-H5yI&v=3.exp&libraries=geometry,drawing,places'}
                    loadingElement={<div className="container"/>}
                    containerElement={<div className="container"/>}
                    mapElement={<div className="container"/>}
                />
                <div className="map__navigation">
                    <button
                        className="map__button"
                        onClick={this.save}
                        disabled={this.state.isMarkersShowed}
                    >
                        Save all markers
                    </button>
                    <button
                        className="map__button"
                        onClick={this.show}
                    >
                        {this.state.isMarkersShowed ? 'Hide showed markers' : 'Show saved markers'}
                    </button>
                </div>
                <div className="map__navigation">
                    <button
                        className="map__button"
                        onClick={this.placeMarkerLoad}
                    >
                        {this.state.isPlacedMarkersShowed ? 'Hide ' + this.state.selectedValue + ' makers' : 'Show ' + this.state.selectedValue + ' markers'}
                    </button>
                    <select
                        className="map__button"
                        name="Object types" id="1"
                        value={this.state.selectedValue}
                        onChange={this.selectedChange}
                    >
                        <option value="school">School</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="pharmacy">Pharmacy</option>
                        <option value="gas_station">Gas station</option>
                        <option value="bank">Bank</option>
                        <option value="gym">Gym</option>
                        <option value="hospital">Hospital</option>
                        <option value="travel_agency">Travel agency</option>
                        <option value="supermarket">Supermarket</option>
                    </select>
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
