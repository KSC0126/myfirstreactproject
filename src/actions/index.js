export  function sendDataToAction(data){
    console.log("####", data)
    return {type: "ADD_USER", payload: data}
}