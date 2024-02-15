import { useEffect, useState } from "react";

interface Data {
    
}
export default function Tasks_Page() {
    const [jsonData, setJsonData] = useState<Data | null>(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/files/data.json'); // Path to your JSON file
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const data: Data = await response.json();
            setJsonData(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    return (
        <div></div>
    )
}