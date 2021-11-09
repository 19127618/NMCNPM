let fileInput = document.getElementById("file-input")
let imgContainer = document.getElementById("images");
let numOfFile = document.getElementById("numOfFile");

function preview(){
  imgContainer.innerHTML = '';
  numOfFile.textContent = fileInput.files.length + ' file selected';

  for(i of fileInput.files){
    let reader = new FileReader();
    let figure = document.createElement('figure');
    // figure.classList.add("col-12")
    figure.classList.add("col-md-2")
    let figCap = document.createElement("figcaption");
    //figCap.innerText = i;
    figure.appendChild(figCap);
    reader.onload = () => {
      let img = document.createElement("img");
      img.classList.add("img-thumbnail");
      img.setAttribute("src", reader.result);
      figure.insertBefore(img, figCap);
    }
    imgContainer.appendChild(figure);
    reader.readAsDataURL(i);
  }
}