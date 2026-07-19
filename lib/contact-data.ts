export const contactData = {
  sales: {
    whatsappDisplay: "+60 17-995 1928",
    phoneHref: "tel:+60179951928",
    whatsappHref: "https://wa.me/60179951928",
    email: "sales@wxpgroup.com",
    emailHref: "mailto:sales@wxpgroup.com"
  },
  support: {
    email: "admin@wxpgroup.com",
    emailHref: "mailto:admin@wxpgroup.com",
    phoneDisplay: "+60 11-6121 2957",
    phoneHref: "tel:+601161212957"
  },
  social: {
    facebook: "https://www.facebook.com/share/1a6p6dgs6y/",
    instagram: "https://www.instagram.com/wxpe_automotive/"
  },
  locations: [
    {
      name: "Factory",
      descriptor: "Manufacturing and operational base in Subang Jaya.",
      address: [
        "12, Jalan Subang 7/4,",
        "Taman Perindustrian Subang USJ 1,",
        "47600 Subang Jaya,",
        "Selangor, Malaysia"
      ],
      mapHref:
        "https://www.google.com/maps/search/?api=1&query=12+Jalan+Subang+7%2F4+Taman+Perindustrian+Subang+USJ+1+47600+Subang+Jaya+Selangor",
      schemaAddress: {
        streetAddress:
          "12, Jalan Subang 7/4, Taman Perindustrian Subang USJ 1",
        addressLocality: "Subang Jaya",
        addressRegion: "Selangor",
        postalCode: "47600",
        addressCountry: "MY"
      }
    },
    {
      name: "Office",
      descriptor:
        "Business and project coordination office in Seri Kembangan.",
      address: [
        "A-302, Street Mall One South,",
        "Jalan OS,",
        "Taman Serdang Perdana 6,",
        "Seri Kembangan,",
        "Selangor, Malaysia"
      ],
      mapHref:
        "https://www.google.com/maps/search/?api=1&query=A-302+Street+Mall+One+South+Jalan+OS+Taman+Serdang+Perdana+6+Seri+Kembangan+Selangor",
      schemaAddress: {
        streetAddress:
          "A-302, Street Mall One South, Jalan OS, Taman Serdang Perdana 6",
        addressLocality: "Seri Kembangan",
        addressRegion: "Selangor",
        addressCountry: "MY"
      }
    }
  ]
} as const;
