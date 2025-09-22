import{_ as T}from"./C8L2luiR.js";import{_ as N}from"./BaZ0sXZx.js";import{c as $,$ as c,Y as S,V as n,a7 as t,Z as f,_ as r,L as O,a8 as z,U as V,u as s,a0 as g,W as x,a1 as q,b as P,ad as H}from"./yAL7K7_J.js";import{_ as b}from"./DgUQ73Aq.js";import{a as B,u as U,n as Q}from"./Uux8W_oh.js";import{u as F}from"./D1jP8jjS.js";import{_ as A}from"./DlAUqK2U.js";import"./B5nonwMD.js";import"./Cb8v3Fbb.js";import"./DoLn8SJ7.js";const E={class:"mb-6 flex items-center justify-between"},W={class:"flex items-center gap-4"},Y={class:"text-sm text-gray-600 dark:text-gray-300"},R={class:"font-semibold text-gray-900 dark:text-white"},Z={class:"mb-6 overflow-x-auto"},G={class:"w-full border-collapse"},J={class:"px-4 py-3"},K={class:"flex flex-col items-center gap-2"},X={class:"h-16 w-16 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"},tt={class:"text-xs font-medium text-gray-600 dark:text-gray-300"},et={class:"px-4 py-3 text-center text-sm text-gray-900 dark:text-white"},ot={class:"px-4 py-3 text-right text-sm text-gray-900 dark:text-white"},st={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},rt={class:"border-t-2 border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"},at={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},nt={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},it={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},lt={class:"px-4 py-3 text-right"},dt={class:"text-primary text-lg font-bold"},ct={class:"text-sm font-normal text-gray-600 dark:text-gray-300"},ut={key:0},pt={key:1},gt={class:"flex gap-3"},mt={__name:"CheckoutDialog",props:{isOpen:{type:Boolean,default:!1},cartItems:{type:Array,default:()=>[]},totalPrice:{type:Number,default:0},shippingCost:{type:Number,default:0}},emits:["close"],setup(p,{emit:a}){const i=p,k=a,h=B(),y=$(()=>i.cartItems.reduce((l,o)=>l+o.quantity,0)),v=$(()=>i.totalPrice-i.shippingCost),I=async()=>{try{let l="";l+=`Order Date: ${new Date().toLocaleDateString()}

`,l+=`Product ID	Quantity	Unit Price	Total
`,i.cartItems.forEach(o=>{const m=o.bag.price*o.quantity;l+=`${o.bag.id}	${o.quantity}	${o.bag.price}	${m}
`}),l+=`
`,l+=`Total Items	${y.value}
`,l+=`Total Price	${i.totalPrice}
`,await navigator.clipboard.writeText(l),typeof window<"u"&&window.$toast&&window.$toast.success("Success","Order details copied to clipboard!"),_()}catch(l){console.error("Failed to copy to clipboard:",l),typeof window<"u"&&window.$toast&&window.$toast.error("Error","Failed to copy to clipboard")}},D=()=>{const l=`
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
        <p><strong>Total Items:</strong> ${y.value} pieces</p>
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
          ${i.cartItems.map(m=>{const d=m.bag.price*m.quantity;return`
              <tr>
                <td>${m.bag.id}</td>
                <td>${m.quantity} pieces</td>
                <td>¥${m.bag.price}</td>
                <td>¥${d.toLocaleString()}</td>
              </tr>
            `}).join("")}
        </tbody>
        <tfoot>
          <tr class="total-row">
            <td><strong>Total</strong></td>
            <td><strong>${y.value} pieces</strong></td>
            <td></td>
            <td><strong>¥${i.totalPrice.toLocaleString()}</strong></td>
          </tr>
        </tfoot>
      </table>
      
      <div class="summary">
        <h3>Order Summary</h3>
        <p><strong>Total Items:</strong> ${y.value} pieces</p>
        <p><strong>Total Price:</strong> ¥${i.totalPrice.toLocaleString()}</p>
        <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
      </div>
    </body>
    </html>
  `,o=window.open("","_blank");o.document.write(l),o.document.close(),o.focus(),o.print(),o.close()},_=()=>{k("close")};return(l,o)=>{const m=T;return p.isOpen?(n(),c("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center",onClick:_},[o[8]||(o[8]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:o[0]||(o[0]=q(()=>{},["stop"]))},[t("div",E,[t("div",W,[o[2]||(o[2]=t("h3",{class:"text-2xl font-bold text-gray-900 dark:text-white"}," Order Summary ",-1)),t("div",Y,[o[1]||(o[1]=f(" Order Date: ",-1)),t("span",R,r(new Date().toLocaleDateString()),1)])]),t("button",{onClick:_,class:"text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer"},[...o[3]||(o[3]=[t("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),t("div",Z,[t("table",G,[o[4]||(o[4]=t("thead",null,[t("tr",{class:"border-b border-gray-200 dark:border-gray-700"},[t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Design "),t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Quantity "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Unit Price "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Total ")])],-1)),t("tbody",null,[(n(!0),c(O,null,z(p.cartItems,d=>(n(),c("tr",{key:d.bagId,class:"border-b border-gray-100 dark:border-gray-800"},[t("td",J,[t("div",K,[t("div",X,[d.bag.images[0]?(n(),V(m,{key:0,src:d.bag.images[0].url,alt:d.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:64,height:64,format:"webp"},null,8,["src","alt"])):S("",!0)]),t("span",tt,r(d.bag.id),1)])]),t("td",et,r(d.quantity)+" pieces ",1),t("td",ot," ¥"+r(d.bag.price),1),t("td",st," ¥"+r((d.bag.price*d.quantity).toLocaleString()),1)]))),128))]),t("tfoot",null,[t("tr",rt,[t("td",at,r(p.cartItems.length)+" designs ",1),t("td",nt,r(s(y))+" pieces ",1),t("td",it," ¥"+r(s(v).toLocaleString()),1),t("td",lt,[t("div",dt," ¥"+r(p.totalPrice.toLocaleString()),1),t("div",ct,[s(h).isLoading?(n(),c("span",ut,"Loading USD...")):(n(),c("span",pt,r(s(h).formatUSDPrice(p.totalPrice)||"USD price unavailable"),1))])])])])])]),t("div",gt,[g(s(b),{variant:"outline",class:"flex-1 btn-outline-enhanced cursor-pointer",onClick:_},{default:x(()=>[...o[5]||(o[5]=[f(" Close ",-1)])]),_:1}),g(s(b),{class:"flex-1 cursor-pointer",style:{"background-color":"#4a3429",color:"white"},onClick:I},{default:x(()=>[...o[6]||(o[6]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1),f(" Copy ",-1)])]),_:1}),g(s(b),{class:"hidden flex-1",onClick:D},{default:x(()=>[...o[7]||(o[7]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"})],-1),f(" Print ",-1)])]),_:1})])])])):S("",!0)}}},xt={class:"mb-4 text-lg font-semibold text-gray-900 dark:text-white"},ft={class:"mb-6 text-gray-600 dark:text-gray-300"},ht={class:"flex gap-3"},bt={__name:"ConfirmDialog",props:{isOpen:{type:Boolean,default:!1},title:{type:String,default:"Confirm Action"},message:{type:String,default:"Are you sure you want to proceed?"},confirmText:{type:String,default:"Confirm"},cancelText:{type:String,default:"Cancel"},variant:{type:String,default:"default"}},emits:["close","confirm"],setup(p,{emit:a}){const i=a,k=()=>{i("confirm"),i("close")},h=()=>{i("close")};return(y,v)=>p.isOpen?(n(),c("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center",onClick:h},[v[1]||(v[1]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:v[0]||(v[0]=q(()=>{},["stop"]))},[t("h3",xt,r(p.title),1),t("p",ft,r(p.message),1),t("div",ht,[g(s(b),{variant:"outline",class:"flex-1 btn-outline-enhanced cursor-pointer",onClick:h},{default:x(()=>[f(r(p.cancelText),1)]),_:1}),g(s(b),{class:"flex-1 cursor-pointer",style:{"background-color":"#4a3429",color:"white"},onClick:k},{default:x(()=>[f(r(p.confirmText),1)]),_:1})])])])):S("",!0)}},yt={class:"w-full px-4 py-8"},vt={class:"mb-8 flex items-center justify-between"},wt={key:0},kt={key:0,class:"grid gap-8 lg:grid-cols-3"},_t={class:"space-y-4 lg:col-span-2"},Ct={class:"flex gap-4"},$t={class:"h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-muted"},St={class:"flex-1"},It={class:"mb-2 flex items-start justify-between"},Dt={class:"text-lg font-semibold text-card-foreground"},Lt=["onClick"],jt={class:"flex items-center justify-between"},Pt={class:"flex w-fit items-center rounded-lg border"},Tt=["onClick"],Ot=["value","onInput"],zt=["onClick"],qt={class:"text-right"},Bt={class:"text-primary text-lg font-bold"},Mt={class:"text-sm text-muted-foreground"},Nt={class:"lg:col-span-1"},Vt={class:"sticky top-8 rounded-lg bg-card p-6 shadow-md border border-border"},Ht={class:"mb-6 space-y-3"},Ut={class:"flex justify-between text-muted-foreground"},Qt={class:"flex justify-between text-muted-foreground"},Ft={class:"flex justify-between text-muted-foreground"},At={key:0,class:"text-success"},Et={key:1},Wt={class:"flex justify-between text-lg font-bold text-card-foreground"},Yt={class:"text-right"},Rt={class:"text-sm font-normal text-muted-foreground"},Zt={key:0},Gt={key:1},Jt={class:"flex flex-row gap-3"},Kt={key:1,class:"py-12 text-center"},Xt={__name:"cart",setup(p){const a=F(),i=B(),k=P(!1),h=P(!1),y=w=>{a.removeFromCart(w)},v=w=>{a.increaseQuantity(w)},I=w=>{a.decreaseQuantity(w)},D=(w,e)=>{const j=Number.parseInt(e)||50;a.updateQuantity(w,j)},_=()=>{a.items.length>0&&(k.value=!0)},l=()=>{Q("/products")},o=()=>{h.value=!0},m=()=>{a.clearCart()},d=$(()=>a.totalItems>=500?0:a.totalItems),L=$(()=>a.totalPrice+d.value);return U({title:"Shopping Cart - Fashionable Handbags",meta:[{name:"description",content:"View your shopping cart and manage selected items."}]}),(w,e)=>{const j=T,M=N;return n(),c("div",null,[t("div",yt,[t("div",vt,[e[3]||(e[3]=t("div",null,[t("h1",{class:"text-foreground mb-2 text-3xl font-bold"},"Shopping Cart"),t("p",{class:"text-muted-foreground"},"Manage your selected items")],-1)),s(a).items.length>0?(n(),c("div",wt,[g(s(b),{variant:"outline",size:"sm",onClick:o,class:"cursor-pointer text-destructive hover:bg-destructive/10 hover:text-destructive dark:text-destructive dark:hover:bg-destructive/20 dark:hover:text-destructive"},{default:x(()=>[...e[2]||(e[2]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),f(" Clear Cart ",-1)])]),_:1})])):S("",!0)]),s(a).items.length>0?(n(),c("div",kt,[t("div",_t,[(n(!0),c(O,null,z(s(a).items,u=>(n(),c("div",{key:u.bagId,class:"rounded-lg bg-card p-6 shadow-md border border-border"},[t("div",Ct,[t("div",$t,[g(j,{src:u.bag.images[0].url,alt:u.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:96,height:96,format:"webp"},null,8,["src","alt"])]),t("div",St,[t("div",It,[t("div",null,[t("h3",Dt,r(u.bag.id)+" Handbag ",1)]),t("button",{onClick:C=>y(u.bagId),class:"cursor-pointer text-muted-foreground transition-colors hover:text-destructive"},[...e[4]||(e[4]=[t("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])],8,Lt)]),t("div",jt,[t("div",Pt,[t("button",{onClick:C=>I(u.bagId),class:"flex h-10 cursor-pointer items-center justify-center px-3 py-2 text-lg transition-colors hover:bg-muted sm:h-8 sm:text-base"}," - ",8,Tt),t("input",{value:u.quantity,onInput:C=>D(u.bagId,C.target.value),type:"number",min:"50",step:"50",class:"h-10 w-24 border-0 bg-transparent px-2 py-2 text-center text-base focus:ring-0 sm:h-8 sm:text-sm"},null,40,Ot),t("button",{onClick:C=>v(u.bagId),class:"flex h-10 cursor-pointer items-center justify-center px-3 py-2 text-lg transition-colors hover:bg-muted sm:h-8 sm:text-base"}," + ",8,zt)]),t("div",qt,[t("p",Bt," ¥"+r((u.bag.price*u.quantity).toLocaleString()),1),t("p",Mt," ¥"+r(u.bag.price)+" × "+r(u.quantity),1)])])])])]))),128))]),t("div",Nt,[t("div",Vt,[e[13]||(e[13]=t("h2",{class:"mb-4 text-xl font-bold text-card-foreground"}," Order Summary ",-1)),t("div",Ht,[t("div",Ut,[e[5]||(e[5]=t("span",null,"Items",-1)),t("span",null,r(s(a).totalItems)+" pieces",1)]),t("div",Qt,[e[6]||(e[6]=t("span",null,"Subtotal",-1)),t("span",null,"¥"+r(s(a).totalPrice.toLocaleString()),1)]),t("div",Ft,[e[7]||(e[7]=t("span",null,"Shipping",-1)),s(d)===0?(n(),c("span",At," Free ")):(n(),c("span",Et,"¥"+r(s(d).toLocaleString()),1))]),e[9]||(e[9]=t("div",{class:"text-xs text-muted-foreground"},[t("p",null,"• 500 pieces or more for free shipping"),t("p",null," • Factory to transit warehouse shipping (not international logistics) ")],-1)),e[10]||(e[10]=t("hr",{class:"border-border"},null,-1)),t("div",Wt,[e[8]||(e[8]=t("span",null,"Total",-1)),t("div",Yt,[t("div",null,"¥"+r(s(L).toLocaleString()),1),t("div",Rt,[s(i).isLoading?(n(),c("span",Zt," Loading USD... ")):(n(),c("span",Gt,r(s(i).formatUSDPrice(s(L))||"USD price unavailable"),1))])])])]),t("div",Jt,[g(s(b),{size:"lg",variant:"enhanced",class:"h-12 flex-1 cursor-pointer text-base sm:h-10 sm:text-sm",style:{"background-color":"#4a3429",color:"white"},onClick:_},{default:x(()=>[...e[11]||(e[11]=[f(" Checkout Now ",-1)])]),_:1}),g(s(b),{size:"lg",variant:"outline",class:"btn-outline-enhanced h-12 flex-1 cursor-pointer text-base sm:h-10 sm:text-sm",onClick:l},{default:x(()=>[...e[12]||(e[12]=[f(" Continue Shopping ",-1)])]),_:1})]),e[14]||(e[14]=t("div",{class:"mt-6 rounded-lg bg-primary/5 p-4 border border-primary/20"},[t("p",{class:"text-sm text-primary"}," 🌟 Our handbag styles are very popular worldwide! Welcome to place your order and experience our premium quality products. ")],-1))])])])):(n(),c("div",Kt,[e[16]||(e[16]=H('<div class="mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-muted to-muted/80 shadow-lg" data-v-d005f922><svg class="empty-cart-icon h-20 w-20 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-d005f922><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" data-v-d005f922></path></svg></div><h2 class="mb-4 text-3xl font-bold text-foreground" data-v-d005f922> Your cart is empty </h2><p class="mb-6 text-lg text-muted-foreground" data-v-d005f922> You haven&#39;t added any items to your cart yet </p><p class="mb-8 text-base font-medium text-primary" data-v-d005f922> 🌟 Our handbag styles are very popular worldwide! Welcome to browse and experience our premium quality products. </p>',4)),g(M,{to:"/products"},{default:x(()=>[g(s(b),{size:"lg",class:"h-12 cursor-pointer text-base sm:h-10 sm:text-sm",style:{"background-color":"#4a3429",color:"white"}},{default:x(()=>[...e[15]||(e[15]=[f(" Start Shopping ",-1)])]),_:1})]),_:1})]))]),g(mt,{"is-open":s(k),"cart-items":s(a).items,"total-price":s(L),"shipping-cost":s(d),onClose:e[0]||(e[0]=u=>k.value=!1)},null,8,["is-open","cart-items","total-price","shipping-cost"]),g(bt,{"is-open":s(h),title:"Clear Shopping Cart",message:"Are you sure you want to remove all items from your cart? This action cannot be undone.","confirm-text":"Clear Cart","cancel-text":"Cancel",variant:"danger",onClose:e[1]||(e[1]=u=>h.value=!1),onConfirm:m},null,8,["is-open"])])}}},ce=A(Xt,[["__scopeId","data-v-d005f922"]]);export{ce as default};
