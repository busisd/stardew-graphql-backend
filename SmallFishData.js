const FishData = [
  {
    name: "Albacore",
    price_normal: 75,
    price_silver: 93,
    price_gold: 112,
    price_iridium: 150,
    catch_opportunities: [
      {
        spring: false,
        summer: false,
        fall: true,
        winter: true,
        rainy: true,
        sunny: true,
        location: "Ocean",
        time: "6 AM - 11 AM",
      },
      {
        spring: false,
        summer: false,
        fall: true,
        winter: true,
        rainy: true,
        sunny: true,
        location: "Ocean",
        time: "6 PM - 2 AM",
      },
    ],
    legendary: false,
    catch_difficulty: "Hard",
    bundle: "No",
    prices: {
      normal: 75,
      silver: 93,
      gold: 112,
      iridium: 150,
    },
  },
  {
    name: "Anchovy",
    price_normal: 30,
    price_silver: 37,
    price_gold: 45,
    price_iridium: 60,
    catch_opportunities: [
      {
        spring: true,
        summer: false,
        fall: true,
        winter: false,
        rainy: true,
        sunny: true,
        location: "Ocean",
        time: "Any",
      },
    ],
    legendary: false,
    catch_difficulty: "Easy",
    bundle: "No",
    prices: {
      normal: 30,
      silver: 37,
      gold: 45,
      iridium: 60,
    },
  },
  {
    name: "Angler",
    price_normal: 900,
    price_silver: 1125,
    price_gold: 1350,
    price_iridium: 1800,
    catch_opportunities: [
      {
        spring: false,
        summer: false,
        fall: true,
        winter: false,
        rainy: true,
        sunny: true,
        location: "River",
        time: "Any",
      },
    ],
    legendary: true,
    catch_difficulty: "Very hard",
    bundle: "No",
    prices: {
      normal: 900,
      silver: 1125,
      gold: 1350,
      iridium: 1800,
    },
  },
  {
    name: "Blob Fish",
    price_normal: 500,
    price_silver: 625,
    price_gold: 750,
    price_iridium: 1000,
    catch_opportunities: [
      {
        spring: false,
        summer: false,
        fall: false,
        winter: true,
        rainy: true,
        sunny: true,
        location: "Night Market",
        time: "5 PM - 2 AM",
      },
    ],
    legendary: false,
    catch_difficulty: "Hard",
    bundle: "No",
    prices: {
      normal: 500,
      silver: 625,
      gold: 750,
      iridium: 1000,
    },
  },
  {
    name: "Bream",
    price_normal: 45,
    price_silver: 56,
    price_gold: 67,
    price_iridium: 90,
    catch_opportunities: [
      {
        spring: true,
        summer: true,
        fall: true,
        winter: true,
        rainy: true,
        sunny: true,
        location: "River",
        time: "6 PM - 2 AM",
      },
    ],
    legendary: false,
    catch_difficulty: "Easy",
    bundle: "Night Fishing Bundle",
    prices: {
      normal: 45,
      silver: 56,
      gold: 67,
      iridium: 90,
    },
  },
];

module.exports = {
  FishData,
};