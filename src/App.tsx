import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import Organization from './OrganizationInterface'
import './App.css';

function App() {
  const [organization, setOrganization] = useState<Organization>({
    name: '',
    auth_token: '',
  });

  useEffect(() => {
    fetch('/current_organization')
    .then(res => {
      if(res.ok) {
        res.json().then((organization) => {
          setOrganization(organization)
          console.log(organization)
        })
      }
    })
  })

  if (organization.auth_token === '') return (
    <div className="App">
      <Login />
    </div>
  )
  return (
    <div className="App">
      <p>{`${organization.name} is logged in!`}</p>
    </div>
  );
}

export default App;
