"use strict";(self.webpackChunkproject_bni_dashboard=self.webpackChunkproject_bni_dashboard||[]).push([[272],{97115:function(e,a,r){r.r(a),r.d(a,{default:function(){return oe}});var s=r(34148),t=r(85640),i=r(1413),n=r(15861),o=r(70885),c=r(87757),u=r.n(c),l=r(46759),d=r(55159),p=r(45987),m=r(46417),h=function(e){var a=e.label,r=e.errorText,t=e.errorTextColor,i=e.helperText,n=e.helperTextColor,o=e.isInvalid,c=e.isRequired,u=e.children;return(0,m.jsxs)(s.FormControl,{isInvalid:o,isRequired:c,children:[(0,m.jsx)(s.Flex,{alignItems:"start",children:a&&(0,m.jsx)(s.FormLabel,{fontWeight:"bold",children:a})}),u,r&&(0,m.jsx)(s.FormErrorMessage,{color:t,children:r}),i&&(0,m.jsx)(s.FormHelperText,{color:n,children:i})]})},x=["label","errorText","errorTextColor","helperText","helperTextColor","isInvalid","isRequired","id"],g=(0,l.forwardRef)((function(e,a){var r=e.label,t=e.errorText,n=e.errorTextColor,o=e.helperText,c=e.helperTextColor,u=e.isInvalid,l=e.isRequired,d=e.id,g=(0,p.Z)(e,x);return(0,m.jsx)(h,{label:r,errorText:t,errorTextColor:n,helperText:o,helperTextColor:c,isInvalid:u,isRequired:l,children:(0,m.jsx)(s.Input,(0,i.Z)((0,i.Z)({id:d,ref:a,focusBorderColor:"orange.500",borderColor:"orange.100",_hover:{borderColor:"orange.100"}},g),{},{isRequired:l}))})})),b=r(67630),f="http://34.101.158.242:8007",w="GET",k=r(65564),v=r.n(k),y=r(76291),U=r.n(y),j=r(39009),S={companyId:void 0,token:void 0,user:void 0,firstTimeLogin:!1},P=U()()((0,j.tJ)((function(e){return{setCompanyId:function(a){return e({companyId:a})},setToken:function(a){return e({token:a})},setUser:function(a){return e({user:a})},clearAuth:function(){return e(S)},setFirstTimeLogin:function(a){return e({firstTimeLogin:a})},firstTimeLogin:!1}}),{name:"auth"})),T=r(54607),C=r(20799),M=JSON.parse('{"iam.application.exception.001":"User already exists","iam.application.exception.002":"User not found","iam.application.exception.003":"Incorrect Password","iam.application.exception.004":"IP Address is not allowed","iam.application.exception.005":"Token is expired","iam.external.application.exception.001":"User already exists","iam.external.application.exception.002":"User not found","iam.forgotpassword.exception.001":"Invalid Email User","iam.forgotpassword.exception.002":"User not found","iam.user.exception.001":"User already exists","iam.user.exception.002":"User not found","iam.userglobalapplication.exception.001":"User not found","iam.userglobalapplication.exception.002":"Invalid User","iam.userlogin.exception.001":"User is locked","iam.userlogin.exception.002":"User not found","iam.userlogin.exception.003":"Invalid user or password","iam.userlogin.exception.004":"User is inactive","iam.userlogin.exception.005":"User is still login","iam.changepassword.exception.001":"Invalid old password","iam.changepassword.exception.002":"Invalid password specification","iam.changepassword.exception.003":"New password doesnt match. Confirm new password","iam.changepassword.exception.004":"New password already exist in history","iam.loginhistory.exception.001":"To Date is less than from date","iam.loginhistory.exception.002":"From Date and To Date Field is Mandatory","iam.loginhistory.exception.003":"Type Field is Mandatory","iam.systemparameter.exception.001":"System parameter not found","iam.systemparameter.exception.002":"System parameter minimum password length cannot be greater than maximum password length","iam.systemparameter.exception.003":"System parameter total minimum occurences cannot be greater than minimum password length","iam.systemparameter.exception.004":"System parameter external minimum password length cannot be greater than external maximum password length","iam.systemparameter.exception.005":"System parameter external total minimum occurences cannot be greater than external minimum password length","iam.usercorporateglobal.exception.001":"User Corporate already exist","iam.usercorporateglobal.exception.002":"User Corporate not found","iam.usercorporateglobal.exception.003":"User not found","iam.userglobal.exception.001":"User Global already exist","iam.userglobal.exception.002":"User Global not found","ict.usergroup.exception.001":"User Group already exist","ict.usergroup.exception.002":"User Group not found","ict.usergroup.exception.003":"User Group user list not found","ict.usergroup.exception.004":"User Group user already has User Group","customerhub.bouserlogin.exception.001":"User Group not exist","customerhub.bouserlogin.exception.002":"User Group is inactive","customerhub.calendar.exception.001":"Start Date and End Date Field are Mandatory","customerhub.calendar.exception.002":"Start Date cannot be greater than End Date","customerhub.dashboard.asset.exception.001":"File not exist","customerhub.connectservice.exception.001":"User already exist","customerhub.connectservice.exception.002":"User is admin flag must be same with channel is admin flag","customerhub.portalotp.exception.001":"ID not exist","customerhub.portalotp.exception.002":"Forbidden Access","customerhub.user.exception.001":"User already exist","customerhub.user.exception.002":"User not found","customerhub.user.exception.003":"User is not Admin","customerhub.userlogin.exception.001":"User Group Not Exist","customerhub.userlogin.exception.002":"User Group is inactive","customerhub.userlogin.exception.003":"Corporate is inactive","workflow.exception.001":"Unique key exist","workflow.exception.002":"Pending task not exist or already rejected or approved","workflow.exception.003":"User is not Approver","jwtverification.exception.001":"Your session has expired","successAddGroup":"Group has been successfully added","successAddEvents":"Agenda has been successfully added","successAddUser":"User has been successfully added","successEditEvents":"Agenda has been successfully changed","successEditGroup":"Group has been successfully changed","successEditUser":"User has been successfully changed","successDeleteEvents":"Agenda has been successfully deleted","successDeleteGroup":"Grup has been successfully deleted","successDeleteUser":"User has been successfully deleted","changePasswordSuccess":"Password has been successfuly changed","approveTaskSuccess":"Request has been successfully approved","rejectTaskSuccess":"Request has been successfully rejected","connectServiceError":"Invalid data. Please try again","connectServiceSuccess":"This service has been successfully linked","err_default":"There is an error","verifyotp.exception.001":"Incorrect captcha","generateotp.exception.001":"Captcha is still valid","onlineregistrationdraft.verifyotp.exception.001":"Incorrect otp","login.verifyotp.exception.001":"Incorrect captcha","iam.user.exception.004":"User status unlocked","iam.user.exception.003":"role is mandatory","iam.userglobal.exception.003":"name is mandatory","iam.userglobal.exception.004":"email is mandatory","iam.userglobal.exception.005":"mobile phone is mandatory","iam.userglobal.exception.006":"user is not locked","customerhub.calendar.exception.003":"start date cannot greater than end date","iam.systemparameter.exception.006":"system parameter login auth type cannot be changed while any user still exists"}'),G={id:JSON.parse('{"iam.application.exception.001":"User sudah terdaftar","iam.application.exception.002":"User tidak ditemukan","iam.application.exception.003":"Password salah","iam.application.exception.004":"Alamat IP tidak diizinkan","iam.application.exception.005":"Token kadaluarsa","iam.external.application.exception.001":"User sudah terdaftar","iam.external.application.exception.002":"User tidak ditemukan","iam.forgotpassword.exception.001":"Email user salah","iam.forgotpassword.exception.002":"User tidak ditemukan","iam.user.exception.001":"User sudah terdaftar","iam.user.exception.002":"User tidak ditemukan","iam.userglobalapplication.exception.001":"User tidak ditemukan","iam.userglobalapplication.exception.002":"User salah","iam.userlogin.exception.001":"User terkunci","iam.userlogin.exception.002":"User tidak ditemukan","iam.userlogin.exception.003":"User atau kata sandi salah","iam.userlogin.exception.004":"User tidak aktif","iam.userlogin.exception.005":"User masih login","iam.changepassword.exception.001":"Kata sandi lama salah","iam.changepassword.exception.002":"Ketentuan kata sandi salah","iam.changepassword.exception.003":"Kata sandi baru tidak sesuai. Ulangi kata sandi baru","iam.changepassword.exception.004":"Kata sandi baru sudah pernah digunakan","iam.loginhistory.exception.001":"Tanggal selesai kurang dari tanggal mulai","iam.loginhistory.exception.002":"Tanggal mulai dan tanggal selesai wajib diisi","iam.loginhistory.exception.003":"Kolom wajib diisi","iam.systemparameter.exception.001":"Parameter sistem tidak ditemukan","iam.systemparameter.exception.002":"System parameter minimum password length cannot be greater than maximum password length","iam.systemparameter.exception.003":"System parameter total minimum occurences cannot be greater than minimum password length","iam.systemparameter.exception.004":"Panjang minimum karakter kata sandi tidak boleh lebih besar dari maksimum kata sandi","iam.systemparameter.exception.005":"Password belum sesuai dengan ketentuan","iam.usercorporateglobal.exception.001":"User Perusahaan sudah terdaftar","iam.usercorporateglobal.exception.002":"User Perusahaan tidak ditemukan","iam.usercorporateglobal.exception.003":"User tidak ditemukan","iam.userglobal.exception.001":"User Global already exist","iam.userglobal.exception.002":"User Global not found","ict.usergroup.exception.001":"User Grup sudah terdaftar","ict.usergroup.exception.002":"User Grup tidak ditemukan","ict.usergroup.exception.003":"Daftar User \'User Grup\' tidak ditemukan","ict.usergroup.exception.004":"User \'User Grup\' sudah memiliki User Grup","customerhub.bouserlogin.exception.001":"User Grup tidak terdaftar","customerhub.bouserlogin.exception.002":"User Grup tidak aktif","customerhub.calendar.exception.001":"Kolom Tanggal Mulai dan Tanggal Selesai wajib di isi","customerhub.calendar.exception.002":"Tanggal Mulai tidak bisa lebih besar dari Tanggal Selesai","customerhub.dashboard.asset.exception.001":"File tidak ada","customerhub.connectservice.exception.001":"User sudah terdaftar","customerhub.connectservice.exception.002":"User is admin flag must be same with channel is admin flag","customerhub.portalotp.exception.001":"ID tidak terdaftar","customerhub.portalotp.exception.002":"Akses Terlarang","customerhub.user.exception.001":"User sudah terdaftar","customerhub.user.exception.002":"Pengguna tidak ditemukan","customerhub.user.exception.003":"User bukan Admin","customerhub.userlogin.exception.001":"User Grup tidak terdaftar","customerhub.userlogin.exception.002":"User Grup tidak aktif","customerhub.userlogin.exception.003":"Perusahaan tidak aktif","workflow.exception.001":"Unique key exist","workflow.exception.002":"Pending task not exist or already rejected or approved","workflow.exception.003":"User bukan Approver","jwtverification.exception.001":"Sesi anda sudah berakhir","successAddGroup":"Berhasil Menambahkan Kelompok","successAddEvents":"Berhasil Menambahkan Agenda","successAddUser":"Berhasil Menambahkan Pengguna","successEditEvents":"Berhasil Mengubah Agenda","successEditGroup":"Berhasil Mengubah Kelompok","successEditUser":"Berhasil Mengubah Pengguna","successDeleteEvents":"Berhasil Menghapus Agenda","successDeleteGroup":"Berhasil Menghapus Kelompok","successDeleteUser":"Berhasil Menghapus Pengguna","changePasswordSuccess":"Kata sandi berhasil diganti","approveTaskSuccess":"Berhasil menyetujui permintaan.","rejectTaskSuccess":"Berhasil menolak permintaan.","connectServiceError":"Data yang Anda masukkan salah. Harap coba lagi.","connectServiceSuccess":"Layanan berikut telah berhasil dihubungkan","err_default":"Terjadi kesalahan","verifyotp.exception.001":"Verifikasi captcha salah","generateotp.exception.001":"Captcha masih berlaku","onlineregistrationdraft.verifyotp.exception.001":"Verifikasi otp salah","login.verifyotp.exception.001":"Verifikasi captcha salah","iam.user.exception.004":"Status pengguna tidak terkunci","iam.user.exception.003":"peran wajib diisi","iam.userglobal.exception.003":"nama wajib diisi","iam.userglobal.exception.004":"email wajib diisi","iam.userglobal.exception.005":"nomor telfon wajib diisi","iam.userglobal.exception.006":"pengguna tidak terkunci","customerhub.calendar.exception.003":"tanggal mulai tidak boleh lebih besar dari tanggal akhir","iam.systemparameter.exception.006":"jenis auth login parameter sistem tidak dapat diubah saat pengguna mana pun masih ada"}'),en:M},A=P.getState().clearAuth,I=(0,s.createStandaloneToast)().toast,E="unauthorized-toast",F="error-toast",D={variant:"top-accent",position:"top",status:"error",duration:8e3,isClosable:!0};v().interceptors.response.use(void 0,(function(e){var a,r,s,t,n,o,c,u,l,d=T.b.getState().locale||C.WZ,p=(null===(a=e.response)||void 0===a?void 0:a.data.message)||"",m=null!==(r=e.response)&&void 0!==r&&null!==(s=r.data)&&void 0!==s&&s.moduleName?"".concat(null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.moduleName,".").concat(p):p;401===(null===(o=e.response)||void 0===o?void 0:o.status)&&p?(A(),I.isActive(E)||I((0,i.Z)((0,i.Z)({},D),{},{id:E,description:null!==(u=G[d][m])&&void 0!==u?u:m}))):null!==(c=e.response)&&void 0!==c&&c.data.message&&!I.isActive(F)&&I((0,i.Z)((0,i.Z)({id:F},D),{},{description:null!==(l=G[d][m])&&void 0!==l?l:m}))}));var Z=function(e){var a=e.url,r=e.params,s=e.headers,t=e.data,n=e.method,o=void 0===n?w:n,c=e.callback;return v()(a,{params:r,headers:s,data:t,method:o}).then((function(e){return c&&c(e),(0,i.Z)({headers:null===e||void 0===e?void 0:e.headers},e.data)}))},B=function(){return Z({url:"".concat("http://34.101.71.39:9037","/").concat("public/publickey"),method:w})},N=(r(65871),"application/json"),q={Accept:N,"Content-Type":N},R=P.getState().setToken,K=function(){var e=JSON.parse(localStorage.getItem("auth")||JSON.stringify({state:S})).state;return(0,i.Z)((0,i.Z)({},q),{},{Authorization:"Bearer ".concat(e.token),companyId:e.companyId||""})},V=function(){var e=(0,n.Z)(u().mark((function e(a){var r,s,t,i=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:"POST",s=i.length>2?i[2]:void 0,t=i.length>3?i[3]:void 0,e.abrupt("return",Z({url:"".concat(f,"/secured/").concat(a),params:s,headers:K(),data:t,method:r,callback:function(e){var a,r=null===e||void 0===e||null===(a=e.headers)||void 0===a?void 0:a.access_token;r&&R(r)}}));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),L=r(10045),_=r.n(L),O=function(e,a){var r=new(_())(a,"pkcs8-public");return r.setOptions({encryptionScheme:"pkcs1"}),r.encrypt(e,"base64")},z=function(){var e=(0,n.Z)(u().mark((function e(a){var r,s,t,i,n,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:return t=e.sent,i=null!==(r=null===(s=t.content)||void 0===s?void 0:s.publicKey)&&void 0!==r?r:"",n=O(a.newPassword,i),o={oldPassword:O(a.oldPassword,i),newPassword:n,confirmNewPassword:n},e.abrupt("return",V("changepassword","POST",void 0,o));case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),J=U()((function(e){return{alert:null,setAlert:function(a){return e({alert:a})},clear:function(){return e({alert:null})}}})),H=r(5049),W="gray.500",X=function(e){var a=e.label,r=e.isFulfilled;return(0,m.jsxs)(s.Flex,{gap:2,alignItems:"center",children:[(0,m.jsx)(s.Icon,{as:H.UgA,borderRadius:"full",borderColor:r?"none":W,borderWidth:r?"none":1,boxSize:4,padding:.5,backgroundColor:r?"teal.500":void 0,color:r?"white":W}),(0,m.jsx)(s.Text,{color:r?"teal.500":W,fontSize:"sm",children:a})]})},Y=function(e){var a=e.passwordCheckState,r=a.isCapitalExist,i=a.isNumberExist,n=a.isLowerCaseExist,o=a.isSpecialCharExist,c=a.isAboveMinimum,u=a.isBelowMaximum,l=(0,t.useIntl)();return(0,m.jsxs)(s.Grid,{gap:{base:2,md:4},children:[(0,m.jsx)(s.Text,{fontSize:"sm",color:"gray.600",children:(0,m.jsx)(t.FormattedMessage,{id:"passwordRequirement"})}),(0,m.jsxs)(s.Grid,{gap:2,templateColumns:{base:"1fr",md:"2fr 1fr"},children:[(0,m.jsxs)(s.Grid,{templateColumns:"repeat(2, 1fr)",gap:2,children:[(0,m.jsx)(X,{isFulfilled:r,label:l.formatMessage({id:"uppercase"})}),(0,m.jsx)(X,{isFulfilled:i,label:l.formatMessage({id:"number"})}),(0,m.jsx)(X,{isFulfilled:n,label:l.formatMessage({id:"lowercase"})}),(0,m.jsx)(X,{isFulfilled:o,label:l.formatMessage({id:"specialCharacter"})})]}),(0,m.jsxs)(s.Grid,{templateColumns:{base:"repeat(2, 1fr)",md:"1fr"},gap:2,children:[(0,m.jsx)(X,{isFulfilled:c,label:l.formatMessage({id:"minCharacter"})}),(0,m.jsx)(X,{isFulfilled:u,label:l.formatMessage({id:"maxCharacter"})})]})]})]})},$=r(14790),Q=r(49016),ee=r(78310),ae=ee.object({oldPassword:ee.string().required(),newPassword:ee.string().required(),confirmNewPassword:ee.string().required().oneOf([ee.ref("newPassword")])}),re=/[A-Z]+/,se=/[a-z]+/,te=/[0-9]+/,ie=/[~`\xbf\xa1!#$%^&*\u20ac\xa3@+\xf7=\-[\]\\';,/{}()|\\":<>?._]+/,ne=function(){var e=(0,t.useIntl)(),a=(0,d.useNavigate)(),r=J((function(e){return e.setAlert})),c=l.useState(!1),p=(0,o.Z)(c,2),h=p[0],x=p[1],f=function(){var e=(0,Q.useForm)({defaultValues:{oldPassword:"",newPassword:"",confirmNewPassword:""},mode:"onChange",resolver:(0,$.X)(ae)}),a=e.register,r=e.watch,s=e.getValues,t=e.handleSubmit,i=e.reset,n=e.formState,o=n.isDirty,c=n.isValid,u=r("newPassword"),d=l.useMemo((function(){return re.test(u)}),[u]),p=l.useMemo((function(){return se.test(u)}),[u]),m=l.useMemo((function(){return te.test(u)}),[u]),h=l.useMemo((function(){return ie.test(u)}),[u]),x=l.useMemo((function(){return u.length>=8}),[u]),g=l.useMemo((function(){return u.length<=14}),[u]),b=l.useMemo((function(){return d&&p&&m&&h&&x&&g}),[x,g,d,p,m,h]);return{register:a,getValues:s,handleSubmit:t,watch:r,reset:i,passwordCheckState:l.useMemo((function(){return{isCapitalExist:d,isLowerCaseExist:p,isNumberExist:m,isSpecialCharExist:h,isAboveMinimum:x,isBelowMaximum:g}}),[x,g,d,p,m,h]),isDirty:o,isValid:c&&b}}(),w=f.passwordCheckState,k=f.isDirty,v=f.isValid,y=f.getValues,U=f.reset,j=f.register,S=f.handleSubmit,P=function(){var s=(0,n.Z)(u().mark((function s(){var t;return u().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=y(),x(!0),s.next=4,z(t).then((function(){U(),r({title:e.formatMessage({id:"changePasswordSuccess"}),status:"success",iconPath:"./".concat(b.ur,"/images/icons/new_password.png")}),a("/")})).finally((function(){x(!1)}));case 4:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}}();return(0,m.jsxs)(s.Grid,{gap:4,children:[(0,m.jsx)(g,(0,i.Z)((0,i.Z)({id:"change-password-form-input-current-password"},j("oldPassword")),{},{label:e.formatMessage({id:"currentPassword"}),type:"password",placeholder:e.formatMessage({id:"currentPasswordPlaceholder"}),isDisabled:h})),(0,m.jsx)(Y,{passwordCheckState:w}),(0,m.jsx)(g,(0,i.Z)((0,i.Z)({id:"change-password-form-input-new-password"},j("newPassword")),{},{label:e.formatMessage({id:"newPassword"}),type:"password",placeholder:e.formatMessage({id:"newPasswordPlaceholder"}),isDisabled:h})),(0,m.jsx)(g,(0,i.Z)((0,i.Z)({id:"change-password-form-input-repeat-password"},j("confirmNewPassword")),{},{label:e.formatMessage({id:"repeatPassword"}),type:"password",placeholder:e.formatMessage({id:"repeatPasswordPlaceholder"}),isDisabled:h})),(0,m.jsx)(s.Spacer,{height:2}),(0,m.jsx)(s.Button,{id:"change-password-btn",width:"full",onClick:S((function(){y()&&v&&P()})),isDisabled:!k||!v||h,isLoading:h,children:(0,m.jsx)(t.FormattedMessage,{id:"changePassword"})})]})},oe=function(){return(0,m.jsxs)(m.Fragment,{children:["DARI MODULE",(0,m.jsx)(s.Flex,{py:8,justifyContent:"center",alignItems:"center",minHeight:{md:"80vh"},width:"full",children:(0,m.jsxs)(s.VStack,{spacing:{base:4,md:8},alignItems:"start",width:{base:"full",md:"initial"},children:[(0,m.jsx)(s.Heading,{marginTop:{base:4,md:0},marginX:{base:4,md:0},fontSize:{base:"2xl",md:"4xl"},children:(0,m.jsx)(t.FormattedMessage,{id:"changePassword"})}),(0,m.jsx)(s.Grid,{gap:16,marginY:{md:"auto"},width:{base:"full",md:400,lg:600},padding:{base:4,md:6},boxShadow:"0px 8px 16px -8px #FCECE2",backgroundColor:"white",borderRadius:{base:0,md:16},children:(0,m.jsx)(ne,{})})]})})]})}}}]);