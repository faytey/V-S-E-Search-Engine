function getResults() {
  let search = new google.search.SearchElement();
  search.execute(document.getElementById("query").value);
  let result = document.getElementsByClassName("gs-webResult");
  let thumbnail = document.getElementsByClassName("gs-thumbnail-inside");
  let author = document.createElement("div");
  author.innerText = "free";
  thumbnail.appendChild(author);
  let videoDetails = document.createElement("div");
  let videoDetails1 = document.createElement("div");
  videoDetails1.innerText = "hahah";
  let videoDetails2 = document.createElement("div");
  videoDetails2.innerText = "woah";
  videoDetails.appendChild(videoDetails1);
  videoDetails.appendChild(videoDetails2);
  thumbnail.appendChild(videoDetails);
  console.log(result);
}

function openmodal() {
  let preview = document.getElementsByClassName("display");
  let image = document.createElement("img");
  image.setAttribute(
    "src",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
  );
  preview.appendChild(image);
  let btn1 = document.createElement("button");
  btn1.innerHTML = "Close";
  let btn2 = document.createElement("button");
  btn2.innerText = "Visit";
  preview.appendChild(btn1);
  preview.appendChild(btn2);
}

let video = document.getElementsByClassName("img gs-image");

video.addEventListener("click", openmodal);
