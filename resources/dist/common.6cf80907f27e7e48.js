"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[8592],{5117:(g,p,h)=>{h.d(p,{s:()=>o});var a=h(529),n=h(5862),i=h(4650),u=h(866);class o{constructor(t,e){this.http=t,this.authService=e}getConfigdashboard(){let t=new a.WM({Authorization:"Bearer "+this.authService.token});return this.http.get(n.$g+"/dashboard/config",{headers:t})}dashboardAdmin(t){let e=new a.WM({Authorization:"Bearer "+this.authService.token});return this.http.post(n.$g+"/dashboard/admin",t,{headers:e})}dashboardAdminYear(t){let e=new a.WM({Authorization:"Bearer "+this.authService.token});return this.http.post(n.$g+"/dashboard/admin-year",t,{headers:e})}dashboardDoctor(t){let e=new a.WM({Authorization:"Bearer "+this.authService.token});return this.http.post(n.$g+"/dashboard/doctor",t,{headers:e})}dashboardDoctorYear(t){let e=new a.WM({Authorization:"Bearer "+this.authService.token});return this.http.post(n.$g+"/dashboard/doctor-year",t,{headers:e})}}o.\u0275fac=function(t){return new(t||o)(i.LFG(a.eN),i.LFG(u.e))},o.\u0275prov=i.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})},3564:(g,p,h)=>{h.d(p,{E:()=>o});var a=h(529),n=h(5862),i=h(4650),u=h(866);class o{constructor(t,e){this.http=t,this.authService=e}listAppointmentPays(t=1,e="",r="",d="",c=null,l=null){let v=new a.WM({Authorization:"Bearer "+this.authService.token}),s="";return e&&(s+="&search_doctor="+e),r&&(s+="&search_patient="+r),d&&(s+="&specialitie_id="+d),c&&(s+="&date_start="+c),l&&(s+="&date_end="+l),this.http.get(n.$g+"/appointmet-pay?page="+t+s,{headers:v})}listConfig(){let t=new a.WM({Authorization:"Bearer "+this.authService.token});return this.http.get(n.$g+"/appointmet/config",{headers:t})}registerAppointmentPay(t){let e=new a.WM({Authorization:"Bearer "+this.authService.token});return this.http.post(n.$g+"/appointmet-pay",t,{headers:e})}updateAppointmentPay(t,e){let r=new a.WM({Authorization:"Bearer "+this.authService.token});return this.http.put(n.$g+"/appointmet-pay/"+t,e,{headers:r})}deleteAppointmentPay(t){let e=new a.WM({Authorization:"Bearer "+this.authService.token});return this.http.delete(n.$g+"/appointmet-pay/"+t,{headers:e})}}o.\u0275fac=function(t){return new(t||o)(i.LFG(a.eN),i.LFG(u.e))},o.\u0275prov=i.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}}]);