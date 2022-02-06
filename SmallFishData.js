const FishData = [
  {
    name: "Albacore",
    catchOpportunities: [
      {
        season: "Fall",
        weather: ["Rainy", "Sunny"],
        locations: ["Ocean"],
        times: ["6 AM - 11 AM", "6 PM - 2 AM"],
      },
      {
        season: "Winter",
        weather: ["Rainy", "Sunny"],
        locations: ["Ocean"],
        times: ["6 AM - 11 AM", "6 PM - 2 AM"],
      },
    ],
    legendary: false,
    catchDifficulty: "Hard",
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
    catchOpportunities: [
      {
        season: "Spring",
        weather: ["Rainy", "Sunny"],
        locations: ["Ocean"],
        times: ["Any"],
      },
      {
        season: "Fall",
        weather: ["Rainy", "Sunny"],
        locations: ["Ocean"],
        times: ["Any"],
      },
    ],
    legendary: false,
    catchDifficulty: "Easy",
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
    catchOpportunities: [
      {
        season: "Fall",
        weather: ["Rainy", "Sunny"],
        locations: ["River"],
        times: ["Any"],
      },
    ],
    legendary: true,
    catchDifficulty: "Very hard",
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
    catchOpportunities: [
      {
        season: "Winter",
        weather: ["Rainy", "Sunny"],
        locations: ["NightMarket"],
        times: ["5 PM - 2 AM"],
      },
    ],
    legendary: false,
    catchDifficulty: "Hard",
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
    catchOpportunities: [
      {
        season: "Spring",
        weather: ["Rainy", "Sunny"],
        locations: ["River"],
        times: ["6 PM - 2 AM"],
      },
      {
        season: "Summer",
        weather: ["Rainy", "Sunny"],
        locations: ["River"],
        times: ["6 PM - 2 AM"],
      },
      {
        season: "Fall",
        weather: ["Rainy", "Sunny"],
        locations: ["River"],
        times: ["6 PM - 2 AM"],
      },
      {
        season: "Winter",
        weather: ["Rainy", "Sunny"],
        locations: ["River"],
        times: ["6 PM - 2 AM"],
      },
    ],
    legendary: false,
    catchDifficulty: "Easy",
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
