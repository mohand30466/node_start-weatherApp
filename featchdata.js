const request = require('request')

const urls ='http://api.weatherstack.com/curent?access_key=12534f6792e2cb28937e639b50923875&query=london&units=s'

request({url:urls,json:true},(error,response)=>{
    if(error){
        console.log("somthing went wrong");
    }
    console.log(response.body);
})
