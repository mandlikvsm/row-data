import store from './redux/store';
import Main from './Main';
import { Provider } from 'react-redux';
import devToolsEnhancer from 'remote-redux-devtools';

export default function App() {

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

