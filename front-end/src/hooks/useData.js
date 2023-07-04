import { useContext } from "react";
import { DataContext } from "../context/dataContext";

export default function useData(){
    return useContext(DataContext);
}