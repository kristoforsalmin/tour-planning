import{d as f,k as x,o as _,c as p,a as t,l as c,v as m,m as b,e as s,w as l,u as d,F as D,p as w,f as k,R as v,j as N}from"./index-fTsRwZ5w.js";import{c as V,I as L}from"./IconChevronLeft-CZ4Vq3ZT.js";import{L as y}from"./LayoutWork-Jj8_Khkk.js";import{u as R}from"./drivers-BEQAypAq.js";const S={class:"form-control"},g=t("label",{class:"form-control__label",for:"full-name"},"Full name",-1),B={class:"form-control"},C=t("label",{class:"form-control__label",for:"location"},"Located in",-1),F=t("button",{class:"form__submit-button button button--primary"},"Save",-1),I=f({__name:"DriverEditor",props:{driver:{}},emits:["save"],setup(u,{emit:a}){const n=u,i=a,e=x({id:V(),name:"",location:"",...n.driver});return(h,o)=>(_(),p("form",{class:"form",onSubmit:o[2]||(o[2]=b(r=>i("save",e.value),["prevent"]))},[t("div",S,[g,c(t("input",{id:"full-name","onUpdate:modelValue":o[0]||(o[0]=r=>e.value.name=r),class:"text-field",type:"text",required:""},null,512),[[m,e.value.name,void 0,{trim:!0}]])]),t("div",B,[C,c(t("input",{id:"location","onUpdate:modelValue":o[1]||(o[1]=r=>e.value.location=r),class:"text-field",type:"text",placeholder:"e.g., New York",pattern:"[A-Za-z\\s]+",required:""},null,512),[[m,e.value.location,void 0,{trim:!0}]])]),F],32))}}),$=t("h1",null,"Who’s Driving?",-1),T=f({__name:"DriversNewView",setup(u){const a=w(),{addDriver:n}=R();function i(e){n(e),a.push({name:v.Drivers})}return(e,h)=>(_(),p(D,null,[s(d(N),{to:{name:d(v).Drivers},class:"link text-with-icon"},{default:l(()=>[s(L),k(" All Drivers ")]),_:1},8,["to"]),s(y,null,{title:l(()=>[$]),content:l(()=>[s(I,{onSave:i})]),_:1})],64))}});export{T as default};