// app/product/ProductPage.tsx
'use client'

import { ImageGallery } from '@/components/ImageGallery'
import { VariantSelector } from '@/components/VariantSelector'
import { QuantitySelector } from '@/components/QuantitySelector'
import { AddToCartButton } from '@/components/AddToCartButton'
import { DescriptionAccordion } from '@/components/DescriptionAccordion'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import { product } from '@/lib/mockProduct'
import { CartOverview } from '@/components/CartOverview'
import { CartIcon } from '@/components/CartIcon'
export function ProductPage() {
    const [variant, setVariant] = useState(product.variants[0])
    const [quantity, setQuantity] = useState(1)
    const [activeImage, setActiveImage] = useState(variant.images[0])
    const [, dispatch] = useCart()

    const [images, setImages] = useState(variant.images)
    const [price, setPrice] = useState(variant.price)

    const handleVariantChange = (variantName: string) => {
        const selected = product.variants.find((v) => v.name === variantName)
        if (!selected) return
        setVariant(selected)
        setImages(selected.images)
        setPrice(selected.price)
        setActiveImage(selected.images[0])
    }

    const { items } = useCart()[0]


    return (
        <div className="max-w-4xl mx-auto p-6">
            <CartIcon onClick={() => {
                document.getElementById('cart-overview')?.scrollIntoView({ behavior: 'smooth' });
            }} />
            <ImageGallery images={images} activeImage={activeImage} setActiveImage={setActiveImage} />
            <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
            <p className="text-xl text-gray-700">${price}</p>

            <VariantSelector
                variants={product.variants.map(v => v.name)}
                selected={variant.name}
                onChange={handleVariantChange}
            />
            <QuantitySelector onChange={setQuantity} />

            <AddToCartButton
                onClick={() =>
                // console.log({
                //     id: product.id + '-' + variant,
                //     quantity,
                //     name: product.name,
                //     variant: variant.name,
                //     price,
                // })
                {
                    const currentQtyInCart = items.find(
                        (item) => item.id === `${product.id}_${variant.name}`
                    )?.quantity || 0

                    const availableStock = variant.stock - currentQtyInCart

                    if (quantity > availableStock) {
                        alert(`Only ${availableStock} items left in stock!`)
                        return
                    }

                    dispatch({
                        type: 'ADD_ITEM',
                        payload: {
                            id: `${product.id}_${variant.name}`,
                            name: product.name,
                            variant: variant.name,
                            quantity,
                            price,
                        },
                    })

                }
                }
            />
            <DescriptionAccordion content={product.description} />
            <div id="cart-overview">
                <CartOverview />
            </div>
        </div>
    )
}
