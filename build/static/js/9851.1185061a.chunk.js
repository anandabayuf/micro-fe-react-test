"use strict";(self.webpackChunkproject_bni_dashboard=self.webpackChunkproject_bni_dashboard||[]).push([[9851],{24602:function(e,n,t){t.d(n,{Z:function(){return k}});var r=t(34148),o=t(85640),a=t(1413),i=t(42982),s=t(15861),c=t(70885),l=t(87757),d=t.n(l),u=t(46759),g=t(32916),p=t(30936),h=t(79032),m=function(e){return(0,p.by)("/public/bannercarousel/"+e,h.Ik.GET,void 0,void 0)},f=t(46417),x=function(e){var n=e.wrapperProps,t=e.id,o=(0,u.useState)([]),l=(0,c.Z)(o,2),p=(l[0],l[1]),h=function(){var e=(0,s.Z)(d().mark((function e(n){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m(n);case 3:return(t=e.sent).content&&p((function(e){return[].concat((0,i.Z)(e),[t.content])})),e.abrupt("return",t.content);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}();return(0,u.useMemo)((function(){var e=Array.from({length:5},(function(e,n){return n+1}));Promise.all(e.map((function(e){return h(e)})))}),[]),(0,f.jsxs)(r.Flex,(0,a.Z)((0,a.Z)({maxWidth:{md:1e3},overflow:"hidden",marginTop:{base:-8,md:-12},alignItems:"center",justifyContent:"center"},n),{},{children:[(0,f.jsx)(r.IconButton,{id:"".concat(t,"-carousel-prev-btn"),"aria-label":"prev",backgroundColor:"orange.500",_hover:{bg:"orange.600"},color:"white",icon:(0,f.jsx)(g.Ao2,{size:24,fontWeight:700}),className:"carousel-button-prev",zIndex:2,marginRight:-10,display:{base:"none",md:"inherit"}}),(0,f.jsx)(r.IconButton,{id:"".concat(t,"-carousel-next-btn"),"aria-label":"next",bg:"orange.500",width:12,_hover:{bg:"orange.600"},color:"white",icon:(0,f.jsx)(g.Rgz,{size:24,fontWeight:700}),className:"carousel-button-next",marginLeft:-10,zIndex:2,display:{base:"none",md:"inherit"}})]}))},b=t(67630),v="./".concat(b.ur,"/images/banners/"),j=["banner1.png","banner2.png","banner3.png","banner4.png"].map((function(e){return"".concat(v).concat(e)})),k=function(e){var n=e.children,t="\n    radial-gradient(\n      55% 41.59% at 50% 49.47%, \n      rgba(0, 102, 119, 0) 0%, \n      #006677 100%\n    ), \n    url('./".concat(b.ur,"/images/homepage.png')\n  ");return(0,f.jsxs)(r.Flex,{flexDirection:"column",px:{lg:32,sm:22},gap:{base:8,md:20},justifyContent:"center",alignItems:"center",my:{base:0,md:20},children:[(0,f.jsx)(r.Box,{backgroundImage:t,backgroundPosition:"center",backgroundRepeat:"no-repeat",maxH:{lg:"130vh",xl:"150vh","2xl":"120vh"},backgroundSize:"cover",bgPosition:"top",position:"absolute",display:{base:"none",md:"block"},top:0,left:0,width:"100%",height:"100%",zIndex:-1}),(0,f.jsxs)(r.Grid,{templateColumns:{base:"1fr",md:"7fr 5fr"},gap:{sm:12,xl:28},width:"full",alignItems:"flex-start",children:[(0,f.jsx)(r.Flex,{}),(0,f.jsx)(r.Grid,{paddingY:{base:8},paddingX:{base:4,md:8},backgroundColor:"white",borderRadius:{md:16},gap:8,alignSelf:"end",children:n})]}),(0,f.jsxs)(r.Flex,{flexDirection:"column",gap:"8",width:"full",paddingBottom:{base:20,md:0},alignItems:{xl:"center"},children:[(0,f.jsx)(r.Heading,{fontSize:"3xl",textAlign:"center",textColor:{md:"white"},children:(0,f.jsx)(o.FormattedMessage,{id:"Promotion"})}),(0,f.jsx)(x,{images:j,id:"promotion-banner"})]})]})}},29851:function(e,n,t){t.r(n),t.d(n,{default:function(){return B}});var r=t(24602),o=t(1413),a=t(15861),i=t(70885),s=t(87757),c=t.n(s),l=t(34148),d=t(14790),u=t(46759),g=t(49016),p=t(32916),h=t(85640),m=t(55159),f=t(65871),x=t(10190),b=t(39835),v=t(51265),j=t(79032),k=t(78622),I=t(7578),w=t(30936),y=t(45470),Z=function(){var e=(0,a.Z)(c().mark((function e(n){var t,r,a,i,s,l,d;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.username,i=n.password,s=n.captcha,e.next=3,(0,I.Z)();case 3:return l=e.sent,d=null!==(t=null===(r=l.content)||void 0===r?void 0:r.publicKey)&&void 0!==t?t:"",e.abrupt("return",(0,k._)({url:"".concat(j.H,"/").concat("login"),method:"POST",headers:(0,o.Z)((0,o.Z)({},w.Pk),{},{Authorization:(0,y.bS)(a,i,d),companyId:n.companyId,otp:(0,y.vC)(s,d)})}));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),C=Z,F=t(32231),S=t(76291),L=t.n(S),M=t(39009),z=L()()((0,M.tJ)((function(e){return{image:"",setImage:function(n){return e({image:n})},clear:function(){return e({image:""})}}}),{name:"captcha"})),P=t(78310),_=P.object({companyId:P.string().required(),username:P.string().required(),password:P.string().required(),captcha:P.string().optional()}),D=t(46417),T=function(){var e=(0,h.useIntl)(),n=(0,f.useSWRConfig)().cache,t=z(),r=t.image,s=t.setImage,I=u.useState(!1),w=(0,i.Z)(I,2),Z=w[0],S=w[1],L=u.useState(!1),M=(0,i.Z)(L,2),P=M[0],T=M[1],B=u.useState(null),G=(0,i.Z)(B,2),H=G[0],R=G[1],W=u.useState(0),A=(0,i.Z)(W,2),q=A[0],E=A[1],X=(0,F.a)((function(e){return[e.token,e.setToken,e.setCompanyId,e.setUser,e.setFirstTimeLogin]}),x.Z),N=(0,i.Z)(X,5),V=N[0],Y=N[1],J=N[2],K=N[3],O=N[4],U=(0,g.useForm)({mode:"onChange",resolver:(0,d.X)(_)}),Q=U.register,$=U.handleSubmit,ee=U.getValues,ne=U.formState,te=ne.isDirty,re=ne.isValid,oe=function(){var e=(0,a.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=ee(),S(!0),e.next=4,(t={corporateId:n.companyId,userId:n.username},(0,k._)({url:"".concat(j.H,"/").concat("public/captcha","/").concat(t.corporateId,"/").concat(t.userId),method:j.Ik.GET})).then((function(e){var n,t,r=null===e||void 0===e||null===(n=e.content)||void 0===n?void 0:n.otp,o=null===e||void 0===e||null===(t=e.content)||void 0===t?void 0:t.requestInterval;s(r),E(o)})).finally((function(){S(!1)}));case 4:case"end":return e.stop()}var t}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=ee(),n.clear(),!re||!t){e.next=6;break}return S(!0),e.next=6,C((0,o.Z)((0,o.Z)({},t),{},{captcha:H})).then((function(e){var n,r=null===e||void 0===e||null===(n=e.headers)||void 0===n?void 0:n.access_token;J(t.companyId),K((0,y.aj)(r)),Y(r),O(!0)})).catch((function(){oe(),R(null)})).finally((function(){S(!1)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return u.useEffect((function(){var e=setInterval((function(){q>0&&E(q-1)}),1e3);return function(){return clearInterval(e)}}),[q]),V?(0,D.jsx)(v.Z,{}):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(l.HStack,{children:[P&&(0,D.jsx)(l.Button,{id:"login-form-back-btn",variant:"ghost",color:"gray.400",leftIcon:(0,D.jsx)(p.Ao2,{size:24}),paddingX:0,_hover:{bgColor:"transparent"},onClick:function(){return T(!1)}}),(0,D.jsx)(l.Heading,{fontSize:"2xl",children:(0,D.jsx)(h.FormattedMessage,{id:"loginTitle"})})]}),(0,D.jsxs)(l.Flex,{gap:4,direction:"column",children:[(0,D.jsxs)(l.Grid,{gap:4,children:[(0,D.jsx)(b.Z,(0,o.Z)({id:"login-form-input-corporate-id",label:(0,D.jsx)(h.FormattedMessage,{id:"corpIdLoginLabel"}),placeholder:e.formatMessage({id:"corpIdLoginPlaceholder"}),isDisabled:P},Q("companyId"))),(0,D.jsx)(b.Z,(0,o.Z)({id:"login-form-input-user-id",label:(0,D.jsx)(h.FormattedMessage,{id:"userIdLoginLabel"}),placeholder:e.formatMessage({id:"userIdLoginPlaceholder"}),isDisabled:P},Q("username"))),(0,D.jsx)(b.Z,(0,o.Z)({id:"login-form-input-password",label:(0,D.jsx)(h.FormattedMessage,{id:"passwordLoginLabel"}),placeholder:e.formatMessage({id:"passwordLoginPlaceholder"}),isDisabled:P,type:"password"},Q("password"))),P&&(0,D.jsxs)(l.Flex,{flexDirection:"column",gap:4,mt:4,children:[(0,D.jsx)(l.Box,{backgroundImage:'url("data:image/png;base64,'.concat(r,'")'),backgroundRepeat:"no-repeat",bgPosition:"center left",bgSize:"75%",width:"50%",height:12}),(0,D.jsx)(l.Flex,{gap:8,children:q>0?(0,D.jsx)(l.Text,{color:"GrayText",children:(0,D.jsx)(h.FormattedMessage,{id:"refreshCaptchaInSecond",values:{count:q}})}):(0,D.jsx)(l.Link,{id:"login-form-refresh-captcha-link",color:"orange.500",fontWeight:"bold",onClick:function(){return oe()},children:(0,D.jsx)(h.FormattedMessage,{id:"refreshCaptcha"})})}),(0,D.jsx)(b.Z,{id:"login-form-input-captcha",onChange:function(e){return R(e.target.value)},placeholder:e.formatMessage({id:"captcha"}),value:null!==H&&void 0!==H?H:""})]})]}),(0,D.jsx)(l.Divider,{borderColor:"orange.100",marginY:8}),(0,D.jsxs)(l.Flex,{alignItems:"center",gap:"8",justifyContent:"space-between",children:[(0,D.jsx)(l.Link,{id:"login-form-forgot-password-link",as:m.Link,to:"/forgot-password",fontWeight:"bold",color:"orange.500",children:(0,D.jsx)(h.FormattedMessage,{id:"forgotPasswordTitle"})}),P?(0,D.jsx)(l.Button,{id:"login-btn",color:"white",isDisabled:!te||!re||Z||!H,isLoading:Z,_hover:{backgroundColor:"gray.600"},onClick:$(ae),width:{base:40,md:180},children:(0,D.jsx)(h.FormattedMessage,{id:"login"})}):(0,D.jsx)(l.Button,{id:"login-form-next-btn",color:"white",isDisabled:!te||!re||Z,isLoading:Z,_hover:{backgroundColor:"gray.600"},onClick:function(){oe(),T(!0)},width:{base:40,md:180},children:(0,D.jsx)(h.FormattedMessage,{id:"next"})})]})]})]})},B=function(){return(0,D.jsx)(r.Z,{children:(0,D.jsx)(T,{})})}}}]);