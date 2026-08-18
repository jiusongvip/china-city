// 试点城市独立页的扩展内容：首页锚点没有的深度内容（季节、预算、交通、定制 FAQ）
// 目前覆盖 beijing / shanghai / xian，未来扩城时在此追加，模板无需改动。

export interface CityPageExtra {
  intro: string;
  seasonGuide: string;
  budgetNote: string;
  gettingThere: string;
  related: string[];
  faqs: { question: string; answer: string }[];
}

export const cityPageExtras: Record<string, CityPageExtra> = {
  beijing: {
    intro:
      "Beijing is the political and cultural heart of China and the city first-time visitors most often start with. It holds the country's two most famous sights — the Forbidden City and the Great Wall — and its rail hub makes it the natural first stop on any multi-city route. For a first China trip, Beijing is less a question of whether to visit than of how many days to give it.",
    seasonGuide:
      'Beijing is best in April-May and September-October, when temperatures sit between 15-25°C and the sky is clearest. Summer (June-August) is hot and humid, with afternoon downpours and heavy domestic tourism. Winter (December-February) is dry, cold, and often hazy, but it brings the lowest crowds and cheapest hotels — the Forbidden City is genuinely pleasant on a quiet winter morning. Spring dust storms are rare but possible in March, so a mask is a sensible packing item.',
    budgetNote:
      "A mid-range day in Beijing runs $65-120 per person: $45-70 for a decent hotel room, $10-20 for meals, $15-25 for attraction tickets, and $5-10 for the metro. The big ticket is the Mutianyu Great Wall combo ($25-35 with cable car). Budget travelers can cut this to about $45 by choosing hostels and street food; luxury stays near Wangfujing push past $150.",
    gettingThere:
      'Beijing has two international airports: Capital (PEK) for most international routes and Daxing (PKX) for many domestic and new international services. The Airport Express rail links both to the city center in 30-50 minutes. For overland travel, Beijing South station is the high-speed rail hub: about 4.5 hours to Xi\'an, 4.5-5 hours to Shanghai, and 1 hour to Tianjin. The city metro (about $1 per ride) covers every major sight; buy a transit pass or use mobile payment at the gates.',
    related: ['xian', 'shanghai'],
    faqs: [
      {
        question: 'Which Great Wall section should I visit?',
        answer:
          "Mutianyu is the best choice for most first-time visitors: restored, less crowded than Badaling, with a cable car up and a toboggan down. Badaling is the most famous and most crowded section. If you have a full day and want fewer crowds plus wilder scenery, Jinshanling is the photographer's pick, about 2.5 hours from the city.",
      },
      {
        question: 'Do I need to book the Forbidden City in advance?',
        answer:
          'Yes. Book your timed entry slot 1-2 weeks ahead during peak season (April-October), and at least a few days in advance in winter. The palace is closed on Mondays. Bring your passport — it is checked against your booking.',
      },
      {
        question: 'How do I get around Beijing as a tourist?',
        answer:
          'The metro is the fastest and cheapest way: about $1 per ride, with English signs and announcements on all lines. Use a transit QR code via Alipay or WeChat Pay, or buy a single-journey ticket. Taxis and ride-hailing are cheap but stuck in traffic at rush hour, so avoid them between 8-9am and 6-7pm.',
      },
      {
        question: 'Where should I stay in Beijing?',
        answer:
          "Wangfujing is the classic first-timer choice — walk to the Forbidden City, Tiananmen, and Jingshan Park. Qianmen offers a historic hutong feel with courtyard hotels, and Sanlitun is the pick for nightlife and restaurants. All three sit on the metro network, so any works well for a 3-day itinerary.",
      },
    ],
  },
  shanghai: {
    intro:
      "Shanghai is China's most international city and the easiest place in the country to feel instantly comfortable: a world-class skyline, a food scene that runs late, the best hotel stock in China, and a metro that makes everything simple. It pairs perfectly with the garden cities of Suzhou and Hangzhou, which makes it the natural anchor for a polished, low-stress first trip.",
    seasonGuide:
      "The sweet spots are March-May and October-November: 15-25°C, low humidity, and clear light on the Bund. June-July is plum-rain season — grey skies and steady drizzle — while August is hot, humid, and occasionally hit by typhoons (flights can be delayed). Winter (December-February) is damp and chilly, but indoor attractions, food halls, and the shopping streets stay busy, and hotel prices drop.",
    budgetNote:
      'A mid-range day in Shanghai runs $70-130 per person: $50-80 for a good hotel, $15-30 for meals, $10-15 for attractions, and $3-5 for the metro. The Shanghai Tower observation deck is the single biggest ticket at about $30. Budget travelers can stay near $50 by using hostels, eating at food halls, and skipping paid decks — the Bund skyline is free.',
    gettingThere:
      'Shanghai has two airports: Pudong (PVG), the main international gateway, and Hongqiao (SHA), which is closer to the city and handles many domestic routes. The maglev train covers Pudong to the city in about 8 minutes. For rail, Hongqiao station is the hub: about 30 minutes to Suzhou, 45-60 minutes to Hangzhou, and 4.5-5 hours to Beijing. The metro is excellent and cheap (about $1 per ride); most sights sit within 30 minutes of each other.',
    related: ['suzhou', 'hangzhou', 'beijing'],
    faqs: [
      {
        question: 'What is the best way to see the Shanghai skyline?',
        answer:
          'For the classic view, walk the Bund promenade at sunset, then take a river cruise at night. For a high view, the Shanghai Tower floor-118 observation deck (about $30) is the best in the city — book a slot before sunset. The free alternative is the rooftop of the former Union Building near the Bund, a local favorite.',
      },
      {
        question: 'Is Shanghai expensive for tourists?',
        answer:
          'Shanghai is the most expensive city in mainland China, but it is still cheaper than most Western capitals: $70-130 per day covers a mid-range hotel, three meals, and attractions. Street food and food halls keep eating costs low, and the metro makes transport nearly free. Hong Kong is the only Chinese city that costs more.',
      },
      {
        question: 'What are the best day trips from Shanghai?',
        answer:
          "Suzhou is the best day trip — 30 minutes by high-speed rail for classical gardens and canal streets. Hangzhou needs a full day (45-60 minutes by train) for West Lake and tea villages. For a water town closer to the city, Zhujiajiao is about 1.5 hours away. All three make a natural second stop on a longer itinerary.",
      },
      {
        question: 'Where should I stay in Shanghai?',
        answer:
          "The Bund for the skyline view, the Former French Concession for atmosphere and cafes, or Jing'an for metro convenience and shopping. For first-timers, the French Concession is the most enjoyable base: quiet streets by day, great restaurants by night, and never more than 20 minutes by metro from the main sights.",
      },
    ],
  },
  xian: {
    intro:
      "Xi'an is where China's imperial story is most visible: the Terracotta Army, a city wall you can bike around, and a Muslim Quarter packed with street food. It is compact enough to cover in two days and sits directly on the main north-south rail line, which makes it the natural second stop between Beijing and Chengdu on a first China trip.",
    seasonGuide:
      "April-May and September-October are the best months: 15-28°C, mostly dry, and clear light for the Terracotta Army photos. Summer (June-August) is hot and dry, with strong sun on the wall and crowded pits. Winter (December-February) is cold and often grey, but the city empties out and hotel prices drop sharply. There is no rainy season to worry about — Xi'an is one of the driest big cities in China.",
    budgetNote:
      'A mid-range day in Xi\'an runs $50-95 per person: $35-60 for a hotel, $10-20 for meals, $10-20 for tickets (the Terracotta Army is about $18, the city wall about $7), and $3-5 for transport. Street food in the Muslim Quarter is cheap enough that two people can eat well for $10. Budget travelers can stay under $45 by using hostels and skipping the paid shows.',
    gettingThere:
      "Xi'an has one airport, Xi'an Xianyang (XIY), about 40 minutes from the city by metro or taxi. The high-speed rail hub is Xi'an North station: about 4.5 hours from Beijing, 3.5 hours from Chengdu, and 2.5 hours from Zhengzhou. From the station, the metro connects to the old town in about 30 minutes. The Terracotta Army is 40-60 minutes from the city by bus or taxi — the metro plus a short local ride also works.",
    related: ['beijing', 'chengdu'],
    faqs: [
      {
        question: 'How much time do I need at the Terracotta Army?',
        answer:
          'Plan for 3-4 hours including travel from the city: 45-60 minutes each way, then 1.5-2 hours in the pits. Go at opening time (8:30am) to beat the tour groups. Pit 1 is the main hall; pits 2 and 3 are smaller but worth the extra 15 minutes.',
      },
      {
        question: 'Is the Muslim Quarter worth visiting?',
        answer:
          "Yes, especially for food. The street behind the Drum Tower is where Xi'an's food culture shows up: roujiamo (meat in a bun), biangbiang noodles, lamb paomo, and skewers. It is busy in the evening, so go at 5-6pm before the crowds peak. The Great Mosque at its core is a rare blend of Chinese and Islamic architecture.",
      },
      {
        question: "Can I see Xi'an in one day?",
        answer:
          'It is tight but possible: Terracotta Army in the morning, bike the city wall in the late afternoon, and finish with dinner in the Muslim Quarter. You will miss the Shaanxi History Museum and Big Wild Goose Pagoda. With two days — the recommended length — you can add both comfortably.',
      },
      {
        question: 'Where should I stay in Xi\'an?',
        answer:
          "Near the Bell Tower is the most convenient base: walkable to the Muslim Quarter, the wall's south gate, and the metro to the train station. Inside the wall, the area around the south gate (Yongningmen) is quieter and closer to the wall's bike rental point. Either way, stay inside the wall for a first visit.",
      },
    ],
  },
  chengdu: {
    intro:
      'Chengdu is the relaxed counterpoint to China\u2019s big capitals: giant pandas in the morning, teahouses in the afternoon, and serious Sichuan food at night. It is also the launch point for western China \u2014 Tibet, western Sichuan, and the panda sanctuaries \u2014 which makes it both a destination and a gateway.',
    seasonGuide:
      'March-May and September-October are the best months: 15-26\u00b0C, mild humidity, and clear mornings for the pandas. Summer (June-August) is hot, humid, and rainy, though the pandas stay active early. Winter (December-February) is grey and damp but mild compared with the north, and hotpot makes the cold weather bearable. Avoid the national holiday weeks in May and October if you want to skip the crowds at the Panda Base.',
    budgetNote:
      'Chengdu is one of the cheapest major cities in China: $45-85 per day covers a mid-range hotel, three meals, and the Panda Base ticket (about $7). Street food and hotpot restaurants are excellent value \u2014 two people can eat well for $15-25. Budget travelers can stay under $40 with hostels and noodle shops.',
    gettingThere:
      'Chengdu Tianfu (TFU) is the main international airport, about 50 minutes from the city by metro; the older Shuangliu (CTU) airport still serves some routes. The high-speed rail hub is Chengdu East station: about 3.5 hours from Xi\u2019an, 1.5-2 hours from Chongqing, and direct night trains toward Lhasa. The metro is cheap and covers the Panda Base, Kuanzhai Alley, and the main rail stations.',
    related: ['chongqing', 'xian', 'lhasa'],
    faqs: [
      {
        question: 'What time should I arrive at the Panda Base?',
        answer:
          'Go before 9am, ideally by 8am when the gates open. Pandas are most active in the morning, and the nursery viewing is best between 8:30-10am. After 10am most pandas nap, and the base gets crowded with tour groups.',
      },
      {
        question: 'How spicy is Sichuan food, really?',
        answer:
          'Authentic Sichuan food is genuinely hot, but you control the dial: order \u201cwei la\u201d (mild) for hotpot broth and ask for less chili in dishes like mapo tofu. Dan dan noodles and dumplings are safe entry points. Milk, yogurt, and iced drinks are the local fire extinguishers.',
      },
      {
        question: 'How many days should I spend in Chengdu?',
        answer:
          'Two to three days. Day 1 for the Panda Base and a teahouse afternoon, day 2 for Kuanzhai Alley, Wuhou Shrine, and hotpot, and day 3 if you add the Leshan Giant Buddha or Dujiangyan as a day trip.',
      },
      {
        question: 'How do I get from Chengdu to Tibet?',
        answer:
          'Flights from Chengdu to Lhasa take about 2 hours and are the most common route. The Qinghai-Tibet railway also runs from Chengdu to Lhasa (about 36 hours, with permits arranged by your tour). Foreign travelers need a Tibet travel permit, arranged through an agency before arrival.',
      },
    ],
  },
  chongqing: {
    intro:
      'Chongqing is the most visually dramatic city in China: skyscrapers stacked on hills, a monorail that runs through an apartment building, and neon river views that turn the city into a light show at night. It is loud, steep, and very spicy \u2014 and for photographers and hotpot fans, it is unmissable.',
    seasonGuide:
      'March-May and October-November are best: 15-24\u00b0C with clear nights for the skyline. Summer (June-August) is famously hot \u2014 one of the \u201coven cities\u201d of the Yangtze \u2014 with 35-40\u00b0C days that make daytime sightseeing tough. Winter is mild but grey and foggy. Whenever you go, save the outdoor views for after dark.',
    budgetNote:
      'Chongqing is among the cheapest big cities in China: $45-80 per day covers a mid-range hotel, generous eating, and all tickets. Hongya Cave is free to enter; the Yangtze cableway is about $2. Hotpot is the big meal and usually runs $10-15 per person. Budget travelers can stay under $40 comfortably.',
    gettingThere:
      'Chongqing Jiangbei (CKG) airport connects to most Chinese cities and some international routes, with a direct metro line into town. The high-speed rail station (Chongqing West) links Chengdu in 1.5-2 hours and Guiyang in about 2 hours. The monorail and metro are cheap and scenic \u2014 Line 2 hugs the river and passes through the famous Liziba building.',
    related: ['chengdu', 'guilin'],
    faqs: [
      {
        question: 'Is Chongqing worth visiting?',
        answer:
          'Yes, if you want something visually unlike any other Chinese city: a night skyline that looks like a cyberpunk film set, a monorail through a building, and the country\u2019s most serious hotpot. It is best as a 2-day add-on to Chengdu, which is only 1.5-2 hours away by rail.',
      },
      {
        question: 'Where is the best night view of Chongqing?',
        answer:
          'The classic spot is the bridge across from Hongya Cave, which frames the glowing stilt houses in one shot. For the layered city view, climb Eling Park at sunset. Both are free; the Hongya Cave riverside walk is the easiest after dinner.',
      },
      {
        question: 'Is Hongya Cave worth visiting?',
        answer:
          'Yes \u2014 for the exterior, not the interior shops. The stilt-house complex glows after dark and photographs best from the bridge opposite. Inside it is a standard (and crowded) shopping street, so budget 30-45 minutes unless you want the restaurants.',
      },
      {
        question: 'How do I survive the spice in Chongqing?',
        answer:
          'Chongqing hotpot is the spiciest in China. Say \u201cwei wei la\u201d (very mild) when ordering broth, use the sesame-oil dipping sauce (it cools the heat), and order a milky drink like soy milk or yogurt. Xiaomian noodles are also spicy \u2014 ask for \u201cbu yao la\u201d for no chili.',
      },
    ],
  },
  guilin: {
    intro:
      'Guilin is where China\u2019s postcard scenery lives: karst peaks rising out of the Li River, rice terraces on the horizon, and the easiest nature trip in the country for first-time visitors. No hard hiking required \u2014 the cruise, the rafts, and the bike paths do the work for you.',
    seasonGuide:
      'April-May and September-October are the sweet spots: 18-28\u00b0C with the river at its most photogenic after spring rain. Summer is hot and humid with afternoon storms; the rain can turn the Li River brown but the karst stays dramatic. Winter is mild (8-15\u00b0C) but often grey. The rice terraces at Longji are best in May (flooded, mirror-like) and October (golden).',
    budgetNote:
      'Guilin is good value: $45-80 per day for a mid-range stay. The big costs are the Li River cruise (about $35-45) and Longji day trips. Food is cheap \u2014 rice noodles are a $1-2 breakfast \u2014 and bikes in Yangshuo cost a few dollars a day. Budget travelers can do it on $40 with hostels.',
    gettingThere:
      'Guilin Liangjiang (KWL) airport has direct flights from major Chinese cities and some Asian hubs, about 40 minutes from town. The high-speed rail station links Guangzhou (about 2.5 hours), Guiyang, and Changsha. From Guilin, Yangshuo is a 45-minute bus or a short train ride; Longji terraces are about 2 hours by car.',
    related: ['yangshuo', 'zhangjiajie', 'hong-kong'],
    faqs: [
      {
        question: 'Should I stay in Guilin or Yangshuo?',
        answer:
          'Stay in Yangshuo. The postcard karst scenery \u2014 river bends, bike paths, bamboo rafts \u2014 is all around Yangshuo, while Guilin city is mostly a transport hub. Split it 1 night in Guilin for the city sights (Elephant Trunk Hill, Reed Flute Cave), then 2 nights in Yangshuo.',
      },
      {
        question: 'Li River cruise or bamboo raft?',
        answer:
          'Do both if you can. The 4-hour cruise from Guilin to Yangshuo covers the classic postcard stretch in comfort. The Yulong River rafts in Yangshuo are quieter, slower, and closer to the peaks \u2014 the better experience overall. If you only pick one, pick the Yulong raft.',
      },
      {
        question: 'How many days do I need in Guilin and Yangshuo?',
        answer:
          'Three days is the sweet spot: day 1 for the Li River cruise, day 2 for the Yulong River and cycling in Yangshuo, day 3 for Xingping or the Longji terraces before you leave. Two days works if you skip Longji.',
      },
      {
        question: 'How do I get from Guilin to Yangshuo?',
        answer:
          'The direct bus from Guilin station or airport takes about 45-60 minutes and runs regularly. The train to Yangshuo station is faster (about 30 minutes) but the station is 40 minutes from town. Taxis and private drivers are the most convenient for the door-to-door trip.',
      },
    ],
  },
  yangshuo: {
    intro:
      'Yangshuo is where the Guilin postcard is actually taken: limestone peaks, the Yulong River, bamboo rafts, and bike paths through rice paddies. It is a small town built around one thing \u2014 the scenery \u2014 and it delivers it better than anywhere else in China at this effort level.',
    seasonGuide:
      'April-May and September-October are perfect: 18-28\u00b0C, green paddies, and clear river light. Summer is hot and humid with afternoon thunderstorms; the morning light is still excellent. Winter is mild and quiet, with the lowest prices and the mistiest karst views \u2014 a photographer favorite. October paddies turn golden, which is the most photogenic stretch of the year.',
    budgetNote:
      'Yangshuo is the cheapest base in the Guilin area: $40-75 per day. The big expenses are the Yulong River raft (about $15-25 per raft) and private drivers for Xingping. E-bike rental costs $5-8 a day and replaces most transport costs. Guesthouse meals are inexpensive and often the best food in town.',
    gettingThere:
      'The easiest route is from Guilin: a 45-60 minute bus from the station or airport, or a 30-minute train to Yangshuo station (then 40 minutes by shuttle to town). If you arrive by Li River cruise, the boat docks right at the edge of town. Once in Yangshuo, bikes, e-bikes, and local drivers cover everything.',
    related: ['guilin', 'zhangjiajie'],
    faqs: [
      {
        question: 'How many days should I spend in Yangshuo?',
        answer:
          'Two nights is the minimum: day 1 for the Yulong River raft and a bike ride, day 2 for Xingping (the 20-yuan banknote view) or Moon Hill. One night works only if you are on a tight Guilin loop and accept a rushed version.',
      },
      {
        question: 'Bike or e-bike for the countryside?',
        answer:
          'E-bike, unless you want the workout. The Ten-Mile Gallery and Yulong valley roads are flat but long (15-25 km loops), and an e-bike ($5-8 for the day) lets you cover everything without breaking a sweat. Rent from your guesthouse and check the battery before leaving.',
      },
      {
        question: 'Do I need to book the Yulong River rafts in advance?',
        answer:
          'Book ahead in peak season (May, October, holidays) \u2014 rafts sell out by mid-morning. In quiet months you can book on the spot. Each raft holds two people, and the most popular stretch is the 1.5-hour ride from Yulong Bridge to the old bridge.',
      },
      {
        question: 'When is Yangshuo most crowded?',
        answer:
          'The national holidays (first week of October, early May, Spring Festival) pack West Street wall-to-wall. The busiest ordinary months are May and October. For quiet mornings, go in April, June, or November \u2014 the scenery is nearly as good and the town breathes.',
      },
    ],
  },
  hangzhou: {
    intro:
      'Hangzhou is the green counterweight to Shanghai: West Lake ringed by willows and pagodas, Longjing tea terraces on the hills, and a calmer pace that makes it the easiest nature escape in eastern China. It sits 45-60 minutes from Shanghai by high-speed rail, which is why it is the most popular two-day add-on in the country.',
    seasonGuide:
      'March-May and October-November are the sweet spots: 15-25\u00b0C, spring blossoms, and autumn osmanthus. June-July is plum-rain season with grey drizzle, and August is hot and humid. Winter is cold and damp but the lake is quiet, and snow on the pagodas is a classic shot. The lake is beautiful in every season \u2014 the crowds and heat are what vary.',
    budgetNote:
      'A mid-range day runs $55-100: $40-65 for a hotel, $10-20 for meals, and $5-15 for tickets. West Lake itself is free \u2014 bikes and boats are the only costs. Lingyin Temple is about $10 and the Longjing tea tastings are free (the tea you buy is optional). Budget travelers can stay near $45.',
    gettingThere:
      'Hangzhou East station is the high-speed rail hub: 45-60 minutes from Shanghai, about 1 hour from Suzhou, and 2-3 hours from Nanjing. The airport is Hangzhou Xiaoshan (HGH), about 30-40 minutes from the city by taxi or airport bus. The metro and shared bikes cover the lake loop and the old town easily.',
    related: ['shanghai', 'suzhou'],
    faqs: [
      {
        question: 'How do I best see West Lake?',
        answer:
          'Combine walking with a bike: the full loop is about 15 km, so rent a shared bike for the flat sections and walk the causeways. The classic route is the Su Causeway in the morning, the north shore and Leifeng Pagoda at sunset, and a night walk along the east shore. A boat ride is worth the $8-12 for the island views.',
      },
      {
        question: 'Is the Longjing tea village worth visiting?',
        answer:
          'Yes, if you have half a day: the terraced fields behind Longjing village are free to walk, and farmhouses offer tastings where you can buy fresh tea directly. Go in the morning before the tour groups. The Dragon Well variety grown here is one of China\u2019s most famous green teas.',
      },
      {
        question: 'How many days do I need in Hangzhou?',
        answer:
          'Two days is ideal: day 1 for the West Lake loop and Leifeng Pagoda, day 2 for Lingyin Temple and the Longjing tea fields. One full day works if you only want the lake. Hangzhou also works as a long day trip from Shanghai, though you will miss the evening lake walk.',
      },
      {
        question: 'How do I get from Shanghai to Hangzhou?',
        answer:
          'High-speed rail is the way: 45-60 minutes from Shanghai Hongqiao station, with trains roughly every 15-20 minutes. Book same-day tickets at the station or via the travel apps. Avoid Friday evening and Sunday return trains \u2014 they sell out. The trip is short enough that you can travel light and stay near the station end.',
      },
    ],
  },
  suzhou: {
    intro:
      'Suzhou is China\u2019s garden city: classical scholar gardens, canal-side lanes, and the quietest \u201cold China\u201d atmosphere in the Yangtze delta. It sits 30 minutes from Shanghai by train, which makes it the easiest cultural contrast to the skyscrapers and the natural middle stop on a Shanghai-Suzhou-Hangzhou loop.',
    seasonGuide:
      'March-May and October-November are best: 15-25\u00b0C with spring blooms and autumn foliage in the gardens. Summer is hot and humid \u2014 gardens are shaded but crowded. Winter is cold and damp, yet the gardens empty out and the canal streets look their moodiest. The gardens were designed for contemplation in every season, so any visit works.',
    budgetNote:
      'A mid-range day runs $50-90: $35-60 for a hotel, $10-20 for meals, and $10-20 for garden tickets. The Humble Administrator\u2019s Garden is the biggest ticket at about $10; the smaller gardens run $4-7. Suzhou noodles and street snacks are cheap. Budget travelers can stay near $40.',
    gettingThere:
      'Suzhou station is the main rail stop for the old town: 25-35 minutes from Shanghai, about 1 hour from Hangzhou, and 1.5 hours from Nanjing. Suzhou North is the high-speed station on the Beijing-Shanghai line. The old town is walkable, the metro covers the new areas, and taxis are cheap for the garden-to-garden hop.',
    related: ['shanghai', 'hangzhou'],
    faqs: [
      {
        question: 'Which gardens should I visit in Suzhou?',
        answer:
          'Start with the Humble Administrator\u2019s Garden (the largest and most famous, go at opening time), then pick one contrast: the Lingering Garden for its rockeries, or the Master of the Nets Garden for its intimate scale \u2014 it is also stunning at night during the lantern show. Two gardens are enough; three feels repetitive.',
      },
      {
        question: 'Pingjiang Road or Shantang Street?',
        answer:
          'Both, if you can \u2014 they take 2-3 hours together. Pingjiang Road is the prettier, quieter canal lane with teahouses and crafts. Shantang Street is longer and livelier, best at dusk when the red lanterns light up along the canal; take the short boat ride there for the classic view.',
      },
      {
        question: 'Is Suzhou worth an overnight stay?',
        answer:
          'Yes, for the evenings: the canal streets are at their best after the day-trippers leave, and the night garden shows are a Suzhou specialty. One night (arrive morning, leave next afternoon) is the classic pattern. If you only have one day, it still works as a long day trip from Shanghai.',
      },
      {
        question: 'What should I eat in Suzhou?',
        answer:
          'Suzhou noodles with a rich broth and toppings are the local institution \u2014 try the three-piece noodle with shrimp. Squirrel-shaped mandarin fish is the famous dish (sweet and sour, order it for two). In autumn, hairy crab from nearby Yangcheng Lake is the seasonal obsession. Local flavors are sweeter than elsewhere in China.',
      },
    ],
  },
  nanjing: {
    intro:
      'Nanjing is the underrated history stop on the Beijing-Shanghai rail line: a former imperial capital with a city wall, tree-lined boulevards, and one of China\u2019s best museum scenes \u2014 all without the crowds of its bigger neighbors. It rewards travelers who want depth over spectacle.',
    seasonGuide:
      'March-May and October-November are best: 15-24\u00b0C. Autumn is the showpiece season \u2014 the French-plane trees along the boulevards turn gold and the mausoleum steps are lined with color. Summer is hot and humid (one of the \u201coven cities\u201d of the Yangtze), and winter is cold but clear, with quiet museums and the cheapest hotels of the year.',
    budgetNote:
      'A mid-range day runs $50-90: $35-60 for a hotel, $10-18 for meals, and $5-15 for tickets. The Sun Yat-sen Mausoleum is free; Ming Xiaoling is about $10; the city wall and Presidential Palace run $5-10 each. Nanjing is a duck city \u2014 saltwater duck and duck-blood soup are cheap, filling, and excellent.',
    gettingThere:
      'Nanjing South station is the hub: about 1.5 hours from Shanghai, 1.5 hours from Hangzhou, and 3.5-4 hours from Beijing on the high-speed line. The airport is Nanjing Lukou (NKG), about 45 minutes from the city by metro or taxi. The metro covers Purple Mountain, Fuzimiao, and the station end to end.',
    related: ['beijing', 'shanghai'],
    faqs: [
      {
        question: 'How many days should I spend in Nanjing?',
        answer:
          'Two days is the sweet spot: day 1 for Purple Mountain (Sun Yat-sen and Ming Xiaoling mausoleums), day 2 for the Presidential Palace, Fuzimiao, and a walk on the city wall. One day works if you pick only the mausoleums. History readers could stretch to three with the Nanjing Massacre Memorial and museums.',
      },
      {
        question: 'How long is the climb to the Sun Yat-sen Mausoleum?',
        answer:
          'The mausoleum sits at the top of 392 steps \u2014 about 20-30 minutes of steady climbing from the gate, less if you take the shuttle bus partway. Go early (before 9am) to beat the tour groups. The view from the top over the tree-covered city is the payoff, and it is free.',
      },
      {
        question: 'Is Nanjing worth visiting if I am already seeing Beijing and Xi\u2019an?',
        answer:
          'Only if you enjoy layered history. Beijing and Xi\u2019an cover imperial China; Nanjing adds the republican era, the Ming founding, and a different historical texture \u2014 the Presidential Palace and the city wall feel unlike anything in the north. If your itinerary is tight, skip it; if you like museums, it is one of the best value stops on the line.',
      },
      {
        question: 'What is Nanjing famous for food?',
        answer:
          'Duck, in every form: saltwater duck (served cold, the signature), duck-blood vermicelli soup, and roast duck. Xiaolongbao (soup dumplings) are excellent here too. Fuzimiao is the food neighborhood \u2014 go in the evening for the lantern-lit snack streets by the Qinhuai River.',
      },
    ],
  },
  harbin: {
    intro:
      'Harbin is China\u2019s winter city: the world\u2019s largest ice and snow festival, Russian-influenced architecture, and a frozen river you can walk on. It is a completely different version of China \u2014 best visited between late December and late February, and worth the cold.',
    seasonGuide:
      'The ice festival runs roughly late December to late February, and the city is at its peak in January. Temperatures sit at -15\u00b0C to -25\u00b0C, so this is a winter-only destination \u2014 outside the festival months, Harbin is a pleasant but unremarkable northern city. Go in early January for the freshest ice sculptures, or late February for lower prices and smaller crowds.',
    budgetNote:
      'A mid-range day runs $45-85: $30-55 for a hotel, $10-20 for meals, and $10-40 for tickets. The Ice and Snow World is the big expense at about $35-45 \u2014 worth it after dark. Central Street snacks (candied hawthorn, Russian bread, Harbin sausage) are cheap. Winter flights and hotels are the main budget pressure; book early.',
    gettingThere:
      'Harbin Taiping (HRB) airport is about 40 minutes from the city by airport bus or taxi, with direct flights from major Chinese cities. By rail, Harbin West station links Beijing in about 5-6 hours by high-speed train. Taxis are cheap and essential in the cold; the metro covers Central Street to the festival park corridor.',
    related: ['beijing'],
    faqs: [
      {
        question: 'What time should I visit the Ice and Snow World?',
        answer:
          'Arrive around 4-4:30pm: enough daylight to see the sculptures’ detail, then the lights switch on around 5pm and the park transforms. Two hours is the average visit. The weekend evenings are the busiest \u2014 go on a weekday if your dates allow.',
      },
      {
        question: 'How do I dress for -20\u00b0C?',
        answer:
          'Layer in three: thermal base layer, fleece or down mid layer, and a windproof down jacket. Add a hat covering your ears, a scarf over your mouth, insulated boots with thick socks, and glove liners under mittens \u2014 the exposed 10 minutes at the festival park are the worst part. Heat packs for hands and phone are sold at Central Street.',
      },
      {
        question: 'Is Harbin worth visiting outside the ice festival?',
        answer:
          'No \u2014 save it for winter. The Central Street architecture and Saint Sophia Cathedral are charming, but they do not justify a long trip in other seasons. If you are passing through in summer, half a day covers the sights; the city is a winter destination and the festival is the reason to go.',
      },
      {
        question: 'What else is there besides the Ice and Snow World?',
        answer:
          'The full winter circuit: Sun Island for the snow-sculpture festival (daytime), the frozen Songhua River for ice slides and horse-drawn sleighs, Central Street for the architecture and snacks, and Saint Sophia Cathedral for photos. Two nights covers everything; a third is only needed if you add a day trip like the Yabuli ski resort.',
      },
    ],
  },
  kunming: {
    intro:
      'Kunming is the \u201ccity of eternal spring\u201d \u2014 mild year-round, ringed by flower markets and plateau lakes, and the essential gateway to Yunnan\u2019s bigger draws: Dali, Lijiang, and Shangri-La. Most travelers pass through rather than linger, but a day or two here is genuinely pleasant, not a layover to rush.',
    seasonGuide:
      'Kunming is pleasant almost year-round: 8-15\u00b0C in winter and 18-25\u00b0C in summer, with low humidity and strong sun. March-May is the flower season, October-November is clear and mild, and December-February brings red-beaked gulls to Green Lake. The Stone Forest is best on a clear day \u2014 the karst pillars photograph far better in sun than in grey light.',
    budgetNote:
      'Kunming is one of the cheapest cities in this guide: $40-75 per day for a mid-range stay. The Stone Forest is the big ticket at about $25 including transport; everything else is inexpensive. Crossing-the-bridge rice noodles cost $3-5, and the flower market is free to wander. Budget travelers can stay under $35.',
    gettingThere:
      'Kunming Changshui (KMG) airport is a major regional hub with direct flights from most Chinese cities, about 40 minutes from the center by metro. The high-speed rail hub is Kunming South: about 2 hours to Dali, 3 hours to Lijiang, and overnight connections toward Xishuangbanna. The metro and cheap taxis cover the city; the Stone Forest needs a tour or private car.',
    related: ['chengdu', 'lhasa'],
    faqs: [
      {
        question: 'Is Kunming worth a dedicated stop?',
        answer:
          'Yes, as the start or end of a Yunnan trip \u2014 one full day is the sweet spot: the Stone Forest in the morning, Green Lake and Yuantong Temple in the afternoon, and flower-market snacks at night. Beyond a day, most travelers prefer to move on to Dali or Lijiang, where the scenery is more distinctive.',
      },
      {
        question: 'Is the Stone Forest worth the trip?',
        answer:
          'Yes, with the right expectations: it is a day trip (90 minutes each way from the city) to a large karst park of limestone pillars \u2014 not a small photo stop. Budget 3-4 hours inside and go on a clear weekday. The shuttle loops and walkways make it easy; the best views are at the top of the main steps and in the deeper \u201cstone forest\u201d section.',
      },
      {
        question: 'How do I continue from Kunming to Dali and Lijiang?',
        answer:
          'High-speed rail is the standard route: about 2 hours to Dali, then 1 hour more to Lijiang on the same line. Book tickets a day ahead in peak season. Most travelers do Kunming (1 night) \u2192 Dali (2 nights) \u2192 Lijiang (2-3 nights), returning to Kunming to fly out.',
      },
      {
        question: 'What should I eat in Kunming?',
        answer:
          'The signature is crossing-the-bridge rice noodles (guoqiao mixian) \u2014 a hot broth with raw ingredients you add yourself. Wild-mushroom hotpot is the seasonal highlight (June-October), and erkuai rice cakes are the cheap street snack. Yunnan coffee and flower cakes (rose pastries) make good souvenirs.',
      },
    ],
  },
  lhasa: {
    intro:
      'Lhasa is the spiritual heart of Tibet: the Potala Palace above the city, pilgrims circling the Jokhang Temple, and an atmosphere found nowhere else in China. It is a bucket-list destination with real logistics \u2014 altitude, permits, and a slower pace \u2014 and it rewards those who plan for it.',
    seasonGuide:
      'May-June and September-October are the best months: clear skies, 10-20\u00b0C days, and fewer visitors. July-August is the rainy season with afternoon showers, but the air is the year\u2019s cleanest. Winter (November-March) is dry, cold, and sunny, with the lowest prices and fewest travelers \u2014 the Potala is photogenic against winter light. Whenever you go, plan a rest day for acclimatization.',
    budgetNote:
      'Lhasa is not a budget destination: $70-130 per day with mid-range hotels (Tibet\u2019s lodging stock is limited and prices are firm). The Potala Palace ticket is about $25-30 with a timed slot; Jokhang is about $10. The real cost is logistics \u2014 permits, guides, and internal transport for anything beyond the city add $50-100 per day.',
    gettingThere:
      'Most travelers fly into Lhasa Gonggar (LXA), about 1 hour from the city by airport shuttle or taxi. The Qinghai-Tibet railway from Xining (about 21 hours) or Chengdu is the scenic alternative, with permits and tickets arranged by your tour. Inside the city, taxis and the old-town walks cover everything; anything outside Lhasa requires a guide and a private vehicle.',
    related: ['chengdu', 'kunming'],
    faqs: [
      {
        question: 'How do I handle the altitude in Lhasa?',
        answer:
          'Lhasa sits at 3,650 meters, so plan a light first day: arrive, rest, and take only a slow Barkhor walk. Drink water, avoid alcohol and heavy meals, and move slowly for the first 48 hours. Mild headache is common; persistent symptoms or breathing trouble at rest mean descending. Most travelers acclimatize within two days.',
      },
      {
        question: 'Do I need a permit to visit Lhasa as a foreigner?',
        answer:
          'Yes. Foreign travelers need a Tibet Travel Permit, arranged through a licensed agency before arrival \u2014 it is tied to your itinerary and guides, not bookable on your own. You also need a Chinese visa, and additional permits apply beyond Lhasa (for example, for Everest Base Camp or the Mount Kailash area). Book at least two weeks ahead.',
      },
      {
        question: 'How do I book the Potala Palace?',
        answer:
          'Timed entry slots are issued a few days in advance and sell out fast in peak season \u2014 your agency or hotel usually handles this, and foreign visitors typically get slots allocated with their tour. Bring your passport and arrive 30 minutes early. The tour inside takes about 1.5 hours; photos are not allowed in most chapels.',
      },
      {
        question: 'How many days do I need in Lhasa?',
        answer:
          'Three days is the standard minimum: day 1 to land and acclimatize, day 2 for Jokhang and the Sera Monastery debate, day 3 for the Potala and Barkhor. Add a fourth for Norbulingka or a day trip to Yamdrok Lake. Anything less than three days pushes the altitude and the schedule too hard.',
      },
    ],
  },
  'hong-kong': {
    intro:
      'Hong Kong is the easiest introduction to China for a nervous first-timer: English signage, an Octopus card that runs the whole city, world-class food, and a skyline that still stops people mid-street. It also works as a standalone trip \u2014 hiking, islands, markets, and museums fill a week without a single temple complex.',
    seasonGuide:
      'October-December and March-April are the sweet spots: 20-27\u00b0C, lower humidity, and the clearest skyline views. Summer (June-September) is hot, humid, and typhoon season \u2014 flights can be delayed and hiking is miserable. January-February is dry and cool, the cheapest hotel window. The light show at the harbor runs nightly regardless of season.',
    budgetNote:
      'Hong Kong is the most expensive stop in this guide: $85-160 per day, with hotels the main cost ($60-120 for a mid-range room). Food is the bargain \u2014 $2-4 for noodles or dim sum carts \u2014 and the MTR, Star Ferry, and trams are cheap. The Peak Tram is about $8; most museums are free or under $5.',
    gettingThere:
      'Hong Kong International (HKG) has the Airport Express (24 minutes to Central) and is among Asia\u2019s best-connected hubs. By rail, the West Kowloon high-speed station links Shenzhen in about 18 minutes and Guangzhou in about 47 minutes \u2014 the natural bridge to mainland itineraries. Inside the city, the MTR plus Octopus card covers everything; the Star Ferry and ding-ding trams are the scenic extras.',
    related: ['shanghai', 'guilin'],
    faqs: [
      {
        question: 'Do I need a visa for Hong Kong?',
        answer:
          'Most Western passports enter visa-free for 90 days, but check your nationality before booking \u2014 the rules differ from mainland China and are separate from it. If you plan to cross into mainland cities like Shenzhen or Guangzhou, you also need a valid China visa, so carry both documents when using the high-speed rail.',
      },
      {
        question: 'How many days should I spend in Hong Kong?',
        answer:
          'Three nights covers the essentials: Victoria Peak and the harbor on day 1, Lantau (Big Buddha) or a hike on day 2, markets and neighborhoods on day 3. Add a fourth for Macau by ferry or a beach day. Families with Disneyland plans should add one more night.',
      },
      {
        question: 'Is English enough to get around?',
        answer:
          'Yes. English appears on all MTR signs, menus, and official materials, and most service staff in tourist areas speak it. Taxi drivers may not, so keep addresses in Chinese characters on your phone. This is what makes Hong Kong the easiest \u201cfirst step\u201d into China for many travelers.',
      },
      {
        question: 'How do I combine Hong Kong with a mainland China trip?',
        answer:
          'The cleanest pattern is to fly into Hong Kong, spend 2-3 nights, then take the West Kowloon high-speed rail to Guangzhou (47 minutes) and continue north by train \u2014 Guilin and Zhangjiajie are both reachable from Guangzhou\u2019s hub. Alternatively, do Hong Kong last as a relaxed finale after the mainland legs, using Shenzhen\u2019s airport for cheap onward flights.',
      },
    ],
  },
  zhangjiajie: {
    intro:
      'Zhangjiajie is where the floating mountains of Avatar came from: hundreds of quartz-sandstone pillars rising out of forest, reachable by cable cars, elevators, and walking trails that put you right among them. It is China\u2019s most dramatic nature park, and it requires real stamina \u2014 stairs, heights, and weather that changes by the hour.',
    seasonGuide:
      'April-May and September-October are the best months: 15-25\u00b0C with the clearest views of the pillars. The park is famous for mist, which can hide the peaks entirely \u2014 check the forecast and aim for a day after rain, when the mist sits between the pillars rather than on them. Summer is hot and crowded, and winter is cold but quiet, with occasional snow on the summits. Avoid the national holidays at all costs.',
    budgetNote:
      'A mid-range day runs $55-95: $35-60 for a hotel (Wulingyuan is cheaper than the city), $10-15 for meals, and $35-45 for the combined park ticket and shuttle buses \u2014 the ticket is valid for four days, which makes it better value the longer you stay. The Bailong elevator and Tianmen cable car cost extra ($10-15 each). Budget travelers can stay near $45.',
    gettingThere:
      'Zhangjiajie Hehua (DYG) airport has direct flights from major Chinese cities, about 30 minutes from both the city and Wulingyuan. By rail, Zhangjiajie West station links Changsha in about 3 hours and Fenghuang in about 1.5 hours. From the city, Wulingyuan (the park\u2019s gateway town) is about 40 minutes by bus or taxi \u2014 most travelers stay there for park access.',
    related: ['guilin', 'yangshuo'],
    faqs: [
      {
        question: 'How many days do I need in Zhangjiajie?',
        answer:
          'Two full days is the minimum: day 1 for the National Forest Park and Yuanjiajie viewpoints, day 2 for Tianmen Mountain (cable car, skywalk, and the famous stairs). Add a third if you want the Grand Canyon glass bridge or the Golden Whip Stream walk. The four-day park ticket makes a longer stay better value.',
      },
      {
        question: 'National Forest Park or Tianmen Mountain?',
        answer:
          'Both, if you have two days \u2014 they are different parks and both are worth it. The National Forest Park is the bigger, wilder one with the Avatar pillars and the Bailong elevator; Tianmen is a single mountain with the glass skywalk and the 999-step Heavenly Gate. If you only have one day, choose the National Forest Park.',
      },
      {
        question: 'Is the glass bridge worth it?',
        answer:
          'It is a fun 30-45 minute stop, not a destination: a transparent bridge across the Grand Canyon with timed entry slots (book ahead in peak season). Go early to avoid queues. If you are afraid of heights, skip it without guilt \u2014 the viewpoints of the pillars deliver the same thrill for free.',
      },
      {
        question: 'When does the park have the fewest crowds?',
        answer:
          'November-March is the quiet window: fewer tour groups, cheaper hotels, and occasional snow. The trade-off is cold and occasional fog. Within the busy months, go on a weekday, enter through the less popular Wulingyuan gate, and ride the early shuttles before 9am \u2014 the crowds cluster around the main viewpoints by midday.',
      },
    ],
  },
};
