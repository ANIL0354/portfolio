(this.webpackJsonpresume_starter_pack=this.webpackJsonpresume_starter_pack||[]).push([[0],{164:function(e,s,c){},165:function(e,s,c){"use strict";c.r(s);var a=c(5),t=c(87),n=c.n(t),i=(c(93),c(88)),l=c.n(i),r=c(0),o=function(e){var s=e.data;if(s)var c=s.name,a=s.occupation,t=s.description,n=s.address.city,i=s.social.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:e.url,children:Object(r.jsx)("i",{className:e.className})})},e.name)}));return Object(r.jsxs)("header",{id:"home",children:[Object(r.jsxs)("nav",{id:"nav-wrap",children:[Object(r.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(r.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(r.jsxs)("ul",{id:"nav",className:"nav",children:[Object(r.jsx)("li",{className:"current",children:Object(r.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"smoothscroll",href:"#testimonials",children:"Testimonials"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(r.jsx)("div",{className:"row banner",children:Object(r.jsxs)("div",{className:"banner-text",children:[Object(r.jsx)("h1",{className:"responsive-headline",children:Object(r.jsx)(l.a,{typing:.5,children:c?"I'm ".concat(c,"."):null})}),Object(r.jsxs)("h3",{children:["Based in ",n,". ",Object(r.jsx)("span",{children:a}),". ",t,"."]}),Object(r.jsx)("hr",{}),Object(r.jsx)("ul",{className:"social",children:i})]})}),Object(r.jsx)("p",{className:"scrolldown",children:Object(r.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(r.jsx)("i",{className:"icon-down-circle"})})})]})},d=function(e){var s=e.data;if(s)var c=s.social.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:e.url,children:Object(r.jsx)("i",{className:e.className})})},e.name)}));return Object(r.jsx)("footer",{children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"twelve columns",children:[Object(r.jsx)("ul",{className:"social-links",children:c}),Object(r.jsx)("ul",{className:"copyright",children:Object(r.jsxs)("li",{children:["Made by"," ",Object(r.jsx)("a",{title:"PAPA",href:"http://www.papareact.com/",children:"PAPA"})]})})]}),Object(r.jsx)("div",{id:"go-top",children:Object(r.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(r.jsx)("i",{className:"icon-up-open"})})})]})})},j=function(e){var s=e.data;if(s)var c=s.name,a="images/"+s.image,t=s.bio,n=s.address.street,i=s.address.city,l=s.address.state,o=s.address.zip,d=s.phone,j=s.email,h=s.resumedownload;return Object(r.jsx)("section",{id:"about",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"three columns",children:Object(r.jsx)("img",{className:"profile-pic",src:a,alt:"Akshay 's Profile Pic"})}),Object(r.jsxs)("div",{className:"nine columns main-col",children:[Object(r.jsx)("h2",{children:"About Me"}),Object(r.jsx)("p",{children:t}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"columns contact-details",children:[Object(r.jsx)("h2",{children:"Contact Details"}),Object(r.jsxs)("p",{className:"address",children:[Object(r.jsx)("span",{children:c}),Object(r.jsx)("br",{}),Object(r.jsxs)("span",{children:[n,Object(r.jsx)("br",{}),i," ",l,", ",o]}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{children:d}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{children:j})]})]}),Object(r.jsx)("div",{className:"columns download",children:Object(r.jsx)("p",{children:Object(r.jsxs)("a",{href:h,className:"button",children:[Object(r.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})},h=function(e){var s=e.data;if(s)var c=s.skillmessage,a=s.education.map((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:e.school}),Object(r.jsxs)("p",{className:"info",children:[e.degree," ",Object(r.jsx)("span",{children:"\u2022"}),Object(r.jsx)("em",{className:"date",children:e.graduated})]}),Object(r.jsx)("p",{children:e.description})]},e.school)})),t=s.work.map((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:e.company}),Object(r.jsxs)("p",{className:"info",children:[e.title,Object(r.jsx)("span",{children:"\u2022"})," ",Object(r.jsx)("em",{className:"date",children:e.years})]}),Object(r.jsx)("p",{children:e.description})]},e.company)})),n=s.skills.map((function(e){var s="bar-expand "+e.name.toLowerCase();return Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{style:{width:e.level},className:s}),Object(r.jsx)("em",{children:e.name})]},e.name)}));return Object(r.jsxs)("section",{id:"resume",children:[Object(r.jsxs)("div",{className:"row education",children:[Object(r.jsx)("div",{className:"three columns header-col",children:Object(r.jsx)("h1",{children:Object(r.jsx)("span",{children:"Education"})})}),Object(r.jsx)("div",{className:"nine columns main-col",children:Object(r.jsx)("div",{className:"row item",children:Object(r.jsx)("div",{className:"twelve columns",children:a})})})]}),Object(r.jsxs)("div",{className:"row work",children:[Object(r.jsx)("div",{className:"three columns header-col",children:Object(r.jsx)("h1",{children:Object(r.jsx)("span",{children:"Work"})})}),Object(r.jsx)("div",{className:"nine columns main-col",children:t})]}),Object(r.jsxs)("div",{className:"row skill",children:[Object(r.jsx)("div",{className:"three columns header-col",children:Object(r.jsx)("h1",{children:Object(r.jsx)("span",{children:"Skills"})})}),Object(r.jsxs)("div",{className:"nine columns main-col",children:[Object(r.jsx)("p",{children:c}),Object(r.jsx)("div",{className:"bars",children:Object(r.jsx)("ul",{className:"skills",children:n})})]})]})]})},m=c(24),b=function(e){var s=e.data,c=Object(a.useState)(""),t=Object(m.a)(c,2),n=t[0],i=t[1],l=Object(a.useState)(""),o=Object(m.a)(l,2),d=o[0],j=o[1],h=Object(a.useState)(""),b=Object(m.a)(h,2),u=b[0],O=b[1],x=Object(a.useState)(""),p=Object(m.a)(x,2),f=p[0],v=p[1];if(s)var g=s.name,w=s.address.street,N=s.address.city,y=s.address.state,k=s.address.zip,S=s.phone,C=s.email,A=s.contactmessage;var R=function(){window.open("mailto:".concat(C,"?subject=").concat(encodeURIComponent(u),"&body=").concat(encodeURIComponent(n)," (").concat(encodeURIComponent(d),"): ").concat(encodeURIComponent(f)))};return Object(r.jsxs)("section",{id:"contact",children:[Object(r.jsxs)("div",{className:"row section-head",children:[Object(r.jsx)("div",{className:"two columns header-col",children:Object(r.jsx)("h1",{children:Object(r.jsx)("span",{children:"Get In Touch."})})}),Object(r.jsx)("div",{className:"ten columns",children:Object(r.jsx)("p",{className:"lead",children:A})})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"eight columns",children:[Object(r.jsx)("form",{onSubmit:R,children:Object(r.jsxs)("fieldset",{children:[Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(r.jsx)("span",{className:"required",children:"*"})]}),Object(r.jsx)("input",{type:"text",defaultValue:"",value:n,size:"35",id:"contactName",name:"contactName",onChange:function(e){return i(e.target.value)}})]}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(r.jsx)("span",{className:"required",children:"*"})]}),Object(r.jsx)("input",{type:"text",defaultValue:"",value:d,size:"35",id:"contactEmail",name:"contactEmail",onChange:function(e){return j(e.target.value)}})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(r.jsx)("input",{type:"text",defaultValue:"",value:u,size:"35",id:"contactSubject",name:"contactSubject",onChange:function(e){return O(e.target.value)}})]}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(r.jsx)("span",{className:"required",children:"*"})]}),Object(r.jsx)("textarea",{cols:"50",rows:"15",value:f,onChange:function(e){return v(e.target.value)},id:"contactMessage",name:"contactMessage"})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:R,type:"submit",className:"submit",children:"Submit"})})]})}),Object(r.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(r.jsxs)("div",{id:"message-success",children:[Object(r.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(r.jsx)("br",{})]})]}),Object(r.jsx)("aside",{className:"four columns footer-widgets",children:Object(r.jsxs)("div",{className:"widget widget_contact",children:[Object(r.jsx)("h4",{children:"Address and Phone"}),Object(r.jsxs)("p",{className:"address",children:[g,Object(r.jsx)("br",{}),C,Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),w," ",Object(r.jsx)("br",{}),N,", ",y," ",k,Object(r.jsx)("br",{}),Object(r.jsx)("span",{children:S})]})]})})]})]})},u=function(e){var s=e.data;if(s)var c=s.testimonials.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsxs)("blockquote",{children:[Object(r.jsx)("p",{children:e.text}),Object(r.jsx)("cite",{children:e.user})]})},e.user)}));return Object(r.jsx)("section",{id:"testimonials",children:Object(r.jsx)("div",{className:"text-container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"two columns header-col",children:Object(r.jsx)("h1",{children:Object(r.jsx)("span",{children:"Client Testimonials"})})}),Object(r.jsx)("div",{className:"ten columns flex-container",children:Object(r.jsx)("ul",{className:"slides",children:c})})]})})})},O=function(e){var s=e.data;if(s)var c=s.projects.map((function(e){var s="images/portfolio/"+e.image;return Object(r.jsx)("div",{className:"columns portfolio-item",children:Object(r.jsx)("div",{className:"item-wrap",children:Object(r.jsxs)("a",{href:e.url,title:e.title,children:[Object(r.jsx)("img",{alt:e.title,src:s}),Object(r.jsx)("div",{className:"overlay",children:Object(r.jsxs)("div",{className:"portfolio-item-meta",children:[Object(r.jsx)("h5",{children:e.title}),Object(r.jsx)("p",{children:e.category})]})}),Object(r.jsx)("div",{className:"link-icon",children:Object(r.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(r.jsx)("section",{id:"portfolio",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"twelve columns collapsed",children:[Object(r.jsx)("h1",{children:"Check Out Some of My Works."}),Object(r.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:c})]})})})},x={main:{name:"Anil Sharma",occupation:"Senior Software Engineer",description:"I eat, sleep and breathe React",image:"profilepic.jpg",bio:"Hi there! I am Anil! I've been coding for over 4 years now. I am a Mobile and Web Application Developer I develop applications for Android, iOS and Web using the React-Native/React framework. Knowledge of native Android and iOS SDK, development patterns and architectures. I have successfully developed and deployed mutiple mobile applications on both Android and iOS and web also using React/React-native.Skilled in React-Native, Reactjs, Javascript ,HTML and CSS. My interests are in cross platform development frameworks, web development libraries. I spend majority of my day learning new tech stacks and watching football",contactmessage:"Get in touch with me to be a part of the PAPA fam!",email:"anil.8872148995@gmail.com",phone:"+44 1234567899",address:{street:"123 Dev Lane",city:"Chandigarh",state:"Chandigarh",zip:"W3B D3V"},website:"https://www.papareact.com/course",resumedownload:"http://papareact.com",social:[{name:"youtube",url:"https://www.youtube.com/channel/UCqeTj_QAnNlmt7FwzNwHZnA",className:"fa fa-youtube"},{name:"facebook",url:"https://www.facebook.com/sonny.sangha.3",className:"fa fa-facebook"},{name:"linkedin",url:"https://www.linkedin.com/in/saajansangha",className:"fa fa-linkedin"},{name:"instagram",url:"https://www.instagram.com/ssssangha/",className:"fa fa-instagram"},{name:"github",url:"https://github.com/PapaReact",className:"fa fa-github"}]},resume:{skillmessage:"My Programming Language Proficiency",education:[{school:"Panjab University - INDIA",degree:"Master's Degree, Computer Science",graduated:"July 2019",description:"Graduated with First Class"}],work:[{company:"PAPA",title:"Founder and CEO",years:"May 2019 - Present",description:"Cloning all the apps possible. On the way to clone the world! Building the PAPA Fam as large as possible."}],skills:[{name:"ReactJs",level:"100%"},{name:"React-Native",level:"100%"},{name:"Git",level:"70%"},{name:"JavaScript",level:"90%"},{name:"HTML5",level:"100%"},{name:"CSS",level:"60%"}]},portfolio:{projects:[{title:"Easy Car Relo (React JS)",category:"Vehicle Relocation",image:"easyCarRelo.png",url:"https://easycarrelo.co.nz/"},{title:"Celebfie (React-Native)",category:"Social media app",image:"celb.webp",url:"https://play.google.com/store/apps/details?id=com.celebfie"},{title:"LinkedIn Clone (React JS)",category:"",image:"linkedin.jpg",url:"https://sefracing.com/login"}]},testimonials:{testimonials:[{text:"Sonny is absolutely excellent, his depth of knowledge & his mentorship really meant a lot to us... I would definitely recommend",user:"Jorge Fouto"},{text:"Learning with Sonny has been AWESOME, he makes learning React so easy and approachable, you'll finally feel like you know what's going on!",user:"Adam Curtis"}]}},p=(c(164),function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(o,{data:x.main}),Object(r.jsx)(j,{data:x.main}),Object(r.jsx)(h,{data:x.resume}),Object(r.jsx)(O,{data:x.portfolio}),Object(r.jsx)(u,{data:x.testimonials}),Object(r.jsx)(b,{data:x.main}),Object(r.jsx)(d,{data:x.main})]})}),f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var s=e.installing;s.onstatechange=function(){"installed"===s.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n.a.render(Object(r.jsx)(p,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/portfolio","/service-worker.js");f?function(e){fetch(e).then((function(s){404===s.status||-1===s.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):v(e)}))}}()},93:function(e,s,c){}},[[165,1,2]]]);
//# sourceMappingURL=main.b7c5a146.chunk.js.map