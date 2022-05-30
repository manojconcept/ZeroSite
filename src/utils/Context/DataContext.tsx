import React, { useEffect } from 'react'

const DataContext = React.createContext<| null>(null);

export default function DataProvider(props:any) {
    
    useEffect(() => {
        console.log('DataProvider on Mount props',props);
    }, []);
  return (
      <div>DC</div>
  )
}
