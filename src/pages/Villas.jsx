import React, { useEffect, useState } from 'react'
import Villa from '../components/Villa'
import MyContainer from '../components/MyContainer'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { useFilter } from '../context/FilterContext'
import villas from "../data/villas.json"
import { sortList } from '../data/lists'

const Villas = () => {
    const {
        openFilter,
        filterValues,
    } = useFilter()

    const [filteredVillas, setFilteredVillas] = useState([])
    const [currentSort, setCurrentSort] = useState("Increasing Price")


    useEffect(() => {
        const filtered = villas.filter((villa) => {
            if (filterValues.location && villa.location !== filterValues.location) {
                return false
            }

            if (filterValues.villaIdeas.length > 0 && !filterValues.villaIdeas.every((idea) => villa.villaIdeas.includes(idea))) {
                return false
            }

            if (filterValues.experiences.length > 0 && !filterValues.experiences.every((exp) => villa.experiences.includes(exp))) {
                return false
            }

            const villaCheckIn = new Date(villa.checkIn)
            const villaCheckOut = new Date(villa.checkOut)

            const formattedVillaCheckIn = villaCheckIn.toISOString().split('T')[0]
            const formattedVillaCheckOut = villaCheckOut.toISOString().split('T')[0]

            if (
                (filterValues.checkIn && formattedVillaCheckIn > filterValues.checkIn) ||
                (filterValues.checkOut && formattedVillaCheckOut < filterValues.checkOut)
            ) {
                return false
            }

            const checkIn = new Date(filterValues.checkIn)
            const checkOut = new Date(filterValues.checkOut)

            const nights = (checkOut - checkIn) / (1000 * 60 * 60 * 24) // Calcola le notti

            const totalPrice = nights * villa.pricePerNight
            if (
                (filterValues.minPrice && totalPrice < filterValues.minPrice) ||
                (filterValues.maxPrice && totalPrice > filterValues.maxPrice)
            ) {
                return false
            }

            const totalGuests = filterValues.adults + filterValues.childrens + filterValues.infants
            if (totalGuests > villa.seats) {
                return false
            }

            if (filterValues.bedrooms && villa.bedrooms < filterValues.bedrooms) {
                return false
            }
            return true
        })
        const sortedVillas = filtered.sort(sortBy(currentSort))
        setFilteredVillas(sortedVillas)
    }, [filterValues, currentSort])

    const handleSortChange = (value) => {
        setCurrentSort(value)
    }

    const sortBy = (field) => {
        return function (a, b) {
            if (field === "Increasing Price") {
                return a.pricePerNight - b.pricePerNight
            }
            if (field === "Decreasing Price") {
                return b.pricePerNight - a.pricePerNight
            }
            if (field === "Name") {
                if (a.name < b.name) return -1
                if (a.name > b.name) return 1
                return 0
            }
            if (field === "Bedrooms") {
                return a.bedrooms - b.bedrooms
            }
            return 0
        }
    }

    return (
        <MyContainer>
            <div className="d-flex justify-content-around d-lg-none mt-5">
                <Button className="bg-white border-grey text-body grey-light-hover rounded-0 mb-4" onClick={openFilter} style={{ width: "50%" }}>
                    Filter
                </Button>
                <Form.Group style={{ width: "50%" }}>
                    <Form.Select className='rounded-0 border-grey grey-light-hover text-body cursor-pointer'
                        value={currentSort}
                        onChange={(e) => handleSortChange(e.target.value)}
                    >
                        {sortList.map((sort) => (
                            <option key={sort} value={sort}>
                                {sort}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
            <div className='mt-3'>
                <h2 className='title-paragraph'>
                    Villas in {filterValues.location}
                </h2>
                <div className="d-lg-flex align-items-center mb-5">
                    <div className='me-auto'>
                        {filteredVillas.length} results found
                    </div>
                    <Form.Group className='d-none d-lg-block'>
                        <Form.Select className='rounded-0 border-grey grey-light-hover text-body cursor-pointer'
                            value={currentSort}
                            onChange={(e) => handleSortChange(e.target.value)}
                        >
                            {sortList.map((sort) => (
                                <option key={sort} value={sort}>
                                    {sort}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </div>
            </div>

            <Row className="g-2">
                {filteredVillas.map((villa, index) => (
                    <React.Fragment key={villa.id}>
                        {index % 2 === 0 || index === 0 ? (
                            <Col lg={2} md={12}>
                                {index === 0 ? (
                                    <div onClick={openFilter}
                                        className='d-none d-lg-inline-flex flex-column align-items-center justify-space-between text-decoration-none text-body mt-5 cursor-pointer'>
                                        <div className='mt-5' style={{ transform: 'rotate(-90deg)' }}>FILTER SEARCH</div>
                                        <div className='btn-line-y  mt-5'></div>
                                    </div>
                                ) : null}
                            </Col>
                        ) : null}
                        <Col lg={5} md={12}>
                            <Villa villa={villa} />
                        </Col>
                    </React.Fragment>
                ))}
            </Row>

        </MyContainer>
    )
}

export default Villas
