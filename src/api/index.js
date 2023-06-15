import axios from "axios";

const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
   
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
    },
    headers: {
      'X-RapidAPI-Key': '9e362d4a6bmsh369a785642bf906p1ed599jsnbcee1df68daa',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };
  
//   try {
//       const response = await axios.request(options);
//       console.log(response.data);
//   } catch (error) {
//       console.error(error);
//   }



export const getPlacesData=async()=>{

    try {
        
      const {data:{data}}=await axios.get(URL,options)
      return data
        
    } catch (error) {
        console.log(error)
    }

}
