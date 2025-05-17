const __vite__fileDeps=["assets/add-CFk0DneU.js","assets/index-swGNPJLU.js","assets/index-C-a3QJYN.css","assets/all-wallets-Bb9vxcUg.js","assets/arrow-bottom-circle-CirCAzmC.js","assets/app-store-Bo-KL4pA.js","assets/apple-B4_mInSX.js","assets/arrow-bottom-BGJCqd9w.js","assets/arrow-left-B7laFAus.js","assets/arrow-right-_k9X6atE.js","assets/arrow-top-BrnraBj7.js","assets/bank-C-2jHF4v.js","assets/browser-BQ7GYIjB.js","assets/card-Bwh9HNPi.js","assets/checkmark-By31MInZ.js","assets/checkmark-bold-BNatNo9-.js","assets/chevron-bottom-CvdR-PFH.js","assets/chevron-left-Cd4bynMr.js","assets/chevron-right-CX9EPYcw.js","assets/chevron-top-CL4Yz9Az.js","assets/chrome-store-DBjNnpe3.js","assets/clock-Y6YRvVcq.js","assets/close-BJRbmAi6.js","assets/compass-syyDIFgz.js","assets/coinPlaceholder-Duji0GJ2.js","assets/copy-CiArHF03.js","assets/cursor-DAth6yoR.js","assets/cursor-transparent-CaLewLsC.js","assets/desktop-D9TDbgW1.js","assets/disconnect-Cf97Mzin.js","assets/discord-QOJORCCF.js","assets/etherscan-NRlZMG3G.js","assets/extension-BfNnF44i.js","assets/external-link-hfRdgckR.js","assets/facebook-c3aCRhm0.js","assets/farcaster-zY8RTza4.js","assets/filters-DZbxHX7r.js","assets/github-DsZJ0CY6.js","assets/google-D6zzc3Jh.js","assets/help-circle-BuoJfDUx.js","assets/image-Bt10yZ85.js","assets/id-CdHKfFvG.js","assets/info-circle-Chk9djEP.js","assets/lightbulb-C34ya8gs.js","assets/mail-Ch-WWRQA.js","assets/mobile-C4NZTsfO.js","assets/more-CcnaRCZ-.js","assets/network-placeholder-CrErbOgd.js","assets/nftPlaceholder-CNe9dM5Z.js","assets/off-DuNbDX3-.js","assets/play-store-Cg_yeeHq.js","assets/plus-BD63iV1s.js","assets/qr-code-aU5YzCB9.js","assets/recycle-horizontal-BMLzISTG.js","assets/refresh-DWE6nVdr.js","assets/search-B_0pvjCw.js","assets/send-1T92lg3a.js","assets/swapHorizontal-pxhYQAc5.js","assets/swapHorizontalMedium-DQl5-Yje.js","assets/swapHorizontalBold-l1V62UVo.js","assets/swapHorizontalRoundedBold-BC2DhZgI.js","assets/swapVertical-cIj0Lnmx.js","assets/telegram-BltwVKEq.js","assets/three-dots-Dz8SziBR.js","assets/twitch-GQ2zUBqW.js","assets/x-qkKkYbnC.js","assets/twitterIcon-DSlz3nvf.js","assets/verify-ChKH9dI2.js","assets/verify-filled-BWaPTQiJ.js","assets/wallet-CfuJKZwy.js","assets/walletconnect-wAsMoDGS.js","assets/wallet-placeholder-DNA0f6hI.js","assets/warning-circle-DMo5AZFO.js","assets/info-uKN453U6.js","assets/exclamation-triangle-Bw42USRl.js","assets/reown-logo-BjpLgkNn.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a0 as k,a1 as B,a2 as T,i as P,r as R,L as j,a as L,x as E,a3 as o,Y as M}from"./index-swGNPJLU.js";const h={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){try{return new URL(t).hostname}catch{return""}},getTruncateString({string:t,charsStart:e,charsEnd:i,truncate:r}){return t.length<=e+i?t:r==="end"?`${t.substring(0,e)}...`:r==="start"?`...${t.substring(t.length-i)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(i))}`},generateAvatarColors(t){const i=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),r=this.hexToRgb(i),n=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),c=100-3*Number(n?.replace("px","")),s=`${c}% ${c}% at 65% 40%`,_=[];for(let v=0;v<5;v+=1){const p=this.tintColor(r,.15*v);_.push(`rgb(${p[0]}, ${p[1]}, ${p[2]})`)}return`
    --local-color-1: ${_[0]};
    --local-color-2: ${_[1]};
    --local-color-3: ${_[2]};
    --local-color-4: ${_[3]};
    --local-color-5: ${_[4]};
    --local-radial-circle: ${s}
   `},hexToRgb(t){const e=parseInt(t,16),i=e>>16&255,r=e>>8&255,n=e&255;return[i,r,n]},tintColor(t,e){const[i,r,n]=t,a=Math.round(i+(255-i)*e),c=Math.round(r+(255-r)*e),s=Math.round(n+(255-n)*e);return[a,c,s]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){return t||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)")?.matches?"dark":"light":"dark")},splitBalance(t){const e=t.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(t,e,i){return t.toString().length>=e?Number(t).toFixed(i):t},formatNumberToLocalString(t,e=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}};function U(t,e){const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(n){customElements.get(t)||customElements.define(t,n)}}}function H(t,e){return customElements.get(t)||customElements.define(t,e),e}function I(t){return function(i){return typeof i=="function"?H(t,i):U(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:k},G=(t=F,e,i)=>{const{kind:r,metadata:n}=i;let a=globalThis.litPropertyMetadata.get(n);if(a===void 0&&globalThis.litPropertyMetadata.set(n,a=new Map),r==="setter"&&((t=Object.create(t)).wrapped=!0),a.set(i.name,t),r==="accessor"){const{name:c}=i;return{set(s){const _=e.get.call(this);e.set.call(this,s),this.requestUpdate(c,_,t)},init(s){return s!==void 0&&this.C(c,void 0,t,s),s}}}if(r==="setter"){const{name:c}=i;return function(s){const _=this[c];e.call(this,s),this.requestUpdate(c,_,t)}}throw Error("Unsupported decorator location: "+r)};function l(t){return(e,i)=>typeof i=="object"?G(t,e,i):((r,n,a)=>{const c=n.hasOwnProperty(a);return n.constructor.createProperty(a,r),c?Object.getOwnPropertyDescriptor(n,a):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ct(t){return l({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=t=>t===null||typeof t!="object"&&typeof t!="function",W=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V={ATTRIBUTE:1,CHILD:2},C=t=>(...e)=>({_$litDirective$:t,values:e});let x=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,r){this._$Ct=e,this._$AM=i,this._$Ci=r}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=(t,e)=>{const i=t._$AN;if(i===void 0)return!1;for(const r of i)r._$AO?.(e,!1),f(r,e);return!0},$=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while(i?.size===0)},z=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),K(e)}};function Y(t){this._$AN!==void 0?($(this),this._$AM=t,z(this)):this._$AM=t}function q(t,e=!1,i=0){const r=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(r))for(let a=i;a<r.length;a++)f(r[a],!1),$(r[a]);else r!=null&&(f(r,!1),$(r));else f(this,t)}const K=t=>{t.type==V.CHILD&&(t._$AP??=q,t._$AQ??=Y)};class X extends x{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,r){super._$AT(e,i,r),z(this),this.isConnected=e._$AU}_$AO(e,i=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),i&&(f(this,e),$(this))}setValue(e){if(W(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Z{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class Q{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=t=>!N(t)&&typeof t.then=="function",D=1073741823;class J extends X{constructor(){super(...arguments),this._$Cwt=D,this._$Cbt=[],this._$CK=new Z(this),this._$CX=new Q}render(...e){return e.find(i=>!O(i))??T}update(e,i){const r=this._$Cbt;let n=r.length;this._$Cbt=i;const a=this._$CK,c=this._$CX;this.isConnected||this.disconnected();for(let s=0;s<i.length&&!(s>this._$Cwt);s++){const _=i[s];if(!O(_))return this._$Cwt=s,_;s<n&&_===r[s]||(this._$Cwt=D,n=0,Promise.resolve(_).then(async v=>{for(;c.get();)await c.get();const p=a.deref();if(p!==void 0){const S=p._$Cbt.indexOf(_);S>-1&&S<p._$Cwt&&(p._$Cwt=S,p.setValue(v))}}))}return T}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const tt=C(J);class et{constructor(){this.cache=new Map}set(e,i){this.cache.set(e,i)}get(e){return this.cache.get(e)}has(e){return this.cache.has(e)}delete(e){this.cache.delete(e)}clear(){this.cache.clear()}}const A=new et,it=P`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var m=function(t,e,i,r){var n=arguments.length,a=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(c=t[s])&&(a=(n<3?c(a):n>3?c(e,i,a):c(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};const b={add:async()=>(await o(()=>import("./add-CFk0DneU.js"),__vite__mapDeps([0,1,2]))).addSvg,allWallets:async()=>(await o(()=>import("./all-wallets-Bb9vxcUg.js"),__vite__mapDeps([3,1,2]))).allWalletsSvg,arrowBottomCircle:async()=>(await o(()=>import("./arrow-bottom-circle-CirCAzmC.js"),__vite__mapDeps([4,1,2]))).arrowBottomCircleSvg,appStore:async()=>(await o(()=>import("./app-store-Bo-KL4pA.js"),__vite__mapDeps([5,1,2]))).appStoreSvg,apple:async()=>(await o(()=>import("./apple-B4_mInSX.js"),__vite__mapDeps([6,1,2]))).appleSvg,arrowBottom:async()=>(await o(()=>import("./arrow-bottom-BGJCqd9w.js"),__vite__mapDeps([7,1,2]))).arrowBottomSvg,arrowLeft:async()=>(await o(()=>import("./arrow-left-B7laFAus.js"),__vite__mapDeps([8,1,2]))).arrowLeftSvg,arrowRight:async()=>(await o(()=>import("./arrow-right-_k9X6atE.js"),__vite__mapDeps([9,1,2]))).arrowRightSvg,arrowTop:async()=>(await o(()=>import("./arrow-top-BrnraBj7.js"),__vite__mapDeps([10,1,2]))).arrowTopSvg,bank:async()=>(await o(()=>import("./bank-C-2jHF4v.js"),__vite__mapDeps([11,1,2]))).bankSvg,browser:async()=>(await o(()=>import("./browser-BQ7GYIjB.js"),__vite__mapDeps([12,1,2]))).browserSvg,card:async()=>(await o(()=>import("./card-Bwh9HNPi.js"),__vite__mapDeps([13,1,2]))).cardSvg,checkmark:async()=>(await o(()=>import("./checkmark-By31MInZ.js"),__vite__mapDeps([14,1,2]))).checkmarkSvg,checkmarkBold:async()=>(await o(()=>import("./checkmark-bold-BNatNo9-.js"),__vite__mapDeps([15,1,2]))).checkmarkBoldSvg,chevronBottom:async()=>(await o(()=>import("./chevron-bottom-CvdR-PFH.js"),__vite__mapDeps([16,1,2]))).chevronBottomSvg,chevronLeft:async()=>(await o(()=>import("./chevron-left-Cd4bynMr.js"),__vite__mapDeps([17,1,2]))).chevronLeftSvg,chevronRight:async()=>(await o(()=>import("./chevron-right-CX9EPYcw.js"),__vite__mapDeps([18,1,2]))).chevronRightSvg,chevronTop:async()=>(await o(()=>import("./chevron-top-CL4Yz9Az.js"),__vite__mapDeps([19,1,2]))).chevronTopSvg,chromeStore:async()=>(await o(()=>import("./chrome-store-DBjNnpe3.js"),__vite__mapDeps([20,1,2]))).chromeStoreSvg,clock:async()=>(await o(()=>import("./clock-Y6YRvVcq.js"),__vite__mapDeps([21,1,2]))).clockSvg,close:async()=>(await o(()=>import("./close-BJRbmAi6.js"),__vite__mapDeps([22,1,2]))).closeSvg,compass:async()=>(await o(()=>import("./compass-syyDIFgz.js"),__vite__mapDeps([23,1,2]))).compassSvg,coinPlaceholder:async()=>(await o(()=>import("./coinPlaceholder-Duji0GJ2.js"),__vite__mapDeps([24,1,2]))).coinPlaceholderSvg,copy:async()=>(await o(()=>import("./copy-CiArHF03.js"),__vite__mapDeps([25,1,2]))).copySvg,cursor:async()=>(await o(()=>import("./cursor-DAth6yoR.js"),__vite__mapDeps([26,1,2]))).cursorSvg,cursorTransparent:async()=>(await o(()=>import("./cursor-transparent-CaLewLsC.js"),__vite__mapDeps([27,1,2]))).cursorTransparentSvg,desktop:async()=>(await o(()=>import("./desktop-D9TDbgW1.js"),__vite__mapDeps([28,1,2]))).desktopSvg,disconnect:async()=>(await o(()=>import("./disconnect-Cf97Mzin.js"),__vite__mapDeps([29,1,2]))).disconnectSvg,discord:async()=>(await o(()=>import("./discord-QOJORCCF.js"),__vite__mapDeps([30,1,2]))).discordSvg,etherscan:async()=>(await o(()=>import("./etherscan-NRlZMG3G.js"),__vite__mapDeps([31,1,2]))).etherscanSvg,extension:async()=>(await o(()=>import("./extension-BfNnF44i.js"),__vite__mapDeps([32,1,2]))).extensionSvg,externalLink:async()=>(await o(()=>import("./external-link-hfRdgckR.js"),__vite__mapDeps([33,1,2]))).externalLinkSvg,facebook:async()=>(await o(()=>import("./facebook-c3aCRhm0.js"),__vite__mapDeps([34,1,2]))).facebookSvg,farcaster:async()=>(await o(()=>import("./farcaster-zY8RTza4.js"),__vite__mapDeps([35,1,2]))).farcasterSvg,filters:async()=>(await o(()=>import("./filters-DZbxHX7r.js"),__vite__mapDeps([36,1,2]))).filtersSvg,github:async()=>(await o(()=>import("./github-DsZJ0CY6.js"),__vite__mapDeps([37,1,2]))).githubSvg,google:async()=>(await o(()=>import("./google-D6zzc3Jh.js"),__vite__mapDeps([38,1,2]))).googleSvg,helpCircle:async()=>(await o(()=>import("./help-circle-BuoJfDUx.js"),__vite__mapDeps([39,1,2]))).helpCircleSvg,image:async()=>(await o(()=>import("./image-Bt10yZ85.js"),__vite__mapDeps([40,1,2]))).imageSvg,id:async()=>(await o(()=>import("./id-CdHKfFvG.js"),__vite__mapDeps([41,1,2]))).idSvg,infoCircle:async()=>(await o(()=>import("./info-circle-Chk9djEP.js"),__vite__mapDeps([42,1,2]))).infoCircleSvg,lightbulb:async()=>(await o(()=>import("./lightbulb-C34ya8gs.js"),__vite__mapDeps([43,1,2]))).lightbulbSvg,mail:async()=>(await o(()=>import("./mail-Ch-WWRQA.js"),__vite__mapDeps([44,1,2]))).mailSvg,mobile:async()=>(await o(()=>import("./mobile-C4NZTsfO.js"),__vite__mapDeps([45,1,2]))).mobileSvg,more:async()=>(await o(()=>import("./more-CcnaRCZ-.js"),__vite__mapDeps([46,1,2]))).moreSvg,networkPlaceholder:async()=>(await o(()=>import("./network-placeholder-CrErbOgd.js"),__vite__mapDeps([47,1,2]))).networkPlaceholderSvg,nftPlaceholder:async()=>(await o(()=>import("./nftPlaceholder-CNe9dM5Z.js"),__vite__mapDeps([48,1,2]))).nftPlaceholderSvg,off:async()=>(await o(()=>import("./off-DuNbDX3-.js"),__vite__mapDeps([49,1,2]))).offSvg,playStore:async()=>(await o(()=>import("./play-store-Cg_yeeHq.js"),__vite__mapDeps([50,1,2]))).playStoreSvg,plus:async()=>(await o(()=>import("./plus-BD63iV1s.js"),__vite__mapDeps([51,1,2]))).plusSvg,qrCode:async()=>(await o(()=>import("./qr-code-aU5YzCB9.js"),__vite__mapDeps([52,1,2]))).qrCodeIcon,recycleHorizontal:async()=>(await o(()=>import("./recycle-horizontal-BMLzISTG.js"),__vite__mapDeps([53,1,2]))).recycleHorizontalSvg,refresh:async()=>(await o(()=>import("./refresh-DWE6nVdr.js"),__vite__mapDeps([54,1,2]))).refreshSvg,search:async()=>(await o(()=>import("./search-B_0pvjCw.js"),__vite__mapDeps([55,1,2]))).searchSvg,send:async()=>(await o(()=>import("./send-1T92lg3a.js"),__vite__mapDeps([56,1,2]))).sendSvg,swapHorizontal:async()=>(await o(()=>import("./swapHorizontal-pxhYQAc5.js"),__vite__mapDeps([57,1,2]))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await o(()=>import("./swapHorizontalMedium-DQl5-Yje.js"),__vite__mapDeps([58,1,2]))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await o(()=>import("./swapHorizontalBold-l1V62UVo.js"),__vite__mapDeps([59,1,2]))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await o(()=>import("./swapHorizontalRoundedBold-BC2DhZgI.js"),__vite__mapDeps([60,1,2]))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await o(()=>import("./swapVertical-cIj0Lnmx.js"),__vite__mapDeps([61,1,2]))).swapVerticalSvg,telegram:async()=>(await o(()=>import("./telegram-BltwVKEq.js"),__vite__mapDeps([62,1,2]))).telegramSvg,threeDots:async()=>(await o(()=>import("./three-dots-Dz8SziBR.js"),__vite__mapDeps([63,1,2]))).threeDotsSvg,twitch:async()=>(await o(()=>import("./twitch-GQ2zUBqW.js"),__vite__mapDeps([64,1,2]))).twitchSvg,twitter:async()=>(await o(()=>import("./x-qkKkYbnC.js"),__vite__mapDeps([65,1,2]))).xSvg,twitterIcon:async()=>(await o(()=>import("./twitterIcon-DSlz3nvf.js"),__vite__mapDeps([66,1,2]))).twitterIconSvg,verify:async()=>(await o(()=>import("./verify-ChKH9dI2.js"),__vite__mapDeps([67,1,2]))).verifySvg,verifyFilled:async()=>(await o(()=>import("./verify-filled-BWaPTQiJ.js"),__vite__mapDeps([68,1,2]))).verifyFilledSvg,wallet:async()=>(await o(()=>import("./wallet-CfuJKZwy.js"),__vite__mapDeps([69,1,2]))).walletSvg,walletConnect:async()=>(await o(()=>import("./walletconnect-wAsMoDGS.js"),__vite__mapDeps([70,1,2]))).walletConnectSvg,walletConnectLightBrown:async()=>(await o(()=>import("./walletconnect-wAsMoDGS.js"),__vite__mapDeps([70,1,2]))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await o(()=>import("./walletconnect-wAsMoDGS.js"),__vite__mapDeps([70,1,2]))).walletConnectBrownSvg,walletPlaceholder:async()=>(await o(()=>import("./wallet-placeholder-DNA0f6hI.js"),__vite__mapDeps([71,1,2]))).walletPlaceholderSvg,warningCircle:async()=>(await o(()=>import("./warning-circle-DMo5AZFO.js"),__vite__mapDeps([72,1,2]))).warningCircleSvg,x:async()=>(await o(()=>import("./x-qkKkYbnC.js"),__vite__mapDeps([65,1,2]))).xSvg,info:async()=>(await o(()=>import("./info-uKN453U6.js"),__vite__mapDeps([73,1,2]))).infoSvg,exclamationTriangle:async()=>(await o(()=>import("./exclamation-triangle-Bw42USRl.js"),__vite__mapDeps([74,1,2]))).exclamationTriangleSvg,reown:async()=>(await o(()=>import("./reown-logo-BjpLgkNn.js"),__vite__mapDeps([75,1,2]))).reownSvg};async function ot(t){if(A.has(t))return A.get(t);const i=(b[t]??b.copy)();return A.set(t,i),i}let g=class extends L{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,E`${tt(ot(this.name),E`<div class="fallback"></div>`)}`}};g.styles=[R,j,it];m([l()],g.prototype,"size",void 0);m([l()],g.prototype,"name",void 0);m([l()],g.prototype,"color",void 0);m([l()],g.prototype,"aspectRatio",void 0);g=m([I("wui-icon")],g);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=C(class extends x{constructor(t){if(super(t),t.type!==V.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(e)}const i=t.element.classList;for(const r of this.st)r in e||(i.remove(r),this.st.delete(r));for(const r in e){const n=!!e[r];n===this.st.has(r)||this.nt?.has(r)||(n?(i.add(r),this.st.add(r)):(i.remove(r),this.st.delete(r)))}return T}}),at=P`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var y=function(t,e,i,r){var n=arguments.length,a=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(c=t[s])&&(a=(n<3?c(a):n>3?c(e,i,a):c(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let w=class extends L{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,E`<slot class=${rt(e)}></slot>`}};w.styles=[R,at];y([l()],w.prototype,"variant",void 0);y([l()],w.prototype,"color",void 0);y([l()],w.prototype,"align",void 0);y([l()],w.prototype,"lineClamp",void 0);w=y([I("wui-text")],w);const nt=P`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var d=function(t,e,i,r){var n=arguments.length,a=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(c=t[s])&&(a=(n<3?c(a):n>3?c(e,i,a):c(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let u=class extends L{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&h.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&h.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&h.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&h.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&h.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&h.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&h.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&h.getSpacingStyles(this.margin,3)};
    `,E`<slot></slot>`}};u.styles=[R,nt];d([l()],u.prototype,"flexDirection",void 0);d([l()],u.prototype,"flexWrap",void 0);d([l()],u.prototype,"flexBasis",void 0);d([l()],u.prototype,"flexGrow",void 0);d([l()],u.prototype,"flexShrink",void 0);d([l()],u.prototype,"alignItems",void 0);d([l()],u.prototype,"justifyContent",void 0);d([l()],u.prototype,"columnGap",void 0);d([l()],u.prototype,"rowGap",void 0);d([l()],u.prototype,"gap",void 0);d([l()],u.prototype,"padding",void 0);d([l()],u.prototype,"margin",void 0);u=d([I("wui-flex")],u);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=t=>t??M;export{h as U,C as a,I as c,rt as e,X as f,l as n,pt as o,ct as r};
