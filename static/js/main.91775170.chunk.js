(this["webpackJsonpleonardmk1.github.io"]=this["webpackJsonpleonardmk1.github.io"]||[]).push([[0],{20:function(e,a,t){e.exports=t(43)},25:function(e,a,t){},26:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){e.exports=t.p+"static/media/Matt.b65b7705.jpg"},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(18),c=t.n(r),o=(t(25),t(8)),m=t(9),i=t(12),s=t(11),u=t(7),d=t(1);t(26);function E(){return l.a.createElement("div",null,l.a.createElement("div",{className:"home-container"},l.a.createElement("div",null,l.a.createElement("h2",{className:"home-title"},l.a.createElement("span",{className:"home-hello"},"Hello,")," I'm a Full Stack Developer"),l.a.createElement("small",null,"Currently looking for a job in web development"),l.a.createElement("div",null,l.a.createElement(u.b,{to:"/portfolio"},l.a.createElement("button",{className:"home-button"},"View Projects")),l.a.createElement(u.b,{to:"/contact"},l.a.createElement("button",{className:"home-button"},"Contact Me"))))))}t(32);function p(){return l.a.createElement("div",null,l.a.createElement("div",{className:"about-columns"},l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("span",{className:"about-intro"},"Hello, my name is"),l.a.createElement("br",null),l.a.createElement("span",{className:"about-name"}," Matthew Leonard")),l.a.createElement("br",null),l.a.createElement("p",null,"I am a full-stack web developer, and a front end enthusiast! I have experience in HTML, CSS, JavaScript, Node.js, MySQL, Sequelize, Mongoose, Mongo DB, and React."),l.a.createElement("br",null),l.a.createElement("p",null,"I have been searching for the career that can withstand my constant need for mental stimulation and I believe that I have found a field that will always challenge me and fulfill that side me. I am constainly curious and am also looking to larn and improve my understanding no matter the topic."),l.a.createElement("br",null),l.a.createElement("p",null,"I am married with two dogs and I live in Richmond, VA. I love hiking and long walks around the neighborhood. I am a passionate outdoorsman and foodie.")),l.a.createElement("div",null,l.a.createElement("img",{className:"about-img",src:t(33)}),l.a.createElement("h3",{className:"about-title"},"Education & Experience"),l.a.createElement("ul",{className:"about-list"},l.a.createElement("li",null,"Trilogy Full Stack Web Development Bootcamp at University of Richmond"),l.a.createElement("li",null,"Bachelor's of Science in Criminal Justice at Virginia Commonweatlh University"),l.a.createElement("li",null,"Special Education Teacher at Specialized Education Services Inc.")))))}var h=t(10),f=(t(34),function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).submitForm=n.submitForm.bind(Object(h.a)(n)),n.state={status:""},n}return Object(m.a)(t,[{key:"render",value:function(){var e=this.state.status;return l.a.createElement("div",{className:"form-container"},l.a.createElement("h3",{className:"form-header"},"Contact Me"),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:this.submitForm,action:"https://formspree.io/f/xjvpykke",method:"POST"},l.a.createElement("div",{className:"form-content"},l.a.createElement("label",null,"Your Email"),l.a.createElement("input",{className:"form-input",type:"email",name:"email"}),l.a.createElement("label",null,"Message"),l.a.createElement("textarea",{className:"form-input",type:"text",name:"message",rows:"4",cols:"50"})),"SUCCESS"===e?l.a.createElement("p",null,"Thanks!"):l.a.createElement("button",{className:"form-submit"},"Submit"),"ERROR"===e&&l.a.createElement("p",null,"Ooops! There was an error.")))}},{key:"submitForm",value:function(e){var a=this;e.preventDefault();var t=e.target,n=new FormData(t),l=new XMLHttpRequest;l.open(t.method,t.action),l.setRequestHeader("Accept","application/json"),l.onreadystatechange=function(){l.readyState===XMLHttpRequest.DONE&&(200===l.status?(t.reset(),a.setState({status:"SUCCESS"})):a.setState({status:"ERROR"}))},l.send(n)}}]),t}(l.a.Component));function b(){return l.a.createElement("div",null,l.a.createElement(f,null))}t(35);function v(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"footer_content"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/leonardmk1",target:"_blank",rel:"noopener noreferrer"},"GitHub")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/matthewkleonard/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn"))))))}t(36),t(37);var g=function(e){return l.a.createElement("button",{className:"toggle-button",onClick:e.click},l.a.createElement("div",{className:"toggle-button__line"}),l.a.createElement("div",{className:"toggle-button__line"}),l.a.createElement("div",{className:"toggle-button__line"}))},N=function(e){return l.a.createElement("header",{className:"navbar"},l.a.createElement("nav",{className:"navbar__navigation"},l.a.createElement("div",{className:"navbar__toggle-button"},l.a.createElement(g,{click:e.drawerClickHandler})),l.a.createElement("div",{className:"navbar__logo"},l.a.createElement("a",{href:"/"},"Matthew Leonard")),l.a.createElement("div",{className:"spacer"}),l.a.createElement("div",{className:"navbar_navigation-items"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"/Portfolio"},"Portfolio")),l.a.createElement("li",null,l.a.createElement("a",{href:"/About"},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"/Contact"},"Contact"))))))};t(38);var k=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"project-container"},l.a.createElement("div",{className:"project project-1"},l.a.createElement("a",{className:"project-text",target:"blank",href:"http://moviestream1.herokuapp.com/"},"Movie Stream"),l.a.createElement("div",{className:"project-img project-img-1"}),l.a.createElement("small",{className:"project-bio"},"Find Movies on Streaming Channels")),l.a.createElement("div",{className:"project project-2"},l.a.createElement("a",{className:"project-text",target:"blank",href:"https://reeledin.herokuapp.com/members"},"ReeledIn"),l.a.createElement("div",{className:"project-img project-img-2"}),l.a.createElement("small",{className:"project-bio"},"An app for fisherfolk")),l.a.createElement("div",{className:"project project-3"},l.a.createElement("a",{className:"project-text",target:"blank",href:"https://leonardmk1.github.io/React-Employee-Directory-The-Office/"},"The Office Employee Directory"),l.a.createElement("div",{className:"project-img project-img-3"}),l.a.createElement("small",{className:"project-bio"},"Search and Sort Employee Directory")),l.a.createElement("div",{className:"project project-4"},l.a.createElement("a",{className:"project-text",target:"blank",href:"https://leonardmk1-express-handlebars.herokuapp.com/"},"Burger App"),l.a.createElement("div",{className:"project-img project-img-4"}),l.a.createElement("small",{className:"project-bio"},"Node Express Handlebars"))))},w=(t(39),function(e){var a="side-drawer";return e.show&&(a="side-drawer open"),l.a.createElement("nav",{className:a},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"/Portfolio"},"Portfolio")),l.a.createElement("li",null,l.a.createElement("a",{href:"/About"},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"/Contact"},"Contact"))))}),j=(t(40),function(e){return l.a.createElement("div",{className:"backdrop",onClick:e.click})}),S=(t(41),t(42),function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={sideDrawerOpen:!1},e.drawerToggleClickHandler=function(){e.setState((function(e){return{sideDrawerOpen:!e.sideDrawerOpen}}))},e.backdropClickHandler=function(){e.setState({sideDrawerOpen:!1})},e}return Object(m.a)(t,[{key:"render",value:function(){var e;return this.state.sideDrawerOpen&&(e=l.a.createElement(j,{click:this.backdropClickHandler})),l.a.createElement(u.a,null,l.a.createElement("div",{className:"app"},l.a.createElement(N,{drawerClickHandler:this.drawerToggleClickHandler}),l.a.createElement(w,{show:this.state.sideDrawerOpen}),e,l.a.createElement("div",{className:"main-content"},l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:E}),l.a.createElement(d.a,{exact:!0,path:"/portfolio",component:k}),l.a.createElement(d.a,{exact:!0,path:"/about",component:p}),l.a.createElement(d.a,{exact:!0,path:"/contact",component:b}))),l.a.createElement(v,null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.91775170.chunk.js.map