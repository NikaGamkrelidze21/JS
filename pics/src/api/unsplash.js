import axios from "axios";

export default axios.create({
    baseURL : "https://api.unsplash.com/search/photos",
    headers: {
        Authorization: 'Client-ID iOhpwy6gvrZE24qTdqMTnLN5HH9nBNpZdg036Q2Ffno'
    }
})