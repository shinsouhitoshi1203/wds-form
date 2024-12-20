import { useCallback, useMemo, useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
    const [log, setLog] = useState('login');

    const handleLog = useCallback(()=>{
        setLog((prev)=>prev==='login'?'logup':'login');
    },[log])

    const data = useMemo(()=>({
        logState: log,
        handleLog,
    }), [log]);

    return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

export default AppProvider;
