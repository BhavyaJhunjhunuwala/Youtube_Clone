 import axios from 'axios'
// const axios = require("axios");
export const BASE_URL ='https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '567fc10472msh6404d27f1c9d6c4p16397fjsn9bccab2ea019',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  },
};

export const fetchfromapi=async(url)=>{
    const {data} =await axios.get(`${BASE_URL}/${url}`,options);
    return data;
};