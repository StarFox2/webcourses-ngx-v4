"use strict";(self.webpackChunkwebcourses_ngx=self.webpackChunkwebcourses_ngx||[]).push([[44],{44:(z,l,o)=>{o.r(l),o.d(l,{EnrolMessageModule:()=>C});var a=o(9808),i=o(15),u=o(4850),g=o(8544),e=o(6435),h=o(200),d=o(6021),m=o(9401),p=o(9356);const v=function(t){return["/webcourse","activities",t]};function f(t,r){if(1&t&&(e.TgZ(0,"div",1),e.TgZ(1,"div",2),e.TgZ(2,"div",3),e._UZ(3,"img",4),e.TgZ(4,"div",5),e.TgZ(5,"h4",6),e._uU(6),e.qZA(),e.TgZ(7,"small",7),e._uU(8),e.qZA(),e._UZ(9,"br"),e.TgZ(10,"small",8),e._uU(11),e.qZA(),e.TgZ(12,"div",9),e._UZ(13,"p",10),e.ALo(14,"safehtml"),e.TgZ(15,"button",11),e._uU(16,"Let's start the course!"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t){const s=r.ngIf;e.Q6J("@fadeInOut",void 0),e.xp6(3),e.cQ8("src","/publisher-files/",s.publisher_id,"/courses/",s.course_id,"/images/",s.cover,"",e.LSH),e.s9C("alt",s.cover_alt),e.xp6(3),e.Oqu(s.title),e.xp6(2),e.Oqu(s.short_desc),e.xp6(3),e.hij("Published by ",s.publisher,""),e.xp6(2),e.Q6J("innerHtml",e.xi3(14,10,s.message,"html"),e.oJD),e.xp6(2),e.Q6J("routerLink",e.VKq(13,v,s.start_aid))}}let M=(()=>{class t{constructor(s,n,b,L){this.route=s,this.globalWebCourseService=n,this.publisherService=b,this.themeService=L}ngOnInit(){this.enrolMessage$=this.route.data.pipe((0,u.U)(s=>s.enrolMessage)),this.globalWebCourseService.setTitle(this.route.snapshot.data.title),this.publisherService.getPublisher(this.route.snapshot.params.cid,"cid").subscribe(s=>{this.themeService.changeTheme(s.theme)})}}return t.\u0275fac=function(s){return new(s||t)(e.Y36(i.gz),e.Y36(h.z),e.Y36(d.p),e.Y36(m.f))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-enrol-message"]],decls:2,vars:3,consts:[["id","fullMainContent",4,"ngIf"],["id","fullMainContent"],[1,"container-fluid",2,"max-width","976px"],[1,"card","m-2"],[1,"card-img-top",2,"min-height","25rem",3,"src","alt"],[1,"card-body",2,"min-height","13rem"],[1,"card-title","common-heading"],[1,"text-secondary","text-uppercase"],[1,"text-secondary","mt-2"],[1,"my-3"],[3,"innerHtml"],[1,"btn","btn-success","mt-5",3,"routerLink"]],template:function(s,n){1&s&&(e.YNc(0,f,17,15,"div",0),e.ALo(1,"async")),2&s&&e.Q6J("ngIf",e.lcZ(1,1,n.enrolMessage$))},directives:[a.O5,i.rH],pipes:[a.Ov,p.r],styles:[""],data:{animation:[g.t]}}),t})();var Z=o(520),E=o(122);let y=(()=>{class t{constructor(s,n){this.http=s,this.config=n}getEnrolMessage(s){return this.http.get(`\n      ${this.config.params.api.route}/courses/enrol_message.php?cid=${s}\n    `).pipe(n=>n)}}return t.\u0275fac=function(s){return new(s||t)(e.LFG(Z.eN),e.LFG(E.E))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),c=(()=>{class t{constructor(s){this.enrolMessageService=s}resolve(s){return this.enrolMessageService.getEnrolMessage(+s.paramMap.get("cid"))}}return t.\u0275fac=function(s){return new(s||t)(e.LFG(y))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();const S=[{path:"",redirectTo:"/catalogue",pathMatch:"full"},{path:":cid/welcome",component:M,data:{title:"Welcome to course "},resolve:{enrolMessage:c}}];let T=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[c],imports:[[[i.Bz.forChild(S)],a.ez],i.Bz]}),t})();var x=o(7733),A=o(5055);let C=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[a.ez,T,x.g,A.D]]}),t})()}}]);