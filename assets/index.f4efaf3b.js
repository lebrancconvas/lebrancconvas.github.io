import{j as e,a as i,B as n,T as r,u as d,b as l,C as u,c as p,d as v,e as C,L as k,f as j,R as b,g as h,h as M,i as y}from"./vendor.bd317d53.js";const D=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))g(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const A of a.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&g(A)}).observe(document,{childList:!0,subtree:!0});function m(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function g(t){if(t.ep)return;t.ep=!0;const a=m(t);fetch(t.href,a)}};D();const I=()=>e("div",{children:e("h1",{children:"Poom Yimyuean"})}),f=()=>e("div",{children:e("h1",{children:"Student, Web Developer, Game Developer"})}),w=()=>i("div",{children:[e(n,{children:e(r,{variant:"h3",children:e(I,{})})}),e(n,{children:e(r,{variant:"h5",children:e(f,{})})})]}),x=()=>i("div",{children:[e(n,{children:e(r,{variant:"h3",children:"About Me"})}),e(n,{mt:2,children:i(r,{variant:"h6",children:["I'm Poom, The 3rd-year Computer Science Student at King Mongkut's Institute of Technology Ladkrabang. ",e("br",{})," I'm interested in Web Development, Game Development, and Data Science."]})})]});var U="data:image/png;base64,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",Y="/assets/Linkedin-Logo.633570d3.png",J="data:image/png;base64,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";const B=()=>i("div",{children:[e(n,{children:e(r,{variant:"h3",children:"Profile"})}),i(n,{mt:2,children:[e("a",{href:"https://github.com/lebrancconvas",children:e("img",{src:U,type:"image/png",alt:"Github-Logo",width:"50",height:"50",style:{marginRight:20}})}),e("a",{href:"https://www.linkedin.com/in/poom-yimyuean-6340a3b8",children:e("img",{src:Y,type:"image/png",alt:"Linkedin-Logo",width:"50",height:"50",style:{marginRight:20}})}),e("a",{href:"https://poomkunscarlet.itch.io/",children:e("img",{src:J,type:"image/png",alt:"Itch-Logo",width:"50",height:"50"})})]})]}),Q=()=>{const o=d();return i("div",{children:[e(n,{children:e(r,{variant:"h3",children:"Projects"})}),i(n,{mt:2,children:[e(l,{variant:"contained",sx:{mr:2},onClick:()=>o("/web"),children:"Web Projects"}),e(l,{variant:"contained",sx:{mr:2},onClick:()=>o("/game"),children:"Game Projects"}),e(l,{variant:"contained",onClick:()=>o("/other"),children:"Other Projects"})]})]})},S=()=>e("div",{children:e(n,{children:i(r,{variant:"h6",children:["This Website is made with ",e("a",{href:"https://vitejs.dev/",children:"Vite"})," + ",e("a",{href:"https://reactjs.org/",children:"ReactJS"})," and ",e("a",{href:"https://mui.com/",children:"Material UI"})," by Poom in 2021."]})})}),E=()=>i("div",{children:[e(n,{sx:{textAlign:"center"},children:e(w,{})}),e(n,{mt:5,children:e(x,{})}),e(n,{mt:7,children:e(B,{})}),e(n,{mt:7,children:e(Q,{})}),e(n,{mt:10,sx:{textAlign:"center"},children:e(S,{})})]}),s=[{id:1,category:["Web","Game"],name:"Idol-Fliped-Card",description:"Memory Game about Idol Card.",link:"https://wotadeveloper.github.io/Idols-Fliped-Card/",image:"../assets/img/WebImage/Idol-Fliped-Card.png"}];var G="/assets/Idol-Fliped-Card.1b7b6983.png";const K=()=>{const o=d(),c=()=>o("/");return i("div",{children:[e(n,{sx:{textAlign:"center"},children:e(r,{variant:"h3",children:"Web Projects"})}),e(n,{children:i(u,{sx:{maxWidth:374},children:[e(p,{component:"img",height:"300",alt:s[0].name,image:G}),i(v,{children:[e(r,{variant:"h5",children:e("b",{children:s[0].name})}),e(r,{children:s[0].description})]}),e(C,{children:e(l,{size:"small",children:e(k,{href:s[0].link,underline:"none",children:"View Project"})})})]})}),e(n,{mt:5,sx:{textAlign:"center"},children:e(l,{variant:"contained",onClick:c,children:"Back"})})]})},P=()=>{const o=d();return i("div",{children:[e(n,{sx:{textAlign:"center"},children:e(r,{variant:"h3",children:"Game Projects"})}),e(n,{mt:5,sx:{textAlign:"center"},children:e(l,{variant:"contained",onClick:()=>o("/"),children:"Back"})})]})},X=()=>{const o=d();return i("div",{children:[e(n,{sx:{textAlign:"center"},children:e(r,{variant:"h3",children:"Other Projects"})}),e(n,{mt:5,sx:{textAlign:"center"},children:e(l,{variant:"contained",onClick:()=>o("/"),children:"Back"})})]})};function F(){return e("div",{children:e(j,{children:e(n,{children:i(b,{children:[e(h,{exact:!0,path:"/",element:e(E,{})}),e(h,{exact:!0,path:"/web",element:e(K,{})}),e(h,{exact:!0,path:"/game",element:e(P,{})}),e(h,{exact:!0,path:"/other",element:e(X,{})})]})})})})}M.render(e(y.StrictMode,{children:e(F,{})}),document.getElementById("root"));
