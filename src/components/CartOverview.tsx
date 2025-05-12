'use client'
import { useCart } from '@/context/CartContext'

export function CartOverview() {
    const [cart, dispatch] = useCart()

    if (cart.items.length === 0) {
        return <p>Your cart is empty.</p>
    }

    return (
        <div className="mt-6 space-y-4">
            <ul className="divide-y divide-gray-200 border rounded p-4">
                {cart.items.map((item) => (
                    <li key={item.id} className="py-2 flex justify-between items-center">
                        <div>
                            <p className="font-medium">{item.name} ({item.variant})</p>
                            <p className="text-sm text-gray-500">
                                {item.quantity} × ${item.price} = ${item.quantity * item.price}
                            </p>
                        </div>
                        <button
                            className="text-red-500 hover:underline text-sm"
                            onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } })}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>

            <button
                onClick={() => dispatch({ type: 'CLEAR_CART' })}
                className="text-sm text-gray-600 underline hover:text-gray-800"
            >
                Clear Cart
            </button>
        </div>
    )
}
