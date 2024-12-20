import { useCallback, useEffect, useRef, useState } from "react";
import "./scss/FormView.scss";

function Login() {
    const fieldName = useRef(['Username','Password']);
    const inpRef = useRef([]);
    const [inp,setInp] = useState(0);

    const handleFocus = useCallback((e)=>{
        if (e.key=="ArrowDown") setInp(x=>x+1==fieldName.current.length?0:x+1);
        if (e.key=="ArrowUp") setInp(x=>x-1<0?fieldName.current.length-1:x-1);
    },[])

    useEffect(() => { 
        inpRef.current[inp].focus();
    },[inp]);
    return (
        <div className="formlog__view login">
            <div className="formlog__title">Login here</div>
            {fieldName.current.map(
                (field,index)=><label className="formlog__input" key={index}>
                    <span>{field}</span>
                    <input ref={ref=>inpRef.current.push(ref)} type={index==1?'password':'text'} placeholder={`Enter your ${field.toLowerCase()}`} onKeyDownCapture={handleFocus} />
                </label>
            )}
            <button className="formlog__btn">Login</button>
        </div>
    );
}

export default Login;
