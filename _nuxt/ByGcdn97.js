import{_ as T}from"./C3SuWS6w.js";import{_ as N}from"./yPsHILz5.js";import{e as O,f as $,c,g as S,o as n,a as t,d as y,t as a,F as z,r as q,h as H,i as s,b as p,w as m,j as B,k as P,u as V,l as F,n as Q}from"./B3Zkx2xz.js";import{_ as f}from"./DFN4F-FD.js";import{u as U}from"./QZoI3V21.js";import{_ as A}from"./DlAUqK2U.js";import"./OvRRuAQf.js";const E={class:"mb-6 flex items-center justify-between"},W={class:"flex items-center gap-4"},R={class:"text-sm text-gray-600 dark:text-gray-300"},Y={class:"font-semibold text-gray-900 dark:text-white"},G={class:"mb-6 overflow-x-auto"},J={class:"w-full border-collapse"},K={class:"px-4 py-3"},X={class:"flex flex-col items-center gap-2"},Z={class:"h-16 w-16 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"},tt={class:"text-xs font-medium text-gray-600 dark:text-gray-300"},et={class:"px-4 py-3 text-center text-sm text-gray-900 dark:text-white"},ot={class:"px-4 py-3 text-right text-sm text-gray-900 dark:text-white"},st={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},at={class:"border-t-2 border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"},rt={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},nt={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},it={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},lt={class:"px-4 py-3 text-right"},dt={class:"text-lg font-bold text-primary"},ct={class:"text-sm font-normal text-gray-600 dark:text-gray-300"},gt={key:0},ut={key:1},pt={class:"flex gap-3"},xt={__name:"CheckoutDialog",props:{isOpen:{type:Boolean,default:!1},cartItems:{type:Array,default:()=>[]},totalPrice:{type:Number,default:0},shippingCost:{type:Number,default:0}},emits:["close"],setup(u,{emit:r}){const i=u,w=r,h=O(),b=$(()=>i.cartItems.reduce((l,o)=>l+o.quantity,0)),v=$(()=>i.totalPrice-i.shippingCost),I=async()=>{try{let l="";l+=`Order Date: ${new Date().toLocaleDateString()}

`,l+=`Product ID	Quantity	Unit Price	Total
`,i.cartItems.forEach(o=>{const x=o.bag.price*o.quantity;l+=`${o.bag.id}	${o.quantity}	${o.bag.price}	${x}
`}),l+=`
`,l+=`Total Items	${b.value}
`,l+=`Total Price	${i.totalPrice}
`,await navigator.clipboard.writeText(l),typeof window<"u"&&window.$toast&&window.$toast.success("Success","Order details copied to clipboard!")}catch(l){console.error("Failed to copy to clipboard:",l),typeof window<"u"&&window.$toast&&window.$toast.error("Error","Failed to copy to clipboard")}},D=()=>{const l=`
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
          ${i.cartItems.map(x=>{const d=x.bag.price*x.quantity;return`
              <tr>
                <td>${x.bag.id}</td>
                <td>${x.quantity} pieces</td>
                <td>¥${x.bag.price}</td>
                <td>¥${d.toLocaleString()}</td>
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
  `,o=window.open("","_blank");o.document.write(l),o.document.close(),o.focus(),o.print(),o.close()},_=()=>{w("close")};return(l,o)=>{const x=T;return u.isOpen?(n(),c("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center",onClick:_},[o[8]||(o[8]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:o[0]||(o[0]=B(()=>{},["stop"]))},[t("div",E,[t("div",W,[o[2]||(o[2]=t("h3",{class:"text-2xl font-bold text-gray-900 dark:text-white"}," Order Summary ",-1)),t("div",R,[o[1]||(o[1]=y(" Order Date: ",-1)),t("span",Y,a(new Date().toLocaleDateString()),1)])]),t("button",{onClick:_,class:"text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"},[...o[3]||(o[3]=[t("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),t("div",G,[t("table",J,[o[4]||(o[4]=t("thead",null,[t("tr",{class:"border-b border-gray-200 dark:border-gray-700"},[t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Design "),t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Quantity "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Unit Price "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Total ")])],-1)),t("tbody",null,[(n(!0),c(z,null,q(u.cartItems,d=>(n(),c("tr",{key:d.bagId,class:"border-b border-gray-100 dark:border-gray-800"},[t("td",K,[t("div",X,[t("div",Z,[d.bag.images[0]?(n(),H(x,{key:0,src:d.bag.images[0].url,alt:d.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:100,height:100,format:"webp"},null,8,["src","alt"])):S("",!0)]),t("span",tt,a(d.bag.id),1)])]),t("td",et,a(d.quantity)+" pieces ",1),t("td",ot," ¥"+a(d.bag.price),1),t("td",st," ¥"+a((d.bag.price*d.quantity).toLocaleString()),1)]))),128))]),t("tfoot",null,[t("tr",at,[t("td",rt,a(u.cartItems.length)+" designs ",1),t("td",nt,a(s(b))+" pieces ",1),t("td",it," ¥"+a(s(v).toLocaleString()),1),t("td",lt,[t("div",dt," ¥"+a(u.totalPrice.toLocaleString()),1),t("div",ct,[s(h).isLoading?(n(),c("span",gt,"Loading USD...")):(n(),c("span",ut,a(s(h).formatUSDPrice(u.totalPrice)||"USD price unavailable"),1))])])])])])]),t("div",pt,[p(s(f),{variant:"outline",class:"flex-1",onClick:_},{default:m(()=>[...o[5]||(o[5]=[y(" Close ",-1)])]),_:1}),p(s(f),{variant:"outline",class:"flex-1",onClick:I},{default:m(()=>[...o[6]||(o[6]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1),y(" Copy ",-1)])]),_:1}),p(s(f),{class:"hidden flex-1",onClick:D},{default:m(()=>[...o[7]||(o[7]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"})],-1),y(" Print ",-1)])]),_:1})])])])):S("",!0)}}},mt={class:"mb-4 text-lg font-semibold text-gray-900 dark:text-white"},yt={class:"mb-6 text-gray-600 dark:text-gray-300"},ht={class:"flex gap-3"},ft={__name:"ConfirmDialog",props:{isOpen:{type:Boolean,default:!1},title:{type:String,default:"Confirm Action"},message:{type:String,default:"Are you sure you want to proceed?"},confirmText:{type:String,default:"Confirm"},cancelText:{type:String,default:"Cancel"},variant:{type:String,default:"default"}},emits:["close","confirm"],setup(u,{emit:r}){const i=r,w=()=>{i("confirm"),i("close")},h=()=>{i("close")};return(b,v)=>u.isOpen?(n(),c("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center",onClick:h},[v[1]||(v[1]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:v[0]||(v[0]=B(()=>{},["stop"]))},[t("h3",mt,a(u.title),1),t("p",yt,a(u.message),1),t("div",ht,[p(s(f),{variant:"outline",class:"flex-1",onClick:h},{default:m(()=>[y(a(u.cancelText),1)]),_:1}),p(s(f),{variant:u.variant==="danger"?"destructive":"default",class:"flex-1",onClick:w},{default:m(()=>[y(a(u.confirmText),1)]),_:1},8,["variant"])])])])):S("",!0)}},bt={class:"container mx-auto px-4 py-8"},vt={class:"mb-8 flex items-center justify-between"},kt={key:0},wt={key:0,class:"grid gap-8 lg:grid-cols-3"},_t={class:"space-y-4 lg:col-span-2"},Ct={class:"flex gap-4"},$t={class:"h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"},St={class:"flex-1"},It={class:"mb-2 flex items-start justify-between"},Dt={class:"text-lg font-semibold text-gray-900 dark:text-white"},Lt=["onClick"],jt={class:"flex items-center justify-between"},Pt={class:"flex items-center gap-2"},Tt=["onClick"],Ot=["value","onInput"],zt=["onClick"],qt={class:"text-right"},Bt={class:"text-primary text-lg font-bold"},Mt={class:"text-sm text-gray-500"},Nt={class:"lg:col-span-1"},Ht={class:"sticky top-8 rounded-lg bg-white p-6 shadow-md dark:bg-gray-900"},Vt={class:"mb-6 space-y-3"},Ft={class:"flex justify-between text-gray-600 dark:text-gray-300"},Qt={class:"flex justify-between text-gray-600 dark:text-gray-300"},Ut={class:"flex justify-between text-gray-600 dark:text-gray-300"},At={key:0,class:"text-green-600"},Et={key:1},Wt={class:"flex justify-between text-lg font-bold text-gray-900 dark:text-white"},Rt={class:"text-right"},Yt={class:"text-sm font-normal text-gray-600 dark:text-gray-300"},Gt={key:0},Jt={key:1},Kt={class:"space-y-3"},Xt={key:1,class:"py-12 text-center"},Zt={__name:"cart",setup(u){const r=U(),i=O(),w=P(!1),h=P(!1),b=k=>{r.removeFromCart(k)},v=k=>{r.increaseQuantity(k)},I=k=>{r.decreaseQuantity(k)},D=(k,e)=>{const j=Number.parseInt(e)||50;r.updateQuantity(k,j)},_=()=>{r.items.length>0&&(w.value=!0)},l=()=>{Q("/products")},o=()=>{h.value=!0},x=()=>{r.clearCart()},d=$(()=>r.totalItems>=500?0:r.totalItems),L=$(()=>r.totalPrice+d.value);return V({title:"Shopping Cart - Fashionable Handbags",meta:[{name:"description",content:"View your shopping cart and manage selected items."}]}),(k,e)=>{const j=T,M=N;return n(),c("div",null,[t("div",bt,[t("div",vt,[e[3]||(e[3]=t("div",null,[t("h1",{class:"text-foreground mb-2 text-3xl font-bold"},"Shopping Cart"),t("p",{class:"text-muted-foreground"},"Manage your selected items")],-1)),s(r).items.length>0?(n(),c("div",kt,[p(s(f),{variant:"outline",size:"sm",onClick:o,class:"cursor-pointer text-red-600 hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-900/20 dark:hover:text-red-300"},{default:m(()=>[...e[2]||(e[2]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),y(" Clear Cart ",-1)])]),_:1})])):S("",!0)]),s(r).items.length>0?(n(),c("div",wt,[t("div",_t,[(n(!0),c(z,null,q(s(r).items,g=>(n(),c("div",{key:g.bagId,class:"rounded-lg bg-white p-6 shadow-md dark:bg-gray-900"},[t("div",Ct,[t("div",$t,[p(j,{src:g.bag.images[0].url,alt:g.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:100,height:100,format:"webp"},null,8,["src","alt"])]),t("div",St,[t("div",It,[t("div",null,[t("h3",Dt,a(g.bag.id)+" Handbag ",1)]),t("button",{onClick:C=>b(g.bagId),class:"cursor-pointer text-gray-400 transition-colors hover:text-red-500"},[...e[4]||(e[4]=[t("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])],8,Lt)]),t("div",jt,[t("div",Pt,[t("button",{onClick:C=>I(g.bagId),class:"flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border text-lg transition-colors hover:bg-gray-100 sm:h-8 sm:w-8 sm:text-base dark:hover:bg-gray-700"}," - ",8,Tt),t("input",{value:g.quantity,onInput:C=>D(g.bagId,C.target.value),type:"number",min:"50",step:"50",class:"w-16 border-0 bg-transparent px-2 py-2 text-center text-base focus:ring-0 sm:text-sm"},null,40,Ot),t("button",{onClick:C=>v(g.bagId),class:"flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border text-lg transition-colors hover:bg-gray-100 sm:h-8 sm:w-8 sm:text-base dark:hover:bg-gray-700"}," + ",8,zt)]),t("div",qt,[t("p",Bt," ¥"+a((g.bag.price*g.quantity).toLocaleString()),1),t("p",Mt," ¥"+a(g.bag.price)+" × "+a(g.quantity),1)])])])])]))),128))]),t("div",Nt,[t("div",Ht,[e[13]||(e[13]=t("h2",{class:"mb-4 text-xl font-bold text-gray-900 dark:text-white"}," Order Summary ",-1)),t("div",Vt,[t("div",Ft,[e[5]||(e[5]=t("span",null,"Items",-1)),t("span",null,a(s(r).totalItems)+" pieces",1)]),t("div",Qt,[e[6]||(e[6]=t("span",null,"Subtotal",-1)),t("span",null,"¥"+a(s(r).totalPrice.toLocaleString()),1)]),t("div",Ut,[e[7]||(e[7]=t("span",null,"Shipping",-1)),s(d)===0?(n(),c("span",At,"Free")):(n(),c("span",Et,"¥"+a(s(d).toLocaleString()),1))]),e[9]||(e[9]=t("div",{class:"text-xs text-gray-500 dark:text-gray-400"},[t("p",null,"• 500 pieces or more for free shipping"),t("p",null," • Factory to transit warehouse shipping (not international logistics) ")],-1)),e[10]||(e[10]=t("hr",{class:"border-gray-200 dark:border-gray-700"},null,-1)),t("div",Wt,[e[8]||(e[8]=t("span",null,"Total",-1)),t("div",Rt,[t("div",null,"¥"+a(s(L).toLocaleString()),1),t("div",Yt,[s(i).isLoading?(n(),c("span",Gt,"Loading USD...")):(n(),c("span",Jt,a(s(i).formatUSDPrice(s(L))||"USD price unavailable"),1))])])])]),t("div",Kt,[p(s(f),{size:"lg",class:"h-12 w-full cursor-pointer text-base sm:h-10 sm:text-sm",onClick:_},{default:m(()=>[...e[11]||(e[11]=[y(" Checkout Now ",-1)])]),_:1}),p(s(f),{size:"lg",variant:"outline",class:"h-12 w-full cursor-pointer text-base sm:h-10 sm:text-sm",onClick:l},{default:m(()=>[...e[12]||(e[12]=[y(" Continue Shopping ",-1)])]),_:1})]),e[14]||(e[14]=t("div",{class:"mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20"},[t("p",{class:"text-sm text-blue-700 dark:text-blue-300"}," 🌟 Our handbag styles are very popular worldwide! Welcome to place your order and experience our premium quality products. ")],-1))])])])):(n(),c("div",Xt,[e[16]||(e[16]=F('<div class="empty-cart-container mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg dark:from-gray-800 dark:to-gray-900" data-v-054e2368><svg class="empty-cart-icon h-20 w-20 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-054e2368><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" data-v-054e2368></path></svg></div><h2 class="mb-4 text-3xl font-bold text-gray-900 dark:text-white" data-v-054e2368> Your cart is empty </h2><p class="mb-6 text-lg text-gray-600 dark:text-gray-300" data-v-054e2368> You haven&#39;t added any items to your cart yet </p><p class="mb-8 text-base font-medium text-blue-600 dark:text-blue-400" data-v-054e2368> 🌟 Our handbag styles are very popular worldwide! Welcome to browse and experience our premium quality products. </p>',4)),p(M,{to:"/products"},{default:m(()=>[p(s(f),{size:"lg",class:"h-12 cursor-pointer text-base sm:h-10 sm:text-sm"},{default:m(()=>[...e[15]||(e[15]=[y(" Start Shopping ",-1)])]),_:1})]),_:1})]))]),p(xt,{"is-open":s(w),"cart-items":s(r).items,"total-price":s(L),"shipping-cost":s(d),onClose:e[0]||(e[0]=g=>w.value=!1)},null,8,["is-open","cart-items","total-price","shipping-cost"]),p(ft,{"is-open":s(h),title:"Clear Shopping Cart",message:"Are you sure you want to remove all items from your cart? This action cannot be undone.","confirm-text":"Clear Cart","cancel-text":"Cancel",variant:"danger",onClose:e[1]||(e[1]=g=>h.value=!1),onConfirm:x},null,8,["is-open"])])}}},ie=A(Zt,[["__scopeId","data-v-054e2368"]]);export{ie as default};
