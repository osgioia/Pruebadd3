const axios = require("axios");
const _ = require("lodash");

async function ObtenerNombre(nombre) {
  let config = {
    method: "get",
    url: "https://api.mocklets.com/p68140/properties",
    headers: {},
  };

  let data = await axios(config);

  // console.log(data.data)

  data.data.forEach((elem) => {
    if (elem.name === nombre) console.log(elem);
  });
}

async function ObtenerTipo(tipo) {
  let config = {
    method: "get",
    url: "https://api.mocklets.com/p68140/properties",
    headers: {},
  };

  let data = await axios(config);

  // console.log(data.data)

  data.data.forEach((elem) => {
    if (elem.type === tipo) console.log(elem);
  });
}

async function ObtenerFacilities(fac) {
  let config = {
    method: "get",
    url: "https://api.mocklets.com/p68140/properties",
    headers: {},
  };

  let data = await axios(config);

  // console.log(data.data)

  data.data.forEach((elem) => {
    if (_.findIndex(elem.facilities, { 'facilities': fac })) {
      console.log(elem);
    }
  });
}

async function Total() {
  let config = {
    method: "get",
    url: "https://api.mocklets.com/p68140/properties",
    headers: {},
  };

  let data = await axios(config);

  // console.log(data.data)
  let countPropiedades = 0;
  
  let TipoPropiedadesHostal = 0;
  let TipoPropiedadesLoft = 0;
  let TipoPropiedadesApartment = 0;
  let TipoPropiedadesHouse = 0;

  let TipoFacilitiesPool = 0;
  let TipoFacilitiesHottub = 0;
  let TipoFacilitiesFreeparking = 0;


  data.data.forEach((elem) => {
    countPropiedades++;
    switch (elem.type) {
      case "Hostal":
        TipoPropiedadesHostal++;
      case "Loft":
        TipoPropiedadesLoft++;
      case "Apartment":
        TipoPropiedadesApartment++;
      case "House":
        TipoPropiedadesHouse++;
    }

    switch (elem.facilities) {
      case "Pool":
        TipoPropiedadesHostal++;
   
   /*     case "Loft":
        TipoPropiedadesLoft++;
      case "Apartment":
        TipoPropiedadesApartment++;
      case "House":
        TipoPropiedadesHouse++;
        */
    }

  });

  console.log(countPropiedades, "Propiedades");
  console.log(TipoPropiedadesHostal, "Hostales");
  console.log(TipoPropiedadesLoft, "Loft");
  console.log(TipoPropiedadesApartment, "Apartment");
  console.log(TipoPropiedadesHouse, "House");
}

async function Paginacion(nombre) {
  let config = {
    method: "get",
    url: "https://api.mocklets.com/p68140/properties",
    headers: {},
  };

  let data = await axios(config);
  let result = [];
  // console.log(data.data)

  data.data.forEach((elem) => {
    if (elem.name === nombre) {
      result.push(elem);
    }
  });
}

//ObtenerNombre("Property 1");
//ObtenerTipo("House")
//ObtenerFacilities("Pool");
Total()
