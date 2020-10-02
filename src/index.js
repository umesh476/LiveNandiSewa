import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux"
import * as serviceWorker from './serviceWorker';
import store from "./store"
import App from "./components/AppContainer"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './components/common/common.css'
// import 'aos/dist/aos.css';
// import './assets/css/bootstrap.min.css';
// import './assets/css/owl.carousel.min.css'
// import './assets/css/slicknav.css'
// import './assets/css/flaticon.css'
// import './assets/css/progressbar_barfiller.css'
// import './assets/css/gijgo.css'
// import './assets/css/animate.min.css'
// import './assets/css/animated-headline.css'
// import './assets/css/magnific-popup.css'
// import './assets/css/fontawesome-all.min.css'
// import './assets/css/themify-icons.css'
// import './assets/css/slick.css'
// import './assets/css/nice-select.css'
// import './assets/css/style.css'

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
