import{_ as R}from"./B54Z19yI.js";import{_ as z}from"./tiF_snPY.js";import{_ as W}from"./6ETAZGtE.js";import{u as Q}from"./B7xX6Qq_.js";import{a as U,b as M,u as F,n as V}from"#entry";import{_ as D}from"./DlAUqK2U.js";import{O as h,Q as p,L as N,a9 as B,U as t,a3 as x,X as d,u as i,a1 as _,a2 as k,c as T,W as P,a4 as A,a0 as O,a5 as E,b as q,w as Y,o as G}from"./Co5tMnYY.js";import{_ as $}from"./Bbo0jKgt.js";import{M as L}from"./C5MGQOzy.js";import"./Bvi1VPMX.js";import"./zWPNylOE.js";import"./C7xmkHdv.js";const X={class:"cart-items-section"},J={class:"cart-item-content"},K={class:"cart-item-image"},Z={class:"cart-item-info"},tt={class:"cart-item-header"},et={class:"cart-item-title"},ot=["onClick"],st={class:"cart-item-price"},at={class:"price-total"},nt={class:"price-detail"},rt={class:"cart-item-controls"},it={class:"quantity-controls"},lt=["onClick"],ct=["value","onInput"],dt=["onClick"],ut={__name:"CartItemList",props:{items:{type:Array,required:!0}},emits:["removeItem","increaseQuantity","decreaseQuantity","updateQuantity"],setup(u,{emit:r}){const l=r,m=U(),{trackRemoveFromCart:f}=Q(),v=y=>{const n=m.items.find(o=>o.bagId===y);n&&f(n.bag.id,`${n.bag.id} Handbag`,n.bag.price,n.quantity,"Handbag"),l("removeItem",y)},w=y=>{l("increaseQuantity",y)},C=y=>{l("decreaseQuantity",y)},S=(y,n)=>{const o=Number.parseInt(n)||1;l("updateQuantity",y,o)};return(y,n)=>{const o=W;return p(),h("div",X,[(p(!0),h(N,null,B(u.items,s=>(p(),h("div",{key:s.bagId,class:"cart-item-card"},[t("div",J,[t("div",K,[x(o,{src:s.bag.images[0].url,alt:s.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:96,height:96,format:"webp"},null,8,["src","alt"])]),t("div",Z,[t("div",tt,[t("div",null,[t("h3",et,d(s.bag.id)+" Handbag",1)]),t("button",{onClick:e=>v(s.bagId),class:"cart-item-remove"},[...n[0]||(n[0]=[t("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])],8,ot)]),t("div",st,[t("p",at," ¥"+d((s.bag.price*s.quantity).toLocaleString()),1),t("p",nt," ¥"+d(s.bag.price)+" × "+d(s.quantity),1)]),t("div",rt,[t("div",it,[t("button",{onClick:e=>C(s.bagId),class:"quantity-btn"}," - ",8,lt),t("input",{value:s.quantity,onInput:e=>S(s.bagId,e.target.value),type:"number",min:"1",class:"quantity-input"},null,40,ct),t("button",{onClick:e=>w(s.bagId),class:"quantity-btn"}," + ",8,dt)])])])])]))),128))])}}},pt=D(ut,[["__scopeId","data-v-265154a6"]]),mt={class:"cart-summary-section"},gt={class:"cart-summary-card"},yt={class:"cart-summary-details"},ht={class:"summary-row"},bt={class:"summary-row"},ft={class:"summary-row"},xt={key:0,class:"text-success"},vt={key:1},wt={class:"summary-total"},_t={class:"total-amount"},kt={class:"total-usd"},$t={key:0},Ct={key:1},St={class:"cart-summary-actions"},It={__name:"CartSummary",props:{totalItems:{type:Number,required:!0},totalPrice:{type:Number,required:!0},shippingCost:{type:Number,required:!0},totalWithShipping:{type:Number,required:!0}},emits:["sendToWholesaler","continueShopping"],setup(u,{emit:r}){const l=r,m=U(),f=M(),{trackBeginCheckout:v,trackUserInteraction:w,trackButtonClick:C}=Q(),S=()=>{if(!m.items||m.items.length===0)return;const s=m.items.reduce((g,c)=>g+c.quantity,0),e=f.convertCNYToUSD(m.totalPrice);let b=`ID	Qty	RMB	USD	Total RMB	Total USD
`;m.items.forEach(g=>{const c=f.convertCNYToUSD(g.bag.price),a=g.bag.price*g.quantity,I=f.convertCNYToUSD(a);b+=`${g.bag.id}	${g.quantity}	${g.bag.price}	${c?c.toFixed(2):"N/A"}	${a}	${I?I.toFixed(2):"N/A"}
`}),b+=`
`,b+=`Total Items:	${s}
`,b+=`RMB:	${m.totalPrice}
`,b+=`USD:	${e?e.toFixed(2):"N/A"}
`,navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(b).then(()=>{const g=encodeURIComponent(b),c=`https://wa.me/${L}?text=${g}`;try{window.location.href=c}catch{window.open(c,"_blank","noopener,noreferrer")}}).catch(g=>{console.error("Modern clipboard API failed:",g),y(b)}):y(b)},y=s=>{try{const e=document.createElement("textarea");e.value=s,e.style.position="fixed",e.style.left="-999999px",e.style.top="-999999px",document.body.append(e),e.focus(),e.select();const b=document.execCommand("copy");if(e.remove(),b){const g=encodeURIComponent(s),c=`https://wa.me/${L}?text=${g}`;try{window.location.href=c}catch{window.open(c,"_blank","noopener,noreferrer")}}else{const g=`https://wa.me/${L}`;try{window.location.href=g}catch{window.open(g,"_blank","noopener,noreferrer")}}}catch(e){console.error("Fallback copy failed:",e);const b=`https://wa.me/${L}`;try{window.location.href=b}catch{window.open(b,"_blank","noopener,noreferrer")}}},n=()=>{if(m.items.length>0){const s=m.items.map(e=>({item_id:e.bag.id,item_name:`${e.bag.id} Handbag`,item_category:"Handbag",price:e.bag.price,quantity:e.quantity}));v(s,m.totalPrice),w("send_to_wholesaler","cart_page",{item_count:m.items.length}),C("send_to_wholesaler","cart_page",{item_count:m.items.length,total_value:m.totalPrice}),S()}l("sendToWholesaler")},o=()=>{l("continueShopping")};return(s,e)=>(p(),h("div",mt,[t("div",gt,[e[8]||(e[8]=t("h2",{class:"cart-summary-title"},"Wish List Summary",-1)),e[9]||(e[9]=t("div",{class:"cart-summary-title-divider"},null,-1)),t("div",yt,[t("div",ht,[e[0]||(e[0]=t("span",null,"Items",-1)),t("span",null,d(u.totalItems)+" pieces",1)]),t("div",bt,[e[1]||(e[1]=t("span",null,"Subtotal",-1)),t("span",null,"¥"+d(u.totalPrice.toLocaleString()),1)]),t("div",ft,[e[2]||(e[2]=t("span",null,"Shipping",-1)),u.shippingCost===0?(p(),h("span",xt," Free ")):(p(),h("span",vt,"¥"+d(u.shippingCost.toLocaleString()),1))]),e[4]||(e[4]=t("div",{class:"shipping-info"},[t("p",null,"• 500 pieces or more for free shipping"),t("p",null," • Factory to transit warehouse shipping (not international logistics) ")],-1)),e[5]||(e[5]=t("div",{class:"cart-summary-divider"},null,-1)),t("div",wt,[e[3]||(e[3]=t("span",null,"Total",-1)),t("div",_t,[t("div",null,"¥"+d(u.totalWithShipping.toLocaleString()),1),t("div",kt,[i(f).isLoading?(p(),h("span",$t," Loading USD... ")):(p(),h("span",Ct,d(i(f).formatUSDPrice(u.totalWithShipping)||"USD price unavailable"),1))])])])]),e[10]||(e[10]=t("div",{class:"cart-summary-section-divider"},null,-1)),t("div",St,[e[7]||(e[7]=t("div",{class:"whatsapp-notice"},[t("p",null," 💬 Click to jump to WhatsApp customer service chat, pls feel free to click send ")],-1)),x(i($),{size:"lg",variant:"enhanced",class:"send-button",style:{color:"white","background-color":"#4a3429"},onClick:n},{default:_(()=>[...e[6]||(e[6]=[k(" Send To Wholesaler ",-1)])]),_:1}),t("div",{class:"continue-shopping"},[t("button",{onClick:o,class:"continue-shopping-btn"}," Browse More Products >> ")])]),e[11]||(e[11]=t("div",{class:"cart-summary-section-divider"},null,-1)),e[12]||(e[12]=t("div",{class:"welcome-message"},[t("p",null," 🌟 Our handbag styles are very popular worldwide! Welcome to place your order and experience our premium quality products. ")],-1))])]))}},Dt=D(It,[["__scopeId","data-v-c51be2fb"]]),Lt={class:"mb-6 flex items-center justify-between"},Tt={class:"flex items-center gap-4"},Pt={class:"text-sm text-gray-600 dark:text-gray-300"},qt={class:"font-semibold text-gray-900 dark:text-white"},Qt={class:"mb-6 overflow-x-auto"},Ut={class:"w-full border-collapse"},Wt={class:"px-4 py-3"},Mt={class:"flex flex-col items-center gap-2"},Nt={class:"h-16 w-16 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"},Bt={class:"text-xs font-medium text-gray-600 dark:text-gray-300"},At={class:"px-4 py-3 text-center text-sm text-gray-900 dark:text-white"},Ot={class:"px-4 py-3 text-right text-sm text-gray-900 dark:text-white"},Ht={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},jt={class:"border-t-2 border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"},Rt={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},zt={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},Ft={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},Vt={class:"px-4 py-3 text-right"},Et={class:"text-primary text-lg font-bold"},Yt={class:"text-sm font-normal text-gray-600 dark:text-gray-300"},Gt={key:0},Xt={key:1},Jt={class:"flex gap-3"},Kt={__name:"CheckoutDialog",props:{isOpen:{type:Boolean,default:!1},cartItems:{type:Array,default:()=>[]},totalPrice:{type:Number,default:0},shippingCost:{type:Number,default:0}},emits:["close"],setup(u,{emit:r}){const l=u,m=r,f=M(),v=T(()=>l.cartItems.reduce((n,o)=>n+o.quantity,0)),w=T(()=>l.totalPrice-l.shippingCost),C=async()=>{try{let n="";n+=`Order Date: ${new Date().toLocaleDateString()}

`,n+=`Product ID	Quantity	Unit Price	Total
`,l.cartItems.forEach(o=>{const s=o.bag.price*o.quantity;n+=`${o.bag.id}	${o.quantity}	${o.bag.price}	${s}
`}),n+=`
`,n+=`Total Items	${v.value}
`,n+=`Total Price	${l.totalPrice}
`,await navigator.clipboard.writeText(n),typeof window<"u"&&window.$toast&&window.$toast.success("Success","Order details copied to clipboard!"),y()}catch(n){console.error("Failed to copy to clipboard:",n),typeof window<"u"&&window.$toast&&window.$toast.error("Error","Failed to copy to clipboard")}},S=()=>{const n=`
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
        <p><strong>Total Price:</strong> ¥${l.totalPrice.toLocaleString()}</p>
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
          ${l.cartItems.map(s=>{const e=s.bag.price*s.quantity;return`
              <tr>
                <td>${s.bag.id}</td>
                <td>${s.quantity} pieces</td>
                <td>¥${s.bag.price}</td>
                <td>¥${e.toLocaleString()}</td>
              </tr>
            `}).join("")}
        </tbody>
        <tfoot>
          <tr class="total-row">
            <td><strong>Total</strong></td>
            <td><strong>${v.value} pieces</strong></td>
            <td></td>
            <td><strong>¥${l.totalPrice.toLocaleString()}</strong></td>
          </tr>
        </tfoot>
      </table>
      
      <div class="summary">
        <h3>Order Summary</h3>
        <p><strong>Total Items:</strong> ${v.value} pieces</p>
        <p><strong>Total Price:</strong> ¥${l.totalPrice.toLocaleString()}</p>
        <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
      </div>
    </body>
    </html>
  `,o=window.open("","_blank");o.document.write(n),o.document.close(),o.focus(),o.print(),o.close()},y=()=>{m("close")};return(n,o)=>{const s=W;return u.isOpen?(p(),h("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center p-4",onClick:y},[o[8]||(o[8]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:o[0]||(o[0]=A(()=>{},["stop"]))},[t("div",Lt,[t("div",Tt,[o[2]||(o[2]=t("h3",{class:"text-2xl font-bold text-gray-900 dark:text-white"}," Order Summary ",-1)),t("div",Pt,[o[1]||(o[1]=k(" Order Date: ",-1)),t("span",qt,d(new Date().toLocaleDateString()),1)])]),t("button",{onClick:y,class:"cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"},[...o[3]||(o[3]=[t("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),t("div",Qt,[t("table",Ut,[o[4]||(o[4]=t("thead",null,[t("tr",{class:"border-b border-gray-200 dark:border-gray-700"},[t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Design "),t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Quantity "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Unit Price "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Total ")])],-1)),t("tbody",null,[(p(!0),h(N,null,B(u.cartItems,e=>(p(),h("tr",{key:e.bagId,class:"border-b border-gray-100 dark:border-gray-800"},[t("td",Wt,[t("div",Mt,[t("div",Nt,[e.bag.images[0]?(p(),O(s,{key:0,src:e.bag.images[0].url,alt:e.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:64,height:64,format:"webp"},null,8,["src","alt"])):P("",!0)]),t("span",Bt,d(e.bag.id),1)])]),t("td",At,d(e.quantity)+" pieces ",1),t("td",Ot," ¥"+d(e.bag.price),1),t("td",Ht," ¥"+d((e.bag.price*e.quantity).toLocaleString()),1)]))),128))]),t("tfoot",null,[t("tr",jt,[t("td",Rt,d(u.cartItems.length)+" designs ",1),t("td",zt,d(i(v))+" pieces ",1),t("td",Ft," ¥"+d(i(w).toLocaleString()),1),t("td",Vt,[t("div",Et," ¥"+d(u.totalPrice.toLocaleString()),1),t("div",Yt,[i(f).isLoading?(p(),h("span",Gt,"Loading USD...")):(p(),h("span",Xt,d(i(f).formatUSDPrice(u.totalPrice)||"USD price unavailable"),1))])])])])])]),t("div",Jt,[x(i($),{variant:"outline",class:"btn-outline-enhanced flex-1 cursor-pointer",onClick:y},{default:_(()=>[...o[5]||(o[5]=[k(" Close ",-1)])]),_:1}),x(i($),{class:"flex-1 cursor-pointer",style:{color:"white","background-color":"#4a3429"},onClick:C},{default:_(()=>[...o[6]||(o[6]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1),k(" Copy ",-1)])]),_:1}),x(i($),{class:"hidden flex-1",onClick:S},{default:_(()=>[...o[7]||(o[7]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"})],-1),k(" Print ",-1)])]),_:1})])])])):P("",!0)}}},Zt=D(Kt,[["__scopeId","data-v-72957e9b"]]),te={class:"mb-4 text-lg font-semibold text-gray-900 dark:text-white"},ee={class:"mb-6 text-gray-600 dark:text-gray-300"},oe={class:"flex gap-3"},se={__name:"ConfirmDialog",props:{isOpen:{type:Boolean,default:!1},title:{type:String,default:"Confirm Action"},message:{type:String,default:"Are you sure you want to proceed?"},confirmText:{type:String,default:"Confirm"},cancelText:{type:String,default:"Cancel"},variant:{type:String,default:"default"}},emits:["close","confirm"],setup(u,{emit:r}){const l=r,m=()=>{l("confirm"),l("close")},f=()=>{l("close")};return(v,w)=>(p(),O(E,{to:"body"},[u.isOpen?(p(),h("div",{key:0,class:"dialog-overlay fixed inset-0 z-50 flex items-center justify-center p-4",onClick:f},[w[1]||(w[1]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:w[0]||(w[0]=A(()=>{},["stop"]))},[t("h3",te,d(u.title),1),t("p",ee,d(u.message),1),t("div",oe,[x(i($),{variant:"outline",class:"btn-outline-enhanced flex-1 cursor-pointer",onClick:f},{default:_(()=>[k(d(u.cancelText),1)]),_:1}),x(i($),{class:"flex-1 cursor-pointer",style:{color:"white","background-color":"#4a3429"},onClick:m},{default:_(()=>[k(d(u.confirmText),1)]),_:1})])])])):P("",!0)]))}},ae=D(se,[["__scopeId","data-v-7d35bdfb"]]),ne={class:"cart-page-container"},re={class:"mb-8 flex items-center justify-between"},ie={key:0},le={key:0,class:"cart-loading-state"},ce={key:1,class:"cart-main-container"},de={key:2,class:"empty-cart-state"},ue={__name:"cart",setup(u){const r=U(),l=q(!0);Y(()=>r.items,c=>{console.warn("🛒 购物车页面商品更新:",c)},{deep:!0});const{trackViewCart:m}=Q(),f=q(!1),v=q(!1),w=c=>{r.removeFromCart(c)},C=c=>{r.increaseQuantity(c)},S=c=>{r.decreaseQuantity(c)},y=(c,a)=>{const I=Number.parseInt(a)||1;r.updateQuantity(c,I)},n=()=>{},o=()=>{V("/products")},s=()=>{v.value=!0},e=()=>{r.clearCart()};G(()=>{if(console.warn("🛒 购物车页面初始化，商品数量:",r.items.length),setTimeout(()=>{l.value=!1,console.warn("🛒 购物车加载完成，商品数量:",r.items.length)},100),r.items.length>0){const c=r.items.map(a=>({item_id:a.bag.id,item_name:`${a.bag.id} Handbag`,item_category:"Handbag",price:a.bag.price,quantity:a.quantity}));m(c,r.totalPrice)}});const b=T(()=>r.totalItems>=500?0:r.totalItems),g=T(()=>r.totalPrice+b.value);return F({title:"Wish List - Fashionable Handbags",meta:[{name:"description",content:"View your wish list and manage favorite items."}]}),(c,a)=>{const I=R,H=z;return p(),h("div",ne,[t("div",re,[a[3]||(a[3]=t("div",null,[t("h1",{class:"text-foreground mb-2 text-3xl font-bold"},"Wish List"),t("p",{class:"text-muted-foreground"},"Manage your favorite items")],-1)),x(I,null,{default:_(()=>[i(r).items.length>0?(p(),h("div",ie,[x(i($),{variant:"outline",size:"sm",onClick:s,class:"text-destructive hover:bg-destructive/10 hover:text-destructive dark:text-destructive dark:hover:bg-destructive/20 dark:hover:text-destructive cursor-pointer"},{default:_(()=>[...a[2]||(a[2]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),k(" Clear Wish List ",-1)])]),_:1})])):P("",!0)]),_:1})]),x(I,null,{fallback:_(()=>[...a[10]||(a[10]=[t("div",{class:"cart-loading-state"},[t("div",{class:"cart-loading-spinner"},[t("div",{class:"loading-spinner"})]),t("p",{class:"cart-loading-text"},"Loading your wish list...")],-1)])]),default:_(()=>[i(l)?(p(),h("div",le,[...a[4]||(a[4]=[t("div",{class:"cart-loading-spinner"},[t("div",{class:"loading-spinner"})],-1),t("p",{class:"cart-loading-text"},"Loading your wish list...",-1)])])):i(r).items.length>0?(p(),h("div",ce,[x(pt,{items:i(r).items,onRemoveItem:w,onIncreaseQuantity:C,onDecreaseQuantity:S,onUpdateQuantity:y},null,8,["items"]),x(Dt,{"total-items":i(r).totalItems,"total-price":i(r).totalPrice,"shipping-cost":i(b),"total-with-shipping":i(g),onSendToWholesaler:n,onContinueShopping:o},null,8,["total-items","total-price","shipping-cost","total-with-shipping"])])):(p(),h("div",de,[a[6]||(a[6]=t("div",{class:"empty-cart-icon"},[t("svg",{class:"empty-wishlist-icon text-muted-foreground h-20 w-20",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})])],-1)),a[7]||(a[7]=t("h2",{class:"empty-cart-title"},"Your wish list is empty",-1)),a[8]||(a[8]=t("p",{class:"empty-cart-description"}," You haven't added any items to your wish list yet ",-1)),a[9]||(a[9]=t("p",{class:"empty-cart-message"}," 🌟 Our handbag styles are very popular worldwide! Welcome to browse and experience our premium quality products. ",-1)),x(H,{to:"/products"},{default:_(()=>[x(i($),{size:"lg",class:"browse-button",style:{color:"white",cursor:"pointer","background-color":"#4a3429"}},{default:_(()=>[...a[5]||(a[5]=[k(" Browse More Products ",-1)])]),_:1})]),_:1})]))]),_:1}),x(Zt,{"is-open":i(f),"cart-items":i(r).items,"total-price":i(g),"shipping-cost":i(b),onClose:a[0]||(a[0]=j=>f.value=!1)},null,8,["is-open","cart-items","total-price","shipping-cost"]),x(ae,{"is-open":i(v),title:"Clear Wish List",message:"Are you sure you want to remove all items from your wish list? This action cannot be undone.","confirm-text":"Clear Wish List","cancel-text":"Cancel",variant:"danger",onClose:a[1]||(a[1]=j=>v.value=!1),onConfirm:e},null,8,["is-open"])])}}},$e=D(ue,[["__scopeId","data-v-61abee21"]]);export{$e as default};
