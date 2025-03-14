"use client";
import {ReactNode, useState, useEffect} from "react";

// Anggap Proses Nyimpen ke Zustand
export default function TodoClientComponent({ children, todosData }: { children: ReactNode, todosData: any }) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        setTodos(todosData);
    }, [todosData]);

    return <>{children}</>
}
