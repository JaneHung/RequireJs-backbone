define(['book/model', 'book/view'],function(Book, View){
	
//	return BookShelf;
	var controller = function(){
		var book = new Book;
		var BookShelf = Backbone.Collection.extend({
			model: Book
		});
		var book1 = new Book({title: 'book1'});
		var book2 = new Book({title: 'book2'});
		var book3 = new Book({title: 'book3'});
		//var bookShelf = new BookShelf([book1,book2]); //注意这里面是数组,或者使用add
		var bookShelf = new BookShelf;
		bookShelf.add(book1);
		bookShelf.add(book2);
		bookShelf.add(book3);
		bookShelf.remove(book3);
		bookShelf.each(function(book) {
			alert(book.get('title'));
			//将 book 数据渲染到页面
		});
		/*bookShelf.fetch({url: './js/book/getbooks.js', success: function(collection, response){
			collection.each(function(book){
				alert(book.get('title'));
			});
		},
		error:function(){
			alert('error');
		}
	})*/
		var view = new View;
		view.render();
	}
	return controller;
	
})