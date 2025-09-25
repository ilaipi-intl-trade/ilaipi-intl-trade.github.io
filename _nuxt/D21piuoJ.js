import{_ as H}from"./tiF_snPY.js";import{_ as N}from"./6ETAZGtE.js";import{u as q}from"./B7xX6Qq_.js";import{a as Q,b as W,u as j,n as R}from"#entry";import{_ as I}from"./DlAUqK2U.js";import{O as h,Q as m,L as M,a9 as B,U as t,a3 as f,X as d,u as l,a1 as _,a2 as w,c as T,W as P,a4 as A,a0 as O,a5 as z,w as F,b as U,o as V,V as E}from"./Co5tMnYY.js";import{_ as k}from"./Bbo0jKgt.js";import{M as L}from"./C5MGQOzy.js";import"./Bvi1VPMX.js";import"./zWPNylOE.js";import"./C7xmkHdv.js";const Y={class:"cart-items-section"},G={class:"cart-item-content"},X={class:"cart-item-image"},J={class:"cart-item-info"},K={class:"cart-item-header"},Z={class:"cart-item-title"},tt=["onClick"],et={class:"cart-item-price"},ot={class:"price-total"},at={class:"price-detail"},st={class:"cart-item-controls"},nt={class:"quantity-controls"},rt=["onClick"],it=["value","onInput"],lt=["onClick"],ct={__name:"CartItemList",props:{items:{type:Array,required:!0}},emits:["removeItem","increaseQuantity","decreaseQuantity","updateQuantity"],setup(u,{emit:i}){const c=i,p=Q(),{trackRemoveFromCart:y}=q(),x=g=>{const r=p.items.find(o=>o.bagId===g);r&&y(r.bag.id,`${r.bag.id} Handbag`,r.bag.price,r.quantity,"Handbag"),c("removeItem",g)},v=g=>{c("increaseQuantity",g)},$=g=>{c("decreaseQuantity",g)},C=(g,r)=>{const o=Number.parseInt(r)||20;c("updateQuantity",g,o)};return(g,r)=>{const o=N;return m(),h("div",Y,[(m(!0),h(M,null,B(u.items,a=>(m(),h("div",{key:a.bagId,class:"cart-item-card"},[t("div",G,[t("div",X,[f(o,{src:a.bag.images[0].url,alt:a.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:96,height:96,format:"webp"},null,8,["src","alt"])]),t("div",J,[t("div",K,[t("div",null,[t("h3",Z,d(a.bag.id)+" Handbag",1)]),t("button",{onClick:e=>x(a.bagId),class:"cart-item-remove"},[...r[0]||(r[0]=[t("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])],8,tt)]),t("div",et,[t("p",ot," ¥"+d((a.bag.price*a.quantity).toLocaleString()),1),t("p",at," ¥"+d(a.bag.price)+" × "+d(a.quantity),1)]),t("div",st,[t("div",nt,[t("button",{onClick:e=>$(a.bagId),class:"quantity-btn"}," - ",8,rt),t("input",{value:a.quantity,onInput:e=>C(a.bagId,e.target.value),type:"number",min:"50",step:"50",class:"quantity-input"},null,40,it),t("button",{onClick:e=>v(a.bagId),class:"quantity-btn"}," + ",8,lt)])])])])]))),128))])}}},dt=I(ct,[["__scopeId","data-v-1f8234c5"]]),ut={class:"cart-summary-section"},pt={class:"cart-summary-card"},mt={class:"cart-summary-details"},gt={class:"summary-row"},ht={class:"summary-row"},yt={class:"summary-row"},bt={key:0,class:"text-success"},ft={key:1},xt={class:"summary-total"},vt={class:"total-amount"},wt={class:"total-usd"},_t={key:0},kt={key:1},$t={class:"cart-summary-actions"},Ct={__name:"CartSummary",props:{totalItems:{type:Number,required:!0},totalPrice:{type:Number,required:!0},shippingCost:{type:Number,required:!0},totalWithShipping:{type:Number,required:!0}},emits:["sendToWholesaler","continueShopping"],setup(u,{emit:i}){const c=i,p=Q(),y=W(),{trackBeginCheckout:x,trackUserInteraction:v,trackButtonClick:$}=q(),C=()=>{if(!p.items||p.items.length===0)return;const a=p.items.reduce((s,n)=>s+n.quantity,0),e=y.convertCNYToUSD(p.totalPrice);let b=`ID	Qty	RMB	USD	Total RMB	Total USD
`;p.items.forEach(s=>{const n=y.convertCNYToUSD(s.bag.price),S=s.bag.price*s.quantity,D=y.convertCNYToUSD(S);b+=`${s.bag.id}	${s.quantity}	${s.bag.price}	${n?n.toFixed(2):"N/A"}	${S}	${D?D.toFixed(2):"N/A"}
`}),b+=`
`,b+=`Total Items:	${a}
`,b+=`RMB:	${p.totalPrice}
`,b+=`USD:	${e?e.toFixed(2):"N/A"}
`,navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(b).then(()=>{const s=encodeURIComponent(b),n=`https://wa.me/${L}?text=${s}`;try{window.location.href=n}catch{window.open(n,"_blank","noopener,noreferrer")}}).catch(s=>{console.error("Modern clipboard API failed:",s),g(b)}):g(b)},g=a=>{try{const e=document.createElement("textarea");e.value=a,e.style.position="fixed",e.style.left="-999999px",e.style.top="-999999px",document.body.append(e),e.focus(),e.select();const b=document.execCommand("copy");if(e.remove(),b){const s=encodeURIComponent(a),n=`https://wa.me/${L}?text=${s}`;try{window.location.href=n}catch{window.open(n,"_blank","noopener,noreferrer")}}else{const s=`https://wa.me/${L}`;try{window.location.href=s}catch{window.open(s,"_blank","noopener,noreferrer")}}}catch(e){console.error("Fallback copy failed:",e);const b=`https://wa.me/${L}`;try{window.location.href=b}catch{window.open(b,"_blank","noopener,noreferrer")}}},r=()=>{if(p.items.length>0){const a=p.items.map(e=>({item_id:e.bag.id,item_name:`${e.bag.id} Handbag`,item_category:"Handbag",price:e.bag.price,quantity:e.quantity}));x(a,p.totalPrice),v("send_to_wholesaler","cart_page",{item_count:p.items.length}),$("send_to_wholesaler","cart_page",{item_count:p.items.length,total_value:p.totalPrice}),C()}c("sendToWholesaler")},o=()=>{c("continueShopping")};return(a,e)=>(m(),h("div",ut,[t("div",pt,[e[8]||(e[8]=t("h2",{class:"cart-summary-title"},"Wish List Summary",-1)),e[9]||(e[9]=t("div",{class:"cart-summary-title-divider"},null,-1)),t("div",mt,[t("div",gt,[e[0]||(e[0]=t("span",null,"Items",-1)),t("span",null,d(u.totalItems)+" pieces",1)]),t("div",ht,[e[1]||(e[1]=t("span",null,"Subtotal",-1)),t("span",null,"¥"+d(u.totalPrice.toLocaleString()),1)]),t("div",yt,[e[2]||(e[2]=t("span",null,"Shipping",-1)),u.shippingCost===0?(m(),h("span",bt," Free ")):(m(),h("span",ft,"¥"+d(u.shippingCost.toLocaleString()),1))]),e[4]||(e[4]=t("div",{class:"shipping-info"},[t("p",null,"• 500 pieces or more for free shipping"),t("p",null," • Factory to transit warehouse shipping (not international logistics) ")],-1)),e[5]||(e[5]=t("div",{class:"cart-summary-divider"},null,-1)),t("div",xt,[e[3]||(e[3]=t("span",null,"Total",-1)),t("div",vt,[t("div",null,"¥"+d(u.totalWithShipping.toLocaleString()),1),t("div",wt,[l(y).isLoading?(m(),h("span",_t," Loading USD... ")):(m(),h("span",kt,d(l(y).formatUSDPrice(u.totalWithShipping)||"USD price unavailable"),1))])])])]),e[10]||(e[10]=t("div",{class:"cart-summary-section-divider"},null,-1)),t("div",$t,[e[7]||(e[7]=t("div",{class:"whatsapp-notice"},[t("p",null," 💬 Click to jump to WhatsApp customer service chat, pls feel free to click send ")],-1)),f(l(k),{size:"lg",variant:"enhanced",class:"send-button",style:{color:"white","background-color":"#4a3429"},onClick:r},{default:_(()=>[...e[6]||(e[6]=[w(" Send To Wholesaler ",-1)])]),_:1}),t("div",{class:"continue-shopping"},[t("button",{onClick:o,class:"continue-shopping-btn"}," Browse More Products >> ")])]),e[11]||(e[11]=t("div",{class:"cart-summary-section-divider"},null,-1)),e[12]||(e[12]=t("div",{class:"welcome-message"},[t("p",null," 🌟 Our handbag styles are very popular worldwide! Welcome to place your order and experience our premium quality products. ")],-1))])]))}},St=I(Ct,[["__scopeId","data-v-b64d9614"]]),It={class:"mb-6 flex items-center justify-between"},Dt={class:"flex items-center gap-4"},Lt={class:"text-sm text-gray-600 dark:text-gray-300"},Tt={class:"font-semibold text-gray-900 dark:text-white"},Pt={class:"mb-6 overflow-x-auto"},qt={class:"w-full border-collapse"},Qt={class:"px-4 py-3"},Ut={class:"flex flex-col items-center gap-2"},Nt={class:"h-16 w-16 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"},Wt={class:"text-xs font-medium text-gray-600 dark:text-gray-300"},Mt={class:"px-4 py-3 text-center text-sm text-gray-900 dark:text-white"},Bt={class:"px-4 py-3 text-right text-sm text-gray-900 dark:text-white"},At={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},Ot={class:"border-t-2 border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"},Ht={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},jt={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},Rt={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},zt={class:"px-4 py-3 text-right"},Ft={class:"text-primary text-lg font-bold"},Vt={class:"text-sm font-normal text-gray-600 dark:text-gray-300"},Et={key:0},Yt={key:1},Gt={class:"flex gap-3"},Xt={__name:"CheckoutDialog",props:{isOpen:{type:Boolean,default:!1},cartItems:{type:Array,default:()=>[]},totalPrice:{type:Number,default:0},shippingCost:{type:Number,default:0}},emits:["close"],setup(u,{emit:i}){const c=u,p=i,y=W(),x=T(()=>c.cartItems.reduce((r,o)=>r+o.quantity,0)),v=T(()=>c.totalPrice-c.shippingCost),$=async()=>{try{let r="";r+=`Order Date: ${new Date().toLocaleDateString()}

`,r+=`Product ID	Quantity	Unit Price	Total
`,c.cartItems.forEach(o=>{const a=o.bag.price*o.quantity;r+=`${o.bag.id}	${o.quantity}	${o.bag.price}	${a}
`}),r+=`
`,r+=`Total Items	${x.value}
`,r+=`Total Price	${c.totalPrice}
`,await navigator.clipboard.writeText(r),typeof window<"u"&&window.$toast&&window.$toast.success("Success","Order details copied to clipboard!"),g()}catch(r){console.error("Failed to copy to clipboard:",r),typeof window<"u"&&window.$toast&&window.$toast.error("Error","Failed to copy to clipboard")}},C=()=>{const r=`
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
        <p><strong>Total Items:</strong> ${x.value} pieces</p>
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
          ${c.cartItems.map(a=>{const e=a.bag.price*a.quantity;return`
              <tr>
                <td>${a.bag.id}</td>
                <td>${a.quantity} pieces</td>
                <td>¥${a.bag.price}</td>
                <td>¥${e.toLocaleString()}</td>
              </tr>
            `}).join("")}
        </tbody>
        <tfoot>
          <tr class="total-row">
            <td><strong>Total</strong></td>
            <td><strong>${x.value} pieces</strong></td>
            <td></td>
            <td><strong>¥${c.totalPrice.toLocaleString()}</strong></td>
          </tr>
        </tfoot>
      </table>
      
      <div class="summary">
        <h3>Order Summary</h3>
        <p><strong>Total Items:</strong> ${x.value} pieces</p>
        <p><strong>Total Price:</strong> ¥${c.totalPrice.toLocaleString()}</p>
        <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
      </div>
    </body>
    </html>
  `,o=window.open("","_blank");o.document.write(r),o.document.close(),o.focus(),o.print(),o.close()},g=()=>{p("close")};return(r,o)=>{const a=N;return u.isOpen?(m(),h("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center p-4",onClick:g},[o[8]||(o[8]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:o[0]||(o[0]=A(()=>{},["stop"]))},[t("div",It,[t("div",Dt,[o[2]||(o[2]=t("h3",{class:"text-2xl font-bold text-gray-900 dark:text-white"}," Order Summary ",-1)),t("div",Lt,[o[1]||(o[1]=w(" Order Date: ",-1)),t("span",Tt,d(new Date().toLocaleDateString()),1)])]),t("button",{onClick:g,class:"cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"},[...o[3]||(o[3]=[t("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),t("div",Pt,[t("table",qt,[o[4]||(o[4]=t("thead",null,[t("tr",{class:"border-b border-gray-200 dark:border-gray-700"},[t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Design "),t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Quantity "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Unit Price "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Total ")])],-1)),t("tbody",null,[(m(!0),h(M,null,B(u.cartItems,e=>(m(),h("tr",{key:e.bagId,class:"border-b border-gray-100 dark:border-gray-800"},[t("td",Qt,[t("div",Ut,[t("div",Nt,[e.bag.images[0]?(m(),O(a,{key:0,src:e.bag.images[0].url,alt:e.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:64,height:64,format:"webp"},null,8,["src","alt"])):P("",!0)]),t("span",Wt,d(e.bag.id),1)])]),t("td",Mt,d(e.quantity)+" pieces ",1),t("td",Bt," ¥"+d(e.bag.price),1),t("td",At," ¥"+d((e.bag.price*e.quantity).toLocaleString()),1)]))),128))]),t("tfoot",null,[t("tr",Ot,[t("td",Ht,d(u.cartItems.length)+" designs ",1),t("td",jt,d(l(x))+" pieces ",1),t("td",Rt," ¥"+d(l(v).toLocaleString()),1),t("td",zt,[t("div",Ft," ¥"+d(u.totalPrice.toLocaleString()),1),t("div",Vt,[l(y).isLoading?(m(),h("span",Et,"Loading USD...")):(m(),h("span",Yt,d(l(y).formatUSDPrice(u.totalPrice)||"USD price unavailable"),1))])])])])])]),t("div",Gt,[f(l(k),{variant:"outline",class:"btn-outline-enhanced flex-1 cursor-pointer",onClick:g},{default:_(()=>[...o[5]||(o[5]=[w(" Close ",-1)])]),_:1}),f(l(k),{class:"flex-1 cursor-pointer",style:{color:"white","background-color":"#4a3429"},onClick:$},{default:_(()=>[...o[6]||(o[6]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1),w(" Copy ",-1)])]),_:1}),f(l(k),{class:"hidden flex-1",onClick:C},{default:_(()=>[...o[7]||(o[7]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"})],-1),w(" Print ",-1)])]),_:1})])])])):P("",!0)}}},Jt=I(Xt,[["__scopeId","data-v-72957e9b"]]),Kt={class:"mb-4 text-lg font-semibold text-gray-900 dark:text-white"},Zt={class:"mb-6 text-gray-600 dark:text-gray-300"},te={class:"flex gap-3"},ee={__name:"ConfirmDialog",props:{isOpen:{type:Boolean,default:!1},title:{type:String,default:"Confirm Action"},message:{type:String,default:"Are you sure you want to proceed?"},confirmText:{type:String,default:"Confirm"},cancelText:{type:String,default:"Cancel"},variant:{type:String,default:"default"}},emits:["close","confirm"],setup(u,{emit:i}){const c=i,p=()=>{c("confirm"),c("close")},y=()=>{c("close")};return(x,v)=>(m(),O(z,{to:"body"},[u.isOpen?(m(),h("div",{key:0,class:"dialog-overlay fixed inset-0 z-50 flex items-center justify-center p-4",onClick:y},[v[1]||(v[1]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:v[0]||(v[0]=A(()=>{},["stop"]))},[t("h3",Kt,d(u.title),1),t("p",Zt,d(u.message),1),t("div",te,[f(l(k),{variant:"outline",class:"btn-outline-enhanced flex-1 cursor-pointer",onClick:y},{default:_(()=>[w(d(u.cancelText),1)]),_:1}),f(l(k),{class:"flex-1 cursor-pointer",style:{color:"white","background-color":"#4a3429"},onClick:p},{default:_(()=>[w(d(u.confirmText),1)]),_:1})])])])):P("",!0)]))}},oe=I(ee,[["__scopeId","data-v-7d35bdfb"]]),ae={class:"cart-page-container"},se={class:"mb-8 flex items-center justify-between"},ne={key:0},re={key:0,class:"cart-main-container"},ie={key:1,class:"empty-cart-state"},le={__name:"cart",setup(u){const i=Q();F(()=>i.items,s=>{console.warn("🛒 购物车页面商品更新:",s)},{deep:!0});const{trackViewCart:c}=q(),p=U(!1),y=U(!1),x=s=>{i.removeFromCart(s)},v=s=>{i.increaseQuantity(s)},$=s=>{i.decreaseQuantity(s)},C=(s,n)=>{const S=Number.parseInt(n)||20;i.updateQuantity(s,S)},g=()=>{},r=()=>{R("/products")},o=()=>{y.value=!0},a=()=>{i.clearCart()};V(()=>{if(console.warn("🛒 购物车页面初始化，商品数量:",i.items.length),i.items.length>0){const s=i.items.map(n=>({item_id:n.bag.id,item_name:`${n.bag.id} Handbag`,item_category:"Handbag",price:n.bag.price,quantity:n.quantity}));c(s,i.totalPrice)}});const e=T(()=>i.totalItems>=500?0:i.totalItems),b=T(()=>i.totalPrice+e.value);return j({title:"Wish List - Fashionable Handbags",meta:[{name:"description",content:"View your wish list and manage favorite items."}]}),(s,n)=>{const S=H;return m(),h("div",ae,[t("div",se,[n[3]||(n[3]=t("div",null,[t("h1",{class:"text-foreground mb-2 text-3xl font-bold"},"Wish List"),t("p",{class:"text-muted-foreground"},"Manage your favorite items")],-1)),l(i).items.length>0?(m(),h("div",ne,[f(l(k),{variant:"outline",size:"sm",onClick:o,class:"text-destructive hover:bg-destructive/10 hover:text-destructive dark:text-destructive dark:hover:bg-destructive/20 dark:hover:text-destructive cursor-pointer"},{default:_(()=>[...n[2]||(n[2]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),w(" Clear Wish List ",-1)])]),_:1})])):P("",!0)]),l(i).items.length>0?(m(),h("div",re,[f(dt,{items:l(i).items,onRemoveItem:x,onIncreaseQuantity:v,onDecreaseQuantity:$,onUpdateQuantity:C},null,8,["items"]),f(St,{"total-items":l(i).totalItems,"total-price":l(i).totalPrice,"shipping-cost":l(e),"total-with-shipping":l(b),onSendToWholesaler:g,onContinueShopping:r},null,8,["total-items","total-price","shipping-cost","total-with-shipping"])])):(m(),h("div",ie,[n[5]||(n[5]=E('<div class="empty-cart-icon" data-v-d8dfa0b6><svg class="empty-wishlist-icon text-muted-foreground h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-d8dfa0b6><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-v-d8dfa0b6></path></svg></div><h2 class="empty-cart-title" data-v-d8dfa0b6>Your wish list is empty</h2><p class="empty-cart-description" data-v-d8dfa0b6> You haven&#39;t added any items to your wish list yet </p><p class="empty-cart-message" data-v-d8dfa0b6> 🌟 Our handbag styles are very popular worldwide! Welcome to browse and experience our premium quality products. </p>',4)),f(S,{to:"/products"},{default:_(()=>[f(l(k),{size:"lg",class:"browse-button",style:{color:"white","background-color":"#4a3429"}},{default:_(()=>[...n[4]||(n[4]=[w(" Browse More Products ",-1)])]),_:1})]),_:1})])),f(Jt,{"is-open":l(p),"cart-items":l(i).items,"total-price":l(b),"shipping-cost":l(e),onClose:n[0]||(n[0]=D=>p.value=!1)},null,8,["is-open","cart-items","total-price","shipping-cost"]),f(oe,{"is-open":l(y),title:"Clear Wish List",message:"Are you sure you want to remove all items from your wish list? This action cannot be undone.","confirm-text":"Clear Wish List","cancel-text":"Cancel",variant:"danger",onClose:n[1]||(n[1]=D=>y.value=!1),onConfirm:a},null,8,["is-open"])])}}},ve=I(le,[["__scopeId","data-v-d8dfa0b6"]]);export{ve as default};
