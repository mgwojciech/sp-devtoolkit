(this["webpackJsonpsp-devtoolkit"]=this["webpackJsonpsp-devtoolkit"]||[]).push([[0],{70:function(e,t,n){e.exports=n(79)},75:function(e,t,n){},76:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(21),i=n.n(r),s=(n(75),n(76),n(51)),c=n(14),l=n(15),u=n(43),d=n(33),h=n(19),p=n(42),f=n(109),b=n(106),m=n(112);n(77);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){function t(e,n){var o;return Object(c.a)(this,t),(o=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={Response:"",WebUrl:"",EndpointUrl:"/_api/web",Method:"GET",Digests:[]},o.UpdateWebUrl=o.UpdateWebUrl.bind(Object(h.a)(o)),o.HandleClick=o.HandleClick.bind(Object(h.a)(o)),o.UpdateEndpointUrl=o.UpdateEndpointUrl.bind(Object(h.a)(o)),o.UpdateRequestBody=o.UpdateRequestBody.bind(Object(h.a)(o)),o.UpdateMethod=o.UpdateMethod.bind(Object(h.a)(o)),o}return Object(p.a)(t,e),Object(l.a)(t,[{key:"GetFormDigest",value:function(){var e=this,t=e.state.WebUrl+"/_api/contextinfo",n=e.state.Digests.filter((function(t){return t.Site===e.state.WebUrl}))[0];return n?new Promise((function(e){e(n.Digest)})):e.props.WebClient.CallWebService(t,{method:"POST",headers:{accept:"application/json"}}).then((function(t){return e.state.Digests.push({Site:e.state.WebUrl,Digest:t.FormDigestValue}),e.forceUpdate(),t.FormDigestValue}))}},{key:"HandleClick",value:function(){var e=(this.state.WebUrl||"")+this.state.EndpointUrl,t=this;"GET"!=t.state.Method?t.GetFormDigest().then((function(n){t.props.WebClient.CallWebService(e,{headers:{accept:"application/json","X-RequestDigest":n,"Content-Type":"application/json","IF-MATCH":"*","X-HTTP-Method":t.state.Method},method:"POST",body:t.state.RequestBody?JSON.stringify(JSON.parse(t.state.RequestBody)):null}).then((function(e){t.setState(g({},t.state,{Response:JSON.stringify(e,null,4)}))}))})):t.props.WebClient.CallWebService(e,{headers:{accept:"application/json"},method:t.state.Method}).then((function(e){t.setState(g({},t.state,{Response:JSON.stringify(e,null,4)}))}))}},{key:"UpdateWebUrl",value:function(e,t){t&&this.setState(g({},this.state,{WebUrl:t}))}},{key:"UpdateEndpointUrl",value:function(e,t){t&&this.setState(g({},this.state,{EndpointUrl:t}))}},{key:"UpdateRequestBody",value:function(e,t){t&&this.setState(g({},this.state,{RequestBody:t}))}},{key:"UpdateMethod",value:function(e,t,n){t&&this.setState(g({},this.state,{Method:t.text}))}},{key:"render",value:function(){var e=this.state.Method;return a.a.createElement("div",null,a.a.createElement(f.a,{label:"Web relative url",onChange:this.UpdateWebUrl,value:this.state.WebUrl}),a.a.createElement(f.a,{label:"API Endpoint",onChange:this.UpdateEndpointUrl,value:this.state.EndpointUrl}),a.a.createElement(b.a,{label:"Select HTTP Method",placeholder:"Select method",selectedKey:e||"GET",onChange:this.UpdateMethod,options:[{key:"GET",text:"GET"},{key:"POST",text:"POST"},{key:"PATCH",text:"PATCH"},{key:"MERGE",text:"MERGE"},{key:"DELETE",text:"DELETE"}],styles:{dropdown:{width:300}}}),a.a.createElement(f.a,{label:"Body",multiline:!0,autoAdjustHeight:!0,onChange:this.UpdateRequestBody}),a.a.createElement(m.a,{text:"Send Query",onClick:this.HandleClick,allowDisabledFocus:!0}),a.a.createElement(f.a,{label:"Response",multiline:!0,autoAdjustHeight:!0,value:this.state.Response||""}))}}]),t}(o.Component),O=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"CallWebService",value:function(e,t){t.headers=t.headers||{},t.headers.accept=t.headers.accept||"application/json";var n=JSON.stringify(t);return new Promise((function(t,o){chrome.tabs.getSelected(null,(function(o){chrome.tabs.executeScript(o.id,{code:'fetch("'+e+'", '+n+").then((result)=>{ return result.json().then(responseText=>{chrome.runtime.sendMessage(responseText)})})"},(function(){new Promise((function(e){chrome.runtime.onMessage.addListener((function t(n){chrome.runtime.onMessage.removeListener(t),e(n)}))})).then((function(e){t(e)}))}))}))}))}}]),e}(),j=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"CallWebService",value:function(e,t){t.headers=t.headers||{},t.headers.accept=t.headers.accept||"application/json";var n=JSON.stringify(t);return new Promise((function(t,o){chrome.devtools.inspectedWindow.eval('fetch("'+e+'", '+n+").then((result)=>{ return result.json().then(responseText=>{chrome.runtime.sendMessage(responseText)})})",(function(){new Promise((function(e){chrome.runtime.onMessage.addListener((function t(n){chrome.runtime.onMessage.removeListener(t),e(n)}))})).then((function(e){t(e)}))}))}))}}]),e}(),E=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"GetPageContextInfo",value:function(){return new Promise((function(e,t){chrome.tabs.getSelected(null,(function(t){chrome.tabs.executeScript(t.id,{code:"fetch(\" + window.location.href + \", {headers:{accept: 'application/json'}}).then((result)=>{ return result.json().then(responseText=>{chrome.runtime.sendMessage(responseText)})})"},(function(){new Promise((function(e){chrome.runtime.onMessage.addListener((function t(n){chrome.runtime.onMessage.removeListener(t),e(n)}))})).then((function(t){e(t.spPageContextInfo)}))}))}))}))}}]),e}(),U=function(e){function t(e){var n;return Object(c.a)(this,t),n=Object(u.a)(this,Object(d.a)(t).call(this,e)),e.PageContextInfoProvider.GetPageContextInfo().then((function(e){n.setState({Info:e})})),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state&&a.a.createElement(f.a,{label:"Body",multiline:!0,autoAdjustHeight:!0,value:this.state.Info})}}]),t}(o.Component),S=function(){var e=chrome.devtools?new j:new O,t=new E;return a.a.createElement("div",{className:"App"},a.a.createElement(y,{WebClient:e}),a.a.createElement(U,{PageContextInfoProvider:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[70,1,2]]]);
//# sourceMappingURL=main.a232d981.chunk.js.map