(this["webpackJsonpburger-creator-app"]=this["webpackJsonpburger-creator-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2m-8G",BreadTop:"BurgerIngredient_BreadTop__22i8l",Seeds1:"BurgerIngredient_Seeds1__eQEkZ",Seeds2:"BurgerIngredient_Seeds2__vGPf1",Meat:"BurgerIngredient_Meat__2831O",Cheese:"BurgerIngredient_Cheese__3PpaG",Salad:"BurgerIngredient_Salad__2_xO7",Bacon:"BurgerIngredient_Bacon__3ubTp"}},,,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__X9YOa",Open:"SideDrawer_Open__3u2b-",Close:"SideDrawer_Close__Xx54A",Logo:"SideDrawer_Logo__3rwyL"}},,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__2W0Db",Label:"BuildControl_Label__1jIFS",Less:"BuildControl_Less__2cibO",More:"BuildControl_More__brfBI"}},function(e,t,n){e.exports={Input:"FormInput_Input__3Dekx",Label:"FormInput_Label__1Ekl2",InputElement:"FormInput_InputElement__3CLEo",Invalid:"FormInput_Invalid__1yMRn"}},,,,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__eYrRd",Logo:"Toolbar_Logo__BXC4w",DesktopOnly:"Toolbar_DesktopOnly__cbVr2"}},function(e,t,n){e.exports={Hamburger:"SideDrawerToggle_Hamburger__3siDJ",HamburgerBox:"SideDrawerToggle_HamburgerBox__3wDu7",HamburgerInner:"SideDrawerToggle_HamburgerInner__1szU_"}},,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__r_256",active:"NavigationItem_active__i8DXa"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1io3s",OrderButton:"BuildControls_OrderButton__1vMMs",enable:"BuildControls_enable__1Y82s"}},function(e,t,n){e.exports={Button:"Button_Button__1XFrq",Success:"Button_Success__18o4c",Danger:"Button_Danger__NAREZ"}},,,,,,,,,,,,function(e,t,n){e.exports={Content:"Layout_Content__1AcKK"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__1LUwi"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__131Fo"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__1R2oj"}},function(e,t,n){e.exports={Burger:"Burger_Burger__YbKaU"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__1GoCE",load2:"Spinner_load2__21DxN"}},function(e,t,n){e.exports={Modal:"Modal_Modal__3IPaI"}},function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3yam_"}},function(e,t,n){e.exports={ContactData:"ContactData_ContactData__1OyzO"}},function(e,t,n){e.exports={Order:"Order_Order__3xET3"}},function(e,t,n){e.exports={Auth:"Auth_Auth__XXipb"}},,,function(e,t,n){e.exports=n(88)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(23),o=n.n(i),c=(n(65),n(4)),l=n(5),u=n(8),s=n(7),d=n(2),p=n(6),m=n(46),h=n.n(m),g=n(26),f=n.n(g),E=n(47),v=n.n(E),b=n(48),_=n.n(b),y=function(e){e.height;return r.a.createElement("div",{className:_.a.Logo},r.a.createElement("img",{src:v.a,alt:"MyBurgerLogo"}))},I=n(49),S=n.n(I),C=n(15),k=n(30),O=n.n(k),T=function(e){var t=e.children,n=e.link,a=e.exact;return r.a.createElement("li",{className:O.a.NavigationItem},r.a.createElement(C.b,{to:n,exact:a,activeClassName:O.a.active},t))},N=function(e){var t=e.isAuth;return r.a.createElement("ul",{className:S.a.NavigationItems},r.a.createElement(T,{exact:!0,link:"/"},"Burger Builder"),t?r.a.createElement(T,{link:"/orders"},"Orders"):null,t?r.a.createElement(T,{link:"/logout"},"Logout"):r.a.createElement(T,{link:"/auth"},"Authenticate"))},D=n(27),B=n.n(D),A=function(e){var t=e.clicked;return r.a.createElement("button",{className:B.a.Hamburger,onClick:t},r.a.createElement("span",{className:B.a.HamburgerBox},r.a.createElement("span",{className:B.a.HamburgerInner})))},j=function(e){var t=e.sideDrawerClicked,n=e.isAuth;return r.a.createElement("header",{className:f.a.Toolbar},r.a.createElement(A,{clicked:t}),r.a.createElement("div",{className:f.a.Logo},r.a.createElement(y,null)),r.a.createElement("nav",{className:f.a.DesktopOnly},r.a.createElement(N,{isAuth:n})))},R=n(19),w=n.n(R),H=n(50),x=n.n(H),L=function(e){var t=e.showBackdrop,n=e.hideBackdrop;return t?r.a.createElement("div",{className:x.a.Backdrop,onClick:n}):null},P=function(e){var t=e.closeSieDrawer,n=e.openSideDrawer,a=e.isAuth,i=[w.a.SideDrawer,w.a.Close];return n&&(i=[w.a.SideDrawer,w.a.Open]),r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{showBackdrop:n,hideBackdrop:t}),r.a.createElement("div",{className:i.join(" "),onClick:t},r.a.createElement("div",{className:w.a.Logo},r.a.createElement(y,null)),r.a.createElement("nav",null,r.a.createElement(N,{isAuth:a}))))},U=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={displayingSideDrawer:!1},e.closingSideDrawerHandler=function(){e.setState({displayingSideDrawer:!1})},e.displaySideDrawerHandler=function(){e.setState((function(t){return{displayingSideDrawer:!e.state.displayingSideDrawer}}))},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{isAuth:this.props.isAuthenticated,sideDrawerClicked:this.displaySideDrawerHandler}),r.a.createElement(P,{isAuth:this.props.isAuthenticated,openSideDrawer:this.state.displayingSideDrawer,closeSieDrawer:this.closingSideDrawerHandler}),r.a.createElement("main",{className:h.a.Content},this.props.children))}}]),n}(a.Component),F=Object(p.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(U),M=n(3),z=n(59),G=n(51),q=n.n(G),V=n(14),X=n.n(V),W=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:X.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:X.a.BreadTop},r.a.createElement("div",{className:X.a.Seeds1}),r.a.createElement("div",{className:X.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:X.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:X.a.Cheese});break;case"bacon":e=r.a.createElement("div",{className:X.a.Bacon});break;case"salad":e=r.a.createElement("div",{className:X.a.Salad});break;default:e=null}return e}}]),n}(a.Component),Y=function(e){var t=e.ingredients,n=Object.keys(t).map((function(e){return Object(z.a)(Array(t[e])).map((function(t,n){return r.a.createElement(W,{key:e+n,type:e})}))})).reduce((function(e,t){return e.concat(t)}));return 0===n.length&&(n=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:q.a.Burger},r.a.createElement(W,{type:"bread-top"}),n,r.a.createElement(W,{type:"bread-bottom"}))},$=n(33),J=n.n($),K=n(21),Q=n.n(K),Z=function(e){var t=e.labelName,n=e.add,a=e.remove,i=e.disabled;return r.a.createElement("div",{className:Q.a.BuildControl},r.a.createElement("div",{className:Q.a.Label},t),r.a.createElement("button",{className:Q.a.More,onClick:n},"More"),r.a.createElement("button",{className:Q.a.Less,onClick:a,disabled:i},"Less"))},ee=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],te=function(e){var t=e.addIngredient,n=e.removeIngredient,a=e.disabled,i=e.price,o=e.purchaseable,c=e.purchaseOrder,l=e.isAuth;return r.a.createElement("div",{className:J.a.BuildControls},r.a.createElement("p",null,"Current price: ",r.a.createElement("strong",null,i.toFixed(2)," $")),ee.map((function(e){return r.a.createElement(Z,{key:e.label,labelName:e.label,add:function(){return t(e.type)},remove:function(){return n(e.type)},disabled:a[e.type]})})),r.a.createElement("button",{className:J.a.OrderButton,disabled:!o,onClick:c},l?"ORDER NOW":"SIGN UP TO ORDER"))},ne=n(52),ae=n.n(ne),re=function(){return r.a.createElement("div",{className:ae.a.Loader},"Loading...")},ie=n(53),oe=n.n(ie),ce=r.a.memo((function(e){var t=e.show,n=e.children,a=e.hideBackdrop;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{showBackdrop:t,hideBackdrop:a}),r.a.createElement("div",{className:oe.a.Modal,style:{transform:t?"translateY(0)":"translateY(-100vh)",opacity:t?"1":"0"}},n))})),le=n(34),ue=n.n(le),se=function(e){var t=e.children,n=e.clicked,a=e.btnType,i=e.disabled;return r.a.createElement("button",{disabled:i,className:[ue.a.Button,ue.a[a]].join(" "),onClick:n},t)},de=function(e){var t=e.ingredients,n=e.cancelPurchase,a=e.proceedWithPurchase,i=e.price,o=Object.keys(t).map((function(e){return r.a.createElement("li",{key:e},r.a.createElement("span",{style:{textTransform:"capitalize"}},e),": ",t[e])}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"Delicious burger with the following ingredients:"),r.a.createElement("ul",null,o),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",i.toFixed(2)," $")),r.a.createElement("p",null,"Continue checkout?"),r.a.createElement(se,{btnType:"Danger",clicked:n},"CANCEL"),r.a.createElement(se,{btnType:"Success",clicked:a},"CONTINUE"))},pe=function(e,t){return function(n){Object(u.a)(i,n);var a=Object(s.a)(i);function i(){var e;Object(c.a)(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(l.a)(i,[{key:"componentDidMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,{show:this.state.error,hideBackdrop:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),i}(a.Component)},me=n(25),he=n.n(me),ge=he.a.create({baseURL:"https://burger-app-ce2e9.firebaseio.com/"}),fe=function(e,t){return{type:"AUTH_SUCCESS",idToken:e,userId:t}},Ee=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:"AUTH_LOGOUT"}},ve=function(e){return function(t){setTimeout((function(){t(Ee())}),1e3*e)}},be=function(e){return{type:"SET_AUTH_REDIRECT_PATH",path:e}},_e=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={purchasing:!1},e.purchaseControl=function(){e.props.isAuthenticated?e.setState({purchasing:!0}):(e.props.onSetAuthRedirectPath("/checkout"),e.props.history.push("/auth"))},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseProceedHandler=function(){e.props.onPurchaseInit(),e.props.history.push("/checkout")},e.updatePurchaseState=function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"render",value:function(){var e=Object(M.a)({},this.props.ingredients);for(var t in e)e[t]=e[t]<=0;var n=this.props.error?r.a.createElement("p",null,"Ingredients cannot be loaded!"):r.a.createElement(re,null),a=null;return null!==this.props.ingredients&&(n=r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,{ingredients:this.props.ingredients}),r.a.createElement(te,{addIngredient:this.props.onAddedIngredient,removeIngredient:this.props.onRemovedIngredient,disabled:e,purchaseable:this.updatePurchaseState(this.props.ingredients),purchaseOrder:this.purchaseControl,isAuth:this.props.isAuthenticated,price:this.props.totalPrice})),a=r.a.createElement(de,{ingredients:this.props.ingredients,price:this.props.totalPrice,proceedWithPurchase:this.purchaseProceedHandler,cancelPurchase:this.purchaseCancelHandler})),r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,{show:this.state.purchasing,hideBackdrop:this.purchaseCancelHandler},a),n)}}]),n}(a.Component),ye=Object(p.b)((function(e){return{ingredients:e.burgerBuilder.ingredients,totalPrice:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onAddedIngredient:function(t){return e({type:"ADD_INGREDIENT",ingredientName:t})},onRemovedIngredient:function(t){return e({type:"REMOVE_INGREDIENT",ingredientName:t})},onInitIngredients:function(){return e((function(e){ge.get("/ingredients.json").then((function(t){e({type:"SET_INGREDIENTS",ingredients:t.data})})).catch((function(t){e({type:"FETCH_INGREDIENTS_FAILED"})}))}))},onPurchaseInit:function(){return e({type:"PURCHASE_INIT"})},onSetAuthRedirectPath:function(t){return e(be(t))}}}))(pe(_e,ge)),Ie=n(54),Se=n.n(Ie),Ce=function(e){var t=e.ingredients,n=e.checkoutCancelled,a=e.checkoutContinued;return r.a.createElement("div",{className:Se.a.CheckoutSummary},r.a.createElement("h1",null,"We hope it tastes well!"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(Y,{ingredients:t})),r.a.createElement(se,{btnType:"Danger",clicked:n},"CANCEL"),r.a.createElement(se,{btnType:"Success",clicked:a},"CONTINUE"))},ke=n(55),Oe=n.n(ke),Te=n(22),Ne=n.n(Te),De=function(e){var t=e.elementType,n=e.label,a=e.elementConfig,i=e.value,o=e.change,c=e.invalid,l=e.validationIsRequired,u=e.touched,s=null,d=[Ne.a.Input];switch(c&&l&&u&&d.push(Ne.a.Invalid),t){case"input":s=r.a.createElement("input",Object.assign({className:d.join(" ")},a,{onChange:o,value:i}));break;case"textarea":s=r.a.createElement("textarea",Object.assign({className:d.join(" ")},a,{onChange:o,value:i}));break;case"select":s=r.a.createElement("select",{className:d.join(" "),onChange:o,value:i},a.options.map((function(e){return r.a.createElement("option",{value:e.value,key:e.value},e.displayValue)})),"/>;");break;default:s=r.a.createElement("input",Object.assign({className:d.join(" ")},a,{onChange:o,value:i}))}return r.a.createElement("div",{className:Ne.a.Input},r.a.createElement("label",{className:Ne.a.Label},n),s)},Be=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",name:"name",id:"name",placeholder:"Your name..."},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",name:"email",id:"email",placeholder:"Your email..."},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",name:"street",id:"street",placeholder:"Street..."},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",name:"zipCode",id:"zipCode",placeholder:"Zip Code..."},value:"",validation:{required:!0,minLength:4,maxLength:5,isNumeric:!0},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",name:"country",id:"country",placeholder:"Your country..."},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},e.checkValidity=function(e,t){var n=!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n},e.orderHandler=function(t){t.preventDefault();var n={};for(var a in e.state.orderForm)n[a]=e.state.orderForm[a].value;var r={ingredients:e.props.ingredients,price:e.props.price,orderData:n,userId:e.props.userId};e.props.onPurchaseBurger(r,e.props.token)},e.inputChangeHandler=function(t,n){var a=Object(M.a)({},e.state.orderForm),r=Object(M.a)({},a[n]);r.value=t.target.value,r.touched=!0,r.valid=e.checkValidity(r.value,r.validation),a[n]=r;var i=!0;for(var o in a)i=a[o].valid&&i;e.setState({orderForm:a,formIsValid:i})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var a=t.map((function(t){return r.a.createElement(De,{change:function(n){e.inputChangeHandler(n,t.id)},key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,invalid:!t.config.valid,touched:t.config.touched,validationIsRequired:t.config.validation,value:t.config.value})})),i=r.a.createElement("form",{onSubmit:this.orderHandler},a,r.a.createElement(se,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.props.loading&&(i=r.a.createElement(re,null)),r.a.createElement("div",{className:Oe.a.ContactData},r.a.createElement("h4",null,"Enter your Contact Data"),i)}}]),n}(a.Component),Ae=Object(p.b)((function(e){return{ingredients:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.orders.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onPurchaseBurger:function(t,n){return e(function(e,t){return function(n){n({type:"PURCHASE_BURGER_START"}),ge.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:"PURCHASE_BURGER_SUCCESS",orderID:e,orderData:t}}(t.data.name,e))})).catch((function(e){n({type:"PURCHASE_BURGER_FAILED",error:e})}))}}(t,n))}}}))(pe(Be,ge)),je=Object(p.b)((function(e){return{ingredients:e.burgerBuilder.ingredients,purchased:e.orders.purchased}}))((function(e){var t=e.history,n=e.ingredients,a=e.purchased,i=e.match,o=r.a.createElement(d.a,{to:"/"});if(n){var c=a?r.a.createElement(d.a,{to:"/"}):null;o=r.a.createElement("div",null,c,r.a.createElement(Ce,{checkoutCancelled:function(){return t.goBack()},checkoutContinued:function(){return t.replace("/checkout/contact-data")},ingredients:n}),r.a.createElement(d.b,{path:i.path+"/contact-data",component:Ae}))}return o})),Re=n(56),we=n.n(Re),He=function(e){var t=e.ingredients,n=e.price,a=e.personName,i=[];for(var o in t)i.push({ingredientName:o,ingredientCount:t[o]});var c=i.map((function(e){return r.a.createElement("span",{style:{textTransform:"capitalize",dislay:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.ingredientName},e.ingredientName,": (+",e.ingredientCount,")")}));return r.a.createElement("div",{className:we.a.Order},r.a.createElement("p",null,"Ingredients: ",c),r.a.createElement("p",null,"Price ",r.a.createElement("strong",null,"USD ",Number.parseFloat(n).toFixed(2))),r.a.createElement("p",null,"Order by: ",r.a.createElement("strong",null,a)))},xe=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=r.a.createElement(re,null);return this.props.loading||(e=r.a.createElement("div",null,this.props.orders.map((function(e){return r.a.createElement(He,{ingredients:e.ingredients,price:e.price,key:e.id,personName:e.orderData.name})})))),e}}]),n}(a.Component),Le=Object(p.b)((function(e){return{orders:e.orders.orders,loading:e.orders.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFetchOrders:function(t,n){return e(function(e,t){return function(n){n({type:"FETCH_ORDERS_START"});var a="?auth=".concat(e,'&orderBy="userId"&equalTo="').concat(t,'"');ge.get("/orders.json"+a).then((function(e){var t=[];for(var a in e.data)t.push(Object(M.a)(Object(M.a)({},e.data[a]),{},{id:a}));n(function(e){return{type:"FETCH_ORDERS_SUCCESS",orders:e}}(t))})).catch((function(e){n({type:"FETCH_ORDERS_FAIL"})}))}}(t,n))}}}))(pe(xe,ge)),Pe=n(16),Ue=n(57),Fe=n.n(Ue),Me=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Email Adress"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignUp:!0},e.checkValidity=function(e,t){var n=!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n},e.inputChangeHandler=function(t,n){var a=Object(M.a)(Object(M.a)({},e.state.controls),{},Object(Pe.a)({},n,Object(M.a)(Object(M.a)({},e.state.controls[n]),{},{value:t.target.value,valid:e.checkValidity(t.target.value,e.state.controls[n].validation),touched:!0})));e.setState({controls:a})},e.submitHandler=function(t){t.preventDefault(),e.props.onAuth(e.state.controls.email.value,e.state.controls.password.value,e.state.isSignUp)},e.switchAuthModeHandler=function(){e.setState((function(e){return{isSignUp:!e.isSignUp}}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var a=t.map((function(t){return r.a.createElement(De,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,invalid:!t.config.valid,touched:t.config.touched,validationIsRequired:t.config.validation,value:t.config.value,change:function(n){e.inputChangeHandler(n,t.id)}})}));this.props.loading&&(a=r.a.createElement(re,null));var i=null;this.props.error&&(i=r.a.createElement("p",null,this.props.error.message));var o=null;return this.props.isAuthenticated&&(o=r.a.createElement(d.a,{to:this.props.authRedirectPath})),r.a.createElement("div",{className:Fe.a.Auth},o,i,r.a.createElement("form",{onSubmit:this.submitHandler},a,r.a.createElement(se,{btnType:"Success"},"SUBMIT")),r.a.createElement(se,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"SWITCH TO ",this.state.isSignUp?"SIGN IN":"SIGN UP"))}}]),n}(a.Component),ze=Object(p.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,n,a){return e(function(e,t,n){return function(a){a({type:"AUTH_START"});var r={email:e,password:t,returnSecureToken:!0},i="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC7upwtv2ccsRR_ekQwIrIXHyoiktzH-As";n||(i="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC7upwtv2ccsRR_ekQwIrIXHyoiktzH-As"),he.a.post(i,r).then((function(e){localStorage.setItem("token",e.data.idToken);var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),a(fe(e.data.idToken,e.data.localId)),a(ve(e.data.expiresIn))})).catch((function(e){a({type:"AUTH_FAIL",error:e.response.data.error})}))}}(t,n,a))},onSetAuthRedirectPath:function(){return e(be("/"))}}}))(Me),Ge=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return r.a.createElement(d.a,{to:"/"})}}]),n}(a.Component),qe=Object(p.b)(null,(function(e){return{onLogout:function(){return e(Ee())}}}))(Ge),Ve=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/auth",component:ze}),r.a.createElement(d.b,{exact:!0,path:"/",component:ye}),r.a.createElement(d.a,{to:"/"}));return this.props.isAuthenticated&&(e=r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:ye}),r.a.createElement(d.b,{path:"/checkout",component:je}),r.a.createElement(d.b,{path:"/orders",component:Le}),r.a.createElement(d.b,{path:"/logout",component:qe}),r.a.createElement(d.b,{path:"/auth",component:ze}),r.a.createElement(d.a,{to:"/"}))),r.a.createElement("div",null,r.a.createElement(F,null,e))}}]),n}(a.Component),Xe=Object(d.g)(Object(p.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e((function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n>new Date){var a=localStorage.getItem("userId");e(fe(t,a)),e(ve((n.getTime()-(new Date).getTime())/1e3))}else e(Ee())}else e(Ee())}))}}}))(Ve));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var We=n(17),Ye=n(58),$e=function(e,t){return Object(M.a)(Object(M.a)({},e),t)},Je={ingredients:null,totalPrice:3.99,error:!1,building:!1},Ke={salad:.5,cheese:1.2,bacon:1.2,meat:2.2},Qe=function(e,t){var n=Object(Pe.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),a={ingredients:$e(e.ingredients,n),totalPrice:e.totalPrice+Ke[t.ingredientName],building:!0};return $e(e,a)},Ze=function(e,t){if(!(e.ingredients[t.ingredientName]<=0)){var n=Object(Pe.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),a={ingredients:$e(e.ingredients,n),totalPrice:e.totalPrice-Ke[t.ingredientName],building:!0};return $e(e,a)}},et=function(e,t){return $e(e,{ingredients:Object(M.a)(Object(M.a)({},e.ingredients),{},{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat}),totalPrice:3.99,error:!1,building:!1})},tt=function(e,t){return $e(e,{error:!0})},nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGREDIENT":return Qe(e,t);case"REMOVE_INGREDIENT":return Ze(e,t);case"SET_INGREDIENTS":return et(e,t);case"FETCH_INGREDIENTS_FAILED":return tt(e);default:return e}},at={purchased:!1,loading:!1,orders:[]},rt=function(e,t){return $e(e,{loading:!0})},it=function(e,t){return $e(e,{loading:!1})},ot=function(e,t){var n=$e(t.orderData,{id:t.orderID});return $e(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)})},ct=function(e,t){return $e(e,{purchased:!1})},lt=function(e,t){return $e(e,{loading:!0})},ut=function(e,t){return $e(e,{loading:!1})},st=function(e,t){return $e(e,{loading:!1,orders:t.orders})},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PURCHASE_INIT":return ct(e);case"PURCHASE_BURGER_START":return rt(e);case"PURCHASE_BURGER_FAILED":return it(e);case"PURCHASE_BURGER_SUCCESS":return ot(e,t);case"FETCH_ORDERS_START":return lt(e);case"FETCH_ORDERS_FAIL":return ut(e);case"FETCH_ORDERS_SUCCESS":return st(e,t);default:return e}},pt={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},mt=function(e,t){return $e(e,{error:null,loading:!0})},ht=function(e,t){return $e(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},gt=function(e,t){return $e(e,{error:t.error,loading:!1})},ft=function(e,t){return $e(e,{token:null,userId:null})},Et=function(e,t){return $e(e,{authRedirectPath:t.path})},vt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return mt(e);case"AUTH_SUCCESS":return ht(e,t);case"AUTH_FAIL":return gt(e,t);case"AUTH_LOGOUT":return ft(e);case"SET_AUTH_REDIRECT_PATH":return Et(e,t);default:return e}},bt=Object(We.c)({burgerBuilder:nt,orders:dt,auth:vt}),_t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||We.d,yt=Object(We.e)(bt,_t(Object(We.a)(Ye.a)));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{store:yt},r.a.createElement(C.a,null,r.a.createElement(Xe,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[60,1,2]]]);
//# sourceMappingURL=main.9967a5fd.chunk.js.map