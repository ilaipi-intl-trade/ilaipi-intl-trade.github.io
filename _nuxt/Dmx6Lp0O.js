import{_ as I}from"./PtqAh5Ff.js";import{e as D,c as x,f as C,o as p,a as t,t as s,g as r,F as S,r as P,b as g,w as y,d as m,h as T,i as $,u as L,j as O,n as H}from"./CI8nEKj8.js";import{_ as b}from"./DY3ywVTS.js";import{u as z}from"./D6e3T74i.js";import"./yt5I9A53.js";const M={class:"mb-6 rounded-lg bg-gray-50 p-4 dark:bg-gray-800"},q={class:"grid grid-cols-2 gap-4 md:grid-cols-4"},B={class:"text-lg font-semibold text-gray-900 dark:text-white"},N={class:"text-primary text-lg font-semibold"},V={class:"text-lg font-semibold text-gray-900 dark:text-white"},F={class:"text-lg font-semibold text-gray-900 dark:text-white"},Q={class:"mb-6 overflow-x-auto"},A={class:"w-full border-collapse"},E={class:"px-4 py-3"},U={class:"h-16 w-16 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"},W=["src","alt"],Y={class:"px-4 py-3 text-sm font-medium text-gray-900 dark:text-white"},G={class:"px-4 py-3 text-sm text-gray-600 dark:text-gray-300"},J={class:"px-4 py-3 text-center text-sm text-gray-900 dark:text-white"},K={class:"px-4 py-3 text-right text-sm text-gray-900 dark:text-white"},R={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},X={class:"border-t-2 border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"},Z={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},tt={class:"text-primary px-4 py-3 text-right text-lg font-bold"},et={class:"flex gap-3"},ot={__name:"CheckoutDialog",props:{isOpen:{type:Boolean,default:!1},cartItems:{type:Array,default:()=>[]},totalPrice:{type:Number,default:0}},emits:["close"],setup(d,{emit:l}){const n=d,v=l,u=D(()=>n.cartItems.reduce((i,e)=>i+e.quantity,0)),w=async()=>{try{let i="";i+=`Product ID	Quantity	Unit Price	Total
`,n.cartItems.forEach(e=>{const a=e.bag.price*e.quantity;i+=`${e.bag.id}	${e.quantity}	${e.bag.price}	${a}
`}),i+=`
`,i+=`Total Items	${u.value}
`,i+=`Total Price	${n.totalPrice}
`,await navigator.clipboard.writeText(i),typeof window<"u"&&window.$toast&&window.$toast.success("Success","Order details copied to clipboard!")}catch(i){console.error("Failed to copy to clipboard:",i),typeof window<"u"&&window.$toast&&window.$toast.error("Error","Failed to copy to clipboard")}},f=()=>{const i=`
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
        <p><strong>Total Items:</strong> ${u.value} pieces</p>
        <p><strong>Total Price:</strong> ¥${n.totalPrice.toLocaleString()}</p>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          ${n.cartItems.map(a=>{const h=a.bag.price*a.quantity;return`
              <tr>
                <td>${a.bag.id}</td>
                <td>${a.bag.id} Handbag</td>
                <td>${a.quantity} pieces</td>
                <td>¥${a.bag.price}</td>
                <td>¥${h.toLocaleString()}</td>
              </tr>
            `}).join("")}
        </tbody>
        <tfoot>
          <tr class="total-row">
            <td colspan="2"><strong>Total</strong></td>
            <td><strong>${u.value} pieces</strong></td>
            <td></td>
            <td><strong>¥${n.totalPrice.toLocaleString()}</strong></td>
          </tr>
        </tfoot>
      </table>
      
      <div class="summary">
        <h3>Order Summary</h3>
        <p><strong>Total Items:</strong> ${u.value} pieces</p>
        <p><strong>Total Price:</strong> ¥${n.totalPrice.toLocaleString()}</p>
        <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
      </div>
    </body>
    </html>
  `,e=window.open("","_blank");e.document.write(i),e.document.close(),e.focus(),e.print(),e.close()},k=()=>{v("close")};return(i,e)=>d.isOpen?(p(),x("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center",onClick:k},[e[12]||(e[12]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:e[0]||(e[0]=T(()=>{},["stop"]))},[t("div",{class:"mb-6 flex items-center justify-between"},[e[2]||(e[2]=t("h3",{class:"text-2xl font-bold text-gray-900 dark:text-white"}," Order Summary ",-1)),t("button",{onClick:k,class:"text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"},[...e[1]||(e[1]=[t("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),t("div",M,[t("div",q,[t("div",null,[e[3]||(e[3]=t("p",{class:"text-sm text-gray-600 dark:text-gray-300"},"Total Items",-1)),t("p",B,s(r(u))+" pieces ",1)]),t("div",null,[e[4]||(e[4]=t("p",{class:"text-sm text-gray-600 dark:text-gray-300"},"Total Price",-1)),t("p",N," ¥"+s(d.totalPrice.toLocaleString()),1)]),t("div",null,[e[5]||(e[5]=t("p",{class:"text-sm text-gray-600 dark:text-gray-300"},"Order Date",-1)),t("p",V,s(new Date().toLocaleDateString()),1)]),t("div",null,[e[6]||(e[6]=t("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," Designs Count ",-1)),t("p",F,s(d.cartItems.length)+" types ",1)])])]),t("div",Q,[t("table",A,[e[8]||(e[8]=t("thead",null,[t("tr",{class:"border-b border-gray-200 dark:border-gray-700"},[t("th",{class:"px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white"}," Image "),t("th",{class:"px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white"}," Product ID "),t("th",{class:"px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white"}," Product Name "),t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Quantity "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Unit Price "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Total ")])],-1)),t("tbody",null,[(p(!0),x(S,null,P(d.cartItems,a=>(p(),x("tr",{key:a.bagId,class:"border-b border-gray-100 dark:border-gray-800"},[t("td",E,[t("div",U,[a.bag.images[0]?(p(),x("img",{key:0,src:a.bag.images[0].url,alt:a.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy"},null,8,W)):C("",!0)])]),t("td",Y,s(a.bag.id),1),t("td",G,s(a.bag.id)+" Handbag ",1),t("td",J,s(a.quantity)+" pieces ",1),t("td",K," ¥"+s(a.bag.price),1),t("td",R," ¥"+s((a.bag.price*a.quantity).toLocaleString()),1)]))),128))]),t("tfoot",null,[t("tr",X,[e[7]||(e[7]=t("td",{colspan:"4",class:"px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white"}," Total ",-1)),t("td",Z,s(r(u))+" pieces ",1),t("td",tt," ¥"+s(d.totalPrice.toLocaleString()),1)])])])]),t("div",et,[g(r(b),{variant:"outline",class:"flex-1",onClick:k},{default:y(()=>[...e[9]||(e[9]=[m(" Close ",-1)])]),_:1}),g(r(b),{variant:"outline",class:"flex-1",onClick:w},{default:y(()=>[...e[10]||(e[10]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1),m(" Copy ",-1)])]),_:1}),g(r(b),{class:"hidden flex-1",onClick:f},{default:y(()=>[...e[11]||(e[11]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"})],-1),m(" Print ",-1)])]),_:1})])])])):C("",!0)}},st={class:"mb-4 text-lg font-semibold text-gray-900 dark:text-white"},at={class:"mb-6 text-gray-600 dark:text-gray-300"},rt={class:"flex gap-3"},lt={__name:"ConfirmDialog",props:{isOpen:{type:Boolean,default:!1},title:{type:String,default:"Confirm Action"},message:{type:String,default:"Are you sure you want to proceed?"},confirmText:{type:String,default:"Confirm"},cancelText:{type:String,default:"Cancel"},variant:{type:String,default:"default"}},emits:["close","confirm"],setup(d,{emit:l}){const n=l,v=()=>{n("confirm"),n("close")},u=()=>{n("close")};return(w,f)=>d.isOpen?(p(),x("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center",onClick:u},[f[1]||(f[1]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:f[0]||(f[0]=T(()=>{},["stop"]))},[t("h3",st,s(d.title),1),t("p",at,s(d.message),1),t("div",rt,[g(r(b),{variant:"outline",class:"flex-1",onClick:u},{default:y(()=>[m(s(d.cancelText),1)]),_:1}),g(r(b),{variant:d.variant==="danger"?"destructive":"default",class:"flex-1",onClick:v},{default:y(()=>[m(s(d.confirmText),1)]),_:1},8,["variant"])])])])):C("",!0)}},nt={class:"container mx-auto px-4 py-8"},it={class:"mb-8 flex items-center justify-between"},dt={key:0},ct={key:0,class:"grid gap-8 lg:grid-cols-3"},gt={class:"space-y-4 lg:col-span-2"},ut={class:"flex gap-4"},xt={class:"h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"},pt=["src","alt"],yt={class:"flex-1"},mt={class:"mb-2 flex items-start justify-between"},bt={class:"text-lg font-semibold text-gray-900 dark:text-white"},ft=["onClick"],ht={class:"flex items-center justify-between"},vt={class:"flex items-center gap-2"},kt=["onClick"],wt={class:"w-12 text-center"},Ct=["onClick"],_t={class:"text-right"},$t={class:"text-primary text-lg font-bold"},St={class:"text-sm text-gray-500"},Pt={class:"lg:col-span-1"},Tt={class:"sticky top-8 rounded-lg bg-white p-6 shadow-md dark:bg-gray-900"},jt={class:"mb-6 space-y-3"},It={class:"flex justify-between text-gray-600 dark:text-gray-300"},Dt={class:"flex justify-between text-gray-600 dark:text-gray-300"},Lt={class:"flex justify-between text-lg font-bold text-gray-900 dark:text-white"},Ot={class:"space-y-3"},Ht={key:1,class:"py-8 text-center"},Vt={__name:"cart",setup(d){const l=z(),n=$(!1),v=$(!1),u=h=>{l.removeFromCart(h)},w=h=>{l.increaseQuantity(h)},f=h=>{l.decreaseQuantity(h)},k=()=>{l.items.length>0&&(n.value=!0)},i=()=>{H("/products")},e=()=>{v.value=!0},a=()=>{l.clearCart()};return L({title:"Shopping Cart - Fashionable Handbags",meta:[{name:"description",content:"View your shopping cart and manage selected items."}]}),(h,o)=>{const j=I;return p(),x("div",null,[t("div",nt,[t("div",it,[o[3]||(o[3]=t("div",null,[t("h1",{class:"mb-2 text-3xl font-bold text-foreground"}," Shopping Cart "),t("p",{class:"text-muted-foreground"}," Manage your selected items ")],-1)),r(l).items.length>0?(p(),x("div",dt,[g(r(b),{variant:"outline",size:"sm",onClick:e,class:"text-red-600 hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-900/20 dark:hover:text-red-300"},{default:y(()=>[...o[2]||(o[2]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),m(" Clear Cart ",-1)])]),_:1})])):C("",!0)]),r(l).items.length>0?(p(),x("div",ct,[t("div",gt,[(p(!0),x(S,null,P(r(l).items,c=>(p(),x("div",{key:c.bagId,class:"rounded-lg bg-white p-6 shadow-md dark:bg-gray-900"},[t("div",ut,[t("div",xt,[t("img",{src:c.bag.images[0].url,alt:c.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy"},null,8,pt)]),t("div",yt,[t("div",mt,[t("div",null,[t("h3",bt,s(c.bag.id)+" Handbag ",1)]),t("button",{onClick:_=>u(c.bagId),class:"text-gray-400 transition-colors hover:text-red-500"},[...o[4]||(o[4]=[t("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])],8,ft)]),t("div",ht,[t("div",vt,[t("button",{onClick:_=>f(c.bagId),class:"flex h-8 w-8 items-center justify-center rounded-full border transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"}," - ",8,kt),t("span",wt,s(c.quantity),1),t("button",{onClick:_=>w(c.bagId),class:"flex h-8 w-8 items-center justify-center rounded-full border transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"}," + ",8,Ct)]),t("div",_t,[t("p",$t," ¥"+s((c.bag.price*c.quantity).toLocaleString()),1),t("p",St," ¥"+s(c.bag.price)+" × "+s(c.quantity),1)])])])])]))),128))]),t("div",Pt,[t("div",Tt,[o[12]||(o[12]=t("h2",{class:"mb-4 text-xl font-bold text-gray-900 dark:text-white"}," Order Summary ",-1)),t("div",jt,[t("div",It,[o[5]||(o[5]=t("span",null,"Items",-1)),t("span",null,s(r(l).totalItems)+" pieces",1)]),t("div",Dt,[o[6]||(o[6]=t("span",null,"Subtotal",-1)),t("span",null,"¥"+s(r(l).totalPrice.toLocaleString()),1)]),o[8]||(o[8]=t("div",{class:"flex justify-between text-gray-600 dark:text-gray-300"},[t("span",null,"Shipping"),t("span",{class:"text-green-600"},"Free")],-1)),o[9]||(o[9]=t("hr",{class:"border-gray-200 dark:border-gray-700"},null,-1)),t("div",Lt,[o[7]||(o[7]=t("span",null,"Total",-1)),t("span",null,"¥"+s(r(l).totalPrice.toLocaleString()),1)])]),t("div",Ot,[g(r(b),{size:"lg",class:"w-full",onClick:k},{default:y(()=>[...o[10]||(o[10]=[m(" Checkout Now ",-1)])]),_:1}),g(r(b),{size:"lg",variant:"outline",class:"w-full",onClick:i},{default:y(()=>[...o[11]||(o[11]=[m(" Continue Shopping ",-1)])]),_:1})]),o[13]||(o[13]=t("div",{class:"mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20"},[t("p",{class:"text-sm text-blue-700 dark:text-blue-300"}," 🌟 Our handbag styles are very popular worldwide! Welcome to place your order and experience our premium quality products. ")],-1))])])])):(p(),x("div",Ht,[o[15]||(o[15]=O('<div class="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800"><svg class="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path></svg></div><h2 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white"> Your cart is empty </h2><p class="mb-4 text-gray-600 dark:text-gray-300"> You haven&#39;t added any items to your cart yet </p><p class="mb-8 font-medium text-blue-600 dark:text-blue-400"> 🌟 Our handbag styles are very popular worldwide! Welcome to browse and experience our premium quality products. </p>',4)),g(j,{to:"/products"},{default:y(()=>[g(r(b),{size:"lg"},{default:y(()=>[...o[14]||(o[14]=[m("Start Shopping",-1)])]),_:1})]),_:1})]))]),g(ot,{"is-open":r(n),"cart-items":r(l).items,"total-price":r(l).totalPrice,onClose:o[0]||(o[0]=c=>n.value=!1)},null,8,["is-open","cart-items","total-price"]),g(lt,{"is-open":r(v),title:"Clear Shopping Cart",message:"Are you sure you want to remove all items from your cart? This action cannot be undone.","confirm-text":"Clear Cart","cancel-text":"Cancel",variant:"danger",onClose:o[1]||(o[1]=c=>v.value=!1),onConfirm:a},null,8,["is-open"])])}}};export{Vt as default};
