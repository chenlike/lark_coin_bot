const axios = require('axios');

const state = {
    apiKey: '',
    apiSecret: '',

}




export function initAPI(){
    state.apiKey = process.env.API_KEY;
    state.apiSecret = process.env.API_SECRET;
    
}