"use strict";(self.webpackChunke_pos_point_dashboard=self.webpackChunke_pos_point_dashboard||[]).push([[592],{5794:(M,h,e)=>{e.d(h,{c:()=>P});var u=e(4499),i=e(2997),s=e(4753),o=e(7384),E=e(2835),_=e(5237),v=e(4970),l=e(4924),d=e(3668),c=e(5474),O=e(6129),D=e(840);let P=(()=>{class r{constructor(t,a,n){this.httpService=t,this.utilService=a,this.authService=n,this.brands$=new u.X({data:[],loading:!0,loaded:!1}),this.brands=[]}getAll(){return this.brands.length?(0,i.of)(this.brands):(this.brands$.next({data:[],loading:!0,loaded:!1}),this.httpService.requestCell(l.oi.BRAND,_.m.GET).pipe((0,s.U)(({data:t})=>t.map(a=>this.utilService.convertStringPropertyToNumber(a,["id","locationId","terminalId"]))),(0,o.b)(t=>{this.brands=t,this.brands$.next({data:t,loading:!1,loaded:!0})}),(0,E.K)(t=>(this.brands$.next({data:[],loading:!1,loaded:!1,error:t}),(0,i.of)([]))),(0,v.d)()))}addNew(t){return this.httpService.requestCell(l.oi.BRAND,_.m.POST,Object.assign(Object.assign({},this.brandObj),{name:t})).pipe((0,s.U)(({data:a})=>a),(0,o.b)(a=>{this.brands.push(a),this.brands$.next({data:this.brands})}))}get categorySkeletonLoader$(){return(0,i.of)(Array(10).fill(""))}get isBrandsEmpty$(){return this.brands$.pipe((0,s.U)(t=>!(t.data.length||!t.loaded)))}get isBrandsLoading$(){return this.brands$.pipe((0,s.U)(t=>!!t.loading))}get isBrandsLoaded$(){return this.brands$.pipe((0,s.U)(t=>!!t.loaded))}handleError(t){this.brands$.next({data:this.brands,error:t})}get brandObj(){var t,a,n;return{companyCode:null===(t=this.authService.authenticatedUser)||void 0===t?void 0:t.companyCode,locationId:null===(a=this.authService.authenticatedUser)||void 0===a?void 0:a.location,terminalId:null===(n=this.authService.authenticatedUser)||void 0===n?void 0:n.terminal,name:"",backColor:"",textColor:"",fontSize:"",buttonHeight:"",shortDescription:"",active:!0,isNew:!0,isUpdated:!0,createdBy:"",createdOn:new Date,updatedBy:"",updatedOn:new Date}}}return r.\u0275fac=function(t){return new(t||r)(d.LFG(c.O),d.LFG(O.f),d.LFG(D.e))},r.\u0275prov=d.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);