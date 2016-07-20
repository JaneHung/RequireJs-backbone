
define(['todo/controller','todo/todoView', 'libs/text!todo/tpl.html', 'libs/text!todo/stats.html', 'common'],function(Todos, TodoView, tpl, statsTpl, Common){

	var View = Backbone.View.extend({
		el: '#js-view',
		events: {
			'keypress #new-todo': 'createOnEnter',
			'click #clear-completed': 'clearCompleted',
			'click #toggle-all': 'toggleAllComplete'
		},
		initialize: function(){

	//	this.listenTo(Todos, 'add', this.addOne);
		/*		this.listenTo(Todos, 'reset', this.addAll);
			this.listenTo(Todos, 'change:completed', this.filterOne);
			this.listenTo(Todos, 'filter', this.filterAll);
			this.listenTo(Todos, 'all', this.render);
			Todos.fetch();*/
			this.$el.html(_.template(tpl));
			var ob = this;

			setTimeout(function(){
				ob.trigger('reset');//向View触发事件	
				//	Todos.on('add', ob.addOne, ob);
					ob.listenTo(Todos, 'add', ob.addOne);
					ob.listenTo(Todos, 'reset', ob.addAll);
					ob.listenTo(Todos, 'change:completed', ob.filterOne);
					ob.listenTo(Todos, 'filter', ob.filterAll);
					ob.listenTo(Todos, 'all', ob.render);
					//Todos.fetch();
				},500) ;
		},
		render: function(){

		//	this.$el.html(_.template(tpl));

			this.$allCheckbox = this.$('#toggle-all')[0];
			//this.$allCheckbox.checked =! remaining;
			
			var completed = Todos.completed().length;
			var remaining = Todos.remaining().length;
			if(Todos.length){
				this.$('.main').show();
				this.$('#footer').show();
				this.$('#footer').html(_.template(statsTpl)({completed: completed, remaining: remaining}));
				this.$('#filters li a').removeClass('selected').filter('[href="#/' + (Common.TodoFilter || '') + '"]').addClass('selected');

			}else{
				this.$('.main').hide();
				this.$('#footer').hide();
			}
			
			
		},
		addOne: function(todo){
			
			var view = new TodoView({ model: todo });
			$('#todo-list').append(view.render().el);

		},
		addAll: function(){
			
			this.$('#todo-list').html('');
			Todos.each(this.addOne, this);

		},
		filterOne: function(todo){
			todo.trigger('visible');
		},
		filterAll: function(){
			Todos.each(this.filterOne, this);
		},
		newAttributes: function(){
			return {
				title: this.$('#new-todo').val().trim(),
				order: Todos.nextOrder(),
				completed: false
			};
		},
		createOnEnter: function (e) {

			if(e.which !== Common.ENTER_KEY || !this.$('#new-todo').val().trim()){
				return;
			}
			Todos.create(this.newAttributes());
			this.$('#new-todo').val('');
		},
		clearCompleted: function(){
			_.invoke(Todos.completed(), 'destroy');
			return false;
		},
		toggleAllComplete: function(){
			var completed = this.$('#toggle-all')[0].checked;
			Todos.each(function(todo){
				todo.save({
					'completed': completed
				});
			})
		}
	});
	var controller = function(){
		var view = new View;
	//	var todoList = new TodoList;
		view.render();
		return view;
	};
	return controller;
	
})
