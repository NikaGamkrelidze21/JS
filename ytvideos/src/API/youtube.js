import axios from 'axios'

const KEY = "AIzaSyAo1LoYBtSfzczkXg0q7-gBy712MrNLPNM"


export default axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults : '5',
        key : KEY
    }
})