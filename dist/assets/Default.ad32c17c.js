import{d as y,_,A as l,v as u,x as e,I as x,J as v,K as b,L as g,C,M as N,s as c,y as t,z as n,T as S,B as k,r as D}from"./index.bf3d371e.js";var I="/assets/health.91a0c970.png";const M=y({name:"header",data(){return{showCustomMenu:!1}}}),i=s=>(b("data-v-24c601f6"),s=s(),g(),s),E={class:"main-header"},T=i(()=>e("a",{href:"https://www.direct2doc.com.br/",class:"main-header__logo"},[e("img",{height:"45",style:{filter:"brightness(0) invert(1)"},src:I})],-1)),A={class:"navbar navbar-static-top",role:"navigation"},B=i(()=>e("a",{href:"#",class:"sidebar-toggle","data-toggle":"offcanvas",role:"button"},[e("span",{class:"sr-only"},"Toggle navigation"),e("span",{class:"icon-bar"}),e("span",{class:"icon-bar"}),e("span",{class:"icon-bar"})],-1)),H={class:"navbar-custom-menu"},V={class:"nav navbar-nav"},L={class:"dropdown user user-menu"},P=i(()=>e("img",{class:"dropdown-toggle__icon",width:"30",style:{filter:"brightness(0) invert(1)"},src:"https://www.direct2doc.com.br/assets/uploads/files/admin/tele/411/94098bd8c4b75b48a24f2d196e6993e1.png"},null,-1)),z=i(()=>e("b",null,"Tele",-1)),R=i(()=>e("span",{class:"hidden-xs"},"Rede Meridional",-1)),U=[P,z,R],J=N('<li class="user-header" data-v-24c601f6><img class="main-header__logo" style="filter:brightness(0) invert(1);" src="https://www.direct2doc.com.br/assets/uploads/files/admin/tele/411/94098bd8c4b75b48a24f2d196e6993e1.png" data-v-24c601f6><p class="user-header__text" data-v-24c601f6> Rede Meridional <small data-v-24c601f6>\xDAltimo login 02/07/2022 11:36</small></p></li><li class="user-footer" data-v-24c601f6><div class="pull-left" data-v-24c601f6><a href="https://www.direct2doc.com.br/profile" class="btn-default btn-flat" data-v-24c601f6>Perfil</a></div><div class="pull-center" data-v-24c601f6><a href="#" class="btn btn-default btn-flat inner-switch lg-off" data-v-24c601f6></a></div><div class="pull-right" data-v-24c601f6><a href="https://www.direct2doc.com.br/logout" class="btn-default btn-flat" data-v-24c601f6>Sair</a></div></li>',2),K=[J],j=i(()=>e("li",null,[e("a",{href:"https://www.direct2doc.com.br/logout",style:{"padding-top":"18px"}},[e("i",{class:"fa fa-sign-out","aria-hidden":"true"}),C(" Sair")])],-1));function q(s,d,p,h,m,f){return l(),u("header",E,[T,e("nav",A,[B,e("div",H,[e("ul",V,[e("li",L,[e("button",{onClick:d[0]||(d[0]=x(o=>s.showCustomMenu=!s.showCustomMenu,["prevent"])),class:"dropdown-toggle","data-toggle":"dropdown"},U),e("ul",{class:v(["dropdown-menu",{"dropdown-menu--active":s.showCustomMenu}])},K,2)]),j])])])])}var F=_(M,[["render",q],["__scopeId","data-v-24c601f6"]]);const G={name:"Navbar"},a=s=>(b("data-v-f45a199c"),s=s(),g(),s),O={class:"main-sidebar",style:{"padding-top":"60px"}},Q={class:"sidebar",id:"menuSidebar",style:{height:"auto"}},W={class:"sidebar-menu list",id:"menuSub"},X=a(()=>e("li",{class:"header sidebar-menu__item"},"TELE",-1)),Y={class:"sidebar-menu__item",id:"convenios"},Z=a(()=>e("i",{class:"fa fa-medkit","aria-hidden":"true"},null,-1)),ee=a(()=>e("span",{class:"label"}," Conv\xEAnios ",-1)),se={class:"sidebar-menu__item",id:"pacientes"},ae=a(()=>e("i",{class:"fa fa-medkit","aria-hidden":"true"},null,-1)),te=a(()=>e("span",{class:"label"}," Pacientes ",-1)),oe={class:"sidebar-menu__item",id:"tele_exames"},ne=a(()=>e("i",{class:"fa fa-list-alt","aria-hidden":"true"},null,-1)),ie=a(()=>e("span",{class:"label"},"Consultas",-1)),ce={class:"sidebar-menu__item",id:"customer"},de=a(()=>e("i",{class:"fa fa-child","aria-hidden":"true"},null,-1)),le=a(()=>e("span",{class:"label"},"Cl\xEDnicas // Hospitais ",-1)),re={class:"sidebar-menu__item",id:"user"},_e=a(()=>e("i",{class:"fa fa-users","aria-hidden":"true"},null,-1)),ue=a(()=>e("span",{class:"label"},"Usu\xE1rios",-1));function pe(s,d,p,h,m,f){const o=c("router-link"),r=c("router");return l(),u("aside",O,[e("section",Q,[e("ul",W,[X,e("li",Y,[t(o,{to:{name:"Agreements"},class:"name"},{default:n(()=>[Z,ee]),_:1})]),e("li",se,[t(o,{to:{name:"Patients"},class:"name"},{default:n(()=>[ae,te]),_:1})]),e("li",oe,[t(o,{to:{name:"Appointments"},class:"name"},{default:n(()=>[ne,ie]),_:1})]),e("li",ce,[t(o,{to:{name:"Customer"},class:"name"},{default:n(()=>[de,le]),_:1})]),e("li",re,[t(r,{to:{name:"User"},class:"name"},{default:n(()=>[_e,ue]),_:1})])])])])}var he=_(G,[["render",pe],["__scopeId","data-v-f45a199c"]]);const me={name:"Default",components:{Header:F,Navbar:he},metaInfo(){return{title:"Direct2Doc"}}},fe={class:"page-content"};function ve(s,d,p,h,m,f){const o=c("Header"),r=c("Navbar"),w=c("router-view");return l(),u("div",{class:v(["newLayout-layout",s.layoutClass])},[t(o),e("main",fe,[t(r),t(w,null,{default:n(({Component:$})=>[t(S,{name:"slide-fade",mode:"out-in"},{default:n(()=>[(l(),k(D($)))]),_:2},1024)]),_:1})])],2)}var ge=_(me,[["render",ve]]);export{ge as default};
