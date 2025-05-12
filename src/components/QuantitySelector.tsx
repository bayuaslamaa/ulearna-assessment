// components/QuantitySelector.tsx
'use client'

import { useState } from 'react'

export function QuantitySelector({ onChange }: { onChange: (q: number) => void }) {
    const [qty, setQty] = useState(1)
    return (
        <div className="mt-4">
            <input
                type="number"
                value={qty}
                onChange={(e) => {
                    const val = Number(e.target.value)
                    setQty(val)
                    onChange(val)
                }}
                min={1}
                className="border p-2 w-20"
            />
        </div>
    )
}
