import{d as u,o as c,c as d,a as p,u as w,R as H,F as g,b as n,e as Z,r as W,f as z,t as l,g as m,w as _,v as M,h as b,i as F,m as P,j as B,p as R,k as D,l as S,n as $,q,s as A}from"./vendor.c517fc27.js";const j=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}};j();var k="/assets/logo.2e87be2f.png";const G=n("header",null,[n("img",{alt:"Logo",class:"logo",src:k,height:"125"})],-1),Y=u({setup(s){return(t,r)=>(c(),d(g,null,[G,p(w(H))],64))}}),f=Z({id:"auth",state:()=>({user:null}),getters:{},actions:{setUser(s){this.user=s}}}),L=[{id:1,email:"krishna@abc.com",password:"sample123",name:"Krishna Pankhania",orders:[{id:1002,item:"Pasta",from:"Bistro Bazaar",count:1,image:"https://images.unsplash.com/photo-1559054663-e8d23213f55c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",date:"24/2/2022 12:00"},{id:1003,item:"Pizza",from:"Cuisine Street ",count:2,image:"https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",date:"23/2/2022 12:20"},{id:1004,item:"Fried Rice",from:"Grub lord ",count:2,image:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",date:"12/2/2022 11:00"},{id:1004,item:"Pancakes",from:"Menu Feed",count:1,image:"https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",date:"24/2/2022 12:00"}]},{id:2,email:"john@abc.com",password:"sample123",name:"John Doe",orders:[{id:1005,item:"Pasta",from:"Eatery Hotspot",count:1,image:"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",date:"10/1/2022 14:00"},{id:1006,item:"Pizza",from:"Cuisine Street",count:2,image:"https://images.unsplash.com/photo-1501959915551-4e8d30928317?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",date:"18/6/2022 12:00"},{id:1007,item:"Fried Rice",from:"Green Curry",count:2,image:"https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",date:"24/2/2022 12:00"},{id:1008,item:"Pancakes",from:"Salty Squid",count:1,image:"https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",date:"24/2/2022 19:00"}]},{id:3,email:"lily@abc.com",password:"lilylily123",name:"Lily Woods",orders:[{id:1008,item:"Pasta",from:"Pancake World",count:1,image:"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",date:"9/2/2022 12:00"},{id:1009,item:"Pizza",from:"Freddy\u2019s Stove ",count:2,image:"https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",date:"28/2/2022 09:00"}]},{id:4,email:"peter@abc.com",password:"peterspidy",name:"Peter Parker",orders:[{id:1010,item:"Pasta",from:"Paterro\u2019s Kitchen",count:1,image:"https://images.unsplash.com/photo-1604152135912-04a022e23696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",date:"12/2/2022 12:30"},{id:1011,item:"Pizza",from:"Veganic Corner ",count:2,image:"https://images.unsplash.com/photo-1580959375944-abd7e991f971?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",date:"14/3/2022 15:00"},{id:1012,item:"Fried Rice",from:"Grub lord ",count:2,image:"https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",date:"19/3/2022 18:45"},{id:1016,item:"Pancakes",from:"Menu Feed",count:1,image:"https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",date:"10/2/2022 18:00"}]}];class N{login(t,r){const e=L.filter(o=>o.email===t&&o.password===r);return e.length>0?{success:!0,data:e[0]}:{success:!1,data:"Unauthenticated access."}}}const V=new N;var y=(s,t)=>{const r=s.__vccOpts||s;for(const[e,o]of t)r[e]=o;return r};const O={setup(){const s=f(),t=W({email:"",password:"",error:null}),r={email:{required:b,email:F},password:{required:b,minLength:P(6)}},e=z(r,t);function o(){if(this.v$.$validate(),this.v$.$error)t.error="Validation failed. Please input proper details";else{const a=V.login(t.email,t.password);a.success?(console.log("response.data",a.data),s.setUser(a.data),h.push("/orders")):t.error=a.data}}return{state:t,v$:e,submitForm:o}}},C={class:"root"},T={key:0,class:"error",id:"submit-error"},U={key:0,class:"error"},E={key:0,class:"error"};function I(s,t,r,e,o,a){return c(),d("div",C,[e.state.error?(c(),d("span",T,l(e.state.error),1)):m("",!0),n("p",null,[_(n("input",{type:"text",placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=i=>e.state.email=i)},null,512),[[M,e.state.email]]),e.v$.email.$error?(c(),d("span",U,l(e.v$.email.$errors[0].$message),1)):m("",!0)]),n("p",null,[_(n("input",{type:"password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=i=>e.state.password=i)},null,512),[[M,e.state.password]]),e.v$.password.$error?(c(),d("span",E,l(e.v$.password.$errors[0].$message),1)):m("",!0)]),n("button",{onClick:t[2]||(t[2]=(...i)=>e.submitForm&&e.submitForm(...i))},"Login")])}var K=y(O,[["render",I],["__scopeId","data-v-5ae20380"]]);const J=u({setup(s){return(t,r)=>(c(),d("main",null,[p(K)]))}});const Q={setup(){return{authStore:f()}}},v=s=>(R("data-v-5eaba1be"),s=s(),D(),s),X={class:"root"},ee=v(()=>n("h2",null,"My Orders",-1)),te=v(()=>n("hr",null,null,-1)),oe={key:0},se=["src"],ae={class:"item"},re={class:"item-name"},ie={class:"item-from"},ne={class:"item-date"},ce={class:"badge-wrapper"},de={class:"badge"};function le(s,t,r,e,o,a){return c(),d("div",X,[ee,te,e.authStore.user?(c(),d("ul",oe,[(c(!0),d(g,null,B(e.authStore.user.orders,i=>(c(),d("li",{key:i.id},[n("img",{src:i.image},null,8,se),n("div",ae,[n("span",re,l(i.item),1),n("span",ie,l(i.from),1),n("span",ne,l(i.date),1)]),n("div",ce,[n("span",de,l(i.count),1)])]))),128))])):m("",!0)])}var me=y(Q,[["render",le],["__scopeId","data-v-5eaba1be"]]);const ue=u({setup(s){return(t,r)=>(c(),d("main",null,[p(me)]))}}),h=S({history:$("/"),routes:[{path:"/",name:"home",component:J},{path:"/orders",name:"orders",component:ue}]});h.beforeEach(async(s,t,r)=>{const e=f();s.name!=="home"&&e.user===null&&r({name:"home"}),r()});const x=q(Y);x.use(A());x.use(h);x.mount("#app");
