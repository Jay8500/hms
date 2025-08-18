import{A as g,Aa as Le,C as U,E as be,Ea as $,G,Ha as k,La as Ee,Q as v,Qa as j,Va as xe,aa as _e,q as z,qa as Te,v as ge,w as ve,x as ye,ya as we,za as O}from"./chunk-6MAHG36O.js";import{$ as h,$a as x,Ab as r,Bb as A,Bc as he,Cb as F,Db as Q,Dc as ue,Fb as K,Gb as q,Hc as fe,Ja as ee,Jb as ae,Kb as ce,La as a,Lb as pe,Lc as B,Na as te,Nc as me,O as T,P as w,Qa as N,Sa as ie,Sb as I,U as L,Xa as P,Ya as E,Z as V,Za as oe,_ as d,_a as ne,bb as y,ca as u,ec as de,ia as R,ib as c,ja as Y,jb as l,kb as H,kc as _,lb as re,lc as C,mb as se,nb as b,sb as f,tb as m,ub as le,vb as Z,wb as W,yb as S,zb as M}from"./chunk-JSE7UAUZ.js";import{a as D}from"./chunk-ODN5LVDJ.js";var ke=["removeicon"],De=["*"];function Se(t,s){if(t&1){let e=S();f(0,"img",4),M("error",function(o){d(e);let n=r();return h(n.imageError(o))}),m()}if(t&2){let e=r();l("src",e.image,ee)("alt",e.alt)}}function Me(t,s){if(t&1&&le(0,"span",6),t&2){let e=r(2);b(e.icon),l("ngClass","p-chip-icon"),c("data-pc-section","icon")}}function ze(t,s){if(t&1&&y(0,Me,1,4,"span",5),t&2){let e=r();l("ngIf",e.icon)}}function Ve(t,s){if(t&1&&(f(0,"div",7),ce(1),m()),t&2){let e=r();c("data-pc-section","label"),a(),pe(e.label)}}function Pe(t,s){if(t&1){let e=S();f(0,"span",11),M("click",function(o){d(e);let n=r(3);return h(n.close(o))})("keydown",function(o){d(e);let n=r(3);return h(n.onKeydown(o))}),m()}if(t&2){let e=r(3);b(e.removeIcon),l("ngClass","p-chip-remove-icon"),c("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function He(t,s){if(t&1){let e=S();f(0,"TimesCircleIcon",12),M("click",function(o){d(e);let n=r(3);return h(n.close(o))})("keydown",function(o){d(e);let n=r(3);return h(n.onKeydown(o))}),m()}if(t&2){let e=r(3);b("p-chip-remove-icon"),c("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function Ae(t,s){if(t&1&&(Z(0),y(1,Pe,1,5,"span",9)(2,He,1,4,"TimesCircleIcon",10),W()),t&2){let e=r(2);a(),l("ngIf",e.removeIcon),a(),l("ngIf",!e.removeIcon)}}function Fe(t,s){}function Be(t,s){t&1&&y(0,Fe,0,0,"ng-template")}function je(t,s){if(t&1){let e=S();f(0,"span",13),M("click",function(o){d(e);let n=r(2);return h(n.close(o))})("keydown",function(o){d(e);let n=r(2);return h(n.onKeydown(o))}),y(1,Be,1,0,null,14),m()}if(t&2){let e=r(2);c("data-pc-section","removeicon")("aria-label",e.removeAriaLabel),a(),l("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)}}function Re(t,s){if(t&1&&(Z(0),y(1,Ae,3,2,"ng-container",3)(2,je,2,3,"span",8),W()),t&2){let e=r();a(),l("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),a(),l("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}var Ne=({dt:t})=>`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: ${t("chip.background")};
    color: ${t("chip.color")};
    border-radius: ${t("chip.border.radius")};
    padding: ${t("chip.padding.y")} ${t("chip.padding.x")};
    gap: ${t("chip.gap")};
}

.p-chip-icon {
    color: ${t("chip.icon.color")};
    font-size: ${t("chip.icon.font.size")};
    width: ${t("chip.icon.size")};
    height: ${t("chip.icon.size")};
}

.p-chip-image {
    border-radius: 50%;
    width: ${t("chip.image.width")};
    height: ${t("chip.image.height")};
    margin-left: calc(-1 * ${t("chip.padding.y")});
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: ${t("chip.padding.y")};
}

.p-chip:has(.p-chip-image) {
    padding-top: calc(${t("chip.padding.y")} / 2);
    padding-bottom: calc(${t("chip.padding.y")} / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: ${t("chip.remove.icon.font.size")};
    width: ${t("chip.remove.icon.size")};
    height: ${t("chip.remove.icon.size")};
    color: ${t("chip.remove.icon.color")};
    border-radius: 50%;
    transition: outline-color ${t("chip.transition.duration")}, box-shadow ${t("chip.transition.duration")};
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: ${t("chip.remove.icon.focus.ring.shadow")};
    outline: ${t("chip.remove.icon.focus.ring.width")} ${t("chip.remove.icon.focus.ring.style")} ${t("chip.remove.icon.focus.ring.color")};
    outline-offset: ${t("chip.remove.icon.focus.ring.offset")};
}
`,Ze={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},Ie=(()=>{class t extends ${name="chip";theme=Ne;classes=Ze;static \u0275fac=(()=>{let e;return function(o){return(e||(e=u(t)))(o||t)}})();static \u0275prov=T({token:t,factory:t.\u0275fac})}return t})();var We=(()=>{class t extends k{label;icon;image;alt;style;styleClass;removable=!1;removeIcon;onRemove=new R;onImageError=new R;visible=!0;get removeAriaLabel(){return this.config.getTranslation(Le.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(e){this._chipProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([i,o])=>this[`_${i}`]!==o&&(this[`_${i}`]=o))}_chipProps;_componentStyle=L(Ie);removeIconTemplate;templates;_removeIconTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"removeicon":this._removeIconTemplate=e.template;break;default:this._removeIconTemplate=e.template;break}})}ngOnChanges(e){if(super.ngOnChanges(e),e.chipProps&&e.chipProps.currentValue){let{currentValue:i}=e.chipProps;i.label!==void 0&&(this.label=i.label),i.icon!==void 0&&(this.icon=i.icon),i.image!==void 0&&(this.image=i.image),i.alt!==void 0&&(this.alt=i.alt),i.style!==void 0&&(this.style=i.style),i.styleClass!==void 0&&(this.styleClass=i.styleClass),i.removable!==void 0&&(this.removable=i.removable),i.removeIcon!==void 0&&(this.removeIcon=i.removeIcon)}}containerClass(){let e="p-chip p-component";return this.styleClass&&(e+=` ${this.styleClass}`),e}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)}imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=u(t)))(o||t)}})();static \u0275cmp=P({type:t,selectors:[["p-chip"]],contentQueries:function(i,o,n){if(i&1&&(Q(n,ke,4),Q(n,we,4)),i&2){let p;K(p=q())&&(o.removeIconTemplate=p.first),K(p=q())&&(o.templates=p)}},hostVars:9,hostBindings:function(i,o){i&2&&(c("data-pc-name","chip")("aria-label",o.label)("data-pc-section","root"),se(o.style),b(o.containerClass()),H("display",!o.visible&&"none"))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",style:"style",styleClass:"styleClass",removable:[2,"removable","removable",_],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[I([Ie]),x,V],ngContentSelectors:De,decls:6,vars:4,consts:[["iconTemplate",""],["class","p-chip-image",3,"src","alt","error",4,"ngIf","ngIfElse"],["class","p-chip-label",4,"ngIf"],[4,"ngIf"],[1,"p-chip-image",3,"error","src","alt"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-chip-label"],["tabindex","0","class","p-chip-remove-icon","role","button",3,"click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","ngClass","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"click","keydown","ngClass"],["tabindex","0","role","button",3,"click","keydown"],["tabindex","0","role","button",1,"p-chip-remove-icon",3,"click","keydown"],[4,"ngTemplateOutlet"]],template:function(i,o){if(i&1&&(A(),F(0),y(1,Se,1,2,"img",1)(2,ze,1,1,"ng-template",null,0,de)(4,Ve,2,2,"div",2)(5,Re,3,2,"ng-container",3)),i&2){let n=ae(3);a(),l("ngIf",o.image)("ngIfElse",n),a(3),l("ngIf",o.label),a(),l("ngIf",o.removable)}},dependencies:[B,he,ue,fe,xe,O],encapsulation:2,changeDetection:0})}return t})(),mt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=E({type:t});static \u0275inj=w({imports:[We,O,O]})}return t})();var Ce=class t{transform(s){if(!s)return"";let e=s.trim().split(/\s+/),i="";return e.length===1?i=e[0].charAt(0):e.length===2?i=e[0].charAt(0)+e[1].charAt(0):e.length===3||e.length===4?i=e[0].charAt(0)+e[1].charAt(0)+e[2].charAt(0):i=e[0].charAt(0)+e[1].charAt(0),i.toUpperCase()}static \u0275fac=function(e){return new(e||t)};static \u0275pipe=ne({name:"nameInitials",type:t,pure:!0})};var Qe=["*"],Ke=({dt:t})=>`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: ${t("divider.horizontal.margin")};
    padding: ${t("divider.horizontal.padding")};
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    inset-block-start: 50%;
    inset-inline-start: 0;
    width: 100%;
    content: "";
    border-block-start: 1px solid ${t("divider.border.color")};
}

.p-divider-horizontal .p-divider-content {
    padding: ${t("divider.horizontal.content.padding")};
}

.p-divider-vertical {
    min-height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    margin: ${t("divider.vertical.margin")};
    padding: ${t("divider.vertical.padding")};
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    inset-block-start: 0;
    inset-inline-start: 50%;
    height: 100%;
    content: "";
    border-inline-start: 1px solid ${t("divider.border.color")};
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: ${t("divider.vertical.content.padding")};
}

.p-divider-content {
    z-index: 1;
    background: ${t("divider.content.background")};
    color: ${t("divider.content.color")};
}

.p-divider-solid.p-divider-horizontal:before {
    border-block-start-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-inline-start-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-block-start-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-inline-start-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-block-start-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-inline-start-style: dotted;
}

.p-divider-left:dir(rtl),
.p-divider-right:dir(rtl) {
    flex-direction: row-reverse;
}
`,qe={root:({props:t})=>({justifyContent:t.layout==="horizontal"?t.align==="center"||t.align===null?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null,alignItems:t.layout==="vertical"?t.align==="center"||t.align===null?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null})},Ue={root:({props:t})=>["p-divider p-component","p-divider-"+t.layout,"p-divider-"+t.type,{"p-divider-left":t.layout==="horizontal"&&(!t.align||t.align==="left")},{"p-divider-center":t.layout==="horizontal"&&t.align==="center"},{"p-divider-right":t.layout==="horizontal"&&t.align==="right"},{"p-divider-top":t.layout==="vertical"&&t.align==="top"},{"p-divider-center":t.layout==="vertical"&&(!t.align||t.align==="center")},{"p-divider-bottom":t.layout==="vertical"&&t.align==="bottom"}],content:"p-divider-content"},Oe=(()=>{class t extends ${name="divider";theme=Ke;classes=Ue;inlineStyles=qe;static \u0275fac=(()=>{let e;return function(o){return(e||(e=u(t)))(o||t)}})();static \u0275prov=T({token:t,factory:t.\u0275fac})}return t})();var Ge=(()=>{class t extends k{style;styleClass;layout="horizontal";type="solid";align;_componentStyle=L(Oe);get hostClass(){return this.styleClass}static \u0275fac=(()=>{let e;return function(o){return(e||(e=u(t)))(o||t)}})();static \u0275cmp=P({type:t,selectors:[["p-divider"]],hostVars:33,hostBindings:function(i,o){i&2&&(c("aria-orientation",o.layout)("data-pc-name","divider")("role","separator"),b(o.hostClass),H("justify-content",o.layout==="horizontal"?o.align==="center"||o.align===void 0?"center":o.align==="left"?"flex-start":o.align==="right"?"flex-end":null:null)("align-items",o.layout==="vertical"?o.align==="center"||o.align===void 0?"center":o.align==="top"?"flex-start":o.align==="bottom"?"flex-end":null:null),re("p-divider",!0)("p-component",!0)("p-divider-horizontal",o.layout==="horizontal")("p-divider-vertical",o.layout==="vertical")("p-divider-solid",o.type==="solid")("p-divider-dashed",o.type==="dashed")("p-divider-dotted",o.type==="dotted")("p-divider-left",o.layout==="horizontal"&&(!o.align||o.align==="left"))("p-divider-center",o.layout==="horizontal"&&o.align==="center"||o.layout==="vertical"&&(!o.align||o.align==="center"))("p-divider-right",o.layout==="horizontal"&&o.align==="right")("p-divider-top",o.layout==="vertical"&&o.align==="top")("p-divider-bottom",o.layout==="vertical"&&o.align==="bottom"))},inputs:{style:"style",styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[I([Oe]),x],ngContentSelectors:Qe,decls:2,vars:0,consts:[[1,"p-divider-content"]],template:function(i,o){i&1&&(A(),f(0,"div",0),F(1),m())},dependencies:[B,O],encapsulation:2,changeDetection:0})}return t})(),kt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=E({type:t});static \u0275inj=w({imports:[Ge]})}return t})();var Je=({dt:t})=>`
.p-tooltip {
    position: absolute;
    display: none;
    max-width: ${t("tooltip.max.width")};
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 ${t("tooltip.gutter")};
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: ${t("tooltip.gutter")} 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: ${t("tooltip.background")};
    color: ${t("tooltip.color")};
    padding: ${t("tooltip.padding")};
    box-shadow: ${t("tooltip.shadow")};
    border-radius: ${t("tooltip.border.radius")};
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
    margin-top: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} ${t("tooltip.gutter")} ${t("tooltip.gutter")} 0;
    border-right-color: ${t("tooltip.background")};
}

.p-tooltip-left .p-tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} 0 ${t("tooltip.gutter")} ${t("tooltip.gutter")};
    border-left-color: ${t("tooltip.background")};
}

.p-tooltip-top .p-tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} ${t("tooltip.gutter")} 0 ${t("tooltip.gutter")};
    border-top-color: ${t("tooltip.background")};
    border-bottom-color: ${t("tooltip.background")};
}

