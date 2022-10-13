import { useEffect, useState } from "react";

const useFetch = (url, options = {}) => { // url, options son parametross
    const [response, setResponse] = useState(null); // creamos el state de la respuesta
    const [loading, setLoading] = useState(true); // creamos el estado de carga 
    options = JSON.stringify(options); // al parametro options lo hacemos json
    useEffect(() => {
       const fetchData = async () => { // llamar a la api y decirle que espere un tiempo
      try{
        const res = await fetch(url, JSON.parse(options)); // respuesta del url
        const json = await res.json(); //transformamos esa respuesta en json
        setResponse(json); // asignamos al state response
        setLoading(false); // asignamos al state loading 
        }catch(error){   // si captura un error se ejecuta lo siguiente 
        console.log("-->", error); 
      }
    };
    fetchData()
  },[url, options]);
    return{response, loading}
  };
  export default useFetch