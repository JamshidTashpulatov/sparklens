"use strict";(self.webpackChunkspraklens_backend=self.webpackChunkspraklens_backend||[]).push([[6314],{76314:(J,O,s)=>{s.d(O,{ProtectedSettingsPage:()=>W});var e=s(74081),r=s(27279),v=s(73354),x=s(27875),y=s(74758),o=s(10701),T=s(93415),_=s(32370),h=s(23298),d=s(74577),c=s(12881),j=s(5627),R=s(78955),S=s(48102),i=s(15530),A=s(16543),C=s(61020),E=s(40464),I=s(19003),u=s(47853),L=s(81325);const f=u.Ry().shape({email:u.Z_().email(i.I0.email).required(i.I0.required)}),B=I.ZP.a`
  color: ${({theme:g})=>g.colors.primary600};
`,W=()=>(0,e.jsx)(i.O4,{permissions:L.P.settings,children:(0,e.jsx)(K,{})}),K=()=>{const g=(0,i.lm)(),{formatMessage:t}=(0,C.Z)(),{lockApp:U,unlockApp:b}=(0,i.o1)(),{get:Z,post:k}=(0,i.kY)(),[a,F]=r.useState(""),[N,M]=r.useState(!1),[P,V]=r.useState({}),{data:n,isLoading:D}=(0,E.useQuery)(["email","settings"],async()=>{const l=await Z("/email/settings"),{data:{config:m}}=l;return m}),p=(0,E.useMutation)(async l=>{await k("/email/test",l)},{onError(){g({type:"warning",message:t({id:"email.Settings.email.plugin.notification.test.error",defaultMessage:"Failed to send a test mail to {to}"},{to:a})})},onSuccess(){g({type:"success",message:t({id:"email.Settings.email.plugin.notification.test.success",defaultMessage:"Email test succeeded, check the {to} mailbox"},{to:a})})},retry:!1});(0,i.go)(),r.useEffect(()=>{f.validate({email:a},{abortEarly:!1}).then(()=>M(!0)).catch(()=>M(!1))},[a]);const $=l=>{F(()=>l.target.value)},z=async l=>{l.preventDefault();try{await f.validate({email:a},{abortEarly:!1})}catch(m){m instanceof u.p8&&V((0,i.CJ)(m))}U(),p.mutate({to:a}),b()};return(0,e.jsxs)(v.o,{labelledBy:"title","aria-busy":D||p.isLoading,children:[(0,e.jsx)(i.SL,{name:t({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"})}),(0,e.jsx)(x.T,{id:"title",title:t({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"}),subtitle:t({id:"email.Settings.email.plugin.subTitle",defaultMessage:"Test the settings for the Email plugin"})}),(0,e.jsx)(y.D,{children:D?(0,e.jsx)(i.dO,{}):n&&(0,e.jsx)("form",{onSubmit:z,children:(0,e.jsxs)(o.k,{direction:"column",alignItems:"stretch",gap:7,children:[(0,e.jsx)(T.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(o.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsxs)(o.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(_.Z,{variant:"delta",as:"h2",children:t({id:"email.Settings.email.plugin.title.config",defaultMessage:"Configuration"})}),(0,e.jsx)(_.Z,{children:t({id:"email.Settings.email.plugin.text.configuration",defaultMessage:"The plugin is configured through the {file} file, checkout this {link} for the documentation."},{file:"./config/plugins.js",link:(0,e.jsx)(B,{href:"https://docs.strapi.io/developer-docs/latest/plugins/email.html",target:"_blank",rel:"noopener noreferrer",children:t({id:"email.link",defaultMessage:"Link"})})})})]}),(0,e.jsxs)(h.r,{gap:5,children:[(0,e.jsx)(d.P,{col:6,s:12,children:(0,e.jsx)(c.o,{name:"shipper-email",label:t({id:"email.Settings.email.plugin.label.defaultFrom",defaultMessage:"Default sender email"}),placeholder:t({id:"email.Settings.email.plugin.placeholder.defaultFrom",defaultMessage:"ex: Strapi No-Reply '<'no-reply@strapi.io'>'"}),disabled:!0,value:n.settings.defaultFrom})}),(0,e.jsx)(d.P,{col:6,s:12,children:(0,e.jsx)(c.o,{name:"response-email",label:t({id:"email.Settings.email.plugin.label.defaultReplyTo",defaultMessage:"Default response email"}),placeholder:t({id:"email.Settings.email.plugin.placeholder.defaultReplyTo",defaultMessage:"ex: Strapi '<'example@strapi.io'>'"}),disabled:!0,value:n.settings.defaultReplyTo})}),(0,e.jsx)(d.P,{col:6,s:12,children:(0,e.jsx)(j.P,{name:"email-provider",label:t({id:"email.Settings.email.plugin.label.provider",defaultMessage:"Email provider"}),disabled:!0,value:n.provider,children:(0,e.jsx)(R.W,{value:n.provider,children:n.provider})})})]})]})}),(0,e.jsxs)(o.k,{alignItems:"stretch",background:"neutral0",direction:"column",gap:4,hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[(0,e.jsx)(_.Z,{variant:"delta",as:"h2",children:t({id:"email.Settings.email.plugin.title.test",defaultMessage:"Test email delivery"})}),(0,e.jsxs)(h.r,{gap:5,children:[(0,e.jsx)(d.P,{col:6,s:12,children:(0,e.jsx)(c.o,{id:"test-address-input",name:"test-address",onChange:$,label:t({id:"email.Settings.email.plugin.label.testAddress",defaultMessage:"Recipient email"}),value:a,error:P.email?.id&&t({id:`email.${P.email?.id}`,defaultMessage:"This is an invalid email"}),placeholder:t({id:"email.Settings.email.plugin.placeholder.testAddress",defaultMessage:"ex: developer@example.com"})})}),(0,e.jsx)(d.P,{col:7,s:12,children:(0,e.jsx)(S.z,{loading:p.isLoading,disabled:!N,type:"submit",startIcon:(0,e.jsx)(A.Z,{}),children:t({id:"email.Settings.email.plugin.button.test-email",defaultMessage:"Send test email"})})})]})]})]})})})]})}}}]);
