import './scss/FormContainer.scss';
import { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import { useStore } from '../hook/AppHook';
function FormContainer({ children }) {
    
    const { logState, handleLog } = useStore();
    return (
        <div className="formlog">
            <div className="formlog__selector">
                <div className='row'>
                    <div className='col'>
                        <button className="formlog__select" ischoosed={logState=='logup'?"ok":null} onClick={()=>handleLog('logup')}>Sign Up</button>
                    </div>
                    <div className='col'>
                        <button className="formlog__select" ischoosed={logState=='login'?"ok":null} onClick={()=>handleLog('login')}>Login</button>
                    </div>
                </div>
            </div>
            <div className="formlog__view">
                {children}
            </div>
        </div>
    );
}

export default FormContainer;
