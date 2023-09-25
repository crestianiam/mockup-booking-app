import React, { useEffect, useState } from 'react'
import Villa from '../components/Villa'
import MyContainer from '../components/MyContainer'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { useFilter } from '../context/FilterContext'
import villas from "../data/villas.json"
import { sortList } from '../data/lists'
import { VillaType } from '../components/Villa'

type SortOption = "Increasing Price" | "Decreasing Price" | "Name" | "Bedrooms";

const Villas = () => {
    const {
        openFilter,
        filterValues,
    } = useFilter()

    const [filteredVillas, setFilteredVillas] = useState<VillaType[]>([])
    const [currentSort, setCurrentSort] = useState<SortOption>("Increasing Price")

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

            const villaCheckIn = new Date(villa.checkIn);
            const villaCheckOut = new Date(villa.checkOut);

            if (
                (filterValues.checkIn && villaCheckIn > new Date(filterValues.checkIn)) ||
                (filterValues.checkOut && villaCheckOut < new Date(filterValues.checkOut))
            ) {
                return false
            }

            const checkInString = filterValues.checkIn;
            const checkOutString = filterValues.checkOut;

            const checkIn = new Date(checkInString);
            const checkOut = new Date(checkOutString);
            let nights = 0;

            if (!isNaN(checkIn.getTime()) && !isNaN(checkOut.getTime())) {
                const millisecondsPerDay = 1000 * 60 * 60 * 24
                nights = (checkOut.getTime() - checkIn.getTime()) / millisecondsPerDay
            }

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


    const handleSortChange = (value: string) => {
        if (sortList.includes(value as SortOption)) {
            setCurrentSort(value as SortOption);
        }
    }

    const sortBy = (field: string) => {
        return function (a: VillaType, b: VillaType) {
            if (field === "Increasing Price") {
                return a.pricePerNight - b.pricePerNight
            }
            if (field === "Decreasing Price") {
                return b.pricePerNight - a.pricePerNight
            }
            if (field === "Name") {
                return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
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
                            onChange={(e) => handleSortChange(e.target.value as SortOption)}
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
            {filteredVillas.length === 0 ? (
                <Row className="g-2">
                    <Col lg={2} md={12}>
                        <div onClick={openFilter}
                            className='d-none d-lg-inline-flex flex-column align-items-center justify-space-between text-decoration-none text-body mt-5 cursor-pointer'>
                            <div className='mt-5' style={{ transform: 'rotate(-90deg)' }}>FILTER SEARCH</div>
                            <div className='btn-line-y  mt-5'></div>
                        </div>
                    </Col>
                </Row>
            ) : null}
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
