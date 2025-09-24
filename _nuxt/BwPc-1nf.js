import{_ as U}from"./6ETAZGtE.js";import{_ as R}from"./tiF_snPY.js";import{c as B,O as p,W as I,Q as u,U as t,a2 as y,X as l,L as z,a9 as H,a0 as Y,u as a,a3 as f,a1 as v,a4 as N,w as W,n as G,V as A,b as q,o as K}from"./Co5tMnYY.js";import{_ as k}from"./Bbo0jKgt.js";import{a as O,n as F,b as X,u as J}from"#entry";import{M as Z}from"./nFB53GcW.js";import{u as tt}from"./B7xX6Qq_.js";import{_ as et}from"./DlAUqK2U.js";import"./C7xmkHdv.js";import"./Bvi1VPMX.js";import"./zWPNylOE.js";const ot={class:"mb-6 flex items-center justify-between"},st={class:"flex items-center gap-4"},rt={class:"text-sm text-gray-600 dark:text-gray-300"},at={class:"font-semibold text-gray-900 dark:text-white"},nt={class:"mb-6 overflow-x-auto"},it={class:"w-full border-collapse"},lt={class:"px-4 py-3"},dt={class:"flex flex-col items-center gap-2"},ct={class:"h-16 w-16 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"},ut={class:"text-xs font-medium text-gray-600 dark:text-gray-300"},pt={class:"px-4 py-3 text-center text-sm text-gray-900 dark:text-white"},gt={class:"px-4 py-3 text-right text-sm text-gray-900 dark:text-white"},mt={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},xt={class:"border-t-2 border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"},ft={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},ht={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},bt={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},yt={class:"px-4 py-3 text-right"},vt={class:"text-primary text-lg font-bold"},wt={class:"text-sm font-normal text-gray-600 dark:text-gray-300"},kt={key:0},_t={key:1},Ct={class:"flex gap-3"},$t={__name:"CheckoutDialog",props:{isOpen:{type:Boolean,default:!1},cartItems:{type:Array,default:()=>[]},totalPrice:{type:Number,default:0},shippingCost:{type:Number,default:0}},emits:["close"],setup(g,{emit:r}){const n=g,_=r,w=O(),h=B(()=>n.cartItems.reduce((o,s)=>o+s.quantity,0)),b=B(()=>n.totalPrice-n.shippingCost),$=async()=>{try{let o="";o+=`Order Date: ${new Date().toLocaleDateString()}

`,o+=`Product ID	Quantity	Unit Price	Total
`,n.cartItems.forEach(s=>{const c=s.bag.price*s.quantity;o+=`${s.bag.id}	${s.quantity}	${s.bag.price}	${c}
`}),o+=`
`,o+=`Total Items	${h.value}
`,o+=`Total Price	${n.totalPrice}
`,await navigator.clipboard.writeText(o),typeof window<"u"&&window.$toast&&window.$toast.success("Success","Order details copied to clipboard!"),d()}catch(o){console.error("Failed to copy to clipboard:",o),typeof window<"u"&&window.$toast&&window.$toast.error("Error","Failed to copy to clipboard")}},C=()=>{const o=`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Order Summary</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 20px;
          color: #333;
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        .header h1 {
          color: #2563eb;
          margin-bottom: 10px;
        }
        .order-info {
          margin-bottom: 20px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 12px;
          text-align: left;
        }
        th {
          background-color: #f8f9fa;
          font-weight: bold;
        }
        .total-row {
          background-color: #f8f9fa;
          font-weight: bold;
        }
        .summary {
          margin-top: 20px;
          padding: 15px;
          background-color: #f8f9fa;
          border-radius: 5px;
        }
        @media print {
          body { margin: 0; }
          .no-print { display: none; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Fashionable Handbags</h1>
        <h2>Order Summary</h2>
        <p>Date: ${new Date().toLocaleDateString()}</p>
      </div>
      
      <div class="order-info">
        <p><strong>Total Items:</strong> ${h.value} pieces</p>
        <p><strong>Total Price:</strong> ¥${n.totalPrice.toLocaleString()}</p>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Design</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          ${n.cartItems.map(c=>{const i=c.bag.price*c.quantity;return`
              <tr>
                <td>${c.bag.id}</td>
                <td>${c.quantity} pieces</td>
                <td>¥${c.bag.price}</td>
                <td>¥${i.toLocaleString()}</td>
              </tr>
            `}).join("")}
        </tbody>
        <tfoot>
          <tr class="total-row">
            <td><strong>Total</strong></td>
            <td><strong>${h.value} pieces</strong></td>
            <td></td>
            <td><strong>¥${n.totalPrice.toLocaleString()}</strong></td>
          </tr>
        </tfoot>
      </table>
      
      <div class="summary">
        <h3>Order Summary</h3>
        <p><strong>Total Items:</strong> ${h.value} pieces</p>
        <p><strong>Total Price:</strong> ¥${n.totalPrice.toLocaleString()}</p>
        <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
      </div>
    </body>
    </html>
  `,s=window.open("","_blank");s.document.write(o),s.document.close(),s.focus(),s.print(),s.close()},d=()=>{_("close")};return(o,s)=>{const c=U;return g.isOpen?(u(),p("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center",onClick:d},[s[8]||(s[8]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:s[0]||(s[0]=N(()=>{},["stop"]))},[t("div",ot,[t("div",st,[s[2]||(s[2]=t("h3",{class:"text-2xl font-bold text-gray-900 dark:text-white"}," Order Summary ",-1)),t("div",rt,[s[1]||(s[1]=y(" Order Date: ",-1)),t("span",at,l(new Date().toLocaleDateString()),1)])]),t("button",{onClick:d,class:"cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"},[...s[3]||(s[3]=[t("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),t("div",nt,[t("table",it,[s[4]||(s[4]=t("thead",null,[t("tr",{class:"border-b border-gray-200 dark:border-gray-700"},[t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Design "),t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Quantity "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Unit Price "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Total ")])],-1)),t("tbody",null,[(u(!0),p(z,null,H(g.cartItems,i=>(u(),p("tr",{key:i.bagId,class:"border-b border-gray-100 dark:border-gray-800"},[t("td",lt,[t("div",dt,[t("div",ct,[i.bag.images[0]?(u(),Y(c,{key:0,src:i.bag.images[0].url,alt:i.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:64,height:64,format:"webp"},null,8,["src","alt"])):I("",!0)]),t("span",ut,l(i.bag.id),1)])]),t("td",pt,l(i.quantity)+" pieces ",1),t("td",gt," ¥"+l(i.bag.price),1),t("td",mt," ¥"+l((i.bag.price*i.quantity).toLocaleString()),1)]))),128))]),t("tfoot",null,[t("tr",xt,[t("td",ft,l(g.cartItems.length)+" designs ",1),t("td",ht,l(a(h))+" pieces ",1),t("td",bt," ¥"+l(a(b).toLocaleString()),1),t("td",yt,[t("div",vt," ¥"+l(g.totalPrice.toLocaleString()),1),t("div",wt,[a(w).isLoading?(u(),p("span",kt,"Loading USD...")):(u(),p("span",_t,l(a(w).formatUSDPrice(g.totalPrice)||"USD price unavailable"),1))])])])])])]),t("div",Ct,[f(a(k),{variant:"outline",class:"btn-outline-enhanced flex-1 cursor-pointer",onClick:d},{default:v(()=>[...s[5]||(s[5]=[y(" Close ",-1)])]),_:1}),f(a(k),{class:"flex-1 cursor-pointer",style:{color:"white","background-color":"#4a3429"},onClick:$},{default:v(()=>[...s[6]||(s[6]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1),y(" Copy ",-1)])]),_:1}),f(a(k),{class:"hidden flex-1",onClick:C},{default:v(()=>[...s[7]||(s[7]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"})],-1),y(" Print ",-1)])]),_:1})])])])):I("",!0)}}},St={class:"mb-4 text-lg font-semibold text-gray-900 dark:text-white"},Dt={class:"mb-6 text-gray-600 dark:text-gray-300"},It={class:"flex gap-3"},Tt={__name:"ConfirmDialog",props:{isOpen:{type:Boolean,default:!1},title:{type:String,default:"Confirm Action"},message:{type:String,default:"Are you sure you want to proceed?"},confirmText:{type:String,default:"Confirm"},cancelText:{type:String,default:"Cancel"},variant:{type:String,default:"default"}},emits:["close","confirm"],setup(g,{emit:r}){const n=r,_=()=>{n("confirm"),n("close")},w=()=>{n("close")};return(h,b)=>g.isOpen?(u(),p("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center",onClick:w},[b[1]||(b[1]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:b[0]||(b[0]=N(()=>{},["stop"]))},[t("h3",St,l(g.title),1),t("p",Dt,l(g.message),1),t("div",It,[f(a(k),{variant:"outline",class:"btn-outline-enhanced flex-1 cursor-pointer",onClick:w},{default:v(()=>[y(l(g.cancelText),1)]),_:1}),f(a(k),{class:"flex-1 cursor-pointer",style:{color:"white","background-color":"#4a3429"},onClick:_},{default:v(()=>[y(l(g.confirmText),1)]),_:1})])])])):I("",!0)}},Lt={class:"space-y-4"},Pt={class:"space-y-3 pt-4"},jt=["href"],Mt={__name:"SendToWholesalerDialog",props:{isOpen:{type:Boolean,default:!1},cartItems:{type:Array,default:()=>[]},totalPrice:{type:Number,default:0}},emits:["close"],setup(g,{emit:r}){const n=g,_=r,w=()=>{_("close")},h=()=>{_("close"),F("/products")},b=()=>{if(!n.cartItems||n.cartItems.length===0)return;const d=O(),o=n.cartItems.reduce((i,S)=>i+S.quantity,0),s=d.convertCNYToUSD(n.totalPrice);let c=`ID	Qty	RMB	USD	Total RMB	Total USD
`;n.cartItems.forEach(i=>{const S=d.convertCNYToUSD(i.bag.price),T=i.bag.price*i.quantity,L=d.convertCNYToUSD(T);c+=`${i.bag.id}	${i.quantity}	${i.bag.price}	${S?S.toFixed(2):"N/A"}	${T}	${L?L.toFixed(2):"N/A"}
`}),c+=`
`,c+=`Total Items:	${o}
`,c+=`RMB:	${n.totalPrice}
`,c+=`USD:	${s?s.toFixed(2):"N/A"}
`,navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(c).then(()=>{}).catch(i=>{console.error("Modern clipboard API failed:",i),$(c)}):$(c)},$=d=>{try{const o=document.createElement("textarea");o.value=d,o.style.position="fixed",o.style.left="-999999px",o.style.top="-999999px",document.body.append(o),o.focus(),o.select();const s=document.execCommand("copy");o.remove(),s||C(d)}catch(o){console.error("Fallback copy failed:",o),C(d)}},C=d=>{const o=document.createElement("div");o.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  `;const s=document.createElement("div");s.style.cssText=`
    background: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 90%;
    max-height: 80%;
    overflow: auto;
  `,s.innerHTML=`
    <h3 style="margin-bottom: 15px; color: #333;">Please copy the following text manually:</h3>
    <textarea readonly style="width: 100%; height: 200px; padding: 10px; border: 1px solid #ccc; border-radius: 4px; font-family: monospace; font-size: 12px;">${d}</textarea>
    <div style="margin-top: 15px; text-align: center;">
      <button onclick="this.closest('div').parentElement.remove()" style="background: #4a3429; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;">Close</button>
    </div>
  `,o.append(s),document.body.append(o)};return W(()=>n.isOpen,d=>{d&&G(()=>{b()})}),(d,o)=>g.isOpen?(u(),p("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",onClick:w},[t("div",{class:"bg-card border-border relative max-w-md rounded-lg border p-6 shadow-lg",onClick:o[1]||(o[1]=N(()=>{},["stop"]))},[t("button",{onClick:o[0]||(o[0]=s=>d.$emit("close")),class:"text-muted-foreground hover:text-foreground absolute right-4 top-4 cursor-pointer transition-colors"},[...o[2]||(o[2]=[t("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])]),t("div",Lt,[o[4]||(o[4]=A('<div class="text-center"><div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20"><svg class="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><h2 class="text-card-foreground text-xl font-bold"> Data Copied Successfully </h2></div><div class="space-y-2 text-center"><p class="text-muted-foreground"> We have copied your bag purchase data. Please click Send Now to return to the customer service whatsapp, paste it into the input box, and send it to the customer. </p></div>',2)),t("div",Pt,[t("a",{href:a(Z),target:"_blank",rel:"noopener noreferrer",class:"inline-flex w-full cursor-pointer items-center justify-center rounded-md px-4 py-3 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#4a3429] focus:ring-offset-2 sm:py-2 sm:text-sm",style:{color:"white","background-color":"#4a3429"}}," Send Now ",8,jt),f(a(k),{variant:"outline",class:"w-full cursor-pointer py-3 text-base hover:bg-transparent hover:text-current sm:py-2 sm:text-sm",onClick:h},{default:v(()=>[...o[3]||(o[3]=[y(" Continue Shopping >> ",-1)])]),_:1})])])])])):I("",!0)}},Bt={class:"w-full px-4 py-8"},qt={class:"mb-8 flex items-center justify-between"},Nt={key:0},Ot={key:0,class:"grid gap-8 lg:grid-cols-3"},Ut={class:"space-y-4 lg:col-span-2"},zt={class:"flex gap-4"},Ht={class:"bg-muted h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg"},Wt={class:"flex-1"},At={class:"mb-2 flex items-start justify-between"},Ft={class:"text-card-foreground text-lg font-semibold"},Qt=["onClick"],Vt={class:"flex items-center justify-between"},Et={class:"flex w-fit items-center rounded-lg border"},Rt=["onClick"],Yt=["value","onInput"],Gt=["onClick"],Kt={class:"text-right"},Xt={class:"text-primary text-lg font-bold"},Jt={class:"text-muted-foreground text-sm"},Zt={class:"lg:col-span-1"},te={class:"bg-card border-border sticky top-8 rounded-lg border p-6 shadow-md"},ee={class:"mb-6 space-y-3"},oe={class:"text-muted-foreground flex justify-between"},se={class:"text-muted-foreground flex justify-between"},re={class:"text-muted-foreground flex justify-between"},ae={key:0,class:"text-success"},ne={key:1},ie={class:"text-card-foreground flex justify-between text-lg font-bold"},le={class:"text-right"},de={class:"text-muted-foreground text-sm font-normal"},ce={key:0},ue={key:1},pe={class:"space-y-3"},ge={key:1,class:"py-12 text-center"},me={__name:"cart",setup(g){const r=X();W(()=>r.items,x=>{console.warn("🛒 购物车页面商品更新:",x)},{deep:!0});const n=O(),{trackViewCart:_,trackBeginCheckout:w,trackUserInteraction:h,trackRemoveFromCart:b,trackButtonClick:$}=tt(),C=q(!1),d=q(!1),o=q(!1),s=x=>{const e=r.items.find(D=>D.bagId===x);e&&b(e.bag.id,`${e.bag.id} Handbag`,e.bag.price,e.quantity,"Handbag"),r.removeFromCart(x)},c=x=>{r.increaseQuantity(x)},i=x=>{r.decreaseQuantity(x)},S=(x,e)=>{const D=Number.parseInt(e)||50;r.updateQuantity(x,D)},T=()=>{if(r.items.length>0){const x=r.items.map(e=>({item_id:e.bag.id,item_name:`${e.bag.id} Handbag`,item_category:"Handbag",price:e.bag.price,quantity:e.quantity}));w(x,r.totalPrice),h("send_to_wholesaler","cart_page",{item_count:r.items.length}),$("send_to_wholesaler","cart_page",{item_count:r.items.length,total_value:r.totalPrice}),o.value=!0}},L=()=>{F("/products")},Q=()=>{d.value=!0},V=()=>{r.clearCart()};K(()=>{if(console.warn("🛒 购物车页面初始化，商品数量:",r.items.length),r.items.length>0){const x=r.items.map(e=>({item_id:e.bag.id,item_name:`${e.bag.id} Handbag`,item_category:"Handbag",price:e.bag.price,quantity:e.quantity}));_(x,r.totalPrice)}});const P=B(()=>r.totalItems>=500?0:r.totalItems),j=B(()=>r.totalPrice+P.value);return J({title:"Wish List - Fashionable Handbags",meta:[{name:"description",content:"View your wish list and manage favorite items."}]}),(x,e)=>{const D=U,E=R;return u(),p("div",null,[t("div",Bt,[t("div",qt,[e[4]||(e[4]=t("div",null,[t("h1",{class:"text-foreground mb-2 text-3xl font-bold"},"Wish List"),t("p",{class:"text-muted-foreground"},"Manage your favorite items")],-1)),a(r).items.length>0?(u(),p("div",Nt,[f(a(k),{variant:"outline",size:"sm",onClick:Q,class:"text-destructive hover:bg-destructive/10 hover:text-destructive dark:text-destructive dark:hover:bg-destructive/20 dark:hover:text-destructive cursor-pointer"},{default:v(()=>[...e[3]||(e[3]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),y(" Clear Wish List ",-1)])]),_:1})])):I("",!0)]),a(r).items.length>0?(u(),p("div",Ot,[t("div",Ut,[(u(!0),p(z,null,H(a(r).items,m=>(u(),p("div",{key:m.bagId,class:"bg-card border-border rounded-lg border p-6 shadow-md"},[t("div",zt,[t("div",Ht,[f(D,{src:m.bag.images[0].url,alt:m.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:96,height:96,format:"webp"},null,8,["src","alt"])]),t("div",Wt,[t("div",At,[t("div",null,[t("h3",Ft,l(m.bag.id)+" Handbag ",1)]),t("button",{onClick:M=>s(m.bagId),class:"text-muted-foreground hover:text-destructive cursor-pointer transition-colors"},[...e[5]||(e[5]=[t("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])],8,Qt)]),t("div",Vt,[t("div",Et,[t("button",{onClick:M=>i(m.bagId),class:"hover:bg-muted flex h-10 cursor-pointer items-center justify-center px-3 py-2 text-lg transition-colors sm:h-8 sm:text-base"}," - ",8,Rt),t("input",{value:m.quantity,onInput:M=>S(m.bagId,M.target.value),type:"number",min:"50",step:"50",class:"h-10 w-24 border-0 bg-transparent px-2 py-2 text-center text-base focus:ring-0 sm:h-8 sm:text-sm"},null,40,Yt),t("button",{onClick:M=>c(m.bagId),class:"hover:bg-muted flex h-10 cursor-pointer items-center justify-center px-3 py-2 text-lg transition-colors sm:h-8 sm:text-base"}," + ",8,Gt)]),t("div",Kt,[t("p",Xt," ¥"+l((m.bag.price*m.quantity).toLocaleString()),1),t("p",Jt," ¥"+l(m.bag.price)+" × "+l(m.quantity),1)])])])])]))),128))]),t("div",Zt,[t("div",te,[e[13]||(e[13]=t("h2",{class:"text-card-foreground mb-4 text-xl font-bold"}," Wish List Summary ",-1)),t("div",ee,[t("div",oe,[e[6]||(e[6]=t("span",null,"Items",-1)),t("span",null,l(a(r).totalItems)+" pieces",1)]),t("div",se,[e[7]||(e[7]=t("span",null,"Subtotal",-1)),t("span",null,"¥"+l(a(r).totalPrice.toLocaleString()),1)]),t("div",re,[e[8]||(e[8]=t("span",null,"Shipping",-1)),a(P)===0?(u(),p("span",ae," Free ")):(u(),p("span",ne,"¥"+l(a(P).toLocaleString()),1))]),e[10]||(e[10]=t("div",{class:"text-muted-foreground text-xs"},[t("p",null,"• 500 pieces or more for free shipping"),t("p",null," • Factory to transit warehouse shipping (not international logistics) ")],-1)),e[11]||(e[11]=t("hr",{class:"border-border"},null,-1)),t("div",ie,[e[9]||(e[9]=t("span",null,"Total",-1)),t("div",le,[t("div",null,"¥"+l(a(j).toLocaleString()),1),t("div",de,[a(n).isLoading?(u(),p("span",ce," Loading USD... ")):(u(),p("span",ue,l(a(n).formatUSDPrice(a(j))||"USD price unavailable"),1))])])])]),t("div",pe,[f(a(k),{size:"lg",variant:"enhanced",class:"h-12 w-full cursor-pointer text-base sm:h-10 sm:text-sm",style:{color:"white","background-color":"#4a3429"},onClick:T},{default:v(()=>[...e[12]||(e[12]=[y(" Send To Wholesaler ",-1)])]),_:1}),t("div",{class:"text-center"},[t("button",{onClick:L,class:"text-primary hover:text-primary/80 cursor-pointer text-sm underline transition-colors"}," Browse More Products >> ")])]),e[14]||(e[14]=t("div",{class:"bg-primary/5 border-primary/20 mt-6 rounded-lg border p-4"},[t("p",{class:"text-primary text-sm"}," 🌟 Our handbag styles are very popular worldwide! Welcome to place your order and experience our premium quality products. ")],-1))])])])):(u(),p("div",ge,[e[16]||(e[16]=A('<div class="from-muted to-muted/80 mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br shadow-lg" data-v-6324caa8><svg class="empty-wishlist-icon text-muted-foreground h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-6324caa8><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-v-6324caa8></path></svg></div><h2 class="text-foreground mb-4 text-3xl font-bold" data-v-6324caa8> Your wish list is empty </h2><p class="text-muted-foreground mb-6 text-lg" data-v-6324caa8> You haven&#39;t added any items to your wish list yet </p><p class="text-primary mb-6 text-base font-medium" data-v-6324caa8> 🌟 Our handbag styles are very popular worldwide! Welcome to browse and experience our premium quality products. </p>',4)),f(E,{to:"/products"},{default:v(()=>[f(a(k),{size:"lg",class:"h-12 cursor-pointer text-base sm:h-10 sm:text-sm",style:{color:"white","background-color":"#4a3429"}},{default:v(()=>[...e[15]||(e[15]=[y(" Browse More Products ",-1)])]),_:1})]),_:1})]))]),f(Mt,{"is-open":a(o),"cart-items":a(r).items,"total-price":a(j),onClose:e[0]||(e[0]=m=>o.value=!1)},null,8,["is-open","cart-items","total-price"]),f($t,{"is-open":a(C),"cart-items":a(r).items,"total-price":a(j),"shipping-cost":a(P),onClose:e[1]||(e[1]=m=>C.value=!1)},null,8,["is-open","cart-items","total-price","shipping-cost"]),f(Tt,{"is-open":a(d),title:"Clear Wish List",message:"Are you sure you want to remove all items from your wish list? This action cannot be undone.","confirm-text":"Clear Wish List","cancel-text":"Cancel",variant:"danger",onClose:e[2]||(e[2]=m=>d.value=!1),onConfirm:V},null,8,["is-open"])])}}},Se=et(me,[["__scopeId","data-v-6324caa8"]]);export{Se as default};
