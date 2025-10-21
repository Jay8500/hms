import{$a as Ve,Ea as N,Ha as E,Qa as ie,Ta as I,Va as Oe,ca as Te,cb as Fe,da as te,eb as Ee,ia as $e,ja as Me,qa as Q,ua as Se,ya as oe,za as T}from"./chunk-KX3LVKJC.js";import{$ as y,$a as f,Ab as h,Bc as Y,Cc as ye,Db as O,Dc as K,Eb as R,Fb as v,Gb as w,Gc as ke,Hc as J,Kb as re,La as c,Lb as ge,Lc as U,Mb as be,N as pe,O as z,P as B,Qa as X,Sb as V,Tb as xe,Tc as ce,U as $,Ub as G,Uc as le,Vb as Ce,Wc as W,Xa as b,Xb as _e,Xc as ve,Ya as A,Yc as ee,Z as ue,Za as me,_,_c as we,aa as k,ad as Ie,bb as x,ca as m,ia as S,ib as r,ja as de,jb as a,kc as C,lb as fe,lc as F,mb as j,na as he,nb as g,ob as P,sb as p,tb as u,ub as l,vb as q,wb as H,xb as ae,yb as L,zb as M}from"./chunk-JSE7UAUZ.js";var je=({dt:e})=>`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${e("inputtext.color")};
    background: ${e("inputtext.background")};
    padding-block: ${e("inputtext.padding.y")};
    padding-inline: ${e("inputtext.padding.x")};
    border: 1px solid ${e("inputtext.border.color")};
    transition: background ${e("inputtext.transition.duration")}, color ${e("inputtext.transition.duration")}, border-color ${e("inputtext.transition.duration")}, outline-color ${e("inputtext.transition.duration")}, box-shadow ${e("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${e("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("inputtext.shadow")};
}

.p-inputtext.ng-invalid.ng-dirty {
    border-color: ${e("inputtext.invalid.border.color")};
}

.p-inputtext:enabled:hover {
    border-color: ${e("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${e("inputtext.focus.border.color")};
    box-shadow: ${e("inputtext.focus.ring.shadow")};
    outline: ${e("inputtext.focus.ring.width")} ${e("inputtext.focus.ring.style")} ${e("inputtext.focus.ring.color")};
    outline-offset: ${e("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${e("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${e("inputtext.filled.background")};
}
    
.p-inputtext.p-variant-filled:enabled:hover {
    background: ${e("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${e("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${e("inputtext.disabled.background")};
    color: ${e("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${e("inputtext.placeholder.color")};
}

.p-inputtext.ng-invalid.ng-dirty::placeholder {
    color: ${e("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${e("inputtext.sm.font.size")};
    padding-block: ${e("inputtext.sm.padding.y")};
    padding-inline: ${e("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${e("inputtext.lg.font.size")};
    padding-block: ${e("inputtext.lg.padding.y")};
    padding-inline: ${e("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`,Pe={root:({instance:e,props:n})=>["p-inputtext p-component",{"p-filled":e.filled,"p-inputtext-sm":n.size==="small","p-inputtext-lg":n.size==="large","p-invalid":n.invalid,"p-variant-filled":n.variant==="filled","p-inputtext-fluid":n.fluid}]},De=(()=>{class e extends N{name="inputtext";theme=je;classes=Pe;static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275prov=z({token:e,factory:e.\u0275fac})}return e})();var qt=(()=>{class e extends E{ngModel;variant;fluid;pSize;filled;_componentStyle=$(De);get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return te(this.fluid)?!!i:this.fluid}constructor(t){super(),this.ngModel=t}ngAfterViewInit(){super.ngAfterViewInit(),this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(i){return new(i||e)(X(Ee,8))};static \u0275dir=me({type:e,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component"],hostVars:14,hostBindings:function(i,o){if(i&1&&M("input",function(d){return o.onInput(d)}),i&2){let s;fe("p-filled",o.filled)("p-variant-filled",((s=o.variant)!==null&&s!==void 0?s:o.config.inputStyle()||o.config.inputVariant())==="filled")("p-inputtext-fluid",o.hasFluid)("p-inputtext-sm",o.pSize==="small")("p-inputfield-sm",o.pSize==="small")("p-inputtext-lg",o.pSize==="large")("p-inputfield-lg",o.pSize==="large")}},inputs:{variant:"variant",fluid:[2,"fluid","fluid",C],pSize:"pSize"},features:[V([De]),f]})}return e})(),Ht=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=A({type:e});static \u0275inj=B({})}return e})();var ne=(()=>{class e extends I{static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275cmp=b({type:e,selectors:[["CheckIcon"]],features:[f],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(i,o){i&1&&(k(),p(0,"svg",0),l(1,"path",1),u()),i&2&&(g(o.getClassNames()),r("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})();var ze=(()=>{class e extends I{pathId;ngOnInit(){this.pathId="url(#"+Q()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275cmp=b({type:e,selectors:[["ExclamationTriangleIcon"]],features:[f],decls:8,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z","fill","currentColor"],["d","M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z","fill","currentColor"],["d","M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,o){i&1&&(k(),p(0,"svg",0)(1,"g"),l(2,"path",1)(3,"path",2)(4,"path",3),u(),p(5,"defs")(6,"clipPath",4),l(7,"rect",5),u()()()),i&2&&(g(o.getClassNames()),r("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),c(),r("clip-path",o.pathId),c(5),a("id",o.pathId))},encapsulation:2})}return e})();var Be=(()=>{class e extends I{pathId;ngOnInit(){this.pathId="url(#"+Q()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275cmp=b({type:e,selectors:[["InfoCircleIcon"]],features:[f],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,o){i&1&&(k(),p(0,"svg",0)(1,"g"),l(2,"path",1),u(),p(3,"defs")(4,"clipPath",2),l(5,"rect",3),u()()()),i&2&&(g(o.getClassNames()),r("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),c(),r("clip-path",o.pathId),c(3),a("id",o.pathId))},encapsulation:2})}return e})();var Ae=(()=>{class e extends I{static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275cmp=b({type:e,selectors:[["MinusIcon"]],features:[f],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(i,o){i&1&&(k(),p(0,"svg",0),l(1,"path",1),u()),i&2&&(g(o.getClassNames()),r("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})();var Le=(()=>{class e extends I{static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275cmp=b({type:e,selectors:[["TimesIcon"]],features:[f],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(i,o){i&1&&(k(),p(0,"svg",0),l(1,"path",1),u()),i&2&&(g(o.getClassNames()),r("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})();var He=["checkboxicon"],Re=["input"],Ge=()=>({"p-checkbox-input":!0}),Ye=e=>({checked:e,class:"p-checkbox-icon"});function Ue(e,n){if(e&1&&l(0,"span",8),e&2){let t=h(3);a("ngClass",t.checkboxIcon),r("data-pc-section","icon")}}function Xe(e,n){e&1&&l(0,"CheckIcon",9),e&2&&(a("styleClass","p-checkbox-icon"),r("data-pc-section","icon"))}function Ke(e,n){if(e&1&&(q(0),x(1,Ue,1,2,"span",7)(2,Xe,1,2,"CheckIcon",6),H()),e&2){let t=h(2);c(),a("ngIf",t.checkboxIcon),c(),a("ngIf",!t.checkboxIcon)}}function Je(e,n){e&1&&l(0,"MinusIcon",9),e&2&&(a("styleClass","p-checkbox-icon"),r("data-pc-section","icon"))}function We(e,n){if(e&1&&(q(0),x(1,Ke,3,2,"ng-container",4)(2,Je,1,2,"MinusIcon",6),H()),e&2){let t=h();c(),a("ngIf",t.checked),c(),a("ngIf",t._indeterminate())}}function et(e,n){}function tt(e,n){e&1&&x(0,et,0,0,"ng-template")}var ot=({dt:e})=>`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${e("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${e("checkbox.border.radius")};
    border: 1px solid ${e("checkbox.border.color")};
    background: ${e("checkbox.background")};
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
    transition: background ${e("checkbox.transition.duration")}, color ${e("checkbox.transition.duration")}, border-color ${e("checkbox.transition.duration")}, box-shadow ${e("checkbox.transition.duration")}, outline-color ${e("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${e("checkbox.transition.duration")};
    color: ${e("checkbox.icon.color")};
    font-size: ${e("checkbox.icon.size")};
    width: ${e("checkbox.icon.size")};
    height: ${e("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${e("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${e("checkbox.checked.border.color")};
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
    border-color: ${e("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.focus.border.color")};
    box-shadow: ${e("checkbox.focus.ring.shadow")};
    outline: ${e("checkbox.focus.ring.width")} ${e("checkbox.focus.ring.style")} ${e("checkbox.focus.ring.color")};
    outline-offset: ${e("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.checked.focus.border.color")};
}

p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
    border-color: ${e("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${e("checkbox.disabled.background")};
    border-color: ${e("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${e("checkbox.icon.disabled.color")};
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: ${e("checkbox.sm.width")};
    height: ${e("checkbox.sm.height")};
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: ${e("checkbox.icon.sm.size")};
    width: ${e("checkbox.icon.sm.size")};
    height: ${e("checkbox.icon.sm.size")};
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: ${e("checkbox.lg.width")};
    height: ${e("checkbox.lg.height")};
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: ${e("checkbox.icon.lg.size")};
    width: ${e("checkbox.icon.lg.size")};
    height: ${e("checkbox.icon.lg.size")};
}
`,it={root:({instance:e,props:n})=>["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":n.disabled,"p-invalid":n.invalid,"p-variant-filled":n.variant?n.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},Qe=(()=>{class e extends N{name="checkbox";theme=ot;classes=it;static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275prov=z({token:e,factory:e.\u0275fac})}return e})();var nt={provide:Ve,useExisting:pe(()=>Ne),multi:!0},Ne=(()=>{class e extends E{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;size;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant;onChange=new S;onFocus=new S;onBlur=new S;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:Me(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-checkbox-sm p-inputfield-sm":this.size==="small","p-checkbox-lg p-inputfield-lg":this.size==="large"}}_indeterminate=he(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=$(Qe);ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._checkboxIconTemplate=t.template;break;case"checkboxicon":this._checkboxIconTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t),t.indeterminate&&this._indeterminate.set(t.indeterminate.currentValue)}updateModel(t){let i,o=this.injector.get(Fe,null,{optional:!0,self:!0}),s=o&&!this.formControl?o.value:this.model;this.binary?(i=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=i,this.onModelChange(i)):(this.checked||this._indeterminate()?i=s.filter(d=>!$e(d,this.value)):i=s?[...s,this.value]:[this.value],this.onModelChange(i),this.model=i,this.formControl&&this.formControl.setValue(i)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:i,originalEvent:t})}handleChange(t){this.readonly||this.updateModel(t)}onInputFocus(t){this.focused=!0,this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.onBlur.emit(t),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(t){this.model=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){setTimeout(()=>{this.disabled=t,this.cd.markForCheck()})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275cmp=b({type:e,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(i,o,s){if(i&1&&(O(s,He,4),O(s,oe,4)),i&2){let d;v(d=w())&&(o.checkboxIconTemplate=d.first),v(d=w())&&(o.templates=d)}},viewQuery:function(i,o){if(i&1&&R(Re,5),i&2){let s;v(s=w())&&(o.inputViewChild=s.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",C],binary:[2,"binary","binary",C],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",F],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",C],size:"size",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",C],required:[2,"required","required",C],autofocus:[2,"autofocus","autofocus",C],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[V([nt,Qe]),f,ue],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(i,o){if(i&1){let s=L();p(0,"div",1)(1,"input",2,0),M("focus",function(Z){return _(s),y(o.onInputFocus(Z))})("blur",function(Z){return _(s),y(o.onInputBlur(Z))})("change",function(Z){return _(s),y(o.handleChange(Z))}),u(),p(3,"div",3),x(4,We,3,2,"ng-container",4)(5,tt,1,0,null,5),u()()}i&2&&(j(o.style),g(o.styleClass),a("ngClass",o.containerClass),r("data-p-highlight",o.checked)("data-p-checked",o.checked)("data-p-disabled",o.disabled),c(),j(o.inputStyle),g(o.inputClass),a("value",o.value)("checked",o.checked)("disabled",o.disabled)("readonly",o.readonly)("ngClass",xe(26,Ge)),r("id",o.inputId)("name",o.name)("tabindex",o.tabindex)("required",o.required?!0:null)("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel),c(3),a("ngIf",!o.checkboxIconTemplate&&!o._checkboxIconTemplate),c(),a("ngTemplateOutlet",o.checkboxIconTemplate||o._checkboxIconTemplate)("ngTemplateOutletContext",G(27,Ye,o.checked)))},dependencies:[U,Y,K,J,ne,Ae,T],encapsulation:2,changeDetection:0})}return e})(),wo=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=A({type:e});static \u0275inj=B({imports:[Ne,T,T]})}return e})();var Ze=["container"],st=(e,n,t,i)=>({showTransformParams:e,hideTransformParams:n,showTransitionParams:t,hideTransitionParams:i}),at=e=>({value:"visible",params:e}),rt=(e,n)=>({$implicit:e,closeFn:n}),ct=e=>({$implicit:e});function lt(e,n){e&1&&ae(0)}function pt(e,n){if(e&1&&x(0,lt,1,0,"ng-container",3),e&2){let t=h();a("ngTemplateOutlet",t.headlessTemplate)("ngTemplateOutletContext",Ce(2,rt,t.message,t.onCloseIconClick))}}function ut(e,n){if(e&1&&l(0,"span",4),e&2){let t=h(3);a("ngClass",t.cx("messageIcon"))}}function dt(e,n){e&1&&l(0,"CheckIcon"),e&2&&r("aria-hidden",!0)("data-pc-section","icon")}function ht(e,n){e&1&&l(0,"InfoCircleIcon"),e&2&&r("aria-hidden",!0)("data-pc-section","icon")}function mt(e,n){e&1&&l(0,"TimesCircleIcon"),e&2&&r("aria-hidden",!0)("data-pc-section","icon")}function ft(e,n){e&1&&l(0,"ExclamationTriangleIcon"),e&2&&r("aria-hidden",!0)("data-pc-section","icon")}function gt(e,n){e&1&&l(0,"InfoCircleIcon"),e&2&&r("aria-hidden",!0)("data-pc-section","icon")}function bt(e,n){if(e&1&&(p(0,"span",4),x(1,dt,1,2,"CheckIcon")(2,ht,1,2,"InfoCircleIcon")(3,mt,1,2,"TimesCircleIcon")(4,ft,1,2,"ExclamationTriangleIcon")(5,gt,1,2,"InfoCircleIcon"),u()),e&2){let t,i=h(3);a("ngClass",i.cx("messageIcon")),r("aria-hidden",!0)("data-pc-section","icon"),c(),P((t=i.message.severity)==="success"?1:t==="info"?2:t==="error"?3:t==="warn"?4:5)}}function xt(e,n){if(e&1&&(q(0),x(1,ut,1,1,"span",6)(2,bt,6,4,"span",6),p(3,"div",4)(4,"div",4),re(5),u(),p(6,"div",4),re(7),u()(),H()),e&2){let t=h(2);c(),a("ngIf",t.message.icon),c(),a("ngIf",!t.message.icon),c(),a("ngClass",t.cx("messageText")),r("data-pc-section","text"),c(),a("ngClass",t.cx("summary")),r("data-pc-section","summary"),c(),be(" ",t.message.summary," "),c(),a("ngClass",t.cx("detail")),r("data-pc-section","detail"),c(),ge(t.message.detail)}}function Ct(e,n){e&1&&ae(0)}function _t(e,n){if(e&1&&l(0,"span",4),e&2){let t=h(4);a("ngClass",t.cx("closeIcon"))}}function yt(e,n){if(e&1&&x(0,_t,1,1,"span",6),e&2){let t=h(3);a("ngIf",t.message.closeIcon)}}function kt(e,n){if(e&1&&l(0,"TimesIcon",4),e&2){let t=h(3);a("ngClass",t.cx("closeIcon")),r("aria-hidden",!0)("data-pc-section","closeicon")}}function vt(e,n){if(e&1){let t=L();p(0,"div")(1,"button",7),M("click",function(o){_(t);let s=h(2);return y(s.onCloseIconClick(o))})("keydown.enter",function(o){_(t);let s=h(2);return y(s.onCloseIconClick(o))}),x(2,yt,1,1,"span",4)(3,kt,1,3,"TimesIcon",4),u()()}if(e&2){let t=h(2);c(),a("ariaLabel",t.closeAriaLabel),r("class",t.cx("closeButton"))("data-pc-section","closebutton"),c(),P(t.message.closeIcon?2:3)}}function wt(e,n){if(e&1&&(p(0,"div",4),x(1,xt,8,10,"ng-container",5)(2,Ct,1,0,"ng-container",3)(3,vt,4,4,"div"),u()),e&2){let t=h();g(t.message==null?null:t.message.contentStyleClass),a("ngClass",t.cx("messageContent")),r("data-pc-section","content"),c(),a("ngIf",!t.template),c(),a("ngTemplateOutlet",t.template)("ngTemplateOutletContext",G(8,ct,t.message)),c(),P((t.message==null?null:t.message.closable)!==!1?3:-1)}}var It=["message"],Tt=["headless"];function $t(e,n){if(e&1){let t=L();p(0,"p-toastItem",3),M("onClose",function(o){_(t);let s=h();return y(s.onMessageClose(o))})("@toastAnimation.start",function(o){_(t);let s=h();return y(s.onAnimationStart(o))})("@toastAnimation.done",function(o){_(t);let s=h();return y(s.onAnimationEnd(o))}),u()}if(e&2){let t=n.$implicit,i=n.index,o=h();a("message",t)("index",i)("life",o.life)("template",o.template||o._template)("headlessTemplate",o.headlessTemplate||o._headlessTemplate)("@toastAnimation",void 0)("showTransformOptions",o.showTransformOptions)("hideTransformOptions",o.hideTransformOptions)("showTransitionOptions",o.showTransitionOptions)("hideTransitionOptions",o.hideTransitionOptions)}}var Mt=({dt:e})=>`
.p-toast {
    width: ${e("toast.width")};
    white-space: pre-line;
    word-break: break-word;
}

.p-toast-message {
    margin: 0 0 1rem 0;
}

.p-toast-message-icon {
    flex-shrink: 0;
    font-size: ${e("toast.icon.size")};
    width: ${e("toast.icon.size")};
    height: ${e("toast.icon.size")};
}

.p-toast-message-content {
    display: flex;
    align-items: flex-start;
    padding: ${e("toast.content.padding")};
    gap: ${e("toast.content.gap")};
}

.p-toast-message-text {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: ${e("toast.text.gap")};
}

.p-toast-summary {
    font-weight: ${e("toast.summary.font.weight")};
    font-size: ${e("toast.summary.font.size")};
}

.p-toast-detail {
    font-weight: ${e("toast.detail.font.weight")};
    font-size: ${e("toast.detail.font.size")};
}

.p-toast-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background: transparent;
    transition: background ${e("toast.transition.duration")}, color ${e("toast.transition.duration")}, outline-color ${e("toast.transition.duration")}, box-shadow ${e("toast.transition.duration")};
    outline-color: transparent;
    color: inherit;
    width: ${e("toast.close.button.width")};
    height: ${e("toast.close.button.height")};
    border-radius: ${e("toast.close.button.border.radius")};
    margin: -25% 0 0 0;
    right: -25%;
    padding: 0;
    border: none;
    user-select: none;
}

.p-toast-close-button:dir(rtl) {
    margin: -25% 0 0 auto;
    left: -25%;
    right: auto;
}

.p-toast-message-info,
.p-toast-message-success,
.p-toast-message-warn,
.p-toast-message-error,
.p-toast-message-secondary,
.p-toast-message-contrast {
    border-width: ${e("toast.border.width")};
    border-style: solid;
    backdrop-filter: blur(${e("toast.blur")});
    border-radius: ${e("toast.border.radius")};
}

.p-toast-close-icon {
    font-size: ${e("toast.close.icon.size")};
    width: ${e("toast.close.icon.size")};
    height: ${e("toast.close.icon.size")};
}

.p-toast-close-button:focus-visible {
    outline-width: ${e("focus.ring.width")};
    outline-style: ${e("focus.ring.style")};
    outline-offset: ${e("focus.ring.offset")};
}

.p-toast-message-info {
    background: ${e("toast.info.background")};
    border-color: ${e("toast.info.border.color")};
    color: ${e("toast.info.color")};
    box-shadow: ${e("toast.info.shadow")};
}

.p-toast-message-info .p-toast-detail {
    color: ${e("toast.info.detail.color")};
}

.p-toast-message-info .p-toast-close-button:focus-visible {
    outline-color: ${e("toast.info.close.button.focus.ring.color")};
    box-shadow: ${e("toast.info.close.button.focus.ring.shadow")};
}

.p-toast-message-info .p-toast-close-button:hover {
    background: ${e("toast.info.close.button.hover.background")};
}

.p-toast-message-success {
    background: ${e("toast.success.background")};
    border-color: ${e("toast.success.border.color")};
    color: ${e("toast.success.color")};
    box-shadow: ${e("toast.success.shadow")};
}

.p-toast-message-success .p-toast-detail {
    color: ${e("toast.success.detail.color")};
}

.p-toast-message-success .p-toast-close-button:focus-visible {
    outline-color: ${e("toast.success.close.button.focus.ring.color")};
    box-shadow: ${e("toast.success.close.button.focus.ring.shadow")};
}

.p-toast-message-success .p-toast-close-button:hover {
    background: ${e("toast.success.close.button.hover.background")};
}

.p-toast-message-warn {
    background: ${e("toast.warn.background")};
    border-color: ${e("toast.warn.border.color")};
    color: ${e("toast.warn.color")};
    box-shadow: ${e("toast.warn.shadow")};
}

.p-toast-message-warn .p-toast-detail {
    color: ${e("toast.warn.detail.color")};
}

.p-toast-message-warn .p-toast-close-button:focus-visible {
    outline-color: ${e("toast.warn.close.button.focus.ring.color")};
    box-shadow: ${e("toast.warn.close.button.focus.ring.shadow")};
}

.p-toast-message-warn .p-toast-close-button:hover {
    background: ${e("toast.warn.close.button.hover.background")};
}

.p-toast-message-error {
    background: ${e("toast.error.background")};
    border-color: ${e("toast.error.border.color")};
    color: ${e("toast.error.color")};
    box-shadow: ${e("toast.error.shadow")};
}

.p-toast-message-error .p-toast-detail {
    color: ${e("toast.error.detail.color")};
}

.p-toast-message-error .p-toast-close-button:focus-visible {
    outline-color: ${e("toast.error.close.button.focus.ring.color")};
    box-shadow: ${e("toast.error.close.button.focus.ring.shadow")};
}

.p-toast-message-error .p-toast-close-button:hover {
    background: ${e("toast.error.close.button.hover.background")};
}

.p-toast-message-secondary {
    background: ${e("toast.secondary.background")};
    border-color: ${e("toast.secondary.border.color")};
    color: ${e("toast.secondary.color")};
    box-shadow: ${e("toast.secondary.shadow")};
}

.p-toast-message-secondary .p-toast-detail {
    color: ${e("toast.secondary.detail.color")};
}

.p-toast-message-secondary .p-toast-close-button:focus-visible {
    outline-color: ${e("toast.secondary.close.button.focus.ring.color")};
    box-shadow: ${e("toast.secondary.close.button.focus.ring.shadow")};
}

.p-toast-message-secondary .p-toast-close-button:hover {
    background: ${e("toast.secondary.close.button.hover.background")};
}

.p-toast-message-contrast {
    background: ${e("toast.contrast.background")};
    border-color: ${e("toast.contrast.border.color")};
    color: ${e("toast.contrast.color")};
    box-shadow: ${e("toast.contrast.shadow")};
}

.p-toast-message-contrast .p-toast-detail {
    color: ${e("toast.contrast.detail.color")};
}

.p-toast-message-contrast .p-toast-close-button:focus-visible {
    outline-color: ${e("toast.contrast.close.button.focus.ring.color")};
    box-shadow: ${e("toast.contrast.close.button.focus.ring.shadow")};
}

.p-toast-message-contrast .p-toast-close-button:hover {
    background: ${e("toast.contrast.close.button.hover.background")};
}

.p-toast-top-center {
    transform: translateX(-50%);
}

.p-toast-bottom-center {
    transform: translateX(-50%);
}

.p-toast-center {
    min-width: 20vw;
    transform: translate(-50%, -50%);
}

.p-toast-message-enter-from {
    opacity: 0;
    transform: translateY(50%);
}

.p-toast-message-leave-from {
    max-height: 1000px;
}

.p-toast .p-toast-message.p-toast-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
}

.p-toast-message-enter-active {
    transition: transform 0.3s, opacity 0.3s;
}

.p-toast-message-leave-active {
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
}
`,St={root:({instance:e})=>{let{_position:n}=e;return{position:"fixed",top:n==="top-right"||n==="top-left"||n==="top-center"?"20px":n==="center"?"50%":null,right:(n==="top-right"||n==="bottom-right")&&"20px",bottom:(n==="bottom-left"||n==="bottom-right"||n==="bottom-center")&&"20px",left:n==="top-left"||n==="bottom-left"?"20px":n==="center"||n==="top-center"||n==="bottom-center"?"50%":null}}},Ot={root:({instance:e})=>({"p-toast p-component":!0,[`p-toast-${e._position}`]:!!e._position}),message:({instance:e})=>({"p-toast-message":!0,"p-toast-message-info":e.message.severity==="info"||e.message.severity===void 0,"p-toast-message-warn":e.message.severity==="warn","p-toast-message-error":e.message.severity==="error","p-toast-message-success":e.message.severity==="success","p-toast-message-secondary":e.message.severity==="secondary","p-toast-message-contrast":e.message.severity==="contrast"}),messageContent:"p-toast-message-content",messageIcon:({instance:e})=>({"p-toast-message-icon":!0,[`pi ${e.message.icon}`]:!!e.message.icon}),messageText:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-close-button",closeIcon:({instance:e})=>({"p-toast-close-icon":!0,[`pi ${e.message.closeIcon}`]:!!e.message.closeIcon})},se=(()=>{class e extends N{name="toast";theme=Mt;classes=Ot;inlineStyles=St;static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275prov=z({token:e,factory:e.\u0275fac})}return e})();var Vt=(()=>{class e extends E{zone;message;index;life;template;headlessTemplate;showTransformOptions;hideTransformOptions;showTransitionOptions;hideTransitionOptions;onClose=new S;containerViewChild;_componentStyle=$(se);timeout;constructor(t){super(),this.zone=t}ngAfterViewInit(){super.ngAfterViewInit(),this.initTimeout()}initTimeout(){this.message?.sticky||this.zone.runOutsideAngular(()=>{this.timeout=setTimeout(()=>{this.onClose.emit({index:this.index,message:this.message})},this.message?.life||this.life||3e3)})}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}onMouseEnter(){this.clearTimeout()}onMouseLeave(){this.initTimeout()}onCloseIconClick=t=>{this.clearTimeout(),this.onClose.emit({index:this.index,message:this.message}),t.preventDefault()};get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}ngOnDestroy(){this.clearTimeout(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||e)(X(de))};static \u0275cmp=b({type:e,selectors:[["p-toastItem"]],viewQuery:function(i,o){if(i&1&&R(Ze,5),i&2){let s;v(s=w())&&(o.containerViewChild=s.first)}},inputs:{message:"message",index:[2,"index","index",F],life:[2,"life","life",F],template:"template",headlessTemplate:"headlessTemplate",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onClose:"onClose"},features:[V([se]),f],decls:4,vars:15,consts:[["container",""],["role","alert","aria-live","assertive","aria-atomic","true",3,"mouseenter","mouseleave","ngClass"],[3,"ngClass","class"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[4,"ngIf"],[3,"ngClass",4,"ngIf"],["type","button","autofocus","",3,"click","keydown.enter","ariaLabel"]],template:function(i,o){if(i&1){let s=L();p(0,"div",1,0),M("mouseenter",function(){return _(s),y(o.onMouseEnter())})("mouseleave",function(){return _(s),y(o.onMouseLeave())}),x(2,pt,1,5,"ng-container")(3,wt,4,10,"div",2),u()}i&2&&(g(o.message==null?null:o.message.styleClass),a("ngClass",o.cx("message"))("@messageState",G(13,at,_e(8,st,o.showTransformOptions,o.hideTransformOptions,o.showTransitionOptions,o.hideTransitionOptions))),r("id",o.message==null?null:o.message.id)("data-pc-name","toast")("data-pc-section","root"),c(2),P(o.headlessTemplate?2:3))},dependencies:[U,Y,K,J,ne,ze,Be,Le,Oe,T],encapsulation:2,data:{animation:[ce("messageState",[ve("visible",W({transform:"translateY(0)",opacity:1})),ee("void => *",[W({transform:"{{showTransformParams}}",opacity:0}),le("{{showTransitionParams}}")]),ee("* => void",[le("{{hideTransitionParams}}",W({height:0,opacity:0,transform:"{{hideTransformParams}}"}))])])]},changeDetection:0})}return e})(),Ft=(()=>{class e extends E{key;autoZIndex=!0;baseZIndex=0;life=3e3;style;styleClass;get position(){return this._position}set position(t){this._position=t,this.cd.markForCheck()}preventOpenDuplicates=!1;preventDuplicates=!1;showTransformOptions="translateY(100%)";hideTransformOptions="translateY(-100%)";showTransitionOptions="300ms ease-out";hideTransitionOptions="250ms ease-in";breakpoints;onClose=new S;template;headlessTemplate;containerViewChild;messageSubscription;clearSubscription;messages;messagesArchieve;_position="top-right";messageService=$(Se);_componentStyle=$(se);styleElement;id=Q("pn_id_");templates;ngOnInit(){super.ngOnInit(),this.messageSubscription=this.messageService.messageObserver.subscribe(t=>{if(t)if(Array.isArray(t)){let i=t.filter(o=>this.canAdd(o));this.add(i)}else this.canAdd(t)&&this.add([t])}),this.clearSubscription=this.messageService.clearObserver.subscribe(t=>{t?this.key===t&&(this.messages=null):this.messages=null,this.cd.markForCheck()})}_template;_headlessTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"message":this._template=t.template;break;case"headless":this._headlessTemplate=t.template;break;default:this._template=t.template;break}})}ngAfterViewInit(){super.ngAfterViewInit(),this.breakpoints&&this.createStyle()}add(t){this.messages=this.messages?[...this.messages,...t]:[...t],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...t]:[...t]),this.cd.markForCheck()}canAdd(t){let i=this.key===t.key;return i&&this.preventOpenDuplicates&&(i=!this.containsMessage(this.messages,t)),i&&this.preventDuplicates&&(i=!this.containsMessage(this.messagesArchieve,t)),i}containsMessage(t,i){return t?t.find(o=>o.summary===i.summary&&o.detail==i.detail&&o.severity===i.severity)!=null:!1}onMessageClose(t){this.messages?.splice(t.index,1),this.onClose.emit({message:t.message}),this.cd.detectChanges()}onAnimationStart(t){t.fromState==="void"&&(this.renderer.setAttribute(this.containerViewChild?.nativeElement,this.id,""),this.autoZIndex&&this.containerViewChild?.nativeElement.style.zIndex===""&&ie.set("modal",this.containerViewChild?.nativeElement,this.baseZIndex||this.config.zIndex.modal))}onAnimationEnd(t){t.toState==="void"&&this.autoZIndex&&te(this.messages)&&ie.clear(this.containerViewChild?.nativeElement)}createStyle(){if(!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",this.renderer.appendChild(this.document.head,this.styleElement);let t="";for(let i in this.breakpoints){let o="";for(let s in this.breakpoints[i])o+=s+":"+this.breakpoints[i][s]+" !important;";t+=`
                    @media screen and (max-width: ${i}) {
                        .p-toast[${this.id}] {
                           ${o}
                        }
                    }
                `}this.renderer.setProperty(this.styleElement,"innerHTML",t),Te(this.styleElement,"nonce",this.config?.csp()?.nonce)}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.containerViewChild&&this.autoZIndex&&ie.clear(this.containerViewChild.nativeElement),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.destroyStyle(),super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275cmp=b({type:e,selectors:[["p-toast"]],contentQueries:function(i,o,s){if(i&1&&(O(s,It,5),O(s,Tt,5),O(s,oe,4)),i&2){let d;v(d=w())&&(o.template=d.first),v(d=w())&&(o.headlessTemplate=d.first),v(d=w())&&(o.templates=d)}},viewQuery:function(i,o){if(i&1&&R(Ze,5),i&2){let s;v(s=w())&&(o.containerViewChild=s.first)}},inputs:{key:"key",autoZIndex:[2,"autoZIndex","autoZIndex",C],baseZIndex:[2,"baseZIndex","baseZIndex",F],life:[2,"life","life",F],style:"style",styleClass:"styleClass",position:"position",preventOpenDuplicates:[2,"preventOpenDuplicates","preventOpenDuplicates",C],preventDuplicates:[2,"preventDuplicates","preventDuplicates",C],showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",breakpoints:"breakpoints"},outputs:{onClose:"onClose"},features:[V([se]),f],decls:3,vars:7,consts:[["container",""],[3,"ngClass","ngStyle"],[3,"message","index","life","template","headlessTemplate","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions","onClose",4,"ngFor","ngForOf"],[3,"onClose","message","index","life","template","headlessTemplate","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions"]],template:function(i,o){i&1&&(p(0,"div",1,0),x(2,$t,1,10,"p-toastItem",2),u()),i&2&&(j(o.style),g(o.styleClass),a("ngClass",o.cx("root"))("ngStyle",o.sx("root")),c(2),a("ngForOf",o.messages))},dependencies:[U,Y,ye,ke,Vt,T],encapsulation:2,data:{animation:[ce("toastAnimation",[ee(":enter, :leave",[Ie("@*",we())])])]},changeDetection:0})}return e})(),Ho=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=A({type:e});static \u0275inj=B({imports:[Ft,T,T]})}return e})();export{ne as a,Ae as b,Le as c,qt as d,Ht as e,Ne as f,wo as g,Ft as h,Ho as i};
