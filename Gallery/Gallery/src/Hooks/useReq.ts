import { useEffect, useState } from "react";


type MethodFunction = () => Promise<any>;
export const useReq = (methodFunction: MethodFunction) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        request();
    }, [methodFunction])

    const request = async () => {
        setLoading(true);
        try {
            const response = await methodFunction();
            setData(response);
            setLoading(false);
        } catch (e) {
            setError(true);
            setLoading(false);
        }
    };
    

    return { data, error, loading };

}