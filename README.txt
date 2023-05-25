For Challenge 1 run "npm run start-memorizer"
For Challenge 2 run "npm run start-converter"

For Challenge 3 please use the postman environment and collection provided in the repo folder "postmanFiles"
For Challenge 3 please have DockerDesktop installed and run in the terminal:

docker run -p 6379:6379 redis/redis-stack:latest

Followed by:

npm start

Apologies for using an old redis-om package for my local database which meant some types were not used in the put route.
