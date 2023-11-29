import redis from 'redis'

const redisClient = redis.createClient();

redisClient.on('erorr', (err) => {
    console.log('Redis client not connected to the server:', err.toString());
});

redisClient.on('connect', () => {
    console.log('Redis client connected to the server');
});

