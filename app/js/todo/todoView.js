define(['common', 'libs/text!todo/todoTpl.html'], function(Common, todoTpl){
	//先来看TodoView，作用是控制任务列表
	var TodoView = Backbone.View.extend({
		//下面这个标签的作用是，把tpl模板中的获取html代码放到这标签中
		tagName: 'li',
		//获取一个任务条目的模板
		//template: _.template($('#item-template').html()),
		template: _.template(todoTpl),
		//为每一个任务条目绑定事件
		events: {
			'click .toggle': 'toggleCompleted',
			'dblclick label': 'edit',
			'click .destroy': 'clear',
			'keypress .edit': 'updateOnEnter',
			'blur .eidt': 'close'
		},
		//在初始化设置了todoview和todo的以一对一引用，这里我们可以把todoview看作是todo在界面的映射。
		initialize: function(){
			//_bindAll(this, 'render', 'close', 'remove');
			//this.model.bind('change', this.render);
			//this.model.bind('destroy', this.remove); //这个remove是view中的方法，用来清除页面中的Dom
			/*this.listenTo(this.model, 'change', this.render);
				this.listenTo(this.model, 'destroy', this.remove);
				this.listenTo(this.model, 'visible', this.toggleVisible);*/
			var ob = this;
			setTimeout(function(){
				ob.listenTo(ob.model, 'change', ob.render);
				ob.listenTo(ob.model, 'destroy', ob.remove);
				ob.listenTo(ob.model, 'visible', ob.toggleVisible);
			},500)

		},
		
		
		toggleVisible: function(){
			this.$el.toggleClass('hidden', this.isHidden());
		},
		isHidden: function(){
			var isCompleted = this.model.get('completed');
			return(
				(!isCompleted && Common.Tofilter == 'completed') || (isCompleted && Common.TodoFilter == 'active'));
		},
		//控制任务完成或者未完成
		toggleCompleted: function(){
			this.model.toggle();

		},
		//修改任务条目的样式
		edit: function(){
			this.$el.addClass('editing');
			this.$('.edit').focus();
		},
		//关闭编辑界面，并把修改内容同步到界面
		close: function(){
			/*this.model.save({
				content: this.input.val(); //会触发change事件
			});*/
			var value = this.$('.edit').val().trim();
			if(value){
				this.model.save({title: value});
			}else{
				this.clear();
			}
			this.$el.removeClass('editing');
		},
		//按下回车之后，关闭编程界面
		updateOnEnter: function(event){
			if(event.keyCode == Common.ENTER_KEY){
				this.close();
			}
		},
		//移除对应条目，以及对应的数据对象
		clear: function(){
			this.model.destroy();
		},
		//渲染todo中的数据到item-tpl中，然后返回自己的引用this
		render: function(){
		//	this.$el.html(_.template(todoTpl));
			this.$el.html(this.template(this.model.toJSON()));
			this.$el.toggleClass('completed', this.model.get('completed'))
			this.toggleVisible();
			this.$input = this.$('.edit');
			/*$(this.el).html(this.template(this.model.toJSON()));
			this.input = this.$('.todo-input');*/
			return this;
		}
	});
	return TodoView;
})
