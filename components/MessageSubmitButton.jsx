import { pushMessage } from '../firebase'
import { IconButton } from '@material-ui/core/';
import SendIcon from '@material-ui/icons/Send';

const MessageSubmitButto = ({ inputEl, name, setText, text}) => {
  return (
    <IconButton disabled={text === ''} onClick={() => {
      pushMessage({name: 'testUser01', text})
      setText('')
      inputEl.current.focus()
    }}>
      <SendIcon />
    </IconButton>
  )
}

export default MessageSubmitButto
