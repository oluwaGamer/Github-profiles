import { useState, useEffect } from "react";
import './App.css'
import Card from './components/Profile-card';

function App() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  
  return (
    <>
      {data &&
        data.map((item) => {
          return  <>
                    <Card key={item.id} profile={item} className=""/>
                  </>
          }
        )}
        
    </>
  );
}

export default App;
