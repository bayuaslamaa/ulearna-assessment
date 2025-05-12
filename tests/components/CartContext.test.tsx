import { renderHook, act } from '@testing-library/react'
import { CartProvider, useCart } from '../../src/context/CartContext'

describe('CartContext', () => {
    it('adds item to cart', () => {
        const wrapper = ({ children }: any) => <CartProvider>{children}</CartProvider>
        const { result } = renderHook(() => useCart(), { wrapper })

        const [, dispatch] = result.current

        act(() => {
            dispatch({
                type: 'ADD_ITEM',
                payload: {
                    id: 'test-1',
                    name: 'Test Item',
                    variant: 'Black',
                    quantity: 1,
                    price: 100,
                },
            })
        })

        const [state] = result.current
        expect(state.items).toHaveLength(1)
        expect(state.items[0].id).toBe('test-1')
    })
})
