import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './i18n';
import './index.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

export default function reducer(state = [], actions) {
  switch (actions.type) {
    case "ADD":
      return [...state,  {card: actions.payload}]

    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
