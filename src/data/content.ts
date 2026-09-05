export interface Route {
  slug: string;
  title: string;
  stops: string;
  timing: string;
  rail: string;
  bestFor: string;
  gradient: string;
  budget: string;
  railTotal: string;
}

export interface MonthGuide {
  month: string;
  cities: string;
  note: string;
  avoid: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface PrepItem {
  title: string;
  body: string;
}

export const firstPick = {
  city: 'Beijing',
  cn: '北京',
  days: '3 days',
  headline: 'If it\u2019s your first trip, start in Beijing.',
  summary:
    'Beijing is the safest first city for most travelers: it holds the country\u2019s most famous sights, is the best rail hub for building a multi-city route, and is more English-friendly than most other mainland cities.',
  reasons: [
    'Highest concentration of world-famous landmarks: Forbidden City, Great Wall, Temple of Heaven, Summer Palace.',
    'Best rail hub: direct high-speed links to Xi\u2019an, Shanghai, Nanjing, and Harbin make it the natural start of any route.',
    'Easiest logistics: one international airport, a simple subway system, and more English signage than most of China.',
  ],
  itinerary: [
    'Day 1: Tiananmen Square, Forbidden City, Jingshan Park for the sunset view.',
    'Day 2: Mutianyu Great Wall (quieter than Badaling), then a roast duck dinner.',
    'Day 3: Temple of Heaven in the morning, then a train or flight to your next city.',
  ],
  alternatives: [
    { city: 'Shanghai', reason: 'If you want a polished, food-driven city break rather than imperial history.' },
    { city: 'Chengdu', reason: 'If you want pandas, relaxed teahouse culture, and a slower pace.' },
    { city: 'Hong Kong', reason: 'If you want an English-friendly "soft landing" before venturing into the mainland.' },
  ],
};

export const routes: Route[] = [
  {
    slug: 'classic-triangle',
    title: '7-day classic triangle',
    gradient: 'linear-gradient(135deg, #8e1f14 0%, #c0392b 50%, #2e7d32 100%)',
    stops: 'Beijing \u2192 Xi\u2019an \u2192 Chengdu',
    timing: 'Beijing 3 days, Xi\u2019an 2 days, Chengdu 2 days',
    rail: 'Beijing to Xi\u2019an is about 4.5 hours; Xi\u2019an to Chengdu is about 3.5 hours.',
    bestFor: 'First-time visitors who want history, food, and pandas without rushing.',
    budget: '$600\u2013900 per person',
    railTotal: 'About 8 hours of rail',
  },
  {
    slug: 'jiangnan-loop',
    title: '10-day Jiangnan loop',
    gradient: 'linear-gradient(135deg, #0d1b4c 0%, #1e3a8a 50%, #00695c 100%)',
    stops: 'Shanghai \u2192 Suzhou \u2192 Hangzhou',
    timing: 'Shanghai 3 days, Suzhou 2 days, Hangzhou 2 days, back to Shanghai 1 day',
    rail: 'All three cities sit within a 45 to 90 minute high-speed rail window.',
    bestFor: 'Design, food, gardens, and a polished first China trip with minimal transit.',
    budget: '$850\u20131,200 per person',
    railTotal: 'Under 3 hours of rail',
  },
  {
    slug: 'panorama',
    title: '14-day panorama',
    gradient: 'linear-gradient(135deg, #8e1f14 0%, #4527a0 50%, #ffb300 100%)',
    stops: 'Beijing \u2192 Xi\u2019an \u2192 Chengdu \u2192 Guilin \u2192 Hong Kong',
    timing: 'Beijing 3, Xi\u2019an 2, Chengdu 2, Guilin 2, Hong Kong 3 days',
    rail: 'Fly from Chengdu to Guilin, then fly or take rail from Guilin to Hong Kong for the final leg.',
    bestFor: 'Travelers who want a broad first pass across several regions.',
    budget: '$1,400\u20132,000 per person',
    railTotal: 'About 12 hours of rail plus 2 flights',
  },
];

export const months: MonthGuide[] = [
  { month: 'January', cities: 'Harbin, Beijing, Hong Kong', note: 'Best for ice festivals and indoor city culture.', avoid: 'Avoid northern cities outside Harbin unless you want deep cold.' },
  { month: 'February', cities: 'Harbin, Shanghai, Kunming', note: 'Colder in the north, milder in the south.', avoid: 'Avoid the Spring Festival travel rush; book trains very early.' },
  { month: 'March', cities: 'Shanghai, Hangzhou, Chengdu', note: 'Spring starts, gardens and tea villages open up.', avoid: 'Avoid Beijing during spring dust storms; pack a mask just in case.' },
  { month: 'April', cities: 'Beijing, Suzhou, Guilin', note: 'Pleasant temperatures and strong spring scenery.', avoid: 'Avoid the Qingming holiday weekend for the biggest crowds.' },
  { month: 'May', cities: 'Xi\u2019an, Chengdu, Zhangjiajie', note: 'Green mountains and good walking weather.', avoid: 'Avoid the Labor Day holiday week if you dislike crowds.' },
  { month: 'June', cities: 'Kunming, Guilin, Hong Kong', note: 'Rainy season begins in many regions.', avoid: 'Avoid southern cities if you dislike rain; it is plum-rain season.' },
  { month: 'July', cities: 'Kunming, Lhasa, Harbin', note: 'Head to higher altitude or cooler northern cities.', avoid: 'Avoid lowland cities like Chongqing and Wuhan in peak heat.' },
  { month: 'August', cities: 'Lhasa, Kunming, Harbin', note: 'Peak summer travel and domestic holidays.', avoid: 'Avoid the south during typhoon season; check forecasts.' },
  { month: 'September', cities: 'Beijing, Xi\u2019an, Chengdu', note: 'Comfortable weather after the summer peak.', avoid: 'Avoid the Mid-Autumn holiday weekend for crowds.' },
  { month: 'October', cities: 'Beijing, Guilin, Hangzhou', note: 'Golden autumn light and national holiday crowds.', avoid: 'Avoid the first week (National Day); it is the busiest of the year.' },
  { month: 'November', cities: 'Shanghai, Suzhou, Hong Kong', note: 'Lower crowds and cooler city walking.', avoid: 'Avoid northern cities as temperatures drop toward winter.' },
  { month: 'December', cities: 'Harbin, Hong Kong, Shanghai', note: 'Ice season in the north, mild city breaks in the south.', avoid: 'Avoid the far north unless you want the ice festival.' },
];

export const faqs: Faq[] = [
  {
    question: 'Which Chinese city should I visit first?',
    answer:
      'Beijing is the safest first stop for most travelers: it combines imperial history, world-famous landmarks, good infrastructure, and easy rail connections to Xi\u2019an and Shanghai. If you prefer modern city energy over history, start with Shanghai instead.',
  },
  {
    question: 'What are the major cities in China?',
    answer:
      'The cities most travelers actually visit are Beijing, Shanghai, Xi\u2019an, Chengdu, Chongqing, Guangzhou, Shenzhen, Hangzhou, Suzhou, Nanjing, and Hong Kong. Beijing and Shanghai anchor most first trips; Xi\u2019an and Chengdu are the strongest second stops; and the Shanghai-Suzhou-Hangzhou loop is the most time-efficient route in the country.',
  },
  {
    question: 'How many cities can I see in 10 days?',
    answer:
      'Three cities is the sweet spot for 10 days. A common route is Beijing 3 days, Xi\u2019an 2 days, and Shanghai 2 days, with one buffer day for travel and rest. Adding a fourth city usually turns the trip into a rush.',
  },
  {
    question: 'Is Beijing or Shanghai better?',
    answer:
      'Beijing is stronger for history and imperial landmarks; Shanghai is stronger for modern design, food density, and a polished city break. Many first-time travelers do both by high-speed rail, since the ride is about 4.5 hours.',
  },
  {
    question: 'What is the best month to visit Chinese cities?',
    answer:
      'April, May, September, and October are the most comfortable months for most cities. Avoid the first week of October (a national holiday) if you dislike crowds, and skip the far north outside of winter ice season.',
  },
  {
    question: 'How do I travel between Chinese cities?',
    answer:
      'High-speed rail is the most convenient option between major cities. Book on the official China Railway 12306 platform or a reputable booking service once your dates are fixed. For longer legs like Chengdu to Guilin, a flight is often faster.',
  },
  {
    question: 'Do I need a visa to visit China?',
    answer:
      'Most travelers need a tourist visa, but visa-free transit (up to 144 hours in many cities) and regional visa-free policies change often. Check your nationality against current official immigration rules before booking flights.',
  },
  {
    question: 'How much does it cost to travel in China?',
    answer:
      'Budget travelers can manage $40-60 per day, mid-range travelers $65-120, and premium trips $130+. Costs vary most by city: Hong Kong and Shanghai are the priciest, while Chengdu, Xi\u2019an, and Kunming are noticeably cheaper.',
  },
  {
    question: 'Can I use my phone and pay in China as a foreigner?',
    answer:
      'Yes. Download Alipay or WeChat Pay and link an international card before you arrive; both now support foreign cards. Keep a small amount of cash as backup, and confirm your roaming plan or buy a local SIM with data.',
  },
  {
    question: 'Which Chinese city is best for families?',
    answer:
      'Chengdu is the easiest family city thanks to pandas, casual food, and a relaxed pace. Beijing works well for kids who love castles and the Great Wall, while Hong Kong offers theme parks and English-friendly logistics.',
  },
  {
    question: 'How far in advance should I book attractions and trains?',
    answer:
      'Book the Forbidden City, the Terracotta Army, and popular Great Wall sections 1-2 weeks ahead, especially in peak season. Train tickets open for sale about 15 days in advance and sell out during national holidays.',
  },
  {
    question: 'Is it safe to travel in China?',
    answer:
      'China is generally very safe for tourists, with low street crime in major cities. The main risks are pickpocketing in crowded areas and traffic when crossing roads. Keep your passport with you for hotels and train travel.',
  },
];

export const prepItems: PrepItem[] = [
  {
    title: 'Visa & entry',
    body: 'Most nationalities need a tourist visa (L visa), but visa-free transit and regional waivers change often. Check the official National Immigration Administration page for your nationality and current rules before booking flights.',
  },
  {
    title: 'Payment',
    body: 'China is largely cashless. Set up Alipay or WeChat Pay with an international card before arrival, and carry a small amount of cash plus your physical card as backup.',
  },
  {
    title: 'Phone & internet',
    body: 'Google, WhatsApp, and many Western apps are blocked. Install a VPN before you arrive if you need them, and confirm your roaming plan or buy a local SIM or eSIM with data.',
  },
  {
    title: 'Navigation',
    body: 'Google Maps is unreliable in China. Use Apple Maps, Amap, or Baidu Maps for directions, and download offline maps for the cities you will visit.',
  },
  {
    title: 'Trains',
    body: 'Book high-speed rail on the official 12306 platform or a trusted third-party service. Arrive 45-60 minutes early at major stations, since security and ID checks take time.',
  },
  {
    title: 'Hotels & language',
    body: 'Book hotels that accept foreign guests (not all do). Save each hotel\u2019s name and address in Chinese characters to show taxi drivers, and keep a translation app ready.',
  },
];

export const trustSignals = {
  lastUpdated: 'August 2026',
  lastUpdatedISO: '2026-08-17',
  author: 'China City Explorer editorial team',
  authorBio:
    'A small editorial team of frequent China travelers who have taken the high-speed rail between every city in this guide.',
  method:
    'Recommendations are based on first-hand high-speed rail travel between these cities, rail connectivity, seasonal weather data, and verified per-day cost ranges. We do not sell tours or take commissions on attraction tickets.',
  sources: [
    { label: 'China Railway 12306', url: 'https://www.12306.cn/en/index.html' },
    { label: 'National Immigration Administration', url: 'https://en.nia.gov.cn/' },
    { label: 'UNESCO World Heritage List', url: 'https://whc.unesco.org/en/list/' },
  ],
  updateNote:
    'Details were last verified in August 2026. Rail times, prices, and visa rules change often, so confirm current details with official sources before booking.',
};

export const budgetSummary = {
  headline: '$40 to $160 per day',
  body: 'The range covers hostels and street food through comfortable hotels and private tours. Most mid-range city trips land between $65 and $120 per person per day. Hong Kong and Shanghai sit at the top of the range; Chengdu, Xi\u2019an, and Kunming sit at the bottom.',
};

export interface Comparison {
  slugA: string;
  slugB: string;
  label: string;
  verdict: string;
}

export const popularComparisons: Comparison[] = [
  {
    slugA: 'beijing',
    slugB: 'shanghai',
    label: 'Beijing vs Shanghai',
    verdict:
      'Beijing for imperial history and the Great Wall; Shanghai for food, design, and a polished city break. First-timers who want landmarks pick Beijing; food-first travelers pick Shanghai.',
  },
  {
    slugA: 'chengdu',
    slugB: 'chongqing',
    label: 'Chengdu vs Chongqing',
    verdict:
      'Chengdu for pandas, teahouses, and a relaxed pace; Chongqing for dramatic night views and serious hotpot. Best move: do both, two nights each, on the same rail line.',
  },
  {
    slugA: 'guilin',
    slugB: 'zhangjiajie',
    label: 'Guilin vs Zhangjiajie',
    verdict:
      'Guilin for gentle karst river scenery and easy cycling; Zhangjiajie for towering sandstone pillars and heights. Easy sightseers pick Guilin; thrill-seekers pick Zhangjiajie.',
  },
];

export interface TravelerType {
  label: string;
  cities: string;
  reason: string;
}

export const travelerTypes: TravelerType[] = [
  {
    label: 'First-timer',
    cities: 'Beijing \u2192 Xi\u2019an \u2192 Shanghai',
    reason: 'The classic first pass: imperial history, then the food and skyline contrast.',
  },
  {
    label: 'Food lover',
    cities: 'Chengdu \u2192 Chongqing \u2192 Xi\u2019an',
    reason: 'Hotpot, noodles, and street food, connected by short rail hops.',
  },
  {
    label: 'Photographer',
    cities: 'Zhangjiajie \u2192 Guilin \u2192 Chongqing',
    reason: 'Sandstone pillars, karst rivers, and the most dramatic night skyline in China.',
  },
  {
    label: 'Family',
    cities: 'Chengdu \u2192 Hong Kong \u2192 Beijing',
    reason: 'Pandas, theme parks, and kid-friendly landmarks with easy logistics.',
  },
  {
    label: 'Budget traveler',
    cities: 'Xi\u2019an \u2192 Kunming \u2192 Chengdu',
    reason: 'Three of the cheapest major cities, with hostels and street food throughout.',
  },
  {
    label: 'Honeymoon',
    cities: 'Shanghai \u2192 Hangzhou \u2192 Suzhou',
    reason: 'Polished hotels, gardens, and lakes on a short, low-stress rail loop.',
  },
];

export interface DecisionRule {
  condition: string;
  result: string;
}

export const decisionRules: DecisionRule[] = [
  { condition: 'If you only have 5 days', result: 'Go to Beijing, and add a Great Wall day trip.' },
  { condition: 'If you love spicy food', result: 'Chengdu and Chongqing are your cities.' },
  { condition: 'If you hate the cold', result: 'Kunming, Guilin, and Hong Kong stay mild in winter.' },
  { condition: 'If you fear heights', result: 'Skip Zhangjiajie and the glass bridge.' },
  { condition: 'If you are traveling with kids', result: 'Chengdu for pandas, then Hong Kong for theme parks.' },
  { condition: 'If it is your first time', result: 'Beijing 3 days, then Xi\u2019an 2 days by high-speed rail.' },
];

export interface QuickFact {
  topic: string;
  fact: string;
}

export const quickFacts: QuickFact[] = [
  { topic: 'Visa', fact: 'Most nationalities need an L visa; 144-hour transit exists in many cities. Verify before booking.' },
  { topic: 'Rail', fact: 'High-speed trains link all major cities; book on 12306 about 15 days ahead.' },
  { topic: 'Payment', fact: 'Set up Alipay or WeChat Pay with a foreign card; keep some cash as backup.' },
  { topic: 'Internet', fact: 'Google and WhatsApp are blocked; install a VPN and an offline translation app first.' },
  { topic: 'Language', fact: 'English signage exists in metros and top sights; save hotel names in Chinese.' },
  { topic: 'Safety', fact: 'China is very safe for tourists; keep your passport with you for hotels and trains.' },
];
