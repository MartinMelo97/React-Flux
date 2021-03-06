"use strict";

var React = require('react');

var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;
var Route = Router.Route;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homepage')} />
        <Route name="authors" handler={require('./components/authors/authorPage')} />
        <Route name="about" handler={require('./components/about/aboutPage')} />
        <Router name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage')} />
        <NotFoundRoute handler={require('./components/notFoundPage')} />
        <Redirect from="about" to="about" />
        <Redirect from="about/*" to="about" />
    </Route>
);

module.exports = routes;