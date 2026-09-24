/**
 * =========================================================================
 * CONFIG.JS - WEBSITE REBRANDING CONFIGURATION & ENGINE
 * =========================================================================
 * 
 * INSTRUCTIONS:
 * 1. Modify Section 1 (Data Entry) to update branding, styles, images, and content.
 * 2. Include this script at the end of index.html after index.js:
 *    
 * =========================================================================
 */

/* =========================================================================
   SECTION 1: DATA ENTRY CONFIGURATION
   ========================================================================= */
const REBRAND_CONFIG = {
  // --- BRAND IDENTIFICATION & META DATA ---
  brand: {
    name: "abCoffee",
    suffix: ".",
    tagline: "Grab & Go Specialty Coffee",
    description: "abCoffee offering premium specialty coffee brewed fresh, quick bakes, and daily essentials at affordable prices in Sector 62, Noida.",
    keywords: "abCoffee, specialty coffee, espresso, Noida cafe, sector 62 coffee, cold brew, croissant, coffee subscription",
    themeColor: "#80B819", // Signature lime green theme matching abCoffee's vibe
    domain: "https://www.zomato.com/ncr/abcoffee-sector-62-noida",
    ogImage: "https://lh3.googleusercontent.com/grass-cs/ACvplmMrNQZ7-qkaYIg7qaYN-Trmm6XXT2dzzNzuX1jp7j9GyTnHrqk-VrPcz0vvqEOns6A_fkMjPgRfPA9o5uNb29mHWouvD7xiyx0ClzYUjStdB6DB8dtx2aOfGB4DaLRKBJBeuVcF=w289-h312-n-k-no",
    faviconEmoji: "☕",
    whatsappNumber: "917400161464"
  },

  // --- GLOBAL STYLES & THEMING ---
  styles: {
    colors: {
      bg: "#0d0f0d",
      bgCard: "#161b15",
      bgLight: "#1f261e",
      primary: "#80B819", // Signature bright green
      primaryHover: "#9be022",
      text: "#f0f4f0",
      textMuted: "#a0aba0",
      accent: "#263323"
    },
    fonts: {
      heading: "'Syne', sans-serif",
      body: "'Plus Jakarta Sans', sans-serif"
    }
  },

  // --- HERO SECTION ---
  hero: {
    subtitle: "Quick, Premium & Affordable",
    title: "Bigger is Better. Your Daily Brew, Elevated.",
    description: "Experience specialty grade coffee roasted to perfection, quick bakes, and daily essentials crafted for your busy workday.",
    bgImage: "https://lh3.googleusercontent.com/grass-cs/ACvplmMrNQZ7-qkaYIg7qaYN-Trmm6XXT2dzzNzuX1jp7j9GyTnHrqk-VrPcz0vvqEOns6A_fkMjPgRfPA9o5uNb29mHWouvD7xiyx0ClzYUjStdB6DB8dtx2aOfGB4DaLRKBJBeuVcF=w289-h312-n-k-no",
    stats: [
      { value: "100%", label: "Specialty Grade" },
      { value: "₹99", label: "Sub Price Starting" },
      { value: "4.8 ★", label: "Customer Rating" }
    ]
  },

  // --- ABOUT US SECTION ---
  about: {
    subtitle: "About Us",
    title: "India's First Grab-and-Go Specialty Coffee Chain",
    paragraphs: [
      "At abCoffee, we believe great coffee shouldn't be a luxury or take forever to make. We bring high-quality, specialty-grade coffee at honest, everyday prices directly to your neighborhood and workplace hubs.",
      "Whether you need a quick espresso shot to start your day, a refreshing Cranberry Cold Brew, or an affordable coffee subscription to power your daily grind, abCoffee in Sector 62, Noida is your go-to coffee spot."
    ],
    image: "https://lh3.googleusercontent.com/grass-cs/ACvplmMZLCiiMYVx-V1osLz_P-b-d04LUpl9UTsXfvkzLmskI7imTCUqqsHLc17ZUvYjToGqbq0t4tBckwEmQ4r34e_AEQtjR6JXdj4EjjVITDaHWT9E1LJafHmUnCuT7Q55yZmeqfSsrwwXG2X-=w145-h156-n-k-no",
    imageAlt: "Interior and counter view of abCoffee store",
    experienceValue: "2+",
    experienceLabel: "Years of Excellence"
  },

  // --- SPECIALS / NEWLY ADDED FOOD ---
  specials: {
    subtitle: "Bestsellers & Specials",
    title: "Must-Try Favorites",
    badge: "Hot Deal",
    description: "Customer favorites and fresh bakes perfectly paired with your favorite brew.",
    items: [
      {
        badge: "Bestseller",
        img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=600",
        alt: "Korean Bun with savory cheese cream",
        diet: "veg",
        title: "Korean Bun",
        price: "₹157",
        desc: "Soft, sweet, and savory garlic butter brioche filled with creamy cream cheese."
      },
      {
        badge: "Chef's Pick",
        img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
        alt: "Choco Chip Banana Bread",
        diet: "veg",
        title: "Choco Chip Banana Bread",
        price: "₹127",
        desc: "Moist freshly baked banana bread loaded with rich chocolate chips."
      },
      {
        badge: "Popular",
        img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600",
        alt: "Iced Hazelnut Latte in glass",
        diet: "veg",
        title: "Iced Hazelnut Latte (XL)",
        price: "₹177",
        desc: "Rich espresso blended with chilled milk and premium nutty hazelnut syrup."
      }
    ]
  },

  // --- OFFERS SECTION ---
  offers: {
    subtitle: "Subscriptions & Savings",
    title: "Exclusive Offers",
    items: [
      {
        tag: "COFFEE SUBSCRIPTION",
        title: "Coffee @ ₹99",
        desc: "Subscribe to abCoffee membership and unlock your daily coffee starting at just ₹99.",
        code: "SUBSCRIPTION",
        highlight: true
      },
      {
        tag: "COMBO SPECIAL",
        title: "Bakery Combo Upgrade",
        desc: "Add Butter Croissant, Cookies, or Toast to your beverage at exclusive combo pricing starting at ₹50.",
        code: "COMBO",
        highlight: false
      },
      {
        tag: "PROTEIN BOOST",
        title: "Protein Shakes @ ₹107",
        desc: "Fuel up your routine with Sugar Free or Core Protein Milkshakes made fresh.",
        code: "FITNESS",
        highlight: false
      }
    ]
  },

  // --- FEATURED MENU SECTION ---
  menu: {
    subtitle: "Our Full Menu",
    title: "Everyday Essentials & Food",
    pdfUrl: "#",
    pdfFilename: "abCoffee_Menu.pdf",
    categories: [
      { id: "all", label: "All Items", active: true },
      { id: "hot-coffee", label: "Hot Coffees", active: false },
      { id: "iced-coffee", label: "Iced Coffees & Shakes", active: false },
      { id: "food", label: "Food & Bakes", active: false }
    ],
    items: [
      // Hot Coffees
      {
        category: "hot-coffee",
        img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600",
        title: "Americano",
        price: "₹107 (R) / ₹147 (L)",
        diet: "veg",
        desc: "Rich espresso shot diluted with hot water for a smooth, bold coffee flavor.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/abcoffee-sector-62-rest966399",
        zomatoUrl: "https://www.zomato.com/ncr/abcoffee-sector-62-noida?amp=1"
      },
      {
        category: "hot-coffee",
        img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=600",
        title: "Cappuccino",
        price: "₹127 (R) / ₹157 (L)",
        diet: "veg",
        desc: "Balanced shot of espresso topped with equal parts steamed milk and velvety foam.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/abcoffee-sector-62-rest966399",
        zomatoUrl: "https://www.zomato.com/ncr/abcoffee-sector-62-noida?amp=1"
      },
      {
        category: "hot-coffee",
        img: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=600",
        title: "Flat White",
        price: "₹127 (R) / ₹167 (L)",
        diet: "veg",
        desc: "Smooth double shot espresso combined with microfoam for a strong milky taste.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/abcoffee-sector-62-rest966399",
        zomatoUrl: "https://www.zomato.com/ncr/abcoffee-sector-62-noida?amp=1"
      },
      {
        category: "hot-coffee",
        img: "https://images.unsplash.com/photo-1561047029-3000c68339ca?auto=format&fit=crop&q=80&w=600",
        title: "Latte",
        price: "₹137 (R) / ₹167 (L)",
        diet: "veg",
        desc: "Creamy steamed milk poured over a rich shot of specialty espresso.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/abcoffee-sector-62-rest966399",
        zomatoUrl: "https://www.zomato.com/ncr/abcoffee-sector-62-noida?amp=1"
      },
      {
        category: "hot-coffee",
        img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600",
        title: "Hazelnut Latte",
        price: "₹167 (R) / ₹197 (L)",
        diet: "veg",
        desc: "Classic cafe latte infused with sweet and aromatic hazelnut flavor.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/abcoffee-sector-62-rest966399",
        zomatoUrl: "https://www.zomato.com/ncr/abcoffee-sector-62-noida?amp=1"
      },
      {
        category: "hot-coffee",
        img: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&q=80&w=600",
        title: "Mocha",
        price: "₹177 (R) / ₹207 (L)",
        diet: "veg",
        desc: "Indulgent combination of dark chocolate, espresso shot, and warm steamed milk.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/abcoffee-sector-62-rest966399",
        zomatoUrl: "https://www.zomato.com/ncr/abcoffee-sector-62-noida?amp=1"
      },

      // Iced Coffees & Shakes
      {
        category: "iced-coffee",
        img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600",
        title: "Iced Americano (XL)",
        price: "₹117 (R) / ₹147 (L)",
        diet: "veg",
        desc: "Bold espresso chilled over cold water and ice for ultimate refreshment.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/abcoffee-sector-62-rest966399",
        zomatoUrl: "https://www.zomato.com/ncr/abcoffee-sector-62-noida?amp=1"
      },
      {
        category: "iced-coffee",
        img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=600",
        title: "Iced Cappuccino (XL)",
        price: "₹137 (R) / ₹167 (L)",
        diet: "veg",
        desc: "Chilled espresso and milk poured over ice, finished with light cold foam.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/abcoffee-sector-62-rest966399",
        zomatoUrl: "https://www.zomato.com/ncr/abcoffee-sector-62-noida?amp=1"
      },
      {
        category: "iced-coffee",
        img: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&q=80&w=600",
        title: "Iced Hazelnut Latte (XL)",
        price: "₹177 (R) / ₹207 (L)",
        diet: "veg",
        desc: "Refreshing iced espresso and milk flavored with aromatic hazelnut syrup.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/abcoffee-sector-62-rest966399",
        zomatoUrl: "https://www.zomato.com/ncr/abcoffee-sector-62-noida?amp=1"
      },
      {
        category: "iced-coffee",
        img: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&q=80&w=600",
        title: "Iced Latte (XL)",
        price: "₹137 (R) / ₹167 (L)",
        diet: "veg",
        desc: "Smooth espresso poured over ice and fresh cold milk.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/abcoffee-sector-62-rest966399",
        zomatoUrl: "https://www.zomato.com/ncr/abcoffee-sector-62-noida?amp=1"
      },
      {
        category: "iced-coffee",
        img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=600",
        title: "Iced Mocha (XL)",
        price: "₹187 (R) / ₹227 (L)",
        diet: "veg",
        desc: "Cold chocolate espresso brew served over ice cubes.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/abcoffee-sector-62-rest966399",
        zomatoUrl: "https://www.zomato.com/ncr/abcoffee-sector-62-noida?amp=1"
      },
      {
        category: "iced-coffee",
        img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=600",
        title: "Sugar Free Protein Milkshake",
        price: "₹107 (L)",
        diet: "veg",
        desc: "Healthy, guilt-free protein milkshake without added sugar.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/abcoffee-sector-62-rest966399",
        zomatoUrl: "https://www.zomato.com/ncr/abcoffee-sector-62-noida?amp=1"
      },
      {
        category: "iced-coffee",
        img: "https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&q=80&w=600",
        title: "Core Protein Milkshake",
        price: "₹157 (L)",
        diet: "veg",
        desc: "High protein shake packed with core nutrients to fuel your daily performance.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/abcoffee-sector-62-rest966399",
        zomatoUrl: "https://www.zomato.com/ncr/abcoffee-sector-62-noida?amp=1"
      },

      // Food & Bakes
      {
        category: "food",
        img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
        title: "Butter Croissant",
        price: "₹127 | Combo: ₹50",
        diet: "veg",
        desc: "Classic golden, flaky, hand-crafted French butter croissant.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/abcoffee-sector-62-rest966399",
        zomatoUrl: "https://www.zomato.com/ncr/abcoffee-sector-62-noida?amp=1"
      },
      {
        category: "food",
        img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600",
        title: "Chilli Cheese Toast (2 Pieces)",
        price: "₹187 | Combo: ₹100",
        diet: "veg",
        desc: "Crispy toasted bread topped with melted cheese, green chillies, and spices.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/abcoffee-sector-62-rest966399",
        zomatoUrl: "https://www.zomato.com/ncr/abcoffee-sector-62-noida?amp=1"
      },
      {
        category: "food",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSESHbye-_taGeBBFCK7aYM-8ZqUu31P7cxftudJwpcbQ&s=10",
        title: "Garlic Bread and Cheese Dip",
        price: "₹147 | Combo: ₹100",
        diet: "veg",
        desc: "Toasted buttery garlic bread served alongside rich warm cheese dip.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/abcoffee-sector-62-rest966399",
        zomatoUrl: "https://www.zomato.com/ncr/abcoffee-sector-62-noida?amp=1"
      },
      {
        category: "food",
        img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=600",
        title: "Korean Bun",
        price: "₹157 | Combo: ₹100",
        diet: "veg",
        desc: "Signature soft Korean garlic bun drenched in cream cheese and savory herbs.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/abcoffee-sector-62-rest966399",
        zomatoUrl: "https://www.zomato.com/ncr/abcoffee-sector-62-noida?amp=1"
      },
      {
        category: "food",
        img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600",
        title: "Mini Croissants (100gms)",
        price: "₹157 | Combo: ₹100",
        diet: "veg",
        desc: "Bite-sized crispy mini butter croissants perfect for sharing.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/abcoffee-sector-62-rest966399",
        zomatoUrl: "https://www.zomato.com/ncr/abcoffee-sector-62-noida?amp=1"
      },
      {
        category: "food",
        img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=600",
        title: "Choco Chip Cookie",
        price: "₹60 | Combo: ₹50",
        diet: "veg",
        desc: "Classic freshly baked cookie studded with chocolate chips.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/abcoffee-sector-62-rest966399",
        zomatoUrl: "https://www.zomato.com/ncr/abcoffee-sector-62-noida?amp=1"
      },
      {
        category: "food",
        img: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&q=80&w=600",
        title: "Choco Chip Banana Bread",
        price: "₹127 | Combo: ₹50",
        diet: "veg",
        desc: "Delicious banana bread slice studded with chocolate chips.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/abcoffee-sector-62-rest966399",
        zomatoUrl: "https://www.zomato.com/ncr/abcoffee-sector-62-noida?amp=1"
      }
    ]
  },

  // --- REVIEWS & TESTIMONIALS ---
  reviews: {
    subtitle: "Testimonials",
    title: "What Our Guests Say",
    items: [
      {
        stars: 5,
        text: "\"really enjoyed the cranberry cold brew the coffee was smooth and the cranberry added a nice refreshing flavour without being too sweet definitely something i would order again\"",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
        name: "aadya",
        role: "Verified Guest"
      },
      {
        stars: 5,
        text: "\"I've been an AbCoffee subscriber for the last 2 years, and the quality has always been consistent. Great coffee, quick service, and the subscription is totally worth it if you drink coffee regularly. My go-to coffee place!\"",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
        name: "Shivam Merothiya",
        role: "Local Guide"
      },
      {
        stars: 5,
        text: "\"Very nice team. Makes Great coffee. Sakshi is always very helpful and customises my coffee.\"",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
        name: "Pragya Sharma",
        role: "Verified Guest"
      }
    ],
    googleCta: {
      title: "Enjoyed your coffee at abCoffee?",
      desc: "Help others discover us by leaving a review on Google Maps!",
      url: "https://www.zomato.com/ncr/abcoffee-sector-62-noida?amp=1"
    }
  },

  // --- GALLERY SECTION ---
  gallery: {
    subtitle: "Visual Experience",
    title: "Life Inside abCoffee",
    images: [
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkXjY8lGJrmkNI2sSodI9fRSCTvtTNaNUhqdZxZ8zSI1VBwfw0E6E1DpUV1qIvJRKUty4OvTdNy4QAfLt5KsTKITKU120wRkCxp8s3s1OFghKbYxq18O_bgQrxKmHXNM8Sv1HP2Hw=w141-h236-n-k-no-nu", alt: "abCoffee cup and branding" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmVlkCeIAWKTJRCJBy0KD6eOIG_z4XRZozznN3DF-egOJC8V-PJmcRu87x-Wxs6kCfTqgOs-XI2VVwJZVGORacZ1dTnkgv1Qkwyw52ipHvV1SIaw6dYhRXB5I1EtxRpbqZP_jsdGgeHxTbt=w141-h236-n-k-no-nu", alt: "Fresh iced coffee drink" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl53HDl_ugEkGV7mz4xf243HOvZTwDuJdEOgjBWXRxOJJKQ_6282PjRSQYXfj0_zeXzWEn6BDwFkd5LM-W6KrfOHqkhOr9Ju9KOGdsuyM-gK4RLUAz83QuI7uhxuvMqjko5Eehi7EOYCPvE=w141-h142-n-k-no-nu", alt: "abCoffee counter setup" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnVEFl1iG50OMA2ris3mYm80dxkR1zbG8HloMkbl88mQ5w2SOogHG5ExgxO6bHg3a2PH5uOg4nnT7EvUzq7oWQ4W5qoYIAwNUepnYbhdJoJM4ua9ddMMiBwl18t29W_X3ev6T7ojmbUKzhX=w141-h177-n-k-no-nu", alt: "Freshly brewed iced beverage" }
    ]
  },

  // --- LOCATION & CONTACT SECTION ---
  location: {
    subtitle: "Locations & Hours",
    title: "Visit Our Outlet",
    description: "Located conveniently in the industrial hub of Sector 62, Noida. Stop by for your daily quick coffee run or order online.",
    address: "B-8, Block B, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309",
    hours: [
      "Monday: 8:00 AM - 10:00 PM",
      "Tuesday: 8:00 AM - 10:00 PM",
      "Wednesday: 8:00 AM - 10:00 PM",
      "Thursday: 8:00 AM - 10:00 PM",
      "Friday: 8:00 AM - 10:00 PM",
      "Saturday: 8:00 AM - 10:00 PM",
      "Sunday: Closed"
    ],
    email: "support@abcoffee.in",
    phone: "+91 74001 61464",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.123!2d77.362!3d28.625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce545d9a0d8bf%3A0x86c123456789!2sSector%2062%2C%20Noida!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
  },

  // --- FOOTER SECTION ---
  footer: {
    description: "India's first grab-and-go specialty coffee chain delivering freshly brewed coffee and bakes at affordable everyday prices.",
    socials: [
      { platform: "instagram", url: "https://instagram.com", iconClass: "ph-instagram-logo" },
      { platform: "facebook", url: "https://facebook.com", iconClass: "ph-facebook-logo" },
      { platform: "twitter", url: "https://twitter.com", iconClass: "ph-twitter-logo" }
    ],
    copyright: "© 2026 abCoffee. All rights reserved."
  },

  // --- WI-FI MODAL SETTINGS ---
  wifi: {
    ssid: "abCoffee_Guest_WiFi",
    password: "abcoffee62"
  }
};

