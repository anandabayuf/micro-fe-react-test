"use strict";(self.webpackChunkproject_bni_dashboard=self.webpackChunkproject_bni_dashboard||[]).push([[8706],{48706:function(e,s,r){r.r(s),r.d(s,{default:function(){return N}});var a=r(34148),t=r(85640),i=r(1413),n=r(15861),o=r(70885),d=r(87757),l=r.n(d),u=r(46759),c=r(55159),m=r(39835),f=r(67630),w=r(7578),p=r(30936),h=r(45470),g=function(){var e=(0,n.Z)(l().mark((function e(s){var r,a,t,i,n,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,w.Z)();case 2:return t=e.sent,i=null!==(r=null===(a=t.content)||void 0===a?void 0:a.publicKey)&&void 0!==r?r:"",n=(0,h.vC)(s.newPassword,i),o={oldPassword:(0,h.vC)(s.oldPassword,i),newPassword:n,confirmNewPassword:n},e.abrupt("return",(0,p.S0)("changepassword","POST",void 0,o));case 7:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),x=r(60851),b=r(32916),j=r(46417),P="gray.500",C=function(e){var s=e.label,r=e.isFulfilled;return(0,j.jsxs)(a.Flex,{gap:2,alignItems:"center",children:[(0,j.jsx)(a.Icon,{as:b.UgA,borderRadius:"full",borderColor:r?"none":P,borderWidth:r?"none":1,boxSize:4,padding:.5,backgroundColor:r?"teal.500":void 0,color:r?"white":P}),(0,j.jsx)(a.Text,{color:r?"teal.500":P,fontSize:"sm",children:s})]})},M=function(e){var s=e.passwordCheckState,r=s.isCapitalExist,i=s.isNumberExist,n=s.isLowerCaseExist,o=s.isSpecialCharExist,d=s.isAboveMinimum,l=s.isBelowMaximum,u=(0,t.useIntl)();return(0,j.jsxs)(a.Grid,{gap:{base:2,md:4},children:[(0,j.jsx)(a.Text,{fontSize:"sm",color:"gray.600",children:(0,j.jsx)(t.FormattedMessage,{id:"passwordRequirement"})}),(0,j.jsxs)(a.Grid,{gap:2,templateColumns:{base:"1fr",md:"2fr 1fr"},children:[(0,j.jsxs)(a.Grid,{templateColumns:"repeat(2, 1fr)",gap:2,children:[(0,j.jsx)(C,{isFulfilled:r,label:u.formatMessage({id:"uppercase"})}),(0,j.jsx)(C,{isFulfilled:i,label:u.formatMessage({id:"number"})}),(0,j.jsx)(C,{isFulfilled:n,label:u.formatMessage({id:"lowercase"})}),(0,j.jsx)(C,{isFulfilled:o,label:u.formatMessage({id:"specialCharacter"})})]}),(0,j.jsxs)(a.Grid,{templateColumns:{base:"repeat(2, 1fr)",md:"1fr"},gap:2,children:[(0,j.jsx)(C,{isFulfilled:d,label:u.formatMessage({id:"minCharacter"})}),(0,j.jsx)(C,{isFulfilled:l,label:u.formatMessage({id:"maxCharacter"})})]})]})]})},v=r(14790),S=r(49016),k=r(78310),y=k.object({oldPassword:k.string().required(),newPassword:k.string().required(),confirmNewPassword:k.string().required().oneOf([k.ref("newPassword")])}),F=/[A-Z]+/,Z=/[a-z]+/,E=/[0-9]+/,V=/[~`\xbf\xa1!#$%^&*\u20ac\xa3@+\xf7=\-[\]\\';,/{}()|\\":<>?._]+/,D=function(){var e=(0,t.useIntl)(),s=(0,c.useNavigate)(),r=(0,x.V)((function(e){return e.setAlert})),d=u.useState(!1),w=(0,o.Z)(d,2),p=w[0],h=w[1],b=function(){var e=(0,S.useForm)({defaultValues:{oldPassword:"",newPassword:"",confirmNewPassword:""},mode:"onChange",resolver:(0,v.X)(y)}),s=e.register,r=e.watch,a=e.getValues,t=e.handleSubmit,i=e.reset,n=e.formState,o=n.isDirty,d=n.isValid,l=r("newPassword"),c=u.useMemo((function(){return F.test(l)}),[l]),m=u.useMemo((function(){return Z.test(l)}),[l]),f=u.useMemo((function(){return E.test(l)}),[l]),w=u.useMemo((function(){return V.test(l)}),[l]),p=u.useMemo((function(){return l.length>=8}),[l]),h=u.useMemo((function(){return l.length<=14}),[l]),g=u.useMemo((function(){return c&&m&&f&&w&&p&&h}),[p,h,c,m,f,w]);return{register:s,getValues:a,handleSubmit:t,watch:r,reset:i,passwordCheckState:u.useMemo((function(){return{isCapitalExist:c,isLowerCaseExist:m,isNumberExist:f,isSpecialCharExist:w,isAboveMinimum:p,isBelowMaximum:h}}),[p,h,c,m,f,w]),isDirty:o,isValid:d&&g}}(),P=b.passwordCheckState,C=b.isDirty,k=b.isValid,D=b.getValues,N=b.reset,G=b.register,I=b.handleSubmit,_=function(){var a=(0,n.Z)(l().mark((function a(){var t;return l().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=D(),h(!0),a.next=4,g(t).then((function(){N(),r({title:e.formatMessage({id:"changePasswordSuccess"}),status:"success",iconPath:"./".concat(f.ur,"/images/icons/new_password.png")}),s("/")})).finally((function(){h(!1)}));case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return(0,j.jsxs)(a.Grid,{gap:4,children:[(0,j.jsx)(m.Z,(0,i.Z)((0,i.Z)({id:"change-password-form-input-current-password"},G("oldPassword")),{},{label:e.formatMessage({id:"currentPassword"}),type:"password",placeholder:e.formatMessage({id:"currentPasswordPlaceholder"}),isDisabled:p})),(0,j.jsx)(M,{passwordCheckState:P}),(0,j.jsx)(m.Z,(0,i.Z)((0,i.Z)({id:"change-password-form-input-new-password"},G("newPassword")),{},{label:e.formatMessage({id:"newPassword"}),type:"password",placeholder:e.formatMessage({id:"newPasswordPlaceholder"}),isDisabled:p})),(0,j.jsx)(m.Z,(0,i.Z)((0,i.Z)({id:"change-password-form-input-repeat-password"},G("confirmNewPassword")),{},{label:e.formatMessage({id:"repeatPassword"}),type:"password",placeholder:e.formatMessage({id:"repeatPasswordPlaceholder"}),isDisabled:p})),(0,j.jsx)(a.Spacer,{height:2}),(0,j.jsx)(a.Button,{id:"change-password-btn",width:"full",onClick:I((function(){D()&&k&&_()})),isDisabled:!C||!k||p,isLoading:p,children:(0,j.jsx)(t.FormattedMessage,{id:"changePassword"})})]})},N=function(){return(0,j.jsx)(a.Flex,{py:8,justifyContent:"center",alignItems:"center",minHeight:{md:"80vh"},width:"full",children:(0,j.jsxs)(a.VStack,{spacing:{base:4,md:8},alignItems:"start",width:{base:"full",md:"initial"},children:[(0,j.jsx)(a.Heading,{marginTop:{base:4,md:0},marginX:{base:4,md:0},fontSize:{base:"2xl",md:"4xl"},children:(0,j.jsx)(t.FormattedMessage,{id:"changePassword"})}),(0,j.jsx)(a.Grid,{gap:16,marginY:{md:"auto"},width:{base:"full",md:400,lg:600},padding:{base:4,md:6},boxShadow:"0px 8px 16px -8px #FCECE2",backgroundColor:"white",borderRadius:{base:0,md:16},children:(0,j.jsx)(D,{})})]})})}}}]);