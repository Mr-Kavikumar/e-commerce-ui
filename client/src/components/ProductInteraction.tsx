"use client"

import useCartStore from "@/stores/cartStore";
import { ProductType } from "@/types"
import { Minus, Plus, PlusIcon, ShoppingCart } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify"


const ProductInteraction = (
    {product,selectedSize,selectedColor}:{
    product:ProductType;
    selectedSize:string;
    selectedColor:string
})=>{

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [quantity,setQuantity] = useState(1)

    const {addToCart} = useCartStore()

    const handleTypeChange = (type:string,value:string)=>{
        const params = new URLSearchParams(searchParams.toString())
        params.set(type,value)
        router.push(`${pathname}?${params.toString()}`,{scroll:false})
    }

    const handleQuantityChange = (type:"increment" | "decrement")=>{
        if(type === "increment"){
            setQuantity(prev=>prev+1)
        }
        else{
            if(quantity > 1){
                setQuantity(prev=>prev-1)
            }
        }
    }

    const handleAddtoCart =()=>{
        addToCart({
            ...product,quantity,selectedSize,selectedColor
        })
        toast.success("Product Added to Cart")
    }

    return (
        <div className="flex flex-col gap-4 mt-4">
            {/* Size */}
            <div className="flex flex-col gap-2 text-xs">
                <span className="text-gray-500">Size</span>
                <div className="flex items-center gap-2">
                {product.sizes.map(size=>(
                    <div className={`cursor-pointer border-1 p-[2px] ${
                    selectedSize === size ? "border-gray-600" : "border-gray-300"}`} key={size}
                    onClick={()=>handleTypeChange("size",size)}>
                        <div className={`w-6 h-6 text-center flex items-center justify-center
                         ${selectedSize === size ? "bg-black text-white" : "bg-white text-black"}`}>
                        {size.toUpperCase()}</div>
                    </div>
                ))}
                </div>
            </div>
            {/* Color */}
            <div className="flex flex-col gap-2 text-sm">
                <span className="text-gray-500">Color</span>
                <div className="flex items-center gap-2">
                {product.colors.map(color=>(
                    <div className={`cursor-pointer border-1 p-[2px] ${
                    selectedColor === color ? "border-gray-300" : "border-white"}`} key={color}
                    onClick={()=>handleTypeChange("color",color)}>
                        <div className={`w-6 h-6 `} style={{backgroundColor: color}}></div>
                    </div>
                ))}
                </div>
            </div>
            {/* Quantity */}
            <div className="flex flex-col gap-2 text-sm">
                <span className="text-gray-500">Quantity</span>
                <div className="flex items-center gap-2">
                    <button onClick={()=>handleQuantityChange("decrement")} className="cursor-pointer border-1 border-gray-300 p-1">
                        <Minus className="w-4 h-4"/>
                    </button>
                    <span>{quantity}</span>
                    <button onClick={()=>handleQuantityChange("increment")} className="cursor-pointer border-1 border-gray-300 p-1">
                        <Plus className="w-4 h-4"/>
                    </button>
                </div>
            </div>
            {/* Buttons */}
            <button onClick={handleAddtoCart} className="flex bg-gray-800 text-white rounded-md px-4 py-2 shadow-lg items-center justify-center text-sm font-medium gap-2 cursor-pointer">
                <PlusIcon className="w-4 h-4"/>
                Add to Cart</button>
            <button className="flex items-center justify-center gap-2 ring-1 ring-gray-400 shadow-lg px-4 py-2 text-sm font-medium text-gray-800 rounded-lg cursor-pointer">
                <ShoppingCart className="w-4 h-4"/>
                Buy this Item</button>
        </div>
    )
}

export default ProductInteraction