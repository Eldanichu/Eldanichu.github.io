import{M as _,N as p,O as q,P as l,L as k,Q as m,R as y,H as x,J as P,p as F,g as S,S as E,F as L,U as b,V as H,W as T,r as v,o as G,n as U,X as W,Y as $,q as C,v as M,K as X,Z as B,T as Y,l as K,_ as J,c as Q,i as D,$ as Z}from"./@vue-ff8d5369.js";import{c as z}from"./pinia-9730a962.js";import{R as ee,c as te,a as se}from"./vue-router-45ab5432.js";import{l as oe}from"./lodash-57b79b46.js";import{d as ne,c as ae,N as re,a as ce,b as ie,e as le,f as de,g as _e,h as ue,i as pe,j as me,k as fe,l as ve,m as he,n as ye,o as ge,p as be,q as xe}from"./naive-ui-85d27950.js";import"./@babel-725317a4.js";import"./seemly-2e71c052.js";import"./evtd-b614532e.js";import"./vooks-bac2b392.js";import"./vdirs-b0483831.js";import"./vueuc-927153c2.js";import"./@css-render-1e36a61c.js";import"./@juggle-41516555.js";import"./css-render-d3958e6a.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-d880f9ca.js";import"./treemate-25c27bff.js";import"./date-fns-975a2d8f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(n){if(n.ep)return;n.ep=!0;const t=o(n);fetch(n.href,t)}})();const g=(s,e)=>{const o=s.__vccOpts||s;for(const[a,n]of e)o[a]=n;return o},we={name:"AppHeader"},$e={class:"app-header"},ke=q('<div class="header-wrapper" data-v-8df9455c><nav class="app-navi" data-v-8df9455c><div class="app-title" data-v-8df9455c> Eldan Mir </div><div class="app-pages" data-v-8df9455c></div><div class="app-settings" data-v-8df9455c> Settings </div></nav></div>',1),Se=[ke];function Ne(s,e,o,a,n,t){return _(),p("header",$e,Se)}const Ie=g(we,[["render",Ne],["__scopeId","data-v-8df9455c"]]);const Oe={},Pe={class:"app-main"},Ee={class:"main-warp"};function Le(s,e){return _(),p("main",Pe,[l("div",Ee,[k(s.$slots,"default",{},void 0,!0)])])}const Ce=g(Oe,[["render",Le],["__scopeId","data-v-744c6ddc"]]);const Me={class:"app-container"},Ve={__name:"AppView",setup(s){return(e,o)=>(_(),p("div",Me,[m(Ie),m(Ce,null,{default:y(()=>[m(x(ee))]),_:1})]))}},Ae=g(Ve,[["__scopeId","data-v-818fdb00"]]),Be="modulepreload",De=function(s){return"/"+s},R={},I=function(e,o,a){if(!o||o.length===0)return e();const n=document.getElementsByTagName("link");return Promise.all(o.map(t=>{if(t=De(t),t in R)return;R[t]=!0;const r=t.endsWith(".css"),d=r?'[rel="stylesheet"]':"";if(!!a)for(let u=n.length-1;u>=0;u--){const f=n[u];if(f.href===t&&(!r||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${d}`))return;const c=document.createElement("link");if(c.rel=r?"stylesheet":Be,r||(c.as="script",c.crossOrigin=""),c.href=t,document.head.appendChild(c),r)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>e()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},Re=(s,e)=>{const o=s[e];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((a,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))})},O=async s=>(await Re(Object.assign({"../GameData/Items.yaml":()=>I(()=>import("./Items-82e3eb48.js"),[]),"../GameData/Monsters.yaml":()=>I(()=>import("./Monsters-0cea1b44.js"),[]),"../GameData/Skills.yaml":()=>I(()=>import("./Skills-a3cfe184.js"),[])}),`../GameData/${s}.yaml`)).default,Fe=200,He={__name:"GameProvider",emits:["loading"],setup(s,{emit:e}){const o=[{name:"物品",key:"items",req:O("Items")},{name:"技能",key:"skills",req:O("Skills")},{name:"怪物",key:"monsters",req:O("Monsters")}],a=P({show:!0,name:"-/-",index:0,total:o.length});e("loading",a);const n=P({items:null,monsters:null,skills:null}),t=()=>{a.show=!(a.index>=a.total)},r=(d,i,c,u)=>{oe.delay(()=>{n[c]=d,a.name=i,a.index++,t(),e("loading",a)},u)};return o.reduce((d,i,c)=>{i.req.then(u=>{r(u,i.name,i.key,Fe*(c+1))})},[]),F("DB",n),(d,i)=>k(d.$slots,"default")}};const Te=s=>(H("data-v-e73c30ab"),s=s(),T(),s),je={class:"loading-warp"},qe={class:"loading-content"},Ge={class:"bar"},Ue=Te(()=>l("span",{class:"title"},"Loading...",-1)),We={class:"sub-title"},Xe={class:"res-count res"},Ye={class:"res-name res"},Ke={key:1,class:"res-name res"},Je={__name:"LoadingScreen",props:{index:{type:Number,default:0},total:{type:Number,default:1},name:{type:String,default:"-/-"}},setup(s){const e=s,o=S(()=>e.index/Math.max(e.total,1)*100);return(a,n)=>{const t=E("n-progress");return _(),p("div",je,[l("div",qe,[l("div",Ge,[Ue,m(t,{type:"line",percentage:o.value,height:32,"border-radius":50,"fill-border-radius":0,"indicator-text-color":"#fff"},null,8,["percentage"]),l("div",We,[s.name!=="-/-"?(_(),p(L,{key:0},[l("span",Xe,"("+b(s.index)+"/"+b(s.total)+")",1),l("span",Ye,"正在加载"+b(s.name)+"数据...",1)],64)):(_(),p("span",Ke,"正在准备数据..."))])])])])}}},Qe=g(Je,[["__scopeId","data-v-e73c30ab"]]),Ze={__name:"FollowMouseContainer",props:{offset:{type:Object,default:()=>({})}},setup(s){const e=s,o=v(null),a=P({y:"",x:""}),n=S(()=>parseFloat(a.x)>=0&&parseFloat(a.y)>=0);let{width:t,height:r}=document.body.getBoundingClientRect();const d=i=>{let{x:c=0,y:u=0}=e.offset,{clientX:f,clientY:w}=i;a.x=f+"px",a.y=w+"px";let{firstElementChild:h}=o.value;if(!h)return;let{width:V,height:A}=h.getBoundingClientRect();h.style.position="absolute",f+V>=t?h.style.left=f-V-c+"px":h.style.left=f+c+"px",w+A>=r?h.style.top=w-A-u+"px":h.style.top=w+u+"px"};return G(()=>{U(()=>{document.addEventListener("mousemove",d)})}),W(()=>{document.removeEventListener("mousemove",d)}),(i,c)=>(_(),$(X,{to:"body"},[C(l("div",{class:"follow-container",ref_key:"follower",ref:o},[k(i.$slots,"default")],512),[[M,n.value]])]))}};const ze={class:"game-slot"},et={class:"slot-warp"},tt={class:"slot-tip"},st={__name:"GameSlot",props:{item:{type:Object,default:()=>({stacks:0,name:"-",props:{}})}},setup(s){const e=s;let{item:o}=e;const a=S(()=>({data:o,showNumber:o.stacks>0}));let n=v(!1);const t=d=>{n=d},r=d=>{n&&console.log(d)};return(d,i)=>(_(),p("div",ze,[l("div",et,[l("a",{class:"slot-object",onClickPassive:i[0]||(i[0]=c=>r(c)),onMouseenter:i[1]||(i[1]=c=>t(!0)),onMouseleave:i[2]||(i[2]=c=>t(!1))},[C(l("div",tt,[l("span",null,b(x(o).stacks),1)],512),[[M,a.value.showNumber]])],32)])]))}},ot=g(st,[["__scopeId","data-v-d7d20c70"]]),nt={__name:"MouseItemProvider",setup(s){let e=v({x:0,y:12}),o=v({});const a=S(()=>{let r=o.value;return Object.entries(o.value).length&&r.stacks>0});return F("MI",{setOffset:(r={})=>{e=v(Object.assign(e.value,r))},setItem:(r={})=>{o=v(Object.assign(o.value,r))}}),(r,d)=>(_(),p(L,null,[m(Ze,{offset:x(e)},{default:y(()=>[C(m(ot,{item:x(o)},null,8,["item"]),[[M,a.value]])]),_:1},8,["offset"]),k(r.$slots,"default")],64))}};const at={__name:"App",setup(s){const e=v({}),o=a=>{console.log(a),e.value=a};return(a,n)=>{const t=E("n-config-provider");return _(),$(He,{onLoading:o},{default:y(()=>[e.value.show?(_(),$(Qe,{key:0,index:e.value.index,total:e.value.total,name:e.value.name},null,8,["index","total","name"])):B("",!0),m(Y,{name:"slide-in-out"},{default:y(()=>[e.value.show?B("",!0):(_(),$(t,{key:0,theme:x(ne)},{default:y(()=>[m(nt,null,{default:y(()=>[m(Ae)]),_:1})]),_:1},8,["theme"]))]),_:1})]),_:1})}}};const rt={class:"stat-func"},ct={class:"func-buttons"},it={__name:"StatsFunctions",props:{modelValue:{type:String,default:""}},emits:["sfClick","update:modelValue"],setup(s,{emit:e}){const o=s,a=v("");K(()=>o.modelValue,r=>{a.value=r},{immediate:!0});const n=v([{label:"人物",value:"char"},{label:"技能",value:"skill"},{label:"连击",value:"combo"},{label:"属性",value:"preference"},{label:"英雄",value:"hero"},{label:"合击",value:"co-skill"}]),t=function({value:r}){e("sfClick",{value:r}),e("update:modelValue",r)};return(r,d)=>{const i=E("n-button");return _(),p("div",rt,[l("div",ct,[(_(!0),p(L,null,J(n.value,c=>(_(),p("div",{class:"f-button",key:c.value},[m(i,{onClick:u=>t(c)},{default:y(()=>[Q(b(c.label),1)]),_:2},1032,["onClick"])]))),128))])])}}},lt=g(it,[["__scopeId","data-v-fe1c9bb2"]]),j=s=>(H("data-v-eb6cb537"),s=s(),T(),s),dt={class:"main-view"},_t={class:"container"},ut={class:"aside"},pt=j(()=>l("div",{class:"header"}," header ",-1)),mt=j(()=>l("div",{class:"content"}," content ",-1)),ft={__name:"HomeView",setup(s){D("DB");const e=D("MI");return e.setOffset({x:24}),e.setItem({stacks:0}),(o,a)=>(_(),p("div",dt,[l("div",_t,[l("div",ut,[m(lt)]),pt,mt])]))}};const vt=g(ft,[["__scopeId","data-v-eb6cb537"]]),ht=te({history:se("/"),routes:[{path:"/",name:"home",component:vt}]});const yt=ae({components:[re,ce,ie,le,de,_e,ue,pe,me,fe,ve,he,ye,ge,be,xe]}),N=Z(at);N.use(z());N.use(ht);N.use(yt);N.mount("#app");