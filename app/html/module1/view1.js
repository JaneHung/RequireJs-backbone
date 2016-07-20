define(['text!html/module1/tpl.html'],function(tpl){
	var View1 = Backbone.View.extend({
		el: '#container',
		initialize: function(){
			console.log(82222222228)
		},
		render: function(name){
			this.$el.html(_.template(tpl, {name: name}));
		}
	});
	return View1;
})