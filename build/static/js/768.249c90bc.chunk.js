/*! For license information please see 768.249c90bc.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkCashBTN=self.webpackChunkCashBTN||[]).push([[768],{1768:(e,t,i)=>{i.r(t),i.d(t,{KEYBOARD_DID_CLOSE:()=>a,KEYBOARD_DID_OPEN:()=>o,copyVisualViewport:()=>k,keyboardDidClose:()=>l,keyboardDidOpen:()=>f,keyboardDidResize:()=>w,resetKeyboardAssist:()=>h,setKeyboardClose:()=>c,setKeyboardOpen:()=>b,startKeyboardAssist:()=>p,trackViewportChanges:()=>D});var s=i(6793);const o="ionKeyboardDidShow",a="ionKeyboardDidHide";let d={},r={},n=!1;const h=()=>{d={},r={},n=!1},p=e=>{if(s.K.getEngine())g(e);else{if(!e.visualViewport)return;r=k(e.visualViewport),e.visualViewport.onresize=()=>{D(e),f()||w(e)?b(e):l(e)&&c(e)}}},g=e=>{e.addEventListener("keyboardDidShow",(t=>b(e,t))),e.addEventListener("keyboardDidHide",(()=>c(e)))},b=(e,t)=>{u(e,t),n=!0},c=e=>{y(e),n=!1},f=()=>{const e=(d.height-r.height)*r.scale;return!n&&d.width===r.width&&e>150},w=e=>n&&!l(e),l=e=>n&&r.height===e.innerHeight,u=(e,t)=>{const i=t?t.keyboardHeight:e.innerHeight-r.height,s=new CustomEvent(o,{detail:{keyboardHeight:i}});e.dispatchEvent(s)},y=e=>{const t=new CustomEvent(a);e.dispatchEvent(t)},D=e=>{d=Object.assign({},r),r=k(e.visualViewport)},k=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);
//# sourceMappingURL=768.249c90bc.chunk.js.map