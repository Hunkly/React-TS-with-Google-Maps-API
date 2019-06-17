import React from 'react';
import { withScriptjs, withGoogleMap } from 'react-google-maps';
import MapStyled from './Map.styled';
import Map from './Map.container';
import {SimpleMarker} from "../../constants/actionTypes";
import {saveState} from "../../store/localStorage";


const WrappedMap = withScriptjs(withGoogleMap(Map));

export default class WrapMap extends React.Component<{ markersList: SimpleMarker[] },{}>{
    constructor(props: any){
        super(props)
        this.save = this.save.bind(this);
        this.show = this.show.bind(this);
    }

    state = {
        savedMarkers: [],
        isShowed: false
    };

    save(){
        saveState(this.props.markersList)
        this.setState({isShowed: false})
    }

    show(){
        // @ts-ignore
        const list = JSON.parse(localStorage.getItem('state'));
        saveState(list)
        console.log('SHOW BUTTON', list);
        this.setState({savedMarkers: list, isShowed: true })
    }

    render(){
        return (
            <MapStyled>
                    <WrappedMap
                        markersList={this.state.isShowed ? this.state.savedMarkers : this.props.markersList}
                        googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4un_JQsqJQTH7rDez7k9SJw7-zDyZ3YA&v=3.exp&libraries=geometry,drawing,places'}
                        loadingElement={<div className="container"/>}
                        containerElement={<div className="container"/>}
                        mapElement={<div className="container"/>}
                    />
                    <div className="map__navigation">
                        <button
                            className="map__button"
                            onClick={this.save}>
                            { this.state.isShowed ? 'Hide showed markers' : 'Save all markers'}
                        </button>
                        <button
                            className="map__button"
                            onClick={this.show}>
                            Show all saved markers
                        </button>
                    </div>
            </MapStyled>
        )
    }
}




