"use client"
import { useEffect, useState } from "react";


export default function Tasks_Page() {
    const [jsonData, setJsonData] = useState<any | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/matura_files/reading_tasks.json');
                const data = await response.json();
                console.log(data);
                setJsonData(data);
            } catch (error) {
                console.error('Error fetching JSON data:', error);
            }
        };
    
        fetchData();
      }, []);
      
    return (
        <div></div>
    )
}