/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'

//usePromise 는 NewsList 의 usePromise( () => {promiseCreator}, [deps = category]) 이다 !!!!!
// promiseCreator 는 NewsList의 usePromise 내에서 리턴 값을 의미한다. 그리고 deps 는 카테고리 값을 의미한다 !!!!  
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
                const resolved = await promiseCreator();        //promiseCreator 는 NewsList에서의 axios.get 의 결과값 ! 
                setResolved(resolved); 
                console.log('resolved',resolved);
                console.log('deps',deps);

            } catch (e) {
                console.log(e);
                setError(e);
            }
            setLoading(false); 
        }
        //process 선언과 동시에 실행
        process(); 
    }, deps)        //deps 는 NewsList 에서 usePromise()의 두번째 파라미터인 category 이다 ! 

    return [loading, resolved, error]; 
}
