import React, { Component } from 'react';
import './App.css';
import { APIClient } from './APIClient';
import { CurrentTabWebClient } from './Utils/CurrentTabWebClient';
import { DevToolsCurrentTabWebClient } from './Utils/DevToolsCurrentTabWebClient';
import { CurrentTabPageContextProvider } from './Utils/CurrentTabPageContextProvider';
import { PageContextInfoComponent } from './Components/PageContextInfoComponent';
import { IWebClient } from './Utils/IWebClient';
import { IPageContextInfoProvider } from './Utils/IPageContextInfoProvider';

declare var chrome: any;
export class App extends Component<any,{ContextInfo:any}> {
  public WebClient: IWebClient;
  public PCProvider: IPageContextInfoProvider;
  constructor(props: any) {
    super(props);

    this.WebClient = chrome.devtools ? new DevToolsCurrentTabWebClient() : new CurrentTabWebClient()
    this.PCProvider = new CurrentTabPageContextProvider();
    this.state = {
      ContextInfo:{
        webServerRelativeUrl: ""
      }
    }
    this.ContextObtained = this.ContextObtained.bind(this);
  }

  private ContextObtained(context: any){
    this.setState({
      ...this.state,
      ContextInfo: context
    });
    this.render();
  }

  render() {
    return (
      <div className="App">
        <APIClient WebClient={this.WebClient} WebUrl={this.state.ContextInfo.webServerRelativeUrl} ></APIClient>
        <PageContextInfoComponent PageContextInfoProvider={this.PCProvider} OnContextObtained={this.ContextObtained}></PageContextInfoComponent>
      </div>
    );
  }
}
export default App;
