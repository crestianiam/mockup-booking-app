import { ReactNode } from 'react'
import { Container } from 'react-bootstrap'

type MyContainerProps = {
    children: ReactNode
}

const MyContainer = ({ children }: MyContainerProps) => {
    return (
        <Container className='px-0'>
            {children}
        </Container>
    )
}

export default MyContainer
