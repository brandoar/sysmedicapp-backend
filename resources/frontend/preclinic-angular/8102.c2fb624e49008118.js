"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[8102],{8102:(U,u,s)=>{s.r(u),s.d(u,{DepartmentListModule:()=>l});var p=s(6895),d=s(27),f=s(7155),v=s(6382),t=s(4650),b=s(7945),_=s(6308),m=s(433);const A=function(n,a){return{"status-green":n,"status-pink":a}};function T(n,a){if(1&n&&(t.TgZ(0,"tr")(1,"td")(2,"div",36),t._UZ(3,"input",37),t.qZA()(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td",53)(7,"a",7),t._UZ(8,"img",54),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td")(15,"button",55),t._uU(16),t.qZA()(),t.TgZ(17,"td",56)(18,"div",57)(19,"a",58),t._UZ(20,"i",59),t.qZA(),t.TgZ(21,"div",60)(22,"a",61),t._UZ(23,"i",62),t._uU(24," Edit"),t.qZA(),t.TgZ(25,"a",63),t._UZ(26,"i",64),t._uU(27," Delete"),t.qZA()()()()()),2&n){const e=a.$implicit,r=t.oxw();t.xp6(5),t.Oqu(e.department),t.xp6(2),t.Q6J("routerLink",r.routes.profile),t.xp6(1),t.Q6J("src",e.img,t.LSH),t.xp6(1),t.hij(" ",e.departmentHead,""),t.xp6(2),t.Oqu(e.description),t.xp6(2),t.Oqu(e.date),t.xp6(2),t.Q6J("ngClass",t.WLB(9,A,"Active"===e.status,"In Active"===e.status)),t.xp6(1),t.Oqu(e.status),t.xp6(6),t.Q6J("routerLink",r.routes.editDepartment)}}function D(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"li",66),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.moveToPage(i.currentPage-2))}),t.TgZ(1,"a",67),t._uU(2," ... "),t.qZA()()}if(2&n){const e=t.oxw(2);t.Q6J("hidden",1===e.currentPage)}}function L(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"li",66),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.moveToPage(i.currentPage+2))}),t.TgZ(1,"a",67),t._uU(2," ... "),t.qZA()()}if(2&n){const e=t.oxw(2);t.Q6J("hidden",e.currentPage>=e.pageNumberArray[e.pageNumberArray.length-2]||e.totalData<e.serialNumberArray[e.serialNumberArray.length-1])}}function k(n,a){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"li",50)(2,"a",52),t.NdJ("click",function(){const g=t.CHM(e).$implicit,h=t.oxw();return t.KtG(h.moveToPage(g))}),t._uU(3),t.qZA()(),t.YNc(4,D,3,1,"li",65),t.YNc(5,L,3,1,"li",65),t.BQk()}if(2&n){const e=a.$implicit,r=a.index,i=t.oxw();t.xp6(1),t.ekj("active",e===i.currentPage),t.Q6J("ngClass",i.pageNumberArray[i.currentPage-2]>e&&1!==e&&i.pageNumberArray.length>6||i.pageNumberArray[i.currentPage]<e&&1!==e&&i.pageNumberArray.length>6&&i.pageNumberArray.length!==e?"hide-page-no":"show-page-no"),t.xp6(2),t.hij(" ",e," "),t.xp6(1),t.Q6J("ngIf",0===r&&i.pageNumberArray.length>6&&i.currentPage>2),t.xp6(1),t.Q6J("ngIf",r===i.pageNumberArray.length-2&&i.pageNumberArray.length>6)}}const Z=function(n){return{disabled:n}};class c{constructor(a){this.data=a,this.routes=v._,this.departmentList=[],this.showFilter=!1,this.searchDataValue="",this.lastIndex=0,this.pageSize=10,this.totalData=0,this.skip=0,this.limit=this.pageSize,this.pageIndex=0,this.serialNumberArray=[],this.currentPage=1,this.pageNumberArray=[],this.pageSelection=[],this.totalPages=0}ngOnInit(){this.getTableData()}getTableData(){this.departmentList=[],this.serialNumberArray=[],this.data.getDepartmentList().subscribe(a=>{this.totalData=a.totalData,a.data.map((e,r)=>{const i=r+1;r>=this.skip&&i<=this.limit&&(this.departmentList.push(e),this.serialNumberArray.push(i))}),this.dataSource=new f.by(this.departmentList),this.calculateTotalPages(this.totalData,this.pageSize)})}searchData(a){this.dataSource.filter=a.trim().toLowerCase(),this.departmentList=this.dataSource.filteredData}sortData(a){const e=this.departmentList.slice();this.departmentList=a.active&&""!==a.direction?e.sort((r,i)=>(r[a.active]<i[a.active]?-1:1)*("asc"===a.direction?1:-1)):e}getMoreData(a){"next"==a?(this.currentPage++,this.pageIndex=this.currentPage-1,this.limit+=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData()):"previous"==a&&(this.currentPage--,this.pageIndex=this.currentPage-1,this.limit-=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData())}moveToPage(a){this.currentPage=a,this.skip=this.pageSelection[a-1].skip,this.limit=this.pageSelection[a-1].limit,a>this.currentPage?this.pageIndex=a-1:a<this.currentPage&&(this.pageIndex=a+1),this.getTableData()}PageSize(){this.pageSelection=[],this.limit=this.pageSize,this.skip=0,this.currentPage=1,this.getTableData()}calculateTotalPages(a,e){this.pageNumberArray=[],this.totalPages=a/e,this.totalPages%1!=0&&(this.totalPages=Math.trunc(this.totalPages+1));for(var r=1;r<=this.totalPages;r++){const i=e*r,g=i-e;this.pageNumberArray.push(r),this.pageSelection.push({skip:g,limit:i})}}}c.\u0275fac=function(a){return new(a||c)(t.Y36(b.D))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-department-list"]],decls:76,vars:14,consts:[[1,"page-wrapper"],[1,"content"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"feather","icon-chevron-right"],[1,"breadcrumb-item","active"],[1,"card","card-table","show-entire"],[1,"card-body"],[1,"page-table-header","mb-2"],[1,"row","align-items-center"],[1,"col"],[1,"doctor-table-blk"],[1,"doctor-search-blk"],[1,"top-nav-search","table-search-blk"],["placeholder","Search here",1,"form-control",3,"ngModel","ngModelChange"],[1,"btn"],["src","assets/img/icons/search-normal.svg","alt",""],[1,"add-group"],[1,"btn","btn-primary","add-pluss","ms-2",3,"routerLink"],["src","assets/img/icons/plus.svg","alt",""],["href","javascript:;",1,"btn","btn-primary","doctor-refresh","ms-2"],["src","assets/img/icons/re-fresh.svg","alt",""],[1,"col-auto","text-end","float-end","ms-auto","download-grp"],["href","javascript:;",1,"me-2"],["src","assets/img/icons/pdf-icon-01.svg","alt",""],["src","assets/img/icons/pdf-icon-02.svg","alt",""],["src","assets/img/icons/pdf-icon-03.svg","alt",""],["href","javascript:;"],["src","assets/img/icons/pdf-icon-04.svg","alt",""],[1,"table-responsive"],["matSort","",1,"table","border-0","custom-table","comman-table","datatable","mb-0",3,"matSortChange"],["mat-sort-header","checkbox"],[1,"form-check","check-tables"],["type","checkbox","value","something",1,"form-check-input"],["mat-sort-header","department"],["mat-sort-header","departmentHead"],["mat-sort-header","description"],["mat-sort-header","date"],["mat-sort-header","status"],[4,"ngFor","ngForOf"],[1,"table_footer"],[1,"col-sm-12","col-md-5"],[1,"dataTables_info"],[1,"col-sm-12","col-md-7"],[1,"pagination_section"],[1,"pagination"],[1,"page-item",3,"ngClass"],["href","javascript:void(0);","tabindex","-1",1,"page-link",3,"click"],["href","javascript:void(0);",1,"page-link",3,"click"],[1,"profile-image"],["width","28","height","28","alt","",1,"rounded-circle","m-r-5",3,"src"],[1,"custom-badge",3,"ngClass"],[1,"text-end"],[1,"dropdown","dropdown-action"],["href","javascript:void(0);","data-bs-toggle","dropdown","aria-expanded","false",1,"action-icon","dropdown-toggle"],[1,"fa","fa-ellipsis-v"],[1,"dropdown-menu","dropdown-menu-end"],[1,"dropdown-item",3,"routerLink"],[1,"fa-solid","fa-pen-to-square","m-r-5"],["href","javascript:void(0);","data-bs-toggle","modal","data-bs-target","#delete_patient",1,"dropdown-item"],[1,"fa","fa-trash-alt","m-r-5"],["class","page-item",3,"hidden","click",4,"ngIf"],[1,"page-item",3,"hidden","click"],["href","javascript:void(0);",1,"page-link"]],template:function(a,e){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),t._uU(8,"Department "),t.qZA()(),t.TgZ(9,"li",6),t._UZ(10,"i",8),t.qZA(),t.TgZ(11,"li",9),t._uU(12,"Department List"),t.qZA()()()()(),t.TgZ(13,"div",3)(14,"div",4)(15,"div",10)(16,"div",11)(17,"div",12)(18,"div",13)(19,"div",14)(20,"div",15)(21,"h3"),t._uU(22,"Department List"),t.qZA(),t.TgZ(23,"div",16)(24,"div",17)(25,"input",18),t.NdJ("ngModelChange",function(i){return e.searchDataValue=i})("ngModelChange",function(){return e.searchData(e.searchDataValue)}),t.qZA(),t.TgZ(26,"a",19),t._UZ(27,"img",20),t.qZA()(),t.TgZ(28,"div",21)(29,"a",22),t._UZ(30,"img",23),t.qZA(),t.TgZ(31,"a",24),t._UZ(32,"img",25),t.qZA()()()()(),t.TgZ(33,"div",26)(34,"a",27),t._UZ(35,"img",28),t.qZA(),t.TgZ(36,"a",27),t._UZ(37,"img",29),t.qZA(),t.TgZ(38,"a",27),t._UZ(39,"img",30),t.qZA(),t.TgZ(40,"a",31),t._UZ(41,"img",32),t.qZA()()()(),t.TgZ(42,"div",33)(43,"table",34),t.NdJ("matSortChange",function(i){return e.sortData(i)}),t.TgZ(44,"thead")(45,"tr")(46,"th",35)(47,"div",36),t._UZ(48,"input",37),t.qZA()(),t.TgZ(49,"th",38),t._uU(50,"Department"),t.qZA(),t.TgZ(51,"th",39),t._uU(52,"Department Head"),t.qZA(),t.TgZ(53,"th",40),t._uU(54,"Description"),t.qZA(),t.TgZ(55,"th",41),t._uU(56,"Date"),t.qZA(),t.TgZ(57,"th",42),t._uU(58,"Status"),t.qZA(),t._UZ(59,"th"),t.qZA()(),t.TgZ(60,"tbody"),t.YNc(61,T,28,12,"tr",43),t.qZA()(),t.TgZ(62,"div",44)(63,"div",45)(64,"div",46),t._uU(65),t.qZA()(),t.TgZ(66,"div",47)(67,"div",48)(68,"ul",49)(69,"li",50)(70,"a",51),t.NdJ("click",function(){return e.getMoreData("previous")}),t._uU(71,"Previous"),t.qZA()(),t.YNc(72,k,6,6,"ng-container",43),t.TgZ(73,"li",50)(74,"a",52),t.NdJ("click",function(){return e.getMoreData("next")}),t._uU(75,"Next "),t.qZA()()()()()()()()()()()()()),2&a&&(t.xp6(7),t.Q6J("routerLink",e.routes.departmentList),t.xp6(18),t.Q6J("ngModel",e.searchDataValue),t.xp6(4),t.Q6J("routerLink",e.routes.addDepartment),t.xp6(32),t.Q6J("ngForOf",e.departmentList),t.xp6(4),t.lnq(" Showing ",e.serialNumberArray[0]," to ",e.serialNumberArray[e.serialNumberArray.length-1]," of ",e.totalData," entries "),t.xp6(4),t.Q6J("ngClass",t.VKq(10,Z,1===e.currentPage)),t.xp6(3),t.Q6J("ngForOf",e.pageNumberArray),t.xp6(1),t.Q6J("ngClass",t.VKq(12,Z,e.currentPage===e.pageNumberArray[e.pageNumberArray.length-1]||0===e.departmentList.length)))},dependencies:[p.mk,p.sg,p.O5,d.rH,_.YE,_.nU,m.Fj,m.JJ,m.On]});const C=[{path:"",component:c}];class o{}o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.Bz.forChild(C),d.Bz]});var y=s(9079);class l{}l.\u0275fac=function(a){return new(a||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[p.ez,o,y.m]})}}]);