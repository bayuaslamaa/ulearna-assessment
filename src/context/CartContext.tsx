'use client'

import { createContext, useReducer, useContext, useEffect } from 'react'

type CartItem = {
    id: string
    name: string
    variant: string
    quantity: number
    price: number
}

type CartState = { items: CartItem[] }

type Action =
    | { type: 'ADD_ITEM'; payload: CartItem }
    | { type: 'LOAD_CART'; payload: CartItem[] }
    | { type: 'REMOVE_ITEM'; payload: { id: string } }
    | { type: 'CLEAR_CART' }


function cartReducer(state: CartState, action: Action): CartState {
    switch (action.type) {
        case 'LOAD_CART':
            return { items: action.payload }
        case 'ADD_ITEM':
            const exists = state.items.find((i) => i.id === action.payload.id)
            if (exists) {
                return {
                    items: state.items.map((i) =>
                        i.id === action.payload.id
                            ? { ...i, quantity: i.quantity + action.payload.quantity }
                            : i
                    ),
                }
            }
            return { items: [...state.items, action.payload] }
        case 'REMOVE_ITEM':
            return {
                items: state.items.filter((i) => i.id !== action.payload.id),
            }
        case 'CLEAR_CART':
            return { items: [] }
        default:
            return state
    }
}

const CartContext = createContext<[CartState, React.Dispatch<Action>] | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(cartReducer, { items: [] })

    useEffect(() => {
        const saved = localStorage.getItem('cart')
        if (saved) {
            dispatch({ type: 'LOAD_CART', payload: JSON.parse(saved) })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.items))
    }, [state.items])

    return <CartContext.Provider value={[state, dispatch]}>{children}</CartContext.Provider>
}

export function useCart() {
    const context = useContext(CartContext)
    if (!context) throw new Error('useCart must be used within CartProvider')
    return context
}
