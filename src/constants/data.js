import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: 'Rs5600',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: 'Rs5900',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: 'Rs4400',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: 'Rs3100',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: 'Rs2600',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: 'Rs2000',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: 'Rs1600',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: 'Rs1000',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: 'Rs3100',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: 'Rs2600',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Bib Gourmand is a highly coveted award presented by the Michelin Guide to restaurants that serve exceptional food at reasonable prices. It is a mark of excellence in the culinary world, recognizing the hard work and dedication of chefs and their teams.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Our Rising Stars are given the opportunity to showcase their talents through specially curated menus, highlighting their unique style and vision.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'The AA rating system is widely regarded as one of the most rigorous and reliable in the industry, and earning an AA award is a significant achievement for any hotel or restaurant.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'At our hotel, we are privileged to have an Outstanding Chef leading our culinary team. With a passion for using only the finest ingredients and a commitment to constantly pushing the boundaries of flavor and technique, our chef creates dishes that are both innovative and delicious.',
  },
];

export default { wines, cocktails, awards };
