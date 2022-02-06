const { ApolloServer, gql } = require('apollo-server');
const { FishData } = require('./SmallFishData');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  enum Season {
    SPRING
    SUMMER
    FALL
    WINTER
  }

  enum Weather {
    SUNNY
    RAINY
  }

  enum Location {
    OCEAN
    RIVER
    NIGHT_MARKET
  }

  type CatchOpportunity {
    season: Season
    weather: [Weather]
    locations: [Location]
    times: [String]
  }

  type Prices {
    normal: Int
    silver: Int
    gold: Int
    iridium: Int
  }

  type Fish {
    name: String
    prices: Prices
    catchOpportunities: [CatchOpportunity]
    catchDifficulty: String
    legendary: Boolean
    bundle: String
  }

  type Query {
    fish: [Fish]
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    fish: () => FishData,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
