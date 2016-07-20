define(['libs/text!module1/tpl.html'],function(tpl){
	var View1 = Backbone.View.extend({
		


		el: '#js-view',
		initialize: function(){
			console.log(3222)
		},
		render: function(name){
		//	alert(_.template(tpl, {name: name}));
			console.log(name)
		//	this.$el.html(name);
			//this.$el.html(_.template(tpl, {'name': name}));
	  	this.$el.html(_.template(tpl)({'name': name}));
		}
	});
	return View1;
})