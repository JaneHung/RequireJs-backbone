define(['backbone'],function(){
	var routesMap = {
			'module1': 'js/module1/controller1.js',
			'module2(/:name)': 'js/module2/controller2.js',
			'module3(/:name)': 'js/module3/controller.js',
			'demo': 'js/demo/controller.js',
			'book': 'js/book/controller.js',
			'todo': 'js/todo/view.js',
			'*actions': 'defaultAction'
		};
	var Router = Backbone.Router.extend({
		
		/*routes: {
			'module1': 'module1',
			'module2(/:name)': 'module2',
			'*action': 'defaultAction'
		},*/
		
	/*	module1: function(){
			var url = 'js/module1/controller1.js';
			require([url], function (controller) {
                controller();
            });
          },
          module2: function(name){
			var url = 'js/module2/controller2.js';
			require([url], function (controller) {
                controller(name);
            });
          },*/
          //路由初始化可以做一些事
          routes: routesMap,
		initialize: function(){
			console.log('init router');
			
		},
		defaultAction: function(){
			console.log(51105);
		//	location.hash = 'module1';
		}
	});
	var router = new Router();
	 //彻底用on route接管路由的逻辑，这里route是路由对应的value
	router.on('route', function(route, params){
		require([route], function(controller){
			if(router.currentController && router.currentController !== controller){
				router.currentController.onRouteChange && router.currentController.onRouteChange();
			}
			router.currentController = controller;
			controller.apply(null, params); //每个模块约定都返回controller
		});
		console.log('hash change', arguments); //这里route是路由对应的方法名
	});
	return router; //这里必须的，让路由表执行
})