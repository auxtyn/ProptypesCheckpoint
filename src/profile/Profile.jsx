import React from 'react'
import { handleName } from '../App'

import PropTypes from 'prop-types' 

const Profile = ({ fullName, src, profession, bio }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ border: '10px solid cyan', marginTop: '30px', borderRadius: '20px', width: '50%', textAlign: 'center' }}>
        <div className="full-name">
          <h1>{fullName}</h1>

        </div>
        <div className="image">
          <img src={src} alt="" style={{ borderRadius: '50%', padding: '15px', width: '50%', border: '2px solid cyan', marginTop: '5px' }} />
        </div>
        <div className="profession">
          <div><strong style={{ color: 'grey' }}>{profession}</strong></div>
        </div>
        <div className="bio">
          <h5 style={{ margin: '0' }}><strong style={{ color: 'black' }}>{bio}</strong></h5>
        </div>
        <div className="button">

          <button style={{ color: 'black', border: '2px solid cyan', borderRadius: '10px', backgroundColor: 'cyan', padding: '1px 5px', marginBottom: '5px', cursor:'pointer' }} onClick={handleName} >Show name
          </button>
        </div>
      </div>
    </div>
  )
}




Profile.defaultProps = {
  fullName:'Auxtyno'
}
Profile.defaultProps = {
  bio:'Dev'
}
Profile.defaultProps = {
  profession:'Engineer'
}


Profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string
}


export default Profile