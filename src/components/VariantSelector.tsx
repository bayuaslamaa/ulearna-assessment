'use client'


interface VariantSelectorProps {
    variants: string[]
    selected: string
    onChange: (variant: string) => void
}

export function VariantSelector({ variants, selected, onChange }: VariantSelectorProps) {
    return (
        <div className="mt-4">
            <h3 className="font-medium mb-1">Select Variant:</h3>
            <div className="flex flex-wrap gap-2">
                {variants.map((variant) => (
                    <button
                        key={variant}
                        className={`border px-4 py-1 rounded text-sm transition-colors ${variant === selected
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
                            }`}
                        onClick={() => onChange(variant)}
                    >
                        {variant}
                    </button>
                ))}
            </div>
            <p className="mt-2 text-sm text-gray-500">Selected: <strong>{selected}</strong></p>
        </div>
    )
}
