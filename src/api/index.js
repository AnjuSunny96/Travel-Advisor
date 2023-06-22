import axios from "axios";

const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';



export const getPlacesData=async(ne,sw)=>{
  console.log("ne,sw:")

    try {
      const {data:{data}}=await axios.get(URL,{
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          // 'X-RapidAPI-Key': '9e362d4a6bmsh369a785642bf906p1ed599jsnbcee1df68daa',
          // 'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          'X-RapidAPI-Key': 'bd1dbd077dmsh7466b70b3a7c47bp19ba4bjsn2788e53ab1da',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      })
      return data
        
    } catch (error) {
        console.log(error)
    }

}
