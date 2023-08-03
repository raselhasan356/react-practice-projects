import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [companyInfo, setCompanyInfo] = useState({});

  useEffect(() => {
    axios.get("https://api.spacexdata.com/v4/company").then((res) => {
      console.log(res.data);
      setCompanyInfo(res.data);
    });
  }, []);

  return (
    <div className="p-8 border-2 m-8 rounded-md">
      <h1 className="text-center">Company Profile</h1>
      <div className="p-5 space-y-4 place-content-center border-2 m-5 rounded-md">
        <div className="flex items-center space-x-2">
          <label>Company Name: </label>
          <h2>{companyInfo.name}</h2>
        </div>
        <div className="flex items-center space-x-2">
          <label>Founder: </label>
          <h2>{companyInfo.founder}</h2>
        </div>
        <div className="flex items-center space-x-2">
          <label>Founded: </label>
          <h2>{companyInfo.founded}</h2>
        </div>
        <div className="flex items-center space-x-2">
          <label>Employees: </label>
          <h2>{companyInfo.employees}</h2>
        </div>
        <div className="flex items-center space-x-2">
          <label>CEO: </label>
          <h2>{companyInfo.ceo}</h2>
        </div>
        <div className="flex space-x-2">
          <label>Summary: </label>
          <p>{companyInfo.summary}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
