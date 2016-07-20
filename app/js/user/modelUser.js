define([],function(){
	var UserModel = Backbone.Model.extend({
		//默认用户名
		defaults: function(){
			return{
				userName: '默认用户名'
			},
			initialize: function(){
				if(!this.get('userName')){
					this.set({'userName': this.defaults.userName});
				}
				if(!this.get('userId')){
					this.set({'userId': ++userId});
				}
			},
		}
	});
	return UserModel;
	var UserCollection = Backbone.Collection.extend({
		model: UserModel,
		  // 持久化到本地数据库
		 localStorage: new Store("users")
	});
})