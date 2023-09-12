import { ReactNode, createContext, useContext, useState } from "react"
import Filter from "../components/Filter"
import { getTodayDate, getTomorrowDate } from "../utilities/functions"

type FilterValues = {
    villaIdeas: string[];
    experiences: string[];
    location: string;
    checkIn: string;
    checkOut: string;
    adults: number;
    childrens: number;
    infants: number;
    minPrice: number;
    maxPrice: number;
    bedrooms: number;
};

type FilterProviderProps = {
    children: ReactNode
}

const defaultFilterValues: FilterValues = {
    villaIdeas: [],
    experiences: [],
    location: 'North Sicily',
    checkIn: getTodayDate(),
    checkOut: getTomorrowDate(),
    adults: 2,
    childrens: 0,
    infants: 0,
    minPrice: 50,
    maxPrice: 500,
    bedrooms: 1
}

type FilterContext = {
    isOpen: boolean;
    openFilter: () => void;
    closeFilter: () => void;
    filterValues: FilterValues;
    applyFilter: () => void;
    resetFilterValues: () => void;
    tempFilterValues: FilterValues;
    updateTempFilter: (newFilter: FilterValues) => void;
    cancelTempFilter: () => void;
    toggleVillaIdea: (value: string) => void;
    toggleExperience: (value: string[]) => void;
    updateLocation: (value: string) => void;
    updateCheckIn: (value: string) => void;
    updateCheckOut: (value: string) => void;
    updateAdults: (value: string) => void;
    updateChildrens: (value: string) => void;
    updateInfants: (value: string) => void;
    updateMinPrice: (value: string) => void;
    updateMaxPrice: (value: string) => void;
    updateBedrooms: (value: string) => void;
};

const FilterContext = createContext({} as FilterContext)

export function useFilter() {
    return useContext(FilterContext)
}

export function FilterProvider({ children }: FilterProviderProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [filterValues, setFilterValues] = useState<FilterValues>(defaultFilterValues)
    const [tempFilterValues, setTempFilterValues] = useState<FilterValues>(defaultFilterValues)

    const openFilter = () => {
        setIsOpen(true)
    }

    const closeFilter = () => {
        setIsOpen(false)
        setTempFilterValues(filterValues)
    }

    const cancelTempFilter = () => {
        setTempFilterValues(filterValues)
        setIsOpen(false)
    }

    const updateTempFilter = (newFilter: FilterValues) => {
        setTempFilterValues(newFilter)
    }


    const toggleVillaIdea = (value: string) => {
        //bug fixed
        /* const updatedFilter = { ...tempFilterValues }
        if (updatedFilter.villaIdeas.includes(value)) {
            updatedFilter.villaIdeas = updatedFilter.villaIdeas.filter(item => item !== value)
        } else {
            updatedFilter.villaIdeas.push(value)
        }
        updateTempFilter(updatedFilter) */
        const updatedFilter = {
            ...tempFilterValues,
            villaIdeas: [...tempFilterValues.villaIdeas],
        }

        if (updatedFilter.villaIdeas.includes(value)) {
            updatedFilter.villaIdeas = updatedFilter.villaIdeas.filter((item) => item !== value)
        } else {
            updatedFilter.villaIdeas.push(value)
        }

        updateTempFilter(updatedFilter)
    }

    const toggleExperience = (value: string[]) => {
        const updatedFilter = { ...tempFilterValues }
        updatedFilter.experiences = [...value]
        updateTempFilter(updatedFilter)
    }

    const updateLocation = (value: string) => {
        const updatedFilter = { ...tempFilterValues }
        updatedFilter.location = value
        updateTempFilter(updatedFilter)
    }

    const updateCheckIn = (value: string) => {
        const updatedFilter = { ...tempFilterValues }
        updatedFilter.checkIn = value
        updateTempFilter(updatedFilter)
    }

    const updateCheckOut = (value: string) => {
        const updatedFilter = { ...tempFilterValues }
        updatedFilter.checkOut = value
        updateTempFilter(updatedFilter)
    }

    const updateAdults = (value: string) => {
        const parsedValue = parseInt(value, 10)
        if (!isNaN(parsedValue) && parsedValue >= 0) {
            const updatedFilter = { ...tempFilterValues }
            updatedFilter.adults = parsedValue
            updateTempFilter(updatedFilter)
        }
    }

    const updateChildrens = (value: string) => {
        const parsedValue = parseInt(value, 10)
        if (!isNaN(parsedValue) && parsedValue >= 0) {
            const updatedFilter = { ...tempFilterValues }
            updatedFilter.childrens = parsedValue
            updateTempFilter(updatedFilter)
        }
    }

    const updateInfants = (value: string) => {
        const parsedValue = parseInt(value, 10)
        if (!isNaN(parsedValue) && parsedValue >= 0) {
            const updatedFilter = { ...tempFilterValues }
            updatedFilter.infants = parsedValue
            updateTempFilter(updatedFilter)
        }
    }

    const updateMinPrice = (value: string) => {
        const updatedFilter = { ...tempFilterValues }
        const parsedValue = parseInt(value, 10)
        updatedFilter.minPrice = parsedValue
        updateTempFilter(updatedFilter)
    }

    const updateMaxPrice = (value: string) => {
        const updatedFilter = { ...tempFilterValues }
        const parsedValue = parseInt(value, 10)
        updatedFilter.maxPrice = parsedValue
        updateTempFilter(updatedFilter)
    }

    const updateBedrooms = (value: string) => {
        const updatedFilter = { ...tempFilterValues }
        const parsedValue = parseInt(value, 10)
        updatedFilter.bedrooms = parsedValue
        updateTempFilter(updatedFilter)
    }

    const resetFilterValues = () => {
        setFilterValues(defaultFilterValues)
        setTempFilterValues(defaultFilterValues)
    }

    const applyFilter = () => {
        setFilterValues(tempFilterValues)
        setIsOpen(false)
    }

    return (
        <FilterContext.Provider
            value={{
                isOpen,
                openFilter,
                closeFilter,
                filterValues,
                applyFilter,
                resetFilterValues,
                tempFilterValues,
                updateTempFilter,
                cancelTempFilter,
                toggleVillaIdea,
                toggleExperience,
                updateLocation,
                updateCheckIn,
                updateCheckOut,
                updateAdults,
                updateChildrens,
                updateInfants,
                updateMinPrice,
                updateMaxPrice,
                updateBedrooms
            }}
        >
            {children}
            <Filter />
        </FilterContext.Provider>
    )
}
