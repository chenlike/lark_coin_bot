const dotenv = require('dotenv');
dotenv.config();
const { initAPI } = require("./api")



async function main(){
    initAPI()



}




main().then(() => {
    console.log("API initialized successfully");
}).catch((error) => {
    console.error("Error initializing API:", error);
});


