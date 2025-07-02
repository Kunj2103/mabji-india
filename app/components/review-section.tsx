"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface Review {
  id: number;
  image: string;
  comment: string;
  customerName: string;
  purchaseDate: string;
  fullComment?: string;
}

const reviews: Review[] = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/1721937/pexels-photo-1721937.jpeg?auto=compress&cs=tinysrgb&w=800",
    comment:
      "Ankit and team were super accommodating to any changes to the design. I added a hidden halo and increased the width to 2.0mm. The ring took about a month to arrive from the initial order...",
    fullComment:
      "Ankit and team were super accommodating to any changes to the design. I added a hidden halo and increased the width to 2.0mm. The ring took about a month to arrive from the initial order, but it was worth the wait. The quality is exceptional!",
    customerName: "Erika",
    purchaseDate: "22/10/2023",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/1721936/pexels-photo-1721936.jpeg?auto=compress&cs=tinysrgb&w=800",
    comment:
      "I ordered a customized version of a stock ring that had a fixed center stone size. I upgraded to a larger center stone, which required Ankit to change the rest of the ring to accommodate...",
    fullComment:
      "I ordered a customized version of a stock ring that had a fixed center stone size. I upgraded to a larger center stone, which required Ankit to change the rest of the ring to accommodate the new size. The result is stunning and exactly what I wanted!",
    customerName: "Alexa Carol",
    purchaseDate: "22/12/2023",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/1721938/pexels-photo-1721938.jpeg?auto=compress&cs=tinysrgb&w=800",
    comment:
      "The ring is absolutely stunning! And it came quicker than expected. It originally was not going to come in time for the engagement, but it arrive way earlier than expected.",
    customerName: "Avery Preston",
    purchaseDate: "27/12/2023",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/1721939/pexels-photo-1721939.jpeg?auto=compress&cs=tinysrgb&w=800",
    comment:
      "These studs are so beautifully made. The quality, colour, and size of the diamonds are exactly what I wanted. I received them as a graduation gift and could not be happier. The posts are...",
    fullComment:
      "These studs are so beautifully made. The quality, colour, and size of the diamonds are exactly what I wanted. I received them as a graduation gift and could not be happier. The posts are secure and comfortable to wear all day.",
    customerName: "Victoria",
    purchaseDate: "31/12/2023",
  },
];

export default function ReviewSection() {
  const router = useRouter();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-8 xl:px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium mb-4">Customer Reviews</h2>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>
          <p className="text-gray-600">
            3460+ Verified Reviews with an Average Rating of 4.98 Stars
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 px-1">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_calc(25%-18px)]"
                >
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden h-full flex flex-col">
                    <div className="aspect-[3/4] relative flex-1">
                      <Image
                        src={review.image}
                        alt={`Review by ${review.customerName}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 text-center flex-1 flex flex-col justify-between">
                      <p className="text-gray-700 mb-4">{review.comment}</p>
                      <div className="text-sm text-gray-500 mt-auto">
                        <p>Verified Purchase on {review.purchaseDate}</p>
                        <p className="font-medium mt-1">
                          {review.customerName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* View More Card */}
              <div className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_calc(25%-18px)]">
                <div className="bg-white rounded-lg h-full flex items-center justify-center p-6">
                  <div className="text-center">
                    <p className="text-2xl font-medium mb-2">
                      3460+ Verified Reviews
                    </p>
                    <p className="text-xl mb-6">Averaging 4.98 Stars</p>
                    <button
                      className="bg-black text-white px-8 py-3 rounded-none cursor-pointer"
                      onClick={() => router.push("/reviews")}
                    >
                      VIEW MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className={`cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center ${
              !prevBtnEnabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-50"
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className={`cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center ${
              !nextBtnEnabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-50"
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
