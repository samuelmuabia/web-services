import { useEffect, useState } from "react"

const useWorks = () => {
    const [works, setWork] = useState([]);
    useEffect(() => {
        fetch('works.json')
            .then(res => res.json())
            .then(data => setWork(data));
    }, []);
    return [works, setWork];
}
export default useWorks;