const axios = require("axios")

module.exports = {
  send404: send404
}

function ObtenerNombre(req,res){
  let data
  let config = {
    method: 'get',
    url: 'https://api.mocklets.com/p68140/properties',
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    let data = JSON.stringify(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

  

}


function send404(req,res){
  res.status(404)
  res.json({ message: "Error 404"})
}