/* =========================================================================
   SECTION 2: REBRANDING ENGINE CODE
   ========================================================================= */
(function initRebrandingEngine(cfg) {
  'use strict';

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element|null}
   */
  const $ = (selector, ctx = document) => ctx.querySelector(selector);

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element[]}
   */
  const $$ = (selector, ctx = document) => Array.from(ctx.querySelectorAll(selector));

  function applyStyles() {
    const root = document.documentElement;
    if (cfg.styles?.colors) {
      if (cfg.styles.colors.bg) root.style.setProperty('--color-bg', cfg.styles.colors.bg);
      if (cfg.styles.colors.bgCard) root.style.setProperty('--color-bg-card', cfg.styles.colors.bgCard);
      if (cfg.styles.colors.bgLight) root.style.setProperty('--color-bg-light', cfg.styles.colors.bgLight);
      if (cfg.styles.colors.primary) root.style.setProperty('--color-primary', cfg.styles.colors.primary);
      if (cfg.styles.colors.primaryHover) root.style.setProperty('--color-primary-hover', cfg.styles.colors.primaryHover);
      if (cfg.styles.colors.text) root.style.setProperty('--color-text', cfg.styles.colors.text);
      if (cfg.styles.colors.textMuted) root.style.setProperty('--color-text-muted', cfg.styles.colors.textMuted);
      if (cfg.styles.colors.accent) root.style.setProperty('--color-accent', cfg.styles.colors.accent);
    }
    if (cfg.styles?.fonts) {
      if (cfg.styles.fonts.heading) root.style.setProperty('--font-heading', cfg.styles.fonts.heading);
      if (cfg.styles.fonts.body) root.style.setProperty('--font-body', cfg.styles.fonts.body);
    }
  }

  function applyMeta() {
    if (!cfg.brand) return;
    
    const fullTitle = `${cfg.brand.name} | ${cfg.brand.tagline}`;
    document.title = fullTitle;

    /**
     * @param {string} selector
     * @param {string} content
     */
    const setMeta = (selector, content) => {
      const el = $(selector);
      if (el) el.setAttribute('content', content);
    };

    setMeta('meta[name="title"]', fullTitle);
    setMeta('meta[name="description"]', cfg.brand.description);
    setMeta('meta[name="keywords"]', cfg.brand.keywords);
    setMeta('meta[name="theme-color"]', cfg.brand.themeColor);

    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', cfg.brand.description);
    setMeta('meta[property="og:image"]', cfg.brand.ogImage);
    setMeta('meta[property="og:url"]', cfg.brand.domain);
    setMeta('meta[property="og:site_name"]', `${cfg.brand.name} Cafe`);

    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', cfg.brand.description);
    setMeta('meta[name="twitter:image"]', cfg.brand.ogImage);
    setMeta('meta[name="twitter:url"]', cfg.brand.domain);

    const favicon = $('link[rel="icon"]');
    if (favicon && cfg.brand.faviconEmoji) {
      favicon.setAttribute('href', `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${cfg.brand.faviconEmoji}</text></svg>`);
    }

    const schemaScript = $('script[type="application/ld+json"]');
    if (schemaScript) {
      try {
        const schemaData = JSON.parse(schemaScript.textContent);
        schemaData.name = `${cfg.brand.name} ${cfg.brand.tagline}`;
        schemaData.image = cfg.brand.ogImage;
        schemaData.url = cfg.brand.domain;
        schemaData["@id"] = cfg.brand.domain;
        if (cfg.location) {
          schemaData.telephone = cfg.location.phone;
        }
        schemaScript.textContent = JSON.stringify(schemaData, null, 2);
      } catch (err) {
        console.warn("Failed to update JSON-LD schema:", err);
      }
    }
  }

  function applyBrandLogos() {
    $$('.logo').forEach(logoEl => {
      if (logoEl.childNodes.length > 0) {
        logoEl.childNodes[0].nodeValue = cfg.brand.name;
      } else {
        logoEl.textContent = cfg.brand.name;
      }
      let span = $('span', logoEl);
      if (!span && cfg.brand.suffix) {
        span = document.createElement('span');
        logoEl.appendChild(span);
      }
      if (span) span.textContent = cfg.brand.suffix;
      logoEl.setAttribute('aria-label', `${cfg.brand.name} Home`);
    });
  }

  function applyHero() {
    if (!cfg.hero) return;
    const heroSec = $('#home');
    if (heroSec && cfg.hero.bgImage) {
      heroSec.style.background = `linear-gradient(to right, rgba(13,14,18,0.95), rgba(13,14,18,0.6)), url('${cfg.hero.bgImage}') center/cover no-repeat`;
    }
    
    const sub = $('.hero-content .section-subtitle');
    if (sub) sub.textContent = cfg.hero.subtitle;
    
    const title = $('.hero-title');
    if (title) title.textContent = cfg.hero.title;
    
    const desc = $('.hero-description');
    if (desc) desc.textContent = cfg.hero.description;

    const statsContainer = $('.hero-stats');
    if (statsContainer && cfg.hero.stats) {
      statsContainer.innerHTML = cfg.hero.stats.map(s => `
        <div class="stat-item">
          <p class="stat-value">${s.value}</p>
          <p class="stat-label">${s.label}</p>
        </div>
      `).join('');
    }
  }

  function applyAbout() {
    if (!cfg.about) return;
    const aboutSec = $('#about');
    if (!aboutSec) return;

    const img = $('.about-img', aboutSec);
    if (img) {
      img.src = cfg.about.image;
      img.alt = cfg.about.imageAlt;
    }

    const badge = $('.about-experience-badge', aboutSec);
    if (badge) {
      badge.innerHTML = `
        <div style="font-size: 1.8rem; line-height: 1;">${cfg.about.experienceValue}</div>
        <div style="font-size: 0.8rem;">${cfg.about.experienceLabel}</div>
      `;
    }

    const sub = $('.section-subtitle', aboutSec);
    if (sub) sub.textContent = cfg.about.subtitle;

    const title = $('.section-title', aboutSec);     if (title) title.textContent = cfg.about.title;      const textMuted = $$('.text-muted', aboutSec);
    if (cfg.about.paragraphs && cfg.about.paragraphs.length >= 2) {
      if (textMuted[0]) textMuted[0].textContent = cfg.about.paragraphs[0];
      if (textMuted[1]) textMuted[1].textContent = cfg.about.paragraphs[1];
    }
  }

  function applySpecials() {
    if (!cfg.specials) return;
    const specSec = $('#new-food');
    if (!specSec) return;

    const sub = $('.section-subtitle', specSec);
    if (sub) sub.textContent = cfg.specials.subtitle;

    const title = $('.section-title', specSec);
    if (title) {
      title.innerHTML = `${cfg.specials.title} <span class="badge-new">${cfg.specials.badge}</span>`;
    }

    const desc = $('.text-muted', specSec);
    if (desc) desc.textContent = cfg.specials.description;

    const grid = $('.new-items-grid', specSec);
    if (grid && cfg.specials.items) {
      grid.innerHTML = cfg.specials.items.map(item => `
        <article class="new-food-card">
          <div class="new-food-img-wrapper">
            <span class="new-food-badge">${item.badge}</span>
            <img src="${item.img}" alt="${item.alt}" loading="lazy" decoding="async">
          </div>
          <div class="new-food-content">
            <div class="new-food-header">
              <h3 class="new-food-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="new-food-price">${item.price}</span>
            </div>
            <p class="new-food-desc">${item.desc}</p>
            <a href="#location" class="btn btn-outline btn-compact">Order Fresh</a>
          </div>
        </article>
      `).join('');
    }
  }

  function applyOffers() {
    if (!cfg.offers) return;
    const offerSec = $('#offers');
    if (!offerSec) return;

    const sub = $('.section-subtitle', offerSec);
    if (sub) sub.textContent = cfg.offers.subtitle;

    const title = $('.section-title', offerSec);
    if (title) title.textContent = cfg.offers.title;

    const grid = $('.offers-grid', offerSec);
    if (grid && cfg.offers.items) {
      grid.innerHTML = cfg.offers.items.map(o => `
        <div class="offer-card ${o.highlight ? 'highlight-offer' : ''}">
          <div class="offer-tag">${o.tag}</div>
          <h3 class="offer-title">${o.title}</h3>
          <p class="offer-desc">${o.desc}</p>
          <div class="offer-code-wrapper">
            <span>Code: <strong>${o.code}</strong></span>
          </div>
        </div>
      `).join('');
    }
  }

  function applyMenu() {
    if (!cfg.menu) return;
    const menuSec = $('#menu');
    if (!menuSec) return;

    const sub = $('.section-subtitle', menuSec);
    if (sub) sub.textContent = cfg.menu.subtitle;

    const title = $('.section-title', menuSec);
    if (title) title.textContent = cfg.menu.title;

    const dlBtn = $('.btn-download-menu', menuSec);
    if (dlBtn) {
      dlBtn.setAttribute('href', cfg.menu.pdfUrl);
      dlBtn.setAttribute('download', cfg.menu.pdfFilename);
    }

    const catContainer = $('.category-filter-container', menuSec);
    if (catContainer && cfg.menu.categories) {
      catContainer.innerHTML = cfg.menu.categories.map(c => `
        <button class="category-btn ${c.active ? 'active' : ''}" role="tab" aria-selected="${c.active}" aria-controls="menu-grid" data-filter="${c.id}">${c.label}</button>
      `).join('');
    }

    const menuGrid = $('#menu-grid');
    if (menuGrid && cfg.menu.items) {
      menuGrid.innerHTML = cfg.menu.items.map(item => `
        <article class="food-card" data-category="${item.category}">
          <div class="food-card-img-wrapper">
            <img src="${item.img}" alt="${item.title}" loading="lazy" decoding="async">
          </div>
          <div class="food-card-body">
            <div class="food-card-header">
              <h3 class="food-card-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="food-card-price">${item.price}</span>
            </div>
            <p class="food-card-desc">${item.desc}</p>
            <div class="food-card-actions">
              <a href="${item.swiggyUrl}" target="_blank" rel="noopener" class="btn btn-order btn-swiggy">Order with Swiggy</a>
              <a href="${item.zomatoUrl}" target="_blank" rel="noopener" class="btn btn-order btn-zomato">Order with Zomato</a>
              <button type="button" class="btn btn-order btn-whatsapp order-wa-btn" data-item-name="${item.title}" data-item-price="${item.price}">Order via WhatsApp</button>
            </div>
          </div>
        </article>
      `).join('');
    }
  }

  function applyReviews() {
    if (!cfg.reviews) return;
    const revSec = $('#reviews');
    if (!revSec) return;

    const sub = $('.section-subtitle', revSec);
    if (sub) sub.textContent = cfg.reviews.subtitle;

    const title = $('.section-title', revSec);
    if (title) title.textContent = cfg.reviews.title;

    const grid = $('.reviews-grid', revSec);
    if (grid && cfg.reviews.items) {
      grid.innerHTML = cfg.reviews.items.map(r => `
        <figure class="review-card">
          <blockquote class="review-text">
            <div class="review-stars" aria-label="Rating: ${r.stars} out of 5 stars">
              ${Array(r.stars).fill('<i class="ph-fill ph-star" aria-hidden="true"></i>').join('')}
            </div>
            <p>${r.text}</p>
          </blockquote>
          <figcaption class="reviewer-info">
            <img src="${r.avatar}" alt="${r.name}" class="reviewer-avatar" loading="lazy" decoding="async">
            <div>
              <span class="reviewer-name">${r.name}</span>
              <span class="reviewer-role">${r.role}</span>
            </div>
          </figcaption>
        </figure>
      `).join('');
    }

    if (cfg.reviews.googleCta) {
      const ctaTitle = $('.cta-title', revSec);
      if (ctaTitle) ctaTitle.textContent = cfg.reviews.googleCta.title;

      const ctaDesc = $('.cta-desc', revSec);
      if (ctaDesc) ctaDesc.textContent = cfg.reviews.googleCta.desc;

      const ctaBtn = $('.btn-google-review', revSec);
      if (ctaBtn) ctaBtn.setAttribute('href', cfg.reviews.googleCta.url);
    }
  }

  function applyGallery() {
    if (!cfg.gallery) return;
    const galSec = $('#gallery');
    if (!galSec) return;

    const sub = $('.section-subtitle', galSec);
    if (sub) sub.textContent = cfg.gallery.subtitle;

    const title = $('.section-title', galSec);
    if (title) title.textContent = cfg.gallery.title;

    const grid = $('.gallery-grid', galSec);
    if (grid && cfg.gallery.images) {
      grid.innerHTML = cfg.gallery.images.map(img => `
        <button type="button" class="gallery-item" aria-label="Expand image: ${img.alt}">
          <img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async">
          <span class="gallery-overlay"><i class="ph ph-arrows-out-simple" aria-hidden="true"></i></span>
        </button>
      `).join('');
    }
  }

  function applyLocation() {
    if (!cfg.location) return;
    const locSec = $('#location');
    if (!locSec) return;

    const sub = $('.section-subtitle', locSec);
    if (sub) sub.textContent = cfg.location.subtitle;

    const title = $('.section-title', locSec);
    if (title) title.textContent = cfg.location.title;

    const desc = $('.text-muted', locSec);     if (desc) desc.textContent = cfg.location.description;      const infoItems = $$('.info-item', locSec);
    if (infoItems.length >= 3) {
      const addrText = $('.text-muted', infoItems[0]);       if (addrText) addrText.textContent = cfg.location.address;        const hoursContainer = infoItems[1];       if (hoursContainer && cfg.location.hours) {         const lines = $$('.text-muted', hoursContainer);
        cfg.location.hours.forEach((h, idx) => {
          if (lines[idx]) lines[idx].textContent = h;
        });
      }

      const contactText = $('.text-muted', infoItems[2]);
      if (contactText) contactText.textContent = `${cfg.location.email} | ${cfg.location.phone}`;
    }

    const mapIframe = $('iframe', locSec);
    if (mapIframe && cfg.location.mapEmbedUrl) {
      mapIframe.src = cfg.location.mapEmbedUrl;
    }
  }

  function applyFooter() {
    if (!cfg.footer) return;
    const foot = $('.footer');
    if (!foot) return;

    const desc = $('.footer-desc', foot);
    if (desc) desc.textContent = cfg.footer.description;

    const socialContainer = $('.social-links', foot);
    if (socialContainer && cfg.footer.socials) {
      socialContainer.innerHTML = cfg.footer.socials.map(s => `
        <a href="${s.url}" class="social-icon" aria-label="${s.platform}" target="_blank" rel="noopener">
          <i class="ph ${s.iconClass}" aria-hidden="true"></i>
        </a>
      `).join('');
    }

    const copy = $('.footer-bottom p', foot);
    if (copy) copy.textContent = cfg.footer.copyright;
  }

  function applyWifiModal() {
    if (!cfg.wifi) return;
    const wifiModal = $('#wifi-modal');
    if (!wifiModal) return;

    const qrImg = $('.wifi-qr-img', wifiModal);
    if (qrImg) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=WIFI:S:${cfg.wifi.ssid};T:WPA;P:${cfg.wifi.password};;`;
    }

    const values = $$('.wifi-value', wifiModal);
    if (values[0]) values[0].textContent = cfg.wifi.ssid;
    if (values[1]) values[1].textContent = cfg.wifi.password;
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyStyles();
    applyMeta();
    applyBrandLogos();
    applyHero();
    applyAbout();
    applySpecials();
    applyOffers();
    applyMenu();
    applyReviews();
    applyGallery();
    applyLocation();
    applyFooter();
    applyWifiModal();
  });
})(REBRAND_CONFIG);
