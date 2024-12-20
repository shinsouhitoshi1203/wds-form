import { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
     const [log, setLog] = useState('login');

     const data = {
          logState: log,
          setLog,
     };
     return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

export default AppProvider;
