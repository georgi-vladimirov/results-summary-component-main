const jsonURL = './data.json';
const request = new Request(jsonURL);
const response = await fetch(request);
const results = response.json;
function doIt (){
    console.log("asdasd");
}

