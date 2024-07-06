/*! For license information please see 288.f9eea85c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkCashBTN=self.webpackChunkCashBTN||[]).push([[288],{1288:(e,t,r)=>{r.r(t),r.d(t,{GESTURE_CONTROLLER:()=>n.G,createGesture:()=>i});var n=r(267);const s=(e,t,r,n)=>{const s=o(e)?{capture:!!n.capture,passive:!!n.passive}:!!n.capture;let a,c;return e.__zone_symbol__addEventListener?(a="__zone_symbol__addEventListener",c="__zone_symbol__removeEventListener"):(a="addEventListener",c="removeEventListener"),e[a](t,r,s),()=>{e[c](t,r,s)}},o=e=>{if(void 0===a)try{const t=Object.defineProperty({},"passive",{get:()=>{a=!0}});e.addEventListener("optsTest",(()=>{}),t)}catch(t){a=!1}return!!a};let a;const c=e=>e instanceof Document?e:e.ownerDocument,i=e=>{let t=!1,r=!1,o=!0,a=!1;const i=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},e),v=i.canStart,m=i.onWillStart,p=i.onStart,h=i.onEnd,y=i.notCaptured,X=i.onMove,Y=i.threshold,g=i.passive,b=i.blurOnStart,_={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},f=((e,t,r)=>{const n=r*(Math.PI/180),s="x"===e,o=Math.cos(n),a=t*t;let c=0,i=0,u=!1,l=0;return{start(e,t){c=e,i=t,l=0,u=!0},detect(e,t){if(!u)return!1;const r=e-c,n=t-i,d=r*r+n*n;if(d<a)return!1;const v=Math.sqrt(d),m=(s?r:n)/v;return l=m>o?1:m<-o?-1:0,u=!1,!0},isGesture:()=>0!==l,getDirection:()=>l}})(i.direction,i.threshold,i.maxAngle),T=n.G.createGesture({name:e.gestureName,priority:e.gesturePriority,disableScroll:e.disableScroll}),E=()=>{t&&(a=!1,X&&X(_))},S=()=>!!T.capture()&&(t=!0,o=!1,_.startX=_.currentX,_.startY=_.currentY,_.startTime=_.currentTime,m?m(_).then(L):L(),!0),L=()=>{b&&(()=>{if("undefined"!==typeof document){const e=document.activeElement;(null===e||void 0===e?void 0:e.blur)&&e.blur()}})(),p&&p(_),o=!0},w=()=>{t=!1,r=!1,a=!1,o=!0,T.release()},G=e=>{const r=t,n=o;w(),n&&(u(_,e),r?h&&h(_):y&&y(_))},C=((e,t,r,n,o)=>{let a,i,u,l,d,v,m,p=0;const h=n=>{p=Date.now()+2e3,t(n)&&(!i&&r&&(i=s(e,"touchmove",r,o)),u||(u=s(n.target,"touchend",X,o)),l||(l=s(n.target,"touchcancel",X,o)))},y=n=>{p>Date.now()||t(n)&&(!v&&r&&(v=s(c(e),"mousemove",r,o)),m||(m=s(c(e),"mouseup",Y,o)))},X=e=>{g(),n&&n(e)},Y=e=>{b(),n&&n(e)},g=()=>{i&&i(),u&&u(),l&&l(),i=u=l=void 0},b=()=>{v&&v(),m&&m(),v=m=void 0},_=()=>{g(),b()},f=function(){arguments.length>0&&void 0!==arguments[0]&&!arguments[0]?(a&&a(),d&&d(),a=d=void 0,_()):(a||(a=s(e,"touchstart",h,o)),d||(d=s(e,"mousedown",y,o)))};return{enable:f,stop:_,destroy:()=>{f(!1),n=r=t=void 0}}})(i.el,(e=>{const t=d(e);return!(r||!o)&&(l(e,_),_.startX=_.currentX,_.startY=_.currentY,_.startTime=_.currentTime=t,_.velocityX=_.velocityY=_.deltaX=_.deltaY=0,_.event=e,(!v||!1!==v(_))&&(T.release(),!!T.start()&&(r=!0,0===Y?S():(f.start(_.startX,_.startY),!0))))}),(e=>{t?!a&&o&&(a=!0,u(_,e),requestAnimationFrame(E)):(u(_,e),f.detect(_.currentX,_.currentY)&&(f.isGesture()&&S()||D()))}),G,{capture:!1,passive:g}),D=()=>{w(),C.stop(),y&&y(_)};return{enable(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e||(t&&G(void 0),w()),C.enable(e)},destroy(){T.destroy(),C.destroy()}}},u=(e,t)=>{if(!t)return;const r=e.currentX,n=e.currentY,s=e.currentTime;l(t,e);const o=e.currentX,a=e.currentY,c=(e.currentTime=d(t))-s;if(c>0&&c<100){const t=(o-r)/c,s=(a-n)/c;e.velocityX=.7*t+.3*e.velocityX,e.velocityY=.7*s+.3*e.velocityY}e.deltaX=o-e.startX,e.deltaY=a-e.startY,e.event=t},l=(e,t)=>{let r=0,n=0;if(e){const t=e.changedTouches;if(t&&t.length>0){const e=t[0];r=e.clientX,n=e.clientY}else void 0!==e.pageX&&(r=e.pageX,n=e.pageY)}t.currentX=r,t.currentY=n},d=e=>e.timeStamp||Date.now()}}]);
//# sourceMappingURL=288.f9eea85c.chunk.js.map