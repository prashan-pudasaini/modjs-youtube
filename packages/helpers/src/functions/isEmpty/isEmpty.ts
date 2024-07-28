const isEmpty = (value: string): boolean => {
    if (value.trim() === '') {
        return true
    }
    return false
}

export default isEmpty
