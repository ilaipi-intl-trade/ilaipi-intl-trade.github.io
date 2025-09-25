import{_ as A}from"./6ETAZGtE.js";import{_ as E}from"./tiF_snPY.js";import{c as T,O as g,W as P,Q as u,U as t,a2 as b,X as n,L as N,a9 as O,a0 as Y,u as r,a3 as h,a1 as y,a4 as H,w as G,b as B,o as X,V as J}from"./Co5tMnYY.js";import{_ as k}from"./Bbo0jKgt.js";import{a as W,b as K,u as Z,n as tt}from"#entry";import{u as et}from"./B7xX6Qq_.js";import{M as I}from"./C5MGQOzy.js";import{_ as ot}from"./DlAUqK2U.js";import"./C7xmkHdv.js";import"./Bvi1VPMX.js";import"./zWPNylOE.js";const st={class:"mb-6 flex items-center justify-between"},rt={class:"flex items-center gap-4"},at={class:"text-sm text-gray-600 dark:text-gray-300"},nt={class:"font-semibold text-gray-900 dark:text-white"},it={class:"mb-6 overflow-x-auto"},lt={class:"w-full border-collapse"},dt={class:"px-4 py-3"},ct={class:"flex flex-col items-center gap-2"},ut={class:"h-16 w-16 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"},pt={class:"text-xs font-medium text-gray-600 dark:text-gray-300"},gt={class:"px-4 py-3 text-center text-sm text-gray-900 dark:text-white"},mt={class:"px-4 py-3 text-right text-sm text-gray-900 dark:text-white"},xt={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},ht={class:"border-t-2 border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"},ft={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},bt={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},yt={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},vt={class:"px-4 py-3 text-right"},wt={class:"text-primary text-lg font-bold"},_t={class:"text-sm font-normal text-gray-600 dark:text-gray-300"},kt={key:0},$t={key:1},Ct={class:"flex gap-3"},St={__name:"CheckoutDialog",props:{isOpen:{type:Boolean,default:!1},cartItems:{type:Array,default:()=>[]},totalPrice:{type:Number,default:0},shippingCost:{type:Number,default:0}},emits:["close"],setup(m,{emit:o}){const d=m,S=o,$=W(),v=T(()=>d.cartItems.reduce((p,s)=>p+s.quantity,0)),w=T(()=>d.totalPrice-d.shippingCost),j=async()=>{try{let p="";p+=`Order Date: ${new Date().toLocaleDateString()}

`,p+=`Product ID	Quantity	Unit Price	Total
`,d.cartItems.forEach(s=>{const f=s.bag.price*s.quantity;p+=`${s.bag.id}	${s.quantity}	${s.bag.price}	${f}
`}),p+=`
`,p+=`Total Items	${v.value}
`,p+=`Total Price	${d.totalPrice}
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
        <p><strong>Total Price:</strong> ¥${d.totalPrice.toLocaleString()}</p>
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
          ${d.cartItems.map(f=>{const x=f.bag.price*f.quantity;return`
              <tr>
                <td>${f.bag.id}</td>
                <td>${f.quantity} pieces</td>
                <td>¥${f.bag.price}</td>
                <td>¥${x.toLocaleString()}</td>
              </tr>
            `}).join("")}
        </tbody>
        <tfoot>
          <tr class="total-row">
            <td><strong>Total</strong></td>
            <td><strong>${v.value} pieces</strong></td>
            <td></td>
            <td><strong>¥${d.totalPrice.toLocaleString()}</strong></td>
          </tr>
        </tfoot>
      </table>
      
      <div class="summary">
        <h3>Order Summary</h3>
        <p><strong>Total Items:</strong> ${v.value} pieces</p>
        <p><strong>Total Price:</strong> ¥${d.totalPrice.toLocaleString()}</p>
        <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
      </div>
    </body>
    </html>
  `,s=window.open("","_blank");s.document.write(p),s.document.close(),s.focus(),s.print(),s.close()},_=()=>{S("close")};return(p,s)=>{const f=A;return m.isOpen?(u(),g("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center",onClick:_},[s[8]||(s[8]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:s[0]||(s[0]=H(()=>{},["stop"]))},[t("div",st,[t("div",rt,[s[2]||(s[2]=t("h3",{class:"text-2xl font-bold text-gray-900 dark:text-white"}," Order Summary ",-1)),t("div",at,[s[1]||(s[1]=b(" Order Date: ",-1)),t("span",nt,n(new Date().toLocaleDateString()),1)])]),t("button",{onClick:_,class:"cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"},[...s[3]||(s[3]=[t("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),t("div",it,[t("table",lt,[s[4]||(s[4]=t("thead",null,[t("tr",{class:"border-b border-gray-200 dark:border-gray-700"},[t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Design "),t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Quantity "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Unit Price "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Total ")])],-1)),t("tbody",null,[(u(!0),g(N,null,O(m.cartItems,x=>(u(),g("tr",{key:x.bagId,class:"border-b border-gray-100 dark:border-gray-800"},[t("td",dt,[t("div",ct,[t("div",ut,[x.bag.images[0]?(u(),Y(f,{key:0,src:x.bag.images[0].url,alt:x.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:64,height:64,format:"webp"},null,8,["src","alt"])):P("",!0)]),t("span",pt,n(x.bag.id),1)])]),t("td",gt,n(x.quantity)+" pieces ",1),t("td",mt," ¥"+n(x.bag.price),1),t("td",xt," ¥"+n((x.bag.price*x.quantity).toLocaleString()),1)]))),128))]),t("tfoot",null,[t("tr",ht,[t("td",ft,n(m.cartItems.length)+" designs ",1),t("td",bt,n(r(v))+" pieces ",1),t("td",yt," ¥"+n(r(w).toLocaleString()),1),t("td",vt,[t("div",wt," ¥"+n(m.totalPrice.toLocaleString()),1),t("div",_t,[r($).isLoading?(u(),g("span",kt,"Loading USD...")):(u(),g("span",$t,n(r($).formatUSDPrice(m.totalPrice)||"USD price unavailable"),1))])])])])])]),t("div",Ct,[h(r(k),{variant:"outline",class:"btn-outline-enhanced flex-1 cursor-pointer",onClick:_},{default:y(()=>[...s[5]||(s[5]=[b(" Close ",-1)])]),_:1}),h(r(k),{class:"flex-1 cursor-pointer",style:{color:"white","background-color":"#4a3429"},onClick:j},{default:y(()=>[...s[6]||(s[6]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1),b(" Copy ",-1)])]),_:1}),h(r(k),{class:"hidden flex-1",onClick:D},{default:y(()=>[...s[7]||(s[7]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"})],-1),b(" Print ",-1)])]),_:1})])])])):P("",!0)}}},Dt={class:"mb-4 text-lg font-semibold text-gray-900 dark:text-white"},Lt={class:"mb-6 text-gray-600 dark:text-gray-300"},It={class:"flex gap-3"},Tt={__name:"ConfirmDialog",props:{isOpen:{type:Boolean,default:!1},title:{type:String,default:"Confirm Action"},message:{type:String,default:"Are you sure you want to proceed?"},confirmText:{type:String,default:"Confirm"},cancelText:{type:String,default:"Cancel"},variant:{type:String,default:"default"}},emits:["close","confirm"],setup(m,{emit:o}){const d=o,S=()=>{d("confirm"),d("close")},$=()=>{d("close")};return(v,w)=>m.isOpen?(u(),g("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center",onClick:$},[w[1]||(w[1]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:w[0]||(w[0]=H(()=>{},["stop"]))},[t("h3",Dt,n(m.title),1),t("p",Lt,n(m.message),1),t("div",It,[h(r(k),{variant:"outline",class:"btn-outline-enhanced flex-1 cursor-pointer",onClick:$},{default:y(()=>[b(n(m.cancelText),1)]),_:1}),h(r(k),{class:"flex-1 cursor-pointer",style:{color:"white","background-color":"#4a3429"},onClick:S},{default:y(()=>[b(n(m.confirmText),1)]),_:1})])])])):P("",!0)}},Pt={class:"min-h-screen lg:min-h-0"},jt={class:"w-full px-4 py-8"},Ut={class:"mb-8 flex items-center justify-between"},Mt={key:0},qt={key:0,class:"grid gap-8 lg:grid-cols-3"},Bt={class:"space-y-4 lg:col-span-2"},At={class:"flex gap-4"},Nt={class:"bg-muted h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg"},Ot={class:"flex-1"},Ht={class:"mb-2 flex items-start justify-between"},Wt={class:"text-card-foreground text-lg font-semibold"},zt=["onClick"],Ft={class:"flex items-center justify-between"},Rt={class:"flex w-fit items-center rounded-lg border"},Qt=["onClick"],Vt=["value","onInput"],Et=["onClick"],Yt={class:"text-right"},Gt={class:"text-primary text-lg font-bold"},Xt={class:"text-muted-foreground text-sm"},Jt={class:"lg:col-span-1"},Kt={class:"bg-card border-border rounded-lg border p-6 shadow-md lg:sticky lg:top-8"},Zt={class:"mb-6 space-y-3"},te={class:"text-muted-foreground flex justify-between"},ee={class:"text-muted-foreground flex justify-between"},oe={class:"text-muted-foreground flex justify-between"},se={key:0,class:"text-success"},re={key:1},ae={class:"text-card-foreground flex justify-between text-lg font-bold"},ne={class:"text-right"},ie={class:"text-muted-foreground text-sm font-normal"},le={key:0},de={key:1},ce={class:"space-y-3"},ue={key:1,class:"py-12 text-center"},pe={__name:"cart",setup(m){const o=K();G(()=>o.items,i=>{console.warn("🛒 购物车页面商品更新:",i)},{deep:!0});const d=W(),{trackViewCart:S,trackBeginCheckout:$,trackUserInteraction:v,trackRemoveFromCart:w,trackButtonClick:j}=et(),D=B(!1),_=B(!1),p=i=>{const e=o.items.find(l=>l.bagId===i);e&&w(e.bag.id,`${e.bag.id} Handbag`,e.bag.price,e.quantity,"Handbag"),o.removeFromCart(i)},s=i=>{o.increaseQuantity(i)},f=i=>{o.decreaseQuantity(i)},x=(i,e)=>{const l=Number.parseInt(e)||50;o.updateQuantity(i,l)},z=()=>{if(!o.items||o.items.length===0)return;const i=o.items.reduce((c,a)=>c+a.quantity,0),e=d.convertCNYToUSD(o.totalPrice);let l=`ID	Qty	RMB	USD	Total RMB	Total USD
`;o.items.forEach(c=>{const a=d.convertCNYToUSD(c.bag.price),C=c.bag.price*c.quantity,q=d.convertCNYToUSD(C);l+=`${c.bag.id}	${c.quantity}	${c.bag.price}	${a?a.toFixed(2):"N/A"}	${C}	${q?q.toFixed(2):"N/A"}
`}),l+=`
`,l+=`Total Items:	${i}
`,l+=`RMB:	${o.totalPrice}
`,l+=`USD:	${e?e.toFixed(2):"N/A"}
`,navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(l).then(()=>{const c=encodeURIComponent(l),a=`https://wa.me/${I}?text=${c}`;try{window.location.href=a}catch{window.open(a,"_blank","noopener,noreferrer")}}).catch(c=>{console.error("Modern clipboard API failed:",c),M(l)}):M(l)},M=i=>{try{const e=document.createElement("textarea");e.value=i,e.style.position="fixed",e.style.left="-999999px",e.style.top="-999999px",document.body.append(e),e.focus(),e.select();const l=document.execCommand("copy");if(e.remove(),l){const c=encodeURIComponent(i),a=`https://wa.me/${I}?text=${c}`;try{window.location.href=a}catch{window.open(a,"_blank","noopener,noreferrer")}}else{const c=`https://wa.me/${I}`;try{window.location.href=c}catch{window.open(c,"_blank","noopener,noreferrer")}}}catch(e){console.error("Fallback copy failed:",e);const l=`https://wa.me/${I}`;try{window.location.href=l}catch{window.open(l,"_blank","noopener,noreferrer")}}},F=()=>{if(o.items.length>0){const i=o.items.map(e=>({item_id:e.bag.id,item_name:`${e.bag.id} Handbag`,item_category:"Handbag",price:e.bag.price,quantity:e.quantity}));$(i,o.totalPrice),v("send_to_wholesaler","cart_page",{item_count:o.items.length}),j("send_to_wholesaler","cart_page",{item_count:o.items.length,total_value:o.totalPrice}),z()}},R=()=>{tt("/products")},Q=()=>{_.value=!0},V=()=>{o.clearCart()};X(()=>{if(console.warn("🛒 购物车页面初始化，商品数量:",o.items.length),o.items.length>0){const i=o.items.map(e=>({item_id:e.bag.id,item_name:`${e.bag.id} Handbag`,item_category:"Handbag",price:e.bag.price,quantity:e.quantity}));S(i,o.totalPrice)}});const L=T(()=>o.totalItems>=500?0:o.totalItems),U=T(()=>o.totalPrice+L.value);return Z({title:"Wish List - Fashionable Handbags",meta:[{name:"description",content:"View your wish list and manage favorite items."}]}),(i,e)=>{const l=A,c=E;return u(),g("div",Pt,[t("div",jt,[t("div",Ut,[e[3]||(e[3]=t("div",null,[t("h1",{class:"text-foreground mb-2 text-3xl font-bold"},"Wish List"),t("p",{class:"text-muted-foreground"},"Manage your favorite items")],-1)),r(o).items.length>0?(u(),g("div",Mt,[h(r(k),{variant:"outline",size:"sm",onClick:Q,class:"text-destructive hover:bg-destructive/10 hover:text-destructive dark:text-destructive dark:hover:bg-destructive/20 dark:hover:text-destructive cursor-pointer"},{default:y(()=>[...e[2]||(e[2]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),b(" Clear Wish List ",-1)])]),_:1})])):P("",!0)]),r(o).items.length>0?(u(),g("div",qt,[t("div",Bt,[(u(!0),g(N,null,O(r(o).items,a=>(u(),g("div",{key:a.bagId,class:"bg-card border-border rounded-lg border p-6 shadow-md"},[t("div",At,[t("div",Nt,[h(l,{src:a.bag.images[0].url,alt:a.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:96,height:96,format:"webp"},null,8,["src","alt"])]),t("div",Ot,[t("div",Ht,[t("div",null,[t("h3",Wt,n(a.bag.id)+" Handbag ",1)]),t("button",{onClick:C=>p(a.bagId),class:"text-muted-foreground hover:text-destructive cursor-pointer transition-colors"},[...e[4]||(e[4]=[t("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])],8,zt)]),t("div",Ft,[t("div",Rt,[t("button",{onClick:C=>f(a.bagId),class:"hover:bg-muted flex h-10 cursor-pointer items-center justify-center px-3 py-2 text-lg transition-colors sm:h-8 sm:text-base"}," - ",8,Qt),t("input",{value:a.quantity,onInput:C=>x(a.bagId,C.target.value),type:"number",min:"50",step:"50",class:"h-10 w-24 border-0 bg-transparent px-2 py-2 text-center text-base focus:ring-0 sm:h-8 sm:text-sm"},null,40,Vt),t("button",{onClick:C=>s(a.bagId),class:"hover:bg-muted flex h-10 cursor-pointer items-center justify-center px-3 py-2 text-lg transition-colors sm:h-8 sm:text-base"}," + ",8,Et)]),t("div",Yt,[t("p",Gt," ¥"+n((a.bag.price*a.quantity).toLocaleString()),1),t("p",Xt," ¥"+n(a.bag.price)+" × "+n(a.quantity),1)])])])])]))),128))]),t("div",Jt,[t("div",Kt,[e[13]||(e[13]=t("h2",{class:"text-card-foreground mb-4 text-xl font-bold"}," Wish List Summary ",-1)),t("div",Zt,[t("div",te,[e[5]||(e[5]=t("span",null,"Items",-1)),t("span",null,n(r(o).totalItems)+" pieces",1)]),t("div",ee,[e[6]||(e[6]=t("span",null,"Subtotal",-1)),t("span",null,"¥"+n(r(o).totalPrice.toLocaleString()),1)]),t("div",oe,[e[7]||(e[7]=t("span",null,"Shipping",-1)),r(L)===0?(u(),g("span",se," Free ")):(u(),g("span",re,"¥"+n(r(L).toLocaleString()),1))]),e[9]||(e[9]=t("div",{class:"text-muted-foreground text-xs"},[t("p",null,"• 500 pieces or more for free shipping"),t("p",null," • Factory to transit warehouse shipping (not international logistics) ")],-1)),e[10]||(e[10]=t("hr",{class:"border-border"},null,-1)),t("div",ae,[e[8]||(e[8]=t("span",null,"Total",-1)),t("div",ne,[t("div",null,"¥"+n(r(U).toLocaleString()),1),t("div",ie,[r(d).isLoading?(u(),g("span",le," Loading USD... ")):(u(),g("span",de,n(r(d).formatUSDPrice(r(U))||"USD price unavailable"),1))])])])]),t("div",ce,[e[12]||(e[12]=t("div",{class:"bg-primary/5 border-primary/20 rounded-lg border p-3 text-center"},[t("p",{class:"text-primary text-sm"}," 💬 Click to jump to WhatsApp customer service chat, pls feel free to click send ")],-1)),h(r(k),{size:"lg",variant:"enhanced",class:"h-12 w-full cursor-pointer text-base sm:h-10 sm:text-sm",style:{color:"white","background-color":"#4a3429"},onClick:F},{default:y(()=>[...e[11]||(e[11]=[b(" Send To Wholesaler ",-1)])]),_:1}),t("div",{class:"text-center"},[t("button",{onClick:R,class:"text-primary hover:text-primary/80 cursor-pointer text-sm underline transition-colors"}," Browse More Products >> ")])]),e[14]||(e[14]=t("div",{class:"bg-primary/5 border-primary/20 mt-6 rounded-lg border p-4"},[t("p",{class:"text-primary text-sm"}," 🌟 Our handbag styles are very popular worldwide! Welcome to place your order and experience our premium quality products. ")],-1))])])])):(u(),g("div",ue,[e[16]||(e[16]=J('<div class="from-muted to-muted/80 mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br shadow-lg" data-v-3607f996><svg class="empty-wishlist-icon text-muted-foreground h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-3607f996><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-v-3607f996></path></svg></div><h2 class="text-foreground mb-4 text-3xl font-bold" data-v-3607f996> Your wish list is empty </h2><p class="text-muted-foreground mb-6 text-lg" data-v-3607f996> You haven&#39;t added any items to your wish list yet </p><p class="text-primary mb-6 text-base font-medium" data-v-3607f996> 🌟 Our handbag styles are very popular worldwide! Welcome to browse and experience our premium quality products. </p>',4)),h(c,{to:"/products"},{default:y(()=>[h(r(k),{size:"lg",class:"h-12 cursor-pointer text-base sm:h-10 sm:text-sm",style:{color:"white","background-color":"#4a3429"}},{default:y(()=>[...e[15]||(e[15]=[b(" Browse More Products ",-1)])]),_:1})]),_:1})]))]),h(St,{"is-open":r(D),"cart-items":r(o).items,"total-price":r(U),"shipping-cost":r(L),onClose:e[0]||(e[0]=a=>D.value=!1)},null,8,["is-open","cart-items","total-price","shipping-cost"]),h(Tt,{"is-open":r(_),title:"Clear Wish List",message:"Are you sure you want to remove all items from your wish list? This action cannot be undone.","confirm-text":"Clear Wish List","cancel-text":"Cancel",variant:"danger",onClose:e[1]||(e[1]=a=>_.value=!1),onConfirm:V},null,8,["is-open"])])}}},$e=ot(pe,[["__scopeId","data-v-3607f996"]]);export{$e as default};
