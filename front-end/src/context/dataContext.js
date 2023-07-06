import { useEffect, useState, createContext } from "react";
export const DataContext = createContext();

export default function DataProvider({children}){
    const defaultValue = JSON.parse(localStorage.getItem('data')) ?? [];
    console.log(defaultValue)
    const [data, setData] = useState(defaultValue);
    useEffect(() => {
        fetch('https://sem5-api.onrender.com/data')
        .then(res => res.json())
        .then(data => {
            setData(data)
            localStorage.setItem('data', JSON.stringify(data))
        })
        .catch(err => console.log(err))
    }, [])
    return (    
    <DataContext.Provider value = {data}>
        {children}
    </DataContext.Provider>
    )
}