"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[8405],{8405:(_,f,o)=>{o.r(f),o.d(f,{CalendarAppointmentModule:()=>l});var h=o(6895),u=o(27),t=o(4650);class c{}c.\u0275fac=function(e){return new(e||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-calendar-appointment"]],decls:1,vars:0,template:function(e,n){1&e&&t._UZ(0,"router-outlet")},dependencies:[u.lC]});var C=o(5911),A=o(821),Z=o(7552),M=o(3564),v=o(529),y=o(5862),T=o(866);class a{constructor(e,n){this.http=e,this.authService=n}calendarAppointment(e){let n=new v.WM({Authorization:"Bearer "+this.authService.token});return this.http.post(y.$g+"/appointmet/calendar",e,{headers:n})}}a.\u0275fac=function(e){return new(e||a)(t.LFG(v.eN),t.LFG(T.e))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"});var x=o(4385),J=o(3238),S=o(9476),p=o(433);function F(i,e){if(1&i){const n=t.EpF();t.TgZ(0,"div",12)(1,"div",13)(2,"label"),t._uU(3,"Doctor Name "),t.qZA(),t.TgZ(4,"input",21),t.NdJ("ngModelChange",function(m){t.CHM(n);const g=t.oxw();return t.KtG(g.search_doctor=m)}),t.qZA()()()}if(2&i){const n=t.oxw();t.xp6(4),t.Q6J("ngModel",n.search_doctor)}}function U(i,e){if(1&i&&(t.TgZ(0,"mat-option",24),t._uU(1),t.qZA()),2&i){const n=e.$implicit;t.Q6J("value",n.id),t.xp6(1),t.hij(" ",n.name," ")}}const b=function(){return{standalone:!0}};function D(i,e){if(1&i){const n=t.EpF();t.TgZ(0,"div",12)(1,"div",13)(2,"label"),t._uU(3,"Specialities "),t.qZA(),t.TgZ(4,"mat-select",22),t.NdJ("ngModelChange",function(m){t.CHM(n);const g=t.oxw();return t.KtG(g.specialitie_id=m)}),t.YNc(5,U,2,2,"mat-option",23),t.qZA()()()}if(2&i){const n=t.oxw();t.xp6(4),t.Q6J("ngModel",n.specialitie_id)("ngModelOptions",t.DdM(3,b)),t.xp6(1),t.Q6J("ngForOf",n.specialities)}}class s{constructor(e,n){this.appointmentPayService=e,this.appointmentCalendarService=n,this.events=[],this.specialities=[],this.specialitie_id="",this.search_doctor="",this.search_patient="",this.options={plugins:[Z.Z,C.Z,A.ZP],initialDate:new Date,headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay"},initialView:"dayGridMonth",editable:!0,selectable:!0,selectMirror:!0,dayMaxEvents:!0,events:[{title:"Meeting",start:new Date}]}}isPermited(){let e=!1;return this.user.roles.forEach(n=>{-1!=n.toUpperCase().indexOf("DOCTOR")&&(e=!0)}),e}ngOnInit(){this.appointmentPayService.listConfig().subscribe(e=>{this.specialities=e.specialities}),this.user=this.appointmentPayService.authService.user,this.calendarAppointment()}calendarAppointment(){this.appointmentCalendarService.calendarAppointment({specialitie_id:this.specialitie_id,search_doctor:this.search_doctor,search_patient:this.search_patient}).subscribe(n=>{console.log(n),this.options={...this.options,events:n.appointments}})}searchData(){this.calendarAppointment()}}s.\u0275fac=function(e){return new(e||s)(t.Y36(M.E),t.Y36(a))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-appointment-calendar"]],decls:33,vars:4,consts:[[1,"page-wrapper"],[1,"content"],[1,"row"],[1,"col-sm-8","col-12"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","#","onclick","return false;"],[1,"feather","icon-chevron-right"],[1,"breadcrumb-item","active"],[1,"col-sm-4","col-12","text-end","m-b-30"],[1,"col-lg-12"],["class","col-12 col-md-6 col-xl-3",4,"ngIf"],[1,"col-12","col-md-6","col-xl-3"],[1,"form-group","local-forms"],["name","search_patient","type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"doctor-submit"],["type","button",1,"btn","btn-primary","submit-list-form","me-2",3,"click"],[1,"card-box","mb-0"],[1,"col-md-12"],["id","calendar",1,"full-cal"],[3,"options"],["name","search_doctor","type","text",1,"form-control",3,"ngModel","ngModelChange"],["placeholder","Select Specialitie",1,"form-control","select",3,"ngModel","ngModelOptions","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"ul",4)(5,"li",5)(6,"a",6),t._uU(7,"Apoointment "),t.qZA()(),t.TgZ(8,"li",5),t._UZ(9,"i",7),t.qZA(),t.TgZ(10,"li",8),t._uU(11,"Calendar"),t.qZA()()(),t._UZ(12,"div",9),t.qZA(),t.TgZ(13,"div",2)(14,"div",10)(15,"div",2),t.YNc(16,F,5,1,"div",11),t.TgZ(17,"div",12)(18,"div",13)(19,"label"),t._uU(20,"Patient Name "),t.qZA(),t.TgZ(21,"input",14),t.NdJ("ngModelChange",function(m){return n.search_patient=m}),t.qZA()()(),t.YNc(22,D,6,4,"div",11),t.TgZ(23,"div",12)(24,"div",15)(25,"button",16),t.NdJ("click",function(){return n.searchData()}),t._uU(26,"Search"),t.qZA()()()()(),t.TgZ(27,"div",10)(28,"div",17)(29,"div",2)(30,"div",18)(31,"div",19),t._UZ(32,"full-calendar",20),t.qZA()()()()()()()()),2&e&&(t.xp6(16),t.Q6J("ngIf",!n.isPermited()),t.xp6(5),t.Q6J("ngModel",n.search_patient),t.xp6(1),t.Q6J("ngIf",!n.isPermited()),t.xp6(10),t.Q6J("options",n.options))},dependencies:[h.sg,h.O5,x.gD,J.ey,S.w,p.Fj,p.JJ,p.On]});const N=[{path:"",component:c,children:[{path:"show",component:s}]}];class r{}r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[u.Bz.forChild(N),u.Bz]});var O=o(9079);class l{}l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[h.ez,r,O.m,p.u5,p.UX,v.JF,u.Bz]})}}]);