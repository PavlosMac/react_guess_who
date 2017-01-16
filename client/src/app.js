var React = require('react');
var ReactDOM = require('react-dom');
import MainContainer from './containers/MainContainer'

window.onload = function(){
  ReactDOM.render(
    <MainContainer/>,
    document.getElementById('app')
  );
}