.p-tooltip-bottom .p-tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: calc(-1 * ${t("tooltip.gutter")});
    border-width: 0 ${t("tooltip.gutter")} ${t("tooltip.gutter")} ${t("tooltip.gutter")};
    border-top-color: ${t("tooltip.background")};
    border-bottom-color: ${t("tooltip.background")};
}
`,Xe={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},$e=(()=>{class t extends ${name="tooltip";theme=Je;classes=Xe;static \u0275fac=(()=>{let e;return function(o){return(e||(e=u(t)))(o||t)}})();static \u0275prov=T({token:t,factory:t.\u0275fac})}return t})();var Nt=(()=>{class t extends k{zone;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:Te("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=L($e);interactionInProgress=!1;constructor(e,i){super(),this.zone=e,this.viewContainer=i}ngAfterViewInit(){super.ngAfterViewInit(),me(this.platformId)&&this.zone.runOutsideAngular(()=>{let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),e==="focus"||e==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.addEventListener("focus",this.focusListener),i.addEventListener("blur",this.blurListener)}})}ngOnChanges(e){super.ngOnChanges(e),e.tooltipPosition&&this.setOption({tooltipPosition:e.tooltipPosition.currentValue}),e.tooltipEvent&&this.setOption({tooltipEvent:e.tooltipEvent.currentValue}),e.appendTo&&this.setOption({appendTo:e.appendTo.currentValue}),e.positionStyle&&this.setOption({positionStyle:e.positionStyle.currentValue}),e.tooltipStyleClass&&this.setOption({tooltipStyleClass:e.tooltipStyleClass.currentValue}),e.tooltipZIndex&&this.setOption({tooltipZIndex:e.tooltipZIndex.currentValue}),e.escape&&this.setOption({escape:e.escape.currentValue}),e.showDelay&&this.setOption({showDelay:e.showDelay.currentValue}),e.hideDelay&&this.setOption({hideDelay:e.hideDelay.currentValue}),e.life&&this.setOption({life:e.life.currentValue}),e.positionTop&&this.setOption({positionTop:e.positionTop.currentValue}),e.positionLeft&&this.setOption({positionLeft:e.positionLeft.currentValue}),e.disabled&&this.setOption({disabled:e.disabled.currentValue}),e.content&&(this.setOption({tooltipLabel:e.content.currentValue}),this.active&&(e.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),e.autoHide&&this.setOption({autoHide:e.autoHide.currentValue}),e.id&&this.setOption({id:e.id.currentValue}),e.tooltipOptions&&(this._tooltipOptions=D(D({},this._tooltipOptions),e.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(e){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(e){this.isAutoHide()?this.deactivate():!(z(e.relatedTarget,"p-tooltip")||z(e.relatedTarget,"p-tooltip-text")||z(e.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(e){this.activate()}onBlur(e){this.deactivate()}onInputClick(e){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let e=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},e)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let e=document.createElement("div");e.className="p-tooltip-arrow",this.container.appendChild(e),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?U(this.container,this.el.nativeElement):U(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let e=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(e,"mouseleave",i=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),be(this.container,250),this.getOption("tooltipZIndex")==="auto"?j.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&j.clear(this.container),this.remove()}updateText(){let e=this.getOption("tooltipLabel");if(e instanceof te){let i=this.viewContainer.createEmbeddedView(e);i.detectChanges(),i.rootNodes.forEach(o=>this.tooltipText.appendChild(o))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(e))):this.tooltipText.innerHTML=e}align(){let e=this.getOption("tooltipPosition"),i={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]};for(let[o,n]of i[e].entries())if(o===0)n.call(this);else if(this.isOutOfBounds())n.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let e=this.el.nativeElement.getBoundingClientRect(),i=e.left+ve(),o=e.top+ye();return{left:i,top:o}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.includes("P-")?G(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let e=this.activeElement,i=g(e),o=(v(e)-v(this.container))/2;this.alignTooltip(i,o)}alignLeft(){this.preAlign("left");let e=g(this.container),i=(v(this.el.nativeElement)-v(this.container))/2;this.alignTooltip(-e,i)}alignTop(){this.preAlign("top");let e=(g(this.el.nativeElement)-g(this.container))/2,i=v(this.container);this.alignTooltip(e,-i)}alignBottom(){this.preAlign("bottom");let e=(g(this.el.nativeElement)-g(this.container))/2,i=v(this.el.nativeElement);this.alignTooltip(e,i)}alignTooltip(e,i){let o=this.getHostOffset(),n=o.left+e,p=o.top+i;this.container.style.left=n+this.getOption("positionLeft")+"px",this.container.style.top=p+this.getOption("positionTop")+"px"}setOption(e){this._tooltipOptions=D(D({},this._tooltipOptions),e)}getOption(e){return this._tooltipOptions[e]}getTarget(e){return z(e,"p-inputwrapper")?G(e,"input"):e}preAlign(e){this.container.style.left="-999px",this.container.style.top="-999px";let i="p-tooltip p-component p-tooltip-"+e;this.container.className=this.getOption("tooltipStyleClass")?i+" "+this.getOption("tooltipStyleClass"):i}isOutOfBounds(){let e=this.container.getBoundingClientRect(),i=e.top,o=e.left,n=g(this.container),p=v(this.container),X=ge();return o+n>X.width||o<0||i<0||i+p>X.height}onWindowResize(e){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Ee(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),e==="focus"||e==="both"){let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.removeEventListener("focus",this.focusListener),i.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):_e(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&j.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(i){return new(i||t)(N(Y),N(ie))};static \u0275dir=oe({type:t,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",_],showDelay:[2,"showDelay","showDelay",C],hideDelay:[2,"hideDelay","hideDelay",C],life:[2,"life","life",C],positionTop:[2,"positionTop","positionTop",C],positionLeft:[2,"positionLeft","positionLeft",C],autoHide:[2,"autoHide","autoHide",_],fitContent:[2,"fitContent","fitContent",_],hideOnEscape:[2,"hideOnEscape","hideOnEscape",_],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},features:[I([$e]),x,V]})}return t})(),Zt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=E({type:t});static \u0275inj=w({})}return t})();export{Nt as a,Zt as b,We as c,mt as d,Ce as e,kt as f};
