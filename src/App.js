import logo from './logo.svg';
import './App.css';
import {React,createElement} from 'react';

function App() {
  let element = createElement(
    'div',{ className: 'greeting', },
    createElement('img',{src:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}),
    createElement('button',{className:"plus-button" },createElement('i',{className:"fa fa-plus plus-icon", })),
    createElement('i',{className:"fa fa-ellipsis-v edit-icon", }),
    createElement('div',{className:"profile"},createElement('h2',{className:"name"},"Dima Bolver"),createElement('p',{className:"desig"},"UI/UX Designer"),
    createElement('div',{className:"sections"},
    createElement('div',null,createElement('div',null,createElement("div",{className:'number'},'26'),createElement('div',null,createElement("div",{className:'label'},'Shoots')))),
    createElement('div',null,createElement('div',null,createElement("div",{className:'number'},'98'),createElement('div',null,createElement("div",{className:'label'},'Following')))),
    createElement('div',null,createElement('div',null,createElement("div",{className:'number'},'129'),createElement('div',null,createElement("div",{className:'label'},'Followers')))),
    )),
    
  );
  return (
    <div className="greeting">
      {element}
    
    </div>
  );
}

export default App;
