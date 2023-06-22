import React from "react";
import { Box,Typography,Button,Card,CardMedia,CardContent,CardActions,Chip } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating  from "@material-ui/lab/Rating";

import useStyles from './styles'

const PlaceDetails=({place})=>{

    const classes=useStyles();
    
    return(
       
       <Card elevation={6}>
        <CardMedia
            style={{height:350}}
            image={place.photo ? place.photo.images.large.url :'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
            title={place.name}
        />
        <CardContent>
            <Typography gutterBottom variant="h5">{place.name}</Typography>
            {/* section for rating */}
            <Box  display="flex" justifyContent="space-between">
                <Rating size="small" value={Number(place.rating)} readOnly/>
                <Typography gutterBottom variant="subtitle1">out of {place.num_reviews}</Typography>
            </Box>
                {/* section for price */}
            <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Price</Typography>
                <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
            </Box>
                {/* section for showing ranking */}
            <Box display='flex' justifyContent='space-between'>
                <Typography variant="subtitle1">Ranking</Typography>
                <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
            </Box>
            {/* if Restaurants have any awards use this code to show in card */}
            {place?.awards?.map((award)=>(
                <Box my={1} display='flex' justifyContent='space-between' alignItems='center'>
                    <img src={award.images.small} alt={award.display_name}/>
                    <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                </Box>
            ))}
            {/* showing wich cuisines are available in restaurant */}
            {place?.cuisine?.map(({name})=>(
                <Chip key={name} size="small" label={name} className={classes.chip}/>
            ))}
            {/* to show address of the restaurant */}
            {place?.address && (
                <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                    <LocationOnIcon/>{place.address}
                </Typography>
            )}
            {/* to show the phone number of restaurant */}
            {place?.phone && (
                <Typography gutterBottom variant="body2" color="textSecondary" className={classes.spacing}>
                    <PhoneIcon/>{place.phone}
                </Typography>
            )}
            {/* websites buttons */}
            <CardActions>
                <button size="small"  className={classes.button} onClick={()=>window.open(place.web_url,'_blank')}>
                    TRIP ADVISOR
                </button>
                <button size="small" className={classes.button}  onClick={()=>window.open(place.website,'_blank')}>
                    WEBSITE
                </button>
            </CardActions>
        </CardContent>
       </Card>
        
    )
}

export default PlaceDetails