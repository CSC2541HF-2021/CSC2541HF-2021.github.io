(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[621],{9352:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(5893),s=n(6610),i=n(5991),a=n(5255),c=n(6070),l=n(7608),o=n(7084),d=n.n(o),h=n(7294),u=n(7617),x=n(7762);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var s=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}var j=function(e){(0,a.Z)(n,e);var t=f(n);function n(e){var i;return(0,s.Z)(this,n),(i=t.call(this,e)).state={md:"",slug:e.slug},i.getMarkdownText(),d().use({walkTokens:function(e){var t=e.type,n=e.raw;"paragraph"===t&&n.startsWith("$$\n")&&n.endsWith("\n$$")?(e.type="code",e.lang="blockMathematics",e.text=e.raw.slice(3,-3),e.tokens.length=0):"paragraph"===t&&n.includes("$$")&&(e.type="code",e.lang="inlineMathematics",e.text=e.raw.replace(/\$\$(.*?)\$\$/g,(function(e){return(0,x.renderToString)((0,r.jsx)(u.InlineMath,{math:e.slice(2,-2)}))})))},renderer:{code:function(e,t){return"blockMathematics"===t?(0,x.renderToString)((0,r.jsx)(u.BlockMath,{math:e})):"inlineMathematics"===t&&e}}}),i}return(0,i.Z)(n,[{key:"safeFetch",value:function(e,t){return null==t&&(t={}),null==t.credentials&&(t.credentials="same-origin"),fetch(e,t).then((function(e){if(e.status>=200&&e.status<300)return e.text();var t=new Error(e.statusText||e.status.toString());return Promise.reject(t)})).catch((function(e){return Promise.reject(e)}))}},{key:"fetchMarkdown",value:function(e){var t=this;this.safeFetch("/assignments/".concat(e,".md")).then((function(e){t.setState({md:e})})).catch((function(e){t.setState({md:"404"})}))}},{key:"getMarkdownText",value:function(){this.fetchMarkdown(this.props.slug);return{__html:d()(this.state.md,{sanitize:!1})}}},{key:"render",value:function(){return(0,r.jsx)("div",{dangerouslySetInnerHTML:this.getMarkdownText()})}}]),n}(h.Component)},5461:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(5893),s=n(5988),i=n(7294),a=n(5253),c=n(682),l=n(5001),o=n(8946),d=n(1244),h=n(3982),u=n(1664),x=n(425),f=n(4019),j=n(8618),p=n(9846),m=function(){var e=(0,x.F)(),t=e.theme,n=e.setTheme,s="dark"===t,a=(0,i.useState)(s),c=a[0],l=a[1],o=(0,i.useState)(!1),d=o[0],h=o[1];return(0,i.useEffect)((function(){return h(!0)}),[]),(0,i.useEffect)((function(){n(c?"dark":"light")}),[c,n]),d?(0,r.jsx)(p.Z,{style:{maxWidth:"25px",maxHeight:"25px",minWidth:"25px",minHeight:"25px"},value:"check",selected:c,onChange:function(){l(!c)},children:c?(0,r.jsx)(j.Z,{style:{height:"15px",fill:"white"}}):(0,r.jsx)(f.Z,{style:{height:"15px",fill:"black"}})}):null};function g(){var e=(0,x.F)();e.theme,e._;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.Z,{collapseOnSelect:!0,expand:"sm",children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(u.default,{href:"/",children:(0,r.jsx)(l.Z,{id:"navbarbrand",children:"CSC2541"})}),(0,r.jsx)(a.Z.Toggle,{id:"navbartoggle","aria-controls":"responsive-navbar-nav"}),(0,r.jsx)(a.Z.Collapse,{id:"responsive-navbar-nav",children:(0,r.jsxs)(o.Z,{className:"justify-content-end",children:[(0,r.jsx)(d.Z,{children:(0,r.jsx)(u.default,{href:"/",children:(0,r.jsx)(h.Z,{href:"/",style:{color:"#808080"},children:"Home"})})}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(u.default,{href:"/schedule",children:(0,r.jsx)(h.Z,{href:"/schedule",style:{color:"#808080"},children:"Schedule"})})}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(u.default,{href:"/assignments",children:(0,r.jsx)(h.Z,{href:"/assignments",style:{color:"#808080"},children:"Assignments"})})}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(u.default,{href:"/logistics",children:(0,r.jsx)(h.Z,{href:"/logistics",style:{color:"#808080"},children:"Logistics"})})}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(u.default,{href:"/",children:(0,r.jsx)(h.Z,{style:{color:"#808080",paddingTop:"5px"},children:(0,r.jsx)(m,{})})})})]})})]})})})}function v(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{className:"jsx-1341107175"}),(0,r.jsx)("br",{className:"jsx-1341107175"}),(0,r.jsx)("footer",{id:"footer",className:"jsx-1341107175",children:(0,r.jsx)("table",{id:"footerTable",className:"jsx-1341107175",children:(0,r.jsxs)("tr",{className:"jsx-1341107175",children:[(0,r.jsx)("td",{id:"tableCol",className:"jsx-1341107175",children:(0,r.jsx)("p",{className:"jsx-1341107175",children:"Made with \u2764\ufe0f by the CSC2541 Course Staff."})}),(0,r.jsx)("td",{id:"rightCol",className:"jsx-1341107175"})]})})}),(0,r.jsx)(s.default,{id:"1341107175",children:["#tableCol.jsx-1341107175{width:100%;vertical-align:middle;padding-top:15px;}","#rightCol.jsx-1341107175{padding-right:10px;text-align:center;}","#footer.jsx-1341107175{border-top:double;position:fixed;bottom:0px;height:60px;max-width:500px;min-width:500px;}","@media only screen and (max-width:500px){#tableCol.jsx-1341107175{width:80%;vertical-align:middle;padding-top:15px;}#footer.jsx-1341107175{border-top:double;position:fixed;bottom:0px;height:80px;max-width:94.3%;min-width:94.3%;}}","#heart.jsx-1341107175{-webkit-text-decoration:none;text-decoration:none;cursor:text;}"]})]})}function b(e){var t=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{id:"outerbox",className:"jsx-2421624294",children:[(0,r.jsx)(g,{}),(0,r.jsx)("div",{id:"innerbox",className:"jsx-2421624294",children:t}),(0,r.jsx)(v,{})]}),(0,r.jsx)(s.default,{id:"2421624294",children:["#outerbox.jsx-2421624294{max-width:500px;display:inline-block;margin-left:auto;margin-right:auto;display:block;}","#innerbox.jsx-2421624294{padding-bottom:30px;}","@media only screen and (max-width:500px){#innerbox.jsx-2421624294{padding-bottom:40px;}}"]})]})}},1960:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893),s=n(9008),i=n(5461),a=n(9352);function c(){return(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"CSC2541 (Fall 2021)"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(i.Z,{children:(0,r.jsx)(a.Z,{slug:"projectproposal"})})]})}},6460:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/assignments/projectproposal",function(){return n(1960)}])}},function(e){e.O(0,[774,573,379,99,888,179],(function(){return t=6460,e(e.s=t);var t}));var t=e.O();_N_E=t}]);