import React from 'react'
import styled from 'styled-components'

const ToolTipText = styled("span")({
  visibility: "hidden",
  width: "150px",
  backgroundColor: "#000",
  color: "#fff",
  textAlign: "center",
  borderRadius: "6px",
  padding: "6px 0",
  position: "absolute",
  zIndex: 1,
  bottom: "150%",
  left: "50%",
  marginLeft: "-60px",
  ":after": {
    content: '""',
    position: "absolute",
    top: "100%",
    left: "50%",
    marginLeft: "-5px",
    borderWidth: "5px",
    borderStyle: "solid",
    borderColor: "black transparent transparent transparent"
  }
});

const ToolTipStyled = styled("div")({
  position: "relative",
  display: "inline-block",
  borderBottom: "1px dotted black",
  ":hover span": {
    visibility: "visible"
  }
})

type Props = {
  children: any
  toolTipText: string
}

const ToolTip = ({ children, toolTipText }: Props) => (
  <ToolTipStyled>
    {children}
    <ToolTipText>{toolTipText}</ToolTipText>
  </ToolTipStyled>
)

export default ToolTip
