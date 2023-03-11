import $ from "jquery"; //Load jquery
import React, { Component, createRef } from "react"; //For react component
import ReactDOM from "react-dom";
import './App.css';

window.jQuery = $; //JQuery alias
window.$ = $; //JQuery alias

require("jquery-ui-sortable"); //For FormBuilder Element Drag and Drop
require("formBuilder");// For FormBuilder

//For Load Selected Elements. Not compulsory. If you don't want this. Don't pass formData in below formBuilder initialize.
const formData = [
  {
    "type": "header",
    "subtype": "h1",
    "label": "1. Which monkeys would you like as pets?",
    "access": false
  },
  {
    "type": "checkbox-group",
    "required": false,
    "toggle": false,
    "inline": false,
    "name": "checkbox-group-1678557992875-0",
    "access": false,
    "other": false,
    "values": [
      {
        "label": "Capuchin",
        "value": "capuchin",
        "selected": true
      },
      {
        "label": "Mandrill",
        "value": "mandrill",
        "selected": false
      }
    ]
  }
]

document.body.style.margin = "30px"; //For add margin in HTML body

//Initialize formBuilder 
class FormBuilder extends Component {
  fb = createRef();
  componentDidMount() {
    $(this.fb.current).formBuilder({formData});
  }
  

  render() {
    
    return <div id="fb-editor" ref={this.fb} />;
  }
}

//Return Initialized formBuilder set it to HTML
function App() {
  return (
    <FormBuilder />
  );
}

export default App;