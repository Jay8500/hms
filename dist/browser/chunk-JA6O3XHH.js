import{$ as ri,A as Zn,Ab as Ae,Bb as R,Bc as yi,Cb as Be,Cc as qt,D as ei,Db as Ue,Ec as vi,Gb as te,Hc as _i,Ib as ne,Ic as Xe,J as ti,Jb as ie,Kb as yn,Lb as mi,M as _e,Ma as x,Mc as se,N as Ce,Nb as ze,O as C,Oa as li,Ob as qe,Oc as Kt,P,Pc as Ci,Qa as pt,R as U,Ra as H,Rc as Ei,T as Ee,U as g,Ua as bn,Ub as N,V as $t,Wb as Ke,X as ni,Xb as Gt,Y as ii,Ya as G,Z as me,Za as L,_ as oi,_a as M,aa as si,ab as A,c as gn,ca as E,cb as j,ea as Bt,eb as ci,f as de,gb as ui,gc as bi,ha as ai,ia as K,j as Vt,ja as Ut,jb as V,jc as zt,k as mn,kb as S,la as Se,lb as di,lc as v,ma as Ve,mb as Te,mc as Ye,na as Z,nb as jt,nc as be,o as Le,ob as pe,oc as fe,pb as Ge,pc as ht,qb as pi,ra as we,rb as hi,sb as fi,sc as vn,tb as ee,u as Qn,ub as re,vb as he,vc as ge,wb as Wt,x as Jn,xb as Ht,yb as $e,zb as gi}from"./chunk-LSKETZUF.js";import{a as y,b as ue,i as fn}from"./chunk-ODN5LVDJ.js";var mt=class{},bt=class{},ye=class e{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(t=>{let i=t.indexOf(":");if(i>0){let o=t.slice(0,i),r=t.slice(i+1).trim();this.addHeaderEntry(o,r)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((t,i)=>{this.addHeaderEntry(i,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([t,i])=>{this.setHeaderEntries(t,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let t=this.headers.get(n.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,t){return this.clone({name:n,value:t,op:"a"})}set(n,t){return this.clone({name:n,value:t,op:"s"})}delete(n,t){return this.clone({name:n,value:t,op:"d"})}maybeSetNormalizedName(n,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,n)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(t=>{this.headers.set(t,n.headers.get(t)),this.normalizedNames.set(t,n.normalizedNames.get(t))})}clone(n){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([n]),t}applyUpdate(n){let t=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,t);let o=(n.op==="a"?this.headers.get(t):void 0)||[];o.push(...i),this.headers.set(t,o);break;case"d":let r=n.value;if(!r)this.headers.delete(t),this.normalizedNames.delete(t);else{let s=this.headers.get(t);if(!s)return;s=s.filter(a=>r.indexOf(a)===-1),s.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,s)}break}}addHeaderEntry(n,t){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(t):this.headers.set(i,[t])}setHeaderEntries(n,t){let i=(Array.isArray(t)?t:[t]).map(r=>r.toString()),o=n.toLowerCase();this.headers.set(o,i),this.maybeSetNormalizedName(n,o)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>n(this.normalizedNames.get(t),this.headers.get(t)))}};var En=class{encodeKey(n){return Si(n)}encodeValue(n){return Si(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function cr(e,n){let t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(o=>{let r=o.indexOf("="),[s,a]=r==-1?[n.decodeKey(o),""]:[n.decodeKey(o.slice(0,r)),n.decodeValue(o.slice(r+1))],l=t.get(s)||[];l.push(a),t.set(s,l)}),t}var ur=/%(\d[a-f0-9])/gi,dr={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Si(e){return encodeURIComponent(e).replace(ur,(n,t)=>dr[t]??n)}function Yt(e){return`${e}`}var xe=class e{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new En,n.fromString){if(n.fromObject)throw new _e(2805,!1);this.map=cr(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(t=>{let i=n.fromObject[t],o=Array.isArray(i)?i.map(Yt):[Yt(i)];this.map.set(t,o)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let t=this.map.get(n);return t?t[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,t){return this.clone({param:n,value:t,op:"a"})}appendAll(n){let t=[];return Object.keys(n).forEach(i=>{let o=n[i];Array.isArray(o)?o.forEach(r=>{t.push({param:i,value:r,op:"a"})}):t.push({param:i,value:o,op:"a"})}),this.clone(t)}set(n,t){return this.clone({param:n,value:t,op:"s"})}delete(n,t){return this.clone({param:n,value:t,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let t=this.encoder.encodeKey(n);return this.map.get(n).map(i=>t+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let t=new e({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(n),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let t=(n.op==="a"?this.map.get(n.param):void 0)||[];t.push(Yt(n.value)),this.map.set(n.param,t);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],o=i.indexOf(Yt(n.value));o!==-1&&i.splice(o,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};var Sn=class{map=new Map;set(n,t){return this.map.set(n,t),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}};function pr(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function wi(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function Ti(e){return typeof Blob<"u"&&e instanceof Blob}function Ai(e){return typeof FormData<"u"&&e instanceof FormData}function hr(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var ft="Content-Type",Xt="Accept",Dn="X-Request-URL",Oi="text/plain",Mi="application/json",Ri=`${Mi}, ${Oi}, */*`,gt=class e{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(n,t,i,o){this.url=t,this.method=n.toUpperCase();let r;if(pr(this.method)||o?(this.body=i!==void 0?i:null,r=o):r=i,r&&(this.reportProgress=!!r.reportProgress,this.withCredentials=!!r.withCredentials,r.responseType&&(this.responseType=r.responseType),r.headers&&(this.headers=r.headers),r.context&&(this.context=r.context),r.params&&(this.params=r.params),this.transferCache=r.transferCache),this.headers??=new ye,this.context??=new Sn,!this.params)this.params=new xe,this.urlWithParams=t;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=t;else{let a=t.indexOf("?"),l=a===-1?"?":a<t.length-1?"&":"";this.urlWithParams=t+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||wi(this.body)||Ti(this.body)||Ai(this.body)||hr(this.body)?this.body:this.body instanceof xe?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Ai(this.body)?null:Ti(this.body)?this.body.type||null:wi(this.body)?null:typeof this.body=="string"?Oi:this.body instanceof xe?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Mi:null}clone(n={}){let t=n.method||this.method,i=n.url||this.url,o=n.responseType||this.responseType,r=n.transferCache??this.transferCache,s=n.body!==void 0?n.body:this.body,a=n.withCredentials??this.withCredentials,l=n.reportProgress??this.reportProgress,c=n.headers||this.headers,u=n.params||this.params,d=n.context??this.context;return n.setHeaders!==void 0&&(c=Object.keys(n.setHeaders).reduce((p,h)=>p.set(h,n.setHeaders[h]),c)),n.setParams&&(u=Object.keys(n.setParams).reduce((p,h)=>p.set(h,n.setParams[h]),u)),new e(t,i,s,{params:u,headers:c,context:d,reportProgress:l,responseType:o,withCredentials:a,transferCache:r})}},Ie=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(Ie||{}),yt=class{headers;status;statusText;url;ok;type;constructor(n,t=200,i="OK"){this.headers=n.headers||new ye,this.status=n.status!==void 0?n.status:t,this.statusText=n.statusText||i,this.url=n.url||null,this.ok=this.status>=200&&this.status<300}},Qt=class e extends yt{constructor(n={}){super(n)}type=Ie.ResponseHeader;clone(n={}){return new e({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},vt=class e extends yt{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Ie.Response;clone(n={}){return new e({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},De=class extends yt{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},Ni=200,fr=204;function _n(e,n){return{body:n,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var gr=(()=>{class e{handler;constructor(t){this.handler=t}request(t,i,o={}){let r;if(t instanceof gt)r=t;else{let l;o.headers instanceof ye?l=o.headers:l=new ye(o.headers);let c;o.params&&(o.params instanceof xe?c=o.params:c=new xe({fromObject:o.params})),r=new gt(t,i,o.body!==void 0?o.body:null,{headers:l,context:o.context,params:c,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache})}let s=mn(r).pipe(Zn(l=>this.handler.handle(l)));if(t instanceof gt||o.observe==="events")return s;let a=s.pipe(Jn(l=>l instanceof vt));switch(o.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return a.pipe(Le(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new _e(2806,!1);return l.body}));case"blob":return a.pipe(Le(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new _e(2807,!1);return l.body}));case"text":return a.pipe(Le(l=>{if(l.body!==null&&typeof l.body!="string")throw new _e(2808,!1);return l.body}));case"json":default:return a.pipe(Le(l=>l.body))}case"response":return a;default:throw new _e(2809,!1)}}delete(t,i={}){return this.request("DELETE",t,i)}get(t,i={}){return this.request("GET",t,i)}head(t,i={}){return this.request("HEAD",t,i)}jsonp(t,i){return this.request("JSONP",t,{params:new xe().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,i={}){return this.request("OPTIONS",t,i)}patch(t,i,o={}){return this.request("PATCH",t,_n(o,i))}post(t,i,o={}){return this.request("POST",t,_n(o,i))}put(t,i,o={}){return this.request("PUT",t,_n(o,i))}static \u0275fac=function(i){return new(i||e)(Ee(mt))};static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})(),mr=/^\)\]\}',?\n/;function Di(e){if(e.url)return e.url;let n=Dn.toLocaleLowerCase();return e.headers.get(n)}var Fi=new U(""),Cn=(()=>{class e{fetchImpl=g(wn,{optional:!0})?.fetch??((...t)=>globalThis.fetch(...t));ngZone=g(Ut);handle(t){return new gn(i=>{let o=new AbortController;return this.doRequest(t,o.signal,i).then(Tn,r=>i.error(new De({error:r}))),()=>o.abort()})}doRequest(t,i,o){return fn(this,null,function*(){let r=this.createRequestInit(t),s;try{let h=this.ngZone.runOutsideAngular(()=>this.fetchImpl(t.urlWithParams,y({signal:i},r)));br(h),o.next({type:Ie.Sent}),s=yield h}catch(h){o.error(new De({error:h,status:h.status??0,statusText:h.statusText,url:t.urlWithParams,headers:h.headers}));return}let a=new ye(s.headers),l=s.statusText,c=Di(s)??t.urlWithParams,u=s.status,d=null;if(t.reportProgress&&o.next(new Qt({headers:a,status:u,statusText:l,url:c})),s.body){let h=s.headers.get("content-length"),b=[],f=s.body.getReader(),m=0,O,D,T=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>fn(this,null,function*(){for(;;){let{done:J,value:ce}=yield f.read();if(J)break;if(b.push(ce),m+=ce.length,t.reportProgress){D=t.responseType==="text"?(D??"")+(O??=new TextDecoder).decode(ce,{stream:!0}):void 0;let Pe=()=>o.next({type:Ie.DownloadProgress,total:h?+h:void 0,loaded:m,partialText:D});T?T.run(Pe):Pe()}}}));let k=this.concatChunks(b,m);try{let J=s.headers.get(ft)??"";d=this.parseBody(t,k,J)}catch(J){o.error(new De({error:J,headers:new ye(s.headers),status:s.status,statusText:s.statusText,url:Di(s)??t.urlWithParams}));return}}u===0&&(u=d?Ni:0),u>=200&&u<300?(o.next(new vt({body:d,headers:a,status:u,statusText:l,url:c})),o.complete()):o.error(new De({error:d,headers:a,status:u,statusText:l,url:c}))})}parseBody(t,i,o){switch(t.responseType){case"json":let r=new TextDecoder().decode(i).replace(mr,"");return r===""?null:JSON.parse(r);case"text":return new TextDecoder().decode(i);case"blob":return new Blob([i],{type:o});case"arraybuffer":return i.buffer}}createRequestInit(t){let i={},o=t.withCredentials?"include":void 0;if(t.headers.forEach((r,s)=>i[r]=s.join(",")),t.headers.has(Xt)||(i[Xt]=Ri),!t.headers.has(ft)){let r=t.detectContentTypeHeader();r!==null&&(i[ft]=r)}return{body:t.serializeBody(),method:t.method,headers:i,credentials:o}}concatChunks(t,i){let o=new Uint8Array(i),r=0;for(let s of t)o.set(s,r),r+=s.length;return o}static \u0275fac=function(i){return new(i||e)};static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})(),wn=class{};function Tn(){}function br(e){e.then(Tn,Tn)}function yr(e,n){return n(e)}function vr(e,n,t){return(i,o)=>ii(t,()=>n(i,r=>e(r,o)))}var ki=new U(""),_r=new U(""),Cr=new U("",{providedIn:"root",factory:()=>!0});var xi=(()=>{class e extends mt{backend;injector;chain=null;pendingTasks=g(ai);contributeToStability=g(Cr);constructor(t,i){super(),this.backend=t,this.injector=i}handle(t){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(ki),...this.injector.get(_r,[])]));this.chain=i.reduceRight((o,r)=>vr(o,r,this.injector),yr)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(t,o=>this.backend.handle(o)).pipe(ei(()=>this.pendingTasks.remove(i)))}else return this.chain(t,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||e)(Ee(bt),Ee(ni))};static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var Er=/^\)\]\}',?\n/,Sr=RegExp(`^${Dn}:`,"m");function wr(e){return"responseURL"in e&&e.responseURL?e.responseURL:Sr.test(e.getAllResponseHeaders())?e.getResponseHeader(Dn):null}var Ii=(()=>{class e{xhrFactory;constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new _e(-2800,!1);let i=this.xhrFactory;return(i.\u0275loadImpl?Vt(i.\u0275loadImpl()):mn(null)).pipe(ti(()=>new gn(r=>{let s=i.build();if(s.open(t.method,t.urlWithParams),t.withCredentials&&(s.withCredentials=!0),t.headers.forEach((f,m)=>s.setRequestHeader(f,m.join(","))),t.headers.has(Xt)||s.setRequestHeader(Xt,Ri),!t.headers.has(ft)){let f=t.detectContentTypeHeader();f!==null&&s.setRequestHeader(ft,f)}if(t.responseType){let f=t.responseType.toLowerCase();s.responseType=f!=="json"?f:"text"}let a=t.serializeBody(),l=null,c=()=>{if(l!==null)return l;let f=s.statusText||"OK",m=new ye(s.getAllResponseHeaders()),O=wr(s)||t.url;return l=new Qt({headers:m,status:s.status,statusText:f,url:O}),l},u=()=>{let{headers:f,status:m,statusText:O,url:D}=c(),T=null;m!==fr&&(T=typeof s.response>"u"?s.responseText:s.response),m===0&&(m=T?Ni:0);let k=m>=200&&m<300;if(t.responseType==="json"&&typeof T=="string"){let J=T;T=T.replace(Er,"");try{T=T!==""?JSON.parse(T):null}catch(ce){T=J,k&&(k=!1,T={error:ce,text:T})}}k?(r.next(new vt({body:T,headers:f,status:m,statusText:O,url:D||void 0})),r.complete()):r.error(new De({error:T,headers:f,status:m,statusText:O,url:D||void 0}))},d=f=>{let{url:m}=c(),O=new De({error:f,status:s.status||0,statusText:s.statusText||"Unknown Error",url:m||void 0});r.error(O)},p=!1,h=f=>{p||(r.next(c()),p=!0);let m={type:Ie.DownloadProgress,loaded:f.loaded};f.lengthComputable&&(m.total=f.total),t.responseType==="text"&&s.responseText&&(m.partialText=s.responseText),r.next(m)},b=f=>{let m={type:Ie.UploadProgress,loaded:f.loaded};f.lengthComputable&&(m.total=f.total),r.next(m)};return s.addEventListener("load",u),s.addEventListener("error",d),s.addEventListener("timeout",d),s.addEventListener("abort",d),t.reportProgress&&(s.addEventListener("progress",h),a!==null&&s.upload&&s.upload.addEventListener("progress",b)),s.send(a),r.next({type:Ie.Sent}),()=>{s.removeEventListener("error",d),s.removeEventListener("abort",d),s.removeEventListener("load",u),s.removeEventListener("timeout",d),t.reportProgress&&(s.removeEventListener("progress",h),a!==null&&s.upload&&s.upload.removeEventListener("progress",b)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(i){return new(i||e)(Ee(Ei))};static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})(),Pi=new U(""),Tr="XSRF-TOKEN",Ar=new U("",{providedIn:"root",factory:()=>Tr}),Dr="X-XSRF-TOKEN",xr=new U("",{providedIn:"root",factory:()=>Dr}),Jt=class{},Ir=(()=>{class e{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(t,i,o){this.doc=t,this.platform=i,this.cookieName=o}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=yi(t,this.cookieName),this.lastCookieString=t),this.lastToken}static \u0275fac=function(i){return new(i||e)(Ee(ge),Ee(we),Ee(Ar))};static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();function Or(e,n){let t=e.url.toLowerCase();if(!g(Pi)||e.method==="GET"||e.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return n(e);let i=g(Jt).getToken(),o=g(xr);return i!=null&&!e.headers.has(o)&&(e=e.clone({headers:e.headers.set(o,i)})),n(e)}var Li=function(e){return e[e.Interceptors=0]="Interceptors",e[e.LegacyInterceptors=1]="LegacyInterceptors",e[e.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",e[e.NoXsrfProtection=3]="NoXsrfProtection",e[e.JsonpSupport=4]="JsonpSupport",e[e.RequestsMadeViaParent=5]="RequestsMadeViaParent",e[e.Fetch=6]="Fetch",e}(Li||{});function Mr(e,n){return{\u0275kind:e,\u0275providers:n}}function ul(...e){let n=[gr,Ii,xi,{provide:mt,useExisting:xi},{provide:bt,useFactory:()=>g(Fi,{optional:!0})??g(Ii)},{provide:ki,useValue:Or,multi:!0},{provide:Pi,useValue:!0},{provide:Jt,useClass:Ir}];for(let t of e)n.push(...t.\u0275providers);return $t(n)}function dl(){return Mr(Li.Fetch,[Cn,{provide:Fi,useExisting:Cn},{provide:bt,useExisting:Cn}])}function $i(e,n){return e?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}function Oe(e,n){if(e&&n){let t=i=>{$i(e,i)||(e.classList?e.classList.add(i):e.className+=" "+i)};[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(t))}}function Rr(){return window.innerWidth-document.documentElement.offsetWidth}function Qe(e){for(let n of document?.styleSheets)try{for(let t of n?.cssRules)for(let i of t?.style)if(e.test(i))return{name:i,value:t.style.getPropertyValue(i).trim()}}catch{}return null}function gl(e="p-overflow-hidden"){let n=Qe(/-scrollbar-width$/);n?.name&&document.body.style.setProperty(n.name,Rr()+"px"),Oe(document.body,e)}function je(e,n){if(e&&n){let t=i=>{e.classList?e.classList.remove(i):e.className=e.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," ")};[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(t))}}function ml(e="p-overflow-hidden"){let n=Qe(/-scrollbar-width$/);n?.name&&document.body.style.removeProperty(n.name),je(document.body,e)}function Bi(e){let n={width:0,height:0};return e&&(e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible"),n}function In(){let e=window,n=document,t=n.documentElement,i=n.getElementsByTagName("body")[0],o=e.innerWidth||t.clientWidth||i.clientWidth,r=e.innerHeight||t.clientHeight||i.clientHeight;return{width:o,height:r}}function Nr(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}function Fr(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}function bl(e,n,t=!0){var i,o,r,s;if(e){let a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:Bi(e),l=a.height,c=a.width,u=n.offsetHeight,d=n.offsetWidth,p=n.getBoundingClientRect(),h=Fr(),b=Nr(),f=In(),m,O,D="top";p.top+u+l>f.height?(m=p.top+h-l,D="bottom",m<0&&(m=h)):m=u+p.top+h,p.left+c>f.width?O=Math.max(0,p.left+b+d-c):O=p.left+b,e.style.top=m+"px",e.style.left=O+"px",e.style.transformOrigin=D,t&&(e.style.marginTop=D==="bottom"?`calc(${(o=(i=Qe(/-anchor-gutter$/))==null?void 0:i.value)!=null?o:"2px"} * -1)`:(s=(r=Qe(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function kr(e,n){e&&(typeof n=="string"?e.style.cssText=n:Object.entries(n||{}).forEach(([t,i])=>e.style[t]=i))}function On(e,n){if(e instanceof HTMLElement){let t=e.offsetWidth;if(n){let i=getComputedStyle(e);t+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return t}return 0}function yl(e,n,t=!0){var i,o,r,s;if(e){let a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:Bi(e),l=n.offsetHeight,c=n.getBoundingClientRect(),u=In(),d,p,h="top";c.top+l+a.height>u.height?(d=-1*a.height,h="bottom",c.top+d<0&&(d=-1*c.top)):d=l,a.width>u.width?p=c.left*-1:c.left+a.width>u.width?p=(c.left+a.width-u.width)*-1:p=0,e.style.top=d+"px",e.style.left=p+"px",e.style.transformOrigin=h,t&&(e.style.marginTop=h==="bottom"?`calc(${(o=(i=Qe(/-anchor-gutter$/))==null?void 0:i.value)!=null?o:"2px"} * -1)`:(s=(r=Qe(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function Je(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}function Mn(e){let n=e;return e&&typeof e=="object"&&(e.hasOwnProperty("current")?n=e.current:e.hasOwnProperty("el")&&(e.el.hasOwnProperty("nativeElement")?n=e.el.nativeElement:n=e.el)),Je(n)?n:void 0}function vl(e,n){let t=Mn(e);if(t)t.appendChild(n);else throw new Error("Cannot append "+n+" to "+e)}var xn=void 0;function Vi(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(xn!=null)return xn;let n=document.createElement("div");kr(n,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(n);let t=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),xn=t,t}}function Zt(e,n={}){if(Je(e)){let t=(i,o)=>{var r,s;let a=(r=e?.$attrs)!=null&&r[i]?[(s=e?.$attrs)==null?void 0:s[i]]:[];return[o].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let d=Array.isArray(c)?t(i,c):Object.entries(c).map(([p,h])=>i==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);l=d.length?l.concat(d.filter(p=>!!p)):l}}return l},a)};Object.entries(n).forEach(([i,o])=>{if(o!=null){let r=i.match(/^on(.+)/);r?e.addEventListener(r[1].toLowerCase(),o):i==="p-bind"||i==="pBind"?Zt(e,o):(o=i==="class"?[...new Set(t("class",o))].join(" ").trim():i==="style"?t("style",o).join(";").trim():o,(e.$attrs=e.$attrs||{})&&(e.$attrs[i]=o),e.setAttribute(i,o))}})}}function _l(e,n={},...t){if(e){let i=document.createElement(e);return Zt(i,n),i.append(...t),i}}function Cl(e,n){if(e){e.style.opacity="0";let t=+new Date,i="0",o=function(){i=`${+e.style.opacity+(new Date().getTime()-t)/n}`,e.style.opacity=i,t=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,16))};o()}}function Pr(e,n){return Je(e)?Array.from(e.querySelectorAll(n)):[]}function Ze(e,n){return Je(e)?e.matches(n)?e:e.querySelector(n):null}function El(e,n){e&&document.activeElement!==e&&e.focus(n)}function Sl(e,n){if(Je(e)){let t=e.getAttribute(n);return isNaN(t)?t==="true"||t==="false"?t==="true":t:+t}}function Ui(e,n=""){let t=Pr(e,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`),i=[];for(let o of t)getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&i.push(o);return i}function wl(e,n){let t=Ui(e,n);return t.length>0?t[0]:null}function Rn(e){if(e){let n=e.offsetHeight,t=getComputedStyle(e);return n-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),n}return 0}function Lr(e){if(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}return 0}function Vr(e){if(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}return 0}function ji(e){if(e){let n=e.parentNode;return n&&n instanceof ShadowRoot&&n.host&&(n=n.host),n}return null}function Tl(e){var n;if(e){let t=(n=ji(e))==null?void 0:n.childNodes,i=0;if(t)for(let o=0;o<t.length;o++){if(t[o]===e)return i;t[o].nodeType===1&&i++}}return-1}function Al(e,n){let t=Ui(e,n);return t.length>0?t[t.length-1]:null}function Nn(e){if(e){let n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function en(e,n){if(e){let t=e.offsetHeight;if(n){let i=getComputedStyle(e);t+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return t}return 0}function Dl(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function $r(e){return!!(e!==null&&typeof e<"u"&&e.nodeName&&ji(e))}function xl(e,n){var t;if(e)switch(e){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return(t=n?.parentElement)==null?void 0:t.parentElement;default:if(typeof e=="string")return document.querySelector(e);let o=Mn((r=>!!(r&&r.constructor&&r.call&&r.apply))(e)?e():e);return o?.nodeType===9||$r(o)?o:void 0}}function Il(){return navigator.userAgent}function Fn(e){if(e){let n=e.offsetWidth,t=getComputedStyle(e);return n-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),n}return 0}function Ol(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Br(e){return!!(e&&e.offsetParent!=null)}function Ml(e){return!Br(e)}function Rl(e){return e?getComputedStyle(e).direction==="rtl":!1}function Nl(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Fl(e,n){var t,i;if(e){let o=e.parentElement,r=Nn(o),s=In(),a=e.offsetParent?e.offsetWidth:Vr(e),l=e.offsetParent?e.offsetHeight:Lr(e),c=On((t=o?.children)==null?void 0:t[0]),u=en((i=o?.children)==null?void 0:i[0]),d="",p="";r.left+c+a>s.width-Vi()?r.left<a?n%2===1?d=r.left?"-"+r.left+"px":"100%":n%2===0&&(d=s.width-a-Vi()+"px"):d="-100%":d="100%",e.getBoundingClientRect().top+u+l>s.height?p=`-${l-u}px`:p="0px",e.style.top=p,e.style.left=d}}function Wi(e){var n;e&&("remove"in Element.prototype?e.remove():(n=e.parentNode)==null||n.removeChild(e))}function kl(e,n){let t=Mn(e);if(t)t.removeChild(n);else throw new Error("Cannot remove "+n+" from "+e)}function Pl(e,n){let t=getComputedStyle(e).getPropertyValue("borderTopWidth"),i=t?parseFloat(t):0,o=getComputedStyle(e).getPropertyValue("paddingTop"),r=o?parseFloat(o):0,s=e.getBoundingClientRect(),l=n.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-i-r,c=e.scrollTop,u=e.clientHeight,d=en(n);l<0?e.scrollTop=c+l:l+d>u&&(e.scrollTop=c+l-u+d)}function Hi(e,n="",t){Je(e)&&t!==null&&t!==void 0&&e.setAttribute(n,t)}function Gi(){let e=new Map;return{on(n,t){let i=e.get(n);return i?i.push(t):i=[t],e.set(n,i),this},off(n,t){let i=e.get(n);return i&&i.splice(i.indexOf(t)>>>0,1),this},emit(n,t){let i=e.get(n);i&&i.slice().map(o=>{o(t)})},clear(){e.clear()}}}var Ur=Object.defineProperty,zi=Object.getOwnPropertySymbols,jr=Object.prototype.hasOwnProperty,Wr=Object.prototype.propertyIsEnumerable,qi=(e,n,t)=>n in e?Ur(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Hr=(e,n)=>{for(var t in n||(n={}))jr.call(n,t)&&qi(e,t,n[t]);if(zi)for(var t of zi(n))Wr.call(n,t)&&qi(e,t,n[t]);return e};function z(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function kn(e,n,t=new WeakSet){if(e===n)return!0;if(!e||!n||typeof e!="object"||typeof n!="object"||t.has(e)||t.has(n))return!1;t.add(e).add(n);let i=Array.isArray(e),o=Array.isArray(n),r,s,a;if(i&&o){if(s=e.length,s!=n.length)return!1;for(r=s;r--!==0;)if(!kn(e[r],n[r],t))return!1;return!0}if(i!=o)return!1;let l=e instanceof Date,c=n instanceof Date;if(l!=c)return!1;if(l&&c)return e.getTime()==n.getTime();let u=e instanceof RegExp,d=n instanceof RegExp;if(u!=d)return!1;if(u&&d)return e.toString()==n.toString();let p=Object.keys(e);if(s=p.length,s!==Object.keys(n).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(n,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!kn(e[a],n[a],t))return!1;return!0}function Gr(e,n){return kn(e,n)}function Yi(e){return!!(e&&e.constructor&&e.call&&e.apply)}function w(e){return!z(e)}function Me(e,n){if(!e||!n)return null;try{let t=e[n];if(w(t))return t}catch{}if(Object.keys(e).length){if(Yi(n))return n(e);if(n.indexOf(".")===-1)return e[n];{let t=n.split("."),i=e;for(let o=0,r=t.length;o<r;++o){if(i==null)return null;i=i[t[o]]}return i}}return null}function Re(e,n,t){return t?Me(e,t)===Me(n,t):Gr(e,n)}function Bl(e,n){if(e!=null&&n&&n.length){for(let t of n)if(Re(e,t))return!0}return!1}function zr(e,n){let t=-1;if(n){for(let i=0;i<n.length;i++)if(n[i]===e){t=i;break}}return t}function Ul(e,n){let t=-1;if(w(e))try{t=e.findLastIndex(n)}catch{t=e.lastIndexOf([...e].reverse().find(n))}return t}function ae(e,n=!0){return e instanceof Object&&e.constructor===Object&&(n||Object.keys(e).length!==0)}function oe(e,...n){return Yi(e)?e(...n):e}function Ne(e,n=!0){return typeof e=="string"&&(n||e!=="")}function Ki(e){return Ne(e)?e.replace(/(-|_)/g,"").toLowerCase():e}function tn(e,n="",t={}){let i=Ki(n).split("."),o=i.shift();return o?ae(e)?tn(oe(e[Object.keys(e).find(r=>Ki(r)===o)||""],t),i.join("."),t):void 0:oe(e,t)}function jl(e,n,t,i){if(t.length>0){let o=!1;for(let r=0;r<t.length;r++)if(zr(t[r],i)>n){t.splice(r,0,e),o=!0;break}o||t.push(e)}else t.push(e)}function nn(e,n=!0){return Array.isArray(e)&&(n||e.length!==0)}function Wl(e){return e instanceof Date&&e.constructor===Date}function Xi(e){return w(e)&&!isNaN(e)}function Hl(e=""){return w(e)&&e.length===1&&!!e.match(/\S| /)}function Y(e,n){if(n){let t=n.test(e);return n.lastIndex=0,t}return!1}function We(...e){let n=(t={},i={})=>{let o=Hr({},t);return Object.keys(i).forEach(r=>{ae(i[r])&&r in t&&ae(t[r])?o[r]=n(t[r],i[r]):o[r]=i[r]}),o};return e.reduce((t,i,o)=>o===0?i:n(t,i),{})}function He(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function X(e){if(e&&/[\xC0-\xFF\u0100-\u017E]/.test(e)){let t={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let i in t)e=e.replace(t[i],i)}return e}function on(e){return Ne(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,(n,t)=>t===0?n:"-"+n.toLowerCase()).toLowerCase():e}function Pn(e){return Ne(e)?e.replace(/[A-Z]/g,(n,t)=>t===0?n:"."+n.toLowerCase()).toLowerCase():e}var rn={};function _t(e="pui_id_"){return rn.hasOwnProperty(e)||(rn[e]=0),rn[e]++,`${e}${rn[e]}`}function qr(){let e=[],n=(s,a,l=999)=>{let c=o(s,a,l),u=c.value+(c.key===s?0:l)+1;return e.push({key:s,value:u}),u},t=s=>{e=e.filter(a=>a.value!==s)},i=(s,a)=>o(s,a).value,o=(s,a,l=0)=>[...e].reverse().find(c=>a?!0:c.key===s)||{key:s,value:l},r=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:r,set:(s,a,l)=>{a&&(a.style.zIndex=String(n(s,!0,l)))},clear:s=>{s&&(t(r(s)),s.style.zIndex="")},getCurrent:s=>i(s,!0)}}var ql=qr();var Qi=["*"],Kr=function(e){return e[e.ACCEPT=0]="ACCEPT",e[e.REJECT=1]="REJECT",e[e.CANCEL=2]="CANCEL",e}(Kr||{}),sc=(()=>{class e{requireConfirmationSource=new de;acceptConfirmationSource=new de;requireConfirmation$=this.requireConfirmationSource.asObservable();accept=this.acceptConfirmationSource.asObservable();confirm(t){return this.requireConfirmationSource.next(t),this}close(){return this.requireConfirmationSource.next(null),this}onAccept(){this.acceptConfirmationSource.next(null)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var $=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return e})(),ac=(()=>{class e{static AND="and";static OR="or"}return e})(),lc=(()=>{class e{filter(t,i,o,r,s){let a=[];if(t)for(let l of t)for(let c of i){let u=Me(l,c);if(this.filters[r](u,o,s)){a.push(l);break}}return a}filters={startsWith:(t,i,o)=>{if(i==null||i.trim()==="")return!0;if(t==null)return!1;let r=X(i.toString()).toLocaleLowerCase(o);return X(t.toString()).toLocaleLowerCase(o).slice(0,r.length)===r},contains:(t,i,o)=>{if(i==null||typeof i=="string"&&i.trim()==="")return!0;if(t==null)return!1;let r=X(i.toString()).toLocaleLowerCase(o);return X(t.toString()).toLocaleLowerCase(o).indexOf(r)!==-1},notContains:(t,i,o)=>{if(i==null||typeof i=="string"&&i.trim()==="")return!0;if(t==null)return!1;let r=X(i.toString()).toLocaleLowerCase(o);return X(t.toString()).toLocaleLowerCase(o).indexOf(r)===-1},endsWith:(t,i,o)=>{if(i==null||i.trim()==="")return!0;if(t==null)return!1;let r=X(i.toString()).toLocaleLowerCase(o),s=X(t.toString()).toLocaleLowerCase(o);return s.indexOf(r,s.length-r.length)!==-1},equals:(t,i,o)=>i==null||typeof i=="string"&&i.trim()===""?!0:t==null?!1:t.getTime&&i.getTime?t.getTime()===i.getTime():t==i?!0:X(t.toString()).toLocaleLowerCase(o)==X(i.toString()).toLocaleLowerCase(o),notEquals:(t,i,o)=>i==null||typeof i=="string"&&i.trim()===""?!1:t==null?!0:t.getTime&&i.getTime?t.getTime()!==i.getTime():t==i?!1:X(t.toString()).toLocaleLowerCase(o)!=X(i.toString()).toLocaleLowerCase(o),in:(t,i)=>{if(i==null||i.length===0)return!0;for(let o=0;o<i.length;o++)if(Re(t,i[o]))return!0;return!1},between:(t,i)=>i==null||i[0]==null||i[1]==null?!0:t==null?!1:t.getTime?i[0].getTime()<=t.getTime()&&t.getTime()<=i[1].getTime():i[0]<=t&&t<=i[1],lt:(t,i,o)=>i==null?!0:t==null?!1:t.getTime&&i.getTime?t.getTime()<i.getTime():t<i,lte:(t,i,o)=>i==null?!0:t==null?!1:t.getTime&&i.getTime?t.getTime()<=i.getTime():t<=i,gt:(t,i,o)=>i==null?!0:t==null?!1:t.getTime&&i.getTime?t.getTime()>i.getTime():t>i,gte:(t,i,o)=>i==null?!0:t==null?!1:t.getTime&&i.getTime?t.getTime()>=i.getTime():t>=i,is:(t,i,o)=>this.filters.equals(t,i,o),isNot:(t,i,o)=>this.filters.notEquals(t,i,o),before:(t,i,o)=>this.filters.lt(t,i,o),after:(t,i,o)=>this.filters.gt(t,i,o),dateIs:(t,i)=>i==null?!0:t==null?!1:t.toDateString()===i.toDateString(),dateIsNot:(t,i)=>i==null?!0:t==null?!1:t.toDateString()!==i.toDateString(),dateBefore:(t,i)=>i==null?!0:t==null?!1:t.getTime()<i.getTime(),dateAfter:(t,i)=>i==null?!0:t==null?!1:(t.setHours(0,0,0,0),t.getTime()>i.getTime())};register(t,i){this.filters[t]=i}static \u0275fac=function(i){return new(i||e)};static \u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),cc=(()=>{class e{messageSource=new de;clearSource=new de;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(t){t&&this.messageSource.next(t)}addAll(t){t&&t.length&&this.messageSource.next(t)}clear(t){this.clearSource.next(t||null)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})(),uc=(()=>{class e{clickSource=new de;clickObservable=this.clickSource.asObservable();add(t){t&&this.clickSource.next(t)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var dc=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275cmp=G({type:e,selectors:[["p-header"]],standalone:!1,ngContentSelectors:Qi,decls:1,vars:0,template:function(i,o){i&1&&(Be(),Ue(0))},encapsulation:2})}return e})(),pc=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275cmp=G({type:e,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:Qi,decls:1,vars:0,template:function(i,o){i&1&&(Be(),Ue(0))},encapsulation:2})}return e})(),et=(()=>{class e{template;type;name;constructor(t){this.template=t}getType(){return this.name}static \u0275fac=function(i){return new(i||e)(H(li))};static \u0275dir=M({type:e,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return e})(),W=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=L({type:e});static \u0275inj=P({imports:[se]})}return e})(),hc=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return e})();var Yr=Object.defineProperty,Xr=Object.defineProperties,Qr=Object.getOwnPropertyDescriptors,sn=Object.getOwnPropertySymbols,eo=Object.prototype.hasOwnProperty,to=Object.prototype.propertyIsEnumerable,Ji=(e,n,t)=>n in e?Yr(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,I=(e,n)=>{for(var t in n||(n={}))eo.call(n,t)&&Ji(e,t,n[t]);if(sn)for(var t of sn(n))to.call(n,t)&&Ji(e,t,n[t]);return e},nt=(e,n)=>Xr(e,Qr(n)),ve=(e,n)=>{var t={};for(var i in e)eo.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(e!=null&&sn)for(var i of sn(e))n.indexOf(i)<0&&to.call(e,i)&&(t[i]=e[i]);return t};var Jr=Gi(),Q=Jr;function Zi(e,n){nn(e)?e.push(...n||[]):ae(e)&&Object.assign(e,n)}function Zr(e){return ae(e)&&e.hasOwnProperty("value")&&e.hasOwnProperty("type")?e.value:e}function es(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Ln(e="",n=""){return es(`${Ne(e,!1)&&Ne(n,!1)?`${e}-`:e}${n}`)}function no(e="",n=""){return`--${Ln(e,n)}`}function ts(e=""){let n=(e.match(/{/g)||[]).length,t=(e.match(/}/g)||[]).length;return(n+t)%2!==0}function io(e,n="",t="",i=[],o){if(Ne(e)){let r=/{([^}]*)}/g,s=e.trim();if(ts(s))return;if(Y(s,r)){let a=s.replaceAll(r,u=>{let p=u.replace(/{|}/g,"").split(".").filter(h=>!i.some(b=>Y(h,b)));return`var(${no(t,on(p.join("-")))}${w(o)?`, ${o}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return Y(a.replace(c,"0"),l)?`calc(${a})`:a}return s}else if(Xi(e))return e}function ns(e,n,t){Ne(n,!1)&&e.push(`${n}:${t};`)}function tt(e,n){return e?`${e}{${n}}`:""}var it=(...e)=>is(_.getTheme(),...e),is=(e={},n,t,i)=>{if(n){let{variable:o,options:r}=_.defaults||{},{prefix:s,transform:a}=e?.options||r||{},c=Y(n,/{([^}]*)}/g)?n:`{${n}}`;return i==="value"||z(i)&&a==="strict"?_.getTokenValue(n):io(c,void 0,s,[o.excludedKeyRegex],t)}return""};var os=(e={})=>{let{preset:n,options:t}=e;return{preset(i){return n=n?We(n,i):i,this},options(i){return t=t?I(I({},t),i):i,this},primaryPalette(i){let{semantic:o}=n||{};return n=nt(I({},n),{semantic:nt(I({},o),{primary:i})}),this},surfacePalette(i){var o,r;let{semantic:s}=n||{},a=i?.hasOwnProperty("light")?i?.light:i,l=i?.hasOwnProperty("dark")?i?.dark:i,c={colorScheme:{light:I(I({},(o=s?.colorScheme)==null?void 0:o.light),!!a&&{surface:a}),dark:I(I({},(r=s?.colorScheme)==null?void 0:r.dark),!!l&&{surface:l})}};return n=nt(I({},n),{semantic:I(I({},s),c)}),this},define({useDefaultPreset:i=!1,useDefaultOptions:o=!1}={}){return{preset:i?_.getPreset():n,options:o?_.getOptions():t}},update({mergePresets:i=!0,mergeOptions:o=!0}={}){let r={preset:i?We(_.getPreset(),n):n,options:o?I(I({},_.getOptions()),t):t};return _.setTheme(r),r},use(i){let o=this.define(i);return _.setTheme(o),o}}};function rs(e,n={}){let t=_.defaults.variable,{prefix:i=t.prefix,selector:o=t.selector,excludedKeyRegex:r=t.excludedKeyRegex}=n,s=(c,u="")=>Object.entries(c).reduce((d,[p,h])=>{let b=Y(p,r)?Ln(u):Ln(u,on(p)),f=Zr(h);if(ae(f)){let{variables:m,tokens:O}=s(f,b);Zi(d.tokens,O),Zi(d.variables,m)}else d.tokens.push((i?b.replace(`${i}-`,""):b).replaceAll("-",".")),ns(d.variables,no(b),io(f,b,i,[r]));return d},{variables:[],tokens:[]}),{variables:a,tokens:l}=s(e,i);return{value:a,tokens:l,declarations:a.join(""),css:tt(o,a.join(""))}}var le={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:`${e}{:root{[CSS]}}`,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){let n=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[e].flat().map(t=>{var i;return(i=n.map(o=>o.resolve(t)).find(o=>o.matched))!=null?i:this.rules.custom.resolve(t)})}},_toVariables(e,n){return rs(e,{prefix:n?.prefix})},getCommon({name:e="",theme:n={},params:t,set:i,defaults:o}){var r,s,a,l,c,u,d;let{preset:p,options:h}=n,b,f,m,O,D,T,k;if(w(p)&&h.transform!=="strict"){let{primitive:J,semantic:ce,extend:Pe}=p,ct=ce||{},{colorScheme:At}=ct,Dt=ve(ct,["colorScheme"]),xt=Pe||{},{colorScheme:It}=xt,ut=ve(xt,["colorScheme"]),dt=At||{},{dark:Ot}=dt,Mt=ve(dt,["dark"]),Rt=It||{},{dark:Nt}=Rt,Ft=ve(Rt,["dark"]),kt=w(J)?this._toVariables({primitive:J},h):{},Pt=w(Dt)?this._toVariables({semantic:Dt},h):{},Lt=w(Mt)?this._toVariables({light:Mt},h):{},qn=w(Ot)?this._toVariables({dark:Ot},h):{},Kn=w(ut)?this._toVariables({semantic:ut},h):{},Yn=w(Ft)?this._toVariables({light:Ft},h):{},Xn=w(Nt)?this._toVariables({dark:Nt},h):{},[Go,zo]=[(r=kt.declarations)!=null?r:"",kt.tokens],[qo,Ko]=[(s=Pt.declarations)!=null?s:"",Pt.tokens||[]],[Yo,Xo]=[(a=Lt.declarations)!=null?a:"",Lt.tokens||[]],[Qo,Jo]=[(l=qn.declarations)!=null?l:"",qn.tokens||[]],[Zo,er]=[(c=Kn.declarations)!=null?c:"",Kn.tokens||[]],[tr,nr]=[(u=Yn.declarations)!=null?u:"",Yn.tokens||[]],[ir,or]=[(d=Xn.declarations)!=null?d:"",Xn.tokens||[]];b=this.transformCSS(e,Go,"light","variable",h,i,o),f=zo;let rr=this.transformCSS(e,`${qo}${Yo}`,"light","variable",h,i,o),sr=this.transformCSS(e,`${Qo}`,"dark","variable",h,i,o);m=`${rr}${sr}`,O=[...new Set([...Ko,...Xo,...Jo])];let ar=this.transformCSS(e,`${Zo}${tr}color-scheme:light`,"light","variable",h,i,o),lr=this.transformCSS(e,`${ir}color-scheme:dark`,"dark","variable",h,i,o);D=`${ar}${lr}`,T=[...new Set([...er,...nr,...or])],k=oe(p.css,{dt:it})}return{primitive:{css:b,tokens:f},semantic:{css:m,tokens:O},global:{css:D,tokens:T},style:k}},getPreset({name:e="",preset:n={},options:t,params:i,set:o,defaults:r,selector:s}){var a,l,c;let u,d,p;if(w(n)&&t.transform!=="strict"){let h=e.replace("-directive",""),b=n,{colorScheme:f,extend:m,css:O}=b,D=ve(b,["colorScheme","extend","css"]),T=m||{},{colorScheme:k}=T,J=ve(T,["colorScheme"]),ce=f||{},{dark:Pe}=ce,ct=ve(ce,["dark"]),At=k||{},{dark:Dt}=At,xt=ve(At,["dark"]),It=w(D)?this._toVariables({[h]:I(I({},D),J)},t):{},ut=w(ct)?this._toVariables({[h]:I(I({},ct),xt)},t):{},dt=w(Pe)?this._toVariables({[h]:I(I({},Pe),Dt)},t):{},[Ot,Mt]=[(a=It.declarations)!=null?a:"",It.tokens||[]],[Rt,Nt]=[(l=ut.declarations)!=null?l:"",ut.tokens||[]],[Ft,kt]=[(c=dt.declarations)!=null?c:"",dt.tokens||[]],Pt=this.transformCSS(h,`${Ot}${Rt}`,"light","variable",t,o,r,s),Lt=this.transformCSS(h,Ft,"dark","variable",t,o,r,s);u=`${Pt}${Lt}`,d=[...new Set([...Mt,...Nt,...kt])],p=oe(O,{dt:it})}return{css:u,tokens:d,style:p}},getPresetC({name:e="",theme:n={},params:t,set:i,defaults:o}){var r;let{preset:s,options:a}=n,l=(r=s?.components)==null?void 0:r[e];return this.getPreset({name:e,preset:l,options:a,params:t,set:i,defaults:o})},getPresetD({name:e="",theme:n={},params:t,set:i,defaults:o}){var r;let s=e.replace("-directive",""),{preset:a,options:l}=n,c=(r=a?.directives)==null?void 0:r[s];return this.getPreset({name:s,preset:c,options:l,params:t,set:i,defaults:o})},applyDarkColorScheme(e){return!(e.darkModeSelector==="none"||e.darkModeSelector===!1)},getColorSchemeOption(e,n){var t;return this.applyDarkColorScheme(e)?this.regex.resolve(e.darkModeSelector===!0?n.options.darkModeSelector:(t=e.darkModeSelector)!=null?t:n.options.darkModeSelector):[]},getLayerOrder(e,n={},t,i){let{cssLayer:o}=n;return o?`@layer ${oe(o.order||"primeui",t)}`:""},getCommonStyleSheet({name:e="",theme:n={},params:t,props:i={},set:o,defaults:r}){let s=this.getCommon({name:e,theme:n,params:t,set:o,defaults:r}),a=Object.entries(i).reduce((l,[c,u])=>l.push(`${c}="${u}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[c,u])=>{if(u?.css){let d=He(u?.css),p=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${p}" ${a}>${d}</style>`)}return l},[]).join("")},getStyleSheet({name:e="",theme:n={},params:t,props:i={},set:o,defaults:r}){var s;let a={name:e,theme:n,params:t,set:o,defaults:r},l=(s=e.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,c=Object.entries(i).reduce((u,[d,p])=>u.push(`${d}="${p}"`)&&u,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${e}-variables" ${c}>${He(l)}</style>`:""},createTokens(e={},n,t="",i="",o={}){return Object.entries(e).forEach(([r,s])=>{let a=Y(r,n.variable.excludedKeyRegex)?t:t?`${t}.${Pn(r)}`:Pn(r),l=i?`${i}.${r}`:r;ae(s)?this.createTokens(s,n,a,l,o):(o[a]||(o[a]={paths:[],computed(c,u={}){var d,p;return this.paths.length===1?(d=this.paths[0])==null?void 0:d.computed(this.paths[0].scheme,u.binding):c&&c!=="none"?(p=this.paths.find(h=>h.scheme===c))==null?void 0:p.computed(c,u.binding):this.paths.map(h=>h.computed(h.scheme,u[h.scheme]))}}),o[a].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(c,u={}){let d=/{([^}]*)}/g,p=s;if(u.name=this.path,u.binding||(u.binding={}),Y(s,d)){let b=s.trim().replaceAll(d,O=>{var D;let T=O.replace(/{|}/g,""),k=(D=o[T])==null?void 0:D.computed(c,u);return nn(k)&&k.length===2?`light-dark(${k[0].value},${k[1].value})`:k?.value}),f=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,m=/var\([^)]+\)/g;p=Y(b.replace(m,"0"),f)?`calc(${b})`:b}return z(u.binding)&&delete u.binding,{colorScheme:c,path:this.path,paths:u,value:p.includes("undefined")?void 0:p}}}))}),o},getTokenValue(e,n,t){var i;let r=(l=>l.split(".").filter(u=>!Y(u.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(n),s=n.includes("colorScheme.light")?"light":n.includes("colorScheme.dark")?"dark":void 0,a=[(i=e[r])==null?void 0:i.computed(s)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},c)=>{let u=c,{colorScheme:d}=u,p=ve(u,["colorScheme"]);return l[d]=p,l},void 0)},getSelectorRule(e,n,t,i){return t==="class"||t==="attr"?tt(w(n)?`${e}${n},${e} ${n}`:e,i):tt(e,w(n)?tt(n,i):i)},transformCSS(e,n,t,i,o={},r,s,a){if(w(n)){let{cssLayer:l}=o;if(i!=="style"){let c=this.getColorSchemeOption(o,s);n=t==="dark"?c.reduce((u,{type:d,selector:p})=>(w(p)&&(u+=p.includes("[CSS]")?p.replace("[CSS]",n):this.getSelectorRule(p,a,d,n)),u),""):tt(a??":root",n)}if(l){let c={name:"primeui",order:"primeui"};ae(l)&&(c.name=oe(l.name,{name:e,type:i})),w(c.name)&&(n=tt(`@layer ${c.name}`,n),r?.layerNames(c.name))}return n}return""}},_={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){let{theme:n}=e;n&&(this._theme=nt(I({},n),{options:I(I({},this.defaults.options),n.options)}),this._tokens=le.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),Q.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=nt(I({},this.theme),{preset:e}),this._tokens=le.createTokens(e,this.defaults),this.clearLoadedStyleNames(),Q.emit("preset:change",e),Q.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=nt(I({},this.theme),{options:e}),this.clearLoadedStyleNames(),Q.emit("options:change",e),Q.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return le.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",n){return le.getCommon({name:e,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",n){let t={name:e,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return le.getPresetC(t)},getDirective(e="",n){let t={name:e,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return le.getPresetD(t)},getCustomPreset(e="",n,t,i){let o={name:e,preset:n,options:this.options,selector:t,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return le.getPreset(o)},getLayerOrderCSS(e=""){return le.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",n,t="style",i){return le.transformCSS(e,n,i,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",n,t={}){return le.getCommonStyleSheet({name:e,theme:this.theme,params:n,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,n,t={}){return le.getStyleSheet({name:e,theme:this.theme,params:n,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:n}){this._loadingStyles.size&&(this._loadingStyles.delete(n),Q.emit(`theme:${n}:load`,e),!this._loadingStyles.size&&Q.emit("theme:load"))}};function wc(...e){let n=We(_.getPreset(),...e);return _.setPreset(n),n}function Tc(e){return os().surfacePalette(e).update().preset}var ss=0,oo=(()=>{class e{document=g(ge);use(t,i={}){let o=!1,r=t,s=null,{immediate:a=!0,manual:l=!1,name:c=`style_${++ss}`,id:u=void 0,media:d=void 0,nonce:p=void 0,first:h=!1,props:b={}}=i;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||u&&this.document.getElementById(u)||this.document.createElement("style"),!s.isConnected){r=t,Zt(s,{type:"text/css",media:d,nonce:p});let f=this.document.head;h&&f.firstChild?f.insertBefore(s,f.firstChild):f.appendChild(s),Hi(s,"data-primeng-style-id",c)}return s.textContent!==r&&(s.textContent=r),{id:u,name:c,el:s,css:r}}}static \u0275fac=function(i){return new(i||e)};static \u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var ot={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},as=({dt:e})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${e("disabled.opacity")};
}

.pi {
    font-size: ${e("icon.size")};
}

.p-icon {
    width: ${e("icon.size")};
    height: ${e("icon.size")};
}

.p-overlay-mask {
    background: ${e("mask.background")};
    color: ${e("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${e("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${e("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${e("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${e("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,ls=({dt:e})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${e("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,F=(()=>{class e{name="base";useStyle=g(oo);theme=void 0;css=void 0;classes={};inlineStyles={};load=(t,i={},o=r=>r)=>{let r=o(oe(t,{dt:it}));return r?this.useStyle.use(He(r),y({name:this.name},i)):{}};loadCSS=(t={})=>this.load(this.css,t);loadTheme=(t={},i="")=>this.load(this.theme,t,(o="")=>_.transformCSS(t.name||this.name,`${o}${i}`));loadGlobalCSS=(t={})=>this.load(ls,t);loadGlobalTheme=(t={},i="")=>this.load(as,t,(o="")=>_.transformCSS(t.name||this.name,`${o}${i}`));getCommonTheme=t=>_.getCommon(this.name,t);getComponentTheme=t=>_.getComponent(this.name,t);getDirectiveTheme=t=>_.getDirective(this.name,t);getPresetTheme=(t,i,o)=>_.getCustomPreset(this.name,t,i,o);getLayerOrderThemeCSS=()=>_.getLayerOrderCSS(this.name);getStyleSheet=(t="",i={})=>{if(this.css){let o=oe(this.css,{dt:it}),r=He(`${o}${t}`),s=Object.entries(i).reduce((a,[l,c])=>a.push(`${l}="${c}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(t,i={})=>_.getCommonStyleSheet(this.name,t,i);getThemeStyleSheet=(t,i={})=>{let o=[_.getStyleSheet(this.name,t,i)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,s=oe(this.theme,{dt:it}),a=He(_.transformCSS(r,s)),l=Object.entries(i).reduce((c,[u,d])=>c.push(`${u}="${d}"`)&&c,[]).join(" ");o.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return o.join("")};static \u0275fac=function(i){return new(i||e)};static \u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var cs=(()=>{class e{theme=Z(void 0);csp=Z({nonce:void 0});isThemeChanged=!1;document=g(ge);baseStyle=g(F);constructor(){ht(()=>{Q.on("theme:change",t=>{be(()=>{this.isThemeChanged=!0,this.theme.set(t)})})}),ht(()=>{let t=this.theme();this.document&&t&&(this.isThemeChanged||this.onThemeChange(t),this.isThemeChanged=!1)})}ngOnDestroy(){_.clearLoadedStyleNames(),Q.clear()}onThemeChange(t){_.setTheme(t),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!_.isStyleNameLoaded("common")){let{primitive:t,semantic:i,global:o,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(t?.css,y({name:"primitive-variables"},s)),this.baseStyle.load(i?.css,y({name:"semantic-variables"},s)),this.baseStyle.load(o?.css,y({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(y({name:"global-style"},s),r),_.setLoadedStyleName("common")}}setThemeConfig(t){let{theme:i,csp:o}=t||{};i&&this.theme.set(i),o&&this.csp.set(o)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Vn=(()=>{class e extends cs{ripple=Z(!1);platformId=g(we);inputStyle=Z(null);inputVariant=Z(null);overlayOptions={};csp=Z({nonce:void 0});filterMatchModeOptions={text:[$.STARTS_WITH,$.CONTAINS,$.NOT_CONTAINS,$.ENDS_WITH,$.EQUALS,$.NOT_EQUALS],numeric:[$.EQUALS,$.NOT_EQUALS,$.LESS_THAN,$.LESS_THAN_OR_EQUAL_TO,$.GREATER_THAN,$.GREATER_THAN_OR_EQUAL_TO],date:[$.DATE_IS,$.DATE_IS_NOT,$.DATE_BEFORE,$.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new de;translationObserver=this.translationSource.asObservable();getTranslation(t){return this.translation[t]}setTranslation(t){this.translation=y(y({},this.translation),t),this.translationSource.next(this.translation)}setConfig(t){let{csp:i,ripple:o,inputStyle:r,inputVariant:s,theme:a,overlayOptions:l,translation:c}=t||{};i&&this.csp.set(i),o&&this.ripple.set(o),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),c&&this.setTranslation(c),a&&this.setThemeConfig({theme:a,csp:i})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=E(e)))(o||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),us=new U("PRIME_NG_CONFIG");function qc(...e){let n=e?.map(i=>({provide:us,useValue:i,multi:!1})),t=ui(()=>{let i=g(Vn);e?.forEach(o=>i.setConfig(o))});return $t([...n,t])}var ro=(()=>{class e extends F{name="common";static \u0275fac=(()=>{let t;return function(o){return(t||(t=E(e)))(o||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),B=(()=>{class e{document=g(ge);platformId=g(we);el=g(Ve);injector=g(Bt);cd=g(zt);renderer=g(pt);config=g(Vn);baseComponentStyle=g(ro);baseStyle=g(F);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=_t("pc");themeChangeListeners=[];_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,i="",o={}){return tn(t,i,o)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!Ci(this.platformId)){let{dt:i}=t;i&&i.currentValue&&(this._loadScopedThemeStyles(i.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(i.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(t=>Q.off("theme:change",t))}_loadStyles(){let t=()=>{ot.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),ot.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!ot.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),ot.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!_.isStyleNameLoaded("common")){let{primitive:t,semantic:i,global:o,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,y({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(i?.css,y({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(o?.css,y({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(y({name:"global-style"},this.styleOptions),r),_.setLoadedStyleName("common")}if(!_.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:i}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,y({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(y({name:`${this.componentStyle?.name}-style`},this.styleOptions),i),_.setLoadedStyleName(this.componentStyle?.name)}if(!_.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,y({name:"layer-order",first:!0},this.styleOptions)),_.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:i}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},o=this.componentStyle?.load(i,y({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){ot.clearLoadedStyleNames(),Q.on("theme:change",t),this.themeChangeListeners.push(t)}cx(t,i){let o=this.parent?this.parent.componentStyle?.classes?.[t]:this.componentStyle?.classes?.[t];return typeof o=="function"?o({instance:this}):typeof o=="string"?o:t}sx(t){let i=this.componentStyle?.inlineStyles?.[t];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:y({},i)}get parent(){return this.parentInstance}static \u0275fac=function(i){return new(i||e)};static \u0275dir=M({type:e,inputs:{dt:"dt"},features:[N([ro,F]),me]})}return e})();var ds=({dt:e})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,ps={root:"p-ink"},so=(()=>{class e extends F{name="ripple";theme=ds;classes=ps;static \u0275fac=(()=>{let t;return function(o){return(t||(t=E(e)))(o||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var an=(()=>{class e extends B{zone=g(Ut);_componentStyle=g(so);animationListener;mouseDownListener;timeout;constructor(){super(),ht(()=>{Kt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let i=this.getInk();if(!i||this.document.defaultView?.getComputedStyle(i,null).display==="none")return;if(je(i,"p-ink-active"),!Rn(i)&&!Fn(i)){let a=Math.max(On(this.el.nativeElement),en(this.el.nativeElement));i.style.height=a+"px",i.style.width=a+"px"}let o=Nn(this.el.nativeElement),r=t.pageX-o.left+this.document.body.scrollTop-Fn(i)/2,s=t.pageY-o.top+this.document.body.scrollLeft-Rn(i)/2;this.renderer.setStyle(i,"top",s+"px"),this.renderer.setStyle(i,"left",r+"px"),Oe(i,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&je(a,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let i=0;i<t.length;i++)if(typeof t[i].className=="string"&&t[i].className.indexOf("p-ink")!==-1)return t[i];return null}resetInk(){let t=this.getInk();t&&je(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),je(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Wi(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||e)};static \u0275dir=M({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[N([so]),A]})}return e})(),gu=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=L({type:e});static \u0275inj=P({})}return e})();var $n=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,i){t&&i&&(t.classList?t.classList.add(i):t.className+=" "+i)}static addMultipleClasses(t,i){if(t&&i)if(t.classList){let o=i.trim().split(" ");for(let r=0;r<o.length;r++)t.classList.add(o[r])}else{let o=i.split(" ");for(let r=0;r<o.length;r++)t.className+=" "+o[r]}}static removeClass(t,i){t&&i&&(t.classList?t.classList.remove(i):t.className=t.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,i){t&&i&&[i].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,i){return t&&i?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(i){return i!==t})}static find(t,i){return Array.from(t.querySelectorAll(i))}static findSingle(t,i){return this.isElement(t)?t.querySelector(i):null}static index(t){let i=t.parentNode.childNodes,o=0;for(var r=0;r<i.length;r++){if(i[r]==t)return o;i[r].nodeType==1&&o++}return-1}static indexWithinGroup(t,i){let o=t.parentNode?t.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==t)return r;o[s].attributes&&o[s].attributes[i]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(t,i,o="self"){o!=="self"&&t&&i&&this.appendChild(t,i)}static alignOverlay(t,i,o="self",r=!0){t&&i&&(r&&(t.style.minWidth=`${e.getOuterWidth(i)}px`),o==="self"?this.relativePosition(t,i):this.absolutePosition(t,i))}static relativePosition(t,i,o=!0){let r=D=>{if(D)return getComputedStyle(D).getPropertyValue("position")==="relative"?D:r(D.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=i.offsetHeight,l=i.getBoundingClientRect(),c=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),d=this.getViewport(),h=r(t)?.getBoundingClientRect()||{top:-1*c,left:-1*u},b,f;l.top+a+s.height>d.height?(b=l.top-h.top-s.height,t.style.transformOrigin="bottom",l.top+b<0&&(b=-1*l.top)):(b=a+l.top-h.top,t.style.transformOrigin="top");let m=l.left+s.width-d.width,O=l.left-h.left;s.width>d.width?f=(l.left-h.left)*-1:m>0?f=O-m:f=l.left-h.left,t.style.top=b+"px",t.style.left=f+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,i,o=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=r.height,a=r.width,l=i.offsetHeight,c=i.offsetWidth,u=i.getBoundingClientRect(),d=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),h=this.getViewport(),b,f;u.top+l+s>h.height?(b=u.top+d-s,t.style.transformOrigin="bottom",b<0&&(b=d)):(b=l+u.top+d,t.style.transformOrigin="top"),u.left+a>h.width?f=Math.max(0,u.left+p+c-a):f=u.left+p,t.style.top=b+"px",t.style.left=f+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,i=[]){return t.parentNode===null?i:this.getParents(t.parentNode,i.concat([t.parentNode]))}static getScrollableParents(t){let i=[];if(t){let o=this.getParents(t),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of o){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let c=l.split(",");for(let u of c){let d=this.findSingle(a,u);d&&s(d)&&i.push(d)}}a.nodeType!==9&&s(a)&&i.push(a)}}return i}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let i=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",i}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let i=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",i}static getHiddenElementDimensions(t){let i={};return t.style.visibility="hidden",t.style.display="block",i.width=t.offsetWidth,i.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",i}static scrollInView(t,i){let o=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=t.getBoundingClientRect(),u=i.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,d=t.scrollTop,p=t.clientHeight,h=this.getOuterHeight(i);u<0?t.scrollTop=d+u:u+h>p&&(t.scrollTop=d+u-p+h)}static fadeIn(t,i){t.style.opacity=0;let o=+new Date,r=0,s=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-o)/i,t.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(t,i){var o=1,r=50,s=i,a=r/s;let l=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(l)),t.style.opacity=o},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,i){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(t,i)}static getOuterWidth(t,i){let o=t.offsetWidth;if(i){let r=getComputedStyle(t);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(t){let i=getComputedStyle(t);return parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)}static getHorizontalMargin(t){let i=getComputedStyle(t);return parseFloat(i.marginLeft)+parseFloat(i.marginRight)}static innerWidth(t){let i=t.offsetWidth,o=getComputedStyle(t);return i+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),i}static width(t){let i=t.offsetWidth,o=getComputedStyle(t);return i-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),i}static getInnerHeight(t){let i=t.offsetHeight,o=getComputedStyle(t);return i+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),i}static getOuterHeight(t,i){let o=t.offsetHeight;if(i){let r=getComputedStyle(t);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(t){let i=t.offsetHeight,o=getComputedStyle(t);return i-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),i}static getWidth(t){let i=t.offsetWidth,o=getComputedStyle(t);return i-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),i}static getViewport(){let t=window,i=document,o=i.documentElement,r=i.getElementsByTagName("body")[0],s=t.innerWidth||o.clientWidth||r.clientWidth,a=t.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(t){var i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,i){let o=t.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(i,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,i=t.indexOf("MSIE ");if(i>0)return!0;var o=t.indexOf("Trident/");if(o>0){var r=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,i){if(this.isElement(i))i.appendChild(t);else if(i&&i.el&&i.el.nativeElement)i.el.nativeElement.appendChild(t);else throw"Cannot append "+i+" to "+t}static removeChild(t,i){if(this.isElement(i))i.removeChild(t);else if(i.el&&i.el.nativeElement)i.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+i}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let i=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let i=document.createElement("div");i.className="p-scrollbar-measure",document.body.appendChild(i);let o=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let i=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=i,i}static invokeElementMethod(t,i,o){t[i].apply(t,o)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),i=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:i[1]||"",version:i[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,i){t&&document.activeElement!==t&&t.focus(i)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,i=""){let o=this.find(t,this.getFocusableSelectorString(i)),r=[];for(let s of o){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(t,i=""){let o=this.findSingle(t,this.getFocusableSelectorString(i));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(t,i=""){let o=this.getFocusableElements(t,i);return o.length>0?o[0]:null}static getLastFocusableElement(t,i){let o=this.getFocusableElements(t,i);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(t,i=!1){let o=e.getFocusableElements(t),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);i?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,i){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return i?.parentElement.parentElement;default:let o=typeof t;if(o==="string")return document.querySelector(t);if(o==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,i){if(t){let o=t.getAttribute(i);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,i={},...o){if(t){let r=document.createElement(t);return this.setAttributes(r,i),r.append(...o),r}}static setAttribute(t,i="",o){this.isElement(t)&&o!==null&&o!==void 0&&t.setAttribute(i,o)}static setAttributes(t,i={}){if(this.isElement(t)){let o=(r,s)=>{let a=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[s].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let d=Array.isArray(c)?o(r,c):Object.entries(c).map(([p,h])=>r==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);l=d.length?l.concat(d.filter(p=>!!p)):l}}return l},a)};Object.entries(i).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(t,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=s),t.setAttribute(r,s))}})}}static isFocusableElement(t,i=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`):!1}}return e})(),ao=class{element;listener;scrollableParents;constructor(n,t=()=>{}){this.element=n,this.listener=t}bindScrollListener(){this.scrollableParents=$n.getScrollableParents(this.element);for(let n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var lo=(()=>{class e extends B{autofocus=!1;_autofocus=!1;focused=!1;platformId=g(we);document=g(ge);host=g(Ve);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Kt(this.platformId)&&this._autofocus&&setTimeout(()=>{let t=$n.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=E(e)))(o||e)}})();static \u0275dir=M({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",v],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[A]})}return e})();var hs=({dt:e})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
    line-height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
    line-height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
    line-height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
    line-height: ${e("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,fs={root:({props:e,instance:n})=>["p-badge p-component",{"p-badge-circle":w(e.value)&&String(e.value).length===1,"p-badge-dot":z(e.value)&&!n.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]},co=(()=>{class e extends F{name="badge";theme=hs;classes=fs;static \u0275fac=(()=>{let t;return function(o){return(t||(t=E(e)))(o||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var Bn=(()=>{class e extends B{styleClass=Se();style=Se();badgeSize=Se();size=Se();severity=Se();value=Se();badgeDisabled=Se(!1,{transform:v});_componentStyle=g(co);containerClass=fe(()=>{let t="p-badge p-component";return w(this.value())&&String(this.value()).length===1&&(t+=" p-badge-circle"),this.badgeSize()==="large"?t+=" p-badge-lg":this.badgeSize()==="xlarge"?t+=" p-badge-xl":this.badgeSize()==="small"&&(t+=" p-badge-sm"),z(this.value())&&(t+=" p-badge-dot"),this.styleClass()&&(t+=` ${this.styleClass()}`),this.severity()&&(t+=` p-badge-${this.severity()}`),t});static \u0275fac=(()=>{let t;return function(o){return(t||(t=E(e)))(o||e)}})();static \u0275cmp=G({type:e,selectors:[["p-badge"]],hostVars:6,hostBindings:function(i,o){i&2&&(jt(o.style()),pe(o.containerClass()),di("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[N([co]),A],decls:1,vars:1,template:function(i,o){i&1&&ze(0),i&2&&qe(o.value())},dependencies:[se,W],encapsulation:2,changeDetection:0})}return e})(),uo=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=L({type:e});static \u0275inj=P({imports:[Bn,W,W]})}return e})();var ms=["*"],bs=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,ys=(()=>{class e extends F{name="baseicon";inlineStyles=bs;static \u0275fac=(()=>{let t;return function(o){return(t||(t=E(e)))(o||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var po=(()=>{class e extends B{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let t=z(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let t;return function(o){return(t||(t=E(e)))(o||e)}})();static \u0275cmp=G({type:e,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",v],styleClass:"styleClass"},features:[N([ys]),A],ngContentSelectors:ms,decls:1,vars:0,template:function(i,o){i&1&&(Be(),Ue(0))},encapsulation:2,changeDetection:0})}return e})();var ho=(()=>{class e extends po{pathId;ngOnInit(){this.pathId="url(#"+_t()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=E(e)))(o||e)}})();static \u0275cmp=G({type:e,selectors:[["SpinnerIcon"]],features:[A],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,o){i&1&&(si(),ee(0,"svg",0)(1,"g"),he(2,"path",1),re(),ee(3,"defs")(4,"clipPath",2),he(5,"rect",3),re()()()),i&2&&(pe(o.getClassNames()),V("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),x(),V("clip-path",o.pathId),x(3),S("id",o.pathId))},encapsulation:2})}return e})();var vs=["content"],_s=["loading"],Cs=["icon"],Es=["*"],mo=e=>({class:e});function Ss(e,n){e&1&&$e(0)}function ws(e,n){if(e&1&&he(0,"span",8),e&2){let t=R(3);S("ngClass",t.iconClass()),V("aria-hidden",!0)("data-pc-section","loadingicon")}}function Ts(e,n){if(e&1&&he(0,"SpinnerIcon",9),e&2){let t=R(3);S("styleClass",t.spinnerIconClass())("spin",!0),V("aria-hidden",!0)("data-pc-section","loadingicon")}}function As(e,n){if(e&1&&(Wt(0),j(1,ws,1,3,"span",6)(2,Ts,1,4,"SpinnerIcon",7),Ht()),e&2){let t=R(2);x(),S("ngIf",t.loadingIcon),x(),S("ngIf",!t.loadingIcon)}}function Ds(e,n){}function xs(e,n){if(e&1&&j(0,Ds,0,0,"ng-template",10),e&2){let t=R(2);S("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function Is(e,n){if(e&1&&(Wt(0),j(1,As,3,2,"ng-container",2)(2,xs,1,1,null,5),Ht()),e&2){let t=R();x(),S("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),x(),S("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",Ke(3,mo,t.iconClass()))}}function Os(e,n){if(e&1&&he(0,"span",8),e&2){let t=R(2);pe(t.icon),S("ngClass",t.iconClass()),V("data-pc-section","icon")}}function Ms(e,n){}function Rs(e,n){if(e&1&&j(0,Ms,0,0,"ng-template",10),e&2){let t=R(2);S("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function Ns(e,n){if(e&1&&(Wt(0),j(1,Os,1,4,"span",11)(2,Rs,1,1,null,5),Ht()),e&2){let t=R();x(),S("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),x(),S("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",Ke(3,mo,t.iconClass()))}}function Fs(e,n){if(e&1&&(ee(0,"span",12),ze(1),re()),e&2){let t=R();V("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),x(),qe(t.label)}}function ks(e,n){if(e&1&&he(0,"p-badge",13),e&2){let t=R();S("value",t.badge)("severity",t.badgeSeverity)}}var Ps=({dt:e})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("button.primary.color")};
    background: ${e("button.primary.background")};
    border: 1px solid ${e("button.primary.border.color")};
    padding-block: ${e("button.padding.y")};
    padding-inline: ${e("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("button.transition.duration")}, color ${e("button.transition.duration")}, border-color ${e("button.transition.duration")},
            outline-color ${e("button.transition.duration")}, box-shadow ${e("button.transition.duration")};
    border-radius: ${e("button.border.radius")};
    outline-color: transparent;
    gap: ${e("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${e("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${e("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${e("button.sm.font.size")};
    padding-block: ${e("button.sm.padding.y")};
    padding-inline: ${e("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${e("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${e("button.lg.font.size")};
    padding-block: ${e("button.lg.padding.y")};
    padding-inline: ${e("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${e("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${e("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${e("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${e("button.primary.hover.background")};
    border: 1px solid ${e("button.primary.hover.border.color")};
    color: ${e("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${e("button.primary.active.background")};
    border: 1px solid ${e("button.primary.active.border.color")};
    color: ${e("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${e("button.primary.focus.ring.shadow")};
    outline: ${e("button.focus.ring.width")} ${e("button.focus.ring.style")} ${e("button.primary.focus.ring.color")};
    outline-offset: ${e("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${e("button.badge.size")};
    height: ${e("button.badge.size")};
    line-height: ${e("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${e("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${e("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${e("button.secondary.background")};
    border: 1px solid ${e("button.secondary.border.color")};
    color: ${e("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${e("button.secondary.hover.background")};
    border: 1px solid ${e("button.secondary.hover.border.color")};
    color: ${e("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${e("button.secondary.active.background")};
    border: 1px solid ${e("button.secondary.active.border.color")};
    color: ${e("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${e("button.secondary.focus.ring.color")};
    box-shadow: ${e("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${e("button.success.background")};
    border: 1px solid ${e("button.success.border.color")};
    color: ${e("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${e("button.success.hover.background")};
    border: 1px solid ${e("button.success.hover.border.color")};
    color: ${e("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${e("button.success.active.background")};
    border: 1px solid ${e("button.success.active.border.color")};
    color: ${e("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${e("button.success.focus.ring.color")};
    box-shadow: ${e("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${e("button.info.background")};
    border: 1px solid ${e("button.info.border.color")};
    color: ${e("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${e("button.info.hover.background")};
    border: 1px solid ${e("button.info.hover.border.color")};
    color: ${e("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${e("button.info.active.background")};
    border: 1px solid ${e("button.info.active.border.color")};
    color: ${e("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${e("button.info.focus.ring.color")};
    box-shadow: ${e("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${e("button.warn.background")};
    border: 1px solid ${e("button.warn.border.color")};
    color: ${e("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${e("button.warn.hover.background")};
    border: 1px solid ${e("button.warn.hover.border.color")};
    color: ${e("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${e("button.warn.active.background")};
    border: 1px solid ${e("button.warn.active.border.color")};
    color: ${e("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${e("button.warn.focus.ring.color")};
    box-shadow: ${e("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${e("button.help.background")};
    border: 1px solid ${e("button.help.border.color")};
    color: ${e("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${e("button.help.hover.background")};
    border: 1px solid ${e("button.help.hover.border.color")};
    color: ${e("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${e("button.help.active.background")};
    border: 1px solid ${e("button.help.active.border.color")};
    color: ${e("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${e("button.help.focus.ring.color")};
    box-shadow: ${e("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${e("button.danger.background")};
    border: 1px solid ${e("button.danger.border.color")};
    color: ${e("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${e("button.danger.hover.background")};
    border: 1px solid ${e("button.danger.hover.border.color")};
    color: ${e("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${e("button.danger.active.background")};
    border: 1px solid ${e("button.danger.active.border.color")};
    color: ${e("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${e("button.danger.focus.ring.color")};
    box-shadow: ${e("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${e("button.contrast.background")};
    border: 1px solid ${e("button.contrast.border.color")};
    color: ${e("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${e("button.contrast.hover.background")};
    border: 1px solid ${e("button.contrast.hover.border.color")};
    color: ${e("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${e("button.contrast.active.background")};
    border: 1px solid ${e("button.contrast.active.border.color")};
    color: ${e("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${e("button.contrast.focus.ring.color")};
    box-shadow: ${e("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${e("button.outlined.primary.hover.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${e("button.outlined.primary.active.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${e("button.outlined.secondary.hover.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${e("button.outlined.success.hover.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${e("button.outlined.success.active.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${e("button.outlined.info.hover.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${e("button.outlined.info.active.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${e("button.outlined.warn.hover.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${e("button.outlined.warn.active.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${e("button.outlined.help.hover.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${e("button.outlined.help.active.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${e("button.outlined.danger.hover.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${e("button.outlined.danger.active.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${e("button.outlined.contrast.hover.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${e("button.outlined.contrast.active.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${e("button.outlined.plain.hover.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${e("button.outlined.plain.active.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${e("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${e("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${e("button.text.success.hover.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${e("button.text.info.hover.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${e("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${e("button.text.help.hover.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${e("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${e("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${e("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,Ls={root:({instance:e,props:n})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!n.label&&!n.badge,"p-button-vertical":(n.iconPos==="top"||n.iconPos==="bottom")&&n.label,"p-button-loading":n.loading,"p-button-link":n.link,[`p-button-${n.severity}`]:n.severity,"p-button-raised":n.raised,"p-button-rounded":n.rounded,"p-button-text":n.text,"p-button-outlined":n.outlined,"p-button-sm":n.size==="small","p-button-lg":n.size==="large","p-button-plain":n.plain,"p-button-fluid":n.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos}`]:e.label}],label:"p-button-label"},ke=(()=>{class e extends F{name="button";theme=Ps;classes=Ls;static \u0275fac=(()=>{let t;return function(o){return(t||(t=E(e)))(o||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var Fe={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},fo=(()=>{class e extends B{_componentStyle=g(ke);static \u0275fac=(()=>{let t;return function(o){return(t||(t=E(e)))(o||e)}})();static \u0275dir=M({type:e,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(i,o){i&2&&Te("p-button-label",!0)},features:[N([ke]),A]})}return e})(),go=(()=>{class e extends B{_componentStyle=g(ke);static \u0275fac=(()=>{let t;return function(o){return(t||(t=E(e)))(o||e)}})();static \u0275dir=M({type:e,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(i,o){i&2&&Te("p-button-icon",!0)},features:[N([ke]),A]})}return e})(),yd=(()=>{class e extends B{iconPos="left";loadingIcon;set label(t){this._label=t,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(t){this._icon=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(t){this._loading=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=bn(go);labelSignal=bn(fo);isIconOnly=fe(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([i,o])=>this[`_${i}`]!==o&&(this[`_${i}`]=o))}severity;raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid;_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(Fe);isTextButton=fe(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=g(ke);ngAfterViewInit(){super.ngAfterViewInit(),Oe(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:i}=t;if(i){let o=i.currentValue;for(let r in o)this[r]=o[r]}}getStyleClass(){let t=[Fe.button,Fe.component];return this.icon&&!this.label&&z(this.htmlElement.textContent)&&t.push(Fe.iconOnly),this.loading&&(t.push(Fe.disabled,Fe.loading),!this.icon&&this.label&&t.push(Fe.labelOnly),this.icon&&!this.label&&!z(this.htmlElement.textContent)&&t.push(Fe.iconOnly)),this.text&&t.push("p-button-text"),this.severity&&t.push(`p-button-${this.severity}`),this.plain&&t.push("p-button-plain"),this.raised&&t.push("p-button-raised"),this.size&&t.push(`p-button-${this.size}`),this.outlined&&t.push("p-button-outlined"),this.rounded&&t.push("p-button-rounded"),this.size==="small"&&t.push("p-button-sm"),this.size==="large"&&t.push("p-button-lg"),this.hasFluid&&t.push("p-button-fluid"),t}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return z(this.fluid)?!!i:this.fluid}setStyleClass(){let t=this.getStyleClass();this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...t)}createLabel(){if(!Ze(this.htmlElement,".p-button-label")&&this.label){let i=this.document.createElement("span");this.icon&&!this.label&&i.setAttribute("aria-hidden","true"),i.className="p-button-label",i.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(i)}}createIcon(){if(!Ze(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let i=this.document.createElement("span");i.className="p-button-icon",i.setAttribute("aria-hidden","true");let o=this.label?"p-button-icon-"+this.iconPos:null;o&&Oe(i,o);let r=this.getIconClass();r&&Oe(i,r),!this.loadingIcon&&this.loading&&(i.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(i,this.htmlElement.firstChild)}}updateLabel(){let t=Ze(this.htmlElement,".p-button-label");if(!this.label){t&&this.htmlElement.removeChild(t);return}t?t.textContent=this.label:this.createLabel()}updateIcon(){let t=Ze(this.htmlElement,".p-button-icon"),i=Ze(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&t?t.innerHTML=this.spinnerIcon:t?.innerHTML&&(t.innerHTML=""),t?this.iconPos?t.className="p-button-icon "+(i?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():t.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(o){return(t||(t=E(e)))(o||e)}})();static \u0275dir=M({type:e,selectors:[["","pButton",""]],contentQueries:function(i,o,r){i&1&&(yn(r,o.iconSignal,go,5),yn(r,o.labelSignal,fo,5)),i&2&&mi(2)},hostVars:4,hostBindings:function(i,o){i&2&&Te("p-button-icon-only",o.isIconOnly())("p-button-text",o.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",v],rounded:[2,"rounded","rounded",v],text:[2,"text","text",v],outlined:[2,"outlined","outlined",v],size:"size",plain:[2,"plain","plain",v],fluid:[2,"fluid","fluid",v],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[N([ke]),A,me]})}return e})(),Vs=(()=>{class e extends B{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new K;onFocus=new K;onBlur=new K;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([i,o])=>this[`_${i}`]!==o&&(this[`_${i}`]=o))}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return z(this.fluid)?!!i:this.fluid}_componentStyle=g(ke);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this.contentTemplate=t.template;break;case"icon":this.iconTemplate=t.template;break;case"loadingicon":this.loadingIconTemplate=t.template;break;default:this.contentTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:i}=t;if(i){let o=i.currentValue;for(let r in o)this[r]=o[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[i])=>t+` ${i}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=E(e)))(o||e)}})();static \u0275cmp=G({type:e,selectors:[["p-button"]],contentQueries:function(i,o,r){if(i&1&&(te(r,vs,5),te(r,_s,5),te(r,Cs,5),te(r,et,4)),i&2){let s;ne(s=ie())&&(o.contentTemplate=s.first),ne(s=ie())&&(o.loadingIconTemplate=s.first),ne(s=ie())&&(o.iconTemplate=s.first),ne(s=ie())&&(o.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",v],loading:[2,"loading","loading",v],loadingIcon:"loadingIcon",raised:[2,"raised","raised",v],rounded:[2,"rounded","rounded",v],text:[2,"text","text",v],plain:[2,"plain","plain",v],severity:"severity",outlined:[2,"outlined","outlined",v],link:[2,"link","link",v],tabindex:[2,"tabindex","tabindex",Ye],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",v],fluid:[2,"fluid","fluid",v],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[N([ke]),A,me],ngContentSelectors:Es,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(i,o){i&1&&(Be(),ee(0,"button",0),Ae("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),Ue(1),j(2,Ss,1,0,"ng-container",1)(3,Is,3,5,"ng-container",2)(4,Ns,3,5,"ng-container",2)(5,Fs,2,3,"span",3)(6,ks,1,2,"p-badge",4),re()),i&2&&(S("ngStyle",o.style)("disabled",o.disabled||o.loading)("ngClass",o.buttonClass)("pAutoFocus",o.autofocus),V("type",o.type)("aria-label",o.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex),x(2),S("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),x(),S("ngIf",o.loading),x(),S("ngIf",!o.loading),x(),S("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),x(),S("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[se,qt,vi,Xe,_i,an,lo,ho,uo,Bn,W],encapsulation:2,changeDetection:0})}return e})(),vd=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=L({type:e});static \u0275inj=P({imports:[se,Vs,W,W]})}return e})();var To=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||e)(H(pt),H(Ve))};static \u0275dir=M({type:e})}return e})(),$s=(()=>{class e extends To{static \u0275fac=(()=>{let t;return function(o){return(t||(t=E(e)))(o||e)}})();static \u0275dir=M({type:e,features:[A]})}return e})(),lt=new U("");var Bs={provide:lt,useExisting:Ce(()=>Ao),multi:!0};function Us(){let e=vn()?vn().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var js=new U(""),Ao=(()=>{class e extends To{_compositionMode;_composing=!1;constructor(t,i,o){super(t,i),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!Us())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||e)(H(pt),H(Ve),H(js,8))};static \u0275dir=M({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,o){i&1&&Ae("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},standalone:!1,features:[N([Bs]),A]})}return e})();function Ws(e){return e==null||Hs(e)===0}function Hs(e){return e==null?null:Array.isArray(e)||typeof e=="string"?e.length:e instanceof Set?e.size:null}var Do=new U(""),Gs=new U("");function zs(e){return Ws(e.value)?{required:!0}:null}function bo(e){return null}function xo(e){return e!=null}function Io(e){return ci(e)?Vt(e):e}function Oo(e){let n={};return e.forEach(t=>{n=t!=null?y(y({},n),t):n}),Object.keys(n).length===0?null:n}function Mo(e,n){return n.map(t=>t(e))}function qs(e){return!e.validate}function Ro(e){return e.map(n=>qs(n)?n:t=>n.validate(t))}function Ks(e){if(!e)return null;let n=e.filter(xo);return n.length==0?null:function(t){return Oo(Mo(t,n))}}function No(e){return e!=null?Ks(Ro(e)):null}function Ys(e){if(!e)return null;let n=e.filter(xo);return n.length==0?null:function(t){let i=Mo(t,n).map(Io);return Qn(i).pipe(Le(Oo))}}function Fo(e){return e!=null?Ys(Ro(e)):null}function yo(e,n){return e===null?[n]:Array.isArray(e)?[...e,n]:[e,n]}function Xs(e){return e._rawValidators}function Qs(e){return e._rawAsyncValidators}function Un(e){return e?Array.isArray(e)?e:[e]:[]}function cn(e,n){return Array.isArray(e)?e.includes(n):e===n}function vo(e,n){let t=Un(n);return Un(e).forEach(o=>{cn(t,o)||t.push(o)}),t}function _o(e,n){return Un(n).filter(t=>!cn(e,t))}var un=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=No(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Fo(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,t){return this.control?this.control.hasError(n,t):!1}getError(n,t){return this.control?this.control.getError(n,t):null}},jn=class extends un{name;get formDirective(){return null}get path(){return null}},Tt=class extends un{_parent=null;name=null;valueAccessor=null},Wn=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Js={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Ld=ue(y({},Js),{"[class.ng-submitted]":"isSubmitted"}),ko=(()=>{class e extends Wn{constructor(t){super(t)}static \u0275fac=function(i){return new(i||e)(H(Tt,2))};static \u0275dir=M({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,o){i&2&&Te("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[A]})}return e})();var Ct="VALID",ln="INVALID",rt="PENDING",Et="DISABLED",at=class{},dn=class extends at{value;source;constructor(n,t){super(),this.value=n,this.source=t}},St=class extends at{pristine;source;constructor(n,t){super(),this.pristine=n,this.source=t}},wt=class extends at{touched;source;constructor(n,t){super(),this.touched=n,this.source=t}},st=class extends at{status;source;constructor(n,t){super(),this.status=n,this.source=t}};function Zs(e){return(pn(e)?e.validators:e)||null}function ea(e){return Array.isArray(e)?No(e):e||null}function ta(e,n){return(pn(n)?n.asyncValidators:e)||null}function na(e){return Array.isArray(e)?Fo(e):e||null}function pn(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}var Hn=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,t){this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return be(this.statusReactive)}set status(n){be(()=>this.statusReactive.set(n))}_status=fe(()=>this.statusReactive());statusReactive=Z(void 0);get valid(){return this.status===Ct}get invalid(){return this.status===ln}get pending(){return this.status==rt}get disabled(){return this.status===Et}get enabled(){return this.status!==Et}errors;get pristine(){return be(this.pristineReactive)}set pristine(n){be(()=>this.pristineReactive.set(n))}_pristine=fe(()=>this.pristineReactive());pristineReactive=Z(!0);get dirty(){return!this.pristine}get touched(){return be(this.touchedReactive)}set touched(n){be(()=>this.touchedReactive.set(n))}_touched=fe(()=>this.touchedReactive());touchedReactive=Z(!1);get untouched(){return!this.touched}_events=new de;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(vo(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(vo(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(_o(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(_o(n,this._rawAsyncValidators))}hasValidator(n){return cn(this._rawValidators,n)}hasAsyncValidator(n){return cn(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let t=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsTouched(ue(y({},n),{sourceControl:i})),t&&n.emitEvent!==!1&&this._events.next(new wt(!0,i))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(n))}markAsUntouched(n={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,i),t&&n.emitEvent!==!1&&this._events.next(new wt(!1,i))}markAsDirty(n={}){let t=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsDirty(ue(y({},n),{sourceControl:i})),t&&n.emitEvent!==!1&&this._events.next(new St(!1,i))}markAsPristine(n={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n,i),t&&n.emitEvent!==!1&&this._events.next(new St(!0,i))}markAsPending(n={}){this.status=rt;let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new st(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.markAsPending(ue(y({},n),{sourceControl:t}))}disable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=Et,this.errors=null,this._forEachChild(o=>{o.disable(ue(y({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new dn(this.value,i)),this._events.next(new st(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ue(y({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=Ct,this._forEachChild(i=>{i.enable(ue(y({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(ue(y({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,t){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ct||this.status===rt)&&this._runAsyncValidator(i,n.emitEvent)}let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new dn(this.value,t)),this._events.next(new st(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(ue(y({},n),{sourceControl:t}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Et:Ct}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,t){if(this.asyncValidator){this.status=rt,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=Io(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:t,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(n){let t=n;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,o)=>i&&i._find(o),this)}getError(n,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,t,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new st(this.status,t)),this._parent&&this._parent._updateControlsErrors(n,t,i)}_initObservables(){this.valueChanges=new K,this.statusChanges=new K}_calculateStatus(){return this._allControlsDisabled()?Et:this.errors?ln:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(rt)?rt:this._anyControlsHaveStatus(ln)?ln:Ct}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,t){let i=!this._anyControlsDirty(),o=this.pristine!==i;this.pristine=i,this._parent&&!n.onlySelf&&this._parent._updatePristine(n,t),o&&this._events.next(new St(this.pristine,t))}_updateTouched(n={},t){this.touched=this._anyControlsTouched(),this._events.next(new wt(this.touched,t)),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,t)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){pn(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){let t=this._parent&&this._parent.dirty;return!n&&!!t&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=ea(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=na(this._rawAsyncValidators)}};var Po=new U("",{providedIn:"root",factory:()=>Gn}),Gn="always";function ia(e,n){return[...n.path,e]}function oa(e,n,t=Gn){sa(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&n.valueAccessor.setDisabledState?.(e.disabled),aa(e,n),ca(e,n),la(e,n),ra(e,n)}function Co(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function ra(e,n){if(n.valueAccessor.setDisabledState){let t=i=>{n.valueAccessor.setDisabledState(i)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function sa(e,n){let t=Xs(e);n.validator!==null?e.setValidators(yo(t,n.validator)):typeof t=="function"&&e.setValidators([t]);let i=Qs(e);n.asyncValidator!==null?e.setAsyncValidators(yo(i,n.asyncValidator)):typeof i=="function"&&e.setAsyncValidators([i]);let o=()=>e.updateValueAndValidity();Co(n._rawValidators,o),Co(n._rawAsyncValidators,o)}function aa(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&Lo(e,n)})}function la(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&Lo(e,n),e.updateOn!=="submit"&&e.markAsTouched()})}function Lo(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function ca(e,n){let t=(i,o)=>{n.valueAccessor.writeValue(i),o&&n.viewToModelUpdate(i)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function ua(e,n){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(n,t.currentValue)}function da(e){return Object.getPrototypeOf(e.constructor)===$s}function pa(e,n){if(!n)return null;Array.isArray(n);let t,i,o;return n.forEach(r=>{r.constructor===Ao?t=r:da(r)?i=r:o=r}),o||i||t||null}function Eo(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function So(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var ha=class extends Hn{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,t,i){super(Zs(t),ta(i,t)),this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),pn(t)&&(t.nonNullable||t.initialValueIsDefault)&&(So(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Eo(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Eo(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){So(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var fa={provide:Tt,useExisting:Ce(()=>zn)},wo=Promise.resolve(),zn=(()=>{class e extends Tt{_changeDetectorRef;callSetDisabledState;control=new ha;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new K;constructor(t,i,o,r,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=t,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=pa(this,r)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),ua(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){oa(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){wo.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,o=i!==0&&v(i);wo.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?ia(t,this._parent):[t]}static \u0275fac=function(i){return new(i||e)(H(jn,9),H(Do,10),H(Gs,10),H(lt,10),H(zt,8),H(Po,8))};static \u0275dir=M({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[N([fa]),A,me]})}return e})();var ga=(()=>{class e{_validator=bo;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let i=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):bo,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static \u0275fac=function(i){return new(i||e)};static \u0275dir=M({type:e,features:[me]})}return e})();var ma={provide:Do,useExisting:Ce(()=>ba),multi:!0};var ba=(()=>{class e extends ga{required;inputName="required";normalizeInput=v;createValidator=t=>zs;enabled(t){return t}static \u0275fac=(()=>{let t;return function(o){return(t||(t=E(e)))(o||e)}})();static \u0275dir=M({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,o){i&2&&V("required",o._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[N([ma]),A]})}return e})();var ya=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=L({type:e});static \u0275inj=P({})}return e})();var Vo=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:Po,useValue:t.callSetDisabledState??Gn}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=L({type:e});static \u0275inj=P({imports:[ya]})}return e})();var _a=["icon"],Ca=["content"],Bo=e=>({$implicit:e}),Ea=(e,n)=>({"p-togglebutton-icon":!0,"p-togglebutton-icon-left":e,"p-togglebutton-icon-right":n});function Sa(e,n){e&1&&$e(0)}function wa(e,n){if(e&1&&he(0,"span",1),e&2){let t=R(3);pe(t.checked?t.onIcon:t.offIcon),S("ngClass",Gt(4,Ea,t.iconPos==="left",t.iconPos==="right")),V("data-pc-section","icon")}}function Ta(e,n){if(e&1&&j(0,wa,1,7,"span",3),e&2){let t=R(2);Ge(t.onIcon||t.offIcon?0:-1)}}function Aa(e,n){e&1&&$e(0)}function Da(e,n){if(e&1&&j(0,Aa,1,0,"ng-container",2),e&2){let t=R(2);S("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",Ke(2,Bo,t.checked))}}function xa(e,n){if(e&1&&(j(0,Ta,1,1)(1,Da,1,4,"ng-container"),ee(2,"span",1),ze(3),re()),e&2){let t=R();Ge(t.iconTemplate?1:0),x(2),S("ngClass",t.cx("label")),V("data-pc-section","label"),x(),qe(t.checked?t.hasOnLabel?t.onLabel:"\xA0":t.hasOffLabel?t.offLabel:"\xA0")}}var Ia=({dt:e})=>`
p-togglebutton {
    display: inline-flex;
}

.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("togglebutton.color")};
    background: ${e("togglebutton.background")};
    border: 1px solid ${e("togglebutton.border.color")};
    padding: ${e("togglebutton.padding")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
        outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
    border-radius: ${e("togglebutton.border.radius")};
    outline-color: transparent;
    font-weight: ${e("togglebutton.font.weight")};
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${e("togglebutton.gap")};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
            outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
    position: absolute;
    inset-inline-start: ${e("togglebutton.content.left")};
    top: ${e("togglebutton.content.top")};
    width: calc(100% - calc(2 *  ${e("togglebutton.content.left")}));
    height: calc(100% - calc(2 *  ${e("togglebutton.content.top")}));
    border-radius: ${e("togglebutton.border.radius")};
}

.p-togglebutton.p-togglebutton-checked::before {
    background: ${e("togglebutton.content.checked.background")};
    box-shadow: ${e("togglebutton.content.checked.shadow")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${e("togglebutton.hover.background")};
    color: ${e("togglebutton.hover.color")};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${e("togglebutton.checked.background")};
    border-color: ${e("togglebutton.checked.border.color")};
    color: ${e("togglebutton.checked.color")};
}

.p-togglebutton:focus-visible {
    box-shadow: ${e("togglebutton.focus.ring.shadow")};
    outline: ${e("togglebutton.focus.ring.width")} ${e("togglebutton.focus.ring.style")} ${e("togglebutton.focus.ring.color")};
    outline-offset: ${e("togglebutton.focus.ring.offset")};
}

.p-togglebutton.p-invalid {
    border-color: ${e("togglebutton.invalid.border.color")};
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: ${e("togglebutton.disabled.background")};
    border-color: ${e("togglebutton.disabled.border.color")};
    color: ${e("togglebutton.disabled.color")};
}

.p-togglebutton-icon {
    color: ${e("togglebutton.icon.color")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${e("togglebutton.icon.hover.color")};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${e("togglebutton.icon.checked.color")};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${e("togglebutton.icon.disabled.color")};
}

.p-togglebutton-sm {
    padding: ${e("togglebutton.sm.padding")};
    font-size: ${e("togglebutton.sm.font.size")};
}

.p-togglebutton-lg {
    padding: ${e("togglebutton.lg.padding")};
    font-size: ${e("togglebutton.lg.font.size")};
}

/* For PrimeNG (iconPos) */

.p-togglebutton-icon-right {
    order: 1;
}

p-togglebutton.ng-invalid.ng-dirty > .p-togglebutton {
    border-color: ${e("togglebutton.invalid.border.color")};
}
`,Oa={root:({instance:e})=>({"p-togglebutton p-component":!0,"p-togglebutton-checked":e.checked,"p-disabled":e.disabled,"p-togglebutton-sm p-inputfield-sm":e.size==="small","p-togglebutton-lg p-inputfield-lg":e.size==="large"}),content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},$o=(()=>{class e extends F{name="togglebutton";theme=Ia;classes=Oa;static \u0275fac=(()=>{let t;return function(o){return(t||(t=E(e)))(o||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var Ma={provide:lt,useExisting:Ce(()=>hn),multi:!0},hn=(()=>{class e extends B{onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;get hostClass(){return this.styleClass||""}inputId;tabindex=0;size;iconPos="left";autofocus;allowEmpty;onChange=new K;iconTemplate;contentTemplate;templates;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=g($o);toggle(t){!this.disabled&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:t,checked:this.checked}),this.cd.markForCheck())}onKeyDown(t){switch(t.code){case"Enter":this.toggle(t),t.preventDefault();break;case"Space":this.toggle(t),t.preventDefault();break}}onBlur(){this.onModelTouched()}writeValue(t){this.checked=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=E(e)))(o||e)}})();static \u0275cmp=G({type:e,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(i,o,r){if(i&1&&(te(r,_a,4),te(r,Ca,4),te(r,et,4)),i&2){let s;ne(s=ie())&&(o.iconTemplate=s.first),ne(s=ie())&&(o.contentTemplate=s.first),ne(s=ie())&&(o.templates=s)}},hostVars:2,hostBindings:function(i,o){i&2&&pe(o.hostClass)},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:[2,"disabled","disabled",v],style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",Ye],size:"size",iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",v],allowEmpty:"allowEmpty"},outputs:{onChange:"onChange"},features:[N([Ma,$o]),A],decls:4,vars:15,consts:[["pRipple","","type","button",3,"click","ngClass","tabindex","disabled"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass"]],template:function(i,o){i&1&&(ee(0,"button",0),Ae("click",function(s){return o.toggle(s)}),ee(1,"span",1),j(2,Sa,1,0,"ng-container",2)(3,xa,4,4),re()()),i&2&&(pe(o.styleClass),S("ngClass",o.cx("root"))("tabindex",o.tabindex)("disabled",o.disabled),V("aria-labelledby",o.ariaLabelledBy)("aria-pressed",o.checked)("data-p-checked",o.active)("data-p-disabled",o.disabled),x(),S("ngClass",o.cx("content")),x(),S("ngTemplateOutlet",o.contentTemplate||o._contentTemplate)("ngTemplateOutletContext",Ke(13,Bo,o.checked)),x(),Ge(o.contentTemplate?-1:3))},dependencies:[an,se,qt,Xe,W],encapsulation:2,changeDetection:0})}return e})(),np=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=L({type:e});static \u0275inj=P({imports:[hn,W,W]})}return e})();var Ra=["item"],Na=(e,n)=>({$implicit:e,index:n});function Fa(e,n){e&1&&$e(0)}function ka(e,n){if(e&1&&j(0,Fa,1,0,"ng-container",3),e&2){let t=R(2),i=t.$implicit,o=t.$index,r=R();S("ngTemplateOutlet",r.itemTemplate||r._itemTemplate)("ngTemplateOutletContext",Gt(2,Na,i,o))}}function Pa(e,n){e&1&&j(0,ka,1,5,"ng-template",null,0,bi)}function La(e,n){if(e&1){let t=gi();ee(0,"p-toggleButton",2),Ae("onChange",function(o){let r=oi(t),s=r.$implicit,a=r.$index,l=R();return ri(l.onOptionSelect(o,s,a))}),j(1,Pa,2,0),re()}if(e&2){let t=n.$implicit,i=R();S("autofocus",i.autofocus)("styleClass",i.styleClass)("ngModel",i.isSelected(t))("onLabel",i.getOptionLabel(t))("offLabel",i.getOptionLabel(t))("disabled",i.disabled||i.isOptionDisabled(t))("allowEmpty",i.allowEmpty)("size",i.size),x(),Ge(i.itemTemplate||i._itemTemplate?1:-1)}}var Va=({dt:e})=>`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton p-togglebutton:first-child .p-togglebutton {
    border-left-width: 1px;
    border-start-start-radius: ${e("selectbutton.border.radius")};
    border-end-start-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton p-togglebutton:last-child .p-togglebutton{
    border-start-end-radius: ${e("selectbutton.border.radius")};
    border-end-end-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton.ng-invalid.ng-dirty {
    outline: 1px solid ${e("selectbutton.invalid.border.color")};
    outline-offset: 0;
}
`,$a={root:({props:e})=>["p-selectbutton p-component",{"p-invalid":e.invalid}]},Uo=(()=>{class e extends F{name="selectbutton";theme=Va;classes=$a;static \u0275fac=(()=>{let t;return function(o){return(t||(t=E(e)))(o||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var Ba={provide:lt,useExisting:Ce(()=>jo),multi:!0},jo=(()=>{class e extends B{options;optionLabel;optionValue;optionDisabled;unselectable=!1;tabindex=0;multiple;allowEmpty=!0;style;styleClass;ariaLabelledBy;size;disabled;dataKey;autofocus;onOptionClick=new K;onChange=new K;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;onModelChange=()=>{};onModelTouched=()=>{};focusedIndex=0;_componentStyle=g(Uo);getOptionLabel(t){return this.optionLabel?Me(t,this.optionLabel):t.label!=null?t.label:t}getOptionValue(t){return this.optionValue?Me(t,this.optionValue):this.optionLabel||t.value===void 0?t:t.value}isOptionDisabled(t){return this.optionDisabled?Me(t,this.optionDisabled):t.disabled!==void 0?t.disabled:!1}writeValue(t){this.value=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}onOptionSelect(t,i,o){if(this.disabled||this.isOptionDisabled(i))return;let r=this.isSelected(i);if(r&&this.unselectable)return;let s=this.getOptionValue(i),a;if(this.multiple)r?a=this.value.filter(l=>!Re(l,s,this.equalityKey)):a=this.value?[...this.value,s]:[s];else{if(r&&!this.allowEmpty)return;a=r?null:s}this.focusedIndex=o,this.value=a,this.onModelChange(this.value),this.onChange.emit({originalEvent:t,value:this.value}),this.onOptionClick.emit({originalEvent:t,option:i,index:o})}changeTabIndexes(t,i){let o,r;for(let s=0;s<=this.el.nativeElement.children.length-1;s++)this.el.nativeElement.children[s].getAttribute("tabindex")==="0"&&(o={elem:this.el.nativeElement.children[s],index:s});i==="prev"?o.index===0?r=this.el.nativeElement.children.length-1:r=o.index-1:o.index===this.el.nativeElement.children.length-1?r=0:r=o.index+1,this.focusedIndex=r,this.el.nativeElement.children[r].focus()}onFocus(t,i){this.focusedIndex=i}onBlur(){this.onModelTouched()}removeOption(t){this.value=this.value.filter(i=>!Re(i,this.getOptionValue(t),this.dataKey))}isSelected(t){let i=!1,o=this.getOptionValue(t);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let r of this.value)if(Re(r,o,this.dataKey)){i=!0;break}}}else i=Re(this.getOptionValue(t),this.value,this.equalityKey);return i}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"item":this._itemTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=E(e)))(o||e)}})();static \u0275cmp=G({type:e,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(i,o,r){if(i&1&&(te(r,Ra,4),te(r,et,4)),i&2){let s;ne(s=ie())&&(o.itemTemplate=s.first),ne(s=ie())&&(o.templates=s)}},hostVars:10,hostBindings:function(i,o){i&2&&(V("role","group")("aria-labelledby",o.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),jt(o.style),Te("p-selectbutton",!0)("p-component",!0))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",v],tabindex:[2,"tabindex","tabindex",Ye],multiple:[2,"multiple","multiple",v],allowEmpty:[2,"allowEmpty","allowEmpty",v],style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",size:"size",disabled:[2,"disabled","disabled",v],dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",v]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[N([Ba,Uo]),A],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,o){i&1&&hi(0,La,2,9,"p-toggleButton",1,pi),i&2&&fi(o.options)},dependencies:[hn,Vo,ko,zn,se,Xe,W],encapsulation:2,changeDetection:0})}return e})(),Cp=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=L({type:e});static \u0275inj=P({imports:[jo,W,W]})}return e})();var Wo=class e{static isArray(n,t=!0){return Array.isArray(n)&&(t||n.length!==0)}static isObject(n,t=!0){return typeof n=="object"&&!Array.isArray(n)&&n!=null&&(t||Object.keys(n).length!==0)}static equals(n,t,i){return i?this.resolveFieldData(n,i)===this.resolveFieldData(t,i):this.equalsByValue(n,t)}static equalsByValue(n,t){if(n===t)return!0;if(n&&t&&typeof n=="object"&&typeof t=="object"){var i=Array.isArray(n),o=Array.isArray(t),r,s,a;if(i&&o){if(s=n.length,s!=t.length)return!1;for(r=s;r--!==0;)if(!this.equalsByValue(n[r],t[r]))return!1;return!0}if(i!=o)return!1;var l=this.isDate(n),c=this.isDate(t);if(l!=c)return!1;if(l&&c)return n.getTime()==t.getTime();var u=n instanceof RegExp,d=t instanceof RegExp;if(u!=d)return!1;if(u&&d)return n.toString()==t.toString();var p=Object.keys(n);if(s=p.length,s!==Object.keys(t).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!this.equalsByValue(n[a],t[a]))return!1;return!0}return n!==n&&t!==t}static resolveFieldData(n,t){if(n&&t){if(this.isFunction(t))return t(n);if(t.indexOf(".")==-1)return n[t];{let i=t.split("."),o=n;for(let r=0,s=i.length;r<s;++r){if(o==null)return null;o=o[i[r]]}return o}}else return null}static isFunction(n){return!!(n&&n.constructor&&n.call&&n.apply)}static reorderArray(n,t,i){let o;n&&t!==i&&(i>=n.length&&(i%=n.length,t%=n.length),n.splice(i,0,n.splice(t,1)[0]))}static insertIntoOrderedArray(n,t,i,o){if(i.length>0){let r=!1;for(let s=0;s<i.length;s++)if(this.findIndexInList(i[s],o)>t){i.splice(s,0,n),r=!0;break}r||i.push(n)}else i.push(n)}static findIndexInList(n,t){let i=-1;if(t){for(let o=0;o<t.length;o++)if(t[o]==n){i=o;break}}return i}static contains(n,t){if(n!=null&&t&&t.length){for(let i of t)if(this.equals(n,i))return!0}return!1}static removeAccents(n){return n&&(n=n.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),n}static isDate(n){return Object.prototype.toString.call(n)==="[object Date]"}static isEmpty(n){return n==null||n===""||Array.isArray(n)&&n.length===0||!this.isDate(n)&&typeof n=="object"&&Object.keys(n).length===0}static isNotEmpty(n){return!this.isEmpty(n)}static compare(n,t,i,o=1){let r=-1,s=this.isEmpty(n),a=this.isEmpty(t);return s&&a?r=0:s?r=o:a?r=-o:typeof n=="string"&&typeof t=="string"?r=n.localeCompare(t,i,{numeric:!0}):r=n<t?-1:n>t?1:0,r}static sort(n,t,i=1,o,r=1){let s=e.compare(n,t,o,i),a=i;return(e.isEmpty(n)||e.isEmpty(t))&&(a=r===1?i:r),a*s}static merge(n,t){if(!(n==null&&t==null)){{if((n==null||typeof n=="object")&&(t==null||typeof t=="object"))return y(y({},n||{}),t||{});if((n==null||typeof n=="string")&&(t==null||typeof t=="string"))return[n||"",t||""].join(" ")}return t||n}}static isPrintableCharacter(n=""){return this.isNotEmpty(n)&&n.length===1&&n.match(/\S| /)}static getItemValue(n,...t){return this.isFunction(n)?n(...t):n}static findLastIndex(n,t){let i=-1;if(this.isNotEmpty(n))try{i=n.findLastIndex(t)}catch{i=n.lastIndexOf([...n].reverse().find(t))}return i}static findLast(n,t){let i;if(this.isNotEmpty(n))try{i=n.findLast(t)}catch{i=[...n].reverse().find(t)}return i}static deepEquals(n,t){if(n===t)return!0;if(n&&t&&typeof n=="object"&&typeof t=="object"){var i=Array.isArray(n),o=Array.isArray(t),r,s,a;if(i&&o){if(s=n.length,s!=t.length)return!1;for(r=s;r--!==0;)if(!this.deepEquals(n[r],t[r]))return!1;return!0}if(i!=o)return!1;var l=n instanceof Date,c=t instanceof Date;if(l!=c)return!1;if(l&&c)return n.getTime()==t.getTime();var u=n instanceof RegExp,d=t instanceof RegExp;if(u!=d)return!1;if(u&&d)return n.toString()==t.toString();var p=Object.keys(n);if(s=p.length,s!==Object.keys(t).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!this.deepEquals(n[a],t[a]))return!1;return!0}return n!==n&&t!==t}static minifyCSS(n){return n&&n.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(n){return this.isString(n)?n.replace(/(-|_)/g,"").toLowerCase():n}static isString(n,t=!0){return typeof n=="string"&&(t||n!=="")}},Ho=0;function Sp(e="pn_id_"){return Ho++,`${e}${Ho}`}function Ua(){let e=[],n=(r,s)=>{let a=e.length>0?e[e.length-1]:{key:r,value:s},l=a.value+(a.key===r?0:s)+2;return e.push({key:r,value:l}),l},t=r=>{e=e.filter(s=>s.value!==r)},i=()=>e.length>0?e[e.length-1].value:0,o=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:o,set:(r,s,a)=>{s&&(s.style.zIndex=String(n(r,a)))},clear:r=>{r&&(t(o(r)),r.style.zIndex="")},getCurrent:()=>i(),generateZIndex:n,revertZIndex:t}}var wp=Ua();export{gr as a,ul as b,dl as c,$i as d,Oe as e,gl as f,je as g,ml as h,In as i,Nr as j,Fr as k,bl as l,kr as m,On as n,yl as o,vl as p,_l as q,Cl as r,Pr as s,Ze as t,El as u,Sl as v,Ui as w,wl as x,Rn as y,Tl as z,Al as A,Nn as B,en as C,Dl as D,xl as E,Il as F,Fn as G,Ol as H,Br as I,Ml as J,Rl as K,Nl as L,Fl as M,kl as N,Pl as O,Hi as P,z as Q,Gr as R,Yi as S,w as T,Me as U,Re as V,Bl as W,zr as X,Ul as Y,oe as Z,jl as _,nn as $,Wl as aa,Hl as ba,_t as ca,Kr as da,sc as ea,$ as fa,ac as ga,lc as ha,cc as ia,uc as ja,dc as ka,pc as la,et as ma,W as na,hc as oa,os as pa,wc as qa,Tc as ra,F as sa,Vn as ta,qc as ua,B as va,Bn as wa,uo as xa,$n as ya,ao as za,an as Aa,gu as Ba,Wo as Ca,Sp as Da,wp as Ea,lo as Fa,po as Ga,ho as Ha,yd as Ia,Vs as Ja,vd as Ka,lt as La,Ao as Ma,Tt as Na,ko as Oa,zn as Pa,ba as Qa,Vo as Ra,hn as Sa,np as Ta,jo as Ua,Cp as Va};
