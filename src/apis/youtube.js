import axios from 'axios';

const KEY = 'AIzaSyDs8-nqyJc6vL3YYIoMBgzOybml0jZ_KMA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY

    }
});

