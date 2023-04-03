import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import Organization from './interfaces/OrganizationInterface';
import User from './interfaces/UserInterface';
import './App.css';

function App() {
  const [organization, setOrganization] = useState<Organization>({
    name: '',
  });

  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
    fullName: '',
    emailAddress: '',
  })

  useEffect(() => {
    fetch('/current_user')
    .then(res => {
      if(res.ok) {
        res.json().then((user) => {
          setUser(user)
          setOrganization(user.organization)
          console.log(organization)
        })
      }
    })
  }, [])

  if (user.emailAddress === '') return (
    <div className="App">
      <Login />
    </div>
  )
  return (
    <div className="App">
      <p>{`${user.fullName} from ${organization.name} is logged in!`}</p>
    </div>
  );
}

export default App;
