import React, { useEffect, useState } from "react";
import {CssBaseline,Grid} from '@material-ui/core'
import Header from './component/Header/Header'
import List from './component/List/List'
import Map from './component/Map/Map'
import { getPlacesData } from "./api";

const App=()=>{

    const [places,setPlaces]=useState([])
    const [coordinates,setCoordinates]=useState({ })
    const [bounds,setBounds]=useState(null)

    //this useEffect is for locating the user location
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
            setCoordinates({lat:latitude,lng:longitude})
        })
    },[])

//This useEffect is for locating the restaurants,hotels, attractions.
useEffect(()=>{
    console.log(coordinates,bounds)
    bounds && getPlacesData(bounds.ne,bounds.sw)
    .then((data)=>{
        console.log("data in app:",data)

        setPlaces(data)
    })
},[coordinates,bounds])

    return(
        <>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={{width:'100%'}}>
                <Grid xs={12} md={4}>
                    <List/>
                </Grid>
                <Grid xs={12} md={8}>
                    <Map
                       setCoordinates={setCoordinates}
                       setBounds={setBounds}
                       coordinates={coordinates}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default App;