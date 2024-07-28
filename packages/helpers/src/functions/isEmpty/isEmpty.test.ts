import { describe, it, expect } from 'vitest'
import isEmpty from './isEmpty'

describe('isEmpty', () => {
    it('should return true for string with only whitespaces.', () => {
        const res = isEmpty(' ')
        expect(res).toBe(true)
    })
    it('should return false for non-empty string.', () => {
        const res = isEmpty('Prashan Pudasaini')
        expect(res).toBe(false)
    })
})
