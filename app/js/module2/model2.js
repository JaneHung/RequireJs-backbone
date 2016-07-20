define([], function(){
 var Model2 = Backbone.Model.extend({
 	 //模型默认的数据
 	 defaults: function(){
 	 	return{
 	 		name: 'noname',
 	 		completed: false
 	 	};
 	 },

 	 //定义方法
 	 fetch: function(){
 	 	//http请求
 	 	var ob = this;

 	 	setTimeout(function(){

 	 		ob.set({'name': 'Vivi'});
 	 		ob.trigger('nameEvent');//向View触发事件

 	 	}, 3000);
 	 }

 });
 	return Model2;
})