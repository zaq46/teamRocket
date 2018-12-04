(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(e,t,n){e.exports=n(388)},183:function(e,t,n){},251:function(e,t){},388:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(38),i=n.n(c),o=n(392),s=(n(183),n(11)),l=n(12),u=n(14),h=n(13),m=n(15),p=n(390),d=n(391),f=n(39),b=n(171),v=n.n(b),E=n(173),g=n.n(E),O=n(176),j=n.n(O),k=n(65),w=n.n(k),y=n(174),S=n.n(y),N=n(175),x=n.n(N),A=n(86),U=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(v.a,{position:"static"},r.a.createElement(g.a,null,r.a.createElement(S.a,{className:e.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(x.a,null)),r.a.createElement(j.a,{variant:"h6",color:"inherit",className:e.grow},"Tabs"),r.a.createElement(w.a,{href:"/",color:"inherit"},"Home"),r.a.createElement(w.a,{href:"/portal",color:"inherit"},"Settings"))))}}]),t}(a.Component),C=Object(A.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(U),D=n(16),T=n.n(D),B=n(29),M=n(87),_=n.n(M),I=n(85),G=n.n(I),L=n(117),R=n.n(L),J=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(_.a,{container:!0,className:e.root,spacing:8},r.a.createElement(_.a,{item:!0,xs:3},r.a.createElement(G.a,{className:e.paper},"Profile Section")),r.a.createElement(_.a,{item:!0,xs:8},r.a.createElement(G.a,{className:e.paper},"Employee Information and Settings Personal Settings",r.a.createElement(R.a,{className:e.divider}),"Social Settings",r.a.createElement(R.a,{className:e.divider}),r.a.createElement(w.a,{variant:"contained",color:"inherit",className:e.button},"Save"))))}}]),t}(a.Component),W=Object(A.withStyles)({root:{flexGrow:1,margin:"12px"},paper:{paddingTop:30,paddingLeft:20,paddingRight:20,paddingBottom:30},divider:{width:"95%",marginTop:"10px"},button:{marginTop:10}})(J),q=Object(f.withAuth)(function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={authenticated:null},n.checkAuthentication=Object(B.a)(T.a.mark(function e(){var t;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.auth.isAuthenticated();case 2:(t=e.sent)!==n.state.authenticated&&n.setState({authenticated:t});case 4:case"end":return e.stop()}},e,this)})),n.login=Object(B.a)(T.a.mark(function e(){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.props.auth.login("/");case 1:case"end":return e.stop()}},e,this)})),n.logout=Object(B.a)(T.a.mark(function e(){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.props.auth.logout("/");case 1:case"end":return e.stop()}},e,this)})),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(B.a)(T.a.mark(function e(){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.checkAuthentication();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(B.a)(T.a.mark(function e(){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.checkAuthentication();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(null===this.state.authenticated)return null;var e=this.state.authenticated?r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-light btn-lg",onClick:this.logout},"Logout")):r.a.createElement("div",null,r.a.createElement("p",{className:"lead"},"If you are a staff member, please get your credentials from your supervisor"),r.a.createElement("button",{className:"btn btn-dark btn-lg",onClick:this.login},"Login"));return r.a.createElement("div",{className:"jumbotron"},r.a.createElement(W,null),e)}}]),t}(a.Component)),P=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={currentUserName:"",currentUserEmail:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("okta-token-storage"));this.setState({currentUserEmail:e.idToken.claims.email,currentUserName:e.idToken.claims.name})}},{key:"render",value:function(){var e=this.state,t=e.currentUserEmail,n=e.currentUserName;return r.a.createElement("div",null,r.a.createElement("h1",null,"Name: ",n),r.a.createElement("p",null,"Email: ",t),r.a.createElement("p",null,"You made it to the payroll web portal"))}}]),t}(a.Component),F=n(389),H=n(177),Y=n.n(H),$=(n(384),n(386),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=i.a.findDOMNode(this);this.widget=new Y.a({baseUrl:this.props.baseUrl}),this.widget.renderEl({el:e},this.props.onSuccess,this.props.onError)}},{key:"componentWillUnmount",value:function(){this.widget.remove()}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(a.Component)),z=Object(f.withAuth)(function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).onSuccess=function(e){return n.props.auth.redirect({sessionToken:e.session.token})},n.onError=function(e){console.log("error logging in",e)},n.state={authenticated:null},n.checkAuthentication(),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"checkAuthentication",value:function(){var e=Object(B.a)(T.a.mark(function e(){var t;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.auth.isAuthenticated();case 2:(t=e.sent)!==this.state.authenticated&&this.setState({authenticated:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){this.checkAuthentication()}},{key:"render",value:function(){return null===this.state.authenticated?null:this.state.authenticated?r.a.createElement(F.a,{to:{pathname:"/"}}):r.a.createElement($,{baseUrl:this.props.baseUrl,onSuccess:this.onSuccess,onError:this.onError})}}]),t}(a.Component)),K={issuer:"https://dev-500578.oktapreview.com/oauth2/default",redirect_uri:window.location.origin+"/implicit/callback",client_id:"0oahrdfs7sxBGFkES0h7"},Q=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(o.a,null,r.a.createElement(f.Security,{issuer:K.issuer,client_id:K.client_id,redirect_uri:K.redirect_uri,onAuthRequired:this.onAuthRequired},r.a.createElement(C,null),r.a.createElement(p.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:q})),r.a.createElement(d.a,{path:"/(.+)",render:function(){return r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement(d.a,{path:"/login",render:function(){return r.a.createElement(z,{baseUrl:"https://dev-500578.oktapreview.com"})}}),r.a.createElement(d.a,{path:"/implicit/callback",component:f.ImplicitCallback}),r.a.createElement(d.a,{path:"/portal",component:P})))}})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(o.a,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[178,2,1]]]);
//# sourceMappingURL=main.d0967bd1.chunk.js.map