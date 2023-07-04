import { useEffect, useState, createContext } from "react";
export const DataContext = createContext();

export default function DataProvider({children}){
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/data')
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
    }, [])
    return (    
    <DataContext.Provider value = {data}>
        {children}
    </DataContext.Provider>
    )
}