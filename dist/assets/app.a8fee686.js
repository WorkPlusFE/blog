import{L as C,N as f,d,a as u,o as l,c as m,b as r,e as v,t as k,u as h,f as z,g as T,h as y,r as b,i as p,w as g,p as A,j as P,k as V,F as $,V as D,l as j}from"./vendor.a22b69d8.js";const L=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}};L();const O=({router:t})=>{t.beforeEach((e,a,n)=>{const o=decodeURI(e.path);e.path!==o?n({path:o,replace:!0}):n()})};var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:O});const R=({app:t})=>{t.use(C,{observer:!0})};var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:R});const N=({isClient:t,router:e})=>{t&&(e.beforeEach(()=>{f.start()}),e.afterEach(()=>{f.done()}))};var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:N});const F="modulepreload",x={},H="/",i=function(e,a){return!a||a.length===0?e():Promise.all(a.map(n=>{if(n=`${H}${n}`,n in x)return;x[n]=!0;const o=n.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${s}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":F,o||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),o)return new Promise((S,w)=>{c.addEventListener("load",S),c.addEventListener("error",w)})})).then(()=>e())},Z=[{name:"xss",path:"/xss",component:()=>i(()=>import("./2021-11-29-xss.b316b423.js"),["assets/2021-11-29-xss.b316b423.js","assets/Post.0dc6cdb1.js","assets/Post.9c4ecd50.css","assets/vendor.a22b69d8.js"]),props:!0,meta:{frontmatter:{title:"\u524D\u7AEF XSS \u653B\u51FB\u4E0E\u9632\u5FA1",author:"\u53F6\u5FB7\u6743",authorProfile:"https://github.com/Edwinye337826",type:"post",lang:"zh-CN",date:"2021-11-29T00:00:00.000Z",description:"\u524D\u7AEF XSS \u653B\u51FB\u4E0E\u9632\u5FA1",image:"/images/2021/11/xss.webp",categories:["\u7F51\u9875\u5B89\u5168"],tags:["XSS"]}},alias:"/xss.html"},{name:"vue3",path:"/vue3",component:()=>i(()=>import("./2021-07-04-vue3.a4afbd46.js"),["assets/2021-07-04-vue3.a4afbd46.js","assets/Post.0dc6cdb1.js","assets/Post.9c4ecd50.css","assets/vendor.a22b69d8.js"]),props:!0,meta:{frontmatter:{title:"\u521D\u63A2 Vue3",author:"\u9648\u660E\u6D69",type:"post",lang:"zh-CN",date:"2021-07-04T00:00:00.000Z",description:"\u521D\u63A2 Vue3",image:"/images/2021/07/vue3.png",categories:["Vue"],tags:["Vue","Vue3"]}},alias:"/vue3.html"},{name:"vite-2-0",path:"/vite-2-0",component:()=>i(()=>import("./2021-03-14-vite-2-0.365e2b38.js"),["assets/2021-03-14-vite-2-0.365e2b38.js","assets/Post.0dc6cdb1.js","assets/Post.9c4ecd50.css","assets/vendor.a22b69d8.js"]),props:!0,meta:{frontmatter:{title:"Vite-2.0 \u4F7F\u7528\u611F\u53D7\u5206\u4EAB",author:"\u53F6\u5FB7\u6743",authorProfile:"https://github.com/Edwinye337826",type:"post",lang:"zh-CN",date:"2021-03-14T00:00:00.000Z",description:"Vite-2.0 \u4F7F\u7528\u611F\u53D7\u5206\u4EAB",image:"/images/2021/03/vite.jpeg",categories:["\u6784\u5EFA\u5DE5\u5177"],tags:["Vite","Vue"]}},alias:"/vite-2-0.html"},{name:"typescript-introduction",path:"/typescript-introduction",component:()=>i(()=>import("./2021-02-08-typescript-introduction.d5b8737b.js"),["assets/2021-02-08-typescript-introduction.d5b8737b.js","assets/Post.0dc6cdb1.js","assets/Post.9c4ecd50.css","assets/vendor.a22b69d8.js"]),props:!0,meta:{frontmatter:{title:"\u8D70\u8FDB TypeScript",author:"\u4F55\u9547\u8C6A",authorProfile:"https://github.com/ElvisUpUp",type:"post",lang:"zh-CN",date:"2021-02-08T17:56:14.000Z",description:"\u8D70\u8FDB TypeScript",image:"/images/2021/02/typescript.png",categories:["TypeScript"],tags:["TypeScript","JavaScript"]}},alias:"/typescript-introduction.html"},{name:"sentry-source-analysis",path:"/sentry-source-analysis",component:()=>i(()=>import("./2019-12-08-sentry-source-analysis.0ec08e31.js"),["assets/2019-12-08-sentry-source-analysis.0ec08e31.js","assets/Post.0dc6cdb1.js","assets/Post.9c4ecd50.css","assets/vendor.a22b69d8.js"]),props:!0,meta:{frontmatter:{title:"Sentry \u524D\u7AEF\u5F02\u5E38\u4E0A\u62A5\u6E90\u7801\u5206\u6790",author:"\u6797\u6587\u806A",type:"post",lang:"zh-CN",date:"2019-12-08T17:56:14.000Z",description:"Sentry \u524D\u7AEF\u5F02\u5E38\u4E0A\u62A5\u6E90\u7801\u5206\u6790",image:"/images/2019/12/sentry-2.png",categories:["DevOps"],tags:["Sentry","DevOps"]}},alias:"/sentry-source-analysis.html"},{name:"sentry-getting-started",path:"/sentry-getting-started",component:()=>i(()=>import("./2019-12-03-sentry-getting-started.ca1e1828.js"),["assets/2019-12-03-sentry-getting-started.ca1e1828.js","assets/Post.0dc6cdb1.js","assets/Post.9c4ecd50.css","assets/vendor.a22b69d8.js"]),props:!0,meta:{frontmatter:{title:"Sentry \u5165\u95E8\u653B\u7565",author:"\u6797\u6587\u806A",type:"post",lang:"zh-CN",date:"2019-12-03T17:56:14.000Z",description:"Sentry \u5165\u95E8\u653B\u7565",image:"/images/2019/12/sentry-1.png",categories:["DevOps"],tags:["Sentry","DevOps"]}},alias:"/sentry-getting-started.html"},{name:"my-opinion-in-tailwind-css",path:"/my-opinion-in-tailwind-css",component:()=>i(()=>import("./2021-02-01-my-opinion-in-tailwind-css.4813d2cd.js"),["assets/2021-02-01-my-opinion-in-tailwind-css.4813d2cd.js","assets/Post.0dc6cdb1.js","assets/Post.9c4ecd50.css","assets/vendor.a22b69d8.js"]),props:!0,meta:{frontmatter:{title:"\u8F7B\u4F53\u9A8C\u4E00\u756A Tailwind CSS \u540E\uFF0C\u6765\u8C08\u8C08\u6211\u5BF9\u5B83\u7684\u770B\u6CD5",author:"lwy1010",authorProfile:"https://github.com/lwy1010",type:"post",lang:"zh-CN",date:"2021-02-01T17:56:14.000Z",description:"\u8F7B\u4F53\u9A8C\u4E00\u756A Tailwind CSS \u540E\uFF0C\u6765\u8C08\u8C08\u6211\u5BF9\u5B83\u7684\u770B\u6CD5",image:"/images/2021/02/tailwindcss.png",categories:["CSS"],tags:["Tailwind","CSS"]}},alias:"/my-opinion-in-tailwind-css.html"},{name:"more",path:"/more",component:()=>i(()=>import("./more.a2b1301e.js"),["assets/more.a2b1301e.js","assets/Post.0dc6cdb1.js","assets/Post.9c4ecd50.css","assets/vendor.a22b69d8.js"]),props:!0,meta:{frontmatter:{title:"\u4E86\u89E3\u66F4\u591A"}},alias:"/more.html"},{name:"kbone",path:"/kbone",component:()=>i(()=>import("./2021-05-28-kbone.5bb251ac.js"),["assets/2021-05-28-kbone.5bb251ac.js","assets/Post.0dc6cdb1.js","assets/Post.9c4ecd50.css","assets/vendor.a22b69d8.js"]),props:!0,meta:{frontmatter:{title:"kbone\uFF0C\u8BA9\u4F60\u7684 H5 \u5FEB\u901F\u9002\u914D\u5C0F\u7A0B\u5E8F",author:"\u5C91\u6210\u5A01",authorProfile:"https://github.com/CENcw",type:"post",lang:"zh-CN",date:"2021-05-28T00:00:00.000Z",description:"kbone\uFF0C\u8BA9\u4F60\u7684 H5 \u5FEB\u901F\u9002\u914D\u5C0F\u7A0B\u5E8F",image:"/images/2021/05/kbone.png",categories:["\u5C0F\u7A0B\u5E8F"],tags:["Kbone","\u5C0F\u7A0B\u5E8F"]}},alias:"/kbone.html"},{name:"internationalization",path:"/internationalization",component:()=>i(()=>import("./2021-06-28-internationalization.a64d1e48.js"),["assets/2021-06-28-internationalization.a64d1e48.js","assets/Post.0dc6cdb1.js","assets/Post.9c4ecd50.css","assets/vendor.a22b69d8.js"]),props:!0,meta:{frontmatter:{title:"\u524D\u7AEF\u5FEB\u901F\u56FD\u9645\u5316\u65B9\u6848",author:"\u9EC4\u5B9D\u6021",authorProfile:"https://github.com/BaoYihahaha",type:"post",lang:"zh-CN",date:"2021-06-28T00:00:00.000Z",description:"\u524D\u7AEF\u5FEB\u901F\u56FD\u9645\u5316\u65B9\u6848",image:"/images/2021/06/i18n.jpeg",categories:["i18n"],tags:["i18n","\u56FD\u9645\u5316"]}},alias:"/internationalization.html"},{name:"fe-team-code-style-in-action",path:"/fe-team-code-style-in-action",component:()=>i(()=>import("./2020-12-31-fe-team-code-style-in-action.d048e9e0.js"),["assets/2020-12-31-fe-team-code-style-in-action.d048e9e0.js","assets/Post.0dc6cdb1.js","assets/Post.9c4ecd50.css","assets/vendor.a22b69d8.js"]),props:!0,meta:{frontmatter:{title:"\u524D\u7AEF\u5DE5\u7A0B\u5316\u5B9E\u8DF5\u4E4B\u56E2\u961F\u4EE3\u7801\u89C4\u8303",author:"lwy1010",authorProfile:"https://github.com/lwy1010",type:"post",lang:"zh-CN",date:"2020-12-30T17:56:14.000Z",description:"\u524D\u7AEF\u5DE5\u7A0B\u5316\u5B9E\u8DF5\u4E4B\u56E2\u961F\u4EE3\u7801\u89C4\u8303",image:"/images/2020/12/lint.png",categories:["\u9879\u76EE\u89C4\u8303"],tags:["ESlint","stylelint","Prettier","Husky"]}},alias:"/fe-team-code-style-in-action.html"},{name:"fe-design-atterns",path:"/fe-design-atterns",component:()=>i(()=>import("./2021-11-03-fe-design-atterns.7f2acb07.js"),["assets/2021-11-03-fe-design-atterns.7f2acb07.js","assets/Post.0dc6cdb1.js","assets/Post.9c4ecd50.css","assets/vendor.a22b69d8.js"]),props:!0,meta:{frontmatter:{title:"\u524D\u7AEF\u5E38\u7528\u8BBE\u8BA1\u6A21\u5F0F",author:"\u53F6\u5174\u80DC",authorProfile:"https://github.com/Gertyxs",type:"post",lang:"zh-CN",date:"2021-11-4",description:"\u524D\u7AEF\u5E38\u7528\u8BBE\u8BA1\u6A21\u5F0F",image:"/images/2021/11/JavaScript.png",categories:["\u8BBE\u8BA1\u6A21\u5F0F"],tags:["\u8BBE\u8BA1\u6A21\u5F0F"]}},alias:"/fe-design-atterns.html"},{name:"dark-mode-guide-on-web",path:"/dark-mode-guide-on-web",component:()=>i(()=>import("./2021-04-29-dark-mode-guide-on-web.92a37073.js"),["assets/2021-04-29-dark-mode-guide-on-web.92a37073.js","assets/Post.0dc6cdb1.js","assets/Post.9c4ecd50.css","assets/vendor.a22b69d8.js"]),props:!0,meta:{frontmatter:{title:"Web \u6DF1\u8272\u6A21\u5F0F\u9002\u914D\u7B80\u660E\u6307\u5357",author:"lwy1010",authorProfile:"https://github.com/lwy1010",type:"post",lang:"zh-CN",date:"2021-04-29T00:00:00.000Z",description:"Web \u6DF1\u8272\u6A21\u5F0F\u9002\u914D\u7B80\u660E\u6307\u5357",image:"/images/2021/04/dark-mode.png",categories:["CSS"],tags:["Dark Mode","CSS"]}},alias:"/dark-mode-guide-on-web.html"},{name:"css-grid",path:"/css-grid",component:()=>i(()=>import("./2020-11-16-css-grid.6188a9fc.js"),["assets/2020-11-16-css-grid.6188a9fc.js","assets/Post.0dc6cdb1.js","assets/Post.9c4ecd50.css","assets/vendor.a22b69d8.js"]),props:!0,meta:{frontmatter:{title:"\u521D\u8BC6 CSS Grid",author:"hejx",authorProfile:"https://github.com/hejianxian",type:"post",lang:"zh-CN",date:"2020-11-16T17:56:14.000Z",description:"\u521D\u8BC6 CSS Grid",image:"https://user-images.githubusercontent.com/6087438/36086132-65ec807e-1005-11e8-804d-f440ce8338b0.png",categories:["CSS"],tags:["CSS Grid","CSS"]}},alias:"/css-grid.html"},{name:"axios-source-analysis",path:"/axios-source-analysis",component:()=>i(()=>import("./2020-11-15-axios-source-analysis.5a97323a.js"),["assets/2020-11-15-axios-source-analysis.5a97323a.js","assets/Post.0dc6cdb1.js","assets/Post.9c4ecd50.css","assets/vendor.a22b69d8.js"]),props:!0,meta:{frontmatter:{title:"Axios \u6E90\u7801\u5206\u6790",author:"hejx",authorProfile:"https://github.com/hejianxian",type:"post",lang:"zh-CN",date:"2020-11-15T17:56:14.000Z",description:"Axios \u6E90\u7801\u5206\u6790",image:"/images/2020/11/axios.png",categories:["JavaScript"],tags:["Axios","JavaScript"]}},alias:"/axios-source-analysis.html"},{name:"autoi8n-scheme",path:"/autoi8n-scheme",component:()=>i(()=>import("./2021-08-30-autoi8n-scheme.828e5cd8.js"),["assets/2021-08-30-autoi8n-scheme.828e5cd8.js","assets/Post.0dc6cdb1.js","assets/Post.9c4ecd50.css","assets/vendor.a22b69d8.js"]),props:!0,meta:{frontmatter:{title:"\u81EA\u52A8\u56FD\u9645\u5316\u65B9\u6848\u63A2\u7A76",author:"\u53F6\u5174\u80DC",authorProfile:"https://github.com/Gertyxs",type:"post",lang:"zh-CN",date:"2021-08-30T00:00:00.000Z",description:"\u81EA\u52A8\u56FD\u9645\u5316\u65B9\u6848\u63A2\u7A76",image:"/images/2021/08/auto-i18n.jpeg",categories:["i18n"],tags:["i18n","\u56FD\u9645\u5316"]}},alias:"/autoi8n-scheme.html"},{name:"about",path:"/about",component:()=>i(()=>import("./about.9c652d12.js"),["assets/about.9c652d12.js","assets/Post.0dc6cdb1.js","assets/Post.9c4ecd50.css","assets/vendor.a22b69d8.js"]),props:!0,meta:{frontmatter:{title:"\u5173\u4E8E - WorkPlusFE's Blog"}},alias:"/about.html"},{name:"index",path:"/",component:()=>i(()=>import("./index.dc6eb5b1.js"),["assets/index.dc6eb5b1.js","assets/Post.0dc6cdb1.js","assets/Post.9c4ecd50.css","assets/vendor.a22b69d8.js"]),props:!0,meta:{frontmatter:{title:"WorkPlusFE's Blog",prose:!1}},alias:"/index.html"}],Y={class:"py-8 px-6"},W={class:"max-w-screen-lg mx-auto opacity-50 flex justify-center"},G={class:"text-sm"},J=r("a",{target:"_blank",rel:"noopener",href:"https://creativecommons.org/licenses/by-nc-sa/4.0/",style:{color:"inherit"},class:"!font-normal"}," CC BY-NC-SA 4.0 ",-1),U=d({setup(t){const e=u().get("year");return(a,n)=>(l(),m("footer",Y,[r("div",W,[r("span",G,[J,v(" "+k(h(e))+" \xA9 WorkPlusFE ",1)])])]))}}),X={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},q=r("path",{d:"M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05L3.515 4.93zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414l-2.121-2.121zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414l2.121-2.121zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414l2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z",fill:"currentColor"},null,-1),K=[q];function Q(t,e){return l(),m("svg",X,K)}var ee={name:"ri-sun-line",render:Q};const te={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},oe=r("path",{d:"M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938A7.999 7.999 0 0 0 4 12z",fill:"currentColor"},null,-1),ae=[oe];function ne(t,e){return l(),m("svg",te,ae)}var se={name:"ri-moon-line",render:ne};const E=z(),re=T(E);function Ne(t){const e=u(t);return e.year()===u().year()?e.format("MM-DD"):e.format("YYYY-MM-DD")}const ie=d({setup(t){return(e,a)=>{const n=se,o=ee;return l(),m("a",{class:"select-none",title:"Toggle Color Scheme",onClick:a[0]||(a[0]=s=>h(re)())},[h(E)?(l(),y(n,{key:0})):(l(),y(o,{key:1}))])}}}),ce={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},le=r("path",{d:"M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588c-.094-.117.34.427.433.539c.19.227.33.365.44.438c.204.137.587.196 1.15.14c.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292c-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047c.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308c1.477-.933 2.613-1.226 3.422-1.096c.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19c.691.936 1.058 2.045 1.058 3.293c0 3.757-1.674 5.665-4.642 6.392c.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716a1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446l.005-.705c.005-.708.007-1.338.007-1.998c0-.697-.183-1.152-.425-1.36c-.661-.57-.326-1.655.54-1.752c2.967-.333 4.337-1.482 4.337-4.66c0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947c-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66c.865.097 1.201 1.177.544 1.748c-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z",fill:"currentColor"},null,-1),pe=[le];function me(t,e){return l(),m("svg",ce,pe)}var ue={name:"ri-github-line",render:me};const _e={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},de=r("path",{d:"M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1zm13 2H6v15.432l6-3.761l6 3.761V4z",fill:"currentColor"},null,-1),he=[de];function ge(t,e){return l(),m("svg",_e,he)}var fe={name:"ri-bookmark-line",render:ge};const ve={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ye=r("path",{d:"M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM7 6h4v4H7V6zm0 6h10v2H7v-2zm0 4h10v2H7v-2zm6-9h4v2h-4V7z",fill:"currentColor"},null,-1),be=[ye];function xe(t,e){return l(),m("svg",ve,be)}var Ee={name:"ri-article-line",render:xe};var Se=(t,e)=>{for(const[a,n]of e)t[a]=n;return t};const we={},_=t=>(A("data-v-14ed2cc0"),t=t(),P(),t),Ce={class:"fixed top-0 inset-x-0 z-50 h-4.5rem px-6 bg-white dark:bg-dark-800 !bg-opacity-80 backdrop-blur"},ke={class:"max-w-screen-lg mx-auto h-full flex justify-between items-center"},ze=_(()=>r("span",{class:"lt-md:hidden"},[v(" WorkPlusFE's Blog "),r("sup",{class:"text-xs subpixel-antialiased bg-green-500 px-1 rounded-sm not-italic text-normal text-white"},"beta")],-1)),Te=_(()=>r("span",{class:"md:hidden text-xl"},"@w6s/blog",-1)),Ae={class:"nav"},Pe=_(()=>r("span",{class:"lt-md:hidden"},"\u6587\u7AE0",-1)),Ve=_(()=>r("span",{class:"lt-md:hidden"},"\u5173\u4E8E",-1)),$e={href:"https://github.com/workplusfe",target:"_blank",rel:"noopener",title:"GitHub"};function De(t,e){const a=b("router-link"),n=Ee,o=fe,s=ue,c=ie;return l(),m("header",Ce,[r("div",ke,[p(a,{class:"text-2xl font-bold select-none outline-none",to:"/",focusable:"false"},{default:g(()=>[ze,Te]),_:1}),r("nav",Ae,[p(a,{to:"/",title:"Post"},{default:g(()=>[Pe,p(n,{class:"md:hidden"})]),_:1}),p(a,{to:"/about",title:"About"},{default:g(()=>[Ve,p(o,{class:"md:hidden"})]),_:1}),r("a",$e,[p(s)]),p(c)])])])}var je=Se(we,[["render",De],["__scopeId","data-v-14ed2cc0"]]);const Le={class:"pt-4.5rem"},Oe={class:"px-6 py-10 md:py-16"},Me=d({setup(t){return V({title:"WorkPlusFE",meta:[{property:"og:title",content:"WorkPlusFE's Blog"},{property:"og:image",content:"https://fe-blog.workplus.io/avatar.png"},{property:"og:type",content:"website"},{name:"description",content:"\u6052\u62D3\u9AD8\u79D1\u524D\u7AEF\u6280\u672F\u90E8\u535A\u5BA2\uFF0C\u5206\u4EAB\u524D\u7AEF\u6280\u672F\u53CA\u9879\u76EE\u7ECF\u9A8C"}]}),(e,a)=>{const n=je,o=b("router-view"),s=U;return l(),m($,null,[p(n),r("main",Le,[r("div",Oe,[p(o)])]),p(s)],64)}}}),Re=(t,e,a)=>t.hash?{el:decodeURIComponent(t.hash),top:120,behavior:"smooth"}:a||{top:0};D(Me,{routes:Z,scrollBehavior:Re},t=>{u.extend(j),Object.values({"./modules/decode-uri.ts":M,"./modules/lazy-load.ts":I,"./modules/nprogress.ts":B}).map(e=>{var a;return(a=e.install)==null?void 0:a.call(e,t)})});export{Se as _,Ne as f};
