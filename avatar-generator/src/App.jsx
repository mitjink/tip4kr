import React from 'react'
import AvatarConstructor from './components/AvatarConstructor'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Генератор случайных аватаров</h1>
      </header>
      <main>
        <AvatarConstructor />
      </main>
    </div>
  )
}

export default App