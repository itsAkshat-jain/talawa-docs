"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[4811],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=i,g=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return a?n.createElement(g,r(r({ref:t},u),{},{components:a})):n.createElement(g,r({ref:t},u))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4723:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const l={id:"implementing-plugins",title:"Plugin Implementation"},r=void 0,o={unversionedId:"developers/talawa-admin/plugins/implementing-plugins",id:"developers/talawa-admin/plugins/implementing-plugins",title:"Plugin Implementation",description:"Plugins are existing features that are wrapped with some special logic or widgets to make them controllable.",source:"@site/docs/developers/talawa-admin/plugins/implementing-plugins.md",sourceDirName:"developers/talawa-admin/plugins",slug:"/developers/talawa-admin/plugins/implementing-plugins",permalink:"/docs/developers/talawa-admin/plugins/implementing-plugins",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/developers/talawa-admin/plugins/implementing-plugins.md",tags:[],version:"current",frontMatter:{id:"implementing-plugins",title:"Plugin Implementation"},sidebar:"someSidebar",previous:{title:"Plugin Architecture",permalink:"/docs/developers/talawa-admin/plugins/plugin-architecture"},next:{title:"Plugin Examples",permalink:"/docs/developers/talawa-admin/plugins/implementing-plugins-example"}},p={},s=[{value:"Technical Overview of the Steps to Implement features as plugins",id:"technical-overview-of-the-steps-to-implement-features-as-plugins",level:2},{value:"1. Plugin Registration",id:"1-plugin-registration",level:3},{value:"2. Plugin Creation",id:"2-plugin-creation",level:3},{value:"A. Feature that are located in the bottom navigation bar",id:"a-feature-that-are-located-in-the-bottom-navigation-bar",level:4},{value:"B. Other Features",id:"b-other-features",level:4},{value:"Additional properties : For Development Purpose Only",id:"additional-properties--for-development-purpose-only",level:4}],u={toc:s};function m(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Plugins are existing features that are wrapped with some special logic or widgets to make them controllable."),(0,i.kt)("p",null,"Plugin are activated from Plugin store of the Admin panel"),(0,i.kt)("p",null,"To implement features as plugins or to convert existing features into plugins, follow the below steps"),(0,i.kt)("h2",{id:"technical-overview-of-the-steps-to-implement-features-as-plugins"},"Technical Overview of the Steps to Implement features as plugins"),(0,i.kt)("h3",{id:"1-plugin-registration"},"1. Plugin Registration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Plugins have to be registered first before even they are created from the Plugin store in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Talawa Admin")," portal. This can be done by developer by creating an account in the admin portal and going to ",(0,i.kt)("inlineCode",{parentName:"li"},"Plugin Store"),"."),(0,i.kt)("li",{parentName:"ul"},"Plugin Store can be accessed from navbar")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Plugin Store Option in Navbar",src:a(4267).Z,width:"1366",height:"129"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Once entered in store , you will see a list of available plugins")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Plugin Store Sample Image",src:a(9606).Z,width:"1358",height:"625"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Add New")," Button"),(0,i.kt)("li",{parentName:"ul"},"Enter the Details of the New Plugin and Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Create"),".")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Name")," of plugin provided is very important and will be used for later steps.\nMake sure to use unique names with trailing spaces.")),(0,i.kt)("p",null,"In next step we'll see how to create plugins"),(0,i.kt)("h3",{id:"2-plugin-creation"},"2. Plugin Creation"),(0,i.kt)("p",null,"Based on where the feature UI is there are currently 2 ways to implement your features as plugins. Let's call them type A and B features for now."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Plugin Store Option in Navbar",src:a(8398).Z,width:"505",height:"519"})),(0,i.kt)("h4",{id:"a-feature-that-are-located-in-the-bottom-navigation-bar"},"A. Feature that are located in the bottom navigation bar"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For the features in the navbar we have maintained a list of them in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/PalisadoesFoundation/talawa/blob/develop/lib/views/main_screen.dart"},"main_scree.dart")," file.It has detailed comments to help you understand the operations.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"renderBottomNavBarPlugins")," method combines current features and plugins in navbar and generates an array containing ",(0,i.kt)("inlineCode",{parentName:"p"},"navBarItems")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"navbarClasses")," and then it is returned to ",(0,i.kt)("inlineCode",{parentName:"p"},"children")," property of the navbar UI code.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Let's understand some important variables before understanding the process of conversion."))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Name")," of property provided to any of the below variables should the exactly same for that feature only without any trailing spaces. Duplicate or Existing plugin names shouldn't be used keep the application consistent and predictable.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"navBarItems"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},"[ BottomNavigationBarItem() ]")),(0,i.kt)("li",{parentName:"ul"},"contains list of ",(0,i.kt)("inlineCode",{parentName:"li"},"BottomNavigationBarItem")," widget to show ",(0,i.kt)("inlineCode",{parentName:"li"},"icon")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"text")," to the navbar options."),(0,i.kt)("li",{parentName:"ul"},"if your feature is not a plugin it should be added to this array."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"navBarClasses"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},"[Widgets]")),(0,i.kt)("li",{parentName:"ul"},"Array that contains the Widgets to be rendered on the navbar"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"navNameClasses"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"}," Map<dynamic, dynamic>")),(0,i.kt)("li",{parentName:"ul"},"Maps the feature names with their proper Icons and Widgets (named as ",(0,i.kt)("inlineCode",{parentName:"li"},"class"),") used in navbar."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"navNameIcon"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},"Map<String, Widgets>")),(0,i.kt)("li",{parentName:"ul"},"Contains a key value pair of the feature name in the navbar and it's corresponding plugin.")))),(0,i.kt)("h4",{id:"b-other-features"},"B. Other Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TalawaPluginProvider")," is Flutter widget that is used here . The Source can be viewed ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/PalisadoesFoundation/talawa/blob/develop/lib/plugins/talawa_plugin_provider.dart"},"here")),(0,i.kt)("li",{parentName:"ul"},"Here's the basic use of ",(0,i.kt)("inlineCode",{parentName:"li"},"TalawaPluginProvider")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"Text()")," widget.Let's discuss it's properties")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'    const TalawaPluginProvider(child: Text("Demo") ,\n        visible: true,\n        pluginName: "My Plugin"\n    );\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"child")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},"Widget?")),(0,i.kt)("li",{parentName:"ul"},"It can be any flutter UI widget like ",(0,i.kt)("inlineCode",{parentName:"li"},"Container()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Text()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Row()"),",etc. For example if your features is encapsulated within an ",(0,i.kt)("inlineCode",{parentName:"li"},"Container()")," widget then wrap that widget into the ",(0,i.kt)("inlineCode",{parentName:"li"},"TalawaPluginProvider")," ."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"visible")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},"Boolean")),(0,i.kt)("li",{parentName:"ul"},"True if plugin is Installed and plugin will be visible, Otherwise false hence plugin is hidden."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"pluginName")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},"String")),(0,i.kt)("li",{parentName:"ul"},"Contains the name of the plugin. Make sure that the name provided here should match with the plugin name registered on the store from the\n",(0,i.kt)("a",{parentName:"li",href:"#a-feature-that-are-located-in-the-bottom-navigation-bar"},"Step 1 A ")),(0,i.kt)("li",{parentName:"ul"},"For example. If plugin stored on the store as ",(0,i.kt)("inlineCode",{parentName:"li"},"Members List")," then here exactly enter ",(0,i.kt)("inlineCode",{parentName:"li"},"Members List")," without any trialing spaces.")))),(0,i.kt)("u",null,(0,i.kt)("h4",{id:"additional-properties--for-development-purpose-only"},"Additional properties : ","[For Development Purpose Only]")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"serverVisible")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},"Boolean")),(0,i.kt)("li",{parentName:"ul"},"True will make all plugins visible if set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," otherwise ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," won't change anything."),(0,i.kt)("li",{parentName:"ul"},"This property is accessible for the developers only as it can be only set during development phase. We can see that it is defined in build method of the widget.")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"     Widget build(BuildContext context) {\n        var serverVisible = false;\n        serverVisible = checkFromPluginList();\n        return serverVisible || visible ? child! : Container();\n    }\n")))))}m.isMDXComponent=!0},4267:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/plugin-store-navbar-b78151eeb9009d78556070a8401518c3.PNG"},8398:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/plugin-types-c3fe5b2573f8665c22ceb2dc38b59360.PNG"},9606:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/store-8a3d8d142e699b82286da665bb0dc8b7.PNG"}}]);