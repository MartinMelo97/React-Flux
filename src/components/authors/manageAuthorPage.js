"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({

    mixins: [
        Router.Navigation
    ],

    getInitialState: function(){
        return {
            author: {
                id: '',
                firstName: '',
                lastName: ''
            }
        };
    },

    setAuthorState: function(){
        var field = event.target.name;
        var value = event.target.value;
    },

    saveAuthor: function(event){
        event.preventDefault();
        AuthorApi.saveAuthor(this.state.author);
        toastr.success('Author guardado correctamente');
        this.transitionTo('authors');
    },

    render: function(){
        return (
            <div className="container">
                <h1>Manage Author</h1>
                <hr/>
                <AuthorForm
                    author={this.state.author}
                    onChange=
            </div>
        );
    }
});