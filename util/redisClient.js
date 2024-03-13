const redis=require('redis')

const client = redis.createClient();
// client.on('error', (err) => console.error('Redis Client Error', err));

client.connect().then(() => {
  console.log('Connected to Redis');
  // Perform basic operations here
});

module.exports=client;