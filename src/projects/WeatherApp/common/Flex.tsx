import React, { PropsWithChildren } from "react"
import styled from "styled-components"

const FlexComponent = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
`

export const Flex: React.FC<PropsWithChildren> = ({ children }) => {
    return <FlexComponent>{children}</FlexComponent>
}
