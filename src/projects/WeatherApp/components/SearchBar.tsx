import React, { useState } from "react"
import { motion } from "framer-motion"
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

interface SearchBarProps {
    onSearch: (city: string) => void
    onGeolocation: () => void
}

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    padding: 10px 15px;
    margin-bottom: 20px;

    &:focus-within {
        border-color: #e95606;
        box-shadow: 0 0 4px #e95606;
    }
`

const Input = styled.input`
    flex: 1;
    border: none;
    background: none;
    outline: none;
    font-size: 16px;
    margin: 0 10px;
`

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onGeolocation }) => {
    const [city, setCity] = useState("")
    const { t } = useTranslation()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (city.trim()) {
            onSearch(city.trim())
        }
    }

    return (
        <motion.form
            onSubmit={handleSubmit}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
        >
            <InputContainer>
                <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <FaMapMarkerAlt className="icon" onClick={onGeolocation} color="#077187" />
                </motion.span>
                <Input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder={t("search.typeInCity")}
                />
                <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <FaSearch className="icon" onClick={handleSubmit} color="#077187" />
                </motion.span>
            </InputContainer>
        </motion.form>
    )
}
