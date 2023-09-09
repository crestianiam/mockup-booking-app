import { Offcanvas, Stack } from "react-bootstrap"
import { useFilter } from "../context/FilterContext"


const Filter = ({ isOpen }) => {
    const { closeFilter } = useFilter()

    return (
        <Offcanvas show={isOpen} onHide={closeFilter} placement="start" backdrop="static" className="w-md-100">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Filter</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                ciao
            </Offcanvas.Body>
        </Offcanvas>
    )
}
export default Filter