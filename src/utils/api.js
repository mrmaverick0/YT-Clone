import axios from "axios";
const REACT_APP_YT_API_KEY='866862ddb9msh8243ff58540a74cp19f735jsn8ce4ef9aa3c3';
const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': REACT_APP_YT_API_KEY,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

 export const fetchDataFromApi = async(url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
  }