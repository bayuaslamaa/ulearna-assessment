import { render, fireEvent } from '@testing-library/react'
import { VariantSelector } from '../../src/components/VariantSelector'

describe('VariantSelector', () => {
    it('displays all variants and triggers onChange', () => {
        const onChange = jest.fn()
        const { getByText } = render(
            <VariantSelector variants={['Red', 'Green']} selected="Red" onChange={onChange} />
        )

        const greenButton = getByText('Green')
        fireEvent.click(greenButton)

        expect(onChange).toHaveBeenCalledWith('Green')
    })
})
