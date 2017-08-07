function requestListener(){
  console.log(this.responseText);
}

let request = new XMLHttpRequest();
request.open("Get", "http://api.github.com/users/cjzeledon");
request.addEventListener("load", "requestListener");
request.send();

console.log(requestListener);
