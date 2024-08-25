import { createContext } from 'react'

interface SnackbarContextProps {
    isVisible?: boolean
    closeSnackbar?: () => void
}

const SnackbarContext = createContext<SnackbarContextProps>({
    isVisible: false,
    closeSnackbar: () => {},
})

export default SnackbarContext
