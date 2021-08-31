(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[5561],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4419:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(2122),o=n(9756),s=(n(7294),n(3905)),a=["components"],i={},c="Websocket Server",l={unversionedId:"Workshop/examples/servers_lt_ws/README",id:"Workshop/examples/servers_lt_ws/README",isDocsHomePage:!1,title:"Websocket Server",description:"Example Websocket server application built on top of Tremor and meant to be a demonstration of linked transports.",source:"@site/docs/Workshop/examples/31_servers_lt_ws/README.md",sourceDirName:"Workshop/examples/31_servers_lt_ws",slug:"/Workshop/examples/servers_lt_ws/README",permalink:"tremor-new-website/docs/Workshop/examples/servers_lt_ws/README",editUrl:"https://github.com/skoech/tremor-new-website/tree/main/docs/docs/Workshop/examples/31_servers_lt_ws/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTTP Server",permalink:"tremor-new-website/docs/Workshop/examples/servers_lt_http/README"},next:{title:"HTTP Proxy",permalink:"tremor-new-website/docs/Workshop/examples/proxies_lt_http/README"}},p=[{value:"Setup",id:"setup",children:[{value:"Sources",id:"sources",children:[]},{value:"Message flow",id:"message-flow",children:[]},{value:"Processing logic",id:"processing-logic",children:[]}]},{value:"Testing",id:"testing",children:[]}],u={toc:p};function m(e){var t=e.components,i=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"websocket-server"},"Websocket Server"),(0,s.kt)("p",null,"Example Websocket server application built on top of Tremor and meant to be a demonstration of ",(0,s.kt)("a",{parentName:"p",href:"../../../operations/linked-transports.md"},"linked transports"),"."),(0,s.kt)("h2",{id:"setup"},"Setup"),(0,s.kt)("p",null,"!!! tip\nAll the code here is available in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/workshop/examples/31_servers_lt_ws"},"git repository")," as well."),(0,s.kt)("h3",{id:"sources"},"Sources"),(0,s.kt)("p",null,"We configure a websocket onramp listening on port 8139:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"  - id: ws\n    type: ws\n    linked: true\n    codec: string\n    preprocessors:\n      - lines\n    config:\n      host: 0.0.0.0\n      port: 8139\n")),(0,s.kt)("h3",{id:"message-flow"},"Message flow"),(0,s.kt)("p",null,"Incoming websocket messages from a client's websocket connection are sent to the pipeline ",(0,s.kt)("inlineCode",{parentName:"p"},"echo")," and the output of it is sent back again from the same connection."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'binding:\n  - id: main\n    links:\n      "/onramp/ws/{instance}/out": ["/pipeline/echo/{instance}/in"]\n      "/pipeline/echo/{instance}/out": ["/onramp/ws/{instance}/in"]\n')),(0,s.kt)("h3",{id:"processing-logic"},"Processing logic"),(0,s.kt)("p",null,"Implementation for the ",(0,s.kt)("inlineCode",{parentName:"p"},"echo")," pipeline (techincally, echo with one special twist):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-trickle"},'define script process\nscript\n  match event of\n    # snot is a special snowflake\n    case "snot" => "badger"\n    default => event\n  end\nend;\n\ncreate script process;\n\n# main request processing\nselect event from in into process;\nselect event from process into out;\n\n# tremor runtime errors from the processing script\nselect event from process/err into err;\n')),(0,s.kt)("h2",{id:"testing"},"Testing"),(0,s.kt)("p",null,"Assuming you have all the code from the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/workshop/examples/31_servers_lt_ws"},"git repository"),", run the following to start our application:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose up\n")),(0,s.kt)("p",null,"Test the websocket server with a tool like ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/vi/websocat"},"websocat"),"."),(0,s.kt)("p",null,"!!! note\nCan be installed via ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo install websocat")," for the lazy/impatient amongst us"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"# anything you type and enter, will be echoed back\n# except snot which begets badger\n$ websocat ws://localhost:8139\nhello\nhello\nworld\nworld\nsnot\nbadger\ngoodbye\ngoodbye\n")),(0,s.kt)("p",null,"If there's internal tremor error while processing the incoming message (eg: codec or preprocessor failure), the error should be bubbled up to the client. To test this out, change the codec in the ",(0,s.kt)("a",{target:"_blank",href:n(4211).Z},"onramp configuration")," to be ",(0,s.kt)("inlineCode",{parentName:"p"},"json")," from ",(0,s.kt)("inlineCode",{parentName:"p"},"string")," and send an invalid json input:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'# after changing the onramp codec to json\n$ echo "{" | websocat -n1 ws://localhost:8139\n{"error":"SIMD JSON error: Syntax at character 0 (\'{\')","event_id":0,"source_id":"tremor://localhost/onramp/ws/01/in"}\n')))}m.isMDXComponent=!0},4211:function(e,t,n){"use strict";t.Z=n.p+"assets/files/config-4db9f5245d0be4f851a179cd9ef2c0d7.yaml"}}]);