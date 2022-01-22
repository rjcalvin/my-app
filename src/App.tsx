import React from 'react';
import './App.css';
import RoutesDefinitions from './Routes/Routes';
import { Provider } from 'mobx-react';
import RootStore from '@store/RootStore';

const App: React.FC = () =>
<Provider rootStore = { new RootStore()}>
    <div className="App">
      <RoutesDefinitions/>      
    </div>
    </Provider>
export default App;
