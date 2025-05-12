'use client'
import Image from 'next/image'
import { useState, useRef } from 'react'

export function ImageGallery({ images, activeImage, setActiveImage }: { images: string[], activeImage: string, setActiveImage: (image: string) => void }) {
    const [zoomed, setZoomed] = useState(false)
    const [position, setPosition] = useState({ x: 50, y: 50 })
    const containerRef = useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = containerRef.current?.getBoundingClientRect()
        if (!rect) return

        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100

        setPosition({ x, y })
    }

    return (
        <div className="w-full">
            <div
                ref={containerRef}
                onMouseEnter={() => setZoomed(true)}
                onMouseLeave={() => setZoomed(false)}
                onMouseMove={handleMouseMove}
                className="relative overflow-hidden aspect-square w-full max-w-[600px] mx-auto border rounded"
            >
                <Image
                    src={activeImage}
                    alt="product"
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className={`object-cover transition-transform duration-150 ease-out ${zoomed ? 'scale-150' : 'scale-100'
                        }`}
                    style={{
                        transformOrigin: `${position.x}% ${position.y}%`,
                    }}
                    priority
                />
            </div>

            <div className="flex gap-2 mt-3 justify-center flex-wrap">
                {images.map((img) => (
                    <div key={img} className="relative w-20 h-20">
                        <Image
                            src={img}
                            alt="thumbnail"
                            fill
                            sizes="(max-width: 768px) 100vw, 80px"
                            className={`object-cover cursor-pointer rounded ${img === activeImage ? 'ring-2 ring-blue-500' : ''
                                }`}
                            onClick={() => setActiveImage(img)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
