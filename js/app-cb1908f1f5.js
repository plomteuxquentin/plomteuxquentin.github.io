/**
 * membershipManager - membershipManager Project Generated from HotTowel Angular
 * @authors 
 * @version v0.0.0
 * @link 
 * @license 
 */
!function(){"use strict";angular.module("app",["ngMaterial","app.core","app.core.entities","app.widgets","app.layout","app.journal","app.members","app.members.details","app.members.edit","app.members.list","app.sessions","app.sessions.details","app.sessions.edit","app.sessions.list"])}(),function(){"use strict";angular.module("app.admin",["app.core","app.widgets"])}(),function(){"use strict";angular.module("blocks.exception",["blocks.logger"])}(),function(){"use strict";angular.module("blocks.logger",[])}(),function(){"use strict";angular.module("blocks.router",["ui.router","blocks.logger"])}(),function(){"use strict";angular.module("app.core",["ngAnimate","ngSanitize","blocks.exception","blocks.logger","blocks.router","ui.router","ngplus","ngFileUpload","ngImgCrop"])}(),function(){"use strict";function e(e,t){var i={members:[{_id:1,name:"Tyrion Lannister",picture:"./assets/members/1.png",group:"Close-combat",seanceLeft:10,address:"13 avenue de broqueville 1200 Bruxelles",email:"plomteuxquentin@gmail.com",phone:"+32 0474 55 63 30",events:{}},{_id:2,name:"John Snow",picture:"./assets/members/2.png",group:"Close-combat",seanceLeft:5,address:"13 avenue de broqueville 1200 Bruxelles",email:"plomteuxquentin@gmail.com",phone:"+32 0474 55 63 30",events:{}},{_id:3,name:"Sansa Stark",picture:"./assets/members/3.png",group:"Close-combat",seanceLeft:1,address:"13 avenue de broqueville 1200 Bruxelles",email:"plomteuxquentin@gmail.com",phone:"+32 0474 55 63 30",events:{}},{_id:4,name:"Joffrey Baratheon",picture:"./assets/members/4.png",group:"Close-combat",seanceLeft:0,address:"13 avenue de broqueville 1200 Bruxelles",email:"plomteuxquentin@gmail.com",phone:"+32 0474 55 63 30",events:{}},{_id:5,name:"Margaery Tyrell",picture:"./assets/members/5.png",group:"Close-combat",seanceLeft:4,address:"13 avenue de broqueville 1200 Bruxelles",email:"plomteuxquentin@gmail.com",phone:"+32 0474 55 63 30",events:{}},{_id:6,name:"Khal Drogo",picture:"./assets/members/6.png",group:"Close-combat",seanceLeft:"demo",address:"13 avenue de broqueville 1200 Bruxelles",email:"plomteuxquentin@gmail.com",phone:"+32 0474 55 63 30",events:{}}],events:[],sessions:[{_id:1,date:new Date("2015/06/23"),participants:["Atchoum","Prof","Grincheux","Timide","Dormeur","Simplet"],nbrInscrits:12},{_id:2,date:new Date("2015/06/30"),participants:["Atchoum","Prof","Grincheux","Timide"],nbrInscrits:12},{_id:3,date:new Date("2015/09/01"),participants:["Atchoum","Prof","Grincheux"],nbrInscrits:12},{_id:4,date:new Date("2015/09/07"),participants:["Atchoum","Prof","Grincheux","Timide","Dormeur","Simplet","sept","huit","neuf","dix","onze","douze"],nbrInscrits:12}]};e.whenGET(new RegExp("\\/api\\/[a-zA-Z0-9_-]+\\/[0-9]+")).respond(function(e,n,s){var a=new RegExp("\\/api\\/([a-zA-Z0-9_-]+)\\/([0-9]+)"),o=n.match(a)[1],r=n.match(a)[2];return[200,t("filter")(i[o],{_id:r})[0]]}),e.whenGET(new RegExp("\\/api\\/[a-zA-Z0-9_-]+")).respond(function(e,t,n,s){var a=new RegExp("\\/api\\/([a-zA-Z0-9_-]+)"),o=t.match(a)[1];return[200,i[o]]}),e.whenGET(/\.html/).passThrough(),e.whenGET(/\.svg/).passThrough()}angular.module("app.core.entities",["ngResource","ngMockE2E"]).run(e),e.$inject=["$httpBackend","$filter"]}(),function(){"use strict";angular.module("app.dashboard",["app.core","app.widgets"])}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"journal",config:{url:"/journal",templateUrl:"app/journal/journal.html",controller:"JournalController",controllerAs:"vm",title:"journal",settings:{nav:3,icon:"journal",target:"journal"}}}]}angular.module("app.journal",["app.core","app.widgets"]).run(e),e.$inject=["routerHelper"]}(),function(){"use strict";angular.module("app.layout",["app.core"])}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"members.details",config:{url:"/details/:id",templateUrl:"app/members/details/members.details.html",controller:"MembersDetailsController",controllerAs:"vm",title:"members details"}}]}angular.module("app.members.details",["app.core","app.widgets"]).run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"members.edit",config:{url:":id/edit",templateUrl:"app/members/edit/members.edit.html",controller:"MembersEditController",controllerAs:"vm",title:"members edition"}}]}angular.module("app.members.edit",["app.core","app.widgets"]).run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"members.list",config:{url:"/list",templateUrl:"app/members/list/members.list.html",controller:"MembersListController",controllerAs:"vm",title:"members list"}}]}angular.module("app.members.list",["app.core","app.widgets"]).run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"members",config:{url:"/members",template:"<ui-view></ui-view>",title:"members",settings:{nav:1,icon:"members",target:"members.list"}}}]}angular.module("app.members",["app.core","app.widgets"]).run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"sessions.details",config:{url:"/details/:id",templateUrl:"app/sessions/details/sessions.details.html",controller:"SessionsDetailsController",controllerAs:"vm",title:"sessions details"}}]}angular.module("app.sessions.details",["app.core","app.widgets"]).run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"sessions.edit",config:{url:":id/edit",templateUrl:"app/sessions/edit/sessions.edit.html",controller:"SessionsEditController",controllerAs:"vm",title:"sessions edition"}}]}angular.module("app.sessions.edit",["app.core","app.widgets"]).run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"sessions.list",config:{url:"/list",templateUrl:"app/sessions/list/sessions.list.html",controller:"SessionsListController",controllerAs:"vm",title:"sessions list"}}]}angular.module("app.sessions.list",["app.core","app.widgets"]).run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"sessions",config:{url:"/sessions",template:"<ui-view></ui-view>",title:"sessions",settings:{nav:2,icon:"sessions",target:"sessions.list"}}}]}angular.module("app.sessions",["app.core","app.widgets"]).run(e),e.$inject=["routerHelper"]}(),function(){"use strict";angular.module("app.widgets",[])}(),function(){"use strict";function e(e){function t(){e.info("Activated Admin View")}var i=this;i.title="Admin",t()}angular.module("app.admin").controller("AdminController",e),e.$inject=["logger"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"admin",config:{url:"/admin",templateUrl:"app/admin/admin.html",controller:"AdminController",controllerAs:"vm",title:"Admin",settings:{nav:2,content:'<i class="fa fa-lock"></i> Admin'}}}]}angular.module("app.admin").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(){this.config={appErrorPrefix:void 0},this.configure=function(e){this.config.appErrorPrefix=e},this.$get=function(){return{config:this.config}}}function t(e){e.decorator("$exceptionHandler",i)}function i(e,t,i){return function(n,s){var a=t.config.appErrorPrefix||"",o={exception:n,cause:s};n.message=a+n.message,e(n,s),i.error(n.message,o)}}angular.module("blocks.exception").provider("exceptionHandler",e).config(t),t.$inject=["$provide"],i.$inject=["$delegate","exceptionHandler","logger"]}(),function(){"use strict";function e(e,t){function i(i){return function(n){var s,a;return n.data&&n.data.description&&(s="\n"+n.data.description,a=i+s),n.data.description=a,t.error(a),e.reject(n)}}var n={catcher:i};return n}e.$inject=["$q","logger"],angular.module("blocks.exception").factory("exception",e)}(),function(){"use strict";function e(e,t){function i(i,n,s){t.error(i,s),e.error("Error: "+i,n)}function n(i,n,s){t.info(i,s),e.info("Info: "+i,n)}function s(i,n,s){t.success(i,s),e.info("Success: "+i,n)}function a(i,n,s){t.warning(i,s),e.warn("Warning: "+i,n)}var o={showToasts:!0,error:i,info:n,success:s,warning:a,log:e.log};return o}angular.module("blocks.logger").factory("logger",e),e.$inject=["$log","toastr"]}(),function(){"use strict";function e(e,t,i){function n(e,n,a,o){function r(e,n){e.forEach(function(e){e.config.resolve=angular.extend(e.config.resolve||{},s.resolveAlways),t.state(e.state,e.config)}),n&&!p&&(p=!0,i.otherwise(n))}function l(){n.$on("$stateChangeError",function(t,i,n,s,a,r){if(!u){g.errors++,u=!0;var l=i&&(i.title||i.name||i.loadedTemplateUrl)||"unknown target",d="Error routing to "+l+". "+(r.data||"")+". <br/>"+(r.statusText||"")+": "+(r.status||"");o.warning(d,[i]),e.path("/")}})}function d(){l(),m()}function c(){return a.get()}function m(){n.$on("$stateChangeSuccess",function(e,t,i,a,o){g.changes++,u=!1;var r=s.docTitle+" "+(t.title||"");n.title=r})}var u=!1,p=!1,g={errors:0,changes:0},v={configureStates:r,getStates:c,stateCounts:g};return d(),v}var s={docTitle:void 0,resolveAlways:{}};e.html5Mode(!0),this.configure=function(e){angular.extend(s,e)},this.$get=n,n.$inject=["$location","$rootScope","$state","logger"]}angular.module("blocks.router").provider("routerHelper",e),e.$inject=["$locationProvider","$stateProvider","$urlRouterProvider"]}(),function(){"use strict";function e(e){e.options.timeOut=4e3,e.options.positionClass="toast-bottom-right"}function t(e,t,i){e.debugEnabled&&e.debugEnabled(!0),i.configure(n.appErrorPrefix),t.configure({docTitle:n.appTitle+": "})}var i=angular.module("app.core");i.config(e),e.$inject=["toastr"];var n={appErrorPrefix:"[membershipManager Error] ",appTitle:"membershipManager"};i.value("config",n),i.config(t),t.$inject=["$logProvider","routerHelperProvider","exceptionHandlerProvider"]}(),function(){"use strict";angular.module("app.core").constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function e(e){var i="/404";e.configureStates(t(),i)}function t(){return[{state:"404",config:{url:"/404",templateUrl:"app/core/404.html",title:"404"}}]}e.$inject=["routerHelper"],angular.module("app.core").run(e)}(),function(){"use strict";function e(e,t,i,n){function s(){return t.when(72)}function a(){function t(e){return e.data}function n(e){return i.catcher("XHR Failed for getPeople")(e)}return e.get("/api/people").then(t)["catch"](n)}var o={getPeople:a,getMessageCount:s};return o}angular.module("app.core").factory("dataservice",e),e.$inject=["$http","$q","exception","logger"]}(),function(){"use strict";function e(){return{restrict:"A",link:{post:function(e,t,i){t[0].focus()}}}}angular.module("app.core").directive("autoFocus",e)}(),function(){"use strict";function e(){return{restrict:"E",templateUrl:"app/core/directives/timeline.directive.html",scope:{events:"="},controller:t,controllerAs:"timelineCtrl",bindToController:!0}}function t(){}angular.module("app.core").directive("timeLine",e)}(),function(){"use strict";function e(e){var t="/api/event/:id",i="@_id",n=e(t,{id:i},{update:{method:"PUT"}});return n}angular.module("app.core.entities").factory("eventsFactory",e),e.$inject=["$resource"]}(),function(){"use strict";function e(e){var t="/api/members/:id",i="@_id",n=e(t,{id:i},{update:{method:"PUT"}});return n}angular.module("app.core.entities").factory("membersFactory",e),e.$inject=["$resource"]}(),function(){"use strict";function e(e){var t="/api/sessions/:id",i="@_id",n=e(t,{id:i},{update:{method:"PUT"}});return n}angular.module("app.core.entities").factory("sessionsFactory",e),e.$inject=["$resource"]}(),function(){"use strict";function e(e,t,i){function n(){var t=[s(),a()];return e.all(t).then(function(){i.info("Activated Dashboard View")})}function s(){return t.getMessageCount().then(function(e){return o.messageCount=e,o.messageCount})}function a(){return t.getPeople().then(function(e){return o.people=e,o.people})}var o=this;o.news={title:"membershipManager",description:"Hot Towel Angular is a SPA template for Angular developers."},o.messageCount=0,o.people=[],o.title="Dashboard",n()}angular.module("app.dashboard").controller("DashboardController",e),e.$inject=["$q","dataservice","logger"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"dashboard",config:{url:"/",templateUrl:"app/dashboard/dashboard.html",controller:"DashboardController",controllerAs:"vm",title:"dashboard",settings:{nav:6,content:'<i class="fa fa-dashboard"></i> Dashboard'}}}]}angular.module("app.dashboard").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(){function e(){t.events.all=[{id:1,date:new Date("09/19/2014"),icon:"addMember",title:"Subscribe to close-combat",type:"admin"},{id:2,date:new Date("09/26/2014"),icon:"addSeance",title:"bought 10 seances",type:"buy"},{id:3,date:new Date("09/27/2014"),icon:"addSession",title:"Session of close-combat",type:"session"},{id:3,date:new Date("09/27/2014"),icon:"addSession",title:"Session of close-combat",type:"session"},{id:3,date:new Date("09/27/2014"),icon:"addSession",title:"Session of close-combat",type:"session"},{id:3,date:new Date("09/27/2014"),icon:"addSession",title:"Session of close-combat",type:"session"},{id:3,date:new Date("09/27/2014"),icon:"addSession",title:"Session of close-combat",type:"session"}],t.events.session=[{id:3,date:new Date("09/27/2014"),icon:"addSession",title:"Session of close-combat",type:"session"},{id:3,date:new Date("09/27/2014"),icon:"addSession",title:"Session of close-combat",type:"session"},{id:3,date:new Date("09/27/2014"),icon:"addSession",title:"Session of close-combat",type:"session"},{id:3,date:new Date("09/27/2014"),icon:"addSession",title:"Session of close-combat",type:"session"},{id:3,date:new Date("09/27/2014"),icon:"addSession",title:"Session of close-combat",type:"session"}],t.events.buy=[{id:2,date:new Date("09/26/2014"),icon:"addSeance",title:"bought 10 seances",type:"buy"}]}var t=this;t.events={},e()}angular.module("app.journal").controller("JournalController",e),e.$inject=[]}(),function(){"use strict";function e(){function e(){}var t={bindToController:!0,controller:e,controllerAs:"vm",restrict:"EA",scope:{navline:"="},templateUrl:"app/layout/ht-top-nav.html"};return t}angular.module("app.layout").directive("htTopNav",e)}(),function(){"use strict";function e(e,t,i,n,s){function a(){n.success(i.appTitle+" loaded!",null),o()}function o(){t(function(){e.showSplash=!1},1e3)}function r(){s("left").toggle()}var l=this;l.busyMessage="Please wait ...",l.isBusy=!0,e.showSplash=!0,l.navline={title:i.appTitle,text:"Created by John Papa",link:"http://twitter.com/john_papa"},l.toggleNav=r,a()}angular.module("app.layout").controller("ShellController",e),e.$inject=["$rootScope","$timeout","config","logger","$mdSidenav"]}(),function(){"use strict";function e(e,t,i){function n(){s()}function s(){r.navRoutes=l.filter(function(e){return e.settings&&e.settings.nav}).sort(function(e,t){return e.settings.nav-t.settings.nav})}function a(t){var i;return t.title&&e.current&&e.current.title?(i=t.title,e.current.title.substr(0,i.length)===i?"selected":""):""}function o(){i("left").toggle()}var r=this,l=t.getStates();r.isCurrent=a,r.toggleNav=o,n()}angular.module("app.layout").controller("SidebarController",e),e.$inject=["$state","routerHelper","$mdSidenav"]}(),function(){"use strict";function e(e,t){function i(e){n(e).then(function(){s.member.events.all=[{id:1,date:new Date("09/19/2014"),icon:"addMember",title:"Subscribe to close-combat",type:"admin"},{id:2,date:new Date("09/26/2014"),icon:"addSeance",title:"bought 10 seances",type:"buy"},{id:3,date:new Date("09/27/2014"),icon:"addSession",title:"Session of close-combat",type:"session"},{id:3,date:new Date("09/27/2014"),icon:"addSession",title:"Session of close-combat",type:"session"},{id:3,date:new Date("09/27/2014"),icon:"addSession",title:"Session of close-combat",type:"session"},{id:3,date:new Date("09/27/2014"),icon:"addSession",title:"Session of close-combat",type:"session"},{id:3,date:new Date("09/27/2014"),icon:"addSession",title:"Session of close-combat",type:"session"}],s.member.events.session=[{id:3,date:new Date("09/27/2014"),icon:"addSession",title:"Session of close-combat",type:"session"},{id:3,date:new Date("09/27/2014"),icon:"addSession",title:"Session of close-combat",type:"session"},{id:3,date:new Date("09/27/2014"),icon:"addSession",title:"Session of close-combat",type:"session"},{id:3,date:new Date("09/27/2014"),icon:"addSession",title:"Session of close-combat",type:"session"},{id:3,date:new Date("09/27/2014"),icon:"addSession",title:"Session of close-combat",type:"session"}],s.member.events.buy=[{id:2,date:new Date("09/26/2014"),icon:"addSeance",title:"bought 10 seances",type:"buy"}]})}function n(e){function i(e){s.member=e}function n(e){console.error("Unable to load member: "+e)}return t.get({id:e},i,n).$promise}var s=this;s.member={},i(e.id)}angular.module("app.members.details").controller("MembersDetailsController",e),e.$inject=["$stateParams","membersFactory"]}(),function(){"use strict";function e(e,t,i,n,s){function a(){e.$watch(function(){return l.picFile},function(e,t){e&&o(e)})}function o(t){function i(e){l.croppedPicture=e.croppedPicture,l.originalPicture=e.originalPicture}function a(){}var o;(t||l.originalPicture)&&(t=t?t:l.originalPicture,o=(s("sm")||s("xs"))&&e.customFullscreen,n.show({controller:"MembersPictureDialogController",controllerAs:"pictureDialogCtrl",templateUrl:"app/members/edit/pictureDialog/pictureDialog.html",parent:angular.element(document.body),openFrom:"pictureButton",closeFrom:"pictureButton",clickOutsideToClose:!0,fullscreen:o,locals:{picture:t}}).then(i,a),e.$watch(function(){return s("xs")||s("sm")},function(t){e.customFullscreen=t===!0}))}var r,l=this;l.croppedPicture=null,l.originalPicture=null,l.picFile=null,l.dialogPicture=o,a(),e.upload=function(n){i.upload({url:"https://angular-file-upload-cors-srv.appspot.com/upload",data:{file:i.dataUrltoBlob(n)}}).then(function(i){t(function(){e.result=i.data})},function(t){t.status>0&&(e.errorMsg=t.status+": "+t.data)},function(t){e.progress=parseInt(100*t.loaded/t.total)})},e.myImage="",e.myCroppedImage=null,r=function(t){var i=t.currentTarget.files[0],n=new FileReader;n.onload=function(t){e.$apply(function(e){e.myImage=t.target.result})},n.readAsDataURL(i)},angular.element(document.querySelector("#fileInput")).on("change",r)}angular.module("app.members.edit").controller("MembersEditController",e),e.$inject=["$scope","$timeout","Upload","$mdDialog","$mdMedia"]}(),function(){"use strict";function e(e,t){function i(){console.log(e)}function n(){t.cancel()}function s(){t.hide({croppedPicture:null,originalPicture:null})}function a(){t.hide({croppedPicture:o.croppedPicture,originalPicture:o.picture})}var o=this;o.picture=e,o.croppedPicture="",o.cancel=n,o.erase=s,o.validate=a,i()}angular.module("app.members.edit").controller("MembersPictureDialogController",e),e.$inject=["picture","$mdDialog"]}(),function(){"use strict";function e(e){function t(){i()}function i(){function t(e){s.members=e}function i(e){console.error("Unable to load members : "+e)}return e.query(t,i)}function n(e){8===e.keyCode&&0===s.search.length&&(s.displayActions=!0,e.preventDefault())}var s=this;s.members=[],s.search="",s.displayActions=!0,s.removeOnBackspace=n,t()}angular.module("app.members.list").controller("MembersListController",e),e.$inject=["membersFactory"]}(),function(){"use strict";function e(){function e(){}var t=this;t.session={date:new Date,members:[{_id:1,name:"Tyrion Lannister",picture:"./assets/members/1.png",seanceLeft:10},{_id:2,name:"Cersei Lannister",picture:"./assets/members/2.png",seanceLeft:5},{_id:3,name:"Sansa Stark",picture:"./assets/members/3.png",seanceLeft:1},{_id:4,name:"Joffrey Baratheon",picture:"./assets/members/4.png",seanceLeft:0},{_id:5,name:"Margaery Tyrell",picture:"./assets/members/5.png",seanceLeft:4},{_id:6,name:"Khal Drogo",picture:"./assets/members/6.png",seanceLeft:"demo"}]},e()}angular.module("app.sessions.details").controller("SessionsDetailsController",e),e.$inject=[]}(),function(){"use strict";function e(e,t){function i(){n()}function n(){function t(e){o.members=e}function i(e){console.error("Unable to load members : "+e)}return e.query(t,i)}function s(e){e.selected?(o.membersPresent.pop(e),e.selected=!1):(o.membersPresent.push(e),e.selected=!0)}function a(){t.go("sessions.details",{id:1})}var o=this;o.members=[],o.membersPresent=[],o.toggleSelect=s,o.submit=a,i()}angular.module("app.sessions.edit").controller("SessionsEditController",e),e.$inject=["membersFactory","$state"]}(),function(){"use strict";function e(e){function t(){i()}function i(){function t(e){n.sessions=e}function i(e){console.error("Unable to load sessions: "+e)}return e.query(t,i).$promise}var n=this;n.sessions=[],t()}angular.module("app.sessions.list").controller("SessionsListController",e),e.$inject=["sessionsFactory"]}(),function(){"use strict";function e(e){function t(e,t,s){s.$observe("htImgPerson",function(e){e=i+(e||n),s.$set("src",e)})}var i=e.imageBasePath,n=e.unknownPersonImageSource,s={link:t,restrict:"A"};return s}angular.module("app.widgets").directive("htImgPerson",e),e.$inject=["config"]}(),function(){"use strict";function e(){var e={scope:{title:"@",subtitle:"@",rightText:"@",allowCollapse:"@"},templateUrl:"app/widgets/widget-header.html",restrict:"EA"};return e}angular.module("app.widgets").directive("htWidgetHeader",e)}(),angular.module("app.core").run(["$templateCache",function(e){e.put("app/admin/admin.html",'<section class=mainbar><section class=matter><div class=container><div class=row><div class="widget wviolet"><div ht-widget-header title={{vm.title}}></div><div class="widget-content user"><h3>TODO: Implement Your Features</h3></div><div class=widget-foot><div class=clearfix></div></div></div></div></div></section></section>'),e.put("app/core/404.html",'<section id=dashboard-view class=mainbar><section class=matter><div class=container><div class=row><div class=col-md-12><ul class=today-datas><li class=bred><div class=pull-left><i class="fa fa-warning"></i></div><div class="datas-text pull-right"><a><span class=bold>404</span></a>Page Not Found</div><div class=clearfix></div></li></ul></div></div><div class=row><div class="widget wblue"><div ht-widget-header title="Page Not Found" allow-collapse=true></div><div class="widget-content text-center text-info"><div class=container>No soup for you!</div></div><div class=widget-foot><div class=clearfix></div></div></div></div></div></section></section>'),e.put("app/dashboard/dashboard.html",'<section id=dashboard-view class=mainbar><section class=matter><div class=container><div class=row><div class=col-md-12><ul class=today-datas><li class=blightblue><div class=pull-left><i class="fa fa-plane"></i></div><div class="datas-text pull-right"><span class=bold>May 18 - 19, 2015</span> Castle Resort, Neverland</div><div class=clearfix></div></li><li class=borange><div class=pull-left><i class="fa fa-envelope"></i></div><div class="datas-text pull-right"><span class=bold>{{vm.messageCount}}</span> Messages</div><div class=clearfix></div></li></ul></div></div><div class=row><div class=col-md-6><div class="widget wviolet"><div ht-widget-header title=People allow-collapse=true></div><div class="widget-content text-center text-info"><table class="table table-condensed table-striped"><thead><tr><th>First Name</th><th>Last Name</th><th>Age</th><th>Location</th></tr></thead><tbody><tr ng-repeat="p in vm.people"><td>{{p.firstName}}</td><td>{{p.lastName}}</td><td>{{p.age}}</td><td>{{p.location}}</td></tr></tbody></table></div><div class=widget-foot><div class=clearfix></div></div></div></div><div class=col-md-6><div class="widget wgreen"><div ht-widget-header title={{vm.news.title}} allow-collapse=true></div><div class="widget-content text-center text-info"><small>{{vm.news.description}}</small></div><div class=widget-foot><div class=clearfix></div></div></div></div></div></div></section></section>'),e.put("app/journal/journal.html","<md-card><md-card-content><md-tabs md-dynamic-height md-border-bottom><md-tab label=All><md-content class=md-padding><time-line events=vm.events.all flex></time-line></md-content></md-tab><md-tab label=Sessions><md-content class=md-padding><time-line events=vm.events.session flex></time-line></md-content></md-tab><md-tab label=Buy><md-content class=md-padding><time-line events=vm.events.buy flex></time-line></md-content></md-tab></md-tabs></md-card-content></md-card>"),e.put("app/layout/ht-top-nav.html",'<nav class="navbar navbar-fixed-top navbar-inverse"><div class=navbar-header><a href="/" class=navbar-brand><span class=brand-title>{{vm.navline.title}}</span></a> <a class="btn navbar-btn navbar-toggle" data-toggle=collapse data-target=.navbar-collapse><span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></a></div><div class="navbar-collapse collapse"><div class="pull-right navbar-logo"><ul class="nav navbar-nav pull-right"><li><a ng-href={{vm.navline.link}} target=_blank>{{vm.navline.text}}</a></li><li class="dropdown dropdown-big"><a href=http://www.angularjs.org target=_blank><img src=images/AngularJS-small.png></a></li><li><a href="http://www.gulpjs.com/" target=_blank><img src=images/gulp-tiny.png></a></li></ul></div></div></nav>'),e.put("app/layout/shell.html",'<md-sidenav class="site-sidenav md-sidenav-left md-whiteframe-z2" md-component-id=left md-is-locked-open="$mdMedia(\'gt-sm\')"><md-toolbar class=md-whiteframe-z1><h1>Navigation</h1></md-toolbar><md-list ng-controller="SidebarController as vm"><md-list-item ng-class=vm.isCurrent(route) ng-repeat="route in vm.navRoutes"><md-button ui-sref={{route.settings.target}} class=side-bar__menu__item ng-click=vm.toggleNav()><md-icon md-svg-icon={{route.settings.icon}} class=side-bar__menu__item__icon></md-icon>{{route.title}}</md-button><md-divider></md-divider></md-list-item></md-list></md-sidenav><div ng-controller="ShellController as vm" flex layout=column tabindex=-1 role=main class=md-whiteframe-z2><md-toolbar layout=row class=md-whiteframe-z1><md-button class=menu hide-gt-sm ng-click=vm.toggleNav() aria-label="Show User List"><md-icon md-svg-icon=menu></md-icon></md-button><h1>Membership Manager <span hide-sm hide-xs>- Effortless management</span></h1></md-toolbar><md-content flex id=content><div ui-view class=shuffle-animation></div><div ngplus-overlay ngplus-overlay-delay-in=50 ngplus-overlay-delay-out=700 ngplus-overlay-animation=dissolve-animation><img src=images/busy.gif><div class="page-spinner-message overlay-message">{{vm.busyMessage}}</div></div></md-content></div>'),e.put("app/layout/sidebar.html",'<div ng-controller="SidebarController as vm"><ht-sidebar when-done-animating=vm.sidebarReady()><div class=sidebar-filler></div><div class=sidebar-dropdown><a href=#>Menu</a></div><div class=sidebar-inner><div class=sidebar-widget></div><ul class=navi><li class="nlightblue fade-selection-animation" ng-class=vm.isCurrent(r) ng-repeat="r in vm.navRoutes"><a ui-sref={{r.name}} ng-bind-html=r.settings.content></a></li></ul></div></ht-sidebar></div>'),e.put("app/widgets/widget-header.html",'<div class=widget-head><div class="page-title pull-left">{{title}}</div><small class=page-title-subtle ng-show=subtitle>({{subtitle}})</small><div class="widget-icons pull-right"></div><small class="pull-right page-title-subtle" ng-show=rightText>{{rightText}}</small><div class=clearfix></div></div>'),e.put("app/core/directives/timeline.directive.html",'<md-list class=timeline><md-list-item ng-repeat="event in timelineCtrl.events" ng-click=timeline.select(event) flex layout=row layout-align="space-around center" class=timeline__item><div flex=initial class=timeline__item__date>{{event.date | date:\'MMM d, y\'}}</div><div flex-gt-xs=10 flex-xs=20 class=timeline__item__icon><md-icon md-svg-icon={{event.icon}}></md-icon></div><div flex>{{event.title}}</div></md-list-item></md-list>'),e.put("app/sessions/details/sessions.details.html","<div class=md-title>Session of close-combat</div><div class=md-subhead>{{vm.session.date | date:'EEEE d MMMM y'}}</div><md-card><md-card-content><md-list><md-subheader class=md-no-sticky><p>{{vm.session.members.length}} members present</p></md-subheader><md-list-item class=md-3-line ng-repeat=\"member in vm.session.members\" ui-sref=\"members.details({id: member._id})\"><div class=md-list-item-text layout=row><img alt={{member.name}} ng-src={{member.picture}} class=md-avatar><p flex>{{member.name}}</p><p flex layout-align=\"center center\" style=font-size:1.2em;><span ng-class=\"{'session-detail__seanceLeft_0': member.seanceLeft===0, 'session-detail__seanceLeft_1': member.seanceLeft===1, 'session-detail__seanceLeft_demo':member.seanceLeft==='demo'}\">{{member.seanceLeft}}</span></p></div><md-divider></md-divider></md-list-item></md-list></md-card-content></md-card>"),e.put("app/sessions/edit/sessions.edit.html",'<h1>Create a new session</h1><div flex layout=row layout-align=space-around><md-datepicker ng-model=vm.session.date md-placeholder="Session date" ng-required></md-datepicker><p>{{vm.membersPresent.length}} participant out of {{vm.members.length}}</p><md-button class="md-primary md-raised" ng-click=vm.submit()>Create session</md-button></div><h2>Participants</h2><md-grid-list class=members-grid md-cols-xs=3 md-cols-sm=5 md-cols-md=5 md-cols-gt-md=6 md-row-height-gt-md=1:1 md-row-height=2:2 md-gutter=12px md-gutter-gt-sm=8px><md-grid-tile ng-click=vm.toggleSelect(member) class=members-grid___tile ng-repeat="member in vm.members" ng-class="{\'members-grid___tile_selected\':member.selected}"><img ng-show=member.picture alt={{member.name}} ng-src={{member.picture}}><md-icon ng-hide=member.picture md-svg-icon=defaultMember class=members-grid___tile__icon></md-icon><md-grid-tile-footer layout-align="center center"><h3>{{member.name}}</h3></md-grid-tile-footer></md-grid-tile></md-grid-list>'),e.put("app/members/details/members.details.html",'<div flex layout-gt-xs=row layout-align="start start"><md-card><img ng-src={{vm.member.picture}} alt="{{vm.member.name}} picture" class=md-whiteframe-1dp><md-card-content><md-list><md-list-item layout-align="center center" layout=column><div class="md-display-2 profilt__contact__seance-left_number">{{vm.member.seanceLeft}}</div><p class="md-subhead profilt__contact__seance-left_text">seances left</p></md-list-item><md-list-item><div>{{vm.member.name}}</div></md-list-item><a ng-href=mailto:{{vm.member.email}}><md-list-item class=profil__contact__item><div flex=90>{{vm.member.email}}</div><md-icon md-svg-icon=mail></md-icon></md-list-item></a> <a nghref=tel:{{vm.member.phone}}><md-list-item class=profil__contact__item><div flex=90>{{vm.member.phone}}</div><md-icon md-svg-icon=phone></md-icon></md-list-item></a> <a ng-href="http://maps.google.com/?q={{vm.member.address}}" target=_blank><md-list-item class=profil__contact__item><div flex=90>{{vm.member.address}}</div><md-icon md-svg-icon=location></md-icon></md-list-item></a></md-list></md-card-content></md-card><md-card flex><md-card-header><md-card-header-text><p class=md-title>Your timeline</p></md-card-header-text></md-card-header><md-card-content><md-tabs md-dynamic-height md-border-bottom><md-tab label=All><md-content class=md-padding><time-line events=vm.member.events.all flex></time-line></md-content></md-tab><md-tab label=Sessions><md-content class=md-padding><time-line events=vm.member.events.session flex></time-line></md-content></md-tab><md-tab label=Buy><md-content class=md-padding><time-line events=vm.member.events.buy flex></time-line></md-content></md-tab></md-tabs></md-card-content></md-card></div>'),e.put("app/sessions/list/sessions.list.html",'<div class=action-bar flex layout=row layout-align="end center"><md-button class=md-fab ui-sref="sessions.edit({id:\'\'})"><md-icon md-svg-icon=addSession></md-icon></md-button></div><md-card><md-card-content><md-list><md-list-item ng-repeat="session in vm.sessions" flex layout=row layout-align="space-around center" ui-sref="sessions.details({id: session._id})"><div flex=45 layout=row layout-align="space-around center" hide-xs><div flex>{{session.date | date:\'MMMM\'}}</div><div flex>{{session.date | date:\'EEEE d\'}}</div><div flex>{{session.date | date:\'y\'}}</div></div><div flex hide-gt-xs>{{session.date | date:\'mediumDate\'}}</div><div flex>{{session.participants.length}}</div><div flex>{{session.nbrInscrits}}</div><md-divider></md-divider></md-list-item></md-list></md-card-content></md-card>'),
e.put("app/members/edit/members.edit.html",'<div flex-gt-md=60 flex-offset-gt-md=20 layout=column layout-align=center><md-card><md-card-title><md-card-title-text><span class=md-headline>Create a new member</span></md-card-title-text></md-card-title><md-card-content><form name=form><div layout-gt-xs=row><div class=createMember__picture layout=column layout-align="center center" flex flex-order-gt-xs=2><img ng-if=vm.croppedPicture ng-src={{vm.croppedPicture}} ng-click=vm.dialogPicture() class=createMember__picture__image><md-button ng-if=!vm.croppedPicture tabindex=-1 class="md-fab createMember__picture__icon" style="width: inherit;height: inherit" ngf-select ngf-capture="\'camera\'" ng-model=vm.picFile accept=image/*><md-icon md-svg-icon=addPhoto></md-icon></md-button></div><div flex layout=column flex-order-gt-xs=1><md-input-container class=md-block flex-gt-xs><label>First name</label> <input name=firstName ng-model=vm.member.firstName required></md-input-container><md-input-container class=md-block flex-gt-xs><label>Last name</label> <input name=lastName ng-model=vm.member.lastName required></md-input-container></div></div><div layout-gt-xs=row><md-input-container class=md-block flex-gt-sm><label>Email</label> <input name=email ng-model=vm.member.email required minlength=5 maxlength=100 ng-pattern="/^.+@.+\\..+$/"><div ng-messages="form.email.$dirty && form.email.$error"><div ng-message-exp="[\'required\', \'minlength\', \'maxlength\', \'pattern\']">Your email must be between 5 and 100 characters long e-mail address.</div></div></md-input-container><md-input-container class=md-block flex-gt-xs><label>Address</label> <input name=Address ng-model=vm.member.Address required></md-input-container></div><div><md-input-container class=md-block flex-gt-xs><label>Phone Number</label> <input name=phone ng-model=vm.member.phone required></md-input-container></div><div flex layout=row layout-align=space-between><md-datepicker class=md-block name=birthday ng-model=vm.member.birthday md-placeholder="day of birth"></md-datepicker></div></form></md-card-content><md-card-actions layout=row layout-align="end center"><md-button class="md-primary md-raised" ng-disabled=form.$invalid>Create</md-button></md-card-actions></md-card></div>'),e.put("app/members/list/members.list.html",'<div class=action-bar flex layout=row layout-align="end center"><div layout=row ng-show=vm.displayActions><md-button class=md-fab ui-sref="members.edit({id: \'\'})"><md-icon md-svg-icon=addMember></md-icon></md-button><md-button class=md-fab ng-click="vm.displayActions=false"><md-icon md-svg-icon=search></md-icon></md-button></div></div><div layout=row ng-if=!vm.displayActions flex><md-input-container flex><md-icon class=search__input-contrainer__icon md-svg-icon=clear ng-click="vm.displayActions=true"></md-icon><label>Search</label> <input ng-model=vm.search auto-focus ng-keydown=vm.removeOnBackspace($event)></md-input-container></div><md-card><md-card-content><md-list><md-list-item ng-repeat="member in vm.members| filter:{$:vm.search}" ui-sref="members.details({id: member._id})"><img alt={{member.name}} ng-src={{member.picture}} class="md-avatar md-whiteframe-2dp"><p class=member-list__name>{{member.name}}</p><p>{{member.group}}</p><div hide-xs flex layout=row layout-align="space-around center"><md-icon md-svg-icon=mail class=member-list__icon></md-icon><md-icon md-svg-icon=location class=member-list__icon></md-icon><md-icon md-svg-icon=edit ui-sref="members.edit({id: member.id})" class=member-list__icon></md-icon></div><div hide-gt-xs><md-icon md-svg-icon=moreMenuHor></md-icon></div><md-divider md-inset></md-divider></md-list-item></md-list></md-card-content></md-card><div ui-view></div>'),e.put("app/members/edit/pictureDialog/pictureDialog.html",'<md-dialog aria-label="Crop picture" ng-cloak><form><md-toolbar><div class=md-toolbar-tools><h2>Resize Picture</h2><span flex></span><md-button class=md-icon-button ng-click=pictureDialogCtrl.cancel()><md-icon md-svg-icon=close aria-label="Close dialog"></md-icon></md-button></div></md-toolbar><md-dialog-content><div class=md-dialog-content><div flex layout=row layout-align="center center"><div class=cropArea flex-grow layout=row><img-crop ng-show=pictureDialogCtrl.picture image="pictureDialogCtrl.picture | ngfDataUrl" result-image=pictureDialogCtrl.croppedPicture></img-crop><button ng-hide=pictureDialogCtrl.picture flex=fill ngf-select ngf-capture="\'camera\'" ng-model=pictureDialogCtrl.picture accept=image/*><md-icon md-svg-icon=addPhoto></md-icon></button></div></div></div></md-dialog-content><md-dialog-actions layout=row><md-button class="md-button md-primary" ngf-select ngf-capture="\'camera\'" ng-model=pictureDialogCtrl.picture accept=image/*>Change picture</md-button><span flex></span><md-button ng-click=pictureDialogCtrl.erase()>Erase</md-button><md-button ng-click=pictureDialogCtrl.validate() style=margin-right:20px;>Import</md-button></md-dialog-actions></form></md-dialog>')}]);