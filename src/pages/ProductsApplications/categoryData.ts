import heroImage from "../../assets/hero.png";

export type ApplicationSegment = {
    id: string;
    label: string;
    images: string[];
};

export type CategoryPageData = {
    key: string;
    title: string;
    subtitle: string;
    description: string;
    meta: { label: string; value: string }[];
    applications: ApplicationSegment[];
    heroImage: string;
    route: string;
    heroTag: string;
};

export const productCategories = [
    {
        title: "Healing & Wellness Textiles",
        description:
            "Soft, clinical-grade fabrics that soothe care, comfort, and modern wellness settings.",
        route: "/products-applications/healing-wellness",
        image: heroImage,
        heroTag: "Clinical comfort with premium strength",
    },
    {
        title: "Home Comfort Fabrics",
        description:
            "Warm, durable textiles designed for living rooms, bedrooms, and homely table settings.",
        route: "/products-applications/home-comfort",
        image: heroImage,
        heroTag: "Everyday home spaces reimagined",
    },
    {
        title: "Tabletop & Dining Solutions",
        description:
            "Premium table linens and dining accents engineered for beauty, longevity, and easy care.",
        route: "/products-applications/tabletop-dining",
        image: heroImage,
        heroTag: "Tables that tell a story",
    },
    {
        title: "Active Care & Support",
        description:
            "Performance-driven textiles that offer resilience, breathability, and strong support.",
        route: "/products-applications/active-care",
        image: heroImage,
        heroTag: "Built for motion and comfort",
    },
];

const healthImages = [
    "https://images.unsplash.com/photo-1580597664720-46bae7d7fcf9?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1542376264-2fa1d2fa9d14?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1527694224001-6c3bb18c3faf?auto=format&fit=crop&w=900&q=80",
];

const homeImages = [
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?auto=format&fit=crop&w=900&q=80",
];

const tabletopImages = [
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1495121605193-b116b5b9c5d5?auto=format&fit=crop&w=900&q=80",
];

const activeImages = [
    "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1502937406924-ded85c30b6af?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1526403221782-61e8d5f055b4?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1511018556341-bb63f8c26771?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80",
];

export const categoryPages: Record<string, CategoryPageData> = {
    healingWellness: {
        key: "healingWellness",
        title: "Healing & Wellness Textiles",
        subtitle: "From clinic care to comforting wellness spaces.",
        description:
            "Our fabrics balance hygiene, softness, and strength for use in healthcare, spa, and supportive home care environments.",
        meta: [
            { label: "GSM", value: "220–320" },
            { label: "Max Length", value: "240 cm" },
            { label: "Strength", value: "4.8 N" },
        ],
        applications: [
            {
                id: "patient-care",
                label: "Patient care setups",
                images: healthImages,
            },
            {
                id: "spa-lounges",
                label: "Spa & recovery",
                images: healthImages,
            },
            {
                id: "clinical-textiles",
                label: "Clinical linens",
                images: healthImages,
            },
        ],
        heroImage: heroImage,
        route: "/products-applications/healing-wellness",
        heroTag: "Designed for care and comfort",
    },
    homeComfort: {
        key: "homeComfort",
        title: "Home Comfort Fabrics",
        subtitle: "Textiles that make every room feel more welcoming.",
        description:
            "Rich textures and durable finishes for furniture, curtains, cushions, and soft interiors in modern homes.",
        meta: [
            { label: "GSM", value: "180–280" },
            { label: "Max Length", value: "280 cm" },
            { label: "Strength", value: "4.4 N" },
        ],
        applications: [
            {
                id: "living-space",
                label: "Living room accents",
                images: homeImages,
            },
            {
                id: "bedroom",
                label: "Bedroom comforts",
                images: homeImages,
            },
            {
                id: "dining",
                label: "Dining textures",
                images: homeImages,
            },
        ],
        heroImage: heroImage,
        route: "/products-applications/home-comfort",
        heroTag: "Soft, inviting, and built to last",
    },
    tabletopDining: {
        key: "tabletopDining",
        title: "Tabletop & Dining Solutions",
        subtitle: "Crafted for memorable meals and everyday elegance.",
        description:
            "Durable dining linens and table accessories that bring a refined finish to kitchens, cafés, and banquet spaces.",
        meta: [
            { label: "GSM", value: "210–300" },
            { label: "Max Length", value: "260 cm" },
            { label: "Strength", value: "5.0 N" },
        ],
        applications: [
            {
                id: "restaurant",
                label: "Restaurant dining",
                images: tabletopImages,
            },
            {
                id: "banquet",
                label: "Banquet styling",
                images: tabletopImages,
            },
            {
                id: "home-table",
                label: "Home tables",
                images: tabletopImages,
            },
        ],
        heroImage: heroImage,
        route: "/products-applications/tabletop-dining",
        heroTag: "A polished finish for every table setting",
    },
    activeCare: {
        key: "activeCare",
        title: "Active Care & Support",
        subtitle: "Built for movement, support, and long-term resilience.",
        description:
            "Innovative performance textiles for activewear, support bandages, and protective covers wherever strength matters.",
        meta: [
            { label: "GSM", value: "200–320" },
            { label: "Max Length", value: "300 cm" },
            { label: "Strength", value: "5.2 N" },
        ],
        applications: [
            {
                id: "support-gear",
                label: "Support gear",
                images: activeImages,
            },
            {
                id: "fitness-layers",
                label: "Fitness layers",
                images: activeImages,
            },
            {
                id: "protective",
                label: "Protective wraps",
                images: activeImages,
            },
        ],
        heroImage: heroImage,
        route: "/products-applications/active-care",
        heroTag: "Strength you can depend on",
    },
};
