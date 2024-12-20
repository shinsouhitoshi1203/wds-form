import './sass/app.scss';
import { useContext } from 'react';
import { Form, Login, Logup } from './Form';
import AppContext from './contexts/AppContext';
function App() {
    const { logState } = useContext(AppContext);
    return (
    <>
        <div className="formlog__container">
            <Form>
                {logState=="login" && <Login />}
                {logState=="logup" && <Logup />}
            </Form>
        </div>
    </>
    );
}

export default App;
