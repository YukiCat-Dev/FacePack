(function () {var d={};Object.defineProperty(d,"__esModule",{value:!0});var f=void 0;async function j(r){return fetch(r,{method:"GET"}).then(r=>{if(r.ok)return r.json();throw new Error("Fetch Error:Return HTTP ".concat(r.status,", ").concat(r.statusText))})}d.importJSON=f,f=j,d.importJSON=f;var g={};Object.defineProperty(g,"__esModule",{value:!0});var h=void 0;g.importExternalFacePacks=h;async function k(r){let o=await f(r);if(o)return o;throw new Error("Try to load FacePacks from '".concat(r,"' failed."))}h=k,g.importExternalFacePacks=h;var b={},l=b&&b.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),m=b&&b.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=b&&b.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.hasOwnProperty.call(e,r)&&l(t,e,r);return m(t,e),t};Object.defineProperty(b,"__esModule",{value:!0});var i,p,q,u=false;function v(){if(u)return;u=true;i={};Object.defineProperty(i,"__esModule",{value:!0});p=class $rbUv$var$FaceDisplay{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:":",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:":";this._faceMap=new Map,this._className=t,this._inlineStyle=s,this.LEFT_BRACKET=a,this.RIGHT_BRACKET=r;for(const c of e)for(const e of c.faces)this._faceMap.set(e.id,e.url)}render(e){e.innerHTML=this.processInnerHTML(e.innerHTML)}processInnerHTML(e){let t=!1,s="",a="";for(const r of e)switch(r){case this.LEFT_BRACKET:t?this.LEFT_BRACKET==this.RIGHT_BRACKET?(t=!1,s+=this.replacePlaceHolder(a),a=""):(t=!1,s+="".concat(this.LEFT_BRACKET,"bracketContent").concat(this.LEFT_BRACKET),a=""):t=!0;break;case this.RIGHT_BRACKET:t?(t=!1,s+=this.replacePlaceHolder(a),a=""):s+=r;break;default:t?a+=r:s+=r;}return""!=a&&(s+=a),s}replacePlaceHolder(e){let t=this._faceMap.get(e);return t?"<img class=\"".concat(this._className,"\" src=\"").concat(t,"\" style=\"").concat(this._inlineStyle," max-height:5vh;\" alt=\"").concat(this.LEFT_BRACKET).concat(e).concat(this.RIGHT_BRACKET,"\"/>"):e}};q=p;i.default=q}(async()=>{let e=new(0,(await Promise.resolve().then(()=>n((v(),i)))).default)(await h("https://cdn.jsdelivr.net/gh/YukiCat-Dev/yukicat.facepack/facepacks.json"));document.querySelectorAll(".ct-comment-content.entry-content").forEach(t=>{e.render(t)})})();if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=b}else if(typeof define==="function"&&define.amd){define(function(){return b})}})();