import { ReactNode } from "react"

type BenefitProps = {
    text: string,
    title: string,
    children: ReactNode
}
const Benefit = ({ title, text, children }: BenefitProps) => {
    return (
        <div className='d-flex flex-column justify-space-between'>
            <div className='mb-2'>
                {children}
            </div>
            <h3 className="subtitle-paragraph">{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Benefit
