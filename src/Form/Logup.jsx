import { useCallback, useEffect, useRef, useState } from "react";

function Logup() {
    const [inp, setInp] = useState(0);
    const inpRef = useRef([]);
    const fieldName = useRef(['Username', 'Email', 'Password']);


    const handleFocus = useCallback((e)=>{
        if (e.key=="ArrowDown") setInp(x=>x+1==fieldName.current.length?0:x+1);
        if (e.key=="ArrowUp") setInp(x=>x-1<0?fieldName.current.length-1:x-1);
    },[])
    

    useEffect(() => {
        inpRef.current[inp].focus();
    },[inp]);

    return (
        <div className="formlog__view login">
            <div className="formlog__title">Create an account</div>
            {
                fieldName.current.map(
                    (field, index)=>(
                        <label className="formlog__input" key={index}>
                            <span>{field}</span>
                            <input ref={ref=>inpRef.current.push(ref)} type={index==2?'password':'text'} placeholder={`Enter your ${field.toLowerCase()}`} onKeyDownCapture={handleFocus}/>
                        </label>
                    )
                )
            }
            <button className="formlog__btn">Signup</button>
        </div>
    );
}

export default Logup;
