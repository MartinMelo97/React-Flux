"use strict";

var React = require('react');

var About = React.createClass({

    statics: {
            willTransitionTo: function(transition, params, query, callback){
                if(!confirm("Seguro quieres leer esta página aburrida")){
                    transition.abort();
                }
                else
                {
                    callback();
                }
            },

        willTransitionFrom: function(transition, component){
            if(!confirm("Seguro quieres irte de aquí?")){
                transition.abort();
            }
        }
    
    },

    render: function() {
        return (
            <div>
                <h1><a href="/">About</a></h1>
                <p>
                    This application uses the followings technologies:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Boostrap</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;