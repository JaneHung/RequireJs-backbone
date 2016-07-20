define([], function(){
	var People = Backbone.Model.extend({
		//默认值
		defaults: {
			'name': '啊三'
		}
	});
	return People;
});