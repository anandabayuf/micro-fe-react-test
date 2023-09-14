"use strict";(self.webpackChunkproject_bni_dashboard=self.webpackChunkproject_bni_dashboard||[]).push([[827],{50827:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r=t(34148),o=t(85640),a=t(70885),c=t(76489),l=t(2789),i=t(75474),s=t(72165),d=t(46759),u=t(10190),h=t(55170),x=t(19544),m=t(54607),j=t(60860),f=t(46417),p=function(n){var e=n.componentId,t=(0,c.useMonthlyCalendar)(),o=t.currentMonth,a=t.onCurrentMonthChange,d=(0,x.G)(),u=d.resetSelect,h=d.setParams,p=(0,m.b)().locale,b=function(n){a(n),h(n),u()};return(0,f.jsx)(r.Flex,{margin:8,justify:"center",children:(0,f.jsxs)(r.Flex,{direction:"row",gap:6,alignItems:"center",children:[(0,f.jsx)(r.Button,{id:"".concat(e,"-previous-month-btn"),onClick:function(){return b((0,l.subMonths)(o,1))},className:"cursor-pointer",variant:"outline",children:(0,f.jsx)(j.u1R,{size:21})}),(0,f.jsx)(r.Box,{children:(0,f.jsx)(r.Heading,{fontSize:{base:"md",md:"xl"},children:(0,l.format)(new Date(null!==o&&void 0!==o?o:""),"LLLL yyyy",{locale:"id"===p?i.Z:s.Z})})}),(0,f.jsx)(r.Button,{id:"".concat(e,"-next-month-btn"),onClick:function(){return b((0,l.addMonths)(o,1))},className:"cursor-pointer",variant:"outline",children:(0,f.jsx)(j.hjJ,{size:21})})]})})},b=function(n){var e=n.colorToday,t=void 0===e?"#006677":e,o=n.colorSelect,j=void 0===o?"#E55300":o,b=n.colorEvents,g=void 0===b?"#006677":b,v=n.componentId,y=(0,m.b)().locale,w=(0,x.G)(),C=w.selectDate,D=w.setSelectDate,M=w.params,S=w.setCurrentData,k=(0,h.H)(M,!0).data;(0,d.useEffect)((function(){null!==k&&void 0!==k&&k.content&&S(k.content)}),[k,S]);var I=(0,x.G)((function(n){return[n.selectMonth,n.setSelectMonth]}),u.Z),Z=(0,a.Z)(I,2),B=Z[0],F=Z[1];function z(n,e){return(0,l.isSameDay)(new Date(null!==C&&void 0!==C?C:""),e)?j:n.data.length>0?g:"transparent"}var H=function(n){return function(){return D((0,l.isSameDay)(new Date(null!==C&&void 0!==C?C:""),n)?null:n)}},L=function(n,e){return(0,l.isSameDay)(new Date(null!==C&&void 0!==C?C:""),e)||n.data.length>0?"white":"black"};return(0,f.jsx)(r.Box,{bg:"white",pb:8,w:"full",maxH:"lg",children:(0,f.jsxs)(c.MonthlyCalendar,{currentMonth:B?new Date(B):new Date,onCurrentMonthChange:function(n){return F(n)},locale:"id"===y?i.Z:s.Z,children:[(0,f.jsx)(r.Box,{pt:"4",children:(0,f.jsx)(p,{componentId:"".concat(v,"-calendar-monthly-nav")})}),k?(0,f.jsx)(c.MonthlyBody,{events:(null===k||void 0===k?void 0:k.content)||[],children:(0,f.jsx)(c.MonthlyDay,{customRender:function(n,e,o,a){return(0,f.jsx)(r.Flex,{alignItems:"center",justify:"center",justifyContent:"center",children:(0,f.jsx)(r.Flex,{id:"".concat(v,"-calendar-date-").concat(e),bg:z(a,n),border:"1px solid ".concat(o&&t),color:L(a,n),h:{base:8,md:10},w:10,alignItems:"center",justifyContent:"center",borderRadius:"full",cursor:"pointer",onClick:H(n),children:(0,f.jsx)(r.Text,{textAlign:"center",fontSize:{base:"md",md:"lg"},children:e})})})}})}):(0,f.jsx)(r.Stack,{children:(0,f.jsx)(r.Skeleton,{height:"xs",ml:5})})]})})},g=t(36561),v=function(){return(0,f.jsxs)(r.Container,{maxW:"full",pt:{base:"7",md:"10"},px:{base:5,md:12},children:[(0,f.jsx)(r.Heading,{children:(0,f.jsx)(o.FormattedMessage,{id:"calendar"})}),(0,f.jsxs)(r.Flex,{mt:8,wrap:{base:"wrap",lg:"nowrap"},children:[(0,f.jsx)(b,{componentId:"calendar-page"}),(0,f.jsx)(g.Z,{componentId:"calendar-page"})]})]})}}}]);