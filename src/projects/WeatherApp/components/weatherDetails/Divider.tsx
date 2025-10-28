import React from "react"
import styled from "styled-components"

const DividerComponent = styled.div`
    border: none;
    height: 1px;
    background-color: #e0e0e0a3;
    margin: 12px 0;
    width: 100%;
`

export const Divider: React.FC = () => {
    return <DividerComponent />
}
