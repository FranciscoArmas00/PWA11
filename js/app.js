if (navigator.serviceWorker){
    navigator.serviceWorker.register("sw.js");
    console.log ("Funciona");
} else{
    console.log("No funciona el servicer worker")
}