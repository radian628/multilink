let urls = document.getElementById("urls");

let generateLink = document.getElementById("generate-link");

let link = document.getElementById("link");

generateLink.addEventListener("click", e => {
    let alteredString = urls.value.replace(/\n+/g, "\n");
    alteredString = "./link/index.html?links=" + encodeURIComponent(alteredString);
    link.href = alteredString;
    link.innerHTML = new URL(link.href, document.baseURI).href;
});