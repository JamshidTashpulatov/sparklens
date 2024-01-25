"use strict";(self.webpackChunkspraklens_backend=self.webpackChunkspraklens_backend||[]).push([[5517],{75517:(N,u,s)=>{s.d(u,{N:()=>F,ProtectedEditView:()=>Q});var e=s(74081),D=s(27279),R=s(73354),p=s(74758),I=s(10701),K=s(93415),W=s(32370),T=s(23298),n=s(74577),P=s(27875),E=s(48102),a=s(15530),$=s(59082),z=s(71563),y=s(61020),x=s(51447),g=s(47853),A=s(43639),j=s(10271),v=s(93118),O=s(24722),as=s(15816),rs=s(97442),os=s(13576),_s=s(87830),is=s(47184),Es=s(364),ds=s(59461),ls=s(49204),Ts=s(74919),Ps=s(29206),Ms=s(40464),Ds=s(98934),Os=s(43433),ms=s(75719),fs=s(8175),cs=s(6078),gs=s(51943),vs=s(55783),Ls=s(92249),hs=s(41942),Cs=s(22919),Rs=s(53915),ps=s(75041),Is=s(30200),As=s(91379),Bs=s(33299),Us=s(33409),us=s(63645),Ks=s(7988),Ws=s(7055),ys=s(26757),xs=s(58311),js=s(24840),ks=s(29510),Ss=s(16946),Fs=s(10124),Vs=s(69530),Zs=s(86961),Gs=s(51527),Ns=s(19764),$s=s(42982),zs=s(26126);const J=g.Ry().shape({name:g.Z_().max(100).required(a.I0.required),description:g.Z_().nullable(),lifespan:g.Rx().integer().min(0).nullable().defined(a.I0.required),permissions:g.Z_().required(a.I0.required)}),F=()=>{(0,a.go)();const{formatMessage:o}=(0,y.Z)(),{lockApp:_,unlockApp:L}=(0,a.o1)(),d=(0,a.lm)(),m=(0,x.k6)(),{state:h}=(0,x.TH)(),[r,f]=D.useState(h&&"accessKey"in h.transferToken?{...h.transferToken}:null),{trackUsage:M}=(0,a.rS)(),{setCurrentStep:X}=(0,a.c1)(),w=(0,A.j)(i=>i.admin_app.permissions.settings?.["transfer-tokens"]),{allowedActions:{canCreate:b,canUpdate:q,canRegenerate:ss}}=(0,a.ss)(w),B=(0,x.$B)("/settings/transfer-tokens/:id")?.params?.id,l=B==="create",{_unstableFormatAPIError:U,_unstableFormatValidationErrors:V}=(0,a.So)();D.useEffect(()=>{M(l?"didAddTokenFromList":"didEditTokenFromList",{tokenType:v.T})},[l,M]);const{data:k,error:S}=(0,j.u)(B,{skip:l||r!==null||!B});D.useEffect(()=>{S&&d({type:"warning",message:U(S)})},[S,U,d]),D.useEffect(()=>{k&&f(k)},[k]);const[es]=(0,j.a)(),[ns]=(0,j.b)(),ts=async(i,c)=>{M(l?"willCreateToken":"willEditToken",{tokenType:v.T}),_();const C=i.permissions.split("-");if((t=>t.length===1?t[0]==="push"||t[0]==="pull":t[0]==="push"&&t[1]==="pull")(C))try{if(l){const t=await es({...i,permissions:C});if("error"in t){(0,A.x)(t.error)&&t.error.name==="ValidationError"?c.setErrors(V(t.error)):d({type:"warning",message:U(t.error)});return}f(t.data),d({type:"success",message:o({id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"})}),M("didCreateToken",{type:r?.permissions,tokenType:v.T}),m.push(`/settings/transfer-tokens/${t.data.id}`,{transferToken:t.data}),X("transferTokens.success")}else{const t=await ns({id:B,name:i.name,description:i.description,permissions:C});if("error"in t){(0,A.x)(t.error)&&t.error.name==="ValidationError"?c.setErrors(V(t.error)):d({type:"warning",message:U(t.error)});return}f(t.data),d({type:"success",message:o({id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),M("didEditToken",{type:r?.permissions,tokenType:v.T})}}catch{d({type:"warning",message:{id:"notification.error",defaultMessage:"Something went wrong"}})}finally{L()}},Z=q&&!l||b&&l;return!l&&!r?(0,e.jsx)(Y,{}):(0,e.jsxs)(R.o,{children:[(0,e.jsx)(a.SL,{name:"Transfer Tokens"}),(0,e.jsx)(z.J9,{validationSchema:J,validateOnChange:!1,initialValues:{name:r?.name||"",description:r?.description||"",lifespan:r?.lifespan??null,permissions:r?.permissions.join("-")??""},enableReinitialize:!0,onSubmit:(i,c)=>ts(i,c),children:({errors:i,handleChange:c,isSubmitting:C,values:G})=>(0,e.jsxs)(a.l0,{children:[(0,e.jsx)(O.F,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"TokenCreate Transfer Token"},token:r,setToken:f,canEditInputs:Z,canRegenerate:ss,isSubmitting:C,regenerateUrl:"/admin/transfer/tokens/"}),(0,e.jsx)(p.D,{children:(0,e.jsxs)(I.k,{direction:"column",alignItems:"stretch",gap:6,children:[r&&Boolean(r?.name)&&"accessKey"in r&&(0,e.jsx)(O.c,{token:r.accessKey,tokenType:v.T}),(0,e.jsx)(H,{errors:i,onChange:c,canEditInputs:Z,isCreating:l,values:G,transferToken:r})]})})]})})]})},Q=()=>{const o=(0,A.j)(_=>_.admin_app.permissions.settings?.["transfer-tokens"].read);return(0,e.jsx)(a.O4,{permissions:o,children:(0,e.jsx)(F,{})})},H=({errors:o={},onChange:_,canEditInputs:L,isCreating:d,values:m,transferToken:h={}})=>{const{formatMessage:r}=(0,y.Z)(),f=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return(0,e.jsx)(K.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(I.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(W.Z,{variant:"delta",as:"h2",children:r({id:"global.details",defaultMessage:"Details"})}),(0,e.jsxs)(T.r,{gap:5,children:[(0,e.jsx)(n.P,{col:6,xs:12,children:(0,e.jsx)(O.T,{error:o.name,value:m.name,canEditInputs:L,onChange:_})},"name"),(0,e.jsx)(n.P,{col:6,xs:12,children:(0,e.jsx)(O.a,{error:o.description,value:m.description,canEditInputs:L,onChange:_})},"description"),(0,e.jsx)(n.P,{col:6,xs:12,children:(0,e.jsx)(O.L,{isCreating:d,error:o.lifespan,value:m.lifespan,onChange:_,token:h})},"lifespan"),(0,e.jsx)(n.P,{col:6,xs:12,children:(0,e.jsx)(O.b,{name:"permissions",value:m.permissions,error:o.permissions,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:M=>{_({target:{name:"permissions",value:M}})},options:f,canEditInputs:L})},"permissions")]})]})})},Y=({transferTokenName:o})=>{const{formatMessage:_}=(0,y.Z)();return(0,a.go)(),(0,e.jsxs)(R.o,{"aria-busy":"true",children:[(0,e.jsx)(a.SL,{name:"Transfer Tokens"}),(0,e.jsx)(P.T,{primaryAction:(0,e.jsx)(E.z,{disabled:!0,startIcon:(0,e.jsx)($.Z,{}),type:"button",size:"L",children:_({id:"global.save",defaultMessage:"Save"})}),title:o||_({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),(0,e.jsx)(p.D,{children:(0,e.jsx)(a.dO,{})})]})}},10271:(N,u,s)=>{s.d(u,{a:()=>I,b:()=>W,c:()=>R,d:()=>K,u:()=>p});var e=s(43639);const D=e.m.injectEndpoints({endpoints:T=>({getTransferTokens:T.query({query:()=>({url:"/admin/transfer/tokens",method:"GET"}),transformResponse:n=>n.data,providesTags:(n,P)=>[...n?.map(({id:E})=>({type:"TransferToken",id:E}))??[],{type:"TransferToken",id:"LIST"}]}),getTransferToken:T.query({query:n=>`/admin/transfer/tokens/${n}`,transformResponse:n=>n.data,providesTags:(n,P,E)=>[{type:"TransferToken",id:E}]}),createTransferToken:T.mutation({query:n=>({url:"/admin/transfer/tokens",method:"POST",data:n}),transformResponse:n=>n.data,invalidatesTags:[{type:"TransferToken",id:"LIST"}]}),deleteTransferToken:T.mutation({query:n=>({url:`/admin/transfer/tokens/${n}`,method:"DELETE"}),transformResponse:n=>n.data,invalidatesTags:(n,P,E)=>[{type:"TransferToken",id:E}]}),updateTransferToken:T.mutation({query:({id:n,...P})=>({url:`/admin/transfer/tokens/${n}`,method:"PUT",data:P}),transformResponse:n=>n.data,invalidatesTags:(n,P,{id:E})=>[{type:"TransferToken",id:E}]})}),overrideExisting:!1}),{useGetTransferTokensQuery:R,useGetTransferTokenQuery:p,useCreateTransferTokenMutation:I,useDeleteTransferTokenMutation:K,useUpdateTransferTokenMutation:W}=D}}]);