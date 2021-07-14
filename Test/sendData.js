function sendDataFromTab() {
    var result = [];
    const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')
    
    for(let i=0; i < text.length; i++){
        result[i] = text[i].innerHTML;
    }

    options = {
        method: 'POST',
        header: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'text': result})
    }
    fetch('http://127.0.0.1:5000/testjson',options)
    .then(response => response.json())
    .then(data => {chrome.runtime.sendMessage(data)})
    
}

sendDataFromTab();
