define([],function(){
	var Book = Backbone.Model.extend({
		defaults: {
			title: 'default'
		},
		initialize: function(){
			console.log(555)
		}
	});
	return Book;
})