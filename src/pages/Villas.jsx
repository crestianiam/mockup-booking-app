import React, { useEffect, useState } from 'react'
import Villa from '../components/Villa'
import MyContainer from '../components/MyContainer'
import { Row, Col, Button } from 'react-bootstrap'
import { useFilter } from '../context/FilterContext'
import villas from "../data/villas.json"

const Villas = () => {
    const {
        openFilter,
        filterValues,
    } = useFilter()

    const [filteredVillas, setFilteredVillas] = useState([])

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
        setFilteredVillas(filtered)
    }, [filterValues])

    return (
        <MyContainer>
            <div className="text-center">
                <Button className="bg-yellow rounded-0 mb-4 border-0" onClick={openFilter}>
                    Filter
                </Button>
            </div>
            <Row className="g-2">
                {filteredVillas.map((villa) => (
                    <Col key={villa.id} lg={6} md={12}>
                        <Villa villa={villa} />
                    </Col>
                ))}
            </Row>
        </MyContainer>
    )
}

export default Villas
