"use strict";

var React = require('react');

var About = React.createClass({
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