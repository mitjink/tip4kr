import React, { useState, useEffect } from 'react'
import './AvatarConstructor.css'

const AvatarConstructor = () => {
  const [avatar, setAvatar] = useState({
    skin: '',
    eyes: '',
    hair: '',
    clothes: ''
  })

  const parts = {
    skin: ['brown', 'light', 'pale', 'tanned'],
    eyes: ['blue', 'brown', 'green'],
    hair: [
      'long_black', 'long_blonde', 'long_brown', 'long_orange',
      'medium_black', 'medium_blonde', 'medium_brown', 'medium_orange',
      'short_black', 'short_blonde', 'short_brown', 'short_orange'
    ],
    clothes: ['blue', 'green', 'red', 'yellow']
  }

  const getImagePath = (type, value) => {
    return `/assets/${type}/${value}.png`
  }

  const generateRandomAvatar = () => {
    const newAvatar = {}
    Object.keys(parts).forEach(part => {
      const options = parts[part]
      const randomIndex = Math.floor(Math.random() * options.length)
      newAvatar[part] = options[randomIndex]
    })
    setAvatar(newAvatar)
  }

  useEffect(() => {
    generateRandomAvatar()
  }, [])

  return (
    <div className="avatar-constructor">
      <div className="avatar-container">
        <div className="avatar-preview">
          <div className="avatar-parts">
            <div className="avatar-layers">
              <div className="avatar-layer background"></div>
              
              {avatar.skin && (
                <img 
                  src={getImagePath('skin', avatar.skin)} 
                  alt="skin" 
                  className="avatar-layer skin"
                />
              )}
              
              {avatar.clothes && (
                <img 
                  src={getImagePath('clothes', avatar.clothes)} 
                  alt="clothes" 
                  className="avatar-layer clothes"
                />
              )}
              
              {avatar.eyes && (
                <img 
                  src={getImagePath('eyes', avatar.eyes)} 
                  alt="eyes" 
                  className="avatar-layer eyes"
                />
              )}
              
              {avatar.hair && (
                <img 
                  src={getImagePath('hairs', avatar.hair)} 
                  alt="hair" 
                  className="avatar-layer hair"
                />
              )}
            </div>
          </div>
        </div>
        
        <button 
          className="generate-btn"
          onClick={generateRandomAvatar}
        >
          Сгенерировать случайный аватар
        </button>
      </div>
    </div>
  )
}

export default AvatarConstructor