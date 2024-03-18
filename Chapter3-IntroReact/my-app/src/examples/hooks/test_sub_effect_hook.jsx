

import {useEffect} from 'react'


export default function SubPage() {
    useEffect(()=>{
        console.log('useeffect for sub page called');

        return()=>{
            console.log('Unmount sub page external called');
        }
    },[])
    return (
        <h2>Sub Page from external page</h2>
    )
}