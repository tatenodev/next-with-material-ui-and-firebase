import { TextField } from '@material-ui/core'
import { useState } from 'react'

import { pushMessage } from '../firebase'

const MessageField = ({ inputEl, name, setText, text}) => {
  const [isComposed, setIsComposed] = useState(false)

  return <TextField
    inputRef={inputEl}
    fullWidth={true}
    onChange={e => setText(e.target.value)}
    onKeyDown={e => {
      if(isComposed) return

      const text = e.target.value
      if(text === '') return
      
      if(e.key === 'Enter') {
        pushMessage({name: 'testUser01', text})
        setText('')
        e.preventDefault()
      }
    }}
    onCompositionStart={() => setIsComposed(true)}
    onCompositionEnd={() => setIsComposed(false)}
    value={text}
    />
}

export default MessageField
