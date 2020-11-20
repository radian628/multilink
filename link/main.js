let linkList = document.getElementById("links");

let links = decodeURIComponent(new URL(window.location.href).searchParams.get("links")).split("\n");

links.forEach(link => {
    let li = document.createElement("li");
    let a = document.createElement("a");

    li.appendChild(a);
    linkList.appendChild(li);

    a.href = link;
    a.innerHTML = link;
});

let closeThisWindow = true;

links.forEach(link => {
    let newWindow = window.open(link);
    if (!newWindow || newWindow.closed || typeof newWindow.closed == "undefined") {
        closeThisWindow = false;
    }
});

if (closeThisWindow) {
    window.close();
}