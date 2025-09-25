import{_ as H}from"./6ETAZGtE.js";import{_ as Y}from"./tiF_snPY.js";import{c as T,O as m,W as P,Q as p,U as t,a2 as y,X as l,L as N,a9 as O,a0 as G,u as s,a3 as h,a1 as b,a4 as W,w as X,b as A,o as J,V as K}from"./Co5tMnYY.js";import{_ as k}from"./Bbo0jKgt.js";import{a as z,b as Z,u as tt,n as et}from"#entry";import{_ as U}from"./DlAUqK2U.js";import{u as ot}from"./B7xX6Qq_.js";import{M as I}from"./C5MGQOzy.js";import"./C7xmkHdv.js";import"./Bvi1VPMX.js";import"./zWPNylOE.js";const rt={class:"mb-6 flex items-center justify-between"},st={class:"flex items-center gap-4"},at={class:"text-sm text-gray-600 dark:text-gray-300"},nt={class:"font-semibold text-gray-900 dark:text-white"},it={class:"mb-6 overflow-x-auto"},lt={class:"w-full border-collapse"},dt={class:"px-4 py-3"},ct={class:"flex flex-col items-center gap-2"},pt={class:"h-16 w-16 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"},ut={class:"text-xs font-medium text-gray-600 dark:text-gray-300"},mt={class:"px-4 py-3 text-center text-sm text-gray-900 dark:text-white"},gt={class:"px-4 py-3 text-right text-sm text-gray-900 dark:text-white"},xt={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},ht={class:"border-t-2 border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"},ft={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},yt={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},bt={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},vt={class:"px-4 py-3 text-right"},wt={class:"text-primary text-lg font-bold"},_t={class:"text-sm font-normal text-gray-600 dark:text-gray-300"},kt={key:0},Ct={key:1},$t={class:"flex gap-3"},St={__name:"CheckoutDialog",props:{isOpen:{type:Boolean,default:!1},cartItems:{type:Array,default:()=>[]},totalPrice:{type:Number,default:0},shippingCost:{type:Number,default:0}},emits:["close"],setup(g,{emit:o}){const d=g,S=o,C=z(),v=T(()=>d.cartItems.reduce((u,r)=>u+r.quantity,0)),w=T(()=>d.totalPrice-d.shippingCost),j=async()=>{try{let u="";u+=`Order Date: ${new Date().toLocaleDateString()}

`,u+=`Product ID	Quantity	Unit Price	Total
`,d.cartItems.forEach(r=>{const f=r.bag.price*r.quantity;u+=`${r.bag.id}	${r.quantity}	${r.bag.price}	${f}
`}),u+=`
`,u+=`Total Items	${v.value}
`,u+=`Total Price	${d.totalPrice}
`,await navigator.clipboard.writeText(u),typeof window<"u"&&window.$toast&&window.$toast.success("Success","Order details copied to clipboard!"),_()}catch(u){console.error("Failed to copy to clipboard:",u),typeof window<"u"&&window.$toast&&window.$toast.error("Error","Failed to copy to clipboard")}},D=()=>{const u=`
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
  `,r=window.open("","_blank");r.document.write(u),r.document.close(),r.focus(),r.print(),r.close()},_=()=>{S("close")};return(u,r)=>{const f=H;return g.isOpen?(p(),m("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center p-4",onClick:_},[r[8]||(r[8]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:r[0]||(r[0]=W(()=>{},["stop"]))},[t("div",rt,[t("div",st,[r[2]||(r[2]=t("h3",{class:"text-2xl font-bold text-gray-900 dark:text-white"}," Order Summary ",-1)),t("div",at,[r[1]||(r[1]=y(" Order Date: ",-1)),t("span",nt,l(new Date().toLocaleDateString()),1)])]),t("button",{onClick:_,class:"cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"},[...r[3]||(r[3]=[t("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),t("div",it,[t("table",lt,[r[4]||(r[4]=t("thead",null,[t("tr",{class:"border-b border-gray-200 dark:border-gray-700"},[t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Design "),t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Quantity "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Unit Price "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Total ")])],-1)),t("tbody",null,[(p(!0),m(N,null,O(g.cartItems,x=>(p(),m("tr",{key:x.bagId,class:"border-b border-gray-100 dark:border-gray-800"},[t("td",dt,[t("div",ct,[t("div",pt,[x.bag.images[0]?(p(),G(f,{key:0,src:x.bag.images[0].url,alt:x.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:64,height:64,format:"webp"},null,8,["src","alt"])):P("",!0)]),t("span",ut,l(x.bag.id),1)])]),t("td",mt,l(x.quantity)+" pieces ",1),t("td",gt," ¥"+l(x.bag.price),1),t("td",xt," ¥"+l((x.bag.price*x.quantity).toLocaleString()),1)]))),128))]),t("tfoot",null,[t("tr",ht,[t("td",ft,l(g.cartItems.length)+" designs ",1),t("td",yt,l(s(v))+" pieces ",1),t("td",bt," ¥"+l(s(w).toLocaleString()),1),t("td",vt,[t("div",wt," ¥"+l(g.totalPrice.toLocaleString()),1),t("div",_t,[s(C).isLoading?(p(),m("span",kt,"Loading USD...")):(p(),m("span",Ct,l(s(C).formatUSDPrice(g.totalPrice)||"USD price unavailable"),1))])])])])])]),t("div",$t,[h(s(k),{variant:"outline",class:"btn-outline-enhanced flex-1 cursor-pointer",onClick:_},{default:b(()=>[...r[5]||(r[5]=[y(" Close ",-1)])]),_:1}),h(s(k),{class:"flex-1 cursor-pointer",style:{color:"white","background-color":"#4a3429"},onClick:j},{default:b(()=>[...r[6]||(r[6]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1),y(" Copy ",-1)])]),_:1}),h(s(k),{class:"hidden flex-1",onClick:D},{default:b(()=>[...r[7]||(r[7]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"})],-1),y(" Print ",-1)])]),_:1})])])])):P("",!0)}}},Dt=U(St,[["__scopeId","data-v-3ab1d863"]]),Lt={class:"mb-4 text-lg font-semibold text-gray-900 dark:text-white"},It={class:"mb-6 text-gray-600 dark:text-gray-300"},Tt={class:"flex gap-3"},Pt={__name:"ConfirmDialog",props:{isOpen:{type:Boolean,default:!1},title:{type:String,default:"Confirm Action"},message:{type:String,default:"Are you sure you want to proceed?"},confirmText:{type:String,default:"Confirm"},cancelText:{type:String,default:"Cancel"},variant:{type:String,default:"default"}},emits:["close","confirm"],setup(g,{emit:o}){const d=o,S=()=>{d("confirm"),d("close")},C=()=>{d("close")};return(v,w)=>g.isOpen?(p(),m("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center p-4",onClick:C},[w[1]||(w[1]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:w[0]||(w[0]=W(()=>{},["stop"]))},[t("h3",Lt,l(g.title),1),t("p",It,l(g.message),1),t("div",Tt,[h(s(k),{variant:"outline",class:"btn-outline-enhanced flex-1 cursor-pointer",onClick:C},{default:b(()=>[y(l(g.cancelText),1)]),_:1}),h(s(k),{class:"flex-1 cursor-pointer",style:{color:"white","background-color":"#4a3429"},onClick:S},{default:b(()=>[y(l(g.confirmText),1)]),_:1})])])])):P("",!0)}},jt=U(Pt,[["__scopeId","data-v-d5197c05"]]),Mt={class:"cart-page-container min-h-screen lg:min-h-0"},Ut={class:"w-full px-4 py-8"},qt={class:"mb-8 flex items-center justify-between"},Bt={key:0},At={key:0,class:"cart-layout-container",style:{display:"flex","flex-direction":"column",gap:"2rem","min-height":"100vh"}},Ht={class:"cart-items-container",style:{display:"flex","flex-direction":"column",gap:"1rem"}},Nt={class:"flex gap-4"},Ot={class:"bg-muted h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg"},Wt={class:"flex-1"},zt={class:"mb-2 flex items-start justify-between"},Ft={class:"text-card-foreground text-lg font-semibold"},Rt=["onClick"],Qt={class:"flex items-center justify-between"},Vt={class:"flex w-fit items-center rounded-lg border"},Et=["onClick"],Yt=["value","onInput"],Gt=["onClick"],Xt={class:"text-right"},Jt={class:"text-primary text-lg font-bold"},Kt={class:"text-muted-foreground text-sm"},Zt={class:"cart-summary-container"},te={class:"bg-card border-border rounded-lg border p-6 shadow-md lg:sticky lg:top-8"},ee={class:"mb-6 space-y-3"},oe={class:"text-muted-foreground flex justify-between"},re={class:"text-muted-foreground flex justify-between"},se={class:"text-muted-foreground flex justify-between"},ae={key:0,class:"text-success"},ne={key:1},ie={class:"text-card-foreground flex justify-between text-lg font-bold"},le={class:"text-right"},de={class:"text-muted-foreground text-sm font-normal"},ce={key:0},pe={key:1},ue={class:"space-y-3"},me={key:1,class:"py-12 text-center"},ge={__name:"cart",setup(g){const o=Z();X(()=>o.items,i=>{console.warn("🛒 购物车页面商品更新:",i)},{deep:!0});const d=z(),{trackViewCart:S,trackBeginCheckout:C,trackUserInteraction:v,trackRemoveFromCart:w,trackButtonClick:j}=ot(),D=A(!1),_=A(!1),u=i=>{const e=o.items.find(n=>n.bagId===i);e&&w(e.bag.id,`${e.bag.id} Handbag`,e.bag.price,e.quantity,"Handbag"),o.removeFromCart(i)},r=i=>{o.increaseQuantity(i)},f=i=>{o.decreaseQuantity(i)},x=(i,e)=>{const n=Number.parseInt(e)||50;o.updateQuantity(i,n)},F=()=>{if(!o.items||o.items.length===0)return;const i=o.items.reduce((c,a)=>c+a.quantity,0),e=d.convertCNYToUSD(o.totalPrice);let n=`ID	Qty	RMB	USD	Total RMB	Total USD
`;o.items.forEach(c=>{const a=d.convertCNYToUSD(c.bag.price),$=c.bag.price*c.quantity,B=d.convertCNYToUSD($);n+=`${c.bag.id}	${c.quantity}	${c.bag.price}	${a?a.toFixed(2):"N/A"}	${$}	${B?B.toFixed(2):"N/A"}
`}),n+=`
`,n+=`Total Items:	${i}
`,n+=`RMB:	${o.totalPrice}
`,n+=`USD:	${e?e.toFixed(2):"N/A"}
`,navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(n).then(()=>{const c=encodeURIComponent(n),a=`https://wa.me/${I}?text=${c}`;try{window.location.href=a}catch{window.open(a,"_blank","noopener,noreferrer")}}).catch(c=>{console.error("Modern clipboard API failed:",c),q(n)}):q(n)},q=i=>{try{const e=document.createElement("textarea");e.value=i,e.style.position="fixed",e.style.left="-999999px",e.style.top="-999999px",document.body.append(e),e.focus(),e.select();const n=document.execCommand("copy");if(e.remove(),n){const c=encodeURIComponent(i),a=`https://wa.me/${I}?text=${c}`;try{window.location.href=a}catch{window.open(a,"_blank","noopener,noreferrer")}}else{const c=`https://wa.me/${I}`;try{window.location.href=c}catch{window.open(c,"_blank","noopener,noreferrer")}}}catch(e){console.error("Fallback copy failed:",e);const n=`https://wa.me/${I}`;try{window.location.href=n}catch{window.open(n,"_blank","noopener,noreferrer")}}},R=()=>{if(o.items.length>0){const i=o.items.map(e=>({item_id:e.bag.id,item_name:`${e.bag.id} Handbag`,item_category:"Handbag",price:e.bag.price,quantity:e.quantity}));C(i,o.totalPrice),v("send_to_wholesaler","cart_page",{item_count:o.items.length}),j("send_to_wholesaler","cart_page",{item_count:o.items.length,total_value:o.totalPrice}),F()}},Q=()=>{et("/products")},V=()=>{_.value=!0},E=()=>{o.clearCart()};J(()=>{console.warn("🛒 购物车页面初始化，商品数量:",o.items.length);const i=document.querySelector(".cart-layout-container");if(i&&(i.style.display="flex",i.style.flexDirection="column",i.style.gap="2rem",i.style.minHeight="100vh"),o.items.length>0){const e=o.items.map(n=>({item_id:n.bag.id,item_name:`${n.bag.id} Handbag`,item_category:"Handbag",price:n.bag.price,quantity:n.quantity}));S(e,o.totalPrice)}});const L=T(()=>o.totalItems>=500?0:o.totalItems),M=T(()=>o.totalPrice+L.value);return tt({title:"Wish List - Fashionable Handbags",meta:[{name:"description",content:"View your wish list and manage favorite items."}],style:[{innerHTML:`
        /* 关键CSS - 防止样式闪烁 */
        .cart-layout-container {
          display: flex !important;
          flex-direction: column !important;
          gap: 2rem !important;
          min-height: 100vh !important;
        }
        .cart-items-container {
          display: flex !important;
          flex-direction: column !important;
          gap: 1rem !important;
        }
        .cart-summary-container {
          order: 2 !important;
        }
        @media (min-width: 1024px) {
          .cart-layout-container {
            display: grid !important;
            grid-template-columns: 2fr 1fr !important;
            gap: 2rem !important;
            align-items: start !important;
            min-height: auto !important;
          }
          .cart-items-container {
            grid-column: 1 !important;
          }
          .cart-summary-container {
            grid-column: 2 !important;
            position: sticky !important;
            top: 2rem !important;
            order: 0 !important;
          }
        }
      `,type:"text/css"}]}),(i,e)=>{const n=H,c=Y;return p(),m("div",Mt,[t("div",Ut,[t("div",qt,[e[3]||(e[3]=t("div",null,[t("h1",{class:"text-foreground mb-2 text-3xl font-bold"},"Wish List"),t("p",{class:"text-muted-foreground"},"Manage your favorite items")],-1)),s(o).items.length>0?(p(),m("div",Bt,[h(s(k),{variant:"outline",size:"sm",onClick:V,class:"text-destructive hover:bg-destructive/10 hover:text-destructive dark:text-destructive dark:hover:bg-destructive/20 dark:hover:text-destructive cursor-pointer"},{default:b(()=>[...e[2]||(e[2]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),y(" Clear Wish List ",-1)])]),_:1})])):P("",!0)]),s(o).items.length>0?(p(),m("div",At,[t("div",Ht,[(p(!0),m(N,null,O(s(o).items,a=>(p(),m("div",{key:a.bagId,class:"bg-card border-border rounded-lg border p-6 shadow-md"},[t("div",Nt,[t("div",Ot,[h(n,{src:a.bag.images[0].url,alt:a.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:96,height:96,format:"webp"},null,8,["src","alt"])]),t("div",Wt,[t("div",zt,[t("div",null,[t("h3",Ft,l(a.bag.id)+" Handbag ",1)]),t("button",{onClick:$=>u(a.bagId),class:"text-muted-foreground hover:text-destructive cursor-pointer transition-colors"},[...e[4]||(e[4]=[t("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])],8,Rt)]),t("div",Qt,[t("div",Vt,[t("button",{onClick:$=>f(a.bagId),class:"hover:bg-muted flex h-10 cursor-pointer items-center justify-center px-3 py-2 text-lg transition-colors sm:h-8 sm:text-base"}," - ",8,Et),t("input",{value:a.quantity,onInput:$=>x(a.bagId,$.target.value),type:"number",min:"50",step:"50",class:"h-10 w-24 border-0 bg-transparent px-2 py-2 text-center text-base focus:ring-0 sm:h-8 sm:text-sm"},null,40,Yt),t("button",{onClick:$=>r(a.bagId),class:"hover:bg-muted flex h-10 cursor-pointer items-center justify-center px-3 py-2 text-lg transition-colors sm:h-8 sm:text-base"}," + ",8,Gt)]),t("div",Xt,[t("p",Jt," ¥"+l((a.bag.price*a.quantity).toLocaleString()),1),t("p",Kt," ¥"+l(a.bag.price)+" × "+l(a.quantity),1)])])])])]))),128))]),t("div",Zt,[t("div",te,[e[13]||(e[13]=t("h2",{class:"text-card-foreground mb-4 text-xl font-bold"}," Wish List Summary ",-1)),t("div",ee,[t("div",oe,[e[5]||(e[5]=t("span",null,"Items",-1)),t("span",null,l(s(o).totalItems)+" pieces",1)]),t("div",re,[e[6]||(e[6]=t("span",null,"Subtotal",-1)),t("span",null,"¥"+l(s(o).totalPrice.toLocaleString()),1)]),t("div",se,[e[7]||(e[7]=t("span",null,"Shipping",-1)),s(L)===0?(p(),m("span",ae," Free ")):(p(),m("span",ne,"¥"+l(s(L).toLocaleString()),1))]),e[9]||(e[9]=t("div",{class:"text-muted-foreground text-xs"},[t("p",null,"• 500 pieces or more for free shipping"),t("p",null," • Factory to transit warehouse shipping (not international logistics) ")],-1)),e[10]||(e[10]=t("hr",{class:"border-border"},null,-1)),t("div",ie,[e[8]||(e[8]=t("span",null,"Total",-1)),t("div",le,[t("div",null,"¥"+l(s(M).toLocaleString()),1),t("div",de,[s(d).isLoading?(p(),m("span",ce," Loading USD... ")):(p(),m("span",pe,l(s(d).formatUSDPrice(s(M))||"USD price unavailable"),1))])])])]),t("div",ue,[e[12]||(e[12]=t("div",{class:"bg-primary/5 border-primary/20 rounded-lg border p-3 text-center"},[t("p",{class:"text-primary text-sm"}," 💬 Click to jump to WhatsApp customer service chat, pls feel free to click send ")],-1)),h(s(k),{size:"lg",variant:"enhanced",class:"h-12 w-full cursor-pointer text-base sm:h-10 sm:text-sm",style:{color:"white","background-color":"#4a3429"},onClick:R},{default:b(()=>[...e[11]||(e[11]=[y(" Send To Wholesaler ",-1)])]),_:1}),t("div",{class:"text-center"},[t("button",{onClick:Q,class:"text-primary hover:text-primary/80 cursor-pointer text-sm underline transition-colors"}," Browse More Products >> ")])]),e[14]||(e[14]=t("div",{class:"bg-primary/5 border-primary/20 mt-6 rounded-lg border p-4"},[t("p",{class:"text-primary text-sm"}," 🌟 Our handbag styles are very popular worldwide! Welcome to place your order and experience our premium quality products. ")],-1))])])])):(p(),m("div",me,[e[16]||(e[16]=K('<div class="from-muted to-muted/80 mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br shadow-lg" data-v-b0cbcdc8><svg class="empty-wishlist-icon text-muted-foreground h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-b0cbcdc8><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-v-b0cbcdc8></path></svg></div><h2 class="text-foreground mb-4 text-3xl font-bold" data-v-b0cbcdc8> Your wish list is empty </h2><p class="text-muted-foreground mb-6 text-lg" data-v-b0cbcdc8> You haven&#39;t added any items to your wish list yet </p><p class="text-primary mb-6 text-base font-medium" data-v-b0cbcdc8> 🌟 Our handbag styles are very popular worldwide! Welcome to browse and experience our premium quality products. </p>',4)),h(c,{to:"/products"},{default:b(()=>[h(s(k),{size:"lg",class:"h-12 cursor-pointer text-base sm:h-10 sm:text-sm",style:{color:"white","background-color":"#4a3429"}},{default:b(()=>[...e[15]||(e[15]=[y(" Browse More Products ",-1)])]),_:1})]),_:1})]))]),h(Dt,{"is-open":s(D),"cart-items":s(o).items,"total-price":s(M),"shipping-cost":s(L),onClose:e[0]||(e[0]=a=>D.value=!1)},null,8,["is-open","cart-items","total-price","shipping-cost"]),h(jt,{"is-open":s(_),title:"Clear Wish List",message:"Are you sure you want to remove all items from your wish list? This action cannot be undone.","confirm-text":"Clear Wish List","cancel-text":"Cancel",variant:"danger",onClose:e[1]||(e[1]=a=>_.value=!1),onConfirm:E},null,8,["is-open"])])}}},Se=U(ge,[["__scopeId","data-v-b0cbcdc8"]]);export{Se as default};
