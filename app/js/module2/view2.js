define(['libs/text!module2/tpl.html'], function(tpl){
	var View2 = Backbone.View.extend({
		el: '#js-view',
		events: {
			'click button': 'clickSpan'
		},
		clickSpan: function(){
			alert('you are clicked the button!');
		},
		initialize: function(){
			this.model.on('nameEvent', this.render, this)
		},
		render: function(){
			this.$el.html(_.template(tpl)({'name':this.model.get('name')}))
		}
	});
	return View2;
})