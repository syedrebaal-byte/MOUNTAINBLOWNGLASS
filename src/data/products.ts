export interface Product {
  id: string;
  name: string;
  subtitle: string;
  italianTechnique: string;
  category: 'vases' | 'bowls' | 'lighting' | 'sets' | 'sculptures' | 'ceremony';
  colorway: 'Amber Gold' | 'Cobalt Azure' | 'Ruby Crimson' | 'Emerald Forest' | 'Amethyst Violet' | 'Optic Crystal';
  price: number;
  featured?: boolean;
  isNew?: boolean;
  edition: string;
  dimensions: string;
  weight: string;
  annealingTime: string;
  temperature: string;
  description: string;
  provenance: string;
  image: string;
  secondaryImages?: string[];
  inStock: boolean;
  stockCount: number;
}

export const PRODUCTS: Product[] = [
  {
    id: 'solstice-ribbed-amber',
    name: 'Solstice Rigadin Sferico Vase',
    subtitle: 'Concentric Optic Ribbed Sphere in Warm Honey Amber',
    italianTechnique: 'Rigadin Ritorto a Caldo',
    category: 'vases',
    colorway: 'Amber Gold',
    price: 680,
    featured: true,
    isNew: true,
    edition: 'Signed Atelier Studio Run · Batch 2026',
    dimensions: '9.8" H × 10.2" Diameter (25 cm × 26 cm)',
    weight: '3.4 kg / 7.5 lbs',
    annealingTime: '48 Hours at 920°F',
    temperature: '2,140°F Molten Working Point',
    description: 'Inspired by classical Murano ribbed glassmaking, the Solstice Rigadin is individually blown using a bronze optic mold and expanded freehand on the punty. The concentric ridges catch daylight and cast radiant amber halos across any room.',
    provenance: 'Hand-blown at the Estes Park studio, Colorado. Fire-polished rim, pontil mark hand-ground and signed by master glassblowers.',
    image: '/assets/products/vase_ribbed_amber.jpg',
    secondaryImages: [
      '/assets/products/set_mountain_trio.jpg',
      '/assets/products/hero_atelier.jpg'
    ],
    inStock: true,
    stockCount: 6
  },
  {
    id: 'aura-fazzoletto-crimson',
    name: 'Aura Fazzoletto Handkerchief Fold Vase',
    subtitle: 'Centrifugally Spun Folded Basin with 24k Gold Frit',
    italianTechnique: 'Fazzoletto Libero con Oro',
    category: 'vases',
    colorway: 'Ruby Crimson',
    price: 890,
    featured: true,
    edition: 'Numbered Collector Series · Limited to 20',
    dimensions: '11.4" H × 12.0" Width (29 cm × 30.5 cm)',
    weight: '2.9 kg / 6.4 lbs',
    annealingTime: '52 Hours at 920°F',
    temperature: '2,180°F Centrifugal Shaping',
    description: 'The iconic handkerchief fold requires lightning-fast precision: the glass is spun at maximum speed while gravity and centrifugal force fold molten ruby crystal into delicate, fabric-like organic folds, dusted with pulverized mineral gold frit.',
    provenance: 'Each fold is completely unique. Cold-worked flat base, acid-etched Mountain Blown Glass studio archive seal.',
    image: '/assets/products/vase_crimson_fold.jpg',
    secondaryImages: [
      '/assets/products/hero_atelier.jpg'
    ],
    inStock: true,
    stockCount: 3
  },
  {
    id: 'cascadia-optic-amethyst-bowl',
    name: 'Cascadia Optic Centerpiece Bowl',
    subtitle: 'Flared Undulating Marine Rim in Twilight Amethyst',
    italianTechnique: 'Bordo Ondulato Soffiato',
    category: 'bowls',
    colorway: 'Amethyst Violet',
    price: 740,
    featured: true,
    edition: 'Atelier Master Series · Limited to 18',
    dimensions: '6.5" H × 16.5" Diameter (16.5 cm × 42 cm)',
    weight: '4.1 kg / 9.0 lbs',
    annealingTime: '60 Hours at 910°F',
    temperature: '2,120°F Working Temp',
    description: 'A grand statement vessel featuring ethereal smoke wisps of raw amethyst and smoky tourmaline. The undulating lip mimics high-alpine river rapids, catching and refracting overhead illumination.',
    provenance: 'Created using layered color cane powders pulled in Estes Park. Diamond wheel engraved signature on foot.',
    image: '/assets/products/bowl_aurora_centerpiece.jpg',
    inStock: true,
    stockCount: 4
  },
  {
    id: 'nirvana-alpine-azure-urn',
    name: 'Nirvana Alpine Azure Fluted Vase',
    subtitle: 'Submerged Cobalt Glacier Swirl with Flared Mouth',
    italianTechnique: 'Sommerso a Spirale',
    category: 'vases',
    colorway: 'Cobalt Azure',
    price: 950,
    featured: true,
    edition: 'High Alpine Collection · Edition of 15',
    dimensions: '14.5" H × 8.2" Diameter (37 cm × 21 cm)',
    weight: '3.8 kg / 8.4 lbs',
    annealingTime: '56 Hours at 925°F',
    temperature: '2,200°F Layered Dip Point',
    description: 'Embodying Colorado glacial tarns, this striking amphora features a dense core of mineral cobalt blue enveloped in crystalline sea-glass green and optic lead-free crystal, drawn upward into a flared, hand-sheared rim.',
    provenance: 'Signed and dated with custom archival studio certificate of authenticity.',
    image: '/assets/products/vase_alpine_azure.jpg',
    inStock: true,
    stockCount: 2
  },
  {
    id: 'elysian-emerald-amphora',
    name: 'Elysian Ribbed Amphora Urn',
    subtitle: 'Classical Classical Optic Fluting with Applied Crystal Handles',
    italianTechnique: 'Costolato Antico con Manici',
    category: 'vases',
    colorway: 'Emerald Forest',
    price: 820,
    featured: false,
    edition: 'Classical Revival Series · Edition of 25',
    dimensions: '15.0" H × 7.8" Width (38 cm × 20 cm)',
    weight: '3.6 kg / 7.9 lbs',
    annealingTime: '50 Hours at 915°F',
    temperature: '2,150°F Furnace Gather',
    description: 'Deep forest green crystal with 24 individual optic ribs running along the baluster body. Two hand-pulled molten glass handles are applied while hot by the gaffer in one continuous, breathless gesture.',
    provenance: 'Annealed over 50 hours to ensure exceptional structural clarity and heirloom durability.',
    image: '/assets/products/vase_emerald_ribbed.jpg',
    inStock: true,
    stockCount: 5
  },
  {
    id: 'lumina-celestial-oil-lamp',
    name: 'Lumina Celestial Effervescence Oil Lamp',
    subtitle: 'Solid Optic Crystal Sphere with Bulicante Bubbles & Brass',
    italianTechnique: 'Bulicante a Spillo',
    category: 'lighting',
    colorway: 'Optic Crystal',
    price: 260,
    featured: true,
    edition: 'Continuous Studio Heritage Creation',
    dimensions: '6.2" H × 5.8" Diameter (15.5 cm × 14.7 cm)',
    weight: '1.8 kg / 4.0 lbs',
    annealingTime: '36 Hours at 900°F',
    temperature: '2,080°F Working Temp',
    description: 'A beloved specialty of Mountain Blown Glass. Pure optic crystal containing hundreds of controlled micro-bubbles that dance under the real flame. Equipped with a precision-machined brushed brass collar and permanent fiberglass wick.',
    provenance: 'Smokeless, odorless paraffin oil compatible. Clean-burning and designed to illuminate dining tables or hearth mantels.',
    image: '/assets/products/lamp_celestial_sphere.jpg',
    inStock: true,
    stockCount: 12
  },
  {
    id: 'longs-peak-summit-sculpture',
    name: 'The Longs Peak Monolith Crystal',
    subtitle: 'Solid Furnace-Sculpted Peak with 24k Gold Inclusions',
    italianTechnique: 'Cristallo Massello a Mano Libera',
    category: 'sculptures',
    colorway: 'Optic Crystal',
    price: 1240,
    featured: true,
    edition: 'Signed Masterwork Edition · 10 Pieces Annually',
    dimensions: '8.5" H × 7.0" Base Width (21.5 cm × 18 cm)',
    weight: '5.2 kg / 11.5 lbs',
    annealingTime: '72 Hours Slow Anneal',
    temperature: '2,240°F Crucible Core',
    description: 'A solid, monumental block of hot-sculpted optical crystal paying homage to Longs Peak, the 14,259-ft monarch of Rocky Mountain National Park. Floating fissures of 24k gold leaf catch radiant sunlight from every angle.',
    provenance: 'Individually sculpted by head gaffer. Accompanied by embossed leather-bound authentication document.',
    image: '/assets/products/sculpture_alpine_summit.jpg',
    inStock: true,
    stockCount: 2
  },
  {
    id: 'solstice-matching-trio-suite',
    name: 'Solstice Masterwork Symphony Suite (3-Piece)',
    subtitle: 'Coordinated Amber Suite: Baluster Vase, Console Basin, & Votive',
    italianTechnique: 'Trittico Armonico Coordinato',
    category: 'sets',
    colorway: 'Amber Gold',
    price: 1480,
    featured: true,
    edition: 'Curated Suite Edition · Limited to 12 Sets',
    dimensions: 'Suite: 12" Baluster Vase, 14" Flared Basin, 5" Accent Votive',
    weight: '6.5 kg / 14.3 lbs Combined',
    annealingTime: '64 Hours Simultaneous Anneal',
    temperature: '2,150°F Hot Shop Run',
    description: 'An expansive centerpiece suite blown from the same single crucible melt to guarantee exact chromatic harmony across all three pieces. Fluted baluster vase, flared scallop console bowl, and candle votive dish.',
    provenance: 'Crated together in custom foam-lined wooden presentation vault for safe international transit.',
    image: '/assets/products/set_mountain_trio.jpg',
    inStock: true,
    stockCount: 3
  },
  {
    id: 'bespoke-unity-ceremony-kit',
    name: 'Atelier Unity Ceremony Frit Crystal Suite',
    subtitle: 'Ceremonial Crystal Frits with Custom Commemorative Vase Melting',
    italianTechnique: 'Fusione di Nozze in Vetro Artistico',
    category: 'ceremony',
    colorway: 'Amber Gold',
    price: 540,
    featured: false,
    edition: 'Bespoke Commission per Couple',
    dimensions: 'Presentation Box: 12" × 8" × 4" with 3 Handcrafted Glass Vials',
    weight: '2.2 kg / 4.8 lbs',
    annealingTime: 'Final Vase Annealed 48 Hours',
    temperature: 'Post-Ceremony Re-melt at 2,100°F',
    description: 'The Mountain Blown Glass signature wedding experience. Couples combine individual vials of colored crystal frits during their ceremony. After the event, you ship the combined crystals back to our Estes Park studio, where our master gaffer blows a one-of-a-kind sculptural Solstice vase containing your blended colors.',
    provenance: 'Includes heirloom keepsake display box, prepaid secure return shipping box, and completed 10" custom blown art glass vase.',
    image: '/assets/products/unity_frit_presentation.jpg',
    inStock: true,
    stockCount: 99
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Creations', count: 9 },
  { id: 'vases', label: 'Sculptural Vases', count: 4 },
  { id: 'bowls', label: 'Centerpiece Bowls', count: 1 },
  { id: 'lighting', label: 'Luminous Oil Lamps', count: 1 },
  { id: 'sets', label: 'Matching Suites', count: 1 },
  { id: 'sculptures', label: 'Solid Sculptures', count: 1 },
  { id: 'ceremony', label: 'Unity & Memorial Glass', count: 1 }
] as const;

export const COLORWAYS = [
  'All Hues',
  'Amber Gold',
  'Cobalt Azure',
  'Ruby Crimson',
  'Emerald Forest',
  'Amethyst Violet',
  'Optic Crystal'
] as const;
