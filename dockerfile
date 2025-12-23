
# Use official Ubuntu image
FROM ubuntu:22.04

# Set environment variables to avoid interactive prompts
ENV DEBIAN_FRONTEND=noninteractive

# Update and install basic packages
RUN apt-get update && apt-get install -y \
    curl \
    vim \
    git \
    && apt-get clean

# Set working directory
WORKDIR /app

# Copy files (optional)
# COPY . .

# Default command
CMD ["/bin/bash"]
