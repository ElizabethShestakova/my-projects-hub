import React from "react"
import styled from "styled-components"
import { FaMapLocationDot } from "react-icons/fa6"
import { firstLetterToUpperCase, getCountryFlag } from "../../common/utils/utils"

interface LocationProps {
    cityName: string
    countryCode: string
}

const Header = styled.div`
    font-size: 20px;
    font-weight: 700;
`

const FlexComponent = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
`

export const Location: React.FC<LocationProps> = ({ cityName, countryCode }) => {
    return (
        <FlexComponent>
            <FaMapLocationDot color="#e95606" fontSize={"28px"} />
            <Header>{firstLetterToUpperCase(cityName)}</Header>
            <Header>{getCountryFlag(countryCode)}</Header>
        </FlexComponent>
    )
}
