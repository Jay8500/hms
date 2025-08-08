import{$ as _t,B as Z,D as vt,Da as M,F as W,Ga as P,Ka as wt,P as u,Pa as H,Ta as xt,p as E,pa as bt,u as ft,v as mt,w as gt,xa as yt,ya as V,z as d,za as Tt}from"./chunk-KEHSSR2L.js";import{$ as h,$a as D,Ab as s,Ac as ct,Bb as ot,Cb as nt,Cc as pt,Db as F,Fb as N,Gb as j,Gc as ht,Ja as q,Jb as st,Jc as dt,Kb as rt,La as a,Lb as lt,Lc as ut,Na as U,O,P as I,Qa as z,Rb as S,Sa as G,U as C,Xa as J,Ya as k,Z as $,Za as X,_ as p,_a as Y,bb as f,ca as T,dc as at,ia as A,ib as m,ja as K,jb as l,jc as g,kb as tt,kc as b,mb as et,nb as w,sb as v,tb as _,ub as it,vb as R,wb as B,yb as x,zb as L}from"./chunk-4CG5DRCH.js";import{a as y}from"./chunk-ODN5LVDJ.js";var Ct=["removeicon"],$t=["*"];function kt(e,r){if(e&1){let t=x();v(0,"img",4),L("error",function(o){p(t);let n=s();return h(n.imageError(o))}),_()}if(e&2){let t=s();l("src",t.image,q)("alt",t.alt)}}function Dt(e,r){if(e&1&&it(0,"span",6),e&2){let t=s(2);w(t.icon),l("ngClass","p-chip-icon"),m("data-pc-section","icon")}}function St(e,r){if(e&1&&f(0,Dt,1,4,"span",5),e&2){let t=s();l("ngIf",t.icon)}}function Vt(e,r){if(e&1&&(v(0,"div",7),rt(1),_()),e&2){let t=s();m("data-pc-section","label"),a(),lt(t.label)}}function Mt(e,r){if(e&1){let t=x();v(0,"span",11),L("click",function(o){p(t);let n=s(3);return h(n.close(o))})("keydown",function(o){p(t);let n=s(3);return h(n.onKeydown(o))}),_()}if(e&2){let t=s(3);w(t.removeIcon),l("ngClass","p-chip-remove-icon"),m("data-pc-section","removeicon")("aria-label",t.removeAriaLabel)}}function Pt(e,r){if(e&1){let t=x();v(0,"TimesCircleIcon",12),L("click",function(o){p(t);let n=s(3);return h(n.close(o))})("keydown",function(o){p(t);let n=s(3);return h(n.onKeydown(o))}),_()}if(e&2){let t=s(3);w("p-chip-remove-icon"),m("data-pc-section","removeicon")("aria-label",t.removeAriaLabel)}}function Ht(e,r){if(e&1&&(R(0),f(1,Mt,1,5,"span",9)(2,Pt,1,4,"TimesCircleIcon",10),B()),e&2){let t=s(2);a(),l("ngIf",t.removeIcon),a(),l("ngIf",!t.removeIcon)}}function At(e,r){}function zt(e,r){e&1&&f(0,At,0,0,"ng-template")}function Rt(e,r){if(e&1){let t=x();v(0,"span",13),L("click",function(o){p(t);let n=s(2);return h(n.close(o))})("keydown",function(o){p(t);let n=s(2);return h(n.onKeydown(o))}),f(1,zt,1,0,null,14),_()}if(e&2){let t=s(2);m("data-pc-section","removeicon")("aria-label",t.removeAriaLabel),a(),l("ngTemplateOutlet",t.removeIconTemplate||t._removeIconTemplate)}}function Bt(e,r){if(e&1&&(R(0),f(1,Ht,3,2,"ng-container",3)(2,Rt,2,3,"span",8),B()),e&2){let t=s();a(),l("ngIf",!t.removeIconTemplate&&!t._removeIconTemplate),a(),l("ngIf",t.removeIconTemplate||t._removeIconTemplate)}}var Ft=({dt:e})=>`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: ${e("chip.background")};
    color: ${e("chip.color")};
    border-radius: ${e("chip.border.radius")};
    padding: ${e("chip.padding.y")} ${e("chip.padding.x")};
    gap: ${e("chip.gap")};
}

.p-chip-icon {
    color: ${e("chip.icon.color")};
    font-size: ${e("chip.icon.font.size")};
    width: ${e("chip.icon.size")};
    height: ${e("chip.icon.size")};
}

.p-chip-image {
    border-radius: 50%;
    width: ${e("chip.image.width")};
    height: ${e("chip.image.height")};
    margin-left: calc(-1 * ${e("chip.padding.y")});
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: ${e("chip.padding.y")};
}

.p-chip:has(.p-chip-image) {
    padding-top: calc(${e("chip.padding.y")} / 2);
    padding-bottom: calc(${e("chip.padding.y")} / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: ${e("chip.remove.icon.font.size")};
    width: ${e("chip.remove.icon.size")};
    height: ${e("chip.remove.icon.size")};
    color: ${e("chip.remove.icon.color")};
    border-radius: 50%;
    transition: outline-color ${e("chip.transition.duration")}, box-shadow ${e("chip.transition.duration")};
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: ${e("chip.remove.icon.focus.ring.shadow")};
    outline: ${e("chip.remove.icon.focus.ring.width")} ${e("chip.remove.icon.focus.ring.style")} ${e("chip.remove.icon.focus.ring.color")};
    outline-offset: ${e("chip.remove.icon.focus.ring.offset")};
}
`,Nt={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},Lt=(()=>{class e extends M{name="chip";theme=Ft;classes=Nt;static \u0275fac=(()=>{let t;return function(o){return(t||(t=T(e)))(o||e)}})();static \u0275prov=O({token:e,factory:e.\u0275fac})}return e})();var jt=(()=>{class e extends P{label;icon;image;alt;style;styleClass;removable=!1;removeIcon;onRemove=new A;onImageError=new A;visible=!0;get removeAriaLabel(){return this.config.getTranslation(Tt.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(t){this._chipProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([i,o])=>this[`_${i}`]!==o&&(this[`_${i}`]=o))}_chipProps;_componentStyle=C(Lt);removeIconTemplate;templates;_removeIconTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"removeicon":this._removeIconTemplate=t.template;break;default:this._removeIconTemplate=t.template;break}})}ngOnChanges(t){if(super.ngOnChanges(t),t.chipProps&&t.chipProps.currentValue){let{currentValue:i}=t.chipProps;i.label!==void 0&&(this.label=i.label),i.icon!==void 0&&(this.icon=i.icon),i.image!==void 0&&(this.image=i.image),i.alt!==void 0&&(this.alt=i.alt),i.style!==void 0&&(this.style=i.style),i.styleClass!==void 0&&(this.styleClass=i.styleClass),i.removable!==void 0&&(this.removable=i.removable),i.removeIcon!==void 0&&(this.removeIcon=i.removeIcon)}}containerClass(){let t="p-chip p-component";return this.styleClass&&(t+=` ${this.styleClass}`),t}close(t){this.visible=!1,this.onRemove.emit(t)}onKeydown(t){(t.key==="Enter"||t.key==="Backspace")&&this.close(t)}imageError(t){this.onImageError.emit(t)}static \u0275fac=(()=>{let t;return function(o){return(t||(t=T(e)))(o||e)}})();static \u0275cmp=J({type:e,selectors:[["p-chip"]],contentQueries:function(i,o,n){if(i&1&&(F(n,Ct,4),F(n,yt,4)),i&2){let c;N(c=j())&&(o.removeIconTemplate=c.first),N(c=j())&&(o.templates=c)}},hostVars:9,hostBindings:function(i,o){i&2&&(m("data-pc-name","chip")("aria-label",o.label)("data-pc-section","root"),et(o.style),w(o.containerClass()),tt("display",!o.visible&&"none"))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",style:"style",styleClass:"styleClass",removable:[2,"removable","removable",g],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[S([Lt]),D,$],ngContentSelectors:$t,decls:6,vars:4,consts:[["iconTemplate",""],["class","p-chip-image",3,"src","alt","error",4,"ngIf","ngIfElse"],["class","p-chip-label",4,"ngIf"],[4,"ngIf"],[1,"p-chip-image",3,"error","src","alt"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-chip-label"],["tabindex","0","class","p-chip-remove-icon","role","button",3,"click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","ngClass","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"click","keydown","ngClass"],["tabindex","0","role","button",3,"click","keydown"],["tabindex","0","role","button",1,"p-chip-remove-icon",3,"click","keydown"],[4,"ngTemplateOutlet"]],template:function(i,o){if(i&1&&(ot(),nt(0),f(1,kt,1,2,"img",1)(2,St,1,1,"ng-template",null,0,at)(4,Vt,2,2,"div",2)(5,Bt,3,2,"ng-container",3)),i&2){let n=st(3);a(),l("ngIf",o.image)("ngIfElse",n),a(3),l("ngIf",o.label),a(),l("ngIf",o.removable)}},dependencies:[dt,ct,pt,ht,xt,V],encapsulation:2,changeDetection:0})}return e})(),ae=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=k({type:e});static \u0275inj=I({imports:[jt,V,V]})}return e})();var Ot=class e{transform(r){if(!r)return"";let t=r.trim().split(/\s+/),i="";return t.length===1?i=t[0].charAt(0):t.length===2?i=t[0].charAt(0)+t[1].charAt(0):t.length===3||t.length===4?i=t[0].charAt(0)+t[1].charAt(0)+t[2].charAt(0):i=t[0].charAt(0)+t[1].charAt(0),i.toUpperCase()}static \u0275fac=function(t){return new(t||e)};static \u0275pipe=Y({name:"nameInitials",type:e,pure:!0})};var Zt=({dt:e})=>`
.p-tooltip {
    position: absolute;
    display: none;
    max-width: ${e("tooltip.max.width")};
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 ${e("tooltip.gutter")};
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: ${e("tooltip.gutter")} 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: ${e("tooltip.background")};
    color: ${e("tooltip.color")};
    padding: ${e("tooltip.padding")};
    box-shadow: ${e("tooltip.shadow")};
    border-radius: ${e("tooltip.border.radius")};
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: calc(-1 * ${e("tooltip.gutter")});
    border-width: ${e("tooltip.gutter")} ${e("tooltip.gutter")} ${e("tooltip.gutter")} 0;
    border-right-color: ${e("tooltip.background")};
}

.p-tooltip-left .p-tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: calc(-1 * ${e("tooltip.gutter")});
    border-width: ${e("tooltip.gutter")} 0 ${e("tooltip.gutter")} ${e("tooltip.gutter")};
    border-left-color: ${e("tooltip.background")};
}

.p-tooltip-top .p-tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: calc(-1 * ${e("tooltip.gutter")});
    border-width: ${e("tooltip.gutter")} ${e("tooltip.gutter")} 0 ${e("tooltip.gutter")};
    border-top-color: ${e("tooltip.background")};
    border-bottom-color: ${e("tooltip.background")};
}

.p-tooltip-bottom .p-tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: calc(-1 * ${e("tooltip.gutter")});
    border-width: 0 ${e("tooltip.gutter")} ${e("tooltip.gutter")} ${e("tooltip.gutter")};
    border-top-color: ${e("tooltip.background")};
    border-bottom-color: ${e("tooltip.background")};
}
`,Wt={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},It=(()=>{class e extends M{name="tooltip";theme=Zt;classes=Wt;static \u0275fac=(()=>{let t;return function(o){return(t||(t=T(e)))(o||e)}})();static \u0275prov=O({token:e,factory:e.\u0275fac})}return e})();var we=(()=>{class e extends P{zone;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:bt("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=C(It);interactionInProgress=!1;constructor(t,i){super(),this.zone=t,this.viewContainer=i}ngAfterViewInit(){super.ngAfterViewInit(),ut(this.platformId)&&this.zone.runOutsideAngular(()=>{let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),t==="focus"||t==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.addEventListener("focus",this.focusListener),i.addEventListener("blur",this.blurListener)}})}ngOnChanges(t){super.ngOnChanges(t),t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.content&&(this.setOption({tooltipLabel:t.content.currentValue}),this.active&&(t.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.autoHide&&this.setOption({autoHide:t.autoHide.currentValue}),t.id&&this.setOption({id:t.id.currentValue}),t.tooltipOptions&&(this._tooltipOptions=y(y({},this._tooltipOptions),t.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(t){this.isAutoHide()?this.deactivate():!(E(t.relatedTarget,"p-tooltip")||E(t.relatedTarget,"p-tooltip-text")||E(t.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(t){this.activate()}onBlur(t){this.deactivate()}onInputClick(t){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},t)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let t=document.createElement("div");t.className="p-tooltip-arrow",this.container.appendChild(t),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?Z(this.container,this.el.nativeElement):Z(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let t=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(t,"mouseleave",i=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),vt(this.container,250),this.getOption("tooltipZIndex")==="auto"?H.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&H.clear(this.container),this.remove()}updateText(){let t=this.getOption("tooltipLabel");if(t instanceof U){let i=this.viewContainer.createEmbeddedView(t);i.detectChanges(),i.rootNodes.forEach(o=>this.tooltipText.appendChild(o))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(t))):this.tooltipText.innerHTML=t}align(){let t=this.getOption("tooltipPosition"),i={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]};for(let[o,n]of i[t].entries())if(o===0)n.call(this);else if(this.isOutOfBounds())n.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let t=this.el.nativeElement.getBoundingClientRect(),i=t.left+mt(),o=t.top+gt();return{left:i,top:o}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.includes("P-")?W(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let t=this.activeElement,i=d(t),o=(u(t)-u(this.container))/2;this.alignTooltip(i,o)}alignLeft(){this.preAlign("left");let t=d(this.container),i=(u(this.el.nativeElement)-u(this.container))/2;this.alignTooltip(-t,i)}alignTop(){this.preAlign("top");let t=(d(this.el.nativeElement)-d(this.container))/2,i=u(this.container);this.alignTooltip(t,-i)}alignBottom(){this.preAlign("bottom");let t=(d(this.el.nativeElement)-d(this.container))/2,i=u(this.el.nativeElement);this.alignTooltip(t,i)}alignTooltip(t,i){let o=this.getHostOffset(),n=o.left+t,c=o.top+i;this.container.style.left=n+this.getOption("positionLeft")+"px",this.container.style.top=c+this.getOption("positionTop")+"px"}setOption(t){this._tooltipOptions=y(y({},this._tooltipOptions),t)}getOption(t){return this._tooltipOptions[t]}getTarget(t){return E(t,"p-inputwrapper")?W(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px";let i="p-tooltip p-component p-tooltip-"+t;this.container.className=this.getOption("tooltipStyleClass")?i+" "+this.getOption("tooltipStyleClass"):i}isOutOfBounds(){let t=this.container.getBoundingClientRect(),i=t.top,o=t.left,n=d(this.container),c=u(this.container),Q=ft();return o+n>Q.width||o<0||i<0||i+c>Q.height}onWindowResize(t){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new wt(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),t==="focus"||t==="both"){let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.removeEventListener("focus",this.focusListener),i.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):_t(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&H.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(i){return new(i||e)(z(K),z(G))};static \u0275dir=X({type:e,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",g],showDelay:[2,"showDelay","showDelay",b],hideDelay:[2,"hideDelay","hideDelay",b],life:[2,"life","life",b],positionTop:[2,"positionTop","positionTop",b],positionLeft:[2,"positionLeft","positionLeft",b],autoHide:[2,"autoHide","autoHide",g],fitContent:[2,"fitContent","fitContent",g],hideOnEscape:[2,"hideOnEscape","hideOnEscape",g],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},features:[S([It]),D,$]})}return e})(),xe=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=k({type:e});static \u0275inj=I({})}return e})();export{we as a,xe as b,jt as c,ae as d,Ot as e};
