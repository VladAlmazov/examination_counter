(this.webpackJsonpexamination=this.webpackJsonpexamination||[]).push([[0],[,,function(e,t,a){e.exports={spanWrapper:"SettingsBlock_spanWrapper__HNthh",input:"SettingsBlock_input__3Dx_E",span:"SettingsBlock_span__3BeLw",buttonWrapper:"SettingsBlock_buttonWrapper__lWyBy",buttonItem:"SettingsBlock_buttonItem__2tvW7",error:"SettingsBlock_error__F0RTv"}},function(e,t,a){e.exports={inputWrapper:"DisplayBlock_inputWrapper__2Akzh",inputItem:"DisplayBlock_inputItem__3FaIv",buttonWrapper:"DisplayBlock_buttonWrapper__2gB-5",buttonItem:"DisplayBlock_buttonItem__1oztt",maxNumber:"DisplayBlock_maxNumber__2WGhj"}},,function(e,t,a){e.exports={appWrapper:"App_appWrapper__3WfU8",commonWrapper:"App_commonWrapper__1Kt1c"}},,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),u=a(7),l=a.n(u),r=a(4),c=a(5),i=a.n(c),o=a(3),b=a.n(o),p=a(0);function m(e){return Object(p.jsx)("div",{className:b.a.inputWrapper,children:Object(p.jsx)("input",{className:e.value===e.maxValue?b.a.maxNumber:b.a.inputItem,value:e.value})})}function j(e){return Object(p.jsxs)("div",{className:b.a.buttonWrapper,children:[Object(p.jsx)("button",{className:b.a.buttonItem,onClick:e.incrementValue,disabled:e.value>=e.maxValue||"string"===typeof e.value,children:"Inc"}),Object(p.jsx)("button",{className:b.a.buttonItem,onClick:e.resetValue,disabled:e.disableResetButton,children:"Reset"})]})}var x=a(2),d=a.n(x),O=function(e){return Object(p.jsx)("div",{className:d.a.buttonWrapper,children:Object(p.jsx)("button",{disabled:e.disable,className:d.a.buttonItem,onClick:e.setToLocalStorage,children:"Set"})})},_=function(e){Object(s.useEffect)((function(){(e.startValue===e.maxValue||e.maxValue<e.startValue||e.startValue<0||e.maxValue<0)&&(e.setResult("Incorrect value"),e.setDisableSettingsButton(!0),e.setDisableResetButton(!0))}));return Object(p.jsxs)("div",{className:i.a.commonWrapper,children:[Object(p.jsxs)("div",{className:d.a.spanWrapper,children:[Object(p.jsx)("span",{className:d.a.span,children:" Max value:"}),Object(p.jsx)("input",{type:"number",min:-1,className:-1===e.maxValue?d.a.error:d.a.input,value:e.maxValue,onChange:function(t){e.maxValue>=0?(e.setMaxValue(+t.currentTarget.value),e.setResult("Enter values and press 'set'"),e.setDisableSettingsButton(!1),e.setDisableResetButton(!0)):(e.setMaxValue(+t.currentTarget.value),e.setResult("Incorrect value"),e.setDisableSettingsButton(!0),e.setDisableResetButton(!0))}}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{className:d.a.span,children:" Start value:"}),Object(p.jsx)("input",{type:"number",min:-1,className:-1===e.startValue?d.a.error:d.a.input,value:e.startValue,onChange:function(t){e.startValue>=-1?(e.setStartValue(+t.currentTarget.value),e.setResult("Enter values and press 'set'"),e.setDisableSettingsButton(!1),e.setDisableResetButton(!0)):(e.setStartValue(+t.currentTarget.value),e.setResult("Incorrect value"),e.setDisableSettingsButton(!0),e.setDisableResetButton(!0))}}),Object(p.jsx)("br",{})]}),Object(p.jsx)(O,{setToLocalStorage:function(){e.setResult(e.startValue),e.setDisableIncButton(!1),e.setDisableSettingsButton(!0)},disable:e.disable})]})};var v=function(){var e=Object(s.useState)(0),t=Object(r.a)(e,2),a=t[0],n=t[1],u=Object(s.useState)(0),l=Object(r.a)(u,2),c=l[0],o=l[1],b=Object(s.useState)(!1),x=Object(r.a)(b,2),d=x[0],O=x[1],v=Object(s.useState)(!0),g=Object(r.a)(v,2),B=g[0],S=g[1],f=Object(s.useState)(!0),V=Object(r.a)(f,2),h=V[0],I=V[1],D=Object(s.useState)(a),N=Object(r.a)(D,2),W=N[0],R=N[1];return Object(s.useEffect)((function(){var e=localStorage.getItem("maxValue")||"defaultValue",t=localStorage.getItem("startValue")||"defaultValue";if(e&&t){var a=JSON.parse(e),s=JSON.parse(t);o(a),n(s),R(s)}}),[]),Object(s.useEffect)((function(){localStorage.setItem("maxValue",JSON.stringify(c)),localStorage.setItem("startValue",JSON.stringify(a))}),[c,a]),Object(p.jsxs)("div",{className:i.a.appWrapper,children:[Object(p.jsx)("div",{children:Object(p.jsx)(_,{setResult:R,disable:d,setDisableSettingsButton:O,setMaxValue:o,setStartValue:n,startValue:a,maxValue:c,setDisableIncButton:S,setDisableResetButton:I})}),Object(p.jsxs)("div",{className:i.a.commonWrapper,children:[Object(p.jsx)(m,{value:W,maxValue:c}),Object(p.jsx)(j,{incrementValue:function(){W!==c&&"number"===typeof W&&R(W+1),I(!1)},resetValue:function(){R(a),I(!0)},disabled:d,disableIncButton:B,disableResetButton:h,setDisableIncButton:S,setDisableResetButton:I,value:W,maxValue:c})]})]})},g=(a(13),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,u=t.getLCP,l=t.getTTFB;a(e),s(e),n(e),u(e),l(e)}))});l.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root")),g()}],[[14,1,2]]]);
//# sourceMappingURL=main.6864edec.chunk.js.map