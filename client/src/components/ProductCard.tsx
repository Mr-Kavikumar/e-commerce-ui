"use client"

import useCartStore from "@/stores/cartStore"
import { ProductType } from "@/types"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { toast } from "react-toastify"

const ProductCard = ({product}:{product:ProductType})=>{

    const[ProductTypes,setProductTypes] = useState({
        size:product.sizes[0],
        color:product.colors[0]
    })

    const {addToCart} = useCartStore()

    const handleAddToCart = ()=>{
        addToCart({
            ...product,
            quantity : 1,
            selectedSize : ProductTypes.size,
            selectedColor :  ProductTypes.color
        })
        toast.success("Product added to cart")
    }

    const handleProductType = ({type,value}:{type:"size" | "color" , value:String})=>{
        setProductTypes((prev)=>({
            ...prev,
            [type]:value
        }))
    }
    return(
        <div className="shadow-lg rounded-lg overflow-hidden">
            {/* Image */}
            <Link href={`/products/${product.id}`}>
            <div className="relative aspect-[2/3]">
                <Image src={product.images[ProductTypes.color]} alt={product.name} fill 
                className="object-cover hover:scale-105 transition-all duration-300"/>
            </div>
            </Link>
            {/* product details */}
            <div className="flex flex-col gap-4 p-4">
                <h1 className="font-medium">
                    {product.name}
                </h1>
                <p className="text-sm text-gray-500">{product.shortDescription}</p>
            
            {/* product type */}
            <div className="flex items-center gap-4 text-xs">
              {/* size */}
            <div className="flex flex-col gap-1">
                <span className="text-gray-500">Size</span>
                <select name="size" id="size" 
                className="ring ring-gray-300 rounded-md px-2 py-1"
                onChange={e=>handleProductType({type:"size",value:e.target.value})}>
                    {product.sizes.map(size=>(
                        <option key={size} value={size}>{size.toUpperCase()}</option>
                    ))}
                </select>
            </div>
              {/* colour */}
            <div className="flex flex-col gap-1">
                <span className="text-gray-500">Color</span>
                <div className="flex items-center gap-2">
                    {product.colors.map(color=>(
                       <div className={`cursor-pointer border-1 ${ProductTypes.color === color ? "border-gray-400" : "border-gray-200"} rounded-full p-[1.2px]`} 
                       key={color} onClick={()=>handleProductType({type:"color",value:color})}>
                        <div className="w-[14px] h-[14px] rounded-full" style={{
                            backgroundColor : color
                        }}/>
                       </div> 
                    ))}
                </div>
            </div>
            </div>
            {/* price and cart */}
            <div className="flex items-center justify-between">
                <p className="font-medium">${product.price.toFixed(2)}</p>
                <button onClick={handleAddToCart} className="ring ring-gray-200 shadow-lg rounded-md px-2 py-1
                text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300
                flex items-center gap-2">
                <ShoppingCart className="w-4 h-4"/>   
                Add to Cart</button>
            </div>
            </div>
        </div>
    )
}

export default ProductCard