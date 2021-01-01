docker run -p 80:80 -d "$USER"/node-docker

# Get all active containers
# docker ps

# Print container output
# docker logs <container id>

# Enter the container
# docker exec -it <container id> /bin/bash

# Call container using curl
# curl -i localhost:80
# curl -i localhost:80/owner

# Stop docker container
# docker stop <container id>

# Remove docker container
# docker rm <container id>
