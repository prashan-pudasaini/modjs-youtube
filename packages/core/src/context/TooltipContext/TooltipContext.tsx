import { createContext } from 'react'

interface TooltipContextProps {
    isOpen?: boolean
}

const TooltipContext = createContext<TooltipContextProps>({
    isOpen: false,
})

export default TooltipContext
