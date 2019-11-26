(this["webpackJsonpsp-devtoolkit"]=this["webpackJsonpsp-devtoolkit"]||[]).push([[0],{71:function(e,t,n){e.exports=n(80)},76:function(e,t,n){},77:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(22),i=n.n(a),s=(n(76),n(37)),c=n(14),l=n(15),u=n(28),d=n(23),h=n(27),p=(n(77),n(20)),b=n(109),f=n(107),O=n(112);n(78);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(e){function t(e,n){var r;return Object(c.a)(this,t),(r=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={Response:"",WebUrl:r.props.WebUrl||"",EndpointUrl:"/_api/web",Method:"GET",Digests:[]},r.UpdateWebUrl=r.UpdateWebUrl.bind(Object(p.a)(r)),r.HandleClick=r.HandleClick.bind(Object(p.a)(r)),r.UpdateEndpointUrl=r.UpdateEndpointUrl.bind(Object(p.a)(r)),r.UpdateRequestBody=r.UpdateRequestBody.bind(Object(p.a)(r)),r.UpdateMethod=r.UpdateMethod.bind(Object(p.a)(r)),r}return Object(h.a)(t,e),Object(l.a)(t,[{key:"GetFormDigest",value:function(){var e=this,t=e.state.WebUrl+"/_api/contextinfo",n=e.state.Digests.filter((function(t){return t.Site===e.state.WebUrl}))[0];return n?new Promise((function(e){e(n.Digest)})):e.props.WebClient.CallWebService(t,{method:"POST",headers:{accept:"application/json"}}).then((function(t){return e.state.Digests.push({Site:e.state.WebUrl,Digest:t.FormDigestValue}),e.forceUpdate(),t.FormDigestValue}))}},{key:"HandleClick",value:function(){var e=(this.state.WebUrl||"")+this.state.EndpointUrl,t=this;"GET"!=t.state.Method?t.GetFormDigest().then((function(n){t.props.WebClient.CallWebService(e,{headers:{accept:"application/json","X-RequestDigest":n,"Content-Type":"application/json","IF-MATCH":"*","X-HTTP-Method":t.state.Method},method:"POST",body:t.state.RequestBody?JSON.stringify(JSON.parse(t.state.RequestBody)):null}).then((function(e){t.setState(v({},t.state,{Response:JSON.stringify(e,null,4)}))}))})):t.props.WebClient.CallWebService(e,{headers:{accept:"application/json"},method:t.state.Method}).then((function(e){t.setState(v({},t.state,{Response:JSON.stringify(e,null,4)}))}))}},{key:"UpdateWebUrl",value:function(e,t){t&&this.setState(v({},this.state,{WebUrl:t}))}},{key:"UpdateEndpointUrl",value:function(e,t){t&&this.setState(v({},this.state,{EndpointUrl:t}))}},{key:"UpdateRequestBody",value:function(e,t){t&&this.setState(v({},this.state,{RequestBody:t}))}},{key:"UpdateMethod",value:function(e,t,n){t&&this.setState(v({},this.state,{Method:t.text}))}},{key:"render",value:function(){var e=this.state.Method;return o.a.createElement("div",null,o.a.createElement(b.a,{label:"Web relative url",onChange:this.UpdateWebUrl,value:this.state.WebUrl}),o.a.createElement(b.a,{label:"API Endpoint",onChange:this.UpdateEndpointUrl,value:this.state.EndpointUrl}),o.a.createElement(f.a,{label:"Select HTTP Method",placeholder:"Select method",selectedKey:e||"GET",onChange:this.UpdateMethod,options:[{key:"GET",text:"GET"},{key:"POST",text:"POST"},{key:"PATCH",text:"PATCH"},{key:"MERGE",text:"MERGE"},{key:"DELETE",text:"DELETE"}],styles:{dropdown:{width:300}}}),o.a.createElement(b.a,{label:"Body",multiline:!0,autoAdjustHeight:!0,onChange:this.UpdateRequestBody}),o.a.createElement(O.a,{text:"Send Query",onClick:this.HandleClick,allowDisabledFocus:!0}),o.a.createElement(b.a,{label:"Response",multiline:!0,autoAdjustHeight:!0,value:this.state.Response||""}))}}]),t}(r.Component),y=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"CallWebService",value:function(e,t){t.headers=t.headers||{},t.headers.accept=t.headers.accept||"application/json";var n=JSON.stringify(t);return new Promise((function(t,r){chrome.tabs.getSelected(null,(function(r){chrome.tabs.executeScript(r.id,{code:'fetch("'+e+'", '+n+").then((result)=>{ return result.json().then(responseText=>{chrome.runtime.sendMessage(responseText)})})"},(function(){new Promise((function(e){chrome.runtime.onMessage.addListener((function t(n){chrome.runtime.onMessage.removeListener(t),e(n)}))})).then((function(e){t(e)}))}))}))}))}}]),e}(),g=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"CallWebService",value:function(e,t){t.headers=t.headers||{},t.headers.accept=t.headers.accept||"application/json";var n=JSON.stringify(t);return new Promise((function(t,r){chrome.devtools.inspectedWindow.eval('fetch("'+e+'", '+n+").then((result)=>{ return result.json().then(responseText=>{chrome.runtime.sendMessage(responseText)})})",(function(){new Promise((function(e){chrome.runtime.onMessage.addListener((function t(n){chrome.runtime.onMessage.removeListener(t),e(n)}))})).then((function(e){t(e)}))}))}))}}]),e}(),P=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"GetPageContextInfo",value:function(){return new Promise((function(e,t){chrome.tabs.getSelected(null,(function(t){chrome.tabs.executeScript(t.id,{code:"fetch(window.location.href, {headers:{accept: 'application/json'}}).then((result)=>{ return result.json().then(responseText=>{chrome.runtime.sendMessage(responseText)})})"},(function(){new Promise((function(e){chrome.runtime.onMessage.addListener((function t(n){chrome.runtime.onMessage.removeListener(t),e(n)}))})).then((function(t){e(t.spPageContextInfo)}))}))}))}))}}]),e}(),C=function(e){function t(e){var n;return Object(c.a)(this,t),n=Object(u.a)(this,Object(d.a)(t).call(this,e)),e.PageContextInfoProvider.GetPageContextInfo().then((function(e){n.props.OnContextObtained&&n.props.OnContextObtained(e),n.setState({Info:e})})),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state&&o.a.createElement(b.a,{label:"Body",multiline:!0,autoAdjustHeight:!0,value:JSON.stringify(this.state.Info)})}}]),t}(r.Component);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var U=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).WebClient=void 0,n.PCProvider=void 0,n.WebClient=chrome.devtools?new g:new y,n.PCProvider=new P,n.state={ContextInfo:{webServerRelativeUrl:""}},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement(j,{WebClient:this.WebClient,WebUrl:this.state.ContextInfo.webServerRelativeUrl}),o.a.createElement(C,{PageContextInfoProvider:this.PCProvider,OnContextObtained:function(t){e.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.state,{ContextInfo:t}))}}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[71,1,2]]]);
//# sourceMappingURL=main.3f0aae5c.chunk.js.map