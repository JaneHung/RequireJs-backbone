define(['libs/text!demo/tpl.html'], function(tpl){
	var ManView = Backbone.View.extend({
		el: '#js-view',
		/*initialize: function(){
			this.model.on('nameEvent', this.render, this)
		},*/
		render: function(){
			this.$el.html(_.template(tpl)({'name':this.model.get('name'),'age':this.model.get('age')}));
		}
	});
	return ManView;
})