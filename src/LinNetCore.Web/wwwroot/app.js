!function(){"use strict";angular.module("heroesApp",["heroesService"])}(),function(){"use strict";angular.module("app.production.config",[]).constant("LinConfig",{apiUrl:"/api/heroes"})}(),function(){"use strict";angular.module("app.development.config",[]).constant("LinConfig",{apiUrl:"/api/heroes"})}(),function(){"use strict";function a(a,b){a.Heroes=b.query();var c={firstName:"HONGJUAN",Name:"lin",EnterDate:new Date(2016,8,2),consumption:123.659855,plan:"super-plasn",message:"what is up"};a.data=c,a.colorsArray=["red","green","blue","purple","olive"],a.len=0,a.clickMe=function(){a.len=a.len+1;var b=null;try{b.payForItem()}catch(c){alert("sth. wrong!")}}}angular.module("heroesApp").controller("heroesController",a),a.$inject=["$scope","Heroes"],angular.module("heroesApp").directive("colorList",function(){return{restrict:"AE",template:"<button ng-click='showHideColors()' type='button'>{{isHidden ? 'Show Available Colors' : 'Hide Available Colors'}}</button><div ng-hide='isHidden' id='colorContainer'></div>",link:function(a,b){a.isHidden=!0,a.showHideColors=function(){a.isHidden=!a.isHidden};var c=b.find("div");angular.forEach(a.colorsArray,function(a){var b="<div style='background-color:"+a+"'>"+a+"</div>";c.append(b)})}}})}(),function(){"use strict";var a=angular.module("heroesService",["ngResource","app.development.config"]);a.factory("Heroes",["$resource","LinConfig",function(a,b){return a(b.apiUrl,{},{query:{method:"GET",params:{},isArray:!0}})}])}();