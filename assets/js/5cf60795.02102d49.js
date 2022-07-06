"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[2028],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},137:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],c={id:"authentication",title:"Authentication"},u=void 0,l={unversionedId:"talawa-api/authentication",id:"talawa-api/authentication",title:"Authentication",description:"How can a User Authenticate?",source:"@site/docs/talawa-api/authentication.md",sourceDirName:"talawa-api",slug:"/talawa-api/authentication",permalink:"/talawa-docs/docs/talawa-api/authentication",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/master/docs/talawa-api/authentication.md",tags:[],version:"current",frontMatter:{id:"authentication",title:"Authentication"},sidebar:"someSidebar",previous:{title:"Admin",permalink:"/talawa-docs/docs/talawa-api/constraints/admin"},next:{title:"Functionality",permalink:"/talawa-docs/docs/talawa-api/functionality"}},s={},p=[{value:"How can a <code>User</code> Authenticate?",id:"how-can-a-user-authenticate",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"how-can-a-user-authenticate"},"How can a ",(0,i.kt)("inlineCode",{parentName:"h3"},"User")," Authenticate?"),(0,i.kt)("blockquote",null,(0,i.kt)("h3",{parentName:"blockquote",id:"sign-up"},(0,i.kt)("inlineCode",{parentName:"h3"},"Sign Up")),(0,i.kt)("p",{parentName:"blockquote"},"A user can authenticate by creating a new account. This can be done by sending request to api with sign up fields.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"image: string\ntokenVersion: number\nfirstName: string\nlastName: string\nemail: string\npassword: string\ncreatedOrganizations: [Organization]\ncreatedEvents: [Event]\njoinedOrganizations: [Organization]\nregisteredEvents: [Event]\neventAdmin: [Event]\nadminFor: [Event]\nmembershipRequests: [MembershipRequest]\norganizationsBlockBy: [Organization]\norganizationUserBelongsTo: [Organization]\n")),(0,i.kt)("blockquote",null,(0,i.kt)("h3",{parentName:"blockquote",id:"login"},(0,i.kt)("inlineCode",{parentName:"h3"},"Login")),(0,i.kt)("p",{parentName:"blockquote"},"If a User has already signed up He/She can login to the application by authenticating following Fields .")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"email: string\npassword: string\n")))}m.isMDXComponent=!0}}]);