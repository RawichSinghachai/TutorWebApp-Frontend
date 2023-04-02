import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import {ThemeProvider } from '@mui/material/styles';
import {MuiTheme} from './MuiTheme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './stores/Store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={MuiTheme}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
