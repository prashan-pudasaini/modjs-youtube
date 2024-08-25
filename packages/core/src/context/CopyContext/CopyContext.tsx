import { createContext } from 'react'

interface CopyContextProps {
    isOpen?: boolean
    reference?: object
}

const CopyContext = createContext<CopyContextProps>({
    isOpen: false,
    reference: {},
})

export default CopyContext
