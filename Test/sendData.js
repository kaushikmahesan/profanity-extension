function sendDataFromTab() {
    var str = 0;

    const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')
    for(let i=0; i < text.length; i++){
        if(text[i].innerHTML.includes("Rocket League")) {
            str += 1;
        }
    }


    options = {
        method: 'POST',
        header: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'data':str})
    }

    fetch('http://127.0.0.1:5000/testjson',options)
    .then(response => response.json())
    .then(data => {chrome.runtime.sendMessage(data)})
}

sendDataFromTab();