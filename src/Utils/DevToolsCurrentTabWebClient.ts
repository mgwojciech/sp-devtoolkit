import { IWebClient } from "./IWebClient";

declare var chrome:any;

export class DevToolsCurrentTabWebClient implements IWebClient{
    CallWebService<T>(url: string, requestProperties: any): Promise<T> {
        requestProperties.headers = requestProperties.headers || {};
        requestProperties.headers.accept = requestProperties.headers.accept || "application/json"
        let requestPropsSerialized: string = JSON.stringify(requestProperties);
        return new Promise<T>((resolve,error)=>{
            chrome.devtools.inspectedWindow.eval("fetch(\"" + url +"\", " + requestPropsSerialized + ")" +
            ".then((result)=>{ return result.json().then(responseText=>{chrome.runtime.sendMessage(responseText)})})",()=>{
                new Promise<T>(resolve => {
                chrome.runtime.onMessage.addListener(function listener(result:T) {
                  chrome.runtime.onMessage.removeListener(listener);
                  resolve(result);
                });
              }).then(result => {
                resolve(result);
              })
            });
        });
    }

}