// Style your elements here
import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  height: 100vh;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #475569;
  padding: 50px 30px;
  border-radius: 10px;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: Roboto;
  font-size: 36px;
`
export const Paragraph = styled.p`
  color: #ffffff;
  font-family: Roboto;
  font-size: 14px;
`
export const Input = styled.input`
  border: none;
  outline: none;
  background-color: #edeeff;
  padding: 8px 15px;
`
export const Error = styled.p`
  color: #ef4444;
`
