let mainBody = document.querySelector("body");
let header = document.createElement("header");
mainBody.appendChild(header);
let main = document.createElement("main");
mainBody.appendChild(main);

function requestList(){
  let data = JSON.parse(this.responseText);
  console.log(data);

  header.innerHTML = `<h1>${data.name}</h1>`;


  main.innerHTML = `

<article>

<div class="bio">
<div class="basics">
<h2>The Basics</h2>
<p><strong>Name:</strong>  ${data.name} </p>
<p><strong>GitHub URL:</strong> <a href='${data.url}' alt="GitHub URL"> ${data.login} </a></p>
<p><strong>Email:</strong> ${data.email} </p>
<p><strong>Company:</strong> ${data.company} </p>
<p><strong>Website:</strong> <a href='${data.blog}' alt='GitHub Blog'>Blogging Stuff</a></p>
</div>

<div class="story">
<h2>The Story</h2>
<p> ${data.bio} and yada yada yada...as a reference from the Smurfs: The Lost Village movie...</p>
<quote>Beep, bop, bingo, bango, bing, bing, bang, bop!</quote>
</div>

<div class="avatar">
<img class="avatar_img" src="${data.avatar_url}">
</div>
</div>

</article>

  `;
}

let req = new XMLHttpRequest();
req.open("GET", "http://192.168.1.12:8000/octocat");
req.addEventListener("load", requestList);
req.send();
