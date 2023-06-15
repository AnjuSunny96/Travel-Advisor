import React, { useEffect, useState } from "react";
import {CssBaseline,Grid} from '@material-ui/core'
import Header from './component/Header/Header'
import List from './component/List/List'
import Map from './component/Map/Map'
import { getPlacesData } from "./api";

const App=()=>{

    const [places,setPlaces]=useState([])

useEffect(()=>{

    getPlacesData()
    .then((data)=>{
        console.log("data in app:",data)

        setPlaces(data)
    })
},[])

    return(
        <>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={{width:'100%'}}>
                <Grid xs={12} md={4}>
                    <List/>
                </Grid>
                <Grid xs={12} md={8}>
                    <Map/>
                </Grid>
            </Grid>
        </>
    )
}
export default App;