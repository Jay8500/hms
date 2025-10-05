import{A as x,Aa as $e,C as ee,E as Le,Ea as O,G as te,Ha as D,La as Me,Q as L,Qa as S,Va as Se,aa as Oe,q as N,qa as De,s as ke,u as Ie,v as Ee,w as Ce,x as xe,ya as K,za as g}from"./chunk-UIXPNEEU.js";import{$ as w,$a as I,Ab as r,Bb as V,Bc as q,Cb as B,Db as F,Dc as Te,Eb as me,Fb as $,Gb as M,Gc as we,Hc as W,Ja as re,Jb as fe,Kb as ge,La as c,Lb as ve,Lc as P,Na as se,Nc as A,O as d,P as b,Qa as J,Sa as le,Sb as E,Tb as ye,U as _,Ub as be,Xa as z,Ya as k,Z as Q,Za as ae,_ as T,_a as ce,bb as v,ca as h,ec as _e,g as oe,ia as G,ib as p,ja as ne,jb as l,kb as U,kc as f,lb as pe,lc as C,mb as de,nb as y,sb as u,tb as m,ub as he,vb as X,wb as Y,xb as ue,yb as H,zb as R}from"./chunk-JSE7UAUZ.js";import{a as j}from"./chunk-ODN5LVDJ.js";var He=["removeicon"],Re=["*"];function Ne(t,s){if(t&1){let e=H();u(0,"img",4),R("error",function(o){T(e);let n=r();return w(n.imageError(o))}),m()}if(t&2){let e=r();l("src",e.image,re)("alt",e.alt)}}function Ze(t,s){if(t&1&&he(0,"span",6),t&2){let e=r(2);y(e.icon),l("ngClass","p-chip-icon"),p("data-pc-section","icon")}}function Qe(t,s){if(t&1&&v(0,Ze,1,4,"span",5),t&2){let e=r();l("ngIf",e.icon)}}function Ue(t,s){if(t&1&&(u(0,"div",7),ge(1),m()),t&2){let e=r();p("data-pc-section","label"),c(),ve(e.label)}}function qe(t,s){if(t&1){let e=H();u(0,"span",11),R("click",function(o){T(e);let n=r(3);return w(n.close(o))})("keydown",function(o){T(e);let n=r(3);return w(n.onKeydown(o))}),m()}if(t&2){let e=r(3);y(e.removeIcon),l("ngClass","p-chip-remove-icon"),p("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function We(t,s){if(t&1){let e=H();u(0,"TimesCircleIcon",12),R("click",function(o){T(e);let n=r(3);return w(n.close(o))})("keydown",function(o){T(e);let n=r(3);return w(n.onKeydown(o))}),m()}if(t&2){let e=r(3);y("p-chip-remove-icon"),p("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function Ke(t,s){if(t&1&&(X(0),v(1,qe,1,5,"span",9)(2,We,1,4,"TimesCircleIcon",10),Y()),t&2){let e=r(2);c(),l("ngIf",e.removeIcon),c(),l("ngIf",!e.removeIcon)}}function Ge(t,s){}function Je(t,s){t&1&&v(0,Ge,0,0,"ng-template")}function Xe(t,s){if(t&1){let e=H();u(0,"span",13),R("click",function(o){T(e);let n=r(2);return w(n.close(o))})("keydown",function(o){T(e);let n=r(2);return w(n.onKeydown(o))}),v(1,Je,1,0,null,14),m()}if(t&2){let e=r(2);p("data-pc-section","removeicon")("aria-label",e.removeAriaLabel),c(),l("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)}}function Ye(t,s){if(t&1&&(X(0),v(1,Ke,3,2,"ng-container",3)(2,Xe,2,3,"span",8),Y()),t&2){let e=r();c(),l("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),c(),l("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}var et=({dt:t})=>`
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
`,tt={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},ze=(()=>{class t extends O{name="chip";theme=et;classes=tt;static \u0275fac=(()=>{let e;return function(o){return(e||(e=h(t)))(o||t)}})();static \u0275prov=d({token:t,factory:t.\u0275fac})}return t})();var it=(()=>{class t extends D{label;icon;image;alt;style;styleClass;removable=!1;removeIcon;onRemove=new G;onImageError=new G;visible=!0;get removeAriaLabel(){return this.config.getTranslation($e.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(e){this._chipProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([i,o])=>this[`_${i}`]!==o&&(this[`_${i}`]=o))}_chipProps;_componentStyle=_(ze);removeIconTemplate;templates;_removeIconTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"removeicon":this._removeIconTemplate=e.template;break;default:this._removeIconTemplate=e.template;break}})}ngOnChanges(e){if(super.ngOnChanges(e),e.chipProps&&e.chipProps.currentValue){let{currentValue:i}=e.chipProps;i.label!==void 0&&(this.label=i.label),i.icon!==void 0&&(this.icon=i.icon),i.image!==void 0&&(this.image=i.image),i.alt!==void 0&&(this.alt=i.alt),i.style!==void 0&&(this.style=i.style),i.styleClass!==void 0&&(this.styleClass=i.styleClass),i.removable!==void 0&&(this.removable=i.removable),i.removeIcon!==void 0&&(this.removeIcon=i.removeIcon)}}containerClass(){let e="p-chip p-component";return this.styleClass&&(e+=` ${this.styleClass}`),e}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)}imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=h(t)))(o||t)}})();static \u0275cmp=z({type:t,selectors:[["p-chip"]],contentQueries:function(i,o,n){if(i&1&&(F(n,He,4),F(n,K,4)),i&2){let a;$(a=M())&&(o.removeIconTemplate=a.first),$(a=M())&&(o.templates=a)}},hostVars:9,hostBindings:function(i,o){i&2&&(p("data-pc-name","chip")("aria-label",o.label)("data-pc-section","root"),de(o.style),y(o.containerClass()),U("display",!o.visible&&"none"))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",style:"style",styleClass:"styleClass",removable:[2,"removable","removable",f],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[E([ze]),I,Q],ngContentSelectors:Re,decls:6,vars:4,consts:[["iconTemplate",""],["class","p-chip-image",3,"src","alt","error",4,"ngIf","ngIfElse"],["class","p-chip-label",4,"ngIf"],[4,"ngIf"],[1,"p-chip-image",3,"error","src","alt"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-chip-label"],["tabindex","0","class","p-chip-remove-icon","role","button",3,"click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","ngClass","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"click","keydown","ngClass"],["tabindex","0","role","button",3,"click","keydown"],["tabindex","0","role","button",1,"p-chip-remove-icon",3,"click","keydown"],[4,"ngTemplateOutlet"]],template:function(i,o){if(i&1&&(V(),B(0),v(1,Ne,1,2,"img",1)(2,Qe,1,1,"ng-template",null,0,_e)(4,Ue,2,2,"div",2)(5,Ye,3,2,"ng-container",3)),i&2){let n=fe(3);c(),l("ngIf",o.image)("ngIfElse",n),c(3),l("ngIf",o.label),c(),l("ngIf",o.removable)}},dependencies:[P,q,Te,W,Se,g],encapsulation:2,changeDetection:0})}return t})(),zt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=b({imports:[it,g,g]})}return t})();var Ve=class t{transform(s){if(!s)return"";let e=s.trim().split(/\s+/),i="";return e.length===1?i=e[0].charAt(0):(e.length===2||e.length===3||e.length,i=e[0].charAt(0)+e[1].charAt(0)),i.toUpperCase()}static \u0275fac=function(e){return new(e||t)};static \u0275pipe=ce({name:"nameInitials",type:t,pure:!0})};var ot=["content"],nt=["mask"],rt=["*"],st=t=>({"p-blockui-mask-document":t,"p-blockui p-blockui-mask p-overlay-mask":!0}),lt=()=>({display:"none"});function at(t,s){t&1&&ue(0)}var ct=({dt:t})=>`
.p-blockui {
    position: relative;
}

.p-blockui-mask {
    border-radius: ${t("blockui.border.radius")};
}

.p-blockui-mask.p-overlay-mask {
    position: absolute;
}

.p-blockui-mask-document.p-overlay-mask {
    position: fixed;
}
`,pt={root:"p-blockui"},Be=(()=>{class t extends O{name="blockui";theme=ct;classes=pt;static \u0275fac=(()=>{let e;return function(o){return(e||(e=h(t)))(o||t)}})();static \u0275prov=d({token:t,factory:t.\u0275fac})}return t})();var dt=(()=>{class t extends D{target;autoZIndex=!0;baseZIndex=0;styleClass;get blocked(){return this._blocked}set blocked(e){this.mask&&this.mask.nativeElement?e?this.block():this.unblock():this._blocked=e}contentTemplate;mask;_blocked=!1;animationEndListener;_componentStyle=_(Be);constructor(){super()}ngAfterViewInit(){if(super.ngAfterViewInit(),this._blocked&&this.block(),this.target&&!this.target.getBlockableElement)throw"Target of BlockUI must implement BlockableUI interface"}_contentTemplate;templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;default:this.contentTemplate=e.template;break}})}block(){A(this.platformId)&&(this._blocked=!0,this.mask.nativeElement.style.display="flex",this.target?(this.target.getBlockableElement().appendChild(this.mask.nativeElement),this.target.getBlockableElement().style.position="relative"):(this.renderer.appendChild(this.document.body,this.mask.nativeElement),ke()),this.autoZIndex&&S.set("modal",this.mask.nativeElement,this.baseZIndex+this.config.zIndex.modal))}unblock(){A(this.platformId)&&this.mask&&!this.animationEndListener&&this.destroyModal()}destroyModal(){this._blocked=!1,this.mask&&A(this.platformId)&&(S.clear(this.mask.nativeElement),this.renderer.removeChild(this.el.nativeElement,this.mask.nativeElement),Ie()),this.unbindAnimationEndListener(),this.cd.markForCheck()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.unblock(),this.destroyModal(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=z({type:t,selectors:[["p-blockUI"],["p-blockui"],["p-block-ui"]],contentQueries:function(i,o,n){if(i&1&&(F(n,ot,4),F(n,K,4)),i&2){let a;$(a=M())&&(o.contentTemplate=a.first),$(a=M())&&(o.templates=a)}},viewQuery:function(i,o){if(i&1&&me(nt,5),i&2){let n;$(n=M())&&(o.mask=n.first)}},inputs:{target:"target",autoZIndex:[2,"autoZIndex","autoZIndex",f],baseZIndex:[2,"baseZIndex","baseZIndex",C],styleClass:"styleClass",blocked:[2,"blocked","blocked",f]},features:[E([Be]),I],ngContentSelectors:rt,decls:4,vars:11,consts:[["mask",""],[3,"ngClass","ngStyle"],[4,"ngTemplateOutlet"]],template:function(i,o){i&1&&(V(),u(0,"div",1,0),B(2),v(3,at,1,0,"ng-container",2),m()),i&2&&(y(o.styleClass),l("ngClass",be(8,st,!o.target))("ngStyle",ye(10,lt)),p("aria-busy",o.blocked)("data-pc-name","blockui")("data-pc-section","root"),c(3),l("ngTemplateOutlet",o.contentTemplate||o._contentTemplate))},dependencies:[P,q,W,we,g],encapsulation:2,changeDetection:0})}return t})(),Yt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=b({imports:[dt,g,g]})}return t})();var Fe=class t{_loading=new oe(!1);loading$=this._loading.asObservable();constructor(){}show(){this._loading.next(!0)}hide(){this._loading.next(!1)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})};var ht=["*"],ut=({dt:t})=>`
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
`,mt={root:({props:t})=>({justifyContent:t.layout==="horizontal"?t.align==="center"||t.align===null?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null,alignItems:t.layout==="vertical"?t.align==="center"||t.align===null?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null})},ft={root:({props:t})=>["p-divider p-component","p-divider-"+t.layout,"p-divider-"+t.type,{"p-divider-left":t.layout==="horizontal"&&(!t.align||t.align==="left")},{"p-divider-center":t.layout==="horizontal"&&t.align==="center"},{"p-divider-right":t.layout==="horizontal"&&t.align==="right"},{"p-divider-top":t.layout==="vertical"&&t.align==="top"},{"p-divider-center":t.layout==="vertical"&&(!t.align||t.align==="center")},{"p-divider-bottom":t.layout==="vertical"&&t.align==="bottom"}],content:"p-divider-content"},Pe=(()=>{class t extends O{name="divider";theme=ut;classes=ft;inlineStyles=mt;static \u0275fac=(()=>{let e;return function(o){return(e||(e=h(t)))(o||t)}})();static \u0275prov=d({token:t,factory:t.\u0275fac})}return t})();var gt=(()=>{class t extends D{style;styleClass;layout="horizontal";type="solid";align;_componentStyle=_(Pe);get hostClass(){return this.styleClass}static \u0275fac=(()=>{let e;return function(o){return(e||(e=h(t)))(o||t)}})();static \u0275cmp=z({type:t,selectors:[["p-divider"]],hostVars:33,hostBindings:function(i,o){i&2&&(p("aria-orientation",o.layout)("data-pc-name","divider")("role","separator"),y(o.hostClass),U("justify-content",o.layout==="horizontal"?o.align==="center"||o.align===void 0?"center":o.align==="left"?"flex-start":o.align==="right"?"flex-end":null:null)("align-items",o.layout==="vertical"?o.align==="center"||o.align===void 0?"center":o.align==="top"?"flex-start":o.align==="bottom"?"flex-end":null:null),pe("p-divider",!0)("p-component",!0)("p-divider-horizontal",o.layout==="horizontal")("p-divider-vertical",o.layout==="vertical")("p-divider-solid",o.type==="solid")("p-divider-dashed",o.type==="dashed")("p-divider-dotted",o.type==="dotted")("p-divider-left",o.layout==="horizontal"&&(!o.align||o.align==="left"))("p-divider-center",o.layout==="horizontal"&&o.align==="center"||o.layout==="vertical"&&(!o.align||o.align==="center"))("p-divider-right",o.layout==="horizontal"&&o.align==="right")("p-divider-top",o.layout==="vertical"&&o.align==="top")("p-divider-bottom",o.layout==="vertical"&&o.align==="bottom"))},inputs:{style:"style",styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[E([Pe]),I],ngContentSelectors:ht,decls:2,vars:0,consts:[[1,"p-divider-content"]],template:function(i,o){i&1&&(V(),u(0,"div",0),B(1),m())},dependencies:[P,g],encapsulation:2,changeDetection:0})}return t})(),fi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=b({imports:[gt]})}return t})();var vt=({dt:t})=>`
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
`,yt={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},Ae=(()=>{class t extends O{name="tooltip";theme=vt;classes=yt;static \u0275fac=(()=>{let e;return function(o){return(e||(e=h(t)))(o||t)}})();static \u0275prov=d({token:t,factory:t.\u0275fac})}return t})();var Li=(()=>{class t extends D{zone;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:De("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=_(Ae);interactionInProgress=!1;constructor(e,i){super(),this.zone=e,this.viewContainer=i}ngAfterViewInit(){super.ngAfterViewInit(),A(this.platformId)&&this.zone.runOutsideAngular(()=>{let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),e==="focus"||e==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.addEventListener("focus",this.focusListener),i.addEventListener("blur",this.blurListener)}})}ngOnChanges(e){super.ngOnChanges(e),e.tooltipPosition&&this.setOption({tooltipPosition:e.tooltipPosition.currentValue}),e.tooltipEvent&&this.setOption({tooltipEvent:e.tooltipEvent.currentValue}),e.appendTo&&this.setOption({appendTo:e.appendTo.currentValue}),e.positionStyle&&this.setOption({positionStyle:e.positionStyle.currentValue}),e.tooltipStyleClass&&this.setOption({tooltipStyleClass:e.tooltipStyleClass.currentValue}),e.tooltipZIndex&&this.setOption({tooltipZIndex:e.tooltipZIndex.currentValue}),e.escape&&this.setOption({escape:e.escape.currentValue}),e.showDelay&&this.setOption({showDelay:e.showDelay.currentValue}),e.hideDelay&&this.setOption({hideDelay:e.hideDelay.currentValue}),e.life&&this.setOption({life:e.life.currentValue}),e.positionTop&&this.setOption({positionTop:e.positionTop.currentValue}),e.positionLeft&&this.setOption({positionLeft:e.positionLeft.currentValue}),e.disabled&&this.setOption({disabled:e.disabled.currentValue}),e.content&&(this.setOption({tooltipLabel:e.content.currentValue}),this.active&&(e.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),e.autoHide&&this.setOption({autoHide:e.autoHide.currentValue}),e.id&&this.setOption({id:e.id.currentValue}),e.tooltipOptions&&(this._tooltipOptions=j(j({},this._tooltipOptions),e.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(e){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(e){this.isAutoHide()?this.deactivate():!(N(e.relatedTarget,"p-tooltip")||N(e.relatedTarget,"p-tooltip-text")||N(e.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(e){this.activate()}onBlur(e){this.deactivate()}onInputClick(e){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let e=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},e)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let e=document.createElement("div");e.className="p-tooltip-arrow",this.container.appendChild(e),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?ee(this.container,this.el.nativeElement):ee(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let e=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(e,"mouseleave",i=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),Le(this.container,250),this.getOption("tooltipZIndex")==="auto"?S.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&S.clear(this.container),this.remove()}updateText(){let e=this.getOption("tooltipLabel");if(e instanceof se){let i=this.viewContainer.createEmbeddedView(e);i.detectChanges(),i.rootNodes.forEach(o=>this.tooltipText.appendChild(o))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(e))):this.tooltipText.innerHTML=e}align(){let e=this.getOption("tooltipPosition"),i={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]};for(let[o,n]of i[e].entries())if(o===0)n.call(this);else if(this.isOutOfBounds())n.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let e=this.el.nativeElement.getBoundingClientRect(),i=e.left+Ce(),o=e.top+xe();return{left:i,top:o}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.includes("P-")?te(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let e=this.activeElement,i=x(e),o=(L(e)-L(this.container))/2;this.alignTooltip(i,o)}alignLeft(){this.preAlign("left");let e=x(this.container),i=(L(this.el.nativeElement)-L(this.container))/2;this.alignTooltip(-e,i)}alignTop(){this.preAlign("top");let e=(x(this.el.nativeElement)-x(this.container))/2,i=L(this.container);this.alignTooltip(e,-i)}alignBottom(){this.preAlign("bottom");let e=(x(this.el.nativeElement)-x(this.container))/2,i=L(this.el.nativeElement);this.alignTooltip(e,i)}alignTooltip(e,i){let o=this.getHostOffset(),n=o.left+e,a=o.top+i;this.container.style.left=n+this.getOption("positionLeft")+"px",this.container.style.top=a+this.getOption("positionTop")+"px"}setOption(e){this._tooltipOptions=j(j({},this._tooltipOptions),e)}getOption(e){return this._tooltipOptions[e]}getTarget(e){return N(e,"p-inputwrapper")?te(e,"input"):e}preAlign(e){this.container.style.left="-999px",this.container.style.top="-999px";let i="p-tooltip p-component p-tooltip-"+e;this.container.className=this.getOption("tooltipStyleClass")?i+" "+this.getOption("tooltipStyleClass"):i}isOutOfBounds(){let e=this.container.getBoundingClientRect(),i=e.top,o=e.left,n=x(this.container),a=L(this.container),ie=Ee();return o+n>ie.width||o<0||i<0||i+a>ie.height}onWindowResize(e){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Me(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),e==="focus"||e==="both"){let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.removeEventListener("focus",this.focusListener),i.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):Oe(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&S.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(i){return new(i||t)(J(ne),J(le))};static \u0275dir=ae({type:t,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",f],showDelay:[2,"showDelay","showDelay",C],hideDelay:[2,"hideDelay","hideDelay",C],life:[2,"life","life",C],positionTop:[2,"positionTop","positionTop",C],positionLeft:[2,"positionLeft","positionLeft",C],autoHide:[2,"autoHide","autoHide",f],fitContent:[2,"fitContent","fitContent",f],hideOnEscape:[2,"hideOnEscape","hideOnEscape",f],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},features:[E([Ae]),I,Q]})}return t})(),Oi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=b({})}return t})();export{Li as a,Oi as b,it as c,zt as d,Ve as e,dt as f,Yt as g,Fe as h,fi as i};
