"use strict";(self.webpackChunkwebpack_demo=self.webpackChunkwebpack_demo||[]).push([[296],{426:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([r.id,"* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n:root {\r\n  --gray-color: #8a8a8a;\r\n  --color-secondary: #eaeaea;\r\n  --white-color: #fff;\r\n  --color-quaternary: #f5f5f5;\r\n  --text-color: #333;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nbody {\r\n  background-color: var(--white-color);\r\n  color: var(--text-color);\r\n}\r\n\r\nmain {\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n  padding: 0 20px;\r\n}\r\n\r\n.main-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin-top: 50px;\r\n  background-color: var(--white-color);\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n  border: 1px solid var(--color-secondary);\r\n}\r\n\r\n.top-header {\r\n  padding: 0.8rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.top-header i {\r\n  cursor: pointer;\r\n}\r\n\r\n.main-title {\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n  color: var(--text-color);\r\n}\r\n\r\n.todo {\r\n  width: 100%;\r\n  border: 1px solid var(--gray-color);\r\n  padding: 0.8rem;\r\n  border-left: none;\r\n  border-right: none;\r\n  outline: none;\r\n  font-style: italic;\r\n}\r\n\r\n.todo-list {\r\n  border-bottom: 1px solid var(--gray-color);\r\n}\r\n\r\n.todo-item {\r\n  padding: 0.8rem;\r\n  border-bottom: 1px solid var(--gray-color);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.todo-item input {\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n.todo-item span {\r\n  cursor: all-scroll;\r\n}\r\n\r\n.todo-item:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n.btn {\r\n  display: inline-block;\r\n  padding: 1rem 1rem;\r\n  border: 1px solid transparent;\r\n  border-radius: 5px;\r\n  color: var(--gray-color);\r\n  cursor: pointer;\r\n  transition: all 0.2s ease-in-out;\r\n  width: 100%;\r\n}\r\n",""]);const c=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<r.length;l++){var d=[].concat(r[l]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],l=t.base?s[0]+t.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=t(r,o),l=0;l<a.length;l++){var d=e(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}},987:(r,n,e)=>{var t=e(379),o=e.n(t),a=e(795),i=e.n(a),c=e(569),s=e.n(c),l=e(565),d=e.n(l),p=e(216),u=e.n(p),f=e(589),m=e.n(f),v=e(426),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=u(),o()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals;const b=[{index:1,completed:!1,description:"Learn React"},{index:2,completed:!1,description:"Learn Redux"},{index:3,completed:!1,description:"Learn React Router"}],y=document.querySelector(".todo-list");for(let r=0;r<b.length;r+=1){const n=b[r],e=document.createElement("li");e.classList.add("todo-item"),e.innerHTML=`\n    <div class="data">\n        <input type="checkbox" id="todo">\n        <label for="todo-1">${n.description}</label>\n    </div>\n    <span><i class="fa fa-ellipsis-v" aria-hidden="true"></i></span>\n  `,y.appendChild(e)}}},r=>{r(r.s=987)}]);