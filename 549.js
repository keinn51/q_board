"use strict";(self.webpackChunklee=self.webpackChunklee||[]).push([[549],{5084:(e,t,a)=>{a.d(t,{DH:()=>r,J1:()=>l,v0:()=>c});const n="auth";function r(){localStorage.clear()}function l(e){localStorage.setItem(n,JSON.stringify({...e,expire:Date.now()+2592e5}))}function c(){if(!localStorage.getItem(n))return null;const e=JSON.parse(localStorage.getItem(n));return Date.now()>e.expire?(r(),null):e}},4549:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var n=a(7294),r=a(3379),l=a.n(r),c=a(7795),s=a.n(c),o=a(569),i=a.n(o),A=a(3565),d=a.n(A),m=a(9216),u=a.n(m),p=a(4589),_=a.n(p),h=a(138),E={};E.styleTagTransform=_(),E.setAttributes=d(),E.insert=i().bind(null,"head"),E.domAPI=s(),E.insertStyleElement=u(),l()(h.Z,E),h.Z&&h.Z.locals&&h.Z.locals;var g=a(5084),C=a(9669),I=a.n(C),f=a(6974);const x=()=>{const e=(0,f.s0)(),[t,a]=(0,n.useState)(""),[r,l]=(0,n.useState)(""),[c,s]=(0,n.useState)(0);return n.createElement("div",{className:"article_create"},n.createElement("div",{className:"article_create-header"},n.createElement("p",{className:"font-25"},"당신의 생각을 들려주세요"),n.createElement("p",null,(0,g.v0)().loginId,"님 Squares에서 최고의 팀원들과 함께하세요.")),n.createElement("div",{className:"article_create-title"},n.createElement("p",{className:"font-18"},"제목"),n.createElement("textarea",{className:"article_create-title_textarea",onChange:e=>a(e.target.value),cols:50,placeholder:"제목을 입력해주세요"})),n.createElement("div",{className:"article_create-category"},n.createElement("p",{className:"font-18"},"카테고리"),n.createElement("form",null,n.createElement("select",{className:"article_create-select",onChange:e=>s(parseInt(e.target.value,10))},n.createElement("option",{value:0},"EDITOR'S CHOICE"),n.createElement("option",{value:1},"WEEKLY BEST"),n.createElement("option",{value:2},"Q&A"),n.createElement("option",{value:3},"KNOWLEDGE")))),n.createElement("div",{className:"article_create-content"},n.createElement("p",{className:"font-18"},"상세정보"),n.createElement("textarea",{className:"article_create-content_textarea",onChange:e=>l(e.target.value),rows:10,placeholder:"내용을 입력해주세요"})),n.createElement("div",{className:"flex_horizontal_end"},n.createElement("div",{className:"article_create-create_btn flex_vertical_middle button",onClick:()=>{(0,g.v0)()&&I().post("http://52.78.160.237/board/post_article.php",{title:t,content:r,categoryId:c,userId:(0,g.v0)().userId,loginId:(0,g.v0)().loginId}).then((t=>{alert("게시글이 생성되었습니다."),e(`/category/${c}`)})).catch((e=>{alert(e.response.data)}))}},"게시글 생성")))}},138:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7537),r=a.n(n),l=a(3645),c=a.n(l)()(r());c.push([e.id,".article_create {\n    display: grid;\n    height: 600px;\n}\n\n.article_create-title_textarea {\n    width: 100%;\n    height: 40px;\n    font-size: 20px;\n    border: none;\n    border-left: 4px solid rgb(190, 190, 190);\n}\n\n.article_create-select {\n    height: 40px;\n    width: 100%;\n}\n\n.article_create-content_textarea {\n    width: 100%;\n}\n\n.article_create-title_textarea:focus,\n.article_create-content_textarea:focus {\n    outline: none;\n}","",{version:3,sources:["webpack://./css/CreateArticle/CreateArticle.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,yCAAyC;AAC7C;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;;IAEI,aAAa;AACjB",sourcesContent:[".article_create {\n    display: grid;\n    height: 600px;\n}\n\n.article_create-title_textarea {\n    width: 100%;\n    height: 40px;\n    font-size: 20px;\n    border: none;\n    border-left: 4px solid rgb(190, 190, 190);\n}\n\n.article_create-select {\n    height: 40px;\n    width: 100%;\n}\n\n.article_create-content_textarea {\n    width: 100%;\n}\n\n.article_create-title_textarea:focus,\n.article_create-content_textarea:focus {\n    outline: none;\n}"],sourceRoot:""}]);const s=c}}]);