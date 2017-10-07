var HEADERS={headers:{Authorization:'Token "b32b59ec8d08206981481033e1d6cac3"'}},URL="http://localhost:3001/",WEATHER_URL="http://api.worldweatheronline.com/free/v2/weather.ashx?q=20.511138%2C-86.949234&format=json&num_of_days=5&key=91e6dc741ca2f99fa18e1408ee471",WEATHER_MARINE_URL="http://api.worldweatheronline.com/free/v2/marine.ashx?q=20.511138%2C-86.949234&format=json&key=91e6dc741ca2f99fa18e1408ee471",DB_ACCESS_TOKEN="TfMIrZsh-ycAAAAAAAATcMf8xXvVLFp70DVpuXjpO8PUFuEwup2fSYv0lBAt7L8C";!function(){"use strict";var e=angular.module("myApp",["ngRoute","myApp.utilityService","myApp.constants","myApp.directives","myApp.filters","myApp.services","myApp.controller","ngSanitize","jkuri.gallery","ngAnimate","ui.bootstrap","gm.datepickerMultiSelect","ui.mask","checklist-model","angularSpinner","ngIntlTelInput"]);e.config(["ngIntlTelInputProvider",function(e){e.set({defaultCountry:"us"})}]),e.config(["$routeProvider",function(e){e.when("/admin",{templateUrl:"partials/admin.html",controller:"AdminCtrl",controllerAs:"admin",resolve:{auth:["$q","AuthenticationService","$location",function(e,i,r){var t=i.getUserInfo();return t?e.when(t):(window.localStorage.alerts="Not a Authorized Diver",window.localStorage.alertType="alert-danger",r.path("/home"),e.reject({authenticated:!1}))}]}}),e.when("/home",{templateUrl:"partials/home.html",controller:"HomeCtrl",controllerAs:"home"}),e.when("/reef_map",{templateUrl:"partials/reef_map.html",controller:"ReefMapCtrl",controllerAs:"reefMap"}),e.when("/current_pricing",{templateUrl:"partials/current_pricing.html",controller:"CurrentPricingCtrl",controllerAs:"pricing"}),e.when("/about_cozumel",{templateUrl:"partials/about_cozumel.html",controller:"AboutCozumelCtrl",controllerAs:"aboutCozumel"}),e.when("/gallery",{templateUrl:"partials/gallery.html",controller:"GalleryCtrl",controllerAs:"gallery"}),e.when("/reservations",{templateUrl:"partials/reservations.html",controller:"ReservationsCtrl",controllerAs:"reservation"}),e.otherwise({redirectTo:"/home"})}]),e.run(["$rootScope","$location",function(e,i){e.$on("$routeChangeSuccess",function(e){console.log(e)}),e.$on("$routeChangeError",function(e,r,t,n){n.authenticated===!1&&(console.log("do I end up hre at some point"),i.path("/login"))})}])}(),function(){"use strict";var e=angular.module("myApp.controller",[]);e.controller("IndexCtrl",["$scope","getWeatherFactory","$uibModal","AuthenticationService","$location","$window","$http","getImagesFactory",function(e,i,r,t,n,o,s,a){function l(e){var i;return angular.forEach(u.weatherDescMap,function(r,t){t==e&&(i=r)}),i}function c(e){var i=new Date(e),r=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"],t=r[i.getUTCDay()];return t}var u=this;u.tempScale=!0,u.tripAdvisorReview=["You looking for a great, custom experience rather than a cattle boat in CZM???? Call Kim. But do it before you get there... the word will get out and she'll fill up.","Kim truly is a pro. I did my open water dives with her last week. She was prepared, knowledgable, reassuring, relaxed, professional, and funny. The time under and above water with her was great."],u.daysOfTheWeek=[],u.weatherInCity="Current Weather in Cozumel...",u.weatherDescMap={395:'<i class="wi wi-snow"></i>',392:'<i class="wi wi-snow"></i>',389:'<i class="wi wi-thunderstorm"></i>',386:'<i class="wi wi-thunderstorm"></i>',377:'<i class="wi wi-showers"></i>',374:'<i class="wi wi-showers"></i>',371:'<i class="wi wi-snow"></i>',368:'<i class="wi wi-snow"></i>',365:'<i class="wi wi-sleet"></i>',362:'<i class="wi wi-sleet"></i>',359:'<i class="wi wi-thunderstorm"></i>',356:'<i class="wi wi-thunderstorm"></i>',353:'<i class="wi wi-showers"></i>',350:'<i class="wi wi-snow"></i>',338:'<i class="wi wi-snow"></i>',335:'<i class="wi wi-snow"></i>',332:'<i class="wi wi-snow"></i>',329:'<i class="wi wi-snow"></i>',326:'<i class="wi wi-snow"></i>',323:'<i class="wi wi-snow"></i>',320:'<i class="wi wi-sleet"></i>',317:'<i class="wi wi-sleet"></i>',314:'<i class="wi wi-day-showers"></i>',311:'<i class="wi wi-day-showers"></i>',308:'<i class="wi wi-storm-showers"></i>',305:'<i class="wi wi-day-showers"></i>',302:'<i class="wi wi-day-showers"></i>',299:'<i class="wi wi-day-showers"></i>',296:'<i class="wi wi-day-showers"></i>',293:'<i class="wi wi-day-showers"></i>',284:'<i class="wi wi-sleet"></i>',281:'<i class="wi wi-sleet"></i>',266:'<i class="wi wi-sleet"></i>',263:'<i class="wi wi-sleet"></i>',260:'<i class="wi wi-day-fog"></i>',248:'<i class="wi wi-fog"></i>',230:'<i class="wi wi-day-snow-wind"></i>',227:'<i class="wi wi-day-snow-wind"></i>',200:'<i class="wi wi-thunderstorm"></i>',185:'<i class="wi wi-day-sleet"></i>',182:'<i class="wi wi-day-sleet"></i>',179:'<i class="wi wi-snow"></i>',176:'<i class="wi wi-showers"></i>',143:'<i class="wi wi-day-sleet"></i>',122:'<i class="wi wi-cloudy"></i>',119:'<i class="wi wi-cloudy"></i>',116:'<i class="wi wi-day-cloudy"></i>',113:'<i class="wi wi-day-sunny"></i>'},window.sessionStorage.userInfo?this.isLoggedIn=!0:this.isLoggedIn=!1,u.toggleTemperature=function(e){"farenheit"===e?u.tempScale=!0:u.tempScale=!1},i.getWeather().then(function(e){for(var i=e.data.weather,r=0;r<i.length;r++)u.daysOfTheWeek.push({date:i[r].date,weekDay:c(i[r].date),maxtempC:i[r].maxtempC,maxtempF:i[r].maxtempF,mintempC:i[r].mintempC,mintempF:i[r].mintempF,weatherCode:l(i[r].hourly[3].weatherCode)});return u.currentWeather=u.daysOfTheWeek.splice(0,1),u.daysOfTheWeek}),i.getMarineWeather().then(function(e){var i=e.data.weather[0].hourly[3];return u.marineWeather={humidity:i.humidity,waterTempC:i.waterTemp_C,waterTempF:i.waterTemp_F,weatherDesc:i.weatherDesc[0].value,windDir:i.winddir16Point,windSpeed:i.windspeedMiles},u.marineWeather}),this.userLogin=function(){e.message="Show Form Button Clicked ONE this happens when user clicks admin login",console.log(e.message);var i=r.open({templateUrl:"/partials/modal/login.html",controller:"LoginCtrl",scope:e});i.result.then(function(e){t.login(e.useremail,e.password);n.path("/admin"),window.location.reload()},function(){$log.info("Modal dismissed at: "+new Date)})},this.userLogout=function(){window.sessionStorage.clear(),n.path("/home"),window.location.reload()}}])}(),function(){"use strict";var e=angular.module("myApp.controller");e.controller("HomeCtrl",["$scope","getWeatherFactory","$window","$uibModal","getImagesFactory",function(e,i,r,t,n){function o(e){var i=e.url;return i=i.replace("dl=0","raw=1")}this.pageIdentifier="Home",this.panelTitle="Explore the Mystical Underwater World of Cozumel with Dive GalaxSea",e.caseData=!1,n.getGallery().then(function(i){var r,t=i.links.length,n=[];for(r=0;t>r;r++)if("file"===i.links[r][".tag"]&&-1!==i.links[r].path_lower.search(/\bcarousel\b/)){var s=o(i.links[r]);null!=s&&n.push(s),e.carousel=n}e.caseData=!0}),this.alertType=window.localStorage.alertType,this.alertMsg=window.localStorage.alerts,localStorage.clear()}])}(),function(){"use strict";var e=angular.module("myApp.controller");e.controller("ReefMapCtrl",["$scope",function(e){this.pageIdentifier="Reef Map",this.panelTitle="Don't Imagine Paradise, Visit Cozumel!"}])}(),function(){"use strict";var e=angular.module("myApp.controller");e.controller("CurrentPricingCtrl",["$scope","getPricingFactory","usSpinnerService",function(e,i,r){var t=this;t.showSpinner=!0,t.pageIdentifier="Current Pricing",t.panelTitle="Learn About our Scuba Dive Courses & Diving Rates",t.diving="partials/pricing_partials/diving.html",t.rental="partials/pricing_partials/rental_gear.html",t.training="partials/pricing_partials/training.html",t.policies="partials/pricing_partials/policies.html",i.getDivingPricing().then(function(e){t.currentPricingDiving=e}),i.getTrainingPricing().then(function(e){t.currentPricingTraining=e}),i.getRentalPricing().then(function(e){t.currentPricingRentals=e}),i.getSpecialtiesPricing().then(function(e){t.showSpinner=!1,t.currentPricingSpecialties=e}),i.getMiscellaneousPricing().then(function(e){t.showSpinner=!1;var i=e;t.parkFee=i[0].price})}])}(),function(){"use strict";var e=angular.module("myApp.controller");e.controller("AboutCozumelCtrl",["$scope",function(e){this.pageIdentifier="About Cozumel",this.panelTitle="Go Diving in Cozumel and Explore the Mesmerizing Coral Reefs!"}])}(),function(){"use strict";var e=angular.module("myApp.controller");e.controller("GalleryCtrl",["$scope","$document","$http","getImagesFactory",function(e,i,r,t){function n(e){var i={},r=e.url;return r=r.replace("dl=0","raw=1"),i.thumb=r,i.img=r,i}var o=this;o.pageIdentifier="Gallery",o.panelTitle="Explore the Underwater Galaxy of Cozumel",o.picOfTheMonth={src:"images/img15.jpg",title:"Picture of the Month",description:"Contrats to Judi",user:"Troy Leach"},t.getGallery().then(function(i){var r,t=i.links.length,s=[];for(r=0;t>r;r++)if("file"===i.links[r][".tag"])if(-1!==i.links[r].path_lower.search(/\bgallery\b/)){var a=n(i.links[r]);null!=a&&s.push(a),e.images=s}else if(-1!==i.links[r].path_lower.search(/\bpicture_of_month\b/)){var l=i.links[r].url;l=l.replace("dl=0","raw=1"),o.picOfTheMonth.src=l}})}])}(),function(){"use strict";var e=angular.module("myApp.controller");e.controller("ReservationsCtrl",["$scope","$http","$route","$location","$window","getPricingFactory",function(e,i,r,t,n,o){var s=this;s.showspinner=!1,s.pageIdentifier="Reservations",s.panelTitle="kim@divegalaxsea.com | 52-987-112-9630 | From the US: 011-52-1-987-112-9630",s.checkboxModel=!1,s.user={firstName:void 0,lastName:void 0,email:void 0,selectedDiving:[],selectedTraining:[],selectedDates:[]},s.checkFirst=function(){s.user.selectedDiving.splice(0,s.user.selectedDiving.length),s.user.selectedDiving.push("guest")},o.getDivingPricing().then(function(e){s.diving=e}),o.getTrainingPricing().then(function(e){s.training=e}),o.getRentalPricing().then(function(e){s.rentals=e}),o.getSpecialtiesPricing().then(function(e){s.specialties=e}),s.twoTank=!1,s.reset=function(){s.user={}},s.saveData=function(){s.showspinner=!0;var e={user:{first_name:s.user.firstName,last_name:s.user.lastName,email:s.user.email,phone:s.user.phone,comments:s.user.message,vacations_attributes:[{dates_array:s.user.selectedDates,diving_objects:s.user.selectedDiving,training_objects:s.user.selectedTraining,number_of_divers:s.user.numberOfDivers,resort:s.user.resort}]}};i.post(URL+"users",e).success(function(e,i){s.showSpinner=!1,n.localStorage.setItem("alerts"," I have your information and I will contact you shortly."),n.localStorage.setItem("alertType","Success!"),n.location.href="/"}).error(function(e,i){console.log(i)})},s.addDiving=function(e){s.user.selectedDiving.push(e)},s.activeDate=null,s.selectedDates=[(new Date).setHours(0,0,0,0)],s.type="individual",s.removeFromSelected=function(e){s.user.selectedDates.splice(s.user.selectedDates.indexOf(e),1)},e.roles=["guest","user","customer","admin"],e.user={roles:["user"]},e.checkAll=function(){e.user.roles=angular.copy(e.roles)},e.uncheckAll=function(){e.user.roles=[]},e.checkFirst=function(){e.user.roles.splice(0,e.user.roles.length),e.user.roles.push("guest")}}])}(),function(){"use strict";var e=angular.module("myApp.controller");e.controller("AdminCtrl",["$scope","getWeatherFactory","$window","getPricingFactory","updatePricingFactory","$uibModal","$log",function(e,i,r,t,n,o,s){var a=this;this.pageIdentifier="Admin Dashboard",this.panelTitle="Single Day Rates",a.singleDay="partials/edit_pricing_partials/single_day.html",a.rentalGear="partials/edit_pricing_partials/rental_gear.html",a.training="partials/edit_pricing_partials/training.html",a.specialties="partials/edit_pricing_partials/specialties.html",a.miscellaneous="partials/edit_pricing_partials/miscellaneous_pricings.html",e.editPrice=function(i,r){e.message="Show Form Button Clicked",console.log(e.message),e.pricing_object=i,e.category=r+"Ctrl";var t=o.open({templateUrl:"/partials/modal/edit_single_day_rates.html",controller:e.category,scope:e,resolve:{userForm:function(){return e.userForm}}});t.result.then(function(i){var r={},t={SpecialtiesCtrl:"specialty",TrainingsCtrl:"training",DivingsCtrl:"diving",MiscellaneousCtrl:"miscellaneous_pricing",RentalsCtrl:"rental"},o=t[e.category];r.id=i.id,r[o]={title:i.title,price:i.price,description:i.description},"SpecialtiesCtrl"==e.category?n.updateSpecialtiesPricing(r):"TrainingsCtrl"==e.category?n.updateTrainingsPricing(r):"RentalsCtrl"==e.category?n.updateRentalsPricing(r):"DivingsCtrl"==e.category?n.updateDivingsPricing(r):"MiscellaneousCtrl"==e.category&&n.updateMiscellaneousPricing(r)},function(){s.info("Modal dismissed at: "+new Date)})},t.getDivingPricing().then(function(e){a.currentPricingDiving=e}),t.getTrainingPricing().then(function(e){a.currentPricingTraining=e}),t.getRentalPricing().then(function(e){a.currentPricingRentals=e}),t.getSpecialtiesPricing().then(function(e){a.currentPricingSpecialties=e}),t.getMiscellaneousPricing().then(function(e){a.currentPricingMiscellaneous=e})}])}(),function(){"use strict";var e=angular.module("myApp.controller");e.controller("SpecialtiesCtrl",["$scope","$modalInstance","userForm",function(e,i,r,t){e.form={},e.pricing=e.stuff,e.submitForm=function(){e.form.userForm.$valid?(console.log("user form is in scope"),i.close(e.pricing)):console.log("userform is not in scope")},e.cancel=function(){i.dismiss("cancel")}}])}(),function(){"use strict";var e=angular.module("myApp.controller");e.controller("TrainingsCtrl",["$scope","$modalInstance","userForm",function(e,i,r,t){e.pricing=e.stuff,e.submitForm=function(){e.form.userForm.$valid?(console.log("user form is in scope"),i.close(e.pricing)):console.log("userform is not in scope")},e.cancel=function(){i.dismiss("cancel")}}])}(),function(){"use strict";var e=angular.module("myApp.controller");e.controller("RentalsCtrl",["$scope","$modalInstance","userForm",function(e,i,r,t){e.pricing=e.stuff,e.submitForm=function(){e.form.userForm.$valid?(console.log("user form is in scope"),i.close(e.pricing)):console.log("userform is not in scope")},e.cancel=function(){i.dismiss("cancel")}}])}(),function(){"use strict";var e=angular.module("myApp.controller");e.controller("DivingsCtrl",["$scope","$modalInstance","userForm",function(e,i,r,t){e.pricing=e.pricing_object,e.submitForm=function(){e.form.userForm.$valid?(console.log("user form is in scope"),i.close(e.pricing)):console.log("userform is not in scope")},e.cancel=function(){i.dismiss("cancel")}}])}(),function(){"use strict";var e=angular.module("myApp.controller");e.controller("MiscellaneousCtrl",["$scope","$modalInstance","userForm",function(e,i,r,t){e.pricing=e.stuff,e.submitForm=function(){e.form.userForm.$valid?(console.log("user form is in scope"),i.close(e.pricing)):console.log("userform is not in scope")},e.cancel=function(){i.dismiss("cancel")}}])}(),function(){"use strict";var e=angular.module("myApp.controller");e.controller("LoginCtrl",["$scope","$modalInstance","AuthenticationService","$window",function(e,i,r,t,n){e.submit=function(){e.loginForm.$valid?i.close(e.credentials):console.log("userform is not in scope")},e.cancel=function(){i.dismiss("cancel")}}])}(),function(){"use strict";var e=angular.module("myApp.services",[]);e.factory("getWeatherFactory",["$http","$q",function(e,i){return{getWeather:function(){var r=i.defer();return e.get(WEATHER_URL).success(function(e){r.resolve(e)}).error(function(){r.reject()}),r.promise},getMarineWeather:function(){var r=i.defer();return e.get(WEATHER_MARINE_URL).success(function(e){r.resolve(e)}).error(function(){r.reject()}),r.promise}}}])}.call(this),function(){"use strict";var e=angular.module("myApp.services");e.factory("getPricingFactory",["$http","$q",function(e,i){return{getDivingPricing:function(){var r=i.defer();return e.get(URL+"divings",HEADERS).success(function(e){r.resolve(e)}).error(function(){r.reject()}),r.promise},getTrainingPricing:function(){var r=i.defer();return e.get(URL+"trainings",HEADERS).success(function(e){r.resolve(e)}).error(function(){r.reject()}),r.promise},getRentalPricing:function(){var r=i.defer();return e.get(URL+"rentals",HEADERS).success(function(e){r.resolve(e)}).error(function(){r.reject()}),r.promise},getSpecialtiesPricing:function(){var r=i.defer();return e.get(URL+"specialties",HEADERS).success(function(e){r.resolve(e)}).error(function(){r.reject()}),r.promise},getMiscellaneousPricing:function(){var r=i.defer();return e.get(URL+"miscellaneous_pricings",HEADERS).success(function(e){r.resolve(e)}).error(function(){r.reject()}),r.promise}}}])}.call(this),function(){"use strict";var e=angular.module("myApp.services");e.factory("updatePricingFactory",["$http","$q",function(e,i){return{updateDivingsPricing:function(r){var t=i.defer();return e.patch(URL+"divings/"+r.id,r,HEADERS).success(function(e){t.resolve(e)}).error(function(){t.reject()}),t.promise},updateRentalsPricing:function(r){var t=i.defer();return e.patch(URL+"rentals/"+r.id,r,HEADERS).success(function(e){t.resolve(e)}).error(function(){t.reject()}),t.promise},updateTrainingsPricing:function(r){var t=i.defer();return e.patch(URL+"trainings/"+r.id,r,HEADERS).success(function(e){t.resolve(e)}).error(function(){t.reject()}),t.promise},updateSpecialtiesPricing:function(r){var t=i.defer();return e.patch(URL+"specialties/"+r.id,r,HEADERS).success(function(e){t.resolve(e)}).error(function(){t.reject()}),t.promise},updateMiscellaneousPricing:function(r){var t=i.defer();return e.patch(URL+"miscellaneous_pricings/"+r.id,r,HEADERS).success(function(e){t.resolve(e)}).error(function(){t.reject()}),t.promise}}}])}.call(this),function(){"use strict";var e=angular.module("myApp.services");e.factory("AuthenticationService",["$http","$q","$window",function(e,i,r){function t(t,n){var o=i.defer(),s={users_information:{email:t,password:n}};return e.post(URL+"login",s,HEADERS).success(function(e){a={accessToken:e.access_token},r.sessionStorage.userInfo=JSON.stringify(a),o.resolve(a)},function(e){window.localStorage.alerts="Not a Authorized Diver",window.localStorage.alertType="alert-danger",o.reject(e)}),o.promise}function n(){var t=i.defer();return e({method:"POST",url:URL+"logout",headers:{access_token:a.accessToken}}).then(function(e){a=null,r.sessionStorage.userInfo=null,t.resolve(e)},function(e){t.reject(e)}),t.promise}function o(){return a}function s(){r.sessionStorage.userInfo&&(a=JSON.parse(r.sessionStorage.userInfo))}var a;return s(),{login:t,logout:n,getUserInfo:o}}])}.call(this),function(){"use strict";var e=angular.module("myApp.services");e.factory("getImagesFactory",["$http","$q",function(e,i){return{getGallery:function(){var r=i.defer();return e({url:"https://api.dropboxapi.com/2/sharing/list_shared_links",method:"POST",data:"{}",headers:{Authorization:"Bearer "+DB_ACCESS_TOKEN,"Content-Type":"application/json"}}).success(function(e,i,t,n){r.resolve(e)}).error(function(e,i,t,n){console.log(e),r.reject()}),r.promise}}}])}.call(this),function(){"use strict";var e=angular.module("myApp.directives",[]);e.directive("sampleDirective",["$scope",function(e){return{restrict:"E",transclude:!0,scope:{},controller:function(e){},link:function(e,i,r){},replace:!0,templateUrl:""}}])}(),function(){"use strict";var e=angular.module("myApp.filters",[]);e.filter("simpleFilter",function(){return function(e){try{}catch(i){console.log("utcToDate :::::: ERROR: "+i)}return e}})}(),function(){"use strict";var e=angular.module("myApp.constants",[]);e.constant("liaisonConstants",{appName:"Liaison My Psych Track",loginErrorUsernamePassword:"You must enter username and password to log in",loginErrorInvalidCredentials:"Invalid credentials,Try Again!"})}(),function(){"use strict";var e=angular.module("myApp.utilityService",[]);e.service("utilService",["$timeout",function(e){this.showLoader=function(){e(function(){},2e3)},this.dismissProgress=function(){e(function(){},2e3)}}])}(),$(document).ready(function(){$(".picture-carousel").slick({autoplay:!0}),$(".autoplay").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3})});