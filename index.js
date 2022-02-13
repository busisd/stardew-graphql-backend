const { ApolloServer, gql } = require("apollo-server");
// const { FishData } = require("./SmallFishData");
const fs = require("fs");

const FishData = JSON.parse(
  fs.readFileSync("./fishData.json")
);

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Fish {
    id: ID!
    name: String!
    chanceToDart: Int!
    dartingRandomness: String!
    minSize: Int!
    maxSize: Int!
    timeRanges: String!
    weather: String!
    maxDepth: Int!
    spawnMultiplier: Float!
    depthMultiplier: Float!
    fishingLevel: Int!
    price: Int!
    edibility: Int!
    type: String!
    category: Int!
    displayName: String!
    description: String!
    availableSeasons: [String]!
    Summer: [String!]
    Spring: [String!]
    Fall: [String!]
    Winter: [String!]
  }

  type Query {
    fish(name: String, id: ID): [Fish]
    count: Int
  }

  type Mutation {
    incrementCount: Int
  }
`;

let totalCount = 0;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    fish: (parent, args, context, info) => {
      if (args.id) return FishData.filter((fish) => fish.id === args.id);
      return args.name ? FishData.filter((fish) => fish.name === args.name) : FishData;
    },
    count: (parent, args, context, info) => totalCount
  },
  Mutation: {
    incrementCount: () => ++totalCount
  }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
