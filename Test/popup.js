
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

        //the message is being received over here
        /*
        chrome.runtime.onMessage.addListener(function(msg, sender, response){
            var censoredText = msg;
            document.getElementById("buttonPress").innerHTML = "been here";
        });
        */

}

function test() {
    document.getElementById("buttonPress").innerHTML = "click";
}



