import{_ as q}from"./BDG0gwHq.js";import{_ as F}from"./CqujRKVA.js";import{c as D,O as d,W as L,Q as n,U as t,a2 as h,X as a,L as O,a9 as H,a0 as A,u as r,a3 as m,a1 as f,a4 as B,b as T,o as E,V as W}from"./CO3o911U.js";import{_ as k}from"./Bg7FwLAy.js";import{a as z,u as R,n as Y}from"#entry";import{u as G,a as X}from"./DE1c0ksC.js";import{_ as J}from"./DlAUqK2U.js";import"./0sGHHGNL.js";import"./D4p7EFcB.js";import"./DuxmeIqw.js";const K={class:"mb-6 flex items-center justify-between"},Z={class:"flex items-center gap-4"},tt={class:"text-sm text-gray-600 dark:text-gray-300"},et={class:"font-semibold text-gray-900 dark:text-white"},ot={class:"mb-6 overflow-x-auto"},st={class:"w-full border-collapse"},rt={class:"px-4 py-3"},at={class:"flex flex-col items-center gap-2"},nt={class:"h-16 w-16 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"},it={class:"text-xs font-medium text-gray-600 dark:text-gray-300"},lt={class:"px-4 py-3 text-center text-sm text-gray-900 dark:text-white"},dt={class:"px-4 py-3 text-right text-sm text-gray-900 dark:text-white"},ct={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},ut={class:"border-t-2 border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"},gt={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},pt={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},mt={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},xt={class:"px-4 py-3 text-right"},ht={class:"text-primary text-lg font-bold"},ft={class:"text-sm font-normal text-gray-600 dark:text-gray-300"},bt={key:0},yt={key:1},vt={class:"flex gap-3"},kt={__name:"CheckoutDialog",props:{isOpen:{type:Boolean,default:!1},cartItems:{type:Array,default:()=>[]},totalPrice:{type:Number,default:0},shippingCost:{type:Number,default:0}},emits:["close"],setup(u,{emit:s}){const i=u,_=s,w=z(),b=D(()=>i.cartItems.reduce((l,o)=>l+o.quantity,0)),y=D(()=>i.totalPrice-i.shippingCost),P=async()=>{try{let l="";l+=`Order Date: ${new Date().toLocaleDateString()}

`,l+=`Product ID	Quantity	Unit Price	Total
`,i.cartItems.forEach(o=>{const x=o.bag.price*o.quantity;l+=`${o.bag.id}	${o.quantity}	${o.bag.price}	${x}
`}),l+=`
`,l+=`Total Items	${b.value}
`,l+=`Total Price	${i.totalPrice}
`,await navigator.clipboard.writeText(l),typeof window<"u"&&window.$toast&&window.$toast.success("Success","Order details copied to clipboard!"),v()}catch(l){console.error("Failed to copy to clipboard:",l),typeof window<"u"&&window.$toast&&window.$toast.error("Error","Failed to copy to clipboard")}},C=()=>{const l=`
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
        <p><strong>Total Items:</strong> ${b.value} pieces</p>
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
            <td><strong>${b.value} pieces</strong></td>
            <td></td>
            <td><strong>¥${i.totalPrice.toLocaleString()}</strong></td>
          </tr>
        </tfoot>
      </table>
      
      <div class="summary">
        <h3>Order Summary</h3>
        <p><strong>Total Items:</strong> ${b.value} pieces</p>
        <p><strong>Total Price:</strong> ¥${i.totalPrice.toLocaleString()}</p>
        <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
      </div>
    </body>
    </html>
  `,o=window.open("","_blank");o.document.write(l),o.document.close(),o.focus(),o.print(),o.close()},v=()=>{_("close")};return(l,o)=>{const x=q;return u.isOpen?(n(),d("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center",onClick:v},[o[8]||(o[8]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:o[0]||(o[0]=B(()=>{},["stop"]))},[t("div",K,[t("div",Z,[o[2]||(o[2]=t("h3",{class:"text-2xl font-bold text-gray-900 dark:text-white"}," Order Summary ",-1)),t("div",tt,[o[1]||(o[1]=h(" Order Date: ",-1)),t("span",et,a(new Date().toLocaleDateString()),1)])]),t("button",{onClick:v,class:"cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"},[...o[3]||(o[3]=[t("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),t("div",ot,[t("table",st,[o[4]||(o[4]=t("thead",null,[t("tr",{class:"border-b border-gray-200 dark:border-gray-700"},[t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Design "),t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Quantity "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Unit Price "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Total ")])],-1)),t("tbody",null,[(n(!0),d(O,null,H(u.cartItems,g=>(n(),d("tr",{key:g.bagId,class:"border-b border-gray-100 dark:border-gray-800"},[t("td",rt,[t("div",at,[t("div",nt,[g.bag.images[0]?(n(),A(x,{key:0,src:g.bag.images[0].url,alt:g.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:64,height:64,format:"webp"},null,8,["src","alt"])):L("",!0)]),t("span",it,a(g.bag.id),1)])]),t("td",lt,a(g.quantity)+" pieces ",1),t("td",dt," ¥"+a(g.bag.price),1),t("td",ct," ¥"+a((g.bag.price*g.quantity).toLocaleString()),1)]))),128))]),t("tfoot",null,[t("tr",ut,[t("td",gt,a(u.cartItems.length)+" designs ",1),t("td",pt,a(r(b))+" pieces ",1),t("td",mt," ¥"+a(r(y).toLocaleString()),1),t("td",xt,[t("div",ht," ¥"+a(u.totalPrice.toLocaleString()),1),t("div",ft,[r(w).isLoading?(n(),d("span",bt,"Loading USD...")):(n(),d("span",yt,a(r(w).formatUSDPrice(u.totalPrice)||"USD price unavailable"),1))])])])])])]),t("div",vt,[m(r(k),{variant:"outline",class:"btn-outline-enhanced flex-1 cursor-pointer",onClick:v},{default:f(()=>[...o[5]||(o[5]=[h(" Close ",-1)])]),_:1}),m(r(k),{class:"flex-1 cursor-pointer",style:{"background-color":"#4a3429",color:"white"},onClick:P},{default:f(()=>[...o[6]||(o[6]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1),h(" Copy ",-1)])]),_:1}),m(r(k),{class:"hidden flex-1",onClick:C},{default:f(()=>[...o[7]||(o[7]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"})],-1),h(" Print ",-1)])]),_:1})])])])):L("",!0)}}},wt={class:"mb-4 text-lg font-semibold text-gray-900 dark:text-white"},_t={class:"mb-6 text-gray-600 dark:text-gray-300"},Ct={class:"flex gap-3"},$t={__name:"ConfirmDialog",props:{isOpen:{type:Boolean,default:!1},title:{type:String,default:"Confirm Action"},message:{type:String,default:"Are you sure you want to proceed?"},confirmText:{type:String,default:"Confirm"},cancelText:{type:String,default:"Cancel"},variant:{type:String,default:"default"}},emits:["close","confirm"],setup(u,{emit:s}){const i=s,_=()=>{i("confirm"),i("close")},w=()=>{i("close")};return(b,y)=>u.isOpen?(n(),d("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center",onClick:w},[y[1]||(y[1]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:y[0]||(y[0]=B(()=>{},["stop"]))},[t("h3",wt,a(u.title),1),t("p",_t,a(u.message),1),t("div",Ct,[m(r(k),{variant:"outline",class:"btn-outline-enhanced flex-1 cursor-pointer",onClick:w},{default:f(()=>[h(a(u.cancelText),1)]),_:1}),m(r(k),{class:"flex-1 cursor-pointer",style:{"background-color":"#4a3429",color:"white"},onClick:_},{default:f(()=>[h(a(u.confirmText),1)]),_:1})])])])):L("",!0)}},St={class:"w-full px-4 py-8"},It={class:"mb-8 flex items-center justify-between"},Dt={key:0},Lt={key:0,class:"grid gap-8 lg:grid-cols-3"},Pt={class:"space-y-4 lg:col-span-2"},jt={class:"flex gap-4"},Tt={class:"bg-muted h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg"},qt={class:"flex-1"},Ot={class:"mb-2 flex items-start justify-between"},Ht={class:"text-card-foreground text-lg font-semibold"},Bt=["onClick"],zt={class:"flex items-center justify-between"},Mt={class:"flex w-fit items-center rounded-lg border"},Nt=["onClick"],Vt=["value","onInput"],Ut=["onClick"],Qt={class:"text-right"},Ft={class:"text-primary text-lg font-bold"},At={class:"text-muted-foreground text-sm"},Et={class:"lg:col-span-1"},Wt={class:"bg-card border-border sticky top-8 rounded-lg border p-6 shadow-md"},Rt={class:"mb-6 space-y-3"},Yt={class:"text-muted-foreground flex justify-between"},Gt={class:"text-muted-foreground flex justify-between"},Xt={class:"text-muted-foreground flex justify-between"},Jt={key:0,class:"text-success"},Kt={key:1},Zt={class:"text-card-foreground flex justify-between text-lg font-bold"},te={class:"text-right"},ee={class:"text-muted-foreground text-sm font-normal"},oe={key:0},se={key:1},re={class:"space-y-3"},ae={key:1,class:"py-12 text-center"},ne={__name:"cart",setup(u){const s=G(),i=z(),{trackViewCart:_,trackBeginCheckout:w,trackUserInteraction:b,trackRemoveFromCart:y,trackButtonClick:P}=X(),C=T(!1),v=T(!1),l=p=>{const e=s.items.find($=>$.bagId===p);e&&y(e.bag.id,`${e.bag.id} Handbag`,e.bag.price,e.quantity,"Handbag"),s.removeFromCart(p)},o=p=>{s.increaseQuantity(p)},x=p=>{s.decreaseQuantity(p)},g=(p,e)=>{const $=Number.parseInt(e)||50;s.updateQuantity(p,$)},M=()=>{if(s.items.length>0){const p=s.items.map(e=>({item_id:e.bag.id,item_name:`${e.bag.id} Handbag`,item_category:"Handbag",price:e.bag.price,quantity:e.quantity}));w(p,s.totalPrice),b("begin_checkout","cart_page",{item_count:s.items.length}),P("checkout","cart_page",{item_count:s.items.length,total_value:s.totalPrice}),C.value=!0}},N=()=>{Y("/products")},V=()=>{v.value=!0},U=()=>{s.clearCart()};E(()=>{if(s.items.length>0){const p=s.items.map(e=>({item_id:e.bag.id,item_name:`${e.bag.id} Handbag`,item_category:"Handbag",price:e.bag.price,quantity:e.quantity}));_(p,s.totalPrice)}});const S=D(()=>s.totalItems>=500?0:s.totalItems),j=D(()=>s.totalPrice+S.value);return R({title:"Shopping Cart - Fashionable Handbags",meta:[{name:"description",content:"View your shopping cart and manage selected items."}]}),(p,e)=>{const $=q,Q=F;return n(),d("div",null,[t("div",St,[t("div",It,[e[3]||(e[3]=t("div",null,[t("h1",{class:"text-foreground mb-2 text-3xl font-bold"},"Shopping Cart"),t("p",{class:"text-muted-foreground"},"Manage your selected items")],-1)),r(s).items.length>0?(n(),d("div",Dt,[m(r(k),{variant:"outline",size:"sm",onClick:V,class:"text-destructive hover:bg-destructive/10 hover:text-destructive dark:text-destructive dark:hover:bg-destructive/20 dark:hover:text-destructive cursor-pointer"},{default:f(()=>[...e[2]||(e[2]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),h(" Clear Cart ",-1)])]),_:1})])):L("",!0)]),r(s).items.length>0?(n(),d("div",Lt,[t("div",Pt,[(n(!0),d(O,null,H(r(s).items,c=>(n(),d("div",{key:c.bagId,class:"bg-card border-border rounded-lg border p-6 shadow-md"},[t("div",jt,[t("div",Tt,[m($,{src:c.bag.images[0].url,alt:c.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:96,height:96,format:"webp"},null,8,["src","alt"])]),t("div",qt,[t("div",Ot,[t("div",null,[t("h3",Ht,a(c.bag.id)+" Handbag ",1)]),t("button",{onClick:I=>l(c.bagId),class:"text-muted-foreground hover:text-destructive cursor-pointer transition-colors"},[...e[4]||(e[4]=[t("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])],8,Bt)]),t("div",zt,[t("div",Mt,[t("button",{onClick:I=>x(c.bagId),class:"hover:bg-muted flex h-10 cursor-pointer items-center justify-center px-3 py-2 text-lg transition-colors sm:h-8 sm:text-base"}," - ",8,Nt),t("input",{value:c.quantity,onInput:I=>g(c.bagId,I.target.value),type:"number",min:"50",step:"50",class:"h-10 w-24 border-0 bg-transparent px-2 py-2 text-center text-base focus:ring-0 sm:h-8 sm:text-sm"},null,40,Vt),t("button",{onClick:I=>o(c.bagId),class:"hover:bg-muted flex h-10 cursor-pointer items-center justify-center px-3 py-2 text-lg transition-colors sm:h-8 sm:text-base"}," + ",8,Ut)]),t("div",Qt,[t("p",Ft," ¥"+a((c.bag.price*c.quantity).toLocaleString()),1),t("p",At," ¥"+a(c.bag.price)+" × "+a(c.quantity),1)])])])])]))),128))]),t("div",Et,[t("div",Wt,[e[12]||(e[12]=t("h2",{class:"text-card-foreground mb-4 text-xl font-bold"}," Order Summary ",-1)),t("div",Rt,[t("div",Yt,[e[5]||(e[5]=t("span",null,"Items",-1)),t("span",null,a(r(s).totalItems)+" pieces",1)]),t("div",Gt,[e[6]||(e[6]=t("span",null,"Subtotal",-1)),t("span",null,"¥"+a(r(s).totalPrice.toLocaleString()),1)]),t("div",Xt,[e[7]||(e[7]=t("span",null,"Shipping",-1)),r(S)===0?(n(),d("span",Jt," Free ")):(n(),d("span",Kt,"¥"+a(r(S).toLocaleString()),1))]),e[9]||(e[9]=t("div",{class:"text-muted-foreground text-xs"},[t("p",null,"• 500 pieces or more for free shipping"),t("p",null," • Factory to transit warehouse shipping (not international logistics) ")],-1)),e[10]||(e[10]=t("hr",{class:"border-border"},null,-1)),t("div",Zt,[e[8]||(e[8]=t("span",null,"Total",-1)),t("div",te,[t("div",null,"¥"+a(r(j).toLocaleString()),1),t("div",ee,[r(i).isLoading?(n(),d("span",oe," Loading USD... ")):(n(),d("span",se,a(r(i).formatUSDPrice(r(j))||"USD price unavailable"),1))])])])]),t("div",re,[m(r(k),{size:"lg",variant:"enhanced",class:"h-12 w-full cursor-pointer text-base sm:h-10 sm:text-sm",style:{color:"white","background-color":"#4a3429"},onClick:M},{default:f(()=>[...e[11]||(e[11]=[h(" Checkout Now ",-1)])]),_:1}),t("div",{class:"text-center"},[t("button",{onClick:N,class:"text-primary hover:text-primary/80 cursor-pointer text-sm underline transition-colors"}," Continue Shopping >> ")])]),e[13]||(e[13]=t("div",{class:"bg-primary/5 border-primary/20 mt-6 rounded-lg border p-4"},[t("p",{class:"text-primary text-sm"}," 🌟 Our handbag styles are very popular worldwide! Welcome to place your order and experience our premium quality products. ")],-1))])])])):(n(),d("div",ae,[e[15]||(e[15]=W('<div class="from-muted to-muted/80 mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br shadow-lg" data-v-4d6f4066><svg class="empty-cart-icon text-muted-foreground h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-4d6f4066><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" data-v-4d6f4066></path></svg></div><h2 class="text-foreground mb-4 text-3xl font-bold" data-v-4d6f4066> Your cart is empty </h2><p class="text-muted-foreground mb-6 text-lg" data-v-4d6f4066> You haven&#39;t added any items to your cart yet </p><p class="text-primary mb-8 text-base font-medium" data-v-4d6f4066> 🌟 Our handbag styles are very popular worldwide! Welcome to browse and experience our premium quality products. </p>',4)),m(Q,{to:"/products"},{default:f(()=>[m(r(k),{size:"lg",class:"h-12 cursor-pointer text-base sm:h-10 sm:text-sm",style:{color:"white","background-color":"#4a3429"}},{default:f(()=>[...e[14]||(e[14]=[h(" Start Shopping ",-1)])]),_:1})]),_:1})]))]),m(kt,{"is-open":r(C),"cart-items":r(s).items,"total-price":r(j),"shipping-cost":r(S),onClose:e[0]||(e[0]=c=>C.value=!1)},null,8,["is-open","cart-items","total-price","shipping-cost"]),m($t,{"is-open":r(v),title:"Clear Shopping Cart",message:"Are you sure you want to remove all items from your cart? This action cannot be undone.","confirm-text":"Clear Cart","cancel-text":"Cancel",variant:"danger",onClose:e[1]||(e[1]=c=>v.value=!1),onConfirm:U},null,8,["is-open"])])}}},fe=J(ne,[["__scopeId","data-v-4d6f4066"]]);export{fe as default};
