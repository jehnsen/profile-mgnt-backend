import NodeCache from "node-cache";

// node-cache instance, TTL of 1 hour
// 3600 = 1hr , set to 180 for testing purposes only
const cache = new NodeCache({ stdTTL: 180, checkperiod: 600 });

export default cache;
