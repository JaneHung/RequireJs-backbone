require.config({
	//baseUrl: 'js/libs',
	paths:{
		jquery: 'libs/jquery-3.0.0',
		bootstrap: 'libs/bootstrap',
		backbone: 'libs/backbone',
		backboneLocalStorage: 'libs/backbone.localStorage',
		underscore: 'libs/underscore'
		//demo: 'demo/demo'
	},
	shim: {
		underscore: {
                exports: '_'
            },
        jquery: {
                exports: '$'
            },
		bootstrap: {
			deps: ['jquery'],
			exports: 'bootstrap'
		},
		backbone: {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},
		backboneLocalStorage: {
			deps: ['backbone'],
			exports: 'backboneLocalStorage'
		}
	}
	
});
//Backbone会把自己加到全局变量中
require(['jquery', 'bootstrap', 'backbone', 'underscore','router','backboneLocalStorage'],function($,bootstrap,Backbone,underscore,router,backboneLocalStorage){
//	alert(demo.add(1,5));

	 Backbone.history.start();   //开始监控url变化
});