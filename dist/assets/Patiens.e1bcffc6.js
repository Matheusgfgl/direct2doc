var B=Object.defineProperty,w=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var f=(e,t,a)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))E.call(t,a)&&f(e,a,t[a]);if(m)for(var a of m(t))q.call(t,a)&&f(e,a,t[a]);return e},g=(e,t)=>w(e,I(t));import{_ as F,q as M,s as n,v as _,y as s,z as o,A as p,x as i,D as c,C as r}from"./index.b07b2dd9.js";const S={name:"patients",data(){return{patients:[],loading:!1}},computed:{},setup(){},methods:g(h({},M([""])),{async getPatiens(e){}})},z={class:"patients"},O=i("h3",{class:"page-title"},"Pacientes",-1),T=r("Novo Profissional"),U=r("Profissionais ativos"),j=r("Profissionais inativos"),G=["onClick"],H={key:0,class:"activePills"},J={key:1,class:"inactivePills"},K=r(" Ops, n\xE3o encontramos nenhum profissional com este dado! ");function L(e,t,a,Q,b,R){const v=n("v-col"),d=n("v-row"),k=n("v-text-field"),C=n("v-spacer"),P=n("v-btn"),y=n("v-card-title"),A=n("v-tabs-slider"),u=n("v-tab"),x=n("v-tabs"),D=n("v-data-table"),N=n("v-container"),V=n("v-card-text"),$=n("v-card");return p(),_("div",z,[s($,{class:"elevation-0"},{default:o(()=>[s(y,{class:"d-block page-header"},{default:o(()=>[s(d,null,{default:o(()=>[s(v,{cols:"12",md:"12",lg:"12",xl:"12",class:"pt-0"},{default:o(()=>[O]),_:1})]),_:1}),s(d,{align:"center"},{default:o(()=>[s(v,{cols:"12",md:"4",lg:"4",xl:"4",class:"pb-2"},{default:o(()=>[s(k,{modelValue:e.search,"onUpdate:modelValue":t[0]||(t[0]=l=>e.search=l),class:"mt-0 pt-0 text-input-blue","hide-details":"auto",color:"#CDCDCD",label:"Pesquisar profissional","prepend-inner-icon":"mdi-magnify"},null,8,["modelValue"])]),_:1}),s(C),s(P,{class:"add-professional elevation-0 mr-3",color:"#00ADAB",dark:"",onClick:e.openNewProfessionalModal},{default:o(()=>[T]),_:1},8,["onClick"])]),_:1})]),_:1}),s(V,{class:"page-body mx-0"},{default:o(()=>[s(N,{fluid:""},{default:o(()=>[s(d,null,{default:o(()=>[s(x,{"background-color":"#f2f4f8",flat:"",class:"my-4 ml-3",height:"35"},{default:o(()=>[s(A,{color:"#00ADAB"}),s(u,{class:"reserve-filter pa-0 mr-6",onClick:t[1]||(t[1]=l=>e.isActive=!0)},{default:o(()=>[U]),_:1}),s(u,{class:"reserve-filter pa-0",onClick:t[2]||(t[2]=l=>e.isActive=!1)},{default:o(()=>[j]),_:1})]),_:1})]),_:1}),s(D,{headers:e.header,items:e.items,search:e.search,"footer-props":{"items-per-page-options":[10,25,50,100],"items-per-page-text":"Itens por p\xE1gina"},loading:b.loading,"loading-text":"Procurando profissionais...","no-data-text":"Nenhum profissional encontrado!",class:"mt-3 mb-3"},{item:o(({item:l})=>[i("tr",{onClick:W=>e.openInner(l)},[i("td",null,c(l.name),1),i("td",null,c(l.contact.email),1),i("td",null,[i("span",null,c(e.setCrmFormatted(l.crMs)),1)]),i("td",null,[i("span",null,c(e.setSpecialitiesFormatted(l.specialities)),1)]),i("td",null,[l.isActive===!0?(p(),_("span",H,"Ativo")):(p(),_("span",J,"Inativo"))])],8,G)]),"no-results":o(()=>[K]),_:1},8,["headers","items","search","loading"])]),_:1})]),_:1})]),_:1})])}var Z=F(S,[["render",L]]);export{Z as default};
