define(['js/module3/controller.js','js/module3/model3.js','libs/text!module3/tpl.html'], function(Peoples, People, tpl){
	var View = Backbone.View.extend({
		//设定这个视图的Dom元素，也可以通过设定tagName,className,id,或者attr，如果没有特别设定，backbone会为它套上空的Div标签
		el: '#js-view',
		initialize: function(){
			//集合的事件绑定
			this.collection.bind('add', this.addOne);
		//	this.collection.bind('remove', this.delOne);
		},
		//使用了jquery的on方法，提供对视图的事件代理
		events: {
			'click #add': 'add',
			'click .del': 'del',
			'click #clear': 'clear'
		},
		add: function(){

			var name = prompt('请输入人名！');
			//创建一个新model
			var people = new People({
				'name': name
			});
			//并添加到人员队列中，会触发collection的add事件
			peoples.add(people);
		},
		del: function(obj){
			var peoples = new Peoples;
			//获取要删除的是哪个model
			var delWho = obj.currentTarget.id;
			//会触发collection的remove事件
			peoples.remove(delWho);

		},
		//当collection发生了add事件
		addOne: function(model){
			//每个model会随机生成一个唯一的cid，用来识别，区分
			$('#list').append('<li>' + model.get('name') + '说： hello world! <button class="del" id="'+model.cid+'">删除</button></li>');

		},
		//清空数据
		delOne: function(model){
			//使用Jquery的Remove方法，删除Dom和解除绑定的事件
			$('#'+ model.cid).parent().remove();
		},
		//清空数据
		clear: function(){
			this.collection.reset();
			this.clearAll();

		},
		//清空Dom
		clearAll: function(){
			$('#list').empty();
		}

	});
	return View;
})