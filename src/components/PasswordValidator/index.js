// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  Content,
  Heading,
  Paragraph,
  Input,
  Error,
} from './styledComponents'

const PasswordValidator = () => {
  const [Valid, setValid] = useState('')
  const onChangePassword = event => setValid(event.target.value)

  return (
    <AppContainer>
      <Content>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <Input type="password" onChange={onChangePassword} />
        <Error>
          {Valid.length >= 8 ? null : (
            <p>your password must be at least 8 characters</p>
          )}
        </Error>
      </Content>
    </AppContainer>
  )
}

export default PasswordValidator
