"use strict";(self.webpackChunkproject_bni_dashboard=self.webpackChunkproject_bni_dashboard||[]).push([[457,998],{6457:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var i=n(885),a=n(4148),o=n(6759),s=n(5640),r=n(2789),d=n(5159),l=n(5610),c=n(8916),u=n(6417),x=function(e){var t=e.myApprovalList,n=e.mutate,x=e.id,p=(0,s.useIntl)(),h=(0,a.useToast)(),g=(0,o.useState)(!1),f=(0,i.Z)(g,2),m=f[0],j=f[1];return(0,u.jsx)(a.Box,{boxShadow:"0px 8px 16px -8px #FCECE2",backgroundColor:"white",borderRadius:{base:0,md:16},p:6,children:(0,u.jsxs)(a.VStack,{children:[(0,u.jsx)(a.Box,{width:"full",children:(0,u.jsx)(a.Text,{color:"black",fontSize:18,fontWeight:"bold",children:(0,u.jsx)(s.FormattedMessage,{id:t.moduleName})})}),(0,u.jsxs)(a.Flex,{width:"full",flexWrap:"wrap",justifyContent:"space-between",children:[(0,u.jsxs)(a.Stack,{spacing:2,children:[(0,u.jsx)(a.Text,{fontSize:"sm",opacity:"50%",children:(0,u.jsx)(s.FormattedMessage,{id:"date"})}),(0,u.jsx)(a.Text,{fontSize:"md",children:(0,r.format)(new Date(t.createdDate),"dd-MMMM-yyyy")})]}),(0,u.jsxs)(a.Stack,{spacing:2,children:[(0,u.jsx)(a.Text,{fontSize:"sm",opacity:"50%",children:(0,u.jsx)(s.FormattedMessage,{id:"id"})}),(0,u.jsx)(a.Text,{fontSize:"md",children:t.orderId})]}),(0,u.jsxs)(a.Stack,{spacing:2,children:[(0,u.jsx)(a.Text,{fontSize:"sm",opacity:"50%",children:(0,u.jsx)(s.FormattedMessage,{id:"createdby"})}),(0,u.jsx)(a.Text,{fontSize:"md",children:t.createdByUsername})]})]}),(0,u.jsx)(a.Flex,{pt:4,w:"full",justifyContent:"flex-end",children:(0,u.jsxs)(a.Stack,{w:["full","auto"],alignItems:"center",direction:["column","column","row"],spacing:4,children:[(0,u.jsx)(a.Box,{mt:[4,4,0],w:"full",children:(0,u.jsx)(d.Link,{to:"/my-approval/".concat(t.id),children:(0,u.jsx)(a.Button,{id:"".concat(x,"-detail-btn"),w:"full",variant:"outline",color:"teal.500",borderColor:"teal.500",fontWeight:700,children:(0,u.jsx)(s.FormattedMessage,{id:"detail"})})})}),(0,u.jsxs)(a.Stack,{spacing:4,w:"full",direction:"row",children:[(0,u.jsx)(l.N,{id:t.id,mutate:n,componentId:x}),(0,u.jsx)(a.Button,{id:"".concat(x,"-approve-btn"),minW:"120px",w:"full",onClick:function(){j(!0);var e={id:t.id};(0,c.t)(e).then((function(){n(),h({description:p.formatMessage({id:"approveTaskSuccess"}),status:"success",duration:5e3,isClosable:!0})})).finally((function(){j(!1)}))},isLoading:m,children:(0,u.jsx)(s.FormattedMessage,{id:"approve"})})]})]})})]})})},p=n(4098),h=function(e){var t=e.currentPageIndex,n=void 0===t?0:t,i=e.listPageSize,o=e.currentPageSize,r=e.onNextPage,d=e.onPrevPage,l=e.countData,c=e.selectPageIndex,x=e.selectedListperPage,h=e.id,g=Math.ceil(l/o),f=function(e){return function(){return c(e)}};return(0,u.jsxs)(a.Flex,{justify:"space-between",flexDir:{base:"column-reverse",md:"row"},alignItems:"center",children:[(0,u.jsxs)(a.Flex,{gap:4,alignItems:"center",display:"flex",width:"100%",children:[(0,u.jsx)(a.Text,{fontWeight:400,fontSize:"sm",color:"gray.600",children:(0,u.jsx)(s.FormattedMessage,{id:"numberOfRows"})}),null===i||void 0===i?void 0:i.map((function(e){return(0,u.jsx)(a.Button,{id:"".concat(h,"-pagination-page-size-").concat(e,"-btn"),size:"sm",rounded:"none",variant:o===e?"solid":"ghost",fontWeight:700,onClick:(t=e,function(){return x(t)}),children:e},e);var t}))]}),(0,u.jsxs)(a.Flex,{alignItems:"center",justifyContent:"flex-end",width:"100%",children:[(0,u.jsx)(a.Button,{id:"".concat(h,"-pagination-previous-page-btn"),variant:"ghost",onClick:d,disabled:0===n,children:(0,u.jsx)(p.sG8,{size:24})}),(0,u.jsxs)(a.Flex,{children:[Array.from(Array(g).keys()).map((function(e){return e<4?(0,u.jsx)(a.Button,{id:"".concat(h,"-pagination-page-").concat(e+1,"-btn"),size:"sm",rounded:"none",variant:n===e?"solid":"ghost",fontWeight:700,onClick:f(e),children:e+1},e):null})),g>4&&(0,u.jsxs)(u.Fragment,{children:["...",(0,u.jsx)(a.Button,{id:"".concat(h,"-pagination-page-").concat(g,"-btn"),size:"sm",rounded:"none",variant:n===g?"solid":"ghost",fontWeight:700,onClick:f(g),children:g})]})]}),(0,u.jsx)(a.Button,{id:"".concat(h,"-pagination-next-page-btn"),variant:"ghost",onClick:r,disabled:n===g-1,children:(0,u.jsx)(p.AeI,{size:24})})]})]})},g=n(9032),f=n(4485),m="wf/makerapproverview",j=function(){var e,t,n,r=(0,o.useState)(0),d=(0,i.Z)(r,2),l=d[0],c=d[1],p=(0,o.useState)(10),j=(0,i.Z)(p,2),v=j[0],b=j[1],y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return(0,f.eZ)({path:m,method:g.Ik.GET,refreshInterval:5e3,params:e,isReady:t})}({page:l,size:v}),k=y.data,w=y.mutate;return(0,u.jsxs)(a.Container,{minHeight:"80vh",w:"full",maxW:"full",px:{base:5,md:12},children:["DARI MODULE",(0,u.jsx)(a.Heading,{fontSize:{base:24,md:32},py:8,fontWeight:"bold",color:"black",children:(0,u.jsx)(s.FormattedMessage,{id:"myApprovalTitle"})}),(0,u.jsx)(a.VStack,{spacing:4,align:"stretch",children:null===k||void 0===k||null===(e=k.content)||void 0===e?void 0:e.map((function(e,t){return(0,u.jsx)(x,{id:"my-approval-list-item-".concat(t),myApprovalList:e,mutate:w},e.id)}))}),null!==k&&void 0!==k&&k.content&&(null===k||void 0===k||null===(t=k.content)||void 0===t?void 0:t.length)>0?(0,u.jsx)(a.Box,{py:8,children:(0,u.jsx)(h,{id:"my-approval-list",countData:null!==(n=null===k||void 0===k?void 0:k.totalRecord)&&void 0!==n?n:0,selectPageIndex:c,currentPageIndex:l,listPageSize:null!==k&&void 0!==k&&k.totalRecord&&k.totalRecord>10?[10,20,30]:[10],currentPageSize:v,selectedListperPage:b,onNextPage:function(){return c(l+1)},onPrevPage:function(){return c(l-1)}})}):(0,u.jsx)(a.Center,{children:(0,u.jsx)(s.FormattedMessage,{id:"myApprovalEmpty"})})]})}}}]);