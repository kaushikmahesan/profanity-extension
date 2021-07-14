
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("buttonPress").addEventListener("click",clickHandler);
},false)

function clickHandler() {
        chrome.tabs.executeScript({file: "sendData.js"});


        //used to receive the changed data back
        var censoredText;
        chrome.runtime.onMessage.addListener(function(msg, sender, response){
            censoredText = msg;
            document.getElementById("buttonPress").innerHTML = "Message received";

            chrome.tabs.executeScript(null, {
                code: 'var config = ' + JSON.stringify(censoredText)
            }, function() {
                chrome.tabs.executeScript(null, {file: 'changeData.js'});
            });
        });
        
     
        //used to send the data to the changeData script
        
   /*
        //used to store the file in local storage and then taken 
        chrome.storage.local.set({
            censoredText: censoredText
        }, function () {
            chrome.tabs.executeScript({
                file: "changeData.js"
            });
        });
*/
}

function test() {
    document.getElementById("buttonPress").innerHTML = "click";
}



