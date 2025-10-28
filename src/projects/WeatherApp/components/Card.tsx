import React, { PropsWithChildren } from "react"
import styled from "styled-components"

interface CardProps extends PropsWithChildren {
    disabled?: boolean
}

const CardComponent = styled.div`
    background: linear-gradient(180deg, #6eb8ff 0%, #4da2f0 100%);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 30px;
    max-width: 400px;
    margin: 0 auto;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.25);
`

export const Card: React.FC<CardProps> = ({ disabled, children }) => {
    return <CardComponent style={disabled ? { pointerEvents: "none", opacity: "0.7" } : {}}>{children}</CardComponent>
}
