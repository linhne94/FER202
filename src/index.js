import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from './components/assignment/redux/ProductReducer';
import { QuizDataProvider } from './components/lab4/QuizDataContext';
import UserSlice from './components/userManagement/redux/UserSlice';


const store = configureStore({
  reducer: {
    users: UserSlice,
    products: ProductReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QuizDataProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QuizDataProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


