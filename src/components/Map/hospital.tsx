import React from 'react'
import {compose, withProps, withHandlers, withState, mapper} from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { google } from 'google-maps'

const MyMapComponent = compose(
    withProps({
        googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4un_JQsqJQTH7rDez7k9SJw7-zDyZ3YA&v=3.exp&libraries=geometry,drawing,places',
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    withState('places', 'updatePlaces', ''),
    //@ts-ignore
    withHandlers(() => {
        const refs = {
            map: undefined,
        };

        return {
            //@ts-ignore
            onMapMounted: () => (ref) => {
                refs.map = ref
            },
            fetchPlaces: ({ updatePlaces }) => {
                let places;
                //@ts-ignore
                const bounds = refs.map.getBounds();
                //@ts-ignore
                const service = new google.maps.places.PlacesService(refs.map.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
                const request = {
                    bounds: bounds,
                    type: 'hotel'
                };
                service.nearbySearch(request, (results, status) => {
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        console.log(results);
                        updatePlaces(results);
                    }
                })
            }
        }
    }),
)((props) => {
    return (
        <GoogleMap
            //@ts-ignore
            onTilesLoaded={props.fetchPlaces}
            //@ts-ignore
            ref={props.children.onMapMounted}
            //@ts-ignore
            onBoundsChanged={props.children.fetchPlaces}
            defaultZoom={8}
            defaultCenter={{lat: 46.446904, lng: 30.749284}}
        >
            //@ts-ignore
            {props.children.places && props.children.places.map((place, i) =>
                <Marker key={i} position={{ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }} />
            )}
        </GoogleMap>
    )
});

export default class MyFancyComponent extends React.PureComponent {
    render() {
        return (
            <MyMapComponent />
        )
    }
}
