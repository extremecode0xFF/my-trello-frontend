(this["webpackJsonpmy-trello-frontend"]=this["webpackJsonpmy-trello-frontend"]||[]).push([[0],{14:function(t,e,a){t.exports={wrapper:"composer_wrapper__2KfPI",composer:"composer_composer__7SBJz",textArea:"composer_textArea__3KQqa",hide:"composer_hide__2p0Do",buttonAdd:"composer_buttonAdd__17Wsw",buttonCancel:"composer_buttonCancel__1QZr6",control:"composer_control__3qFBh"}},16:function(t,e,a){t.exports={container:"card_container__1SVz6",card:"card_card__1TKlw",title:"card_title__1sXlL",buttonRemove:"card_buttonRemove__2DT0r",hide:"card_hide__1RovW",icon:"card_icon__V2jyV"}},17:function(t,e,a){t.exports={list:"list_list__2LicW",header:"list_header__2YD2u",title:"list_title__1HuWP",cards:"list_cards__1AhkS",buttonRemoveList:"list_buttonRemoveList__1isw7",icon:"list_icon__3h4uk",buttonAddCard:"list_buttonAddCard__2lBWg"}},19:function(t,e,a){t.exports={modal:"modal_modal__V7Kw9",active:"modal_active__1cUFi",content:"modal_content__2xwHk"}},20:function(t,e,a){t.exports={header:"board_header__3YuNo",boardCanvas:"board_boardCanvas__1pAmd",lists:"board_lists__31BMR",buttonAddList:"board_buttonAddList__2DTa5"}},22:function(t,e,a){t.exports={hide:"editor_hide__33Vr5",modifierTitle:"editor_modifierTitle__1K9Il",modifierEditArea:"editor_modifierEditArea__2rJEl"}},23:function(t,e,a){t.exports={title:"home_title__3CEKH",borders:"home_borders__1uvQo",button:"home_button__3i_HQ"}},34:function(t,e,a){t.exports={content:"content_content__2NNUk",text:"content_text__yo7sa",buttonCreate:"content_buttonCreate__227aj"}},53:function(t,e,a){t.exports={board:"board_board__2o7ge"}},59:function(t,e,a){},85:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),s=(a(59),a(6)),i=a(13),u=a(5),_=a(2),l=a(27),d=a(28),D=a(33),O=a(32),b=a(29),E=a.n(b),p=a(4),R=a.n(p),A=a(9),j=a(49),S={baseURL:"https://trello-back.shpp.me/espiridonov/api/v1",boards:"/board",list:"/list",card:"/card",user:"/user"},v=a.n(j).a.create({baseURL:S.baseURL,headers:{"Content-Type":"application/json",Authorization:"Bearer 123"}});v.interceptors.response.use((function(t){return t.data}));var h,f=v,T={board:{title:"",users:[],lists:{}},isLoading:!1,error:null,inputs:{title:""}};!function(t){t.UPDATE_BOARD="UPDATE_BOARD",t.UPDATE_BOARD_SUCCESS="UPDATE_BOARD_SUCCESS",t.UPDATE_BOARD_ERROR="UPDATE_BOARD_ERROR",t.DELETE_BOARD="DELETE_BOARD",t.DELETE_BOARD_SUCCESS="DELETE_BOARD_SUCCESS",t.DELETE_BOARD_ERROR="DELETE_BOARD_ERROR",t.UPDATE_BOARD_TITLE="UPDATE_BOARD_TITLE",t.UPDATE_BOARD_TITLE_SUCCESS="UPDATE_BOARD_TITLE_SUCCESS",t.UPDATE_BOARD_TITLE_ERROR="UPDATE_BOARD_TITLE_ERROR",t.INPUT_CHANGE="INPUT_CHANGE",t.ADD_LIST="ADD_LIST",t.ADD_LIST_SUCCESS="ADD_LIST_SUCCESS",t.ADD_LIST_ERROR="ADD_LIST_ERROR",t.DELETE_BOARD_LIST="DELETE_BOARD_LIST",t.DELETE_BOARD_LIST_SUCCESS="DELETE_BOARD_LIST_SUCCESS",t.DELETE_BOARD_LIST_ERROR="DELETE_BOARD_LIST_ERROR",t.EDIT_BOARD_LIST="EDIT_BOARD_LIST",t.EDIT_BOARD_LIST_SUCCESS="EDIT_BOARD_LIST_SUCCESS",t.EDIT_BOARD_LIST_ERROR="EDIT_BOARD_LIST_ERROR",t.ADD_CARD="ADD_CARD",t.ADD_CARD_SUCCESS="ADD_CARD_SUCCESS",t.ADD_CARD_ERROR="ADD_CARD_ERROR",t.DELETE_BOARD_CARD="DELETE_BOARD_CARD",t.DELETE_BOARD_CARD_SUCCESS="DELETE_BOARD_CARD_SUCCESS",t.DELETE_BOARD_CARD_ERROR="DELETE_BOARD_CARD_ERROR",t.EDIT_BOARD_CARD="EDIT_BOARD_CARD",t.EDIT_BOARD_CARD_SUCCESS="EDIT_BOARD_CARD_SUCCESS",t.EDIT_BOARD_CARD_ERROR="EDIT_BOARD_CARD_ERROR"}(h||(h={}));var C,B=a(15),L=a(50),m=a(51);!function(t){t.UPDATE_BOARDS="UPDATE_BOARDS",t.UPDATE_BOARDS_SUCCESS="UPDATE_BOARDS_SUCCESS",t.UPDATE_BOARDS_ERROR="UPDATE_BOARDS_ERROR",t.ADD_BOARDS="ADD_BOARDS",t.ADD_BOARDS_SUCCESS="ADD_BOARDS_SUCCESS",t.ADD_BOARDS_ERROR="ADD_BOARDS_ERROR"}(C||(C={}));var x={boards:[],isLoading:!1,error:null};var y,I={user:[]};!function(t){t.SHOW_MODAL="SHOW_MODAL",t.HIDE_MODAL="HIDE_MODAL"}(y||(y={}));var U={active:!1};var g=Object(B.combineReducers)({board:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case h.UPDATE_BOARD:return Object(_.a)(Object(_.a)({},t),{},{isLoading:!0});case h.UPDATE_BOARD_SUCCESS:return Object(_.a)(Object(_.a)({},t),{},{isLoading:!1,board:e.payload,inputs:{title:e.payload.title}});case h.UPDATE_BOARD_ERROR:return Object(_.a)(Object(_.a)({},t),{},{isLoading:!1,error:e.payload});case h.DELETE_BOARD:return Object(_.a)(Object(_.a)({},t),{},{isLoading:!0});case h.DELETE_BOARD_SUCCESS:return Object(_.a)(Object(_.a)({},t),{},{isLoading:!1});case h.DELETE_BOARD_ERROR:return Object(_.a)(Object(_.a)({},t),{},{isLoading:!1,error:e.payload});case h.INPUT_CHANGE:return Object(_.a)(Object(_.a)({},t),{},{inputs:{title:e.payload}});case h.UPDATE_BOARD_TITLE:return Object(_.a)(Object(_.a)({},t),{},{isLoading:!0});case h.UPDATE_BOARD_TITLE_SUCCESS:return Object(_.a)(Object(_.a)({},t),{},{isLoading:!1,board:Object(_.a)(Object(_.a)({},t.board),{},{title:e.payload})});case h.UPDATE_BOARD_TITLE_ERROR:return Object(_.a)(Object(_.a)({},t),{},{isLoading:!1,error:e.payload});case h.ADD_LIST:return Object(_.a)(Object(_.a)({},t),{},{isLoading:!0});case h.ADD_LIST_SUCCESS:return Object(_.a)(Object(_.a)({},t),{},{isLoading:!1});case h.ADD_LIST_ERROR:return Object(_.a)(Object(_.a)({},t),{},{isLoading:!1,error:e.payload});case h.DELETE_BOARD_LIST:return Object(_.a)(Object(_.a)({},t),{},{isLoading:!0});case h.DELETE_BOARD_LIST_SUCCESS:case h.DELETE_BOARD_LIST_ERROR:return Object(_.a)(Object(_.a)({},t),{},{isLoading:!1});default:return t}},boards:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case C.UPDATE_BOARDS:return{isLoading:!0,error:null,boards:[]};case C.UPDATE_BOARDS_SUCCESS:return{isLoading:!1,error:null,boards:e.payload};case C.UPDATE_BOARDS_ERROR:return{isLoading:!1,error:e.payload,boards:[]};case C.ADD_BOARDS:return Object(_.a)(Object(_.a)({},t),{},{isLoading:!0});case C.ADD_BOARDS_SUCCESS:case C.ADD_BOARDS_ERROR:return Object(_.a)(Object(_.a)({},t),{},{isLoading:!1});default:return t}},user:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;return e.type,Object(_.a)({},t)},modal:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case y.SHOW_MODAL:return{active:!0};case y.HIDE_MODAL:return{active:!1};default:return t}}}),k={board:T,boards:{boards:[],isLoading:!1,error:null},user:{user:[]},modal:{active:!1}},N=Object(B.createStore)(g,k,Object(L.composeWithDevTools)(Object(B.applyMiddleware)(m.a))),P=N.dispatch,w=N,F=a(52),H=Object(F.a)(),M=function(t){return function(){var e=Object(A.a)(R.a.mark((function e(a){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:h.UPDATE_BOARD}),e.next=4,f.get("".concat(S.boards,"/").concat(t));case 4:n=e.sent,a({type:h.UPDATE_BOARD_SUCCESS,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),a({type:h.UPDATE_BOARD_ERROR,payload:"\u041f\u0440\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u043e\u0441\u043a\u0438"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},K=function(t){P({type:h.INPUT_CHANGE,payload:t})},W=function(t,e){return function(){var a=Object(A.a)(R.a.mark((function a(n){var r;return R.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:h.ADD_LIST}),r=e.position?e:Object(_.a)(Object(_.a)({},e),{},{position:1}),a.next=5,f.post("".concat(S.boards,"/").concat(t+S.list),r);case 5:return n({type:h.ADD_LIST_SUCCESS}),a.next=8,n(M(t));case 8:a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),n({type:h.ADD_LIST_ERROR,payload:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0441\u043f\u0438\u0441\u043a\u0430"});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(t){return a.apply(this,arguments)}}()},V=function(t,e,a){return function(){var n=Object(A.a)(R.a.mark((function n(r){return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:h.EDIT_BOARD_LIST}),n.next=4,f.put("".concat(S.boards,"/").concat(t+S.list,"/").concat(e),a);case 4:return r({type:h.EDIT_BOARD_LIST_SUCCESS}),n.next=7,r(M(t));case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),r({type:h.EDIT_BOARD_LIST_ERROR,payload:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430 \u0441\u043f\u0438\u0441\u043a\u0430"});case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}()},z=function(t,e){return function(){var a=Object(A.a)(R.a.mark((function a(n){return R.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:h.ADD_CARD}),a.next=4,f.post("".concat(S.boards,"/").concat(t+S.card),e);case 4:return n({type:h.ADD_CARD_SUCCESS}),a.next=7,n(M(t));case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),n({type:h.ADD_CARD_ERROR,payload:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438"});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(t){return a.apply(this,arguments)}}()},G=function(t,e,a){return function(){var n=Object(A.a)(R.a.mark((function n(r){return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:h.EDIT_BOARD_CARD}),n.next=4,f.put("".concat(S.boards,"/").concat(t+S.card,"/").concat(e),a);case 4:return r({type:h.EDIT_BOARD_CARD_SUCCESS}),n.next=7,r(M(t));case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),r({type:h.EDIT_BOARD_CARD_ERROR,payload:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438"});case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}()},J=a(12),Q=a(54),q=function(t,e){return t.test(e)},Y=/^((\w|[\u0410-\u042f\u0401\u0430-\u044f\u0451])+[\s.-]?)+$|^$/,$=a(22),X=a.n($),Z=a(1),tt=function(t){var e=t.className,a=t.title,r=t.entityID,c=t.action,o=Object(n.useState)(!1),i=Object(J.a)(o,2),_=i[0],l=i[1],d=Object(n.useState)(a),D=Object(J.a)(d,2),O=D[0],b=D[1],E=Object(s.c)(),p=Object(u.f)().id,R=function(){l(!_)};return _?Object(Z.jsx)(Q.a,{className:[e,X.a.modifierEditArea].join(" "),autoFocus:!0,onFocus:function(t){t.target.select()},onBlur:function(t){if(t.target.value&&t.target.value!==a)switch(b(t.target.value.trim()),c){case V:E(V(p,r,{title:t.target.value}));break;case G:E(G(p,r,{title:t.target.value}))}else b(a);R()},onKeyPress:function(t){"Enter"===t.key&&t.currentTarget.blur()},onChange:function(t){q(Y,t.target.value)&&b(t.target.value)},value:O}):Object(Z.jsx)("p",{className:_?[e,X.a.modifierTitle,X.a.hide].join(" "):[e,X.a.modifierTitle].join(" "),onClick:R,children:O})},et=a(16),at=a.n(et);function nt(t){var e=Object(n.useState)(!1),a=Object(J.a)(e,2),r=a[0],c=a[1],o=Object(n.useState)(!1),i=Object(J.a)(o,2),_=i[0],l=i[1],d=t.id,D=t.title,O=Object(u.f)().id,b=Object(s.c)(),E=function(){l(!_)},p=function(){c(!r)};return Object(Z.jsxs)("div",{className:at.a.container,onMouseEnter:E,onMouseLeave:E,children:[Object(Z.jsx)("li",{className:at.a.card,onBlur:p,onFocus:p,children:Object(Z.jsx)(tt,{className:at.a.title,title:D,entityID:d,action:G})}),Object(Z.jsx)("button",{className:!_||r?[at.a.buttonRemove,at.a.hide].join(" "):at.a.buttonRemove,onClick:function(){b(function(t,e){return function(){var a=Object(A.a)(R.a.mark((function a(n){return R.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:h.DELETE_BOARD_CARD}),a.next=4,f.delete("".concat(S.boards,"/").concat(t+S.card,"/").concat(e));case 4:return n({type:h.DELETE_BOARD_CARD_SUCCESS}),a.next=7,n(M(t));case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),n({type:h.DELETE_BOARD_CARD_ERROR,payload:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438"});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(t){return a.apply(this,arguments)}}()}(O,d))},children:Object(Z.jsx)("span",{className:"material-icons ".concat(at.a.icon),children:"delete_forever"})})]})}var rt=a(14),ct=a.n(rt),ot=function(t){var e=t.className,a=t.buttonTitle,r=t.placeholder,c=void 0===r?"":r,o=t.action,i=t.listID,_=void 0===i?0:i,l=Object(n.useState)(!1),d=Object(J.a)(l,2),D=d[0],O=d[1],b=Object(n.useState)(""),E=Object(J.a)(b,2),p=E[0],R=E[1],A=Object(s.c)(),j=Object(u.f)().id,S=function(){O(!D),R("")},v=function(){switch(o){case W:A(W(j,{title:p}));break;case z:A(z(j,{title:p,list_id:_}))}S()};return Object(Z.jsxs)("div",{className:ct.a.wrapper,children:[Object(Z.jsxs)("button",{className:D?[e,ct.a.hide].join(" "):e,onClick:S,children:["+ ",a]}),Object(Z.jsxs)("div",{className:D?ct.a.composer:[ct.a.composer,ct.a.hide].join(" "),children:[Object(Z.jsx)("textarea",{className:ct.a.textArea,ref:function(t){return t&&t.focus()},placeholder:c,value:p,onKeyPress:function(t){"Enter"===t.key&&p&&v()},onChange:function(t){q(Y,t.target.value)&&R(t.target.value)}}),Object(Z.jsxs)("div",{className:ct.a.control,children:[Object(Z.jsx)("button",{className:ct.a.buttonAdd,onClick:v,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(Z.jsx)("button",{className:ct.a.buttonCancel,onClick:S,children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]})]})]})},st=a(17),it=a.n(st);function ut(t){return Object.keys(t).map((function(e){var a=t[e];return Object(Z.jsx)(nt,Object(_.a)({},a),a.id.toString())}))}function _t(t){var e=t.title,a=t.cards,n=t.id,r=Object(s.c)(),c=Object(u.f)().id;return Object(Z.jsxs)("div",{className:it.a.list,children:[Object(Z.jsxs)("div",{className:it.a.header,children:[Object(Z.jsx)(tt,{className:it.a.title,title:e,entityID:n,action:V}),Object(Z.jsx)("button",{className:it.a.buttonRemoveList,onClick:function(){r(function(t,e){return function(){var a=Object(A.a)(R.a.mark((function a(n){return R.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:h.DELETE_BOARD_LIST}),a.next=4,f.delete("".concat(S.boards,"/").concat(t+S.list,"/").concat(e));case 4:return n({type:h.DELETE_BOARD_LIST_SUCCESS}),a.next=7,n(M(t));case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),n({type:h.DELETE_BOARD_LIST_ERROR,payload:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0441\u043f\u0438\u0441\u043a\u0430"});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(t){return a.apply(this,arguments)}}()}(c,n))},children:Object(Z.jsx)("span",{className:"material-icons ".concat(it.a.icon),children:"delete_forever"})})]}),Object(Z.jsx)("ul",{className:it.a.cards,children:ut(a)}),Object(Z.jsx)(ot,{className:it.a.buttonAddCard,placeholder:"\u0412\u0432\u0435\u0441\u0442\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0434\u043b\u044f \u044d\u0442\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",buttonTitle:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",action:z,listID:n})]})}var lt=a(20),dt=a.n(lt),Dt=function(t){Object(D.a)(a,t);var e=Object(O.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).getBoardID=function(){return t.props.id},t.handlerFocusIn=function(t){t.target.select()},t.handlerFocusOut=function(e){var a=e.target.value.trim(),n=t.props.board;a&&a!==n.title?(0,t.props.setBoardTitle)(t.getBoardID(),a):K(n.title)},t.handlerChangeTitle=function(t){q(Y,t.target.value)&&K(t.target.value)},t.handlerClickEnter=function(t){"Enter"===t.key&&t.currentTarget.blur()},t.handlerDeleteBoard=function(){(0,t.props.deleteBoard)(t.getBoardID())},t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.getBoard)(this.getBoardID())}},{key:"makeLists",value:function(){var t=this.props.board.lists;return Object.keys(t).map((function(e){var a=t[e];return Object(Z.jsx)(_t,Object(_.a)({},a),a.id)}))}},{key:"render",value:function(){var t=this.props.inputs.title;return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsxs)("div",{className:dt.a.header,children:[Object(Z.jsx)(i.b,{to:"/",children:"\u0414\u043e\u043c\u043e\u0439"}),Object(Z.jsx)(E.a,{className:dt.a.input,inputStyle:{fontSize:18},onFocus:this.handlerFocusIn,onBlur:this.handlerFocusOut,onChange:this.handlerChangeTitle,onKeyPress:this.handlerClickEnter,value:t}),Object(Z.jsx)("a",{onClick:this.handlerDeleteBoard,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0434\u043e\u0441\u043a\u0443"})]}),Object(Z.jsx)("div",{className:dt.a.boardCanvas,children:Object(Z.jsxs)("div",{className:dt.a.lists,children:[Object(Z.jsx)(ot,{className:dt.a.buttonAddList,placeholder:"\u0412\u0432\u0435\u0441\u0442\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u043f\u0438\u0441\u043a\u0430",buttonTitle:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a",action:W}),this.makeLists()]})})]})}}]),a}(n.Component),Ot={getBoard:M,setBoardTitle:function(t,e){return function(){var a=Object(A.a)(R.a.mark((function a(n){return R.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:h.UPDATE_BOARD_TITLE}),a.next=4,f.put("".concat(S.boards,"/").concat(t),{title:e});case 4:n({type:h.UPDATE_BOARD_TITLE_SUCCESS,payload:e}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),n({type:h.UPDATE_BOARD_TITLE_ERROR,payload:"\u041f\u0440\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430 \u0434\u043e\u0441\u043a\u0438"});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(t){return a.apply(this,arguments)}}()},editBoardTitle:K,deleteBoard:function(t){return function(){var e=Object(A.a)(R.a.mark((function e(a){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:h.DELETE_BOARD}),e.next=4,f.delete("".concat(S.boards,"/").concat(t));case 4:a({type:h.DELETE_BOARD_SUCCESS,payload:!0}),H.back(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),a({type:h.DELETE_BOARD_ERROR,payload:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0434\u043e\u0441\u043a\u0438"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},addList:W},bt=Object(u.g)(Object(s.b)((function(t,e){return{board:Object(_.a)({},t.board.board),id:e.match.params.id,inputs:{title:t.board.inputs.title}}}),Ot)(Dt)),Et=a(53),pt=a.n(Et);function Rt(t){var e=t.title;return Object(Z.jsx)("div",{className:pt.a.board,children:e})}var At=a(19),jt=a.n(At),St=function(t){var e=t.active,a=t.setActive,n=t.children;return Object(Z.jsx)("div",{className:e?[jt.a.modal,jt.a.active].join(" "):jt.a.modal,onClick:function(){return a(!1)},children:Object(Z.jsx)("div",{className:e?[jt.a.content,jt.a.active].join(" "):jt.a.content,onClick:function(t){t.stopPropagation()},children:n})})},vt=function(t){P(t?{type:y.SHOW_MODAL}:{type:y.HIDE_MODAL})},ht=function(){return function(){var t=Object(A.a)(R.a.mark((function t(e){var a;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e({type:C.UPDATE_BOARDS}),t.next=4,f.get(S.boards);case 4:a=t.sent,e({type:C.UPDATE_BOARDS_SUCCESS,payload:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e({type:C.UPDATE_BOARDS_ERROR,payload:"\u041f\u0440\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0441\u043f\u0438\u0441\u043a\u0430 \u0434\u043e\u0441\u043e\u043a"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},ft=a(34),Tt=a.n(ft),Ct=function(){var t=Object(n.useState)(""),e=Object(J.a)(t,2),a=e[0],r=e[1],c=Object(s.c)(),o=function(){var t;a&&c((t=a.trim(),function(){var e=Object(A.a)(R.a.mark((function e(a){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:C.ADD_BOARDS}),e.next=4,f.post(S.boards,{title:t});case 4:return a({type:C.ADD_BOARDS_SUCCESS}),vt(!1),e.next=8,a(ht());case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a({type:C.ADD_BOARDS_ERROR,payload:"\u041f\u0440\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043d\u043e\u0432\u043e\u0439 \u0434\u043e\u0441\u043a\u0438"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()))};return Object(Z.jsxs)("div",{className:Tt.a.content,children:[Object(Z.jsx)("h3",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0439 \u0434\u043e\u0441\u043a\u0438"}),Object(Z.jsx)(E.a,{injectStyles:!0,className:Tt.a.text,autoFocus:!0,placeholder:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0434\u043e\u0441\u043a\u0438",type:"text",value:a,onKeyPress:function(t){"Enter"===t.key&&o()},onChange:function(t){var e=t.target.value;q(Y,e)&&r(e)}}),Object(Z.jsx)("button",{className:Tt.a.buttonCreate,onClick:o,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u043e\u0441\u043a\u0443"})]})},Bt=a(23),Lt=a.n(Bt),mt=function(t){Object(D.a)(a,t);var e=Object(O.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).onClickAddBoard=function(){vt(!0)},t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=Object(A.a)(R.a.mark((function t(){var e;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.getBoards,t.next=3,e();case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"makeBoards",value:function(){var t=this.props.boards;return null===t||void 0===t?void 0:t.map((function(t){return Object(Z.jsx)(i.b,{to:"/board/".concat(t.id),children:Object(Z.jsx)(Rt,{title:t.title})},t.id)}))}},{key:"render",value:function(){var t=this.props.modal;return Object(Z.jsxs)("div",{className:Lt.a.wrapper,children:[Object(Z.jsx)("h2",{className:Lt.a.title,children:"\u041c\u043e\u0438 \u0414\u043e\u0441\u043a\u0438"}),Object(Z.jsxs)("div",{className:Lt.a.borders,children:[Object(Z.jsx)("button",{className:Lt.a.button,onClick:this.onClickAddBoard,children:"+ C\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u043e\u0441\u043a\u0443"}),this.makeBoards(),Object(Z.jsx)(St,{active:t.active,setActive:vt,children:t.active?Object(Z.jsx)(Ct,{}):null})]})]})}}]),a}(n.Component),xt=Object(s.b)((function(t){return{boards:Object(_.a)({},t.boards.boards).boards,modal:t.modal}}),{getBoards:ht,setModalActive:vt})(mt);function yt(){return Object(Z.jsx)(i.a,{children:Object(Z.jsx)("div",{children:Object(Z.jsxs)(u.c,{children:[Object(Z.jsx)(u.a,{path:"/board/:id",component:bt}),Object(Z.jsx)(u.a,{path:"/",component:xt})]})})})}var It=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,86)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;a(t),n(t),r(t),c(t),o(t)}))};o.a.render(Object(Z.jsx)(r.a.StrictMode,{children:Object(Z.jsx)("div",{className:"container",children:Object(Z.jsx)(s.a,{store:w,children:Object(Z.jsx)(yt,{})})})}),document.getElementById("root")),It()}},[[85,1,2]]]);
//# sourceMappingURL=main.a40cf7b7.chunk.js.map