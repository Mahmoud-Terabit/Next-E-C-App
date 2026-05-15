"use client"

import { handelClearToCart, handelDelteToCart, handelGetUserCart, handelUpdateToCart } from '@/api/Cart';
import { ProductType } from '@/types/Allproduct.type';
import { ArrowLeft, LoaderCircle, Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';

type CartLineItem = {
    _id: string
    id: string
    count: number
    price: number
    product: ProductType
}

export default function Cart() {
    const [products, setproducts] = useState<CartLineItem[]>([]) // عشان التايب سكريب  for typescript
    // const [products, setproducts] = useState([])
    const [isLoding, setIsLoding] = useState(false)

    async function getUserCart() {
        const response = await handelGetUserCart()
        setproducts(response.data.products)
    }

    async function updateCart(productId: string, count: number) {
        try {
            setIsLoding(true)
            const response = await handelUpdateToCart(productId, count)
            setproducts(response.data.products)
        } catch (error) {
            console.log((error as Error).message);
        } finally {
            setIsLoding(false)
        }
    }

    async function deleteToCart(productId: string) {
        try {
            const response = await handelDelteToCart(productId)
            setproducts(response.data.products)
            if (response.status == "success") {
                toast.success(response.message || "PRODUCT DELETED", { position: "top-center" })
            }
        } catch (error) {
            toast.error("something went wrong", { position: "top-center" })
            console.log((error as Error).message);
        }
    }

    async function clearAllCart() {
        try {
            setIsLoding(true)
            const response = await handelClearToCart()
            setproducts(response.data.products)
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoding(false)
        }
    }

    useEffect(() => {
        getUserCart()
    }, [])

    const itemCount = products.length

    return (
        <div className="mx-auto w-full max-w-7xl overflow-x-hidden px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
            <header className="mb-6 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex min-w-0 flex-col gap-1">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-600 p-2">
                            <svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-auto" aria-hidden>
                                <path d="M1.40625 0C0.626953 0 0 0.626953 0 1.40625C0 2.18555 0.626953 2.8125 1.40625 2.8125H4.06055C4.28906 2.8125 4.48242 2.97656 4.52344 3.19922L7.57617 19.9746C7.93945 21.9785 9.68555 23.4375 11.7246 23.4375H26.7188C27.498 23.4375 28.125 22.8105 28.125 22.0312C28.125 21.252 27.498 20.625 26.7188 20.625H11.7246C11.0449 20.625 10.4648 20.1387 10.3418 19.4707L10.043 17.8125H27.832C29.6367 17.8125 31.1836 16.5293 31.5176 14.7539L33.334 5.0332C33.5508 3.87891 32.666 2.8125 31.4883 2.8125H7.30664L7.2832 2.69531C7.00195 1.13672 5.64258 0 4.05469 0H1.40625ZM12.1875 30.9375C12.9334 30.9375 13.6488 30.6412 14.1762 30.1137C14.7037 29.5863 15 28.8709 15 28.125C15 27.3791 14.7037 26.6637 14.1762 26.1363C13.6488 25.6088 12.9334 25.3125 12.1875 25.3125C11.4416 25.3125 10.7262 25.6088 10.1988 26.1363C9.67132 26.6637 9.375 27.3791 9.375 28.125C9.375 28.8709 9.67132 29.5863 10.1988 30.1137C10.7262 30.6412 11.4416 30.9375 12.1875 30.9375ZM25.3125 30.9375C26.0584 30.9375 26.7738 30.6412 27.3012 30.1137C27.8287 29.5863 28.125 28.8709 28.125 28.125C28.125 27.3791 27.8287 26.6637 27.3012 26.1363C26.7738 25.6088 26.0584 25.3125 25.3125 25.3125C24.5666 25.3125 23.8512 25.6088 23.3238 26.1363C22.7963 26.6637 22.5 27.3791 22.5 28.125C22.5 28.8709 22.7963 29.5863 23.3238 30.1137C23.8512 30.6412 24.5666 30.9375 25.3125 30.9375Z" fill="white" />
                            </svg>
                        </div>
                        <h1 className="truncate text-2xl font-bold text-slate-900 sm:text-3xl">
                            Shopping Cart
                        </h1>
                    </div>
                    <p className="text-sm text-slate-500 sm:text-base">
                        You have <span className="font-medium text-green-600">{itemCount} items</span> in your cart
                    </p>
                </div>

                {itemCount > 0 && (
                    <button
                        type="button"
                        onClick={() => clearAllCart()}
                        disabled={isLoding}
                        className="flex w-full shrink-0 items-center justify-center gap-2 rounded-xl border border-red-500 px-4 py-2.5 text-sm font-semibold text-red-500 transition-colors hover:bg-red-500 hover:text-white disabled:opacity-60 sm:w-auto"
                    >
                        {isLoding ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
                        Clear Cart
                    </button>
                )}
            </header>

            {itemCount === 0 ? (
                <div className="flex flex-col items-center gap-4 py-12 text-center">
                    {isLoding ? (
                        <LoaderCircle className="h-8 w-8 animate-spin text-green-600" />
                    ) : (
                        <>
                            <p className="text-slate-500">Your cart is empty.</p>
                            <Link
                                href="/products"
                                className="inline-flex items-center gap-2 text-sm font-medium text-green-600 transition-colors hover:text-green-700"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Continue Shopping
                            </Link>
                        </>
                    )}
                </div>
            ) : (
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
                    <ul className="min-w-0 flex-1 space-y-3 sm:space-y-4 lg:w-2/3">
                        {products.map((item) => (
                            <li
                                // key={item._id} 
                                key={item.id}
                                className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4"
                            >
                                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                                    <div className="relative mx-auto aspect-square w-full max-w-[140px] shrink-0 sm:mx-0 sm:h-24 sm:w-24 sm:max-w-none">
                                        <Image
                                            width={280}
                                            height={280}
                                            src={item.product.imageCover}
                                            alt={item.product.title}
                                            className="h-full w-full rounded-xl object-cover"
                                        />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-start justify-between gap-2">
                                            <div className="min-w-0 flex-1">
                                                <h3 className="line-clamp-2 text-base font-semibold leading-snug text-slate-900 sm:text-lg">
                                                    {item.product.title}
                                                </h3>
                                                <p className="mt-0.5 truncate text-sm text-slate-500">
                                                    {item.product.category.name}
                                                </p>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => deleteToCart(item.product._id)}
                                                aria-label="Remove item"
                                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-red-500 text-red-500 transition-colors hover:bg-red-500 hover:text-white"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>

                                        <div className="mt-3">
                                            <span className="text-xl font-bold text-green-600 sm:text-2xl">{item.price}</span>
                                            <span className="ml-1 text-sm text-slate-400">EGP</span>
                                            <span className="ml-2 text-xs text-slate-400 sm:text-sm">per unit</span>
                                        </div>

                                        <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
                                            <div className="flex items-center justify-between gap-3 sm:justify-start">
                                                <span className="text-sm text-slate-500 sm:hidden">Quantity</span>
                                                <div className="flex items-center rounded-xl border border-slate-300">
                                                    <button
                                                        type="button"
                                                        disabled={isLoding}
                                                        onClick={() => updateCart(item.product.id, item.count - 1)}
                                                        className="flex h-9 w-9 items-center justify-center rounded-l-xl text-slate-600 transition-colors hover:bg-green-600 hover:text-white disabled:opacity-50 sm:h-10 sm:w-10"
                                                    >
                                                        {isLoding ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Minus className="h-4 w-4" />}
                                                    </button>
                                                    <span className="w-10 text-center text-base font-semibold text-slate-900 sm:w-12 sm:text-lg">
                                                        {item.count}
                                                    </span>
                                                    <button
                                                        type="button"
                                                        disabled={isLoding}
                                                        onClick={() => updateCart(item.product.id, item.count + 1)}
                                                        className="flex h-9 w-9 items-center justify-center rounded-r-xl text-slate-600 transition-colors hover:bg-green-600 hover:text-white disabled:opacity-50 sm:h-10 sm:w-10"
                                                    >
                                                        {isLoding ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="text-left sm:text-right">
                                                <div className="text-xs text-slate-500 sm:text-sm">Total</div>
                                                <div className="text-lg font-bold text-slate-900 sm:text-xl">{item.price}</div>
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                                                <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                                                In Stock
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <aside className="w-full shrink-0 lg:sticky lg:top-4 lg:w-1/3">
                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:rounded-3xl">
                            <div className="flex items-center gap-3 bg-green-600 p-4 text-white">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-lg" aria-hidden>
                                    🛍️
                                </div>
                                <div className="min-w-0">
                                    <div className="font-semibold text-base sm:text-lg">Order Summary</div>
                                    <div className="truncate text-sm opacity-90">
                                        {itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart
                                    </div>
                                </div>
                            </div>

                            <div className="mx-3 mt-3 flex items-start gap-3 rounded-xl border border-green-100 bg-green-50 p-3 sm:mx-4 sm:mt-4 sm:rounded-2xl sm:p-4">
                                <span className="text-xl" aria-hidden>🚚</span>
                                <div>
                                    <div className="text-sm font-semibold text-green-700 sm:text-base">Free Shipping!</div>
                                    <div className="text-xs text-green-600 sm:text-sm">You qualify for free delivery</div>
                                </div>
                            </div>

                            <div className="space-y-3 p-4 sm:space-y-4 sm:p-6">
                                <div className="flex justify-between text-sm text-slate-700 sm:text-base">
                                    <span>Subtotal</span>
                                    <span className="font-medium">1,994 EGP</span>
                                </div>
                                <div className="flex justify-between text-sm text-slate-700 sm:text-base">
                                    <span>Shipping</span>
                                    <span className="font-medium text-green-600">FREE</span>
                                </div>
                                <div className="flex justify-between border-t border-slate-200 pt-3 text-base font-bold text-slate-900 sm:pt-4 sm:text-lg">
                                    <span>Total</span>
                                    <span>1,994 EGP</span>
                                </div>

                                <button
                                    type="button"
                                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3.5 text-base font-semibold text-white transition-colors hover:bg-green-700 sm:rounded-2xl sm:py-4 sm:text-lg"
                                >
                                    <span aria-hidden>🔒</span>
                                    Secure Checkout
                                </button>

                                <div className="flex flex-col items-center gap-2 pt-2 text-xs sm:flex-row sm:justify-center sm:gap-4 sm:text-sm">
                                    <span className="flex items-center gap-1 text-green-600">🔒 Secure Payment</span>
                                    <span className="flex items-center gap-1 text-blue-600">⚡ Fast Delivery</span>
                                </div>

                                <div className="pt-2 text-center">
                                    <Link
                                        href="/products"
                                        className="text-sm text-slate-500 underline transition-colors hover:text-slate-700"
                                    >
                                        ← Continue Shopping
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            )}
        </div>
    );
}
