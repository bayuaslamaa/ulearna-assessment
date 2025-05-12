import { useCart } from "@/context/CartContext"

export function CartIcon({ onClick }: { onClick: () => void }) {
    const [cart] = useCart()
    const totalQty = cart.items.reduce((sum, i) => sum + i.quantity, 0)

    return (
        <div className="relative" onClick={onClick}>

            {totalQty > 0 && (
                <span className="absolute top-0 right-0 text-xs border border-red-500 text-white rounded-full p-2">
                    🛒  {totalQty}
                </span>
            )}
        </div>
    )
}
