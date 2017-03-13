//"use strict";
//$ = jQuery = require('jquery');

/*eslint-disable strict */ //Disabling check because we can't run strict mode. Need global vars

//function render(){
//    var route = window.location.hash.substr(1);
//    React.render(<App route={route}/>, document.getElementById('app'));
//}

//window.addEventListener('hashchange', render);
//render();
//React.render(<Home />, document.getElementById('app'));

"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, function(Handler){
    React.render(<Handler />, document.getElementById('app'));
});