// Central content for the site — edit prices, barbers and hours here.

export const SHOP = {
  name: "King Of Rock Barbershop",
  address: "Λεωφ. Ηρακλείου 514, Ηράκλειο, Κρήτη",
  phone: "+30 000 000 0000", // PLACEHOLDER
  whatsapp: "300000000000", // PLACEHOLDER (χωρίς + και κενά)
  instagram: "https://www.instagram.com/", // PLACEHOLDER
  facebook: "https://www.facebook.com/", // PLACEHOLDER
  mapsEmbed:
    "https://www.google.com/maps?q=King+Of+Rock+Barbershop+Heraklion+Crete&output=embed",
  mapsLink: "https://www.google.com/maps?q=King+Of+Rock+Barbershop+Heraklion",
};

export type Service = {
  name: string;
  price: string;
  duration: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    name: "Κούρεμα",
    price: "13€",
    duration: "30'",
    description: "Ψαλίδι, μηχανή, fade — δουλεμένο μέχρι την τελευταία τρίχα.",
  },
  {
    name: "Περιποίηση Γενιών",
    price: "8€",
    duration: "20'",
    description: "Σχηματισμός, ξύρισμα περιγράμματος και έλαια γενιάδας.",
  },
  {
    name: "Ξύρισμα με Πετσέτα",
    price: "12€",
    duration: "30'",
    description: "Ζεστή πετσέτα, ξυράφι, aftershave. Το κλασικό τελετουργικό.",
  },
  {
    name: "Κούρεμα + Γένια",
    price: "19€",
    duration: "45'",
    description: "Το φουλ πακέτο. Βγαίνεις έτοιμος για σκηνή.",
  },
  {
    name: "Παιδικό Κούρεμα",
    price: "10€",
    duration: "25'",
    description: "Για τους μικρούς rockers έως 12 ετών.",
  },
  {
    name: "Καθαρισμός Αυχένα",
    price: "5€",
    duration: "10'",
    description: "Γρήγορο φρεσκάρισμα ανάμεσα στα ραντεβού.",
  },
];

export type Barber = {
  name: string;
  role: string;
  bio: string;
  instagram: string;
  image: string;
};

export const TIME_SLOTS = [
  "09:00",
  "09:45",
  "10:30",
  "11:15",
  "12:00",
  "12:45",
  "16:00",
  "16:45",
  "17:30",
  "18:15",
  "19:00",
  "19:45",
];

export const HOURS: { day: string; hours: string }[] = [
  { day: "Δευτέρα", hours: "09:00 – 15:00" },
  { day: "Τρίτη", hours: "09:00 – 20:30" },
  { day: "Τετάρτη", hours: "09:00 – 15:00" },
  { day: "Πέμπτη", hours: "09:00 – 20:30" },
  { day: "Παρασκευή", hours: "09:00 – 20:30" },
  { day: "Σάββατο", hours: "09:00 – 16:00" },
  { day: "Κυριακή", hours: "Κλειστά" },
];

export const TESTIMONIALS = [
  {
    name: "Γιώργος Μ.",
    text: "Μπαίνεις για κούρεμα, βγαίνεις με διάθεση για συναυλία. Ο καλύτερος fade στο Ηράκλειο.",
    rating: 5,
  },
  {
    name: "Νίκος Π.",
    text: "Παλιάς κοπής μαγαζί με ψυχή. Το ξύρισμα με την πετσέτα είναι τελετουργικό.",
    rating: 5,
  },
  {
    name: "Στέλιος Κ.",
    text: "Μουσική στη διαπασών, καφές στο χέρι και ψαλίδι που ξέρει τη δουλειά του.",
    rating: 5,
  },
  {
    name: "Μανώλης Δ.",
    text: "Πάνε 4 χρόνια που δεν κουρεύομαι αλλού. Συνέπεια στην ώρα και στο αποτέλεσμα.",
    rating: 5,
  },
];
