parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{}],"H99C":[function(require,module,exports) {
"use strict";require("./styles.css");var e=document.getElementById("app"),n=document.createElement("button"),t=document.createElement("div");t.className="numberWrapper",n.innerText="번호 만들기",n.className="generate",document.body.appendChild(n),e.appendChild(t);for(var r=1;r<46;r++){var a=document.createElement("span");a.innerText=r,a.className=r,t.appendChild(a)}var s=function(){for(var e=[],n=0;e.length<7;){var t=Math.floor(45*Math.random())+1;if(n<1)e.push(t),n++;else{(function(n){for(var t=0;t<e;t++)if(e[t]===n)return!0;return!1})(t)||(e.push(t),e.sort(function(e,n){return e-n}),n++)}}return e},o=function(){var e=t.childNodes,n=s();e.forEach(function(e){e.classList.contains("on")&&e.classList.remove("on")});for(var r=0;r<n.length;r++)for(var a=0;a<e.length;a++)e[a].classList.contains(String(n[r]))&&e[a].classList.add("on")};n.addEventListener("click",o);
},{"./styles.css":"D9Nj"}]},{},["H99C"], null)
//# sourceMappingURL=/src.36d506d6.js.map