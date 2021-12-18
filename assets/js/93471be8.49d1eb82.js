"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[4190],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4752:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={id:"user",title:"User"},l=void 0,c={unversionedId:"talawa-api/constraints/user",id:"talawa-api/constraints/user",title:"User",description:"Who Is A User?",source:"@site/docs/talawa-api/constraints/user.md",sourceDirName:"talawa-api/constraints",slug:"/talawa-api/constraints/user",permalink:"/talawa-docs/docs/talawa-api/constraints/user",editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/master/website/docs/talawa-api/constraints/user.md",tags:[],version:"current",frontMatter:{id:"user",title:"User"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/talawa-docs/docs/talawa-api/api-overview"},next:{title:"Organization",permalink:"/talawa-docs/docs/talawa-api/constraints/organization"}},p=[{value:"Who Is A <code>User</code>?",id:"who-is-a-user",children:[],level:2},{value:"What tasks can be performed by a <code>User</code> ?",id:"what-tasks-can-be-performed-by-a-user-",children:[],level:2},{value:"<code>User</code> Model",id:"user-model",children:[],level:2}],u={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"who-is-a-user"},"Who Is A ",(0,o.kt)("inlineCode",{parentName:"h2"},"User"),"?"),(0,o.kt)("p",null,"A User is anyone who has created an account for the application. Users can both create and join organizations. After joining an organization users become members of that organization."),(0,o.kt)("p",null,"A member of an organization would be similar to a congregation member in a religious instituion or an employee working for a business."),(0,o.kt)("h2",{id:"what-tasks-can-be-performed-by-a-user-"},"What tasks can be performed by a ",(0,o.kt)("inlineCode",{parentName:"h2"},"User")," ?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"They can create ",(0,o.kt)("inlineCode",{parentName:"li"},"Organizations")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Events"),"."),(0,o.kt)("li",{parentName:"ol"},"They can create ",(0,o.kt)("inlineCode",{parentName:"li"},"Posts")," that show up on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Organization"),"."),(0,o.kt)("li",{parentName:"ol"},"They can ",(0,o.kt)("inlineCode",{parentName:"li"},"Comment")," on ",(0,o.kt)("inlineCode",{parentName:"li"},"Posts")," that show up on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Organization"),"."),(0,o.kt)("li",{parentName:"ol"},"They can create ",(0,o.kt)("inlineCode",{parentName:"li"},"Tasks")," for the ",(0,o.kt)("inlineCode",{parentName:"li"},"Event"),".")),(0,o.kt)("h2",{id:"user-model"},(0,o.kt)("inlineCode",{parentName:"h2"},"User")," Model"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"image: string\ntokenVersion: number\nfirstName: string\nlastName: string\nemail: string\npassword: string\ncreatedOrganizations: [Organization]\ncreatedEvents: [Event]\njoinedOrganizations: [Organization]\nregisteredEvents: [Event]\neventAdmin: [Event]\nadminFor: [Event]\nmembershipRequests: [MembershipRequest]\norganizationsBlockBy: [Organization]\norganizationUserBelongsTo: [Organization]\n")))}d.isMDXComponent=!0}}]);