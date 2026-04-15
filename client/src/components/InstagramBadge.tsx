/**
 * InstagramBadge — Taylor Rauma Tattoo
 * Instagram-style profile card with 3×2 image grid linking to @taylorrauma
 */

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/taylogo_ef859444.jpeg";
const IG_URL = "https://www.instagram.com/taylorrauma/";

// First 6 portfolio images used as the grid
const GRID_IMAGES = [
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/tayrose_7412bbe9.jpeg", alt: "Rose tattoo" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/taysacredheart_511fe188.jpeg", alt: "Sacred heart tattoo" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/taytombstone_4449a380.jpeg", alt: "Tombstone tattoo" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/tayheartface_b9bc2d41.jpeg", alt: "Heart face tattoo" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/tayskull_e01b9061.jpeg", alt: "Skull fire tattoo" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492676647/kqBHhYGUgYLdMJGKgBRpfr/taygoldfish_98d349ca.jpeg", alt: "Goldfish tattoo" },
];

// Instagram gradient icon (official brand colours)
function InstagramIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ig-grad-1" cx="19%" cy="99%" r="128%">
          <stop offset="0%" stopColor="#ffd600" />
          <stop offset="10%" stopColor="#ff6f00" />
          <stop offset="50%" stopColor="#e91e63" />
          <stop offset="100%" stopColor="#7b1fa2" />
        </radialGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#ig-grad-1)" />
      <rect x="13" y="13" width="22" height="22" rx="6" stroke="white" strokeWidth="2.5" fill="none" />
      <circle cx="24" cy="24" r="5.5" stroke="white" strokeWidth="2.5" fill="none" />
      <circle cx="34" cy="14" r="1.5" fill="white" />
    </svg>
  );
}

export default function InstagramBadge() {
  return (
    <a
      href={IG_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full max-w-sm mx-auto rounded-2xl overflow-hidden border border-black/10 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white no-underline"
      aria-label="Follow @taylorrauma on Instagram"
    >
      {/* Profile header */}
      <div className="px-5 pt-5 pb-4 flex items-start gap-4 relative">
        {/* Instagram icon top-right */}
        <div className="absolute top-4 right-4">
          <InstagramIcon size={30} />
        </div>

        {/* Avatar */}
        <div className="shrink-0">
          <img
            src={LOGO_URL}
            alt="Taylor Rauma profile"
            className="w-16 h-16 rounded-full object-cover border border-black/10"
          />
        </div>

        {/* Handle + stats */}
        <div className="flex flex-col justify-center gap-0.5 pt-1">
          <p className="font-body font-bold text-black text-[15px] leading-tight">taylorrauma</p>
          <p className="font-body text-black text-[14px] leading-tight">Taylor Rauma Tattoo</p>
          <p className="font-body text-[#737373] text-[14px] leading-tight mt-1">Vancouver, BC</p>
        </div>
      </div>

      {/* 3×2 image grid */}
      <div className="grid grid-cols-3 gap-px bg-black/10">
        {GRID_IMAGES.map((img, i) => (
          <div key={i} className="aspect-square overflow-hidden bg-black/5">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </a>
  );
}
