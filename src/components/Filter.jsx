import React from "react"
import { Offcanvas, Button, Form, InputGroup } from "react-bootstrap"
import { useFilter } from "../context/FilterContext"
import Select from "react-select"
import { villaIdeasList, experiencesList, locationsList } from "../data/lists"

const Filter = () => {
    const {
        isOpen,
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
        updateBedrooms,
        resetFilterValues,
        applyFilter,
        tempFilterValues,
        cancelTempFilter,
    } = useFilter()

    return (
        <Offcanvas
            show={isOpen}
            onHide={cancelTempFilter}
            placement="start"
            className="w-md-100"
        >
            <Offcanvas.Header >
            </Offcanvas.Header>
            <Offcanvas.Body>
                {/* villa ideas */}
                <div className="mb-3 text-center">
                    {villaIdeasList.map((idea) => (
                        <Button
                            key={idea}
                            variant={tempFilterValues.villaIdeas.includes(idea) ? "primary" : "outline-primary"}
                            onClick={() => toggleVillaIdea(idea)}
                            className="mt-2 border-0  rounded-0"
                        >
                            {idea}
                        </Button>
                    ))}
                </div>
                {/* experiences */}
                <Form.Group className="mb-3">
                    <Form.Label>Experiences</Form.Label>
                    <Select
                        isMulti
                        options={experiencesList}
                        value={experiencesList.filter((option) => tempFilterValues.experiences.includes(option.value))}
                        onChange={(selectedOptions) => {
                            const selectedValues = selectedOptions.map((option) => option.value)
                            toggleExperience(selectedValues)
                        }}
                        styles={{
                            control: (provided, state) => ({
                                ...provided,
                                border: state.isFocused ? "1px solid #0069d9" : "1px solid #ced4da",
                            }),
                        }}
                    />
                </Form.Group>
                {/* location */}
                <Form.Group className="mb-3">
                    <Form.Select
                        value={tempFilterValues.location}
                        onChange={(e) => updateLocation(e.target.value)}
                    >
                        {locationsList.map((location, index) => (
                            <option key={index} value={location}>
                                {location}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                {/* check-in e check-out */}
                <InputGroup className="mb-3">
                    <Form.Control
                        type="date"
                        placeholder="Check-in"
                        value={tempFilterValues.checkIn}
                        onChange={(e) => updateCheckIn(e.target.value)}
                    />
                    <Form.Control
                        type="date"
                        placeholder="Check-out"
                        value={tempFilterValues.checkOut}
                        onChange={(e) => updateCheckOut(e.target.value)}
                    />
                </InputGroup>
                {/* adulti, bambini, infanti e camere da letto */}
                <InputGroup className="mb-3">
                    <InputGroup.Text>Adults</InputGroup.Text>
                    <Form.Control
                        type="number"
                        value={tempFilterValues.adults}
                        onChange={(e) => updateAdults(e.target.value)}
                    />
                    <InputGroup.Text>Children</InputGroup.Text>
                    <Form.Control
                        type="number"
                        value={tempFilterValues.childrens}
                        onChange={(e) => updateChildrens(e.target.value)}
                    />
                    <InputGroup.Text>Infants</InputGroup.Text>
                    <Form.Control
                        type="number"
                        value={tempFilterValues.infants}
                        onChange={(e) => updateInfants(e.target.value)}
                    />
                    <Form.Select
                        value={tempFilterValues.bedrooms}
                        onChange={(e) => updateBedrooms(e.target.value)}
                    >
                        <option value={1}>1 Bedroom</option>
                        <option value={2}>2 Bedrooms</option>
                        <option value={3}>3 Bedrooms</option>
                        <option value={4}>4 Bedrooms</option>
                        <option value={5}>5+ Bedrooms</option>
                    </Form.Select>
                </InputGroup>
                {/* min e max price */}
                <InputGroup className="mb-3">
                    <InputGroup.Text>Min Price</InputGroup.Text>
                    <Form.Control
                        type="number"
                        value={tempFilterValues.minPrice}
                        onChange={(e) => updateMinPrice(e.target.value)}
                        min={50}
                    />
                    <InputGroup.Text>Max Price</InputGroup.Text>
                    <Form.Control
                        type="number"
                        value={tempFilterValues.maxPrice}
                        onChange={(e) => updateMaxPrice(e.target.value)}
                        min={50}
                    />
                </InputGroup>
                {/* Apply Filter e Reset Filter */}
                <div className="text-center">
                    <Button variant="primary" onClick={applyFilter} className="mb-3 bg-yellow rounded-0 border-0"
                        disabled={(tempFilterValues.checkIn > tempFilterValues.checkOut) || ((tempFilterValues.adults + tempFilterValues.childrens + tempFilterValues.infants) <= 0) || (tempFilterValues.minPrice >
                            tempFilterValues.maxPrice)}>
                        Apply Filter
                    </Button>
                    <br />
                    <Button variant="secondary" onClick={resetFilterValues} className="rounded-0 border-0">
                        Reset Filter
                    </Button>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Filter
