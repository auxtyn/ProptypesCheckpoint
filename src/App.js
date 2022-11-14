
import Profile from './profile/Profile';
import profileDetails from './profileDetails.json'

export const handleName = () => {
    alert(`your name is ${profileDetails[0].fullname}`)
}

  const App = () => {
    return (
      <>
        <Profile src='/dp.jpg' fullName={profileDetails[0].fullname} profession={profileDetails[0].profession} bio={profileDetails[0].Bio}></Profile>      
      </>
    )
  }


export default App;
