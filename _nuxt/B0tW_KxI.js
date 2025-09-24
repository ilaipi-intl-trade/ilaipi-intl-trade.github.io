import{_ as q}from"./BDG0gwHq.js";import{_ as F}from"./CqujRKVA.js";import{c as D,O as c,W as L,Q as d,U as t,a2 as y,X as l,L as B,a9 as O,a0 as R,u as r,a3 as g,a1 as v,a4 as M,w as Y,n as G,V as H,b as j,o as K}from"./CO3o911U.js";import{_ as k}from"./Bg7FwLAy.js";import{a as z,n as W,u as X}from"#entry";import{M as J}from"./Csg52h3D.js";import{u as Z,a as tt}from"./DE1c0ksC.js";import{_ as et}from"./DlAUqK2U.js";import"./0sGHHGNL.js";import"./D4p7EFcB.js";import"./DuxmeIqw.js";const ot={class:"mb-6 flex items-center justify-between"},st={class:"flex items-center gap-4"},rt={class:"text-sm text-gray-600 dark:text-gray-300"},at={class:"font-semibold text-gray-900 dark:text-white"},nt={class:"mb-6 overflow-x-auto"},it={class:"w-full border-collapse"},lt={class:"px-4 py-3"},dt={class:"flex flex-col items-center gap-2"},ct={class:"h-16 w-16 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"},ut={class:"text-xs font-medium text-gray-600 dark:text-gray-300"},pt={class:"px-4 py-3 text-center text-sm text-gray-900 dark:text-white"},gt={class:"px-4 py-3 text-right text-sm text-gray-900 dark:text-white"},mt={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},xt={class:"border-t-2 border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"},ft={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},ht={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},bt={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},yt={class:"px-4 py-3 text-right"},vt={class:"text-primary text-lg font-bold"},wt={class:"text-sm font-normal text-gray-600 dark:text-gray-300"},kt={key:0},_t={key:1},Ct={class:"flex gap-3"},$t={__name:"CheckoutDialog",props:{isOpen:{type:Boolean,default:!1},cartItems:{type:Array,default:()=>[]},totalPrice:{type:Number,default:0},shippingCost:{type:Number,default:0}},emits:["close"],setup(u,{emit:a}){const i=u,_=a,w=z(),h=D(()=>i.cartItems.reduce((e,s)=>e+s.quantity,0)),b=D(()=>i.totalPrice-i.shippingCost),$=async()=>{try{let e="";e+=`Order Date: ${new Date().toLocaleDateString()}

`,e+=`Product ID	Quantity	Unit Price	Total
`,i.cartItems.forEach(s=>{const f=s.bag.price*s.quantity;e+=`${s.bag.id}	${s.quantity}	${s.bag.price}	${f}
`}),e+=`
`,e+=`Total Items	${h.value}
`,e+=`Total Price	${i.totalPrice}
`,await navigator.clipboard.writeText(e),typeof window<"u"&&window.$toast&&window.$toast.success("Success","Order details copied to clipboard!"),n()}catch(e){console.error("Failed to copy to clipboard:",e),typeof window<"u"&&window.$toast&&window.$toast.error("Error","Failed to copy to clipboard")}},C=()=>{const e=`
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
        <p><strong>Total Price:</strong> ¥${i.totalPrice.toLocaleString()}</p>
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
          ${i.cartItems.map(f=>{const m=f.bag.price*f.quantity;return`
              <tr>
                <td>${f.bag.id}</td>
                <td>${f.quantity} pieces</td>
                <td>¥${f.bag.price}</td>
                <td>¥${m.toLocaleString()}</td>
              </tr>
            `}).join("")}
        </tbody>
        <tfoot>
          <tr class="total-row">
            <td><strong>Total</strong></td>
            <td><strong>${h.value} pieces</strong></td>
            <td></td>
            <td><strong>¥${i.totalPrice.toLocaleString()}</strong></td>
          </tr>
        </tfoot>
      </table>
      
      <div class="summary">
        <h3>Order Summary</h3>
        <p><strong>Total Items:</strong> ${h.value} pieces</p>
        <p><strong>Total Price:</strong> ¥${i.totalPrice.toLocaleString()}</p>
        <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
      </div>
    </body>
    </html>
  `,s=window.open("","_blank");s.document.write(e),s.document.close(),s.focus(),s.print(),s.close()},n=()=>{_("close")};return(e,s)=>{const f=q;return u.isOpen?(d(),c("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center",onClick:n},[s[8]||(s[8]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:s[0]||(s[0]=M(()=>{},["stop"]))},[t("div",ot,[t("div",st,[s[2]||(s[2]=t("h3",{class:"text-2xl font-bold text-gray-900 dark:text-white"}," Order Summary ",-1)),t("div",rt,[s[1]||(s[1]=y(" Order Date: ",-1)),t("span",at,l(new Date().toLocaleDateString()),1)])]),t("button",{onClick:n,class:"cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"},[...s[3]||(s[3]=[t("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),t("div",nt,[t("table",it,[s[4]||(s[4]=t("thead",null,[t("tr",{class:"border-b border-gray-200 dark:border-gray-700"},[t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Design "),t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Quantity "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Unit Price "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Total ")])],-1)),t("tbody",null,[(d(!0),c(B,null,O(u.cartItems,m=>(d(),c("tr",{key:m.bagId,class:"border-b border-gray-100 dark:border-gray-800"},[t("td",lt,[t("div",dt,[t("div",ct,[m.bag.images[0]?(d(),R(f,{key:0,src:m.bag.images[0].url,alt:m.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:64,height:64,format:"webp"},null,8,["src","alt"])):L("",!0)]),t("span",ut,l(m.bag.id),1)])]),t("td",pt,l(m.quantity)+" pieces ",1),t("td",gt," ¥"+l(m.bag.price),1),t("td",mt," ¥"+l((m.bag.price*m.quantity).toLocaleString()),1)]))),128))]),t("tfoot",null,[t("tr",xt,[t("td",ft,l(u.cartItems.length)+" designs ",1),t("td",ht,l(r(h))+" pieces ",1),t("td",bt," ¥"+l(r(b).toLocaleString()),1),t("td",yt,[t("div",vt," ¥"+l(u.totalPrice.toLocaleString()),1),t("div",wt,[r(w).isLoading?(d(),c("span",kt,"Loading USD...")):(d(),c("span",_t,l(r(w).formatUSDPrice(u.totalPrice)||"USD price unavailable"),1))])])])])])]),t("div",Ct,[g(r(k),{variant:"outline",class:"btn-outline-enhanced flex-1 cursor-pointer",onClick:n},{default:v(()=>[...s[5]||(s[5]=[y(" Close ",-1)])]),_:1}),g(r(k),{class:"flex-1 cursor-pointer",style:{"background-color":"#4a3429",color:"white"},onClick:$},{default:v(()=>[...s[6]||(s[6]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1),y(" Copy ",-1)])]),_:1}),g(r(k),{class:"hidden flex-1",onClick:C},{default:v(()=>[...s[7]||(s[7]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"})],-1),y(" Print ",-1)])]),_:1})])])])):L("",!0)}}},St={class:"mb-4 text-lg font-semibold text-gray-900 dark:text-white"},Lt={class:"mb-6 text-gray-600 dark:text-gray-300"},It={class:"flex gap-3"},Pt={__name:"ConfirmDialog",props:{isOpen:{type:Boolean,default:!1},title:{type:String,default:"Confirm Action"},message:{type:String,default:"Are you sure you want to proceed?"},confirmText:{type:String,default:"Confirm"},cancelText:{type:String,default:"Cancel"},variant:{type:String,default:"default"}},emits:["close","confirm"],setup(u,{emit:a}){const i=a,_=()=>{i("confirm"),i("close")},w=()=>{i("close")};return(h,b)=>u.isOpen?(d(),c("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center",onClick:w},[b[1]||(b[1]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:b[0]||(b[0]=M(()=>{},["stop"]))},[t("h3",St,l(u.title),1),t("p",Lt,l(u.message),1),t("div",It,[g(r(k),{variant:"outline",class:"btn-outline-enhanced flex-1 cursor-pointer",onClick:w},{default:v(()=>[y(l(u.cancelText),1)]),_:1}),g(r(k),{class:"flex-1 cursor-pointer",style:{"background-color":"#4a3429",color:"white"},onClick:_},{default:v(()=>[y(l(u.confirmText),1)]),_:1})])])])):L("",!0)}},Tt={class:"space-y-4"},Dt={class:"space-y-3 pt-4"},jt=["href"],Mt={__name:"SendToWholesalerDialog",props:{isOpen:{type:Boolean,default:!1},cartItems:{type:Array,default:()=>[]},totalPrice:{type:Number,default:0}},emits:["close"],setup(u,{emit:a}){const i=u,_=a,w=()=>{_("close")},h=()=>{_("close"),W("/products")},b=()=>{if(!i.cartItems||i.cartItems.length===0)return;let n=`Wish List Purchase List:

`;i.cartItems.forEach((e,s)=>{n+=`${s+1}. ${e.bag.id} Handbag
`,n+=`   Quantity: ${e.quantity} pieces
`,n+=`   Unit Price: ¥${e.bag.price.toLocaleString()}
`,n+=`   Subtotal: ¥${(e.bag.price*e.quantity).toLocaleString()}

`}),n+=`Total Price: ¥${i.totalPrice.toLocaleString()}
`,n+=`Total Quantity: ${i.cartItems.reduce((e,s)=>e+s.quantity,0)} pieces`,navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(n).then(()=>{}).catch(e=>{console.error("Modern clipboard API failed:",e),$(n)}):$(n)},$=n=>{try{const e=document.createElement("textarea");e.value=n,e.style.position="fixed",e.style.left="-999999px",e.style.top="-999999px",document.body.append(e),e.focus(),e.select();const s=document.execCommand("copy");e.remove(),s||C(n)}catch(e){console.error("Fallback copy failed:",e),C(n)}},C=n=>{const e=document.createElement("div");e.style.cssText=`
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
    <textarea readonly style="width: 100%; height: 200px; padding: 10px; border: 1px solid #ccc; border-radius: 4px; font-family: monospace; font-size: 12px;">${n}</textarea>
    <div style="margin-top: 15px; text-align: center;">
      <button onclick="this.closest('div').parentElement.remove()" style="background: #4a3429; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;">Close</button>
    </div>
  `,e.append(s),document.body.append(e)};return Y(()=>i.isOpen,n=>{n&&G(()=>{b()})}),(n,e)=>u.isOpen?(d(),c("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",onClick:w},[t("div",{class:"bg-card border-border relative max-w-md rounded-lg border p-6 shadow-lg",onClick:e[1]||(e[1]=M(()=>{},["stop"]))},[t("button",{onClick:e[0]||(e[0]=s=>n.$emit("close")),class:"text-muted-foreground hover:text-foreground absolute right-4 top-4 cursor-pointer transition-colors"},[...e[2]||(e[2]=[t("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])]),t("div",Tt,[e[4]||(e[4]=H('<div class="text-center"><div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20"><svg class="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><h2 class="text-card-foreground text-xl font-bold"> Data Copied Successfully </h2></div><div class="space-y-2 text-center"><p class="text-muted-foreground"> We have copied your bag purchase data. Please click confirm to return to the customer service interface, paste it into the input box, and send it to the customer. </p></div>',2)),t("div",Dt,[t("a",{href:r(J),target:"_blank",rel:"noopener noreferrer",class:"inline-flex w-full cursor-pointer items-center justify-center rounded-md px-4 py-3 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#4a3429] focus:ring-offset-2 sm:py-2 sm:text-sm",style:{color:"white","background-color":"#4a3429"}}," Send Now ",8,jt),g(r(k),{variant:"outline",class:"w-full cursor-pointer py-3 text-base hover:bg-transparent hover:text-current sm:py-2 sm:text-sm",onClick:h},{default:v(()=>[...e[3]||(e[3]=[y(" Continue Shopping >> ",-1)])]),_:1})])])])])):L("",!0)}},qt={class:"w-full px-4 py-8"},Bt={class:"mb-8 flex items-center justify-between"},Ot={key:0},Ht={key:0,class:"grid gap-8 lg:grid-cols-3"},zt={class:"space-y-4 lg:col-span-2"},Wt={class:"flex gap-4"},Nt={class:"bg-muted h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg"},At={class:"flex-1"},Qt={class:"mb-2 flex items-start justify-between"},Ut={class:"text-card-foreground text-lg font-semibold"},Vt=["onClick"],Et={class:"flex items-center justify-between"},Ft={class:"flex w-fit items-center rounded-lg border"},Rt=["onClick"],Yt=["value","onInput"],Gt=["onClick"],Kt={class:"text-right"},Xt={class:"text-primary text-lg font-bold"},Jt={class:"text-muted-foreground text-sm"},Zt={class:"lg:col-span-1"},te={class:"bg-card border-border sticky top-8 rounded-lg border p-6 shadow-md"},ee={class:"mb-6 space-y-3"},oe={class:"text-muted-foreground flex justify-between"},se={class:"text-muted-foreground flex justify-between"},re={class:"text-muted-foreground flex justify-between"},ae={key:0,class:"text-success"},ne={key:1},ie={class:"text-card-foreground flex justify-between text-lg font-bold"},le={class:"text-right"},de={class:"text-muted-foreground text-sm font-normal"},ce={key:0},ue={key:1},pe={class:"space-y-3"},ge={key:1,class:"py-12 text-center"},me={__name:"cart",setup(u){const a=Z(),i=z(),{trackViewCart:_,trackBeginCheckout:w,trackUserInteraction:h,trackRemoveFromCart:b,trackButtonClick:$}=tt(),C=j(!1),n=j(!1),e=j(!1),s=x=>{const o=a.items.find(S=>S.bagId===x);o&&b(o.bag.id,`${o.bag.id} Handbag`,o.bag.price,o.quantity,"Handbag"),a.removeFromCart(x)},f=x=>{a.increaseQuantity(x)},m=x=>{a.decreaseQuantity(x)},N=(x,o)=>{const S=Number.parseInt(o)||50;a.updateQuantity(x,S)},A=()=>{if(a.items.length>0){const x=a.items.map(o=>({item_id:o.bag.id,item_name:`${o.bag.id} Handbag`,item_category:"Handbag",price:o.bag.price,quantity:o.quantity}));w(x,a.totalPrice),h("send_to_wholesaler","cart_page",{item_count:a.items.length}),$("send_to_wholesaler","cart_page",{item_count:a.items.length,total_value:a.totalPrice}),e.value=!0}},Q=()=>{W("/products")},U=()=>{n.value=!0},V=()=>{a.clearCart()};K(()=>{if(a.items.length>0){const x=a.items.map(o=>({item_id:o.bag.id,item_name:`${o.bag.id} Handbag`,item_category:"Handbag",price:o.bag.price,quantity:o.quantity}));_(x,a.totalPrice)}});const I=D(()=>a.totalItems>=500?0:a.totalItems),P=D(()=>a.totalPrice+I.value);return X({title:"Wish List - Fashionable Handbags",meta:[{name:"description",content:"View your wish list and manage favorite items."}]}),(x,o)=>{const S=q,E=F;return d(),c("div",null,[t("div",qt,[t("div",Bt,[o[4]||(o[4]=t("div",null,[t("h1",{class:"text-foreground mb-2 text-3xl font-bold"},"Wish List"),t("p",{class:"text-muted-foreground"},"Manage your favorite items")],-1)),r(a).items.length>0?(d(),c("div",Ot,[g(r(k),{variant:"outline",size:"sm",onClick:U,class:"text-destructive hover:bg-destructive/10 hover:text-destructive dark:text-destructive dark:hover:bg-destructive/20 dark:hover:text-destructive cursor-pointer"},{default:v(()=>[...o[3]||(o[3]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),y(" Clear Wish List ",-1)])]),_:1})])):L("",!0)]),r(a).items.length>0?(d(),c("div",Ht,[t("div",zt,[(d(!0),c(B,null,O(r(a).items,p=>(d(),c("div",{key:p.bagId,class:"bg-card border-border rounded-lg border p-6 shadow-md"},[t("div",Wt,[t("div",Nt,[g(S,{src:p.bag.images[0].url,alt:p.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:96,height:96,format:"webp"},null,8,["src","alt"])]),t("div",At,[t("div",Qt,[t("div",null,[t("h3",Ut,l(p.bag.id)+" Handbag ",1)]),t("button",{onClick:T=>s(p.bagId),class:"text-muted-foreground hover:text-destructive cursor-pointer transition-colors"},[...o[5]||(o[5]=[t("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])],8,Vt)]),t("div",Et,[t("div",Ft,[t("button",{onClick:T=>m(p.bagId),class:"hover:bg-muted flex h-10 cursor-pointer items-center justify-center px-3 py-2 text-lg transition-colors sm:h-8 sm:text-base"}," - ",8,Rt),t("input",{value:p.quantity,onInput:T=>N(p.bagId,T.target.value),type:"number",min:"50",step:"50",class:"h-10 w-24 border-0 bg-transparent px-2 py-2 text-center text-base focus:ring-0 sm:h-8 sm:text-sm"},null,40,Yt),t("button",{onClick:T=>f(p.bagId),class:"hover:bg-muted flex h-10 cursor-pointer items-center justify-center px-3 py-2 text-lg transition-colors sm:h-8 sm:text-base"}," + ",8,Gt)]),t("div",Kt,[t("p",Xt," ¥"+l((p.bag.price*p.quantity).toLocaleString()),1),t("p",Jt," ¥"+l(p.bag.price)+" × "+l(p.quantity),1)])])])])]))),128))]),t("div",Zt,[t("div",te,[o[13]||(o[13]=t("h2",{class:"text-card-foreground mb-4 text-xl font-bold"}," Wish List Summary ",-1)),t("div",ee,[t("div",oe,[o[6]||(o[6]=t("span",null,"Items",-1)),t("span",null,l(r(a).totalItems)+" pieces",1)]),t("div",se,[o[7]||(o[7]=t("span",null,"Subtotal",-1)),t("span",null,"¥"+l(r(a).totalPrice.toLocaleString()),1)]),t("div",re,[o[8]||(o[8]=t("span",null,"Shipping",-1)),r(I)===0?(d(),c("span",ae," Free ")):(d(),c("span",ne,"¥"+l(r(I).toLocaleString()),1))]),o[10]||(o[10]=t("div",{class:"text-muted-foreground text-xs"},[t("p",null,"• 500 pieces or more for free shipping"),t("p",null," • Factory to transit warehouse shipping (not international logistics) ")],-1)),o[11]||(o[11]=t("hr",{class:"border-border"},null,-1)),t("div",ie,[o[9]||(o[9]=t("span",null,"Total",-1)),t("div",le,[t("div",null,"¥"+l(r(P).toLocaleString()),1),t("div",de,[r(i).isLoading?(d(),c("span",ce," Loading USD... ")):(d(),c("span",ue,l(r(i).formatUSDPrice(r(P))||"USD price unavailable"),1))])])])]),t("div",pe,[g(r(k),{size:"lg",variant:"enhanced",class:"h-12 w-full cursor-pointer text-base sm:h-10 sm:text-sm",style:{color:"white","background-color":"#4a3429"},onClick:A},{default:v(()=>[...o[12]||(o[12]=[y(" Send To Wholesaler ",-1)])]),_:1}),t("div",{class:"text-center"},[t("button",{onClick:Q,class:"text-primary hover:text-primary/80 cursor-pointer text-sm underline transition-colors"}," Browse More Products >> ")])]),o[14]||(o[14]=t("div",{class:"bg-primary/5 border-primary/20 mt-6 rounded-lg border p-4"},[t("p",{class:"text-primary text-sm"}," 🌟 Our handbag styles are very popular worldwide! Welcome to place your order and experience our premium quality products. ")],-1))])])])):(d(),c("div",ge,[o[16]||(o[16]=H('<div class="from-muted to-muted/80 mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br shadow-lg" data-v-a9410a3f><svg class="empty-wishlist-icon text-muted-foreground h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-a9410a3f><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-v-a9410a3f></path></svg></div><h2 class="text-foreground mb-4 text-3xl font-bold" data-v-a9410a3f> Your wish list is empty </h2><p class="text-muted-foreground mb-6 text-lg" data-v-a9410a3f> You haven&#39;t added any items to your wish list yet </p><p class="text-primary mb-6 text-base font-medium" data-v-a9410a3f> 🌟 Our handbag styles are very popular worldwide! Welcome to browse and experience our premium quality products. </p>',4)),g(E,{to:"/products"},{default:v(()=>[g(r(k),{size:"lg",class:"h-12 cursor-pointer text-base sm:h-10 sm:text-sm",style:{color:"white","background-color":"#4a3429"}},{default:v(()=>[...o[15]||(o[15]=[y(" Browse More Products ",-1)])]),_:1})]),_:1})]))]),g(Mt,{"is-open":r(e),"cart-items":r(a).items,"total-price":r(P),onClose:o[0]||(o[0]=p=>e.value=!1)},null,8,["is-open","cart-items","total-price"]),g($t,{"is-open":r(C),"cart-items":r(a).items,"total-price":r(P),"shipping-cost":r(I),onClose:o[1]||(o[1]=p=>C.value=!1)},null,8,["is-open","cart-items","total-price","shipping-cost"]),g(Pt,{"is-open":r(n),title:"Clear Shopping Cart",message:"Are you sure you want to remove all items from your cart? This action cannot be undone.","confirm-text":"Clear Cart","cancel-text":"Cancel",variant:"danger",onClose:o[2]||(o[2]=p=>n.value=!1),onConfirm:V},null,8,["is-open"])])}}},Se=et(me,[["__scopeId","data-v-a9410a3f"]]);export{Se as default};
