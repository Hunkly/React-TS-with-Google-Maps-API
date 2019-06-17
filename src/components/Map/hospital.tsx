import { google } from 'google-maps';
import React from 'react';
import Map from './Map.container';
import {GoogleMap} from "@react-google-maps/api";

export const FETCH_RESTAURANTS = 'FETCH_RESTAURANTS';
//const google = (window as any).google;

interface IHospitalProps {
    coords: [
        {
            lat: number,
            lng: number
        }
    ]
}


export function fetchHospitals(lat: any, lng: any)  {
    var pyrmont = new google.maps.LatLng(lat,lng);

     let map = new google.maps.Map(document.getElementById('map'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: pyrmont,
        zoom: 15
    });

    // Create request parametres
    var request = {
        location: pyrmont,
        radius: 500,
        type: 'hospital'
};

    // Call the nearby search using the parametres
    let service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);


    return(
        <div id="map">
        </div>
    )
}

// Asynchronous marker creation at returned locations
function callback(results: google.maps.places.PlaceResult[], status: google.maps.places.PlacesServiceStatus) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            //var place = results[i];
            console.log('HOSPITAL', results[i])
            // createMarker(results[i]);
        }
    }
}
