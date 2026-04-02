/**
 * ShopSection — Taylor Rauma Tattoo
 * Design: Clean Minimal — Black & White
 * Merch/print store with product grid, add-to-cart toast, clean product cards
 */
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

function useFadeUp(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

const products = [
  {
    id: 1,
    name: "Eagle Flash Print",
    description: "A3 risograph print on 100gsm uncoated stock. Signed and numbered edition of 50.",
    price: "$45 CAD",
    tag: "Print",
    img: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&q=85&fit=crop",
    sold: false,
  },
  {
    id: 2,
    name: "Flash Sheet Vol. 1",
    description: "Full-colour reproduction of the original flash sheet. A2 format, 200gsm matte. Edition of 100.",
    price: "$65 CAD",
    tag: "Print",
    img: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&q=85&fit=crop",
    sold: false,
  },
  {
    id: 3,
    name: "Studio Tee — Black",
    description: "100% heavyweight cotton. Screen printed in-house. Unisex fit. Sizes S–XXL.",
    price: "$55 CAD",
    tag: "Apparel",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=85&fit=crop",
    sold: false,
  },
  {
    id: 4,
    name: "Panther Flash Print",
    description: "A3 two-colour risograph. Black and grey. Signed edition of 30.",
    price: "$45 CAD",
    tag: "Print",
    img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=85&fit=crop",
    sold: true,
  },
  {
    id: 5,
    name: "Sticker Pack",
    description: "Set of 6 die-cut vinyl stickers. Traditional flash motifs. Weatherproof.",
    price: "$18 CAD",
    tag: "Accessories",
    img: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&q=85&fit=crop&crop=entropy",
    sold: false,
  },
  {
    id: 6,
    name: "Sketchbook Vol. 2",
    description: "64-page perfect-bound sketchbook of original drawings and flash studies. Soft cover.",
    price: "$35 CAD",
    tag: "Book",
    img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=85&fit=crop&crop=top",
    sold: false,
  },
];

export default function ShopSection() {
  const headerRef = useFadeUp();

  return (
    <section id="shop" className="py-24 md:py-32 border-t border-black/8">
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="fade-up flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="section-label mb-3">Merch &amp; Prints</p>
            <h2 className="font-display text-5xl md:text-6xl text-black">Shop</h2>
          </div>
          <p className="font-body text-sm text-[#888] max-w-xs leading-relaxed font-light">
            Original prints, apparel, and objects. All items shipped from Vancouver.
            Prints are signed and numbered.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/8">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} delay={i * 70} />
          ))}
        </div>

        {/* Shipping note */}
        <div className="mt-10 pt-8 border-t border-black/8 flex flex-col sm:flex-row justify-between gap-4 text-xs text-[#aaa]">
          <p className="font-body font-light">Free shipping on orders over $100 CAD within Canada.</p>
          <p className="font-body font-light">International shipping available. All prices in CAD.</p>
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  delay,
}: {
  product: {
    id: number;
    name: string;
    description: string;
    price: string;
    tag: string;
    img: string;
    sold: boolean;
  };
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const handleAdd = () => {
    if (product.sold) return;
    setAdded(true);
    toast.success(`${product.name} added to cart.`, {
      description: "Connect a payment provider to enable checkout.",
      duration: 4000,
    });
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      ref={ref}
      className="fade-up group bg-white flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3] bg-[#f5f5f5]">
        <img
          src={product.img}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          loading="lazy"
        />
        {product.sold && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
            <span className="font-display text-2xl text-black/40">Sold Out</span>
          </div>
        )}
        {/* Tag */}
        <div className="absolute top-3 left-3">
          <span className="font-body text-[10px] tracking-[0.15em] uppercase bg-white text-black px-2 py-1">
            {product.tag}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-5 border-t border-black/8">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display text-lg text-black leading-tight">{product.name}</h3>
          <span className="font-body text-sm text-black font-light shrink-0">{product.price}</span>
        </div>
        <p className="font-body text-xs text-[#888] leading-relaxed font-light flex-1 mb-5">
          {product.description}
        </p>
        <button
          onClick={handleAdd}
          disabled={product.sold}
          className={`w-full font-body text-xs tracking-[0.12em] uppercase py-3 transition-all duration-200 ${
            product.sold
              ? "bg-[#f0f0f0] text-[#bbb] cursor-not-allowed"
              : added
              ? "bg-black text-white"
              : "border border-black text-black hover:bg-black hover:text-white"
          }`}
        >
          {product.sold ? "Sold Out" : added ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
