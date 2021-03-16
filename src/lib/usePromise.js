/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'


export default function usePromise (promiseCreator, deps) {
    //대기 중 , 완료, 실패에 대한 상태 관리
    
    const [loading, setLoading] = useState(false);
    const [resolved, setResolved] = useState(null);
    const [error, setError] = useState(null); 

    useEffect( () => {
        //process 정의
        const process = async () => {
            setLoading(true); 
            try {
                const resolved = await promiseCreator();
                setResolved(resolved); 

            } catch (e) {
                console.log(e);
                setError(e);
            }
            setLoading(false); 
        }
        //process 선언과 동시에 실행
        process(); 
    }, deps)

    return [loading, resolved, error]; 
}
