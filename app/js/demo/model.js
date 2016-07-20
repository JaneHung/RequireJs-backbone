define([], function(){
	var Man = Backbone.Model.extend({
	//	url: 'js/demo/save.json',
		initialize: function(){
			alert('hello you create!');
			//初始化时绑定监听
			this.bind('change:name', function(){
				var name = this.get('name');
				alert('改变的name属性:'+name);
			});
			this.bind('invalid', function(model, error){
				alert(error)
			})
		},
		defaults: {
			name: '张三',
			age: '38'
		},
		validate: function(attributes, options){
			if(attributes.name == '')
			{
				//alert('name不能为空！')  ;
				return 'name不能为空！'
			}
		},
		aboutMe: function(){
			//改变属性
			this.set({'name': 'thefire5', 'age': '18'},{validate: true}); //根据验证规则， 弹出错误提示
			//return '我叫' + this.get('name')+ ',今年'+this.get('age')+'岁';
		}
	});
	return Man;

});	