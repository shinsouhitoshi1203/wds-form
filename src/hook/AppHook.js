import { useContext } from 'react';
import AppContext from '../contexts/AppContext';

const useStore = () => {
    const data = useContext(AppContext);
    return data;
}

export  {useStore};