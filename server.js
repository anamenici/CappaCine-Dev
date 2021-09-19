const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

// Permite que a API seja usada por uma porta diferente
app.use(cors())

var config = {
  method: 'get',
  url: 'https://api.themoviedb.org/3/movie/top_rated?api_key=cce57aa40f832b8d9cd703693d3b81d2&language=pt-BR&page=1',
  headers: { 
    'Content-Type': 'application/json;charset=utf-8', 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2U1N2FhNDBmODMyYjhkOWNkNzAzNjkzZDNiODFkMiIsInN1YiI6IjYxM2JmYjllNmFmOWRkMDAyN2I1MjFlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H7UYGU_VDHGlOhHN3moP9BcGrKZg6n0M1d4G5f3lTEQ'
  }
};



async function axios_config(){ 
  const v = (await axios(config)).data;
  return v;
};

async function axios_details_config(id){ 
  const v = (await axios(
    {
      method: 'get',
      url: 'https://api.themoviedb.org/3/movie/'+id+'?api_key=cce57aa40f832b8d9cd703693d3b81d2&language=pt-BR&page=1',
      headers: { 
        'Content-Type': 'application/json;charset=utf-8', 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2U1N2FhNDBmODMyYjhkOWNkNzAzNjkzZDNiODFkMiIsInN1YiI6IjYxM2JmYjllNmFmOWRkMDAyN2I1MjFlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H7UYGU_VDHGlOhHN3moP9BcGrKZg6n0M1d4G5f3lTEQ'
      }
    }
  )).data;
  return v;
};

app.get("/MovieList", async(req, res) => {
  try {
    // response é a resposta do axios, MAS eu desestruturo (tiro de dentro) o data do response assim: { data }
    //console.log("-------- awaiting ---------")
    
    const result = await axios_config();
    //console.log("return " + JSON.stringify( result))
    res.send(JSON.stringify( result));
    return result

  } catch (error) {
    console.error(error)
  }
})

app.get("/MovieDetails", async(req, res) => {
  try {
    
    var id = req.query.id;
    const result = await axios_details_config(id);
    console.log("return " + JSON.stringify( result))
    res.send(JSON.stringify( result));
    return result

  } catch (error) {
    console.error(error)
  }
})




app.listen('4569')
console.log("ok")


