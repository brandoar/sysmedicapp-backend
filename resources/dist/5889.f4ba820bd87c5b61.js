"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[5889],{5889:(b,Z,i)=>{i.r(Z),i.d(Z,{EditInvoiceModule:()=>u});var g=i(6895),s=i(27),a=i(433),v=i(6382),t=i(4650),m=i(3125),T=i(9549),_=i(4385),f=i(3238);function A(o,n){if(1&o&&(t.TgZ(0,"mat-option",57),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",e.value," ")}}function U(o,n){if(1&o&&(t.TgZ(0,"mat-option",57),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",e.value," ")}}function h(o,n){if(1&o&&(t.TgZ(0,"mat-option",57),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",e.value," ")}}function q(o,n){if(1&o&&(t.TgZ(0,"mat-option",57),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",e.value," ")}}const p=function(){return{standalone:!0}};class c{constructor(){this.routes=v._,this.date=new a.NI(new Date),this.selectedList1=[{value:"Select  Department"},{value:"Orthopedics"},{value:"Radiology"},{value:"Dentist"}],this.selectedList2=[{value:"Select  Tax"},{value:"VAT"},{value:"GST"},{value:"No GST"}],this.selectedList3=[{value:"Select Payment Method"},{value:"Debit Card"},{value:"Gpay"}],this.selectedList4=[{value:"Select  Tax"},{value:"Paid"},{value:"Un Paid"},{value:"Partially Paid"}]}}c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-edit-invoice"]],decls:187,vars:22,consts:[[1,"page-wrapper"],[1,"content"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"feather","icon-chevron-right"],[1,"breadcrumb-item","active"],[1,"card"],[1,"card-body"],[1,"col-12"],[1,"form-heading"],[1,"col-12","col-md-6","col-xl-6"],[1,"form-group","local-forms"],[1,"login-danger"],["type","text","value","Bernardo James",1,"form-control"],["type","email","value","example@gmail.com",1,"form-control"],["placeholder","Select  Department",1,"form-control","select",3,"ngModel","ngModelOptions","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Select  Tax",1,"form-control","select",3,"ngModel","ngModelOptions","ngModelChange"],["type","text","matInput","",1,"form-control","datetimepicker",3,"formControl","matDatepicker"],["picker1",""],["matIconSuffix","",3,"for"],["type","text","value","04.05.2020","matInput","",1,"form-control","datetimepicker",3,"matDatepicker"],["picker2",""],["rows","3","cols","30",1,"form-control"],["placeholder","Select Payment Method",1,"form-control","select",3,"ngModel","ngModelOptions","ngModelChange"],[1,"col-12","col-sm-12"],[1,"table-responsive"],[1,"table","border-0","custom-table","invoices-table"],[2,"width","20px"],[1,"col-sm-2"],[1,"col-md-6"],[2,"width","100px"],[2,"width","80px"],["type","text","value","Full body checkup",1,"form-control",2,"min-width","150px"],["type","text","value","Lorem ipsum dolor sit amet, consectetur adipiscing elit",1,"form-control",2,"min-width","150px"],["type","text","value","150",1,"form-control",2,"width","100px"],["type","text","value","1",1,"form-control",2,"width","80px"],["type","text","value","150",1,"form-control",2,"width","120px"],["href","javascript:void(0)","title","Add",1,"text-success","font-18","add-table-invoice"],[1,"fa","fa-plus"],["type","text","value","Blood Test",1,"form-control",2,"min-width","150px"],["type","text","value","12",1,"form-control",2,"width","100px"],["type","text","value","120",1,"form-control",2,"width","120px"],[1,"table-responsive","custom-table","invoices-table"],[1,"table","border-0","grand-totals"],[1,"text-end"],["type","text","value","220",1,"form-control","text-end"],["type","text","value","0",1,"form-control","text-end"],[1,"bold-total"],["type","text","value","$320",1,"form-control","text-end"],[1,"doctor-submit","text-end"],["type","submit",1,"btn","btn-primary","submit-form","me-2"],["type","submit",1,"btn","btn-primary","cancel-form"],[3,"value"]],template:function(n,e){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),t._uU(8,"Accounts "),t.qZA()(),t.TgZ(9,"li",6),t._UZ(10,"i",8),t.qZA(),t.TgZ(11,"li",9),t._uU(12,"Edit Invoice"),t.qZA()()()()(),t.TgZ(13,"div",3)(14,"div",4)(15,"div",10)(16,"div",11)(17,"form")(18,"div",3)(19,"div",12)(20,"div",13)(21,"h4"),t._uU(22,"Edit Invoice"),t.qZA()()(),t.TgZ(23,"div",14)(24,"div",15)(25,"label"),t._uU(26,"Patient Name "),t.TgZ(27,"span",16),t._uU(28,"*"),t.qZA()(),t._UZ(29,"input",17),t.qZA()(),t.TgZ(30,"div",14)(31,"div",15)(32,"label"),t._uU(33,"Email "),t.TgZ(34,"span",16),t._uU(35,"*"),t.qZA()(),t._UZ(36,"input",18),t.qZA()(),t.TgZ(37,"div",14)(38,"div",15)(39,"label"),t._uU(40,"Department "),t.TgZ(41,"span",16),t._uU(42,"*"),t.qZA()(),t.TgZ(43,"mat-select",19),t.NdJ("ngModelChange",function(l){return e.selectedValue=l}),t.YNc(44,A,2,2,"mat-option",20),t.qZA()()(),t.TgZ(45,"div",14)(46,"div",15)(47,"label"),t._uU(48,"Tax "),t.TgZ(49,"span",16),t._uU(50,"*"),t.qZA()(),t.TgZ(51,"mat-select",21),t.NdJ("ngModelChange",function(l){return e.selectedValue=l}),t.YNc(52,U,2,2,"mat-option",20),t.qZA()()(),t.TgZ(53,"div",14)(54,"div",15)(55,"label"),t._uU(56,"Invoice Date "),t.TgZ(57,"span",16),t._uU(58,"*"),t.qZA()(),t._UZ(59,"input",22)(60,"mat-datepicker",null,23)(62,"mat-datepicker-toggle",24),t.qZA()(),t.TgZ(63,"div",14)(64,"div",15)(65,"label"),t._uU(66,"Due Date "),t.TgZ(67,"span",16),t._uU(68,"*"),t.qZA()(),t._UZ(69,"input",25)(70,"mat-datepicker",null,26)(72,"mat-datepicker-toggle",24),t.qZA()(),t.TgZ(73,"div",14)(74,"div",15)(75,"label"),t._uU(76,"Patient Address "),t.TgZ(77,"span",16),t._uU(78,"*"),t.qZA()(),t.TgZ(79,"textarea",27),t._uU(80,"5754 Airport Rd, Coosada, AL, 36020"),t.qZA()()(),t.TgZ(81,"div",14)(82,"div",15)(83,"label"),t._uU(84,"Billing Address "),t.TgZ(85,"span",16),t._uU(86,"*"),t.qZA()(),t.TgZ(87,"textarea",27),t._uU(88,"5754 Airport Rd, Coosada, AL, 36020"),t.qZA()()(),t.TgZ(89,"div",14)(90,"div",15)(91,"label"),t._uU(92,"Payment Method "),t.TgZ(93,"span",16),t._uU(94,"*"),t.qZA()(),t.TgZ(95,"mat-select",28),t.NdJ("ngModelChange",function(l){return e.selectedValue=l}),t.YNc(96,h,2,2,"mat-option",20),t.qZA()()(),t.TgZ(97,"div",14)(98,"div",15)(99,"label"),t._uU(100,"Select Payment Status "),t.TgZ(101,"span",16),t._uU(102,"*"),t.qZA()(),t.TgZ(103,"mat-select",21),t.NdJ("ngModelChange",function(l){return e.selectedValue=l}),t.YNc(104,q,2,2,"mat-option",20),t.qZA()()(),t.TgZ(105,"div",29)(106,"div",30)(107,"table",31)(108,"thead")(109,"tr")(110,"th",32),t._uU(111,"#"),t.qZA(),t.TgZ(112,"th",33),t._uU(113,"Item"),t.qZA(),t.TgZ(114,"th",34),t._uU(115,"Description"),t.qZA(),t.TgZ(116,"th",35),t._uU(117,"Unit Cost"),t.qZA(),t.TgZ(118,"th",36),t._uU(119,"Qty"),t.qZA(),t.TgZ(120,"th"),t._uU(121,"Amount"),t.qZA(),t._UZ(122,"th"),t.qZA()(),t.TgZ(123,"tbody")(124,"tr")(125,"td"),t._uU(126,"1"),t.qZA(),t.TgZ(127,"td"),t._UZ(128,"input",37),t.qZA(),t.TgZ(129,"td"),t._UZ(130,"input",38),t.qZA(),t.TgZ(131,"td"),t._UZ(132,"input",39),t.qZA(),t.TgZ(133,"td"),t._UZ(134,"input",40),t.qZA(),t.TgZ(135,"td"),t._UZ(136,"input",41),t.qZA(),t.TgZ(137,"td")(138,"a",42),t._UZ(139,"i",43),t.qZA()()(),t.TgZ(140,"tr")(141,"td"),t._uU(142,"2"),t.qZA(),t.TgZ(143,"td"),t._UZ(144,"input",44),t.qZA(),t.TgZ(145,"td"),t._UZ(146,"input",38),t.qZA(),t.TgZ(147,"td"),t._UZ(148,"input",45),t.qZA(),t.TgZ(149,"td"),t._UZ(150,"input",40),t.qZA(),t.TgZ(151,"td"),t._UZ(152,"input",46),t.qZA(),t.TgZ(153,"td")(154,"a",42),t._UZ(155,"i",43),t.qZA()()()()()(),t.TgZ(156,"div",47)(157,"table",48)(158,"tbody")(159,"tr")(160,"td",49),t._uU(161,"Total"),t.qZA(),t.TgZ(162,"td"),t._UZ(163,"input",50),t.qZA()(),t.TgZ(164,"tr")(165,"td",49),t._uU(166,"Tax"),t.qZA(),t.TgZ(167,"td"),t._UZ(168,"input",51),t.qZA()(),t.TgZ(169,"tr",52)(170,"td",49),t._uU(171," Grand Total "),t.qZA(),t.TgZ(172,"td"),t._UZ(173,"input",53),t.qZA()()()()()(),t.TgZ(174,"div",12)(175,"div",15)(176,"label"),t._uU(177,"Other Information "),t.TgZ(178,"span",16),t._uU(179,"*"),t.qZA()(),t._UZ(180,"textarea",27),t.qZA()(),t.TgZ(181,"div",12)(182,"div",54)(183,"button",55),t._uU(184,"Submit"),t.qZA(),t.TgZ(185,"button",56),t._uU(186,"Cancel"),t.qZA()()()()()()()()()()()),2&n){const r=t.MAs(61),l=t.MAs(71);t.xp6(7),t.Q6J("routerLink",e.routes.invoices),t.xp6(36),t.Q6J("ngModel",e.selectedValue)("ngModelOptions",t.DdM(18,p)),t.xp6(1),t.Q6J("ngForOf",e.selectedList1),t.xp6(7),t.Q6J("ngModel",e.selectedValue)("ngModelOptions",t.DdM(19,p)),t.xp6(1),t.Q6J("ngForOf",e.selectedList2),t.xp6(7),t.Q6J("formControl",e.date)("matDatepicker",r),t.xp6(3),t.Q6J("for",r),t.xp6(7),t.Q6J("matDatepicker",l),t.xp6(3),t.Q6J("for",l),t.xp6(23),t.Q6J("ngModel",e.selectedValue)("ngModelOptions",t.DdM(20,p)),t.xp6(1),t.Q6J("ngForOf",e.selectedList3),t.xp6(7),t.Q6J("ngModel",e.selectedValue)("ngModelOptions",t.DdM(21,p)),t.xp6(1),t.Q6J("ngForOf",e.selectedList4)}},dependencies:[g.sg,s.rH,m.Mq,m.hl,m.nW,T.R9,_.gD,f.ey,a._Y,a.Fj,a.JJ,a.JL,a.On,a.F,a.oH]});const x=[{path:"",component:c}];class d{}d.\u0275fac=function(n){return new(n||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[s.Bz.forChild(x),s.Bz]});var M=i(9079);class u{}u.\u0275fac=function(n){return new(n||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[g.ez,d,M.m]})}}]);