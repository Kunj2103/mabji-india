"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  LogOut,
  X,
  ChevronDown,
} from "lucide-react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const menuData = {
  women: {
    categories: [
      {
        label: "Topwear",
        items: [
          "T-Shirts",
          "Casual Shirts",
          "Formal Shirts",
          "Sweatshirts",
          "Sweaters",
          "Jackets",
          "Blazers & Coats",
          "Suits",
          "Rain Jackets",
          "Indian & Festive Wear",
          "Kurtas & Kurta Sets",
          "Sherwanis",
          "Nehru Jackets",
          "Dhotis",
        ],
      },
      {
        label: "Bottomwear",
        items: [
          "Jeans",
          "Casual Trousers",
          "Formal Trousers",
          "Shorts",
          "Track Pants & Joggers",
        ],
      },
      {
        label: "Footwear",
        items: [
          "Casual Shoes",
          "Sports Shoes",
          "Formal Shoes",
          "Sneakers",
          "Sandals & Floaters",
          "Flip Flops",
          "Socks",
        ],
      },
      {
        label: "Sports & Active Wear",
        items: [
          "Sports Shoes",
          "Sports Sandals",
          "Active T-Shirts",
          "Track Pants & Shorts",
          "Track Jackets",
          "Sports Accessories",
          "Caps & Hats",
        ],
      },
      {
        label: "Fashion Accessories",
        items: [
          "Wallets",
          "Belts",
          "Perfumes & Body Mists",
          "Trimmers",
          "Deodorants",
          "Ties, Cufflinks & Pocket Squares",
          "Accessory Gift Sets",
        ],
      },
    ],
    featured: [
      {
        label: "SALE 50% OFF",
        href: "/women/sale",
        className: "text-red-600 font-bold",
      },
      { label: "NEW COLLECTION", href: "/women/new" },
      { label: "LINEN COLLECTION", href: "/women/linen" },
    ],
  },
  men: {
    categories: [
      {
        label: "Topwear",
        items: [
          "T-Shirts",
          "Casual Shirts",
          "Formal Shirts",
          "Sweatshirts",
          "Sweaters",
          "Jackets",
          "Blazers & Coats",
          "Suits",
          "Rain Jackets",
          "Indian & Festive Wear",
          "Kurtas & Kurta Sets",
          "Sherwanis",
          "Nehru Jackets",
          "Dhotis",
        ],
      },
      {
        label: "Bottomwear",
        items: [
          "Jeans",
          "Casual Trousers",
          "Formal Trousers",
          "Shorts",
          "Track Pants & Joggers",
        ],
      },
      {
        label: "Footwear",
        items: [
          "Casual Shoes",
          "Sports Shoes",
          "Formal Shoes",
          "Sneakers",
          "Sandals & Floaters",
          "Flip Flops",
          "Socks",
        ],
      },
      {
        label: "Sports & Active Wear",
        items: [
          "Sports Shoes",
          "Sports Sandals",
          "Active T-Shirts",
          "Track Pants & Shorts",
          "Track Jackets",
          "Sports Accessories",
          "Caps & Hats",
        ],
      },
      {
        label: "Fashion Accessories",
        items: [
          "Wallets",
          "Belts",
          "Perfumes & Body Mists",
          "Trimmers",
          "Deodorants",
          "Ties, Cufflinks & Pocket Squares",
          "Accessory Gift Sets",
        ],
      },
    ],
    featured: [
      { label: "SALE", href: "/men/sale", className: "text-red-600 font-bold" },
      { label: "NEW COLLECTION", href: "/men/new" },
      { label: "SUITS", href: "/men/suits" },
    ],
  },
  kids: {
    categories: [
      {
        label: "Boys Clothing",
        items: [
          "T-Shirts",
          "Shirts",
          "Shorts",
          "Jeans",
          "Trousers",
          "Clothing Sets",
          "Ethnic Wear",
          "Track Pants",
          "Jackets",
          "Rain Jackets",
        ],
      },
      {
        label: "Girls Clothing",
        items: [
          "Dresses",
          "Tops",
          "T-Shirts",
          "Clothing Sets",
          "Lehenga Choli",
          "Ethnic Wear",
          "Shorts & Skirts",
          "Jeans",
          "Trousers",
          "Jackets",
        ],
      },
      {
        label: "Footwear",
        items: [
          "Casual Shoes",
          "Sports Shoes",
          "Flip Flops",
          "Sandals",
          "Socks",
        ],
      },
      {
        label: "Toys & Accessories",
        items: [
          "Backpacks",
          "Watches",
          "Bags",
          "Stationery",
          "Water Bottles",
          "Lunch Boxes",
          "Toys",
        ],
      },
    ],
    featured: [
      { label: "BABY", href: "/kids/baby" },
      { label: "GIRLS", href: "/kids/girls" },
      { label: "BOYS", href: "/kids/boys" },
    ],
  },
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"women" | "men" | "kids">("women");
  const [showSearch, setShowSearch] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<
    "women" | "men" | "kids" | null
  >(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<HTMLDivElement>(null!);
  const menuRef = useRef<HTMLDivElement>(null!);

  const { user, logout, isAdmin } = useAuth();
  const { totalItems } = useCart();

  useClickOutside(searchRef, () => setShowSearch(false));
  useClickOutside(menuRef, () => setHoveredMenu(null));

  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm text-black">
      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Hamburger / Categories */}
          <div className="flex items-center space-x-4">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            <nav className="hidden md:flex items-center space-x-6 h-full">
              {(["women", "men", "kids"] as const).map((item) => (
                <div
                  key={item}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setHoveredMenu(item)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <Link
                    href={`/${item}`}
                    className={`text-sm font-semibold uppercase hover:underline flex items-center ${
                      hoveredMenu === item ? "text-blue-600" : "text-black"
                    }`}
                  >
                    {item}
                    <ChevronDown size={16} className="ml-1" />
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          {/* Center: Logo */}
          <Link
            href="/"
            className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold tracking-wide text-black"
          >
            MABJI INDIA
          </Link>

          {/* Right: Search + Auth */}
          <div className="flex items-center space-x-4">
            {/* Search Input */}
            <div ref={searchRef}>
              <AnimatePresence>
                {showSearch ? (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 200, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center bg-white overflow-hidden border rounded-md px-2 py-1"
                  >
                    <Search className="h-4 w-4 text-muted-foreground mr-1" />
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder="Search..."
                      className="w-full bg-transparent outline-none text-sm text-black"
                    />
                    <X
                      className="h-4 w-4 ml-2 cursor-pointer text-gray-500"
                      onClick={() => setShowSearch(false)}
                    />
                  </motion.div>
                ) : (
                  <button
                    onClick={() => setShowSearch(true)}
                    className="hover:underline flex items-center space-x-1 text-sm font-semibold cursor-pointer"
                  >
                    <Search className="h-4 w-4 block md:hidden relative" />
                    <span className="hidden md:block relative">SEARCH</span>
                  </button>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Auth */}
            <div className="flex items-center space-x-4 text-sm font-semibold text-black">
              {user ? (
                <>
                  <Link href="/cart" className="relative hover:underline">
                    <span className="hidden md:block">BAG ({totalItems})</span>
                    <div className="relative block md:hidden">
                      <ShoppingCart className="h-5 w-5 text-black" />{" "}
                      {totalItems > 0 && (
                        <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                          {totalItems}
                        </span>
                      )}
                    </div>
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button>
                        <User className="h-5 w-5" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href="/profile">Profile</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/orders">Orders</Link>
                      </DropdownMenuItem>
                      {isAdmin && (
                        <DropdownMenuItem asChild>
                          <Link href="/admin">Admin Panel</Link>
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem onClick={logout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <Link href="/login" className="hover:underline">
                  <span className="hidden md:block">LOG IN</span>
                  <User className="h-5 w-5 text-black block md:hidden" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Mega Menu */}
      <AnimatePresence>
        {hoveredMenu && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="hidden md:block absolute left-0 w-full bg-white shadow-lg border-t z-40 overflow-hidden"
            onMouseEnter={() => setHoveredMenu(hoveredMenu)}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <div className="container mx-auto px-4 py-6">
              <div className="grid grid-cols-4 gap-8">
                {/* Categories */}
                <div className="col-span-3">
                  <div className="grid grid-cols-4 gap-6">
                    {menuData[hoveredMenu].categories.map((category, index) => (
                      <div key={index} className="space-y-3">
                        <h3 className="font-bold text-sm uppercase text-gray-900">
                          {category.label}
                        </h3>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link
                                href={`/${hoveredMenu}/${item
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                className="text-sm text-gray-600 hover:text-blue-600 hover:underline"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Featured */}
                <div className="space-y-6">
                  <h3 className="font-bold text-sm uppercase text-gray-900">
                    Featured
                  </h3>
                  <ul className="space-y-3">
                    {menuData[hoveredMenu].featured.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className={`text-sm font-semibold ${
                            item.className ?? "text-gray-900"
                          } hover:underline`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 w-[80vw] max-w-sm h-full bg-white z-50 shadow-lg flex flex-col text-black overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-4 border-b">
                <div className="text-lg font-bold">MABJI INDIA</div>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border-b">
                {(["women", "men", "kids"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 text-center text-sm font-semibold uppercase ${
                      activeTab === tab
                        ? "text-black border-b-2 border-black"
                        : "text-gray-500"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                {/* Featured */}
                <div className="px-4 py-4 border-b">
                  <h3 className="text-sm font-semibold uppercase mb-3">
                    Featured
                  </h3>
                  <ul className="space-y-3">
                    {menuData[activeTab].featured.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block text-sm ${
                            item.className || "text-gray-700"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Categories */}
                <div className="px-4 py-4">
                  {menuData[activeTab].categories.map((category, index) => (
                    <div key={index} className="mb-6">
                      <h3 className="text-sm font-semibold uppercase mb-3">
                        {category.label}
                      </h3>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link
                              href={`/${activeTab}/${item
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                              onClick={() => setIsMenuOpen(false)}
                              className="block text-sm text-gray-700"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-4 py-4 border-t">
                <div className="space-y-3 text-sm">
                  <Link
                    href="/contact"
                    className="block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/track-order"
                    className="block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Track Order
                  </Link>
                  {isAdmin && (
                    <Link
                      href="/admin"
                      className="block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Admin Panel
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
