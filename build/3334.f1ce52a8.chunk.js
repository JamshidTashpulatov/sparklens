"use strict";(self.webpackChunkspraklens_backend=self.webpackChunkspraklens_backend||[]).push([[3334],{13334:(V,C,s)=>{s.d(C,{ProtectedEditPage:()=>Q});var t=s(74081),I=s(27279),i=s(93415),M=s(10701),m=s(32370),h=s(48102),B=s(23298),R=s(74577),g=s(12881),L=s(39708),c=s(73354),U=s(27875),T=s(74758),W=s(79213),n=s(15530),K=s(76827),f=s(71563),p=s(61020),x=s(51447),G=s(47533),j=s(47853),e=s(43639),J=s(51950),H=s(36734),os=s(15816),Es=s(97442),is=s(13576),rs=s(87830),ds=s(47184),es=s(364),ls=s(59461),Ms=s(49204),Ps=s(74919),Os=s(29206),Ds=s(40464),ms=s(98934),hs=s(43433),Rs=s(75719),gs=s(8175),Ls=s(6078),As=s(51943),vs=s(55783),Cs=s(92249),Is=s(41942),Bs=s(22919),cs=s(53915),Us=s(75041),Ts=s(30200),Ws=s(91379),Ks=s(33299),fs=s(33409),xs=s(63645),js=s(7988),us=s(7055),ys=s(26757),ps=s(58311),Ss=s(24840),Zs=s(29510),Fs=s(16946),Ns=s(10124),zs=s(69530),Vs=s(86961),Gs=s(51527),Js=s(19764),Hs=s(42982),Xs=s(26126),Ys=s(10131),$s=s(63799);const X=({disabled:o,role:a,values:O,errors:_,onChange:r,onBlur:A})=>{const{formatMessage:E}=(0,p.Z)();return(0,t.jsx)(i.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsxs)(M.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsxs)(M.k,{justifyContent:"space-between",children:[(0,t.jsxs)(i.x,{children:[(0,t.jsx)(i.x,{children:(0,t.jsx)(m.Z,{fontWeight:"bold",children:a?a.name:E({id:"global.details",defaultMessage:"Details"})})}),(0,t.jsx)(i.x,{children:(0,t.jsx)(m.Z,{textColor:"neutral500",variant:"pi",children:a?a.description:E({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),(0,t.jsx)(h.z,{disabled:!0,variant:"secondary",children:E({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:a.usersCount})})]}),(0,t.jsxs)(B.r,{gap:4,children:[(0,t.jsx)(R.P,{col:6,children:(0,t.jsx)(g.o,{disabled:o,name:"name",error:_.name&&E({id:_.name}),label:E({id:"global.name",defaultMessage:"Name"}),onChange:r,onBlur:A,required:!0,value:O.name||""})}),(0,t.jsx)(R.P,{col:6,children:(0,t.jsx)(L.g,{disabled:o,label:E({id:"global.description",defaultMessage:"Description"}),id:"description",error:_.name&&E({id:_.name}),onChange:r,onBlur:A,children:O.description||""})})]})]})})},Y=j.Ry().shape({name:j.Z_().required(n.I0.required),description:j.Z_().optional()}),$=()=>{const o=(0,n.lm)(),{formatMessage:a}=(0,p.Z)(),_=(0,x.$B)("/settings/roles/:id")?.params.id,r=I.useRef(null),{lockApp:A,unlockApp:E}=(0,n.o1)(),{trackUsage:b}=(0,n.rS)(),{_unstableFormatAPIError:S,_unstableFormatValidationErrors:Z}=(0,n.So)(),{isLoading:k,data:F}=(0,e.A)({role:_??""}),{roles:w,isLoading:N,refetch:q}=(0,J.u)({id:_},{refetchOnMountOrArgChange:!0}),P=w[0]??{},{data:ss,isLoading:ts}=(0,e.B)({id:_},{skip:!_,refetchOnMountOrArgChange:!0}),[_s]=(0,e.G)(),[as]=(0,e.E)();if(!_)return(0,t.jsx)(x.l_,{to:"/settings/roles"});const ns=async(u,v)=>{try{A();const{permissionsToSend:D,didUpdateConditions:y}=r.current?.getPermissions()??{},d=await _s({id:_,...u});if("error"in d){(0,e.x)(d.error)&&d.error.name==="ValidationError"?v.setErrors(Z(d.error)):o({type:"warning",message:S(d.error)});return}if(P.code!=="strapi-super-admin"&&D){const l=await as({id:d.data.id,permissions:D});if("error"in l){(0,e.x)(l.error)&&l.error.name==="ValidationError"?v.setErrors(Z(l.error)):o({type:"warning",message:S(l.error)});return}y&&b("didUpdateConditions")}r.current?.setFormAfterSubmit(),await q(),o({type:"success",message:{id:"notification.success.saved"}})}catch{o({type:"warning",message:{id:"notification.error"}})}finally{E()}},z=!N&&P.code==="strapi-super-admin";return(0,t.jsxs)(c.o,{children:[(0,t.jsx)(n.SL,{name:"Roles"}),(0,t.jsx)(f.J9,{enableReinitialize:!0,initialValues:{name:P.name??"",description:P.description??""},onSubmit:ns,validationSchema:Y,validateOnChange:!1,children:({handleSubmit:u,values:v,errors:D,handleChange:y,handleBlur:d,isSubmitting:l})=>(0,t.jsxs)("form",{onSubmit:u,children:[(0,t.jsx)(U.T,{primaryAction:(0,t.jsx)(M.k,{gap:2,children:(0,t.jsx)(h.z,{type:"submit",disabled:P.code==="strapi-super-admin",loading:l,size:"L",children:a({id:"global.save",defaultMessage:"Save"})})}),title:a({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:a({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:(0,t.jsx)(W.r,{as:G.OL,startIcon:(0,t.jsx)(K.Z,{}),to:"/settings/roles",children:a({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(T.D,{children:(0,t.jsxs)(M.k,{direction:"column",alignItems:"stretch",gap:6,children:[(0,t.jsx)(X,{disabled:z,errors:D,values:v,onChange:y,onBlur:d,role:P}),!k&&!N&&!ts&&F?(0,t.jsx)(i.x,{shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(H.P,{isFormDisabled:z,permissions:ss,ref:r,layout:F})}):(0,t.jsx)(i.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(n.dO,{})})]})})]})})]})},Q=()=>{const o=(0,e.j)(r=>r.admin_app.permissions.settings?.roles),{isLoading:a,allowedActions:{canRead:O,canUpdate:_}}=(0,n.ss)(o);return a?(0,t.jsx)(n.dO,{}):!O&&!_?(0,t.jsx)(x.l_,{to:"/"}):(0,t.jsx)($,{})}},51950:(V,C,s)=>{s.d(C,{u:()=>m});var t=s(27279),I=s(15530),i=s(61020),M=s(43639);const m=(h={},B)=>{const{locale:R}=(0,i.Z)(),g=(0,I.Xe)(R,{sensitivity:"base"}),{data:L,error:c,isError:U,isLoading:T,refetch:W}=(0,M.z)(h,B);return{roles:t.useMemo(()=>[...L??[]].sort((K,f)=>g.compare(K.name,f.name)),[L,g]),error:c,isError:U,isLoading:T,refetch:W}}}}]);
