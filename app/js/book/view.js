define(['libs/text!book/tpl.html'], function(tpl){
	var BookView = Backbone.View.extend({
		el: '#js-view',
		
		render: function(){
		
			this.$el.html(_.template(tpl));
			this.$el.append('<ul><li>5555</li></ul>');
			this.$el.find('.content').html('Some text and markup');
		}

	});
	return BookView;
})