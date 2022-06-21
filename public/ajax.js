function ajax(url,method,functionName,dataArray) {
   let xhttp = new XMLHttpRequest();
   xhttp.open(method,url,true);
   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xhttp.send(requestData(dataArray));

   xhttp.onreadystatechange = function () {

   	   if(this.readyState == 4 && this.status == 200) {
             functionName(this.response);

   	   }
   }

}
function requestData(data) {
     let out = '';
     for (let key in data) {
     	out += `${key}=${data[key]}&`;
     }
     console.log(out);
     return out;

}