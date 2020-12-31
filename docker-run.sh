docker run -p 4916:8080 -d "$USER"/node-docker

# Get container ID
# docker ps

# Print app output
# docker logs <container id>

# Enter the container
# docker exec -it <container id> /bin/bash

# Now you can call your app using curl
# curl -i localhost:4916

# Kill docker container
# docker kill <container id>
