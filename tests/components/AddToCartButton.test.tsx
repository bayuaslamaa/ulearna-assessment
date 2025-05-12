import { render, fireEvent } from '@testing-library/react'
import { AddToCartButton } from '../../src/components/AddToCartButton'

describe('AddToCartButton', () => {
    it('calls onClick when clicked', () => {
        const onClick = jest.fn()
        const { getByText } = render(<AddToCartButton onClick={onClick} />)
        fireEvent.click(getByText(/add to cart/i))
        expect(onClick).toHaveBeenCalled()
    })
})
