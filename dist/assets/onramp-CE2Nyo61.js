import{w as te,u as re,D as X,B as M,F as Y,e as A,c as ie,A as $,G as se,y as oe,z as ne,i as R,a as y,x as c,H as N,I as C,O as U,M as _,t as ae,f as J,W as Z,R as E,d as V,b as q,k as ce,S as z,T as le}from"./index-swGNPJLU.js";import{n as p,c as g,o as h,r as d}from"./if-defined-CRi6k9-j.js";import{D as ue,T as de}from"./index-Cj0HFNQM.js";import"./index-BctiuaKB.js";import"./index-cZG3lKlt.js";import"./index-CDaosH6N.js";import"./index-Dse_RsSd.js";import{O as K}from"./index-CmC_CqeW.js";import"./index-EzeJtnQY.js";import"./index-Z74sVc1N.js";import"./index-BDjEv3Lq.js";import"./index-BWk8qsnt.js";import"./index-C1URZkTx.js";import"./index-gIs9Va1o.js";import"./ref-1w7Ramvx.js";import"./ConstantsUtil-Dmg8YACJ.js";const j={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},F={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},pe={providers:X,selectedProvider:null,error:null,purchaseCurrency:j,paymentCurrency:F,purchaseCurrencies:[j],paymentCurrencies:[],quotesLoading:!1},u=re(pe),me={state:u,subscribe(i){return ne(u,()=>i(u))},subscribeKey(i,e){return oe(u,i,e)},setSelectedProvider(i){if(i&&i.name==="meld"){const e=A.state.activeChain===ie.CHAIN.SOLANA?"SOL":"USDC",t=$.state.address??"",s=new URL(i.url);s.searchParams.append("publicKey",se),s.searchParams.append("destinationCurrencyCode",e),s.searchParams.append("walletAddress",t),i.url=s.toString()}u.selectedProvider=i},setPurchaseCurrency(i){u.purchaseCurrency=i},setPaymentCurrency(i){u.paymentCurrency=i},setPurchaseAmount(i){l.state.purchaseAmount=i},setPaymentAmount(i){l.state.paymentAmount=i},async getAvailableCurrencies(){const i=await M.getOnrampOptions();u.purchaseCurrencies=i.purchaseCurrencies,u.paymentCurrencies=i.paymentCurrencies,u.paymentCurrency=i.paymentCurrencies[0]||F,u.purchaseCurrency=i.purchaseCurrencies[0]||j,await Y.fetchCurrencyImages(i.paymentCurrencies.map(e=>e.id)),await Y.fetchTokenImages(i.purchaseCurrencies.map(e=>e.symbol))},async getQuote(){u.quotesLoading=!0;try{const i=await M.getOnrampQuote({purchaseCurrency:u.purchaseCurrency,paymentCurrency:u.paymentCurrency,amount:u.paymentAmount?.toString()||"0",network:u.purchaseCurrency?.symbol});return u.quotesLoading=!1,u.purchaseAmount=Number(i?.purchaseAmount.amount),i}catch(i){return u.error=i.message,u.quotesLoading=!1,null}finally{u.quotesLoading=!1}},resetState(){u.providers=X,u.selectedProvider=null,u.error=null,u.purchaseCurrency=j,u.paymentCurrency=F,u.purchaseCurrencies=[j],u.paymentCurrencies=[],u.paymentAmount=void 0,u.purchaseAmount=void 0,u.quotesLoading=!1}},l=te(me),he=R`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;var w=function(i,e,t,s){var o=arguments.length,r=o<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,s);else for(var a=i.length-1;a>=0;a--)(n=i[a])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let m=class extends y{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="Bought",this.purchaseValue="",this.purchaseCurrency="",this.date="",this.completed=!1,this.inProgress=!1,this.failed=!1,this.onClick=null,this.symbol=""}firstUpdated(){this.icon||this.fetchTokenImage()}render(){return c`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?c`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:c`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}async fetchTokenImage(){await Y._fetchTokenImage(this.purchaseCurrency)}statusIconTemplate(){return this.inProgress?null:this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return c`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){const e=this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;return c`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return c`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};m.styles=[he];w([p({type:Boolean})],m.prototype,"disabled",void 0);w([p()],m.prototype,"color",void 0);w([p()],m.prototype,"label",void 0);w([p()],m.prototype,"purchaseValue",void 0);w([p()],m.prototype,"purchaseCurrency",void 0);w([p()],m.prototype,"date",void 0);w([p({type:Boolean})],m.prototype,"completed",void 0);w([p({type:Boolean})],m.prototype,"inProgress",void 0);w([p({type:Boolean})],m.prototype,"failed",void 0);w([p()],m.prototype,"onClick",void 0);w([p()],m.prototype,"symbol",void 0);w([p()],m.prototype,"icon",void 0);m=w([g("w3m-onramp-activity-item")],m);const fe=R`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`;var L=function(i,e,t,s){var o=arguments.length,r=o<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,s);else for(var a=i.length-1;a>=0;a--)(n=i[a])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const we=7;let O=class extends y{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=l.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=N.state.coinbaseTransactions,this.tokenImages=C.state.tokenImages,this.unsubscribe.push(l.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e}),C.subscribeKey("tokenImages",e=>this.tokenImages=e),()=>{clearTimeout(this.refetchTimeout)},N.subscribe(e=>{this.coinbaseTransactions={...e.coinbaseTransactions}})),N.clearCursor(),this.fetchTransactions()}render(){return c`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e?.map(t=>{const s=ue.formatDate(t?.metadata?.minedAt),o=t.transfers[0],r=o?.fungible_info;if(!r)return null;const n=r?.icon?.url||this.tokenImages?.[r.symbol||""];return c`
        <w3m-onramp-activity-item
          label="Bought"
          .completed=${t.metadata.status==="ONRAMP_TRANSACTION_STATUS_SUCCESS"}
          .inProgress=${t.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"}
          .failed=${t.metadata.status==="ONRAMP_TRANSACTION_STATUS_FAILED"}
          purchaseCurrency=${h(r.symbol)}
          purchaseValue=${o.quantity.numeric}
          date=${s}
          icon=${h(n)}
          symbol=${h(r.symbol)}
        ></w3m-onramp-activity-item>
      `})}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map(t=>{const s=parseInt(t,10);return new Array(12).fill(null).map((r,n)=>n).reverse().map(r=>{const n=de.getTransactionGroupTitle(s,r),a=this.coinbaseTransactions[s]?.[r];return a?c`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${n}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(a)}
            </wui-flex>
          </wui-flex>
        `:null})})}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){const e=$.state.address,t=U.state.projectId;if(!e)throw new Error("No address found");if(!t)throw new Error("No projectId found");this.loading=!0,await N.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){const e=new Date;if((this.coinbaseTransactions[e.getFullYear()]?.[e.getMonth()]||[]).filter(o=>o.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS").length===0){clearTimeout(this.refetchTimeout);return}this.refetchTimeout=setTimeout(async()=>{const o=$.state.address;await N.fetchTransactions(o,"coinbase"),this.refetchLoadingTransactions()},3e3)}templateLoading(){return Array(we).fill(c` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}};O.styles=fe;L([d()],O.prototype,"selectedOnRampProvider",void 0);L([d()],O.prototype,"loading",void 0);L([d()],O.prototype,"coinbaseTransactions",void 0);L([d()],O.prototype,"tokenImages",void 0);O=L([g("w3m-onramp-activity-view")],O);const ye=R`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var B=function(i,e,t,s){var o=arguments.length,r=o<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,s);else for(var a=i.length-1;a>=0;a--)(n=i[a])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let k=class extends y{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=l.state.paymentCurrency,this.currencies=l.state.paymentCurrencies,this.currencyImages=C.state.currencyImages,this.checked=K.state.isLegalCheckboxChecked,this.unsubscribe.push(l.subscribe(e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies}),C.subscribeKey("currencyImages",e=>this.currencyImages=e),K.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=U.state,s=U.state.features?.legalCheckbox,n=!!(e||t)&&!!s&&!this.checked;return c`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","s","s"]}
        gap="xs"
        class=${h(n?"disabled":void 0)}
      >
        ${this.currenciesTemplate(n)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(e=!1){return this.currencies.map(t=>c`
        <wui-list-item
          imageSrc=${h(this.currencyImages?.[t.id])}
          @click=${()=>this.selectCurrency(t)}
          variant="image"
          tabIdx=${h(e?-1:void 0)}
        >
          <wui-text variant="paragraph-500" color="fg-100">${t.id}</wui-text>
        </wui-list-item>
      `)}selectCurrency(e){e&&(l.setPaymentCurrency(e),_.close())}};k.styles=ye;B([d()],k.prototype,"selectedCurrency",void 0);B([d()],k.prototype,"currencies",void 0);B([d()],k.prototype,"currencyImages",void 0);B([d()],k.prototype,"checked",void 0);k=B([g("w3m-onramp-fiat-select-view")],k);const ge=R`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    border: none;
    outline: none;
    background-color: var(--wui-color-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var I=function(i,e,t,s){var o=arguments.length,r=o<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,s);else for(var a=i.length-1;a>=0;a--)(n=i[a])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let v=class extends y{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return c`
      <button ?disabled=${this.disabled} @click=${this.onClick} ontouchstart>
        <wui-visual name=${h(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?c`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:c`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){const t=A.getAllRequestedCaipNetworks()?.filter(s=>s?.assets?.imageId)?.slice(0,5);return c`
      <wui-flex class="networks">
        ${t?.map(s=>c`
            <wui-flex class="network-icon">
              <wui-image src=${h(ae.getNetworkImage(s))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};v.styles=[ge];I([p({type:Boolean})],v.prototype,"disabled",void 0);I([p()],v.prototype,"color",void 0);I([p()],v.prototype,"name",void 0);I([p()],v.prototype,"label",void 0);I([p()],v.prototype,"feeRange",void 0);I([p({type:Boolean})],v.prototype,"loading",void 0);I([p()],v.prototype,"onClick",void 0);v=I([g("w3m-onramp-provider-item")],v);const be=R`
  wui-flex {
    border-top: 1px solid var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;var ve=function(i,e,t,s){var o=arguments.length,r=o<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,s);else for(var a=i.length-1;a>=0;a--)(n=i[a])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let H=class extends y{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=U.state;return!e&&!t?null:c`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `}howDoesItWorkTemplate(){return c` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){const e=A.state.activeChain;J.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:$.state.preferredAccountTypes?.[e]===Z.ACCOUNT_TYPES.SMART_ACCOUNT}}),E.push("WhatIsABuy")}};H.styles=[be];H=ve([g("w3m-onramp-providers-footer")],H);var ee=function(i,e,t,s){var o=arguments.length,r=o<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,s);else for(var a=i.length-1;a>=0;a--)(n=i[a])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let G=class extends y{constructor(){super(),this.unsubscribe=[],this.providers=l.state.providers,this.unsubscribe.push(l.subscribeKey("providers",e=>{this.providers=e}))}firstUpdated(){const e=this.providers.map(async t=>t.name==="coinbase"?await this.getCoinbaseOnRampURL():Promise.resolve(t?.url));Promise.all(e).then(t=>{this.providers=this.providers.map((s,o)=>({...s,url:t[o]||""}))})}render(){return c`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.filter(e=>e.supportedChains.includes(A.state.activeChain??"eip155")).map(e=>c`
          <w3m-onramp-provider-item
            label=${e.label}
            name=${e.name}
            feeRange=${e.feeRange}
            @click=${()=>{this.onClickProvider(e)}}
            ?disabled=${!e.url}
          ></w3m-onramp-provider-item>
        `)}onClickProvider(e){const t=A.state.activeChain;l.setSelectedProvider(e),E.push("BuyInProgress"),V.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes"),J.sendEvent({type:"track",event:"SELECT_BUY_PROVIDER",properties:{provider:e.name,isSmartAccount:$.state.preferredAccountTypes?.[t]===Z.ACCOUNT_TYPES.SMART_ACCOUNT}})}async getCoinbaseOnRampURL(){const e=$.state.address,t=A.state.activeCaipNetwork;if(!e)throw new Error("No address found");if(!t?.name)throw new Error("No network found");const s=q.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[t.name]??q.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,o=l.state.purchaseCurrency,r=o?[o.symbol]:l.state.purchaseCurrencies.map(n=>n.symbol);return await M.generateOnRampURL({defaultNetwork:s,destinationWallets:[{address:e,blockchains:q.WC_COINBASE_PAY_SDK_CHAINS,assets:r}],partnerUserId:e,purchaseAmount:l.state.purchaseAmount})}};ee([d()],G.prototype,"providers",void 0);G=ee([g("w3m-onramp-providers-view")],G);const xe=R`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var W=function(i,e,t,s){var o=arguments.length,r=o<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,s);else for(var a=i.length-1;a>=0;a--)(n=i[a])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let S=class extends y{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=l.state.purchaseCurrencies,this.tokens=l.state.purchaseCurrencies,this.tokenImages=C.state.tokenImages,this.checked=K.state.isLegalCheckboxChecked,this.unsubscribe.push(l.subscribe(e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies}),C.subscribeKey("tokenImages",e=>this.tokenImages=e),K.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=U.state,s=U.state.features?.legalCheckbox,n=!!(e||t)&&!!s&&!this.checked;return c`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","s","s"]}
        gap="xs"
        class=${h(n?"disabled":void 0)}
      >
        ${this.currenciesTemplate(n)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(e=!1){return this.tokens.map(t=>c`
        <wui-list-item
          imageSrc=${h(this.tokenImages?.[t.symbol])}
          @click=${()=>this.selectToken(t)}
          variant="image"
          tabIdx=${h(e?-1:void 0)}
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${t.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${t.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `)}selectToken(e){e&&(l.setPurchaseCurrency(e),_.close())}};S.styles=xe;W([d()],S.prototype,"selectedCurrency",void 0);W([d()],S.prototype,"tokens",void 0);W([d()],S.prototype,"tokenImages",void 0);W([d()],S.prototype,"checked",void 0);S=W([g("w3m-onramp-token-select-view")],S);const Ce=R`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`;var b=function(i,e,t,s){var o=arguments.length,r=o<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,s);else for(var a=i.length-1;a>=0;a--)(n=i[a])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let f=class extends y{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=l.state.selectedProvider,this.uri=ce.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(l.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e})),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${this.selectedOnRampProvider?.label}`);const t=this.error?"Buy can be declined from your side or due to and error on the provider app":"We’ll notify you once your Buy is processed";return c`
      <wui-flex
        data-error=${h(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${h(this.selectedOnRampProvider?.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){if(this.selectedOnRampProvider)switch(this.selectedOnRampProvider.name){case"coinbase":this.startTime=Date.now(),this.initializeCoinbaseTransactions();break}}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions(),this.intervalId=setInterval(()=>this.watchCoinbaseTransactions(),4e3)}async watchCoinbaseTransactions(){try{const e=$.state.address;if(!e)throw new Error("No address found");(await M.fetchTransactions({account:e,onramp:"coinbase"})).data.filter(o=>new Date(o.metadata.minedAt)>new Date(this.startTime)||o.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS").length?(clearInterval(this.intervalId),E.replace("OnRampActivity")):this.startTime&&Date.now()-this.startTime>=18e4&&(clearInterval(this.intervalId),this.error=!0)}catch(e){z.showError(e)}}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,V.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){return this.selectedOnRampProvider?.url?c`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){const e=le.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return c`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}onCopyUri(){if(!this.selectedOnRampProvider?.url){z.showError("No link found"),E.goBack();return}try{V.copyToClopboard(this.selectedOnRampProvider.url),z.showSuccess("Link copied")}catch{z.showError("Failed to copy")}}};f.styles=Ce;b([d()],f.prototype,"intervalId",void 0);b([d()],f.prototype,"selectedOnRampProvider",void 0);b([d()],f.prototype,"uri",void 0);b([d()],f.prototype,"ready",void 0);b([d()],f.prototype,"showRetry",void 0);b([d()],f.prototype,"buffering",void 0);b([d()],f.prototype,"error",void 0);b([d()],f.prototype,"startTime",void 0);b([p({type:Boolean})],f.prototype,"isMobile",void 0);b([p()],f.prototype,"onRetry",void 0);f=b([g("w3m-buy-in-progress-view")],f);var Te=function(i,e,t,s){var o=arguments.length,r=o<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,s);else for(var a=i.length-1;a>=0;a--)(n=i[a])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Q=class extends y{render(){return c`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${E.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};Q=Te([g("w3m-what-is-a-buy-view")],Q);const Re=R`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var D=function(i,e,t,s){var o=arguments.length,r=o<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,s);else for(var a=i.length-1;a>=0;a--)(n=i[a])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let T=class extends y{constructor(){super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=this.currencies?.[0],this.currencyImages=C.state.currencyImages,this.tokenImages=C.state.tokenImages,this.unsubscribe.push(l.subscribeKey("purchaseCurrency",e=>{!e||this.type==="Fiat"||(this.selectedCurrency=this.formatPurchaseCurrency(e))}),l.subscribeKey("paymentCurrency",e=>{!e||this.type==="Token"||(this.selectedCurrency=this.formatPaymentCurrency(e))}),l.subscribe(e=>{this.type==="Fiat"?this.currencies=e.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=e.paymentCurrencies.map(this.formatPaymentCurrency)}),C.subscribe(e=>{this.currencyImages={...e.currencyImages},this.tokenImages={...e.tokenImages}}))}firstUpdated(){l.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.selectedCurrency?.symbol||"",t=this.currencyImages[e]||this.tokenImages[e];return c`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?c` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>_.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${h(t)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:c`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};T.styles=Re;D([p({type:String})],T.prototype,"type",void 0);D([p({type:Number})],T.prototype,"value",void 0);D([d()],T.prototype,"currencies",void 0);D([d()],T.prototype,"selectedCurrency",void 0);D([d()],T.prototype,"currencyImages",void 0);D([d()],T.prototype,"tokenImages",void 0);T=D([g("w3m-onramp-input")],T);const Ae=R`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var P=function(i,e,t,s){var o=arguments.length,r=o<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,s);else for(var a=i.length-1;a>=0;a--)(n=i[a])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const Ie={USD:"$",EUR:"€",GBP:"£"},Pe=[100,250,500,1e3];let x=class extends y{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.caipAddress=A.state.activeCaipAddress,this.loading=_.state.loading,this.paymentCurrency=l.state.paymentCurrency,this.paymentAmount=l.state.paymentAmount,this.purchaseAmount=l.state.purchaseAmount,this.quoteLoading=l.state.quotesLoading,this.unsubscribe.push(A.subscribeKey("activeCaipAddress",e=>this.caipAddress=e),_.subscribeKey("loading",e=>{this.loading=e}),l.subscribe(e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return c`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${Pe.map(e=>c`<wui-button
                  variant=${this.paymentAmount===e?"accent":"neutral"}
                  size="md"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${Ie[this.paymentCurrency?.id||"USD"]} ${e}`}</wui-button
                >`)}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.caipAddress?c`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="main"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:c`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||_.open({view:"OnRampProviders"})}openModal(){_.open({view:"Connect"})}async onPaymentAmountChange(e){l.setPaymentAmount(Number(e.detail)),await l.getQuote()}async selectPresetAmount(e){l.setPaymentAmount(e),await l.getQuote()}};x.styles=Ae;P([p({type:Boolean})],x.prototype,"disabled",void 0);P([d()],x.prototype,"caipAddress",void 0);P([d()],x.prototype,"loading",void 0);P([d()],x.prototype,"paymentCurrency",void 0);P([d()],x.prototype,"paymentAmount",void 0);P([d()],x.prototype,"purchaseAmount",void 0);P([d()],x.prototype,"quoteLoading",void 0);x=P([g("w3m-onramp-widget")],x);export{f as W3mBuyInProgressView,O as W3mOnRampActivityView,G as W3mOnRampProvidersView,k as W3mOnrampFiatSelectView,S as W3mOnrampTokensView,x as W3mOnrampWidget,Q as W3mWhatIsABuyView};
