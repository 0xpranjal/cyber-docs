import{u as r,j as e}from"./index-Bh6drHFT.js";const d={title:"Gas Fee Model",description:"undefined"};function n(i){const s={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"gas-fee-model",children:["Gas Fee Model",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gas-fee-model",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(s.p,{children:"To integrate CyberWallet, it's important to understand its gas fee mechanism. There are several ways for CyberWallet to pay gas fees to execute UserOperations:"}),`
`,e.jsxs(s.h2,{id:"with-cyberpaymaster",children:["With CyberPaymaster",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#with-cyberpaymaster",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"deposit-and-spend-gas-on-any-chain",children:["Deposit and Spend Gas on Any Chain",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#deposit-and-spend-gas-on-any-chain",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["We keep a balance for each CyberWallet. Users can ",e.jsx(s.a,{href:"/Users/suv/Dev/cyber-docs/docs/pages/sdk/cyber-account",children:"deposit"})," native tokens to our deposit smart contract on any chain. Once the deposit event is indexed, we convert the deposited tokens into US dollars based on the current exchange rate of the native token on the block, and add the resulting amount to the balance of the CyberWallet. Developers can get the credit balance by calling the ",e.jsx(s.a,{href:"/api-reference/paymaster/cc_getUserCredit",children:e.jsx(s.code,{children:"cc_getUserCredit"})})," API."]}),`
`,e.jsx(s.p,{children:"When the CyberWallet executes a UserOperation, the gas fee is deducted from the balance of the CyberWallet. If the balance is insufficient, the UserOperation will be rejected."}),`
`,e.jsxs(s.h4,{id:"deposit-contracts",children:["Deposit Contracts",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#deposit-contracts",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Testnet"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:"0xcd97405Fb58e94954E825E46dB192b916A45d412"})})})}),`
`,e.jsx(s.p,{children:"Mainnet"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:"0xcd97405Fb58e94954E825E46dB192b916A45d412"})})})}),`
`,e.jsx(s.p,{children:"ABI"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"["})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  {"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "inputs"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": [{ "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'"internalType"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"address"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'"name"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"to"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'"type"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"address"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" }],"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "name"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"depositTo"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "outputs"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": [],"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "stateMutability"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"payable"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "type"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"function"'})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  }"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})})]})}),`
`,e.jsx(s.p,{children:"Method"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"depositTo"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"address"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" to)"})]})})}),`
`,e.jsx(s.p,{children:"Params"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"name"}),e.jsx(s.th,{children:"type"}),e.jsx(s.th,{children:"description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"to"})}),e.jsx(s.td,{children:"address"}),e.jsx(s.td,{children:"the address of the CyberWallet"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"msg.value"})}),e.jsx(s.td,{children:"uint256"}),e.jsx(s.td,{children:"the amount of native tokens to deposit"})]})]})]}),`
`,e.jsxs(s.h3,{id:"project-gas-fee-sponsorship",children:["Project Gas Fee Sponsorship",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#project-gas-fee-sponsorship",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"We also provide a service for projects to sponsor the gas fee for users. Contact us and provide your preferred sponsor rules. We will help you sponsor the gas fee for users and send the gas bill at the end of each month."}),`
`,e.jsxs(s.h2,{id:"without-cyberpaymaster",children:["Without CyberPaymaster",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#without-cyberpaymaster",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Users can directly send native tokens to the CyberWallet address. The native token can be used to pay the gas fee for UserOperations if ",e.jsx(s.code,{children:"paymasterAndData"})," is not set in the UserOperation."]})]})}function t(i={}){const{wrapper:s}={...r(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(n,{...i})}):n(i)}export{t as default,d as frontmatter};