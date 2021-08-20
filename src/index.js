import React from 'react';
import ReactDom from 'react-dom';

//You use ./ when you are importing a file
import App from './App'

//The strictmode below is like a police, making sure we are following the react rules
ReactDom.render(
    <React.StrictMode>
     <App/>
    </React.StrictMode>, document.getElementById('root')
);
/*
//To create a component each word has to begin with caps just like the way App.js begins with caps. Another way to call or create a component is below
function MyComponent() {
    return ( <div>
        <h1> Hello, this is my first Component </h1>   
        </div>
    );

}
//render takes two parameters the component you are rendering and the div receiving the component
ReactDom.render(<MyComponent /> , document.getElementById('myDiv'));
*/