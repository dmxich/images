import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID LfNtGBGTeDF6qDwiceSt86uxb4EQ_E00W5ay8KniNPA'
    }
});