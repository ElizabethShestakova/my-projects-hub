import React, { PropsWithChildren } from "react"
import styled from "styled-components"

const GridComponent = styled.div`
    display: inline-grid;
    grid-template-columns: 1fr;
    gap: 8px;
    justify-items: start;
    align-items: center;

    @media (min-width: 400px) {
        grid-template-columns: auto auto;
    }
`

export const Grid: React.FC<PropsWithChildren> = ({ children }) => {
    return <GridComponent>{children}</GridComponent>
}
