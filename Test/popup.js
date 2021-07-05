
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("buttonPress").addEventListener("click",clickHandler);
},false)

function clickHandler() {
        /*
        chrome.scripting.executeScript({
            target: {tabId: 1},
            files: ['changeText.js']
        });
        */
        chrome.tabs.executeScript({file: "sendDataWithChange.js"});
        /*
        chrome.runtime.onMessage.addListener(function(msg, sender, response){
            var result = msg.text

            document.getElementById("buttonPress").innerHTML = result;
        });
        */

}

function test() {
    document.getElementById("buttonPress").innerHTML = "click";
}



