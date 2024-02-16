import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import keys from '../keys.json';

const supabase = createClient(keys.projectUrl, keys.AnonKey);

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
    console.log(data)
  }

  return (<>
  <h1>Testing</h1>
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>


  </>);
}

export default App;