define(['todo/model'],function(Todo){
	var TodoList = Backbone.Collection.extend({
		//设置Collection的模型为Todo
		model: Todo,
		//存储到本地，以为todos-backbone命名的空间中
	//	localStorage: new Store('todos-backbone'),
		//获取所有已经完成的任务数组
		completed: function(){
			return this.filter(function(todo) {
				return todo.get('completed');
			});
		},
		//获取任务列表中未完成的任务数组
		remaining: function(){
			return this.without.apply(this, this.completed());

		},
		//获得下一个任务的排序序号，通过数据库中的记录数加1实现
		nextOrder: function(){
			if(!this.length){
				return 1;
			}else{
				return this.last().get('order') + 1;
			}
		},
		//Backbone内置函数,根据todo对象的加入顺序进行排列
		comparator: function(todo){
			return todo.get('order');
		}
	});
/*	var View = Backbone.View.extend({
		el: '#js-view',
		render: function(){
			this.$el.html(_.template(tpl));
		}
	});
	var controller = function(){
		var view = new View;
		var todoList = new TodoList;
		view.render();
		return todoList;
	};
	return controller;*/
	return new TodoList();
	
})