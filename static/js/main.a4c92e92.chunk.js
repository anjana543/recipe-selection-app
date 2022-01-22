(this["webpackJsonprecipe-selection-app"]=this["webpackJsonprecipe-selection-app"]||[]).push([[0],{32:function(e,t,a){e.exports=a(61)},61:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(25),l=a.n(r),o=a(30),d=a(7),c=a(8),s=a(9),u=s.Container;u.displayName="Container";var m=s.Row;m.displayName="Row";var p=s.Col;p.displayName="Col";var h=a(3),g=a(1),b=a(2);function f(){var e=Object(h.a)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return f=function(){return e},e}var v=g.default.div(f(),b.a,b.b,b.d,b.f,b.h,b.i,b.j,b.k,b.l);v.displayName="Box";var x=v;function y(){var e=Object(h.a)([""]);return y=function(){return e},e}var C=Object(g.default)(x)(y());C.propTypes=x.propTypes,C.defaultProps={display:"flex"};var E=C,j=a(5),S=a.n(j);function w(){var e=Object(h.a)(["\n  border: ","px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: ","px solid\n    ",";\n  width: ","px;\n  height: ","px;\n  animation: "," 1000ms linear infinite;\n  margin: 0px auto;\n"]);return w=function(){return e},e}function k(){var e=Object(h.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);return k=function(){return e},e}var O=Object(g.keyframes)(k()),_=g.default.div(w(),(function(e){return null===e||void 0===e?void 0:e.border}),(function(e){return null===e||void 0===e?void 0:e.border}),(function(e){var t,a;return(null===e||void 0===e?void 0:e.color)?e.color:null===e||void 0===e||null===(t=e.theme)||void 0===t||null===(a=t.colors)||void 0===a?void 0:a.primary_600}),(function(e){return null===e||void 0===e?void 0:e.width}),(function(e){return null===e||void 0===e?void 0:e.height}),O);_.propTypes={width:S.a.number,height:S.a.number,border:S.a.number,color:S.a.string},_.defaultProps={width:100,height:100,border:5,color:""};var R=_,z=a(4),P=a(13);function F(){var e=Object(h.a)(["\n  ","\n  ","\n  ","\n"]);return F=function(){return e},e}var B=g.default.div(F(),b.n,b.k,b.d);B.propTypes=Object(d.a)({},P.a.typography,{},P.a.space,{},P.a.color);var I=B;function L(){var e=Object(h.a)(["\n  ","\n  ","\n  ","\n  ","\n  &:disabled {\n    cursor: default;\n    opacity: 0.5;\n  }\n"]);return L=function(){return e},e}var T=g.default.button(L(),Object(b.o)({variants:{primary:{color:"white",borderWidth:"sm",borderStyle:"solid",borderColor:"primary_600",backgroundColor:"primary_600",boxShadow:"sm",":hover:enabled":{backgroundColor:"primary_700",borderColor:"primary_700"},":active:enabled":{backgroundColor:"primary_800",borderColor:"primary_800"}},secondary:{color:"primary_600",borderWidth:"sm",borderStyle:"solid",borderColor:"primary_600",backgroundColor:"white",boxShadow:"sm",":hover:enabled":{backgroundColor:"primary_200",borderColor:"primary_700"},":active:enabled":{backgroundColor:"primary_300",borderColor:"primary_800"}}}}),Object(z.a)({padding:"0 24px",lineHeight:"40px",textDecoration:"none",textAlign:"center",borderRadius:"md",cursor:"pointer",display:"block",textTransform:"uppercase",outline:"none",width:"fit-content"}),b.h,b.k),A=a(31);function H(){var e=Object(h.a)(["\n  ",";\n  fill: currentcolor;\n"]);return H=function(){return e},e}var M=g.default.svg(H(),b.d);M.displayName="IconContainer";var W=function(e){var t=e.content,a=e.viewBox,n=e.size,r=Object(A.a)(e,["content","viewBox","size"]);return i.a.createElement(M,Object.assign({width:n,height:n,viewBox:a},r),t)};W.defaultProps={size:24};var D=W,G=function(e){return i.a.createElement(D,Object.assign({viewBox:"0 0 32 32",content:i.a.createElement("path",{d:"M16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3zm0 1.5C9.649 4.5 4.5 9.649 4.5 16S9.649 27.5 16 27.5 27.5 22.351 27.5 16 22.351 4.5 16 4.5zM22 15v2H10v-2h12z"})},e))};G.displayName="IconMinusCircle";var N=G,q=function(e){return i.a.createElement(D,Object.assign({viewBox:"0 0 32 32",content:i.a.createElement("path",{d:"M16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3zm0 1.5C9.649 4.5 4.5 9.649 4.5 16S9.649 27.5 16 27.5 27.5 22.351 27.5 16 22.351 4.5 16 4.5zm1 5.5v5h5v2h-5v5h-2v-5h-5v-2h5v-5h2z"})},e))};q.displayName="IconPlusCircle";var J=q,Q=function(e){return"".concat("$").concat((e/100).toFixed(2))},Z=function(e,t,a){return(t+a)*e};function K(){var e=Object(h.a)(["\n  ","\n  &:disabled {\n    cursor: default;\n    opacity: 0.5;\n  }\n"]);return K=function(){return e},e}var V=function(e){var t=e.price,a=e.recipeId,n=e.minRecipesSelected,r=e.maxRecipesSelected,l=e.handleAddRecipe;return i.a.createElement(E,{p:"xs","data-testid":"unselected-footer"},i.a.createElement(x,{flex:"50%",alignSelf:"center"},t?i.a.createElement(I,{tabIndex:"0","aria-label":"Extra charge + ".concat(Q(t)),color:"primary_600"},"+",Q(t)):null),i.a.createElement(x,{flex:"50%"},i.a.createElement(T,{onClick:function(){return l(a)},variant:"secondary",width:"100%",p:"0",disabled:r,tabIndex:"0","data-testid":"add-quanitity","aria-label":n?"Add":"Add extra meal"},n?"Add":"Add extra meal")))},Y=function(e){var t=e.recipeId,a=e.selected,n=e.selectionLimit,r=e.yields,l=e.maxRecipesSelected,o=e.handleAddRecipe,d=e.handleRemoveRecipe,c=function(e,t){return e&&t>=e}(n,a);return i.a.createElement(E,{backgroundColor:"primary_600",justifyContent:"space-between",alignItems:"center","data-testid":"selected-footer"},i.a.createElement($,{onClick:function(){return d(t)},title:"Decrease Quantity"},i.a.createElement(N,null)),i.a.createElement(x,{color:"white",tabIndex:"0","aria-label":"".concat(a," in your box (").concat(a*r," servings)")},i.a.createElement(I,{textAlign:"center",fontWeight:"bold",fontFamily:"secondary",fontSize:"md","data-testid":"counter-container"},a," in your box"),i.a.createElement(I,{textAlign:"center",fontFamily:"secondary",fontSize:"sm"},"(",a*r," servings)")),i.a.createElement($,{onClick:function(){return o(t)},title:"Increase Quantity",disabled:l||c},i.a.createElement(J,null)))},$=g.default.button(K(),Object(z.a)({outline:"none",color:"white",padding:"sm",cursor:"pointer",backgroundColor:"primary_600",border:"none",":hover:enabled":{backgroundColor:"primary_700"},":active:enabled":{backgroundColor:"primary_800"}})),U=function(e){var t=e.extraCharge,a=e.handleAddRecipe,n=e.handleRemoveRecipe,r=e.headline,l=e.id,o=e.image,d=e.maxRecipesSelected,c=e.minRecipesSelected,s=e.name,u=e.selected,m=e.selectionLimit,p=e.yields;return i.a.createElement(x,{borderWidth:u?"md":null,borderStyle:u?"solid":null,borderColor:u?"primary_600":null,m:u?"-2px":null,borderRadius:"md",boxShadow:"lg","data-testid":"recipe-card"},i.a.createElement(x,{borderRadius:"2px 2px 0px 0px",paddingBottom:"56.25%",overflow:"hidden",height:"0"},i.a.createElement("img",{src:o,alt:s,width:"100%"})),i.a.createElement(x,{p:"xs",height:"120px"},i.a.createElement(I,{tabIndex:"0",fontWeight:"bold",fontFamily:"primary",fontSize:"md"},s),i.a.createElement(I,{tabIndex:"0",fontWeight:"regular",fontFamily:"secondary",fontSize:"sm"},r)),u?i.a.createElement(Y,{recipeId:l,yields:p,selected:u,selectionLimit:m,maxRecipesSelected:d,handleAddRecipe:a,handleRemoveRecipe:n}):i.a.createElement(V,{recipeId:l,price:t&&t,selected:u,minRecipesSelected:c,maxRecipesSelected:d,handleAddRecipe:a,handleRemoveRecipe:n}))};function X(){var e=Object(h.a)(["\n  cursor: pointer;\n  padding: 0;\n  background-color: transparent;\n  color: inherit;\n  border: none;\n  display: block;\n  &:hover {\n    background-color: transparent;\n    color: inherit;\n  }\n  & > svg {\n    display: flex;\n  }\n  &:disabled {\n    cursor: default;\n    opacity: 0.5;\n  }\n"]);return X=function(){return e},e}var ee=g.default.button(X()),te=function(e){return i.a.createElement(D,Object.assign({viewBox:"0 0 24 24",content:i.a.createElement("path",{d:"M12 3.5A8.5 8.5 0 1 1 3.5 12 8.51 8.51 0 0 1 12 3.5M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm.75 15v-6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM12 6a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"})},e))};te.displayName="IconInfoCircle";var ae=te;function ne(){var e=Object(h.a)(["\n  position: relative;\n  z-index: 100;\n"]);return ne=function(){return e},e}function ie(){var e=Object(h.a)(["\n  ","\n"]);return ie=function(){return e},e}var re=Object(g.default)(x)(ie(),Object(z.a)(Object(d.a)({marginTop:"xs",display:"inline",position:"absolute",boxShadow:"lg",backgroundColor:"white"},{top:"100%"},{},{right:0},{"::after":Object(d.a)({content:"''",position:"absolute",width:0,height:0,borderWidth:"4px",borderStyle:"solid",borderColor:"transparent transparent white white"},{"box-shadow":"-1.41px 1.41px 1px 0 rgba(0,0,0,0.01), -3.66px 3.66px 8px 0 rgba(0,0,0,0.04)",right:"4px","margin-right":"-8px","transform-origin":"0 0",transform:"rotate(-225deg)",top:"0"})})));re.propTypes={children:S.a.any.isRequired};var le=g.default.div(ne()),oe=re;function de(){var e=Object(h.a)(["\n  border-top-color: ",";\n  border-top-width: 1px;\n  border-top-style: solid;\n"]);return de=function(){return e},e}var ce=function(e){var t=e.summary,a=t.selectedRecipes,n=t.shippingPrice,r=t.totalPrice;return i.a.createElement(x,{width:["290px","450px"],padding:"16px","data-testid":"price-summary"},null===a||void 0===a?void 0:a.map((function(e){return i.a.createElement(E,{backgroundColor:"neutral_100",justifyContent:"space-between",alignItems:"center",padding:"0",paddingBottom:"xs",role:"recipeitem",key:"price_".concat(e.id)},i.a.createElement(I,{"aria-label":"".concat((null===e||void 0===e?void 0:e.selected)>1&&e.selected," ").concat(e.name," "),tabIndex:"0",fontSize:"md",lineHeight:"27px"},e.name," ",(null===e||void 0===e?void 0:e.selected)>1&&" x ".concat(e.selected)),i.a.createElement(I,{tabIndex:"0",fontSize:"md",lineHeight:"27px"},Q(e.recipePrice)))})),i.a.createElement(E,{backgroundColor:"neutral_100",justifyContent:"space-between",alignItems:"center",padding:"0",paddingBottom:"xs","data-testid":"shipping-price-block"},i.a.createElement(I,{tabIndex:"0",fontSize:"md",lineHeight:"27px"},"Shipping"),i.a.createElement(I,{tabIndex:"0",fontSize:"md",lineHeight:"27px"},Q(n))),i.a.createElement(se,null),i.a.createElement(E,{backgroundColor:"neutral_100",justifyContent:"space-between",alignItems:"center",padding:"0",paddingTop:"xs","data-testid":"total-price-block"},i.a.createElement(I,{tabIndex:"0",fontSize:"md",lineHeight:"27px",fontWeight:"600"},"Total"),i.a.createElement(I,{tabIndex:"0",fontSize:"md",lineHeight:"27px",fontWeight:"600"},Q(r))))},se=g.default.div(de(),(function(e){var t,a;return null===e||void 0===e||null===(t=e.theme)||void 0===t||null===(a=t.colors)||void 0===a?void 0:a.border}));ce.defaultProps={summary:{}};var ue=ce,me=function(e,t){i.a.useEffect((function(){var a=function(a){if(e.current&&!e.current.contains(a.target))return t(a)};return document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),function(){document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}}),[e,t])},pe=function(e){var t,a=e.summary,n=i.a.useRef(),r=i.a.useState(!1),l=Object(c.a)(r,2),o=l[0],d=l[1];return me(n,(function(){return d(!1)})),i.a.createElement(le,{ref:n,"data-testid":"price-info"},i.a.createElement(ee,{"aria-label":"Price details",onClick:function(){return d(!o)},disabled:0===(null===a||void 0===a||null===(t=a.selectedRecipeList)||void 0===t?void 0:t.length),"data-testid":"price-info-button"},i.a.createElement(ae,{size:"20"})),o?i.a.createElement(oe,null,i.a.createElement(ue,{summary:a})):null)};pe.defaultProps={summary:{}};var he=pe,ge={id:"5f4e821d531e677602591a9b",productName:"Classic Box",headline:"WEEK OF OCTOBER 12TH",min:3,max:8,baseRecipePrice:1798,shippingPrice:1298,recipes:[{id:"5f4d4a7e62fb0224951e7ec4",name:"Chicken Sausage & Spinach Ravioli",slug:"chicken-sausage-spinach-ravioli",headline:"with Tomato & Lemon",image:"./assets/5f4d4a7e62fb0224951e7ec4-2fe03fc2.jpg",selected:1,selectionLimit:1,extraCharge:0,yields:2},{id:"5f4d4aa9f4508b34e9680613",name:"Gouda Vibes Burgers",slug:"gouda-vibes-burgers",headline:"with Tomato Onion Jam & Potato Wedges",image:"./assets/gouda-vibes-burgers-e3f56d7e.jpg",selected:1,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d4acdab96be0cd6073022",name:"Figgy Balsamic Pork",slug:"figgy-balsamic-pork",headline:"with Roasted Carrots & Thyme Potatoes",image:"./assets/5f4d4acdab96be0cd6073022-8b47d1f3.jpg",selected:1,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d4e62e85668628873add2",name:"Sweet Soy Glazed Steak Tacos",slug:"sweet-soy-glazed-steak-tacos",headline:"with Spicy Slaw, Marinated Cucumber & Peanuts",image:"./assets/sweet-soy-glazed-steak-tacos-c5c4cb4f.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4e82c04094d36cbf05dd61",name:"Pork Sausage & Roasted Pepper Pasta",slug:"pork-sausage-roasted-pepper-pasta",headline:"with Creamy Parmesan Garlic Tomato Sauce",image:"./assets/5f4e82c04094d36cbf05dd61-9cb62953.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d4e9b013bb224b742e2b1",name:"Pork Flautas Supreme",slug:"pork-flautas-supreme",headline:"with Pico de Gallo & Lime Crema",image:"./assets/pork-flautas-supreme-1c661fd0.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d4ed9f57387323014001f",name:"Jumpin\u2019 Jack Chicken Bowls",slug:"jumpin-jack-chicken-bowls",headline:"with Rice, Sour Cream & Lime",image:"./assets/jumpin-jack-chicken-bowls-86b15fc9.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d5ce6a55a305b1724c789",name:"Bruschetta Zucchini Boats",slug:"bruschetta-zucchini-boats",headline:"with Couscous & Melty Italian Cheeses",image:"./assets/bruschetta-zucchini-boats-d3936f59.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d5d1028b37d30f71cd7ba",name:"Black Bean & Poblano Quesadillas",slug:"black-bean-quesadillas",headline:"with Salsa Fresca & Lime Sour Cream",image:"./assets/black-bean-quesadillas-a73d7c22.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d5dc7d15bd31fc9024dac",name:"Lemon Tortelloni Palermo",slug:"lemon-tortelloni-palermo",headline:"with Roasted Bell Pepper & Parmesan",image:"./assets/5f4d5dc7d15bd31fc9024dac-c9a78bae.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d5deaeb5aaa261c76c56c",name:"Duck a l\u2019Orange",slug:"duck-a-l-orange",headline:"with Duck Fat Mashed Potatoes & Arugula Almond Salad",image:"./assets/5f4d5deaeb5aaa261c76c56c-69964691.jpg",selected:0,selectionLimit:null,extraCharge:1198,yields:2},{id:"5f4d5f4ee85668628873add8",name:"Steak & Shrimp in a Creamy Thyme Sauce",slug:"steak-shrimp-in-a-creamy-thyme-sauce",headline:"with Zesty Roasted Green Beans & Crispy-Onion-Topped Mashed Potatoes",image:"./assets/steak-shrimp-in-a-creamy-thyme-sauce-12478c6a.jpg",selected:0,selectionLimit:null,extraCharge:1198,yields:2},{id:"5f4d5f6ad15bd31fc9024dae",name:"Chicken Katsu",slug:"chicken-katsu",headline:"with Roasted Green Beans & Ginger Rice",image:"./assets/5f4d5f6ad15bd31fc9024dae-610fbe40.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d5fb78cbc28156118f6e8",name:"Tempura Chicken Fingers & Dipping Sauce",slug:"tempura-chicken-fingers-dipping-sauce",headline:"with Zesty Rice & Green Beans",image:"./assets/tempura-chicken-fingers-dipping-sauce-1f35f352.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d61293f18a973ea30ee91",name:"Brown Sugar Bourbon Pork Chops",slug:"brown-sugar-bourbon-pork-chops",headline:"with Apple Pan Sauce, Scallion Mashed Potatoes & Roasted Green Beans",image:"./assets/5f4d61293f18a973ea30ee91-17d4992a.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d6197a096ba0ab134cc47",name:"Bruschetta Chicken",slug:"bruschetta-chicken",headline:"with a Crispy Mozzarella Crust, Bacon Mashed Potatoes & Broccoli",image:"./assets/bruschetta-chicken-98099a09.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4eb0f632b8724352209946",name:"Seared Steak with Demi Reduction",slug:"seared-steak-with-demi-reduction",headline:"plus Garlic Mashed Potatoes & Honey-Roasted Carrots",image:"./assets/seared-steak-with-demi-reduction-3f9990e2.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d638aeb5aaa261c76c56e",name:"Cheesy Chicken & Spiced Black Beans",slug:"cheesy-chicken-spiced-black-beans",headline:"with Cilantro, Smoky Red Pepper Crema & Garlic Bread",image:"./assets/cheesy-chicken-spiced-black-beans-1cc5edd1.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d63e0cc3d6e27fc3d2c72",name:"Szechuan Noodles with Mushrooms & Carrot",slug:"szechuan-noodles-with-mushrooms-carrot",headline:"topped with a Fried Egg",image:"./assets/szechuan-noodles-with-mushrooms-carrots-f1657079.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d6559e85668628873ade6",name:"Mushroom & Herb Shepherd\u2019s Pie",slug:"mushroom-herb-shepherd-s-pie",headline:"topped with White Cheddar Mashed Potatoes",image:"./assets/mushroom-herb-shepherd-s-pie-30cc90d0.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d673303e7dd4bc704d356",name:"Squash & Caramelized Onion Flatbreads",slug:"squash-caramelized-onion-flatbreads",headline:"with Thyme Ricotta & a Balsamic Drizzle",image:"./assets/squash-caramelized-onion-flatbreads-d0140e2f.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2}]},be=function(){var e=Object(n.useState)({}),t=Object(c.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(!0),l=Object(c.a)(r,2),o=l[0],d=l[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){i(ge),d(!1)}),1e3);return function(){return clearTimeout(e)}}),[a]),{data:a,loading:o}},fe=function(){var e,t,a=Object(n.useState)([]),r=Object(c.a)(a,2),l=r[0],o=r[1],s=be(),u=s.data,h=s.loading,g=Object(n.useState)(!1),b=Object(c.a)(g,2),f=b[0],v=b[1],y=Object(n.useState)(!1),C=Object(c.a)(y,2),j=C[0],S=C[1],w=Object(n.useState)({selectedRecipes:[],totalCount:0,shippingPrice:0,totalPrice:0}),k=Object(c.a)(w,2),O=k[0],_=k[1];Object(n.useEffect)((function(){var e=u.recipes;e&&o(e)}),[o,u]);var z=function(e){var t=null===l||void 0===l?void 0:l.map((function(t){return(null===t||void 0===t?void 0:t.id)===e?Object(d.a)({},t,{selected:t.selected+1}):t}));o(t)},P=function(e){var t=null===l||void 0===l?void 0:l.map((function(t){return(null===t||void 0===t?void 0:t.id)===e?Object(d.a)({},t,{selected:t.selected-1}):t}));o(t)},F=Object(n.useCallback)((function(){var e,t,a=function(e,t){var a=0,n=0;return{selectedRecipes:e.filter((function(e){return null===e||void 0===e?void 0:e.selected})).map((function(e){var i=Z(null===e||void 0===e?void 0:e.selected,t,null===e||void 0===e?void 0:e.extraCharge);return a+=i||0,n+=(null===e||void 0===e?void 0:e.selected)||0,Object(d.a)({},e,{recipePrice:i})})),totalCount:n,totalPrice:a}}(l,u.baseRecipePrice),n=(e=null===a||void 0===a?void 0:a.totalCount,t=u.min,e<t);v(n);var i=function(e,t){return e>=t}(null===a||void 0===a?void 0:a.totalCount,u.max);S(i),_({selectedRecipes:(null===a||void 0===a?void 0:a.selectedRecipes)||[],totalCount:(null===a||void 0===a?void 0:a.totalCount)||0,shippingPrice:(null===u||void 0===u?void 0:u.shippingPrice)||0,totalPrice:(null===a||void 0===a?void 0:a.totalPrice)+(null===u||void 0===u?void 0:u.shippingPrice)})}),[l,u]);return Object(n.useEffect)((function(){(null===l||void 0===l?void 0:l.length)&&F()}),[l,F]),i.a.createElement("div",{"data-testid":"recipes-list"},h?i.a.createElement(R,{width:100,height:100,"data-testid":"recipe-loading"}):i.a.createElement(i.a.Fragment,null,i.a.createElement(m,null,i.a.createElement(p,{sm:6},i.a.createElement("h3",{tabIndex:"0","aria-label":null===u||void 0===u?void 0:u.headline,"data-testid":"headline"},null===u||void 0===u?void 0:u.headline)),(null===l||void 0===l?void 0:l.length)>0&&i.a.createElement(p,{sm:6},i.a.createElement(E,{alignItems:"center",justifyContent:"flex-end"},i.a.createElement(x,{textAlign:"right",mr:"xs"},i.a.createElement("h3",{tabIndex:"0","data-testid":"price-total","aria-label":Q((null===O||void 0===O||null===(e=O.selectedRecipes)||void 0===e?void 0:e.length)>0?null===O||void 0===O?void 0:O.totalPrice:0)},Q((null===O||void 0===O||null===(t=O.selectedRecipes)||void 0===t?void 0:t.length)>0?null===O||void 0===O?void 0:O.totalPrice:0))),i.a.createElement(he,{summary:O})))),i.a.createElement(m,null,(null===l||void 0===l?void 0:l.length)>0?l.map((function(e){return i.a.createElement(p,{sm:12,md:6,xl:4,key:e.id,role:"recipeitem"},i.a.createElement(x,{mb:"md",tabIndex:"0"},i.a.createElement(U,Object.assign({},e,{handleAddRecipe:z,handleRemoveRecipe:P,minRecipesSelected:f,maxRecipesSelected:j}))))})):i.a.createElement(p,{sm:12},i.a.createElement(E,{alignItems:"center",justifyContent:"center"},"No Recipes Found!")))))},ve=function(){return i.a.createElement(u,null,i.a.createElement(x,{textAlign:"center"},i.a.createElement("h1",{tabIndex:"0"},"Select Your Recipes"),i.a.createElement("p",{tabIndex:"0"},"Choose from an ever-changing mix of meat, fish, Beyond Meat\u2122 and health-conscious offerings.")),i.a.createElement(fe,null))};function xe(){var e=Object(h.a)(["\n    body {\n      ","\n    }\n\n    h1 {\n      ","\n    }\n\n    h2 {\n      ","\n    }\n\n    h3 {\n      ","\n    }\n\n    h4 {\n      ","\n    }\n  "]);return xe=function(){return e},e}function ye(){var e=Object(h.a)(["\n  body {\n    ","\n  }\n\n  p {\n    ","\n  }\n\n  a {\n    ","\n  }\n\n  a:hover{\n    text-decoration: none;\n  }\n\n  h1, h2, h3, h4, p, a {\n    ","\n  }\n\n  h1 {\n    ","\n  }\n\n  h2 {\n    ","\n  }\n\n  h3 {\n    ","\n  }\n\n  h4 {\n    ","\n  }\n\n  ","\n"]);return ye=function(){return e},e}var Ce=Object(g.createGlobalStyle)(ye(),Object(z.a)({margin:0,fontFamily:"secondary",fontSize:"sm",lineHeight:"sm",backgroundColor:"neutral_100",color:"text"}),Object(z.a)({fontSize:"md",lineHeight:"md"}),Object(z.a)({color:"primary_700"}),Object(z.a)({fontFamily:"primary",fontWeight:"regular",letterSpacing:"-0.3px",color:"text"}),Object(z.a)({fontSize:"xl",lineHeight:"xl"}),Object(z.a)({fontSize:"lg",lineHeight:"lg"}),Object(z.a)({fontSize:"md",lineHeight:"md"}),Object(z.a)({fontSize:"md",lineHeight:"md"}),s.media.md(xe(),Object(z.a)({fontSize:"md",lineHeight:"md"}),Object(z.a)({fontSize:"xxl",lineHeight:"xxl"}),Object(z.a)({fontSize:"xl",lineHeight:"xl"}),Object(z.a)({fontSize:"lg",lineHeight:"lg"}),Object(z.a)({fontSize:"md",lineHeight:"md"}))),Ee={primary_100:"#F6FD39",primary_200:"#E4FABF",primary_300:"#D2F895",primary_400:"#ABED0D",primary_500:"#00A846",primary_600:"#067A46",primary_700:"#056835",primary_800:"#035624",info_100:"#E9FAFF",info_800:"#00178C",negative_100:"#FFEAE9",negative_200:"#FFCCCA",negative_500:"#DB1D1D",negative_600:"#B30000",negative_700:"#970000",negative_800:"#7C0000",warning_100:"#FFECD3",warning_500:"#EF670A",warning_600:"#CE4500",warning_700:"#A43700",reward_200:"#FFFAB2",reward_400:"#FFE900",reward_500:"#E2C700",neutral_100:"#FFFFFF",neutral_200:"#F8F8F8",neutral_300:"#EEEEEE",neutral_400:"#E4E4E4",neutral_500:"#BBBBBB",neutral_700:"#676767",neutral_800:"#343434"},je={xl:"1200px",lg:"1024px",md:"768px",sm:"0px"},Se={xl:parseInt(je.xl,10),lg:parseInt(je.lg,10),md:parseInt(je.md,10),sm:parseInt(je.sm,10)},we=[je.md,je.lg,je.xl],ke={sm:"@media screen and (min-width: ".concat(je[0],")"),md:"@media screen and (min-width: ".concat(je[1],")"),lg:"@media screen and (min-width: ".concat(je[2],")"),xl:"@media screen and (min-width: ".concat(je[3],")")},Oe=["Montserrat, Verdana, Geneva, sans-serif","'Source Sans Pro', 'Trebuchet MS', Helvetica, sans-serif"];Oe.primary=Oe[0],Oe.secondary=Oe[1];var _e=[14,16,20,24,32];_e.sm=_e[0],_e.md=_e[1],_e.lg=_e[2],_e.xl=_e[3],_e.xxl=_e[4];var Re=["24px","27px","34px","41px","54px"];Re.sm=Re[0],Re.md=Re[1],Re.lg=Re[2],Re.xl=Re[3],Re.xxl=Re[4];var ze=[400,600];ze.regular=ze[0],ze.bold=ze[1];var Pe=[0,4,8,16,24,32,40,56];Pe.xxs=Pe[1],Pe.xs=Pe[2],Pe.sm=Pe[3],Pe.md=Pe[4],Pe.lg=Pe[5],Pe.xl=Pe[6],Pe.xxl=Pe[7];var Fe=[2,4,8];Fe.sm=Fe[0],Fe.md=Fe[1],Fe.lg=Fe[2];var Be=["0 1px 3px 0 rgba(0, 0, 0, 0.1)","0 2px 4px 0 rgba(0, 0, 0, 0.15)","0 3px 8px 0 rgba(0, 0, 0, 0.15)","0 6px 12px 0 rgba(0, 0, 0, 0.10)"];Be.sm=Be[0],Be.md=Be[1],Be.lg=Be[2],Be.xl=Be[3];var Ie=["1px","2px"];Ie.sm=Ie[0],Ie.md=Ie[1];var Le={borderWidths:Ie,colors:Object(d.a)({},Ee,{border:Ee.neutral_400,background:Ee.neutral_200,text:Ee.neutral_800,black:Ee.neutral_800,white:Ee.neutral_100}),fonts:Oe,fontSizes:_e,fontWeights:ze,lineHeights:Re,shadows:Be,space:Pe,radii:Fe,mediaQueries:ke,breakpoints:we,grid:{breakpoints:Se,container:{padding:{xl:32,lg:32,md:16,sm:16},maxWidth:{xl:1144,lg:960,md:"100%",sm:"100%"}}}},Te=function(e){var t=e.children;return i.a.createElement(g.ThemeProvider,{theme:Le},i.a.createElement(s.GridThemeProvider,{gridTheme:Le.grid},i.a.createElement(s.BaseCSS,null),i.a.createElement(Ce,null),t))},Ae=function(){return i.a.createElement(E,{boxShadow:"md",backgroundColor:"neutral_100",justifyContent:"center",alignItems:"center",padding:"sm"},i.a.createElement("a",{href:"/",title:"Home"},i.a.createElement("img",{height:"100px",src:"/FreshToHome.png",alt:"FreshToHome Logo"})))};function He(){var e=Object(h.a)(["\n  min-height: 100vh;\n"]);return He=function(){return e},e}var Me=g.default.main(He()),We=function(){return i.a.createElement(E,{borderTopWidth:"sm",borderTopColor:"border",borderTopStyle:"solid",backgroundColor:"white",justifyContent:"center",alignItems:"center",padding:"sm"},i.a.createElement(I,{fontSize:"sm"},"\xa9 Anjana 2020"))},De=function(){return i.a.createElement(Te,null,i.a.createElement(Ae,null),i.a.createElement(Me,null,i.a.createElement(o.a,null,i.a.createElement(ve,{path:"/"}))),i.a.createElement(We,null))};l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(De,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.a4c92e92.chunk.js.map