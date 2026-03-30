import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
        .catch(error => {
            console.log(error);
            setError(true)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    return { data, loading, error }
}