(this["webpackJsonpreact-add-user"]=this["webpackJsonpreact-add-user"]||[]).push([[0],{78:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(10),c=n.n(a),s=n(58),i=n(31),o=n(110),u=n(113),d=n(40),l=n(115),j=n(120),b=n(116),h=n(55),m=n.n(h),f=n(7),O=Object(o.a)({textField:{marginBottom:20,marginTop:20},button:{marginBottom:20,marginLeft:"auto",marginRight:"auto"}}),x=function(e){var t=e.onAddUser,n=(e.userList,O()),a=Object(r.useState)(""),c=Object(i.a)(a,2),s=c[0],o=c[1],h=Object(r.useState)(""),x=Object(i.a)(h,2),p=x[0],g=x[1];return Object(f.jsxs)(u.a,{maxWidth:"lg",children:[Object(f.jsx)(d.a,{variant:"h6",color:"textPrimary",component:"h2",gutterBottom:!0,children:"\u589e\u52a0\u65b0\u4f7f\u7528\u8005"}),Object(f.jsx)(l.a,{children:Object(f.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),0!==s.trim().length&&0!==p.trim().length&&(+p<1||(t(s,p),s&&p&&fetch("https://sheet.best/api/sheets/a9cf3e8c-eb23-489d-9ce5-4681694b18ed",{method:"POST",mode:"cors",headers:{"Content-type":"application/json"},body:JSON.stringify({ID:Math.random().toString(),userName:s,userAge:p})}),g(""),o("")))},children:[Object(f.jsx)(j.a,{className:n.textField,label:"\u4f7f\u7528\u8005\u540d\u7a31",variant:"outlined",color:"primary",onChange:function(e){o(e.target.value)},value:s,fullWidth:!0,required:!0}),Object(f.jsx)(j.a,{className:n.textField,label:"\u5e74\u9f61",variant:"outlined",color:"primary",value:p,onChange:function(e){g(e.target.value)},type:"number",fullWidth:!0,required:!0}),Object(f.jsx)(b.a,{className:n.button,color:"secondary",variant:"contained",size:"medium",endIcon:Object(f.jsx)(m.a,{}),type:"submit",children:"\u9001\u51fa"})]})})]})},p=n(43),g=n.n(p),v=n(56),y=n(119),D=n(117),S=n(118),I=n(57),L=n.n(I),N=Object(o.a)({UserCard:{marginBottom:20,marginTop:20}}),C=function(e){var t=e.user,n=e.handleDelete,r=N();return Object(f.jsx)("div",{className:r.userCard,children:Object(f.jsx)(l.a,{elevation:1,children:Object(f.jsx)(D.a,{action:Object(f.jsx)(S.a,{onClick:function(){return n(t.ID)},children:Object(f.jsx)(L.a,{})}),title:Object(f.jsxs)(d.a,{children:["\u59d3\u540d: ",t.userName]}),subheader:Object(f.jsxs)(d.a,{color:"textSecondary",children:["\u5e74\u7d00: ",t.userAge]})})})})},A=function(e){var t=e.userList,n=e.UserListHandler;Object(r.useEffect)((function(){fetch("https://sheet.best/api/sheets/421cbf0b-e884-425d-ad23-e7d658c2f851").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]);var a=function(){var e=Object(v.a)(g.a.mark((function e(r){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://sheet.best/api/sheets/421cbf0b-e884-425d-ad23-e7d658c2f851/ID/".concat(r),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.error(e)}));case 2:a=t.filter((function(e){return e.ID!==r})),n(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(u.a,{children:Object(f.jsx)(y.a,{container:!0,spacing:3,children:t.map((function(e){return Object(f.jsx)(y.a,{item:!0,xs:12,md:6,lg:4,children:Object(f.jsx)(C,{user:e,handleDelete:a})},e.ID)}))})})};var B=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)(x,{onAddUser:function(e,t){a((function(n){return[].concat(Object(s.a)(n),[{ID:Math.random().toString(),userName:e,userAge:t}])}))},userList:n}),Object(f.jsx)("div",{style:{marginTop:"30px"}}),Object(f.jsx)(A,{UserListHandler:a,userList:n})]})};c.a.render(Object(f.jsx)(B,{}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.b4ac7234.chunk.js.map