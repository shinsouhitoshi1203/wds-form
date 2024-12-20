import { useContext } from 'react';
import './scss/FormContainer.scss';
import AppContext from '../contexts/AppContext';
function FormContainer({ children }) {
    const data = useContext(AppContext);
    const { logState, handleLog } = data;
    console.log(logState)
    return (
        <div className="formlog">
            <div className="formlog__selector">
                <div className='row'>
                    <div className='col'>
                        <button className="formlog__select" isChoosed={logState=='logup'?"ok":null} onClick={()=>handleLog('logup')}>Sign Up</button>
                    </div>
                    <div className='col'>
                        <button className="formlog__select" isChoosed={logState=='login'?"ok":null} onClick={()=>handleLog('login')}>Login</button>
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
