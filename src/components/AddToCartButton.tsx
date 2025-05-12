// components/AddToCartButton.tsx
'use client'

export function AddToCartButton({ onClick }: { onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
            Add to Cart
        </button>
    )
}
