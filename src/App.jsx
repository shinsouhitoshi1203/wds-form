import './sass/app.scss';
import { Form, Login, Logup } from './Form';
function App() {
     return (
          <>
               <div className="container">
                    <Form>
                         <Login />
                         <Logup />
                    </Form>
               </div>
          </>
     );
}

export default App;
