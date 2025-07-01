"use client";

import { useEffect, useState, useRef } from "react";
import FilterButton from "./filter-button";
import ProductViewToggle from "./product-view-toggle";
import FilterDialog from "./filter-dialog";

interface FilterOption {
  label: string;
  value: string;
}

interface FilterOptions {
  [key: string]: FilterOption[];
}

interface ActiveFilters {
  [key: string]: string[];
}

interface StickyFilterBarProps {
  filterOptions: FilterOptions;
  activeFilters: ActiveFilters;
  searchParams: { [key: string]: string | string[] | undefined };
  gridSize: "2x2" | "4x4" | "6x6";
}

export default function StickyFilterBar({
  filterOptions,
  activeFilters,
  searchParams,
  gridSize,
}: StickyFilterBarProps) {
  const [isSticky, setIsSticky] = useState(false);
  const filterBarRef = useRef<HTMLDivElement>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!filterBarRef.current) return;

      const filterBarTop = filterBarRef.current.getBoundingClientRect().top;
      const headerHeight = 64;

      setIsSticky(filterBarTop <= headerHeight);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <FilterDialog
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filterOptions={filterOptions}
        activeFilters={activeFilters}
        searchParams={searchParams}
      />
      <div
        ref={filterBarRef}
        className={`${
          isSticky
            ? "sticky top-[64px] z-40 bg-white shadow-md py-4 transition-all duration-300"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <FilterButton
              filterOptions={filterOptions}
              activeFilters={activeFilters}
              searchParams={searchParams}
              setIsFilterOpen={setIsFilterOpen}
            />

            <div className="flex items-center gap-4">
              <ProductViewToggle gridSize={gridSize} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
