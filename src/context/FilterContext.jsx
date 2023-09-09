import React, { createContext, useContext, useState } from "react";
import Filter from "../components/Filter";

const FilterContext = createContext({})

export function useFilter() {
    return useContext(FilterContext)
}

export function FilterProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false)

    const openFilter = () => {
        setIsOpen(true)
    }

    const closeFilter = () => {
        setIsOpen(false)
    }


    return (
        <FilterContext.Provider value={{
            openFilter,
            closeFilter
        }}>
            {children}
            <Filter isOpen={isOpen} />
        </FilterContext.Provider>
    )
}