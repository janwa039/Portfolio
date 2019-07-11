
import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
// import 'normalize.css';
// import Main from './javascript/Main';
import Ripple from './javascript/ripple'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Ripple />, document.getElementById('root'));
// ReactDOM.render(
//   <Router >
//     <div>
//       <Route exact path="/" component={Ripple}/>
//     </div>
//   </Router>, document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
