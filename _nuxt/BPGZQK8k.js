import{_ as S}from"./CRTeuCfP.js";import{_ as L}from"./BLls0wHJ.js";import{e as O,c as m,f as _,o as p,a as t,t as s,g as a,F as I,r as P,h as H,b as g,w as y,d as b,i as T,j as $,u as z,k as M,n as q}from"./BqYkDKLc.js";import{_ as f}from"./mCeV13xX.js";import{u as B}from"./B4_JwBY5.js";import"./5mtjLxcA.js";const N={class:"mb-6 rounded-lg bg-gray-50 p-4 dark:bg-gray-800"},V={class:"grid grid-cols-2 gap-4 md:grid-cols-4"},F={class:"text-lg font-semibold text-gray-900 dark:text-white"},Q={class:"text-primary text-lg font-semibold"},A={class:"text-lg font-semibold text-gray-900 dark:text-white"},E={class:"text-lg font-semibold text-gray-900 dark:text-white"},U={class:"mb-6 overflow-x-auto"},W={class:"w-full border-collapse"},Y={class:"px-4 py-3"},G={class:"h-16 w-16 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"},J={class:"px-4 py-3 text-sm font-medium text-gray-900 dark:text-white"},K={class:"px-4 py-3 text-sm text-gray-600 dark:text-gray-300"},R={class:"px-4 py-3 text-center text-sm text-gray-900 dark:text-white"},X={class:"px-4 py-3 text-right text-sm text-gray-900 dark:text-white"},Z={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},tt={class:"border-t-2 border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"},et={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},ot={class:"text-primary px-4 py-3 text-right text-lg font-bold"},st={class:"flex gap-3"},at={__name:"CheckoutDialog",props:{isOpen:{type:Boolean,default:!1},cartItems:{type:Array,default:()=>[]},totalPrice:{type:Number,default:0}},emits:["close"],setup(d,{emit:l}){const n=d,v=l,x=O(()=>n.cartItems.reduce((i,e)=>i+e.quantity,0)),w=async()=>{try{let i="";i+=`Product ID	Quantity	Unit Price	Total
`,n.cartItems.forEach(e=>{const u=e.bag.price*e.quantity;i+=`${e.bag.id}	${e.quantity}	${e.bag.price}	${u}
`}),i+=`
`,i+=`Total Items	${x.value}
`,i+=`Total Price	${n.totalPrice}
`,await navigator.clipboard.writeText(i),typeof window<"u"&&window.$toast&&window.$toast.success("Success","Order details copied to clipboard!")}catch(i){console.error("Failed to copy to clipboard:",i),typeof window<"u"&&window.$toast&&window.$toast.error("Error","Failed to copy to clipboard")}},h=()=>{const i=`
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
          ${n.cartItems.map(u=>{const r=u.bag.price*u.quantity;return`
              <tr>
                <td>${u.bag.id}</td>
                <td>${u.bag.id} Handbag</td>
                <td>${u.quantity} pieces</td>
                <td>¥${u.bag.price}</td>
                <td>¥${r.toLocaleString()}</td>
              </tr>
            `}).join("")}
        </tbody>
        <tfoot>
          <tr class="total-row">
            <td colspan="2"><strong>Total</strong></td>
            <td><strong>${x.value} pieces</strong></td>
            <td></td>
            <td><strong>¥${n.totalPrice.toLocaleString()}</strong></td>
          </tr>
        </tfoot>
      </table>
      
      <div class="summary">
        <h3>Order Summary</h3>
        <p><strong>Total Items:</strong> ${x.value} pieces</p>
        <p><strong>Total Price:</strong> ¥${n.totalPrice.toLocaleString()}</p>
        <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
      </div>
    </body>
    </html>
  `,e=window.open("","_blank");e.document.write(i),e.document.close(),e.focus(),e.print(),e.close()},k=()=>{v("close")};return(i,e)=>{const u=S;return d.isOpen?(p(),m("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center",onClick:k},[e[12]||(e[12]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:e[0]||(e[0]=T(()=>{},["stop"]))},[t("div",{class:"mb-6 flex items-center justify-between"},[e[2]||(e[2]=t("h3",{class:"text-2xl font-bold text-gray-900 dark:text-white"}," Order Summary ",-1)),t("button",{onClick:k,class:"text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"},[...e[1]||(e[1]=[t("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),t("div",N,[t("div",V,[t("div",null,[e[3]||(e[3]=t("p",{class:"text-sm text-gray-600 dark:text-gray-300"},"Total Items",-1)),t("p",F,s(a(x))+" pieces ",1)]),t("div",null,[e[4]||(e[4]=t("p",{class:"text-sm text-gray-600 dark:text-gray-300"},"Total Price",-1)),t("p",Q," ¥"+s(d.totalPrice.toLocaleString()),1)]),t("div",null,[e[5]||(e[5]=t("p",{class:"text-sm text-gray-600 dark:text-gray-300"},"Order Date",-1)),t("p",A,s(new Date().toLocaleDateString()),1)]),t("div",null,[e[6]||(e[6]=t("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," Designs Count ",-1)),t("p",E,s(d.cartItems.length)+" types ",1)])])]),t("div",U,[t("table",W,[e[8]||(e[8]=t("thead",null,[t("tr",{class:"border-b border-gray-200 dark:border-gray-700"},[t("th",{class:"px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white"}," Image "),t("th",{class:"px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white"}," Product ID "),t("th",{class:"px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white"}," Product Name "),t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Quantity "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Unit Price "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Total ")])],-1)),t("tbody",null,[(p(!0),m(I,null,P(d.cartItems,r=>(p(),m("tr",{key:r.bagId,class:"border-b border-gray-100 dark:border-gray-800"},[t("td",Y,[t("div",G,[r.bag.images[0]?(p(),H(u,{key:0,src:r.bag.images[0].url,alt:r.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:100,height:100,format:"webp"},null,8,["src","alt"])):_("",!0)])]),t("td",J,s(r.bag.id),1),t("td",K,s(r.bag.id)+" Handbag ",1),t("td",R,s(r.quantity)+" pieces ",1),t("td",X," ¥"+s(r.bag.price),1),t("td",Z," ¥"+s((r.bag.price*r.quantity).toLocaleString()),1)]))),128))]),t("tfoot",null,[t("tr",tt,[e[7]||(e[7]=t("td",{colspan:"4",class:"px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white"}," Total ",-1)),t("td",et,s(a(x))+" pieces ",1),t("td",ot," ¥"+s(d.totalPrice.toLocaleString()),1)])])])]),t("div",st,[g(a(f),{variant:"outline",class:"flex-1",onClick:k},{default:y(()=>[...e[9]||(e[9]=[b(" Close ",-1)])]),_:1}),g(a(f),{variant:"outline",class:"flex-1",onClick:w},{default:y(()=>[...e[10]||(e[10]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1),b(" Copy ",-1)])]),_:1}),g(a(f),{class:"hidden flex-1",onClick:h},{default:y(()=>[...e[11]||(e[11]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"})],-1),b(" Print ",-1)])]),_:1})])])])):_("",!0)}}},rt={class:"mb-4 text-lg font-semibold text-gray-900 dark:text-white"},lt={class:"mb-6 text-gray-600 dark:text-gray-300"},nt={class:"flex gap-3"},it={__name:"ConfirmDialog",props:{isOpen:{type:Boolean,default:!1},title:{type:String,default:"Confirm Action"},message:{type:String,default:"Are you sure you want to proceed?"},confirmText:{type:String,default:"Confirm"},cancelText:{type:String,default:"Cancel"},variant:{type:String,default:"default"}},emits:["close","confirm"],setup(d,{emit:l}){const n=l,v=()=>{n("confirm"),n("close")},x=()=>{n("close")};return(w,h)=>d.isOpen?(p(),m("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center",onClick:x},[h[1]||(h[1]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:h[0]||(h[0]=T(()=>{},["stop"]))},[t("h3",rt,s(d.title),1),t("p",lt,s(d.message),1),t("div",nt,[g(a(f),{variant:"outline",class:"flex-1",onClick:x},{default:y(()=>[b(s(d.cancelText),1)]),_:1}),g(a(f),{variant:d.variant==="danger"?"destructive":"default",class:"flex-1",onClick:v},{default:y(()=>[b(s(d.confirmText),1)]),_:1},8,["variant"])])])])):_("",!0)}},dt={class:"container mx-auto px-4 py-8"},ct={class:"mb-8 flex items-center justify-between"},gt={key:0},ut={key:0,class:"grid gap-8 lg:grid-cols-3"},xt={class:"space-y-4 lg:col-span-2"},pt={class:"flex gap-4"},mt={class:"h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"},yt={class:"flex-1"},bt={class:"mb-2 flex items-start justify-between"},ft={class:"text-lg font-semibold text-gray-900 dark:text-white"},ht=["onClick"],vt={class:"flex items-center justify-between"},kt={class:"flex items-center gap-2"},wt=["onClick"],_t={class:"w-12 text-center"},Ct=["onClick"],$t={class:"text-right"},St={class:"text-primary text-lg font-bold"},It={class:"text-sm text-gray-500"},Pt={class:"lg:col-span-1"},Tt={class:"sticky top-8 rounded-lg bg-white p-6 shadow-md dark:bg-gray-900"},jt={class:"mb-6 space-y-3"},Dt={class:"flex justify-between text-gray-600 dark:text-gray-300"},Lt={class:"flex justify-between text-gray-600 dark:text-gray-300"},Ot={class:"flex justify-between text-lg font-bold text-gray-900 dark:text-white"},Ht={class:"space-y-3"},zt={key:1,class:"py-8 text-center"},Qt={__name:"cart",setup(d){const l=B(),n=$(!1),v=$(!1),x=r=>{l.removeFromCart(r)},w=r=>{l.increaseQuantity(r)},h=r=>{l.decreaseQuantity(r)},k=()=>{l.items.length>0&&(n.value=!0)},i=()=>{q("/products")},e=()=>{v.value=!0},u=()=>{l.clearCart()};return z({title:"Shopping Cart - Fashionable Handbags",meta:[{name:"description",content:"View your shopping cart and manage selected items."}]}),(r,o)=>{const j=S,D=L;return p(),m("div",null,[t("div",dt,[t("div",ct,[o[3]||(o[3]=t("div",null,[t("h1",{class:"mb-2 text-3xl font-bold text-foreground"}," Shopping Cart "),t("p",{class:"text-muted-foreground"}," Manage your selected items ")],-1)),a(l).items.length>0?(p(),m("div",gt,[g(a(f),{variant:"outline",size:"sm",onClick:e,class:"text-red-600 hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-900/20 dark:hover:text-red-300"},{default:y(()=>[...o[2]||(o[2]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),b(" Clear Cart ",-1)])]),_:1})])):_("",!0)]),a(l).items.length>0?(p(),m("div",ut,[t("div",xt,[(p(!0),m(I,null,P(a(l).items,c=>(p(),m("div",{key:c.bagId,class:"rounded-lg bg-white p-6 shadow-md dark:bg-gray-900"},[t("div",pt,[t("div",mt,[g(j,{src:c.bag.images[0].url,alt:c.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:100,height:100,format:"webp"},null,8,["src","alt"])]),t("div",yt,[t("div",bt,[t("div",null,[t("h3",ft,s(c.bag.id)+" Handbag ",1)]),t("button",{onClick:C=>x(c.bagId),class:"text-gray-400 transition-colors hover:text-red-500"},[...o[4]||(o[4]=[t("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])],8,ht)]),t("div",vt,[t("div",kt,[t("button",{onClick:C=>h(c.bagId),class:"flex h-8 w-8 items-center justify-center rounded-full border transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"}," - ",8,wt),t("span",_t,s(c.quantity),1),t("button",{onClick:C=>w(c.bagId),class:"flex h-8 w-8 items-center justify-center rounded-full border transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"}," + ",8,Ct)]),t("div",$t,[t("p",St," ¥"+s((c.bag.price*c.quantity).toLocaleString()),1),t("p",It," ¥"+s(c.bag.price)+" × "+s(c.quantity),1)])])])])]))),128))]),t("div",Pt,[t("div",Tt,[o[12]||(o[12]=t("h2",{class:"mb-4 text-xl font-bold text-gray-900 dark:text-white"}," Order Summary ",-1)),t("div",jt,[t("div",Dt,[o[5]||(o[5]=t("span",null,"Items",-1)),t("span",null,s(a(l).totalItems)+" pieces",1)]),t("div",Lt,[o[6]||(o[6]=t("span",null,"Subtotal",-1)),t("span",null,"¥"+s(a(l).totalPrice.toLocaleString()),1)]),o[8]||(o[8]=t("div",{class:"flex justify-between text-gray-600 dark:text-gray-300"},[t("span",null,"Shipping"),t("span",{class:"text-green-600"},"Free")],-1)),o[9]||(o[9]=t("hr",{class:"border-gray-200 dark:border-gray-700"},null,-1)),t("div",Ot,[o[7]||(o[7]=t("span",null,"Total",-1)),t("span",null,"¥"+s(a(l).totalPrice.toLocaleString()),1)])]),t("div",Ht,[g(a(f),{size:"lg",class:"w-full",onClick:k},{default:y(()=>[...o[10]||(o[10]=[b(" Checkout Now ",-1)])]),_:1}),g(a(f),{size:"lg",variant:"outline",class:"w-full",onClick:i},{default:y(()=>[...o[11]||(o[11]=[b(" Continue Shopping ",-1)])]),_:1})]),o[13]||(o[13]=t("div",{class:"mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20"},[t("p",{class:"text-sm text-blue-700 dark:text-blue-300"}," 🌟 Our handbag styles are very popular worldwide! Welcome to place your order and experience our premium quality products. ")],-1))])])])):(p(),m("div",zt,[o[15]||(o[15]=M('<div class="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800"><svg class="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path></svg></div><h2 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white"> Your cart is empty </h2><p class="mb-4 text-gray-600 dark:text-gray-300"> You haven&#39;t added any items to your cart yet </p><p class="mb-8 font-medium text-blue-600 dark:text-blue-400"> 🌟 Our handbag styles are very popular worldwide! Welcome to browse and experience our premium quality products. </p>',4)),g(D,{to:"/products"},{default:y(()=>[g(a(f),{size:"lg"},{default:y(()=>[...o[14]||(o[14]=[b("Start Shopping",-1)])]),_:1})]),_:1})]))]),g(at,{"is-open":a(n),"cart-items":a(l).items,"total-price":a(l).totalPrice,onClose:o[0]||(o[0]=c=>n.value=!1)},null,8,["is-open","cart-items","total-price"]),g(it,{"is-open":a(v),title:"Clear Shopping Cart",message:"Are you sure you want to remove all items from your cart? This action cannot be undone.","confirm-text":"Clear Cart","cancel-text":"Cancel",variant:"danger",onClose:o[1]||(o[1]=c=>v.value=!1),onConfirm:u},null,8,["is-open"])])}}};export{Qt as default};
