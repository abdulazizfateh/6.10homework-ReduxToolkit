import React, { useEffect, useState } from 'react'
import { api } from '../api';

const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        api.get(endpoint)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])
    return { data, error, loading };
}

export default useFetch;