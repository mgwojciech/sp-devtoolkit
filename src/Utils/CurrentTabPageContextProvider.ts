import { IPageContextInfoProvider } from "./IPageContextInfoProvider";
declare var chrome: any;

export class CurrentTabPageContextProvider implements IPageContextInfoProvider {
    GetPageContextInfo(): Promise<any> {
        return new Promise<any>((resolve, error) => {
            chrome.tabs.getSelected(null, (tab: { id: number }) => {

                // let pageContextInfo: string = "";
                // chrome.tabs.executeScript(tab.id, {
                //     code: "_spPageContextInfo"
                // },(result:any)=>{
                //     pageContextInfo = result;
                // });
                chrome.tabs.executeScript(tab.id, {
                    code: "fetch(window.location.href, {headers:{accept: 'application/json'}})" +
                        ".then((result)=>{ return result.json().then(responseText=>{chrome.runtime.sendMessage(responseText)})})"
                }, () => {
                    new Promise<any>(resolve => {
                        chrome.runtime.onMessage.addListener(function listener(result: any) {
                            chrome.runtime.onMessage.removeListener(listener);
                            resolve(result);
                        });
                    }).then(result => {
                        resolve(result.spPageContextInfo);
                    })
                })
            });
        });
    }
}
