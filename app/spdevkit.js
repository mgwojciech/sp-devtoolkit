var UrlProvider = (function(){
    var provider = function(){

    }

    provider.prototype.GetCurrentUrl = function(){
        return new Promise((resolve,error)=>{
            chrome.tabs.query({
                active: true,
                currentWindow: true
            }, function(tabs){
                resolve(tabs[0].url)
            })
        });
    }

    return provider;
})();

var SPDevKitManager = (function(){
    var manager = function(){
        this.UrlProvider = new UrlProvider();
    }

    manager.prototype.HandleRequest = function(url){
        return new Promise((resolve,error)=>{
            chrome.tabs.getSelected(null, (tab)=>{
                chrome.tabs.executeScript(tab.id,{
                    code: "fetch(\"" + url +"\",{headers:{\"accept\": \"application/json\"}}).then((result)=>{ return result.json().then(responseText=>{chrome.runtime.sendMessage(responseText)})})"
                },()=>{
                    new Promise(resolve => {
                    chrome.runtime.onMessage.addListener(function listener(result) {
                      chrome.runtime.onMessage.removeListener(listener);
                      resolve(result);
                    });
                  }).then(result => {
                    resolve(result);
                  })
                })
            })
        });
    }

    return manager;
})();

var mgr = new SPDevKitManager();
mgr.UrlProvider.GetCurrentUrl().then(url =>{
    document.getElementById("url-span").innerText = url;

    document.getElementById("rest-api-button").onclick = ()=>{
        mgr.HandleRequest(document.getElementById("rest-api-input").value).then(result=>{
            document.getElementById("rest-api-response-span").innerText = JSON.stringify(result,null,4);
        });
    }

})
console.log(mgr);