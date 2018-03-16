webpackJsonp([1],{"7zck":function(t,e){},"9W8+":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("/5sW"),a={data:function(){return{sideNav:!1}},computed:{menuItems:function(){var t=[{icon:"face",title:"Sign up",link:"/signup"},{icon:"lock_open",title:"Sign in",link:"/signin"}];return this.userIsAuthenticated&&(t=[{icon:"supervisor_account",title:"View Meetups",link:"/meetups"},{icon:"room",title:"Organize Meetup",link:"/meetup/new"},{icon:"person",title:"Profile",link:"/profile"}]),t},userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user}},methods:{onLogout:function(){this.$store.dispatch("logout")}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-toolbar",{staticClass:"red darken-1",attrs:{dark:""}},[s("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up",on:{click:function(e){e.stopPropagation(),t.sideNav=!t.sideNav}}}),t._v(" "),s("v-toolbar-title",[s("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[t._v("\n      DevMeetup\n      ")])],1),t._v(" "),s("v-spacer"),t._v(" "),s("v-toolbar-items",{staticClass:"hidden-xs-only"},[t._l(t.menuItems,function(e){return s("v-btn",{key:e.title,attrs:{flat:"",to:e.link}},[s("v-icon",{attrs:{left:"",dark:""}},[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n      ")],1)}),t._v(" "),t.userIsAuthenticated?s("v-btn",{attrs:{flat:""},on:{click:t.onLogout}},[s("v-icon",{attrs:{left:"",dark:""}},[t._v("exit_to_app")]),t._v("\n        Logout\n      ")],1):t._e()],2)],1),t._v(" "),s("v-navigation-drawer",{model:{value:t.sideNav,callback:function(e){t.sideNav=e},expression:"sideNav"}},[s("v-list",[t._l(t.menuItems,function(e){return s("v-list-tile",{key:e.title,attrs:{to:e.link}},[s("v-list-tile-action",[s("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),s("v-list-tile-content",[t._v(t._s(e.title))])],1)}),t._v(" "),t.userIsAuthenticated?s("v-list-tile",{on:{click:t.onLogout}},[s("v-list-tile-action",[s("v-icon",[t._v("exit_to_app")])],1),t._v(" "),s("v-list-tile-content",[t._v("Logout")])],1):t._e()],2)],1),t._v(" "),s("main",[s("router-view")],1)],1)},staticRenderFns:[]};var n=s("VU/8")(a,i,!1,function(t){s("VeFm")},null,null).exports,o=s("/ocq"),l={computed:{meetups:function(){return this.$store.getters.featuredMeetups},loading:function(){return this.$store.getters.loading}},methods:{onLoadMeetup:function(t){this.$router.push("/meetups/"+t),console.log("CLICKED")}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{staticClass:"mb-2",attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center text-sm-right",attrs:{xs12:"",sm6:""}},[s("v-btn",{staticClass:"info",attrs:{large:"",router:"",to:"/meetups",dark:""}},[t._v("Explore Meetups")])],1),t._v(" "),s("v-flex",{staticClass:"text-xs-center text-sm-left",attrs:{xs12:"",sm6:""}},[s("v-btn",{staticClass:"info",attrs:{large:"",router:"",to:"/meetup/new",dark:""}},[t._v("Organize Meetup")])],1)],1),t._v(" "),s("v-layout",[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[t.loading?s("v-progress-circular",{attrs:{indeterminate:"",color:"primary--text",width:7,size:70}}):t._e()],1)],1),t._v(" "),t.loading?t._e():s("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-carousel",t._l(t.meetups,function(e){return s("v-carousel-item",{key:e.id,attrs:{src:e.imageUrl}},[s("div",{staticClass:"title"},[s("p",[t._v(t._s(e.title))]),t._v(" "),s("v-btn",{attrs:{dark:""},on:{click:function(s){t.onLoadMeetup(e.id)}}},[t._v("See the details")])],1)])}))],1)],1),t._v(" "),s("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[s("p",[t._v("Join our awesome meetups !")])])],1)],1)},staticRenderFns:[]};var d=s("VU/8")(l,u,!1,function(t){s("qcdr")},null,null).exports,c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",t._l(t.meetups,function(e){return s("v-layout",{key:e.id,staticClass:"mb-2",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm10:"",md8:"","offset-sm1":"","offset-md2":""}},[s("v-card",{staticClass:"info"},[s("v-container",{attrs:{fluid:""}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs5:"",sm4:"",md3:""}},[s("v-card-media",{attrs:{src:e.imageUrl,height:"130px"}})],1),t._v(" "),s("v-flex",{attrs:{xs7:"",sm8:"",md9:""}},[s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("h3",{staticClass:"white--text mb-0"},[t._v(t._s(e.title))]),t._v(" "),s("div",[t._v(t._s(t._f("date")(e.date)))])])]),t._v(" "),s("v-card-actions",[s("v-btn",{attrs:{flat:"",to:"/meetups/"+e.id}},[s("v-icon",{attrs:{left:""}},[t._v("arrow_forward")]),t._v("\n                  View Meetup")],1)],1)],1)],1)],1)],1)],1)],1)}))},staticRenderFns:[]},v=s("VU/8")({computed:{meetups:function(){return this.$store.getters.loadedMeetups}}},c,!1,null,null,null).exports,p={props:["id"],computed:{meetup:function(){return this.$store.getters.loadedMeetup(this.id)},userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user},userIsCreator:function(){return!!this.userIsAuthenticated&&this.$store.getters.user.id===this.meetup.creatorId},loading:function(){return this.$store.getters.loading}}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.loading?s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[s("v-progress-circular",{attrs:{indeterminate:"",color:"primary--text",width:7,size:70}})],1)],1):s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card",[s("v-card-title",[s("h4",{staticClass:"primary--text"},[t._v(t._s(t.meetup.title))]),t._v(" "),t.userIsCreator?[s("v-spacer"),t._v(" "),t.userIsCreator?s("app-edit-meetup-details-dialog",{attrs:{meetup:t.meetup}}):t._e()]:t._e()],2),t._v(" "),s("v-card-media",{attrs:{src:t.meetup.imageUrl,height:"400px"}}),t._v(" "),s("v-card-text",[s("div",{staticClass:"info--text"},[t._v(t._s(t._f("date")(t.meetup.date))+" - "+t._s(t.meetup.location))]),t._v(" "),s("div",[t.userIsCreator?s("app-edit-meetup-date-dialog",{attrs:{meetup:t.meetup}}):t._e(),t._v(" "),t.userIsCreator?s("app-edit-meetup-time-dialog",{attrs:{meetup:t.meetup}}):t._e()],1),t._v(" "),s("div",[t._v(t._s(t.meetup.description))])]),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),t.userIsAuthenticated&&!t.userIsCreator?s("app-meetup-register-dialog",{attrs:{meetupId:t.meetup.id}}):t._e()],1)],1)],1)],1)],1)},staticRenderFns:[]},f=s("VU/8")(p,m,!1,null,null,null).exports,g={data:function(){return{title:"",location:"",imageUrl:"",description:"",date:"",time:new Date,image:null}},computed:{formIsValid:function(){return""!==this.title&&""!==this.location&&""!==this.imageUrl&&""!==this.description},submittableDateTime:function(){var t=new Date(this.date);if("string"==typeof this.time){var e=this.time.match(/^(\d+)/)[1],s=this.time.match(/:(\d+)/)[1];t.setHours(e),t.setMinutes(s)}else t.setHours(this.time.getHours()),t.setMinutes(this.time.getMinutes());return console.log(t),t}},methods:{onCreateMeetup:function(){if(this.formIsValid&&this.image){var t={title:this.title,location:this.location,image:this.image,description:this.description,date:this.submittableDateTime};this.$store.dispatch("createMeetup",t),this.$router.push("/meetups")}},onPickFile:function(){this.$refs.fileInput.click()},onFilePicked:function(t){var e=this,s=t.target.files;if(s[0].name.lastIndexOf(".")<=0)return alert("Please add a valid file!");var r=new FileReader;r.addEventListener("load",function(){e.imageUrl=r.result}),r.readAsDataURL(s[0]),this.image=s[0]}}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("h2",[t._v("Create a new Meetup")])])],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("form",{on:{submit:function(e){e.preventDefault(),t.onCreateMeetup(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-text-field",{attrs:{name:"title",label:"Title",id:"title",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-text-field",{attrs:{name:"location",label:"Location",id:"location",required:""},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-btn",{staticClass:"primary",attrs:{raised:""},on:{click:t.onPickFile}},[t._v("Upload Image")]),t._v(" "),s("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFilePicked}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("img",{attrs:{src:t.imageUrl,height:"180px"}})])],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-text-field",{attrs:{name:"description",label:"Description",id:"description",required:"","multi-line":""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("h4",[t._v("Choose a date and time")])])],1),t._v(" "),s("v-layout",{staticClass:"mb-2",attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-date-picker",{model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-time-picker",{attrs:{format:"24hr"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-btn",{staticClass:"primary",attrs:{disabled:!t.formIsValid,type:"submit"}},[t._v("Create Meetup")])],1)],1)],1)])],1)],1)},staticRenderFns:[]},_=s("VU/8")(g,h,!1,null,null,null).exports,x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v("The Profile Page")])])}]},w=s("VU/8")(null,x,!1,null,null,null).exports,b={data:function(){return{email:"",password:""}},computed:{user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/")}},methods:{onSignin:function(){this.$store.dispatch("signUserIn",{email:this.email,password:this.password})},onDismissed:function(){this.$store.dispatch("clearError")}}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.error?s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("app-alert",{attrs:{text:t.error.message},on:{dismissed:t.onDismissed}})],1)],1):t._e(),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-card",[s("v-card-text",[s("v-container",[s("form",{on:{submit:function(e){e.preventDefault(),t.onSignin(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"email",label:"Mail",id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),s("v-layout",{attrs:{fow:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-btn",{attrs:{type:"submit",disabled:t.loading,loading:t.loading}},[t._v("Sign in\n                    "),s("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[s("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)],1)],1)])],1)],1)],1)],1)],1)},staticRenderFns:[]};var k=s("VU/8")(b,y,!1,function(t){s("9W8+")},null,null).exports,M={data:function(){return{email:"",password:"",confirmPassword:""}},computed:{comparePasswords:function(){return this.password!==this.confirmPassword?"Passwords do not match":""},user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/")}},methods:{onSignup:function(){this.$store.dispatch("signUserUp",{email:this.email,password:this.password})},onDismissed:function(){this.$store.dispatch("clearError")}}},D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.error?s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("app-alert",{attrs:{text:t.error.message},on:{dismissed:t.onDismissed}})],1)],1):t._e(),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-card",[s("v-card-text",[s("v-container",[s("form",{on:{submit:function(e){e.preventDefault(),t.onSignup(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"email",label:"Mail",id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"confirmPassword",label:"Confirm Password",id:"confirmPassword",type:"password",rules:[t.comparePasswords]},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1),t._v(" "),s("v-layout",{attrs:{fow:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-btn",{attrs:{type:"submit",disabled:t.loading,loading:t.loading}},[t._v("Sign up\n                    "),s("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[s("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)],1)],1)])],1)],1)],1)],1)],1)},staticRenderFns:[]};var C=s("VU/8")(M,D,!1,function(t){s("WTSI")},null,null).exports,U=s("NYxO"),I=s("Dd8w"),$=s.n(I),E=s("Sazm"),L={state:{loadedMeetups:[{imageUrl:"https://thenypost.files.wordpress.com/2017/04/new-york.jpg?quality=90&strip=all&w=1200",id:"dasdasdasdas",title:"Meetup in New York",date:new Date,location:"New York",description:"It's New York"},{imageUrl:"https://www.aifsabroad.com/images/country-page/aifsabroad-share-image-Paris.jpg",id:"dsdarerweewr",title:"Meetup in Paris",date:new Date,location:"Paris",description:"It's Paris"}]},mutations:{setLoadedMeetups:function(t,e){t.loadedMeetups=e},createMeetup:function(t,e){t.loadedMeetups.push(e)},updateMeetup:function(t,e){var s=t.loadedMeetups.find(function(t){return t.id===e.id});e.title&&(s.title=e.title),e.description&&(s.description=e.description),e.date&&(s.date=e.date)}},actions:{loadMeetups:function(t){var e=t.commit;e("setLoading",!0),E.database().ref("meetups").once("value").then(function(t){var s=[],r=t.val();for(var a in r)s.push({id:a,title:r[a].title,description:r[a].description,imageUrl:r[a].imageUrl,date:r[a].date,location:r[a].location,creatorId:r[a].creatorId});e("setLoadedMeetups",s),e("setLoading",!1)}).catch(function(t){console.log(t),e("setLoading",!1)})},createMeetup:function(t,e){var s=t.commit,r=t.getters,a={title:e.title,location:e.location,description:e.description,date:e.date.toISOString(),creatorId:r.user.id},i=void 0,n=void 0;E.database().ref("meetups").push(a).then(function(t){return n=t.key}).then(function(t){var s=e.image.name,r=s.slice(s.lastIndexOf("."));return E.storage().ref("meetups/"+t+"."+r).put(e.image)}).then(function(t){return i=t.metadata.downloadURLs[0],E.database().ref("meetups").child(n).update({imageUrl:i})}).then(function(){s("createMeetup",$()({},a,{imageUrl:i,id:n}))}).catch(function(t){console.log(t)})},updateMeetupData:function(t,e){var s=t.commit;s("setLoading",!0);var r={};e.title&&(r.title=e.title),e.description&&(r.description=e.description),e.date&&(r.date=e.date),E.database().ref("meetups").child(e.id).update(r).then(function(){s("setLoading",!1),s("updateMeetup",e)}).catch(function(t){console.log(t),s("setLoading",!1)})}},getters:{loadedMeetups:function(t){return t.loadedMeetups.sort(function(t,e){return t.date>e.date})},featuredMeetups:function(t,e){return e.loadedMeetups.slice(0,5)},loadedMeetup:function(t){return function(e){return t.loadedMeetups.find(function(t){return t.id===e})}}}},S=s("uqrR"),T=s.n(S),F={state:{user:null},mutations:{registerUserForMeetup:function(t,e){var s=e.id;t.user.registeredMeetups.findIndex(function(t){return t.id===s})>=0||(t.user.registeredMeetups.push(s),t.user.fbKeys[s]=e.fbKey)},unregisterUserFromMeetup:function(t,e){var s=t.user.registeredMeetups;s.splice(s.findIndex(function(t){return t.id===e},1)),T()(t.user.fbKeys,e)},setUser:function(t,e){t.user=e}},actions:{registerUserForMeetup:function(t,e){var s=t.commit,r=t.getters;s("setLoading",!0);var a=r.user;E.database().ref("users/"+a.id).child("/registrations/").push(e).then(function(t){s("setLoading",!1),s("registerUserForMeetup",{id:e,fbKey:t.key})}).catch(function(t){console.log(t),s("setLoading",!1)})},unregisterUserFromMeetup:function(t,e){var s=t.commit,r=t.getters;s("setLoading",!0);var a=r.user;if(a.fbKeys){var i=a.fbKeys[e];E.database().ref("/users/"+a.id+"/registrations/").child(i).remove().then(function(){s("setLoading",!1),s("unregisterUserFromMeetup",e)}).catch(function(t){console.log(t),s("setLoading",!1)})}},signUserUp:function(t,e){var s=t.commit;s("setLoading",!0),s("clearError"),E.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){s("setLoading",!1);var e={id:t.uid,registeredMeetups:[],fbKeys:{}};s("setUser",e)}).catch(function(t){s("setLoading",!1),s("setError",t),console.log(t)})},signUserIn:function(t,e){var s=t.commit;s("setLoading",!0),s("clearError"),E.auth().signInWithEmailAndPassword(e.email,e.password).then(function(t){s("setLoading",!1);var e={id:t.uid,registeredMeetups:[],fbKeys:{}};s("setUser",e)}).catch(function(t){s("setLoading",!1),s("setError",t),console.log(t)})},autoSignIn:function(t,e){(0,t.commit)("setUser",{id:e.uid,registeredMeetups:[],fbKeys:{}})},fetchUserData:function(t){var e=t.commit,s=t.getters;e("setLoading",!0),E.database().ref("/users/"+s.user.id+"/registrations/").once("value").then(function(t){var r=t.val(),a=[],i={};for(var n in r)a.push(r[n]),i[r[n]]=n;var o={id:s.user.id,registeredMeetups:a,fbKeys:i};e("setLoading",!1),e("setUser",o)}).catch(function(t){console.log(t),e("setLoading",!1)})},logout:function(t){var e=t.commit;E.auth().signOut(),e("setUser",null)}},getters:{user:function(t){return t.user}}};r.a.use(U.a);var P=new U.a.Store({modules:{meetup:L,user:F,shared:{state:{loading:!1,error:null},mutations:{setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=null}},actions:{clearError:function(t){(0,t.commit)("clearError")}},getters:{loading:function(t){return t.loading},error:function(t){return t.error}}}}}),R=function(t,e,s){P.getters.user?s():s("/signin")};r.a.use(o.a);var V=new o.a({routes:[{path:"/",name:"Home",component:d},{path:"/meetups",name:"Meetups",component:v},{path:"/meetup/new",name:"CreateMeetup",component:_,beforeEnter:R},{path:"/meetups/:id",name:"Meetup",component:f,props:!0},{path:"/profile",name:"Profile",component:w,beforeEnter:R},{path:"/signup",name:"Signup",component:C},{path:"/signin",name:"Signin",component:k}],mode:"history"}),q=s("3EgV"),A=s.n(q),K=(s("7zck"),{render:function(){var t=this.$createElement;return(this._self._c||t)("v-alert",{attrs:{error:"",dismissible:"",value:!0},on:{input:this.onClose}},[this._v("\n    "+this._s(this.text)+"\n")])},staticRenderFns:[]}),N=s("VU/8")({props:["text"],methods:{onClose:function(){this.$emit("dismissed")}}},K,!1,null,null,null).exports,O={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{width:"350px",persistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[s("v-btn",{attrs:{slot:"activator",fab:"",accent:""},slot:"activator"},[s("v-icon",[t._v("edit")])],1),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-title",[t._v("Edit Meetup")])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-text",[s("v-text-field",{attrs:{name:"title",label:"Title",id:"title",required:""},model:{value:t.editedTitle,callback:function(e){t.editedTitle=e},expression:"editedTitle"}}),t._v(" "),s("v-text-field",{attrs:{name:"description",label:"Description",id:"description",required:"","multi-line":""},model:{value:t.editedDescription,callback:function(e){t.editedDescription=e},expression:"editedDescription"}})],1)],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-actions",[s("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},on:{click:function(e){t.editDialog=!1}}},[t._v("Close")]),t._v(" "),s("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},on:{click:t.onSaveChanges}},[t._v("Save")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},z=s("VU/8")({props:["meetup"],data:function(){return{editDialog:!1,editedTitle:this.meetup.title,editedDescription:this.meetup.description}},methods:{onSaveChanges:function(){""===this.editedTitle.trim()&&""===this.editedDescription.trim()||(this.editDialog=!1,this.$store.dispatch("updateMeetupData",{id:this.meetup.id,title:this.editedTitle,description:this.editedDescription}))}}},O,!1,null,null,null).exports,Y={props:["meetup"],data:function(){return{editDialog:!1,editableDate:null}},methods:{onSaveChanges:function(){var t=new Date(this.meetup.date),e=new Date(this.editableDate).getUTCDate(),s=new Date(this.editableDate).getUTCMonth(),r=new Date(this.editableDate).getUTCFullYear();t.setUTCDate(e),t.setUTCMonth(s),t.setUTCFullYear(r),this.$store.dispatch("updateMeetupData",{id:this.meetup.id,date:t})}},created:function(){var t=new Date(this.meetup.date);this.editableDate=t.getUTCFullYear()+"-"+(t.getUTCMonth()+1)+"-"+t.getUTCDate()}},j={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{width:"350px",persistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[s("v-btn",{attrs:{slot:"activator",accent:""},slot:"activator"},[t._v("\n    Edit Date\n  ")]),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-title",[t._v("Edit Meetup Date")])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-date-picker",{staticStyle:{width:"100%"},model:{value:t.editableDate,callback:function(e){t.editableDate=e},expression:"editableDate"}},[[s("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},nativeOn:{click:function(e){t.editDialog=!1}}},[t._v("Close")]),t._v(" "),s("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},nativeOn:{click:function(e){t.onSaveChanges(e)}}},[t._v("Save")])]],2)],1)],1)],1)],1)],1)},staticRenderFns:[]},H=s("VU/8")(Y,j,!1,null,null,null).exports,W={props:["meetup"],data:function(){return{editDialog:!1,editableTime:null}},methods:{onSaveChanges:function(){var t=new Date(this.meetup.date),e=this.editableTime.match(/^(\d+)/)[1],s=this.editableTime.match(/:(\d+)/)[1];t.setHours(e),t.setMinutes(s),this.$store.dispatch("updateMeetupData",{id:this.meetup.id,date:t})}},created:function(){var t=new Date(this.meetup.date).toTimeString();this.editableTime=t.getUTCFullYear()+"-"+(t.getUTCMonth()+1)+"-"+t.getUTCDate()}},J={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{width:"350px",persistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[s("v-btn",{attrs:{slot:"activator",accent:""},slot:"activator"},[t._v("\n    Edit Time\n  ")]),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-title",[t._v("Edit Meetup Time")])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-time-picker",{staticStyle:{width:"100%"},attrs:{format:"24hr"},model:{value:t.editableTime,callback:function(e){t.editableTime=e},expression:"editableTime"}},[[s("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},nativeOn:{click:function(e){t.editDialog=!1}}},[t._v("Close")]),t._v(" "),s("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},nativeOn:{click:function(e){t.onSaveChanges(e)}}},[t._v("Save")])]],2)],1)],1)],1)],1)],1)},staticRenderFns:[]},B=s("VU/8")(W,J,!1,null,null,null).exports,Q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{persistent:""},model:{value:t.registerDialog,callback:function(e){t.registerDialog=e},expression:"registerDialog"}},[s("v-btn",{staticClass:"primary",attrs:{slot:"activator",accent:""},slot:"activator"},[t._v("\n    "+t._s(t.userIsRegistered?"Unregister":"Register")+"\n  ")]),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[t.userIsRegistered?s("v-card-title",[t._v("Unregister from Meetup ?")]):s("v-card-title",[t._v("Register for Meetup ?")])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-text",[t._v("\n            You can always change your decision later on.\n          ")])],1)],1),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-actions",[s("v-btn",{staticClass:"red--text darken-1",attrs:{flat:""},on:{click:function(e){t.registerDialog=!1}}},[t._v("Cancel")]),t._v(" "),s("v-btn",{staticClass:"green--text darken-1",attrs:{flat:""},on:{click:t.onAgree}},[t._v("Confirm")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},Z=s("VU/8")({props:["meetupId"],data:function(){return{registerDialog:!1}},computed:{userIsRegistered:function(){var t=this;return this.$store.getters.user.registeredMeetups.findIndex(function(e){return e===t.meetupId})>=0}},methods:{onAgree:function(){this.userIsRegistered?this.$store.dispatch("unregisterUserFromMeetup",this.meetupId):this.$store.dispatch("registerUserForMeetup",this.meetupId)}}},Q,!1,null,null,null).exports,G=s("IHMs"),X=s.n(G);r.a.filter("date",function(t){return new Date(t).toLocaleString(["en-US"],{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}),r.a.component("app-alert",N),r.a.component("app-edit-meetup-details-dialog",z),r.a.component("app-edit-meetup-date-dialog",H),r.a.component("app-edit-meetup-time-dialog",B),r.a.component("app-meetup-register-dialog",Z),r.a.use(A.a,{theme:{primary:X.a.red.darken1,accent:X.a.red.accent2,secondary:X.a.grey.lighten1,info:X.a.blue.lighten1,warning:X.a.amber.darken2,error:X.a.red.accent4,success:X.a.green.lighten2}}),r.a.config.productionTip=!1,new r.a({el:"#app",store:P,router:V,render:function(t){return t(n)},created:function(){var t=this;E.initializeApp({apiKey:"AIzaSyD6uZV-spl-Uvdl1sPqvc22QgPKpTk1ucE",authDomain:"meetupproject-b380c.firebaseapp.com",databaseURL:"https://meetupproject-b380c.firebaseio.com",projectId:"meetupproject-b380c",storageBucket:"gs://meetupproject-b380c.appspot.com"}),E.auth().onAuthStateChanged(function(e){e&&(t.$store.dispatch("autoSignIn",e),t.$store.dispatch("fetchUserData"))}),this.$store.dispatch("loadMeetups")}})},VeFm:function(t,e){},WTSI:function(t,e){},qcdr:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.03865a80fa71b8b1d638.js.map