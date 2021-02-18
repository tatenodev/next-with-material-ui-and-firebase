import { useState } from 'react'
import SignIn from '../components/SignIn'
import Main from '../components/Main'
import config from '../src/config.json'

export default function Home() {
  const [name, setName] = useState('')

  if( config.signInEnabled && name === '') {
    return <SignIn setName={setName} />
  } else {
    return <Main name={name} />
  }

}
