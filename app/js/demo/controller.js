define(['demo/model', 'demo/view'], function(Model, View){
	var controller = function(){
		var model = new Model();
		var view = new View({
			model: model
		})
		view.render();
		//model.set({'name': 'fire5', 'age': '18'});

		
	//	model.validate(model.attributes); //model.attributes 对象
		model.aboutMe();
		//model.save(); //会发送POST到模型对应的url， 数据格式为json name the fire age{" ":" 5 "," ":38}
//然后接着就是从服务器端获取数据使用方法fetch options([ ])
	};
	return controller;

});	