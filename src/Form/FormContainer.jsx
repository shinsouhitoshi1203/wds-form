import './scss/FormContainer.scss';
function FormContainer({ children }) {
     return (
          <div className="formlog">
               <div className="formlog__selector">
                    <button className="formlog__select">Sign Up</button>
                    <button className="formlog__select">Login</button>
               </div>
               <div className="formlog__view">{children}</div>
          </div>
     );
}

export default FormContainer;
