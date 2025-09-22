import{_ as q}from"./B6BDDW5y.js";import{_ as U}from"./zaLpD76B.js";import{c as I,$ as d,Y as D,V as n,a7 as t,Z as b,_ as a,L as O,a8 as z,U as Q,u as s,a0 as p,W as h,a1 as H,b as T,o as F,ad as A}from"./yAL7K7_J.js";import{_ as y}from"./BbX0tkFV.js";import{a as B,u as E,n as W}from"./B7rW6boG.js";import{u as Y}from"./CDK62tLN.js";import{u as R}from"./DGn9Ibq_.js";import{_ as G}from"./DlAUqK2U.js";import"./B5nonwMD.js";import"./Cb8v3Fbb.js";import"./DoLn8SJ7.js";const Z={class:"mb-6 flex items-center justify-between"},J={class:"flex items-center gap-4"},K={class:"text-sm text-gray-600 dark:text-gray-300"},X={class:"font-semibold text-gray-900 dark:text-white"},tt={class:"mb-6 overflow-x-auto"},et={class:"w-full border-collapse"},ot={class:"px-4 py-3"},st={class:"flex flex-col items-center gap-2"},rt={class:"h-16 w-16 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"},at={class:"text-xs font-medium text-gray-600 dark:text-gray-300"},nt={class:"px-4 py-3 text-center text-sm text-gray-900 dark:text-white"},it={class:"px-4 py-3 text-right text-sm text-gray-900 dark:text-white"},lt={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},dt={class:"border-t-2 border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"},ct={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},ut={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},gt={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},pt={class:"px-4 py-3 text-right"},mt={class:"text-primary text-lg font-bold"},xt={class:"text-sm font-normal text-gray-600 dark:text-gray-300"},ft={key:0},ht={key:1},bt={class:"flex gap-3"},yt={__name:"CheckoutDialog",props:{isOpen:{type:Boolean,default:!1},cartItems:{type:Array,default:()=>[]},totalPrice:{type:Number,default:0},shippingCost:{type:Number,default:0}},emits:["close"],setup(u,{emit:r}){const i=u,k=r,w=B(),v=I(()=>i.cartItems.reduce((l,o)=>l+o.quantity,0)),f=I(()=>i.totalPrice-i.shippingCost),C=async()=>{try{let l="";l+=`Order Date: ${new Date().toLocaleDateString()}

`,l+=`Product ID	Quantity	Unit Price	Total
`,i.cartItems.forEach(o=>{const x=o.bag.price*o.quantity;l+=`${o.bag.id}	${o.quantity}	${o.bag.price}	${x}
`}),l+=`
`,l+=`Total Items	${v.value}
`,l+=`Total Price	${i.totalPrice}
`,await navigator.clipboard.writeText(l),typeof window<"u"&&window.$toast&&window.$toast.success("Success","Order details copied to clipboard!"),_()}catch(l){console.error("Failed to copy to clipboard:",l),typeof window<"u"&&window.$toast&&window.$toast.error("Error","Failed to copy to clipboard")}},L=()=>{const l=`
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
          ${i.cartItems.map(x=>{const g=x.bag.price*x.quantity;return`
              <tr>
                <td>${x.bag.id}</td>
                <td>${x.quantity} pieces</td>
                <td>¥${x.bag.price}</td>
                <td>¥${g.toLocaleString()}</td>
              </tr>
            `}).join("")}
        </tbody>
        <tfoot>
          <tr class="total-row">
            <td><strong>Total</strong></td>
            <td><strong>${v.value} pieces</strong></td>
            <td></td>
            <td><strong>¥${i.totalPrice.toLocaleString()}</strong></td>
          </tr>
        </tfoot>
      </table>
      
      <div class="summary">
        <h3>Order Summary</h3>
        <p><strong>Total Items:</strong> ${v.value} pieces</p>
        <p><strong>Total Price:</strong> ¥${i.totalPrice.toLocaleString()}</p>
        <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
      </div>
    </body>
    </html>
  `,o=window.open("","_blank");o.document.write(l),o.document.close(),o.focus(),o.print(),o.close()},_=()=>{k("close")};return(l,o)=>{const x=q;return u.isOpen?(n(),d("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center",onClick:_},[o[8]||(o[8]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:o[0]||(o[0]=H(()=>{},["stop"]))},[t("div",Z,[t("div",J,[o[2]||(o[2]=t("h3",{class:"text-2xl font-bold text-gray-900 dark:text-white"}," Order Summary ",-1)),t("div",K,[o[1]||(o[1]=b(" Order Date: ",-1)),t("span",X,a(new Date().toLocaleDateString()),1)])]),t("button",{onClick:_,class:"text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer"},[...o[3]||(o[3]=[t("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),t("div",tt,[t("table",et,[o[4]||(o[4]=t("thead",null,[t("tr",{class:"border-b border-gray-200 dark:border-gray-700"},[t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Design "),t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Quantity "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Unit Price "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Total ")])],-1)),t("tbody",null,[(n(!0),d(O,null,z(u.cartItems,g=>(n(),d("tr",{key:g.bagId,class:"border-b border-gray-100 dark:border-gray-800"},[t("td",ot,[t("div",st,[t("div",rt,[g.bag.images[0]?(n(),Q(x,{key:0,src:g.bag.images[0].url,alt:g.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:64,height:64,format:"webp"},null,8,["src","alt"])):D("",!0)]),t("span",at,a(g.bag.id),1)])]),t("td",nt,a(g.quantity)+" pieces ",1),t("td",it," ¥"+a(g.bag.price),1),t("td",lt," ¥"+a((g.bag.price*g.quantity).toLocaleString()),1)]))),128))]),t("tfoot",null,[t("tr",dt,[t("td",ct,a(u.cartItems.length)+" designs ",1),t("td",ut,a(s(v))+" pieces ",1),t("td",gt," ¥"+a(s(f).toLocaleString()),1),t("td",pt,[t("div",mt," ¥"+a(u.totalPrice.toLocaleString()),1),t("div",xt,[s(w).isLoading?(n(),d("span",ft,"Loading USD...")):(n(),d("span",ht,a(s(w).formatUSDPrice(u.totalPrice)||"USD price unavailable"),1))])])])])])]),t("div",bt,[p(s(y),{variant:"outline",class:"flex-1 btn-outline-enhanced cursor-pointer",onClick:_},{default:h(()=>[...o[5]||(o[5]=[b(" Close ",-1)])]),_:1}),p(s(y),{class:"flex-1 cursor-pointer",style:{"background-color":"#4a3429",color:"white"},onClick:C},{default:h(()=>[...o[6]||(o[6]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1),b(" Copy ",-1)])]),_:1}),p(s(y),{class:"hidden flex-1",onClick:L},{default:h(()=>[...o[7]||(o[7]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"})],-1),b(" Print ",-1)])]),_:1})])])])):D("",!0)}}},vt={class:"mb-4 text-lg font-semibold text-gray-900 dark:text-white"},wt={class:"mb-6 text-gray-600 dark:text-gray-300"},_t={class:"flex gap-3"},kt={__name:"ConfirmDialog",props:{isOpen:{type:Boolean,default:!1},title:{type:String,default:"Confirm Action"},message:{type:String,default:"Are you sure you want to proceed?"},confirmText:{type:String,default:"Confirm"},cancelText:{type:String,default:"Cancel"},variant:{type:String,default:"default"}},emits:["close","confirm"],setup(u,{emit:r}){const i=r,k=()=>{i("confirm"),i("close")},w=()=>{i("close")};return(v,f)=>u.isOpen?(n(),d("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center",onClick:w},[f[1]||(f[1]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:f[0]||(f[0]=H(()=>{},["stop"]))},[t("h3",vt,a(u.title),1),t("p",wt,a(u.message),1),t("div",_t,[p(s(y),{variant:"outline",class:"flex-1 btn-outline-enhanced cursor-pointer",onClick:w},{default:h(()=>[b(a(u.cancelText),1)]),_:1}),p(s(y),{class:"flex-1 cursor-pointer",style:{"background-color":"#4a3429",color:"white"},onClick:k},{default:h(()=>[b(a(u.confirmText),1)]),_:1})])])])):D("",!0)}},Ct={class:"w-full px-4 py-8"},$t={class:"mb-8 flex items-center justify-between"},St={key:0},It={key:0,class:"grid gap-8 lg:grid-cols-3"},Dt={class:"space-y-4 lg:col-span-2"},Lt={class:"flex gap-4"},Pt={class:"h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-muted"},jt={class:"flex-1"},Tt={class:"mb-2 flex items-start justify-between"},qt={class:"text-lg font-semibold text-card-foreground"},Ot=["onClick"],zt={class:"flex items-center justify-between"},Ht={class:"flex w-fit items-center rounded-lg border"},Bt=["onClick"],Mt=["value","onInput"],Nt=["onClick"],Vt={class:"text-right"},Ut={class:"text-primary text-lg font-bold"},Qt={class:"text-sm text-muted-foreground"},Ft={class:"lg:col-span-1"},At={class:"sticky top-8 rounded-lg bg-card p-6 shadow-md border border-border"},Et={class:"mb-6 space-y-3"},Wt={class:"flex justify-between text-muted-foreground"},Yt={class:"flex justify-between text-muted-foreground"},Rt={class:"flex justify-between text-muted-foreground"},Gt={key:0,class:"text-success"},Zt={key:1},Jt={class:"flex justify-between text-lg font-bold text-card-foreground"},Kt={class:"text-right"},Xt={class:"text-sm font-normal text-muted-foreground"},te={key:0},ee={key:1},oe={class:"flex flex-row gap-3"},se={key:1,class:"py-12 text-center"},re={__name:"cart",setup(u){const r=Y(),i=B(),{trackViewCart:k,trackBeginCheckout:w,trackUserInteraction:v}=R(),f=T(!1),C=T(!1),L=m=>{r.removeFromCart(m)},_=m=>{r.increaseQuantity(m)},l=m=>{r.decreaseQuantity(m)},o=(m,e)=>{const j=Number.parseInt(e)||50;r.updateQuantity(m,j)},x=()=>{if(r.items.length>0){const m=r.items.map(e=>({item_id:e.bag.id,item_name:`${e.bag.id} Handbag`,item_category:"Handbag",price:e.bag.price,quantity:e.quantity}));w(m,r.totalPrice),v("begin_checkout","cart_page",{item_count:r.items.length}),f.value=!0}},g=()=>{W("/products")},M=()=>{C.value=!0},N=()=>{r.clearCart()};F(()=>{if(r.items.length>0){const m=r.items.map(e=>({item_id:e.bag.id,item_name:`${e.bag.id} Handbag`,item_category:"Handbag",price:e.bag.price,quantity:e.quantity}));k(m,r.totalPrice)}});const $=I(()=>r.totalItems>=500?0:r.totalItems),P=I(()=>r.totalPrice+$.value);return E({title:"Shopping Cart - Fashionable Handbags",meta:[{name:"description",content:"View your shopping cart and manage selected items."}]}),(m,e)=>{const j=q,V=U;return n(),d("div",null,[t("div",Ct,[t("div",$t,[e[3]||(e[3]=t("div",null,[t("h1",{class:"text-foreground mb-2 text-3xl font-bold"},"Shopping Cart"),t("p",{class:"text-muted-foreground"},"Manage your selected items")],-1)),s(r).items.length>0?(n(),d("div",St,[p(s(y),{variant:"outline",size:"sm",onClick:M,class:"cursor-pointer text-destructive hover:bg-destructive/10 hover:text-destructive dark:text-destructive dark:hover:bg-destructive/20 dark:hover:text-destructive"},{default:h(()=>[...e[2]||(e[2]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),b(" Clear Cart ",-1)])]),_:1})])):D("",!0)]),s(r).items.length>0?(n(),d("div",It,[t("div",Dt,[(n(!0),d(O,null,z(s(r).items,c=>(n(),d("div",{key:c.bagId,class:"rounded-lg bg-card p-6 shadow-md border border-border"},[t("div",Lt,[t("div",Pt,[p(j,{src:c.bag.images[0].url,alt:c.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:96,height:96,format:"webp"},null,8,["src","alt"])]),t("div",jt,[t("div",Tt,[t("div",null,[t("h3",qt,a(c.bag.id)+" Handbag ",1)]),t("button",{onClick:S=>L(c.bagId),class:"cursor-pointer text-muted-foreground transition-colors hover:text-destructive"},[...e[4]||(e[4]=[t("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])],8,Ot)]),t("div",zt,[t("div",Ht,[t("button",{onClick:S=>l(c.bagId),class:"flex h-10 cursor-pointer items-center justify-center px-3 py-2 text-lg transition-colors hover:bg-muted sm:h-8 sm:text-base"}," - ",8,Bt),t("input",{value:c.quantity,onInput:S=>o(c.bagId,S.target.value),type:"number",min:"50",step:"50",class:"h-10 w-24 border-0 bg-transparent px-2 py-2 text-center text-base focus:ring-0 sm:h-8 sm:text-sm"},null,40,Mt),t("button",{onClick:S=>_(c.bagId),class:"flex h-10 cursor-pointer items-center justify-center px-3 py-2 text-lg transition-colors hover:bg-muted sm:h-8 sm:text-base"}," + ",8,Nt)]),t("div",Vt,[t("p",Ut," ¥"+a((c.bag.price*c.quantity).toLocaleString()),1),t("p",Qt," ¥"+a(c.bag.price)+" × "+a(c.quantity),1)])])])])]))),128))]),t("div",Ft,[t("div",At,[e[13]||(e[13]=t("h2",{class:"mb-4 text-xl font-bold text-card-foreground"}," Order Summary ",-1)),t("div",Et,[t("div",Wt,[e[5]||(e[5]=t("span",null,"Items",-1)),t("span",null,a(s(r).totalItems)+" pieces",1)]),t("div",Yt,[e[6]||(e[6]=t("span",null,"Subtotal",-1)),t("span",null,"¥"+a(s(r).totalPrice.toLocaleString()),1)]),t("div",Rt,[e[7]||(e[7]=t("span",null,"Shipping",-1)),s($)===0?(n(),d("span",Gt," Free ")):(n(),d("span",Zt,"¥"+a(s($).toLocaleString()),1))]),e[9]||(e[9]=t("div",{class:"text-xs text-muted-foreground"},[t("p",null,"• 500 pieces or more for free shipping"),t("p",null," • Factory to transit warehouse shipping (not international logistics) ")],-1)),e[10]||(e[10]=t("hr",{class:"border-border"},null,-1)),t("div",Jt,[e[8]||(e[8]=t("span",null,"Total",-1)),t("div",Kt,[t("div",null,"¥"+a(s(P).toLocaleString()),1),t("div",Xt,[s(i).isLoading?(n(),d("span",te," Loading USD... ")):(n(),d("span",ee,a(s(i).formatUSDPrice(s(P))||"USD price unavailable"),1))])])])]),t("div",oe,[p(s(y),{size:"lg",variant:"enhanced",class:"h-12 flex-1 cursor-pointer text-base sm:h-10 sm:text-sm",style:{"background-color":"#4a3429",color:"white"},onClick:x},{default:h(()=>[...e[11]||(e[11]=[b(" Checkout Now ",-1)])]),_:1}),p(s(y),{size:"lg",variant:"outline",class:"btn-outline-enhanced h-12 flex-1 cursor-pointer text-base sm:h-10 sm:text-sm",onClick:g},{default:h(()=>[...e[12]||(e[12]=[b(" Continue Shopping ",-1)])]),_:1})]),e[14]||(e[14]=t("div",{class:"mt-6 rounded-lg bg-primary/5 p-4 border border-primary/20"},[t("p",{class:"text-sm text-primary"}," 🌟 Our handbag styles are very popular worldwide! Welcome to place your order and experience our premium quality products. ")],-1))])])])):(n(),d("div",se,[e[16]||(e[16]=A('<div class="mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-muted to-muted/80 shadow-lg" data-v-20357ef0><svg class="empty-cart-icon h-20 w-20 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-20357ef0><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" data-v-20357ef0></path></svg></div><h2 class="mb-4 text-3xl font-bold text-foreground" data-v-20357ef0> Your cart is empty </h2><p class="mb-6 text-lg text-muted-foreground" data-v-20357ef0> You haven&#39;t added any items to your cart yet </p><p class="mb-8 text-base font-medium text-primary" data-v-20357ef0> 🌟 Our handbag styles are very popular worldwide! Welcome to browse and experience our premium quality products. </p>',4)),p(V,{to:"/products"},{default:h(()=>[p(s(y),{size:"lg",class:"h-12 cursor-pointer text-base sm:h-10 sm:text-sm",style:{"background-color":"#4a3429",color:"white"}},{default:h(()=>[...e[15]||(e[15]=[b(" Start Shopping ",-1)])]),_:1})]),_:1})]))]),p(yt,{"is-open":s(f),"cart-items":s(r).items,"total-price":s(P),"shipping-cost":s($),onClose:e[0]||(e[0]=c=>f.value=!1)},null,8,["is-open","cart-items","total-price","shipping-cost"]),p(kt,{"is-open":s(C),title:"Clear Shopping Cart",message:"Are you sure you want to remove all items from your cart? This action cannot be undone.","confirm-text":"Clear Cart","cancel-text":"Cancel",variant:"danger",onClose:e[1]||(e[1]=c=>C.value=!1),onConfirm:N},null,8,["is-open"])])}}},fe=G(re,[["__scopeId","data-v-20357ef0"]]);export{fe as default};
