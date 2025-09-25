import{_ as W}from"./6ETAZGtE.js";import{_ as Y}from"./tiF_snPY.js";import{c as P,O as m,W as q,Q as u,U as t,a2 as v,X as l,L as A,a9 as N,a0 as G,u as n,a3 as f,a1 as w,a4 as O,w as X,b as H,o as J,V as K}from"./Co5tMnYY.js";import{_ as $}from"./Bbo0jKgt.js";import{a as z,b as Z,u as tt,n as et}from"#entry";import{_ as U}from"./DlAUqK2U.js";import{u as ot}from"./B7xX6Qq_.js";import{M as T}from"./C5MGQOzy.js";import"./C7xmkHdv.js";import"./Bvi1VPMX.js";import"./zWPNylOE.js";const rt={class:"mb-6 flex items-center justify-between"},st={class:"flex items-center gap-4"},at={class:"text-sm text-gray-600 dark:text-gray-300"},nt={class:"font-semibold text-gray-900 dark:text-white"},it={class:"mb-6 overflow-x-auto"},lt={class:"w-full border-collapse"},dt={class:"px-4 py-3"},ct={class:"flex flex-col items-center gap-2"},ut={class:"h-16 w-16 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"},pt={class:"text-xs font-medium text-gray-600 dark:text-gray-300"},mt={class:"px-4 py-3 text-center text-sm text-gray-900 dark:text-white"},gt={class:"px-4 py-3 text-right text-sm text-gray-900 dark:text-white"},yt={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},ht={class:"border-t-2 border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"},xt={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},ft={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},bt={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},vt={class:"px-4 py-3 text-right"},wt={class:"text-primary text-lg font-bold"},_t={class:"text-sm font-normal text-gray-600 dark:text-gray-300"},kt={key:0},Ct={key:1},$t={class:"flex gap-3"},St={__name:"CheckoutDialog",props:{isOpen:{type:Boolean,default:!1},cartItems:{type:Array,default:()=>[]},totalPrice:{type:Number,default:0},shippingCost:{type:Number,default:0}},emits:["close"],setup(y,{emit:r}){const c=y,D=r,S=z(),_=P(()=>c.cartItems.reduce((p,s)=>p+s.quantity,0)),k=P(()=>c.totalPrice-c.shippingCost),j=async()=>{try{let p="";p+=`Order Date: ${new Date().toLocaleDateString()}

`,p+=`Product ID	Quantity	Unit Price	Total
`,c.cartItems.forEach(s=>{const b=s.bag.price*s.quantity;p+=`${s.bag.id}	${s.quantity}	${s.bag.price}	${b}
`}),p+=`
`,p+=`Total Items	${_.value}
`,p+=`Total Price	${c.totalPrice}
`,await navigator.clipboard.writeText(p),typeof window<"u"&&window.$toast&&window.$toast.success("Success","Order details copied to clipboard!"),C()}catch(p){console.error("Failed to copy to clipboard:",p),typeof window<"u"&&window.$toast&&window.$toast.error("Error","Failed to copy to clipboard")}},I=()=>{const p=`
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
        <p><strong>Total Items:</strong> ${_.value} pieces</p>
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
          ${c.cartItems.map(b=>{const h=b.bag.price*b.quantity;return`
              <tr>
                <td>${b.bag.id}</td>
                <td>${b.quantity} pieces</td>
                <td>¥${b.bag.price}</td>
                <td>¥${h.toLocaleString()}</td>
              </tr>
            `}).join("")}
        </tbody>
        <tfoot>
          <tr class="total-row">
            <td><strong>Total</strong></td>
            <td><strong>${_.value} pieces</strong></td>
            <td></td>
            <td><strong>¥${c.totalPrice.toLocaleString()}</strong></td>
          </tr>
        </tfoot>
      </table>
      
      <div class="summary">
        <h3>Order Summary</h3>
        <p><strong>Total Items:</strong> ${_.value} pieces</p>
        <p><strong>Total Price:</strong> ¥${c.totalPrice.toLocaleString()}</p>
        <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
      </div>
    </body>
    </html>
  `,s=window.open("","_blank");s.document.write(p),s.document.close(),s.focus(),s.print(),s.close()},C=()=>{D("close")};return(p,s)=>{const b=W;return y.isOpen?(u(),m("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center p-4",onClick:C},[s[8]||(s[8]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:s[0]||(s[0]=O(()=>{},["stop"]))},[t("div",rt,[t("div",st,[s[2]||(s[2]=t("h3",{class:"text-2xl font-bold text-gray-900 dark:text-white"}," Order Summary ",-1)),t("div",at,[s[1]||(s[1]=v(" Order Date: ",-1)),t("span",nt,l(new Date().toLocaleDateString()),1)])]),t("button",{onClick:C,class:"cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"},[...s[3]||(s[3]=[t("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),t("div",it,[t("table",lt,[s[4]||(s[4]=t("thead",null,[t("tr",{class:"border-b border-gray-200 dark:border-gray-700"},[t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Design "),t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Quantity "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Unit Price "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Total ")])],-1)),t("tbody",null,[(u(!0),m(A,null,N(y.cartItems,h=>(u(),m("tr",{key:h.bagId,class:"border-b border-gray-100 dark:border-gray-800"},[t("td",dt,[t("div",ct,[t("div",ut,[h.bag.images[0]?(u(),G(b,{key:0,src:h.bag.images[0].url,alt:h.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:64,height:64,format:"webp"},null,8,["src","alt"])):q("",!0)]),t("span",pt,l(h.bag.id),1)])]),t("td",mt,l(h.quantity)+" pieces ",1),t("td",gt," ¥"+l(h.bag.price),1),t("td",yt," ¥"+l((h.bag.price*h.quantity).toLocaleString()),1)]))),128))]),t("tfoot",null,[t("tr",ht,[t("td",xt,l(y.cartItems.length)+" designs ",1),t("td",ft,l(n(_))+" pieces ",1),t("td",bt," ¥"+l(n(k).toLocaleString()),1),t("td",vt,[t("div",wt," ¥"+l(y.totalPrice.toLocaleString()),1),t("div",_t,[n(S).isLoading?(u(),m("span",kt,"Loading USD...")):(u(),m("span",Ct,l(n(S).formatUSDPrice(y.totalPrice)||"USD price unavailable"),1))])])])])])]),t("div",$t,[f(n($),{variant:"outline",class:"btn-outline-enhanced flex-1 cursor-pointer",onClick:C},{default:w(()=>[...s[5]||(s[5]=[v(" Close ",-1)])]),_:1}),f(n($),{class:"flex-1 cursor-pointer",style:{color:"white","background-color":"#4a3429"},onClick:j},{default:w(()=>[...s[6]||(s[6]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1),v(" Copy ",-1)])]),_:1}),f(n($),{class:"hidden flex-1",onClick:I},{default:w(()=>[...s[7]||(s[7]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"})],-1),v(" Print ",-1)])]),_:1})])])])):q("",!0)}}},Dt=U(St,[["__scopeId","data-v-3ab1d863"]]),It={class:"mb-4 text-lg font-semibold text-gray-900 dark:text-white"},Lt={class:"mb-6 text-gray-600 dark:text-gray-300"},Tt={class:"flex gap-3"},Pt={__name:"ConfirmDialog",props:{isOpen:{type:Boolean,default:!1},title:{type:String,default:"Confirm Action"},message:{type:String,default:"Are you sure you want to proceed?"},confirmText:{type:String,default:"Confirm"},cancelText:{type:String,default:"Cancel"},variant:{type:String,default:"default"}},emits:["close","confirm"],setup(y,{emit:r}){const c=r,D=()=>{c("confirm"),c("close")},S=()=>{c("close")};return(_,k)=>y.isOpen?(u(),m("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center p-4",onClick:S},[k[1]||(k[1]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:k[0]||(k[0]=O(()=>{},["stop"]))},[t("h3",It,l(y.title),1),t("p",Lt,l(y.message),1),t("div",Tt,[f(n($),{variant:"outline",class:"btn-outline-enhanced flex-1 cursor-pointer",onClick:S},{default:w(()=>[v(l(y.cancelText),1)]),_:1}),f(n($),{class:"flex-1 cursor-pointer",style:{color:"white","background-color":"#4a3429"},onClick:D},{default:w(()=>[v(l(y.confirmText),1)]),_:1})])])])):q("",!0)}},qt=U(Pt,[["__scopeId","data-v-d5197c05"]]),jt={class:"cart-page-container min-h-screen lg:min-h-0"},Mt={class:"w-full px-4 py-8"},Ut={class:"mb-8 flex items-center justify-between"},Bt={key:0},Ht={key:0,class:"cart-layout-container",style:{display:"flex","flex-direction":"column",gap:"2rem","min-height":"100vh"}},Wt={class:"cart-items-container",style:{display:"flex","flex-direction":"column",gap:"1rem"}},At={class:"flex gap-4"},Nt={class:"bg-muted h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg"},Ot={class:"flex-1"},zt={class:"mb-2 flex items-start justify-between"},Rt={class:"text-card-foreground text-lg font-semibold"},Ft=["onClick"],Qt={class:"flex items-center justify-between"},Vt={class:"flex w-fit items-center rounded-lg border"},Et=["onClick"],Yt=["value","onInput"],Gt=["onClick"],Xt={class:"text-right"},Jt={class:"text-primary text-lg font-bold"},Kt={class:"text-muted-foreground text-sm"},Zt={class:"cart-summary-container",style:{order:"2"}},te={class:"bg-card border-border rounded-lg border p-6 shadow-md lg:sticky lg:top-8"},ee={class:"mb-6 space-y-3"},oe={class:"text-muted-foreground flex justify-between"},re={class:"text-muted-foreground flex justify-between"},se={class:"text-muted-foreground flex justify-between"},ae={key:0,class:"text-success"},ne={key:1},ie={class:"text-card-foreground flex justify-between text-lg font-bold"},le={class:"text-right"},de={class:"text-muted-foreground text-sm font-normal"},ce={key:0},ue={key:1},pe={class:"space-y-3"},me={key:1,class:"py-12 text-center"},ge={__name:"cart",setup(y){const r=Z();X(()=>r.items,a=>{console.warn("🛒 购物车页面商品更新:",a)},{deep:!0});const c=z(),{trackViewCart:D,trackBeginCheckout:S,trackUserInteraction:_,trackRemoveFromCart:k,trackButtonClick:j}=ot(),I=H(!1),C=H(!1),p=a=>{const e=r.items.find(i=>i.bagId===a);e&&k(e.bag.id,`${e.bag.id} Handbag`,e.bag.price,e.quantity,"Handbag"),r.removeFromCart(a)},s=a=>{r.increaseQuantity(a)},b=a=>{r.decreaseQuantity(a)},h=(a,e)=>{const i=Number.parseInt(e)||50;r.updateQuantity(a,i)},R=()=>{if(!r.items||r.items.length===0)return;const a=r.items.reduce((d,o)=>d+o.quantity,0),e=c.convertCNYToUSD(r.totalPrice);let i=`ID	Qty	RMB	USD	Total RMB	Total USD
`;r.items.forEach(d=>{const o=c.convertCNYToUSD(d.bag.price),g=d.bag.price*d.quantity,x=c.convertCNYToUSD(g);i+=`${d.bag.id}	${d.quantity}	${d.bag.price}	${o?o.toFixed(2):"N/A"}	${g}	${x?x.toFixed(2):"N/A"}
`}),i+=`
`,i+=`Total Items:	${a}
`,i+=`RMB:	${r.totalPrice}
`,i+=`USD:	${e?e.toFixed(2):"N/A"}
`,navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(i).then(()=>{const d=encodeURIComponent(i),o=`https://wa.me/${T}?text=${d}`;try{window.location.href=o}catch{window.open(o,"_blank","noopener,noreferrer")}}).catch(d=>{console.error("Modern clipboard API failed:",d),B(i)}):B(i)},B=a=>{try{const e=document.createElement("textarea");e.value=a,e.style.position="fixed",e.style.left="-999999px",e.style.top="-999999px",document.body.append(e),e.focus(),e.select();const i=document.execCommand("copy");if(e.remove(),i){const d=encodeURIComponent(a),o=`https://wa.me/${T}?text=${d}`;try{window.location.href=o}catch{window.open(o,"_blank","noopener,noreferrer")}}else{const d=`https://wa.me/${T}`;try{window.location.href=d}catch{window.open(d,"_blank","noopener,noreferrer")}}}catch(e){console.error("Fallback copy failed:",e);const i=`https://wa.me/${T}`;try{window.location.href=i}catch{window.open(i,"_blank","noopener,noreferrer")}}},F=()=>{if(r.items.length>0){const a=r.items.map(e=>({item_id:e.bag.id,item_name:`${e.bag.id} Handbag`,item_category:"Handbag",price:e.bag.price,quantity:e.quantity}));S(a,r.totalPrice),_("send_to_wholesaler","cart_page",{item_count:r.items.length}),j("send_to_wholesaler","cart_page",{item_count:r.items.length,total_value:r.totalPrice}),R()}},Q=()=>{et("/products")},V=()=>{C.value=!0},E=()=>{r.clearCart()};J(()=>{console.warn("🛒 购物车页面初始化，商品数量:",r.items.length);const a=document.querySelector(".cart-layout-container");a&&(a.style.display="flex",a.style.flexDirection="column",a.style.gap="2rem",a.style.minHeight="100vh",window.innerWidth>=1024&&(a.style.display="grid",a.style.gridTemplateColumns="2fr 1fr",a.style.alignItems="start",a.style.minHeight="auto"));const e=document.querySelector(".cart-items-container"),i=document.querySelector(".cart-summary-container");e&&(e.style.display="flex",e.style.flexDirection="column",e.style.gap="1rem",window.innerWidth>=1024&&(e.style.gridColumn="1")),i&&(i.style.order="2",window.innerWidth>=1024&&(i.style.gridColumn="2",i.style.position="sticky",i.style.top="2rem",i.style.order="0"));const d=()=>{const o=document.querySelector(".cart-layout-container"),g=document.querySelector(".cart-items-container"),x=document.querySelector(".cart-summary-container");o&&(window.innerWidth>=1024?(o.style.display="grid",o.style.gridTemplateColumns="2fr 1fr",o.style.alignItems="start",o.style.minHeight="auto",g&&(g.style.gridColumn="1"),x&&(x.style.gridColumn="2",x.style.position="sticky",x.style.top="2rem",x.style.order="0")):(o.style.display="flex",o.style.flexDirection="column",o.style.gap="1.5rem",o.style.minHeight="100vh",x&&(x.style.position="static",x.style.top="auto",x.style.order="2")))};if(window.addEventListener("resize",d),r.items.length>0){const o=r.items.map(g=>({item_id:g.bag.id,item_name:`${g.bag.id} Handbag`,item_category:"Handbag",price:g.bag.price,quantity:g.quantity}));D(o,r.totalPrice)}});const L=P(()=>r.totalItems>=500?0:r.totalItems),M=P(()=>r.totalPrice+L.value);return tt({title:"Wish List - Fashionable Handbags",meta:[{name:"description",content:"View your wish list and manage favorite items."}],style:[{innerHTML:`
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
      `,type:"text/css"}]}),(a,e)=>{const i=W,d=Y;return u(),m("div",jt,[t("div",Mt,[t("div",Ut,[e[3]||(e[3]=t("div",null,[t("h1",{class:"text-foreground mb-2 text-3xl font-bold"},"Wish List"),t("p",{class:"text-muted-foreground"},"Manage your favorite items")],-1)),n(r).items.length>0?(u(),m("div",Bt,[f(n($),{variant:"outline",size:"sm",onClick:V,class:"text-destructive hover:bg-destructive/10 hover:text-destructive dark:text-destructive dark:hover:bg-destructive/20 dark:hover:text-destructive cursor-pointer"},{default:w(()=>[...e[2]||(e[2]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),v(" Clear Wish List ",-1)])]),_:1})])):q("",!0)]),n(r).items.length>0?(u(),m("div",Ht,[t("div",Wt,[(u(!0),m(A,null,N(n(r).items,o=>(u(),m("div",{key:o.bagId,class:"bg-card border-border rounded-lg border p-6 shadow-md"},[t("div",At,[t("div",Nt,[f(i,{src:o.bag.images[0].url,alt:o.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:96,height:96,format:"webp"},null,8,["src","alt"])]),t("div",Ot,[t("div",zt,[t("div",null,[t("h3",Rt,l(o.bag.id)+" Handbag ",1)]),t("button",{onClick:g=>p(o.bagId),class:"text-muted-foreground hover:text-destructive cursor-pointer transition-colors"},[...e[4]||(e[4]=[t("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])],8,Ft)]),t("div",Qt,[t("div",Vt,[t("button",{onClick:g=>b(o.bagId),class:"hover:bg-muted flex h-10 cursor-pointer items-center justify-center px-3 py-2 text-lg transition-colors sm:h-8 sm:text-base"}," - ",8,Et),t("input",{value:o.quantity,onInput:g=>h(o.bagId,g.target.value),type:"number",min:"50",step:"50",class:"h-10 w-24 border-0 bg-transparent px-2 py-2 text-center text-base focus:ring-0 sm:h-8 sm:text-sm"},null,40,Yt),t("button",{onClick:g=>s(o.bagId),class:"hover:bg-muted flex h-10 cursor-pointer items-center justify-center px-3 py-2 text-lg transition-colors sm:h-8 sm:text-base"}," + ",8,Gt)]),t("div",Xt,[t("p",Jt," ¥"+l((o.bag.price*o.quantity).toLocaleString()),1),t("p",Kt," ¥"+l(o.bag.price)+" × "+l(o.quantity),1)])])])])]))),128))]),t("div",Zt,[t("div",te,[e[13]||(e[13]=t("h2",{class:"text-card-foreground mb-4 text-xl font-bold"}," Wish List Summary ",-1)),t("div",ee,[t("div",oe,[e[5]||(e[5]=t("span",null,"Items",-1)),t("span",null,l(n(r).totalItems)+" pieces",1)]),t("div",re,[e[6]||(e[6]=t("span",null,"Subtotal",-1)),t("span",null,"¥"+l(n(r).totalPrice.toLocaleString()),1)]),t("div",se,[e[7]||(e[7]=t("span",null,"Shipping",-1)),n(L)===0?(u(),m("span",ae," Free ")):(u(),m("span",ne,"¥"+l(n(L).toLocaleString()),1))]),e[9]||(e[9]=t("div",{class:"text-muted-foreground text-xs"},[t("p",null,"• 500 pieces or more for free shipping"),t("p",null," • Factory to transit warehouse shipping (not international logistics) ")],-1)),e[10]||(e[10]=t("hr",{class:"border-border"},null,-1)),t("div",ie,[e[8]||(e[8]=t("span",null,"Total",-1)),t("div",le,[t("div",null,"¥"+l(n(M).toLocaleString()),1),t("div",de,[n(c).isLoading?(u(),m("span",ce," Loading USD... ")):(u(),m("span",ue,l(n(c).formatUSDPrice(n(M))||"USD price unavailable"),1))])])])]),t("div",pe,[e[12]||(e[12]=t("div",{class:"bg-primary/5 border-primary/20 rounded-lg border p-3 text-center"},[t("p",{class:"text-primary text-sm"}," 💬 Click to jump to WhatsApp customer service chat, pls feel free to click send ")],-1)),f(n($),{size:"lg",variant:"enhanced",class:"h-12 w-full cursor-pointer text-base sm:h-10 sm:text-sm",style:{color:"white","background-color":"#4a3429"},onClick:F},{default:w(()=>[...e[11]||(e[11]=[v(" Send To Wholesaler ",-1)])]),_:1}),t("div",{class:"text-center"},[t("button",{onClick:Q,class:"text-primary hover:text-primary/80 cursor-pointer text-sm underline transition-colors"}," Browse More Products >> ")])]),e[14]||(e[14]=t("div",{class:"bg-primary/5 border-primary/20 mt-6 rounded-lg border p-4"},[t("p",{class:"text-primary text-sm"}," 🌟 Our handbag styles are very popular worldwide! Welcome to place your order and experience our premium quality products. ")],-1))])])])):(u(),m("div",me,[e[16]||(e[16]=K('<div class="from-muted to-muted/80 mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br shadow-lg" data-v-4539982e><svg class="empty-wishlist-icon text-muted-foreground h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-4539982e><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-v-4539982e></path></svg></div><h2 class="text-foreground mb-4 text-3xl font-bold" data-v-4539982e> Your wish list is empty </h2><p class="text-muted-foreground mb-6 text-lg" data-v-4539982e> You haven&#39;t added any items to your wish list yet </p><p class="text-primary mb-6 text-base font-medium" data-v-4539982e> 🌟 Our handbag styles are very popular worldwide! Welcome to browse and experience our premium quality products. </p>',4)),f(d,{to:"/products"},{default:w(()=>[f(n($),{size:"lg",class:"h-12 cursor-pointer text-base sm:h-10 sm:text-sm",style:{color:"white","background-color":"#4a3429"}},{default:w(()=>[...e[15]||(e[15]=[v(" Browse More Products ",-1)])]),_:1})]),_:1})]))]),f(Dt,{"is-open":n(I),"cart-items":n(r).items,"total-price":n(M),"shipping-cost":n(L),onClose:e[0]||(e[0]=o=>I.value=!1)},null,8,["is-open","cart-items","total-price","shipping-cost"]),f(qt,{"is-open":n(C),title:"Clear Wish List",message:"Are you sure you want to remove all items from your wish list? This action cannot be undone.","confirm-text":"Clear Wish List","cancel-text":"Cancel",variant:"danger",onClose:e[1]||(e[1]=o=>C.value=!1),onConfirm:E},null,8,["is-open"])])}}},Se=U(ge,[["__scopeId","data-v-4539982e"]]);export{Se as default};
