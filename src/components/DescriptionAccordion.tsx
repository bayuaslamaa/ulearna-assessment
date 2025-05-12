// components/DescriptionAccordion.tsx
'use client'

import { useState } from 'react'

export function DescriptionAccordion({ content }: { content: string }) {
    const [expanded, setExpanded] = useState(false)
    return (
        <div className="mt-4">
            <button
                onClick={() => setExpanded(!expanded)}
                className="text-sm text-blue-500 underline"
            >
                {expanded ? 'Hide Description' : 'Show Description'}
            </button>
            {expanded && <p className="mt-2 text-gray-700">{content}</p>}
        </div>
    )
}
