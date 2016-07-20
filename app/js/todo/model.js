define([], function(){
	var TodoModel = Backbone.Model.extend({
		defaults: {
			title: ' ',
			completed: false
		},
		//确保每一个content都不为空
	/*	initialize: function(){
			if(!this.get('content')){
				this.set({'content': this.defaults.content});

			}
		},*/
		//将一个任务完成的完成状态置为逆状态
		toggle: function(){
			this.save({completed:!this.get('completed')})
		}
	});
	return TodoModel;
})