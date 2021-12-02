(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3iRwM",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3dOln","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__3CMUD"}},12:function(e,t,a){e.exports={ButtonPos:"Button_ButtonPos__tVTNi",Button:"Button_Button__2BYYQ"}},15:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2Ep_q"}},16:function(e,t,a){},17:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2s6Dc"}},18:function(e,t,a){e.exports={Loader:"Loader_Loader__3w7V8"}},20:function(e,t,a){e.exports={Message:"Message_Message__2fF6f"}},26:function(e,t,a){e.exports={App:"App_App__15LM-"}},49:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(8),c=a.n(o),s=(a(25),a(26),a(13)),i=a(3),l=a(4),u=a(6),h=a(5),m=a(14),d=a(7),j=a.n(d),p=a(0),g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleInput=function(t){var a=t.currentTarget,n=a.name,r=a.value;e.setState(Object(m.a)({},n,r))},e.handleSumbit=function(t){t.preventDefault();var a=e.props.onSearch,n=e.state.query;""!==n.trim()&&n&&(a(n),e.resetForm())},e.resetForm=function(){return e.setState({query:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{className:j.a.SearchForm,onSubmit:this.handleSumbit,children:[Object(p.jsx)("button",{type:"submit",className:j.a.SearchFormButton,children:Object(p.jsx)("span",{className:j.a.SearchFormButtonLabel,children:"Search"})}),Object(p.jsx)("input",{className:j.a.SearchFormInput,type:"text",name:"query",value:this.state.query,onChange:this.handleInput,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),b=g,f=a(15),y=a.n(f),_=function(e){var t=e.onSearch;return Object(p.jsx)("header",{className:y.a.Searchbar,children:Object(p.jsx)(b,{onSearch:t})})},O=a(9),v=a.n(O),x=document.querySelector("#modal-root"),S=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleClickBack=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(p.jsx)("div",{className:v.a.Overlay,onClick:this.handleClickBack,children:Object(p.jsxs)("div",{className:v.a.Modal,children:[Object(p.jsx)("div",{className:v.a.Modal__content,children:this.props.children}),Object(p.jsx)("img",{src:"",alt:""})]})}),x)}}]),a}(n.Component),I=S,w=a(2),M=a.n(w),k=a(16),F=a.n(k),C=function(e){var t=e.children;return Object(p.jsx)("div",{className:F.a.container,children:t})};C.defaultProps={children:[]},C.protoTypes={children:M.a.node};var L=C,B=a(17),N=a.n(B),P=a(11),G=a.n(P),q=function(e){var t=e.image,a=e.onClick;return Object(p.jsx)("li",{className:G.a.ImageGalleryItem,children:Object(p.jsx)("img",{className:G.a.ImageGalleryItemImage,src:t.webformatURL,alt:t.tags,onClick:function(){return a(t.largeImageURL)}})})};q.defaultProps={tags:""};var Q=q,D=function(e){var t=e.images,a=e.onClick;return Object(p.jsx)("ul",{className:N.a.ImageGallery,children:t.map((function(e){return Object(p.jsx)(Q,{image:e,onClick:a},e.id)}))})},A=a(12),E=a.n(A),U=function(e){var t=e.onClick;return Object(p.jsx)("div",{className:E.a.ButtonPos,children:Object(p.jsx)("button",{type:"button",className:E.a.Button,onClick:t,children:"Load more"})})},T=a(18),z=a.n(T),K=(a(30),a(19)),R=a.n(K),J=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{className:z.a.Loader,children:Object(p.jsx)(R.a,{type:"Oval",color:"#00BFFF",height:40,width:40,timeout:1500})})}}]),a}(n.Component),V=J,Y=a(20),H=a.n(Y),W=function(e){var t=e.children;return Object(p.jsx)("div",{className:H.a.Message,children:t})};W.defaultProps={children:[]};var X=W,Z=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],currentPage:1,searchQuery:"",showModal:!1,isLoading:!1,largeImage:"",error:null},e.onSearchQuery=function(t){e.setState({images:[],currentPage:1,searchQuery:t})},e.toogleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.loadMore=function(){e.setState((function(e){return{currentPage:e.currentPage+1}}));var t=e.state,a=t.searchQuery,n=t.currentPage,r="".concat("https://pixabay.com/api/","?q=").concat(a,"&page=").concat(n,"&key=").concat("23511418-9a5fcf3a7b36a31c6f256788e","&image_type=photo&orientation=horizontal&per_page=12");fetch(r).then((function(e){return e.json()})).then((function(t){e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t.hits)),isLoading:!0}}))})).finally(e.setState({isLoading:!1}))},e.largeImage=function(t){e.setState({largeImage:t,showModal:!0})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state,r=n.searchQuery,o=n.currentPage,c="".concat("https://pixabay.com/api/","?q=").concat(r,"&page=").concat(o,"&key=").concat("23511418-9a5fcf3a7b36a31c6f256788e","&image_type=photo&orientation=horizontal&per_page=12");window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),t.searchQuery!==this.state.searchQuery&&(this.setState({isLoading:!0}),fetch(c).then((function(e){return e.ok?e.json():Promise.reject(new Error("Name pictures ".concat(r," do not find")))})).then((function(e){a.setState({images:e.hits,currentPage:o+1})})).catch((function(e){return a.setState({error:e})})))}},{key:"render",value:function(){var e=this.state,t=e.showModal,a=e.images,n=e.isLoading,r=e.largeImage,o=e.error;return Object(p.jsxs)(L,{children:[o&&Object(p.jsx)("h1",{children:o.message}),Object(p.jsx)(_,{onSearch:this.onSearchQuery}),a.length<1&&Object(p.jsxs)(X,{children:[Object(p.jsx)("h2",{children:"Please search your pictures"}),Object(p.jsx)("p",{children:"Search form is emply"})]}),Object(p.jsx)(D,{images:a,onClick:this.largeImage}),t&&Object(p.jsx)(I,{onClose:this.toogleModal,children:Object(p.jsx)("img",{src:r,alt:""})}),Object(p.jsx)(U,{onClick:this.loadMore}),n&&Object(p.jsx)(V,{})]})}}]),a}(n.Component),$=Z;c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)($,{})}),document.querySelector("#root"))},7:function(e,t,a){e.exports={SearchForm:"SearchForm_SearchForm__1feKi",SearchFormButton:"SearchForm_SearchFormButton__3licz",SearchFormButtonLabel:"SearchForm_SearchFormButtonLabel__28PMO",SearchFormInput:"SearchForm_SearchFormInput__3EsiU"}},9:function(e,t,a){e.exports={Overlay:"Modal_Overlay__21j6m",Modal:"Modal_Modal__32mLz",Modal__content:"Modal_Modal__content__1AuX7"}}},[[49,1,2]]]);
//# sourceMappingURL=main.83973c2a.chunk.js.map