/**
 * Brand aur contact ka single source of truth.
 *
 * Naam, email, WhatsApp, social links — sab yahan se aate hain. Kuch badalna
 * ho toh sirf ye file kholni padegi, components ko haath lagaye bina. Metadata,
 * JSON-LD schema, footer, contact section — sab isi se padhte hain.
 */

export const site = {
  name: "Nexora",
  legalName: "Nexora",

  /**
   * Deploy ke baad apna asli domain yahan daalna.
   * Ye teen jagah automatically chala jaata hai: canonical URL, Open Graph
   * tags, aur JSON-LD schema. Isliye sirf yahi ek line badalni padti hai.
   */
  url: "https://nexora.dev",

  tagline: "AI agents and automation for Indian businesses",

  /** Meta description — Google search result me yahi dikhta hai. */
  description:
    "Nexora builds production AI agents, workflow automation, and the web apps around them. Fixed price from ₹45,000, live in two weeks. Based in Jaipur, working with startups across India.",

  founder: {
    name: "Sonu Kumawat",
    /** Avatar me dikhne wale initials. Asli photo aane pe isse replace kar dena. */
    initials: "SK",
    role: "Software engineer · Founder, Nexora · Jaipur",
  },

  contact: {
    email: "sonukumawat9216@gmail.com",

    /**
     * Sirf digits, country code ke saath — koi +, space, ya dash nahi.
     * wa.me link isi format me chahiye, warna link toot jaata hai.
     */
    whatsapp: "919216954702",

    /** Screen pe dikhane ke liye readable version. */
    whatsappDisplay: "92169 54702",

    city: "Jaipur",
    region: "Rajasthan",
    country: "IN",
    hours: "Mon–Sat, 10am–8pm IST",
  },

  socials: {
    linkedin: "https://www.linkedin.com/in/sonukumawat/",
    instagram: "https://www.instagram.com/s0nu_marothiya",
    portfolio: "https://sonukumawat-sde.github.io/",
  },

  /**
   * Formspree form ID — contact form submissions yahan jaate hain.
   *
   * Setup: formspree.io pe free account banao, naya form banao, ID copy karo
   * (jaise "xayzbqwe"), aur neeche paste kar do.
   *
   * Khaali chhoda toh form mailto: pe fall back karta hai. Wo kaam toh karta
   * hai, lekin aadhe visitors ka mail client set nahi hota — un logon ki
   * enquiry seedha gayab ho jaati hai. Isliye deploy se pehle ye zaroor bharna.
   */
  formspreeId: "",
} as const;

/**
 * WhatsApp link, pre-filled message ke saath.
 *
 * Message pehle se bhara hone se conversion badhta hai — visitor ko sochna
 * nahi padta ki kya likhein, bas send dabana hota hai.
 */
export function waLink(message = "Hi Sonu, I have a project in mind") {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type Site = typeof site;