(this.webpackJsonpstardb=this.webpackJsonpstardb||[]).push([[0],{30:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),s=n(23),i=n.n(s),o=n(4),l=n(6),u=n(8),d=n(7),j=n(14),m=n(3),h=(n(30),function(){return Object(a.jsxs)("div",{className:"header navbar bg-primary d-flex",children:[Object(a.jsx)(j.b,{to:"/",className:"navbar-brand",children:"RICK AND MORTY"}),Object(a.jsxs)("ul",{className:"navbar-nav d-flex",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(j.b,{className:"nav-link",to:"/characters",children:"Characters"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(j.b,{className:"nav-link",to:"/locations",children:"Locations"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(j.b,{className:"nav-link",to:"/episodes",children:"Episodes"})})]})]})}),b=(n(39),function(){return Object(a.jsx)("div",{className:"greeting",children:Object(a.jsxs)("h1",{children:["Welcome to the ",Object(a.jsx)("span",{className:"text-success",children:"RICK AND MORTY"})," world"]})})}),p=(n(40),function(){return Object(a.jsxs)("div",{className:"info jumbotron",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:"text-success",children:"Rick and Morty"})," is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime Adult Swim programming block. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures."]}),Object(a.jsx)("p",{children:"The series originated from an animated short parody film of Back to the Future, created by Roiland for Channel 101, a short film festival co-founded by Harmon. The series has been acclaimed by critics for its originality, creativity and humor."}),Object(a.jsx)("p",{children:Object(a.jsx)("a",{className:"text-muted",href:"https://en.wikipedia.org/wiki/Rick_and_Morty",children:"/ Wikipedia /"})})]})}),f=n(18),O=n(2),x=n.n(O),v=n(13),g=function e(){var t=this;Object(o.a)(this,e),this._apiBase="https://rickandmortyapi.com/api",this._apiEndPoint="?page=",this.getResource=function(){var e=Object(v.a)(x.a.mark((function e(n){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(n));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(n,", response status ").concat(a.status));case 5:return e.abrupt("return",a.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getItemsNumber=function(){var e=Object(v.a)(x.a.mark((function e(n){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(n));case 2:return a=e.sent,e.abrupt("return",a.info.count);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getCharacterNumber=Object(v.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getItemsNumber("/character");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getLocationNumber=Object(v.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getItemsNumber("/location");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getEpisodeNumber=Object(v.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getItemsNumber("/episode");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getAllCharacters=Object(v.a)(x.a.mark((function e(){var n,a,r=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,t.getResource("/character".concat(t._apiEndPoint).concat(n));case 3:return a=e.sent,e.abrupt("return",a.results.map(t._transformCharacter));case 5:case"end":return e.stop()}}),e)}))),this.getCharacter=function(){var e=Object(v.a)(x.a.mark((function e(n){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/character/".concat(n));case 2:return a=e.sent,e.abrupt("return",t._transformCharacter(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllLocations=Object(v.a)(x.a.mark((function e(){var n,a,r=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,t.getResource("/location".concat(t._apiEndPoint).concat(n));case 3:return a=e.sent,e.abrupt("return",a.results.map(t._transformLocation));case 5:case"end":return e.stop()}}),e)}))),this.getLocation=function(){var e=Object(v.a)(x.a.mark((function e(n){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/location/".concat(n));case 2:return a=e.sent,e.abrupt("return",t._transformLocation(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllEpisodes=Object(v.a)(x.a.mark((function e(){var n,a,r=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,t.getResource("/episode".concat(t._apiEndPoint).concat(n));case 3:return a=e.sent,e.abrupt("return",a.results.map(t._transformEpisode));case 5:case"end":return e.stop()}}),e)}))),this.getEpisode=function(){var e=Object(v.a)(x.a.mark((function e(n){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/episode/".concat(n));case 2:return a=e.sent,e.abrupt("return",t._transformEpisode(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._extractNumber=function(e,t){var n="season"===t?/([0-9]{2})/:/([0-9]*)$/;return parseInt(e.match(n)[1])},this._transformCharacter=function(e){return{id:e.id,url:e.image,name:e.name,status:e.status.toLowerCase(),species:e.species,gender:e.gender,location:e.location.name}},this._transformLocation=function(e){return{id:e.id,name:e.name,type:e.type,dimension:e.dimension,residentsNum:e.residents.length}},this._transformEpisode=function(e){return{id:e.id,name:e.name,airDate:e.air_date,seasonNum:t._extractNumber(e.episode,"season"),episodeNum:t._extractNumber(e.episode,"episode")}}},N=(n(42),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).rickMortyApiService=new g,e.state={characterNum:null,locationNum:null,episodeNum:null},e.setNum=function(t,n){t().then((function(t){return e.setState(Object(f.a)({},n,t))})).catch((function(){return null}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.rickMortyApiService,t=e.getCharacterNumber,n=e.getLocationNumber,a=e.getEpisodeNumber;this.setNum(t,"characterNum"),this.setNum(n,"locationNum"),this.setNum(a,"episodeNum")}},{key:"render",value:function(){var e=this.state,t=e.characterNum,n=e.locationNum,r=e.episodeNum;return Object(a.jsxs)("div",{className:"summary jumbotron",children:[Object(a.jsx)("p",{children:"Here you can find information about:"}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[t," characters"]}),Object(a.jsxs)("li",{children:[n," locations"]}),Object(a.jsxs)("li",{children:[r," episodes"]})]}),Object(a.jsxs)("p",{children:["All data is taken from ",Object(a.jsx)("a",{className:"text-muted",href:"https://rickandmortyapi.com/",children:"rickandmortyapi.com"})]})]})}}]),n}(r.Component)),y=(n(43),function(){return Object(a.jsx)("div",{className:"loadingio-spinner-gear-gxwz86e2l5v",children:Object(a.jsx)("div",{className:"ldio-amcxzmu8j7",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]})})})}),k=(n(44),n.p+"static/media/rick.07c5dd42.jpg"),I=function(){return Object(a.jsxs)("div",{className:"error-indicator",children:[Object(a.jsx)("span",{className:"text-success",children:"Oops!"}),Object(a.jsx)("span",{className:"text-success",children:"Something went wrong"}),Object(a.jsx)("img",{src:k,alt:"error icon"})]})},w=(n(45),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).rickMortyApiService=new g,e.state={character:{},loading:!0},e.onCharacterLoaded=function(t){e.setState({character:t,loading:!1,error:!1})},e.onError=function(){e.setState({loading:!1,error:!0})},e.onLoading=function(){e.setState({loading:!0})},e.updateCharacter=function(){e.onLoading();var t=Math.round(.5+671*Math.random());e.rickMortyApiService.getCharacter(t).then(e.onCharacterLoaded).catch(e.onError)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.updateCharacter(),this.interval=setInterval(this.updateCharacter,1e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.character,n=e.loading,r=e.error,c=!(n||r),s=n?Object(a.jsx)(y,{}):null,i=r?Object(a.jsx)(I,{}):null,o=c?Object(a.jsx)(C,{character:t}):null;return Object(a.jsxs)("div",{className:"random-character jumbotron d-flex",children:[s,i,o]})}}]),n}(r.Component)),C=function(e){var t=e.character,n=t.url,c=t.name,s=t.status,i=t.species,o=t.gender,l=t.location,u="alive"===s?"green":"dead"===s?"red":"orange";return Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)("img",{className:"character-image",alt:"avatar",src:n}),Object(a.jsxs)("div",{className:"character-info",children:[Object(a.jsx)("h4",{className:"text-warning",children:c}),Object(a.jsxs)("div",{className:"status d-flex",children:[Object(a.jsx)("div",{className:u}),Object(a.jsxs)("p",{children:[s," - ",i]})]}),Object(a.jsxs)("div",{className:"section first-seen",children:[Object(a.jsx)("span",{className:"text-muted",children:"gender:"}),Object(a.jsx)("p",{children:o})]}),Object(a.jsxs)("div",{className:"section last-location",children:[Object(a.jsx)("span",{className:"text-muted",children:"last known location:"}),Object(a.jsx)("p",{children:l})]})]})]})},L=w,S=(n(46),function(e){var t=e.left,n=e.right;return Object(a.jsxs)("div",{className:"details-container row mb2",children:[Object(a.jsx)("div",{className:"col-md-6",children:t}),Object(a.jsx)("div",{className:"col-md-6",children:n})]})}),D=function(){return Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)(b,{}),Object(a.jsx)(p,{}),Object(a.jsx)(S,{left:Object(a.jsx)(N,{}),right:Object(a.jsx)(L,{})})]})},E=(n(47),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={selectedItem:null},e.onItemSelected=function(t){e.setState({selectedItem:t})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.ListContainer,n=e.ItemDetails,r=this.state.selectedItem;return Object(a.jsx)(S,{left:Object(a.jsx)(t,{onItemSelected:this.onItemSelected}),right:Object(a.jsx)(n,{selectedItem:r})})}}]),n}(r.Component)),P=(n(48),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={item:null,loading:!0},e.onError=function(){e.setState({loading:!1,error:!0})},e.onLoading=function(){e.setState({loading:!0})},e.updateItem=function(){var t=e.props,n=t.itemId,a=t.getData;n&&a(n).then((function(t){e.setState({item:t,loading:!1,error:!1})})).catch(e.onError)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.updateItem()}},{key:"componentDidUpdate",value:function(e){this.props.itemId!==e.itemId&&(this.onLoading(),this.updateItem())}},{key:"render",value:function(){var e=this.state,t=e.item,n=e.loading,r=e.error;if(!t)return Object(a.jsx)("span",{children:"Select an item from the list"});var c=!(n||r),s=n?Object(a.jsx)(y,{}):null,i=r?Object(a.jsx)(I,{}):null,o=c?Object(a.jsx)(A,{item:t}):null;return Object(a.jsxs)("div",{className:"random-character jumbotron d-flex",children:[s,i,o]})}}]),n}(r.Component)),A=function(e){var t=e.item,n=t.url,c=t.name,s=t.status,i=t.species,o=t.gender,l=t.location,u="alive"===s?"green":"dead"===s?"red":"orange";return Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)("img",{className:"character-image",alt:"avatar",src:n}),Object(a.jsxs)("div",{className:"character-info",children:[Object(a.jsx)("h4",{className:"text-warning",children:c}),Object(a.jsxs)("div",{className:"status d-flex",children:[Object(a.jsx)("div",{className:u}),Object(a.jsxs)("p",{children:[s," - ",i]})]}),Object(a.jsxs)("div",{className:"section first-seen",children:[Object(a.jsx)("span",{className:"text-muted",children:"gender:"}),Object(a.jsx)("p",{children:o})]}),Object(a.jsxs)("div",{className:"section last-location",children:[Object(a.jsx)("span",{className:"text-muted",children:"last known location:"}),Object(a.jsx)("p",{children:l})]})]})]})},_=P,M=(n(49),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={item:null},e.onError=function(){e.setState({error:!0})},e.updateItem=function(){var t=e.props,n=t.itemId,a=t.getData;n&&a(n).then((function(t){e.setState({item:t,error:!1})})).catch(e.onError)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.updateItem()}},{key:"componentDidUpdate",value:function(e){this.props.itemId!==e.itemId&&this.updateItem()}},{key:"render",value:function(){var e=this.state,t=e.item,n=e.error,s=this.props.detailsTitle;if(!t)return Object(a.jsx)("span",{children:"Select an item from the list"});var i=Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)("h4",{className:"card-title",children:t.name}),Object(a.jsx)("ul",{children:r.Children.map(this.props.children,(function(e){return c.a.cloneElement(e,{item:t})}))})]}),o=n?Object(a.jsx)(I,{}):i;return Object(a.jsxs)("div",{className:"item-details card border-primary mb-3",children:[Object(a.jsx)("div",{className:"card-header",children:s}),Object(a.jsx)("div",{className:"card-body",children:o})]})}}]),n}(r.Component)),R=(n(50),function(e){var t=e.item,n=e.field,r=e.label;return Object(a.jsxs)("li",{children:[Object(a.jsxs)("span",{className:"text-muted",children:[r,":"]})," ",t[n]]})}),T=new g,B=T.getCharacter,F=T.getLocation,U=T.getEpisode,z=function(e){var t=e.selectedItem;return Object(a.jsx)(_,{getData:B,itemId:t})},H=function(e){var t=e.selectedItem;return Object(a.jsxs)(M,{getData:U,itemId:t,detailsTitle:"Episode",children:[Object(a.jsx)(R,{label:"air date",field:"airDate"}),Object(a.jsx)(R,{label:"season",field:"seasonNum"}),Object(a.jsx)(R,{label:"episode",field:"episodeNum"})]})},J=function(e){var t=e.selectedItem;return Object(a.jsxs)(M,{getData:F,itemId:t,detailsTitle:"Location",children:[Object(a.jsx)(R,{label:"type",field:"type"}),Object(a.jsx)(R,{label:"dimension",field:"dimension"}),Object(a.jsx)(R,{label:"number of residents",field:"residentsNum"})]})},W=n(9),K=(n(51),function(e){var t=e.data,n=e.children,r=e.onItemSelected,c=t.map((function(e){var t=e.id,c=n(e);return Object(a.jsx)("li",{onClick:function(){return r(t)},className:"list-group-item d-flex justify-content-between align-items-center",children:c},t)}));return Object(a.jsx)("div",{className:"item-list",children:Object(a.jsx)("ul",{className:"list-group",children:c})})}),Y=n(17),$=(n(52),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={listPosition:0},e.onPaginationBtnClick=function(t){var n=e.props.paginationData.length,a="increase"===t?35:-35,r=-35*(n-5);e.setState((function(e){var t=e.listPosition,n=t-a;return n<=0&&n>=r?{listPosition:n}:{listPosition:t}}))},e.setStyle=function(t){var n=-35*(e.props.paginationData.length-5),a="increase"===t?n:0;return{color:e.state.listPosition===a?"lightgray":"black"}},e.createList=function(t){var n=e.props.onPageSelected;return t.map((function(e){var t=e.label,r=e.selected?"list-item selected":"list-item";return Object(a.jsx)("li",{className:r,onClick:function(){return n(t)},children:t},t)}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.paginationData;if(!t)return null;var n=this.createList(t);if(t.length<=5)return Object(a.jsx)("div",{className:"pagination d-flex",children:Object(a.jsx)("ul",{className:"pagination-page-list",children:n})});var r=this.state.listPosition,c={left:"".concat(r,"px")},s=this.setStyle("increase"),i=this.setStyle("decrease");return Object(a.jsxs)("div",{className:"pagination d-flex",children:[Object(a.jsx)("div",{className:"pagination-btn",style:i,onClick:function(){return e.onPaginationBtnClick("decrease")},children:"\xab"}),Object(a.jsx)("div",{className:"pagination-list-container",children:Object(a.jsx)("ul",{className:"pagination-page-list",style:c,children:n})}),Object(a.jsx)("div",{className:"pagination-btn",style:s,onClick:function(){return e.onPaginationBtnClick("increase")},children:"\xbb"})]})}}]),n}(r.Component)),q=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={paginationData:null,selectedPage:1},e.getPaginationData=function(){(0,e.props.getItemNum)().then((function(t){e.setState((function(e){return{paginationData:Object(Y.a)(Array(Math.ceil(t/20))).map((function(t,n){return{label:++n,selected:n===e.selectedPage}}))}}))})).catch((function(){return e.setState({error:!0})}))},e.changeItem=function(e,t,n){var a=e.findIndex((function(e){return e.label===t}));return[].concat(Object(Y.a)(e.slice(0,a)),[Object(W.a)(Object(W.a)({},e[a]),{},{selected:n})],Object(Y.a)(e.slice(a+1)))},e.onPageSelected=function(t){var n=e.state,a=n.paginationData,r=n.selectedPage,c=Object(Y.a)(a),s=e.changeItem(c,r,!1),i=e.changeItem(s,t,!0);e.setState({paginationData:i,selectedPage:t})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getPaginationData()}},{key:"render",value:function(){var e=this.state,t=e.selectedPage,n=e.paginationData,r=this.props,c=r.List,s=r.onItemSelected;return Object(a.jsxs)("div",{className:"list-container",children:[Object(a.jsx)(c,{onItemSelected:s,pageId:t}),Object(a.jsx)($,{paginationData:n,onPageSelected:this.onPageSelected})]})}}]),n}(r.Component),G=function(e,t){return function(n){Object(u.a)(s,n);var c=Object(d.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=c.call.apply(c,[this].concat(a))).state={itemList:null},e.onItemListLoaded=function(t){e.setState({itemList:t,error:!1})},e.onError=function(){e.setState({error:!0})},e.updateItemList=function(){t(e.props.pageId).then(e.onItemListLoaded).catch(e.onError)},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.updateItemList()}},{key:"componentDidUpdate",value:function(e){this.props.pageId!==e.pageId&&this.updateItemList()}},{key:"render",value:function(){var t=this.state,n=t.itemList,c=t.error;if(!n)return null;var s=Object(a.jsx)(e,Object(W.a)(Object(W.a)({},this.props),{},{data:n})),i=c?Object(a.jsx)(I,{}):s;return Object(a.jsx)(r.Fragment,{children:i})}}]),s}(r.Component)},Q=new g,V=Q.getAllCharacters,X=Q.getAllLocations,Z=Q.getAllEpisodes,ee=Q.getCharacterNumber,te=Q.getLocationNumber,ne=Q.getEpisodeNumber,ae=function(e,t){return function(n){return Object(a.jsx)(e,Object(W.a)(Object(W.a)({},n),{},{children:t}))}},re=function(e){return Object(a.jsx)("p",{children:e.name})},ce=G(ae(K,re),V),se=G(ae(K,re),X),ie=G(ae(K,(function(e){return Object(a.jsxs)("p",{children:[e.name," ",Object(a.jsxs)("span",{className:"text-muted",children:["episode ",e.id]})]})})),Z),oe=function(e){return Object(a.jsx)(q,Object(W.a)(Object(W.a)({},e),{},{List:ce,getItemNum:ee}))},le=function(e){return Object(a.jsx)(q,Object(W.a)(Object(W.a)({},e),{},{List:se,getItemNum:te}))},ue=function(e){return Object(a.jsx)(q,Object(W.a)(Object(W.a)({},e),{},{List:ie,getItemNum:ne}))},de=function(){return Object(a.jsx)(E,{ListContainer:oe,ItemDetails:z})},je=function(){return Object(a.jsx)(E,{ListContainer:le,ItemDetails:J})},me=function(){return Object(a.jsx)(E,{ListContainer:ue,ItemDetails:H})},he=(n(53),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(j.a,{children:Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(h,{}),Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)(m.c,{children:[Object(a.jsx)(m.a,{path:"/",exact:!0,component:D}),Object(a.jsx)(m.a,{path:"/characters",component:de}),Object(a.jsx)(m.a,{path:"/locations",component:je}),Object(a.jsx)(m.a,{path:"/episodes",component:me}),Object(a.jsx)(m.a,{render:function(){return Object(a.jsx)("h2",{children:"Page not found"})}})]})})]})})}}]),n}(r.Component));i.a.render(Object(a.jsx)(he,{}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.ebd2f46c.chunk.js.map