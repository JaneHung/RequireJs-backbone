define(['module1/view1'], function (View) {

    var controller = function () {
    	alert(2222);
        var view = new View();
      //  alert(view.render('ss'))
        view.render('hju');
       // console.log(name)
    };
    return controller;
});