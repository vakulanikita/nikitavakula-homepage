import styled from '@emotion/styled'

const TitleBox = styled.h3`
  text-decoration: underline;
  font-size: 20px;
  text-underline-offset: 6px;
  text-decoration-color: #525252;
  text-decoration-thickness: 4px;
  margin-top: 3px;
  margin-bottom: 6px;
`

export default function BlockTitle( {children }) {
  return (
    <TitleBox>
      {children}
    </TitleBox>
  )
}