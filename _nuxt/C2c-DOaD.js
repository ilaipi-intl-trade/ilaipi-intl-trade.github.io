import{_ as O}from"./6ETAZGtE.js";import{_ as Y}from"./tiF_snPY.js";import{c as T,O as m,W as P,Q as u,U as t,a2 as b,X as r,L as H,a9 as W,a0 as G,u as s,a3 as y,a1 as x,a4 as j,w as X,b as N,o as J,V as K}from"./Co5tMnYY.js";import{_ as k}from"./Bbo0jKgt.js";import{a as z,b as Z,u as tt,n as et}from"#entry";import{_ as M}from"./DlAUqK2U.js";import{u as ot}from"./B7xX6Qq_.js";import{M as L}from"./C5MGQOzy.js";import"./C7xmkHdv.js";import"./Bvi1VPMX.js";import"./zWPNylOE.js";const at={class:"mb-6 flex items-center justify-between"},st={class:"flex items-center gap-4"},nt={class:"text-sm text-gray-600 dark:text-gray-300"},rt={class:"font-semibold text-gray-900 dark:text-white"},it={class:"mb-6 overflow-x-auto"},lt={class:"w-full border-collapse"},ct={class:"px-4 py-3"},dt={class:"flex flex-col items-center gap-2"},ut={class:"h-16 w-16 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"},pt={class:"text-xs font-medium text-gray-600 dark:text-gray-300"},mt={class:"px-4 py-3 text-center text-sm text-gray-900 dark:text-white"},gt={class:"px-4 py-3 text-right text-sm text-gray-900 dark:text-white"},ht={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},yt={class:"border-t-2 border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"},ft={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},bt={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},xt={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},vt={class:"px-4 py-3 text-right"},wt={class:"text-primary text-lg font-bold"},_t={class:"text-sm font-normal text-gray-600 dark:text-gray-300"},kt={key:0},$t={key:1},Ct={class:"flex gap-3"},St={__name:"CheckoutDialog",props:{isOpen:{type:Boolean,default:!1},cartItems:{type:Array,default:()=>[]},totalPrice:{type:Number,default:0},shippingCost:{type:Number,default:0}},emits:["close"],setup(g,{emit:o}){const c=g,S=o,$=z(),v=T(()=>c.cartItems.reduce((p,a)=>p+a.quantity,0)),w=T(()=>c.totalPrice-c.shippingCost),q=async()=>{try{let p="";p+=`Order Date: ${new Date().toLocaleDateString()}

`,p+=`Product ID	Quantity	Unit Price	Total
`,c.cartItems.forEach(a=>{const f=a.bag.price*a.quantity;p+=`${a.bag.id}	${a.quantity}	${a.bag.price}	${f}
`}),p+=`
`,p+=`Total Items	${v.value}
`,p+=`Total Price	${c.totalPrice}
`,await navigator.clipboard.writeText(p),typeof window<"u"&&window.$toast&&window.$toast.success("Success","Order details copied to clipboard!"),_()}catch(p){console.error("Failed to copy to clipboard:",p),typeof window<"u"&&window.$toast&&window.$toast.error("Error","Failed to copy to clipboard")}},D=()=>{const p=`
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
        <p><strong>Total Items:</strong> ${v.value} pieces</p>
        <p><strong>Total Price:</strong> ¥${c.totalPrice.toLocaleString()}</p>
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
          ${c.cartItems.map(f=>{const h=f.bag.price*f.quantity;return`
              <tr>
                <td>${f.bag.id}</td>
                <td>${f.quantity} pieces</td>
                <td>¥${f.bag.price}</td>
                <td>¥${h.toLocaleString()}</td>
              </tr>
            `}).join("")}
        </tbody>
        <tfoot>
          <tr class="total-row">
            <td><strong>Total</strong></td>
            <td><strong>${v.value} pieces</strong></td>
            <td></td>
            <td><strong>¥${c.totalPrice.toLocaleString()}</strong></td>
          </tr>
        </tfoot>
      </table>
      
      <div class="summary">
        <h3>Order Summary</h3>
        <p><strong>Total Items:</strong> ${v.value} pieces</p>
        <p><strong>Total Price:</strong> ¥${c.totalPrice.toLocaleString()}</p>
        <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
      </div>
    </body>
    </html>
  `,a=window.open("","_blank");a.document.write(p),a.document.close(),a.focus(),a.print(),a.close()},_=()=>{S("close")};return(p,a)=>{const f=O;return g.isOpen?(u(),m("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center p-4",onClick:_},[a[8]||(a[8]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:a[0]||(a[0]=j(()=>{},["stop"]))},[t("div",at,[t("div",st,[a[2]||(a[2]=t("h3",{class:"text-2xl font-bold text-gray-900 dark:text-white"}," Order Summary ",-1)),t("div",nt,[a[1]||(a[1]=b(" Order Date: ",-1)),t("span",rt,r(new Date().toLocaleDateString()),1)])]),t("button",{onClick:_,class:"cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"},[...a[3]||(a[3]=[t("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),t("div",it,[t("table",lt,[a[4]||(a[4]=t("thead",null,[t("tr",{class:"border-b border-gray-200 dark:border-gray-700"},[t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Design "),t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Quantity "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Unit Price "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Total ")])],-1)),t("tbody",null,[(u(!0),m(H,null,W(g.cartItems,h=>(u(),m("tr",{key:h.bagId,class:"border-b border-gray-100 dark:border-gray-800"},[t("td",ct,[t("div",dt,[t("div",ut,[h.bag.images[0]?(u(),G(f,{key:0,src:h.bag.images[0].url,alt:h.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:64,height:64,format:"webp"},null,8,["src","alt"])):P("",!0)]),t("span",pt,r(h.bag.id),1)])]),t("td",mt,r(h.quantity)+" pieces ",1),t("td",gt," ¥"+r(h.bag.price),1),t("td",ht," ¥"+r((h.bag.price*h.quantity).toLocaleString()),1)]))),128))]),t("tfoot",null,[t("tr",yt,[t("td",ft,r(g.cartItems.length)+" designs ",1),t("td",bt,r(s(v))+" pieces ",1),t("td",xt," ¥"+r(s(w).toLocaleString()),1),t("td",vt,[t("div",wt," ¥"+r(g.totalPrice.toLocaleString()),1),t("div",_t,[s($).isLoading?(u(),m("span",kt,"Loading USD...")):(u(),m("span",$t,r(s($).formatUSDPrice(g.totalPrice)||"USD price unavailable"),1))])])])])])]),t("div",Ct,[y(s(k),{variant:"outline",class:"btn-outline-enhanced flex-1 cursor-pointer",onClick:_},{default:x(()=>[...a[5]||(a[5]=[b(" Close ",-1)])]),_:1}),y(s(k),{class:"flex-1 cursor-pointer",style:{color:"white","background-color":"#4a3429"},onClick:q},{default:x(()=>[...a[6]||(a[6]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1),b(" Copy ",-1)])]),_:1}),y(s(k),{class:"hidden flex-1",onClick:D},{default:x(()=>[...a[7]||(a[7]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"})],-1),b(" Print ",-1)])]),_:1})])])])):P("",!0)}}},Dt=M(St,[["__scopeId","data-v-3ab1d863"]]),It={class:"mb-4 text-lg font-semibold text-gray-900 dark:text-white"},Lt={class:"mb-6 text-gray-600 dark:text-gray-300"},Tt={class:"flex gap-3"},Pt={__name:"ConfirmDialog",props:{isOpen:{type:Boolean,default:!1},title:{type:String,default:"Confirm Action"},message:{type:String,default:"Are you sure you want to proceed?"},confirmText:{type:String,default:"Confirm"},cancelText:{type:String,default:"Cancel"},variant:{type:String,default:"default"}},emits:["close","confirm"],setup(g,{emit:o}){const c=o,S=()=>{c("confirm"),c("close")},$=()=>{c("close")};return(v,w)=>g.isOpen?(u(),m("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center p-4",onClick:$},[w[1]||(w[1]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:w[0]||(w[0]=j(()=>{},["stop"]))},[t("h3",It,r(g.title),1),t("p",Lt,r(g.message),1),t("div",Tt,[y(s(k),{variant:"outline",class:"btn-outline-enhanced flex-1 cursor-pointer",onClick:$},{default:x(()=>[b(r(g.cancelText),1)]),_:1}),y(s(k),{class:"flex-1 cursor-pointer",style:{color:"white","background-color":"#4a3429"},onClick:S},{default:x(()=>[b(r(g.confirmText),1)]),_:1})])])])):P("",!0)}},qt=M(Pt,[["__scopeId","data-v-d5197c05"]]),Ut={class:"cart-page-container"},Mt={class:"mb-8 flex items-center justify-between"},Bt={key:0},At={key:0,class:"cart-main-container"},Nt={class:"cart-items-section"},Ot={class:"cart-item-content"},Ht={class:"cart-item-image"},Wt={class:"cart-item-info"},jt={class:"cart-item-header"},zt={class:"cart-item-title"},Ft=["onClick"],Rt={class:"cart-item-price"},Qt={class:"price-total"},Vt={class:"price-detail"},Et={class:"cart-item-controls"},Yt={class:"quantity-controls"},Gt=["onClick"],Xt=["value","onInput"],Jt=["onClick"],Kt={class:"cart-summary-section"},Zt={class:"cart-summary-card"},te={class:"cart-summary-details"},ee={class:"summary-row"},oe={class:"summary-row"},ae={class:"summary-row"},se={key:0,class:"text-success"},ne={key:1},re={class:"summary-total"},ie={class:"total-amount"},le={class:"total-usd"},ce={key:0},de={key:1},ue={class:"cart-summary-actions"},pe={key:1,class:"empty-cart-state"},me={__name:"cart",setup(g){const o=Z();X(()=>o.items,i=>{console.warn("🛒 购物车页面商品更新:",i)},{deep:!0});const c=z(),{trackViewCart:S,trackBeginCheckout:$,trackUserInteraction:v,trackRemoveFromCart:w,trackButtonClick:q}=ot(),D=N(!1),_=N(!1),p=i=>{const e=o.items.find(l=>l.bagId===i);e&&w(e.bag.id,`${e.bag.id} Handbag`,e.bag.price,e.quantity,"Handbag"),o.removeFromCart(i)},a=i=>{o.increaseQuantity(i)},f=i=>{o.decreaseQuantity(i)},h=(i,e)=>{const l=Number.parseInt(e)||20;o.updateQuantity(i,l)},F=()=>{if(!o.items||o.items.length===0)return;const i=o.items.reduce((d,n)=>d+n.quantity,0),e=c.convertCNYToUSD(o.totalPrice);let l=`ID	Qty	RMB	USD	Total RMB	Total USD
`;o.items.forEach(d=>{const n=c.convertCNYToUSD(d.bag.price),C=d.bag.price*d.quantity,A=c.convertCNYToUSD(C);l+=`${d.bag.id}	${d.quantity}	${d.bag.price}	${n?n.toFixed(2):"N/A"}	${C}	${A?A.toFixed(2):"N/A"}
`}),l+=`
`,l+=`Total Items:	${i}
`,l+=`RMB:	${o.totalPrice}
`,l+=`USD:	${e?e.toFixed(2):"N/A"}
`,navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(l).then(()=>{const d=encodeURIComponent(l),n=`https://wa.me/${L}?text=${d}`;try{window.location.href=n}catch{window.open(n,"_blank","noopener,noreferrer")}}).catch(d=>{console.error("Modern clipboard API failed:",d),B(l)}):B(l)},B=i=>{try{const e=document.createElement("textarea");e.value=i,e.style.position="fixed",e.style.left="-999999px",e.style.top="-999999px",document.body.append(e),e.focus(),e.select();const l=document.execCommand("copy");if(e.remove(),l){const d=encodeURIComponent(i),n=`https://wa.me/${L}?text=${d}`;try{window.location.href=n}catch{window.open(n,"_blank","noopener,noreferrer")}}else{const d=`https://wa.me/${L}`;try{window.location.href=d}catch{window.open(d,"_blank","noopener,noreferrer")}}}catch(e){console.error("Fallback copy failed:",e);const l=`https://wa.me/${L}`;try{window.location.href=l}catch{window.open(l,"_blank","noopener,noreferrer")}}},R=()=>{if(o.items.length>0){const i=o.items.map(e=>({item_id:e.bag.id,item_name:`${e.bag.id} Handbag`,item_category:"Handbag",price:e.bag.price,quantity:e.quantity}));$(i,o.totalPrice),v("send_to_wholesaler","cart_page",{item_count:o.items.length}),q("send_to_wholesaler","cart_page",{item_count:o.items.length,total_value:o.totalPrice}),F()}},Q=()=>{et("/products")},V=()=>{_.value=!0},E=()=>{o.clearCart()};J(()=>{if(console.warn("🛒 购物车页面初始化，商品数量:",o.items.length),o.items.length>0){const i=o.items.map(e=>({item_id:e.bag.id,item_name:`${e.bag.id} Handbag`,item_category:"Handbag",price:e.bag.price,quantity:e.quantity}));S(i,o.totalPrice)}});const I=T(()=>o.totalItems>=500?0:o.totalItems),U=T(()=>o.totalPrice+I.value);return tt({title:"Wish List - Fashionable Handbags",meta:[{name:"description",content:"View your wish list and manage favorite items."}]}),(i,e)=>{const l=O,d=Y;return u(),m("div",Ut,[t("div",Mt,[e[3]||(e[3]=t("div",null,[t("h1",{class:"text-foreground mb-2 text-3xl font-bold"},"Wish List"),t("p",{class:"text-muted-foreground"},"Manage your favorite items")],-1)),s(o).items.length>0?(u(),m("div",Bt,[y(s(k),{variant:"outline",size:"sm",onClick:V,class:"text-destructive hover:bg-destructive/10 hover:text-destructive dark:text-destructive dark:hover:bg-destructive/20 dark:hover:text-destructive cursor-pointer"},{default:x(()=>[...e[2]||(e[2]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),b(" Clear Wish List ",-1)])]),_:1})])):P("",!0)]),s(o).items.length>0?(u(),m("div",At,[t("div",Nt,[(u(!0),m(H,null,W(s(o).items,n=>(u(),m("div",{key:n.bagId,class:"cart-item-card"},[t("div",Ot,[t("div",Ht,[y(l,{src:n.bag.images[0].url,alt:n.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:96,height:96,format:"webp"},null,8,["src","alt"])]),t("div",Wt,[t("div",jt,[t("div",null,[t("h3",zt,r(n.bag.id)+" Handbag",1)]),t("button",{onClick:C=>p(n.bagId),class:"cart-item-remove"},[...e[4]||(e[4]=[t("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])],8,Ft)]),t("div",Rt,[t("p",Qt," ¥"+r((n.bag.price*n.quantity).toLocaleString()),1),t("p",Vt," ¥"+r(n.bag.price)+" × "+r(n.quantity),1)]),t("div",Et,[t("div",Yt,[t("button",{onClick:C=>f(n.bagId),class:"quantity-btn"}," - ",8,Gt),t("input",{value:n.quantity,onInput:C=>h(n.bagId,C.target.value),type:"number",min:"50",step:"50",class:"quantity-input"},null,40,Xt),t("button",{onClick:C=>a(n.bagId),class:"quantity-btn"}," + ",8,Jt)])])])])]))),128))]),t("div",Kt,[t("div",Zt,[e[13]||(e[13]=t("h2",{class:"cart-summary-title"},"Wish List Summary",-1)),t("div",te,[t("div",ee,[e[5]||(e[5]=t("span",null,"Items",-1)),t("span",null,r(s(o).totalItems)+" pieces",1)]),t("div",oe,[e[6]||(e[6]=t("span",null,"Subtotal",-1)),t("span",null,"¥"+r(s(o).totalPrice.toLocaleString()),1)]),t("div",ae,[e[7]||(e[7]=t("span",null,"Shipping",-1)),s(I)===0?(u(),m("span",se," Free ")):(u(),m("span",ne,"¥"+r(s(I).toLocaleString()),1))]),e[9]||(e[9]=t("div",{class:"shipping-info"},[t("p",null,"• 500 pieces or more for free shipping"),t("p",null," • Factory to transit warehouse shipping (not international logistics) ")],-1)),e[10]||(e[10]=t("hr",{class:"summary-divider"},null,-1)),t("div",re,[e[8]||(e[8]=t("span",null,"Total",-1)),t("div",ie,[t("div",null,"¥"+r(s(U).toLocaleString()),1),t("div",le,[s(c).isLoading?(u(),m("span",ce," Loading USD... ")):(u(),m("span",de,r(s(c).formatUSDPrice(s(U))||"USD price unavailable"),1))])])])]),t("div",ue,[e[12]||(e[12]=t("div",{class:"whatsapp-notice"},[t("p",null," 💬 Click to jump to WhatsApp customer service chat, pls feel free to click send ")],-1)),y(s(k),{size:"lg",variant:"enhanced",class:"send-button",style:{color:"white","background-color":"#4a3429"},onClick:R},{default:x(()=>[...e[11]||(e[11]=[b(" Send To Wholesaler ",-1)])]),_:1}),t("div",{class:"continue-shopping"},[t("button",{onClick:Q,class:"continue-shopping-btn"}," Browse More Products >> ")])]),e[14]||(e[14]=t("div",{class:"welcome-message"},[t("p",null," 🌟 Our handbag styles are very popular worldwide! Welcome to place your order and experience our premium quality products. ")],-1))])])])):(u(),m("div",pe,[e[16]||(e[16]=K('<div class="empty-cart-icon" data-v-318fabe9><svg class="empty-wishlist-icon text-muted-foreground h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-318fabe9><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-v-318fabe9></path></svg></div><h2 class="empty-cart-title" data-v-318fabe9>Your wish list is empty</h2><p class="empty-cart-description" data-v-318fabe9> You haven&#39;t added any items to your wish list yet </p><p class="empty-cart-message" data-v-318fabe9> 🌟 Our handbag styles are very popular worldwide! Welcome to browse and experience our premium quality products. </p>',4)),y(d,{to:"/products"},{default:x(()=>[y(s(k),{size:"lg",class:"browse-button",style:{color:"white","background-color":"#4a3429"}},{default:x(()=>[...e[15]||(e[15]=[b(" Browse More Products ",-1)])]),_:1})]),_:1})])),y(Dt,{"is-open":s(D),"cart-items":s(o).items,"total-price":s(U),"shipping-cost":s(I),onClose:e[0]||(e[0]=n=>D.value=!1)},null,8,["is-open","cart-items","total-price","shipping-cost"]),y(qt,{"is-open":s(_),title:"Clear Wish List",message:"Are you sure you want to remove all items from your wish list? This action cannot be undone.","confirm-text":"Clear Wish List","cancel-text":"Cancel",variant:"danger",onClose:e[1]||(e[1]=n=>_.value=!1),onConfirm:E},null,8,["is-open"])])}}},Ce=M(me,[["__scopeId","data-v-318fabe9"]]);export{Ce as default};
