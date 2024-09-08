#!/bin/bash
echo "Hello from Bash!"
chmod +x script.sh
curl -X POST http://<glitch-project-url>/api/run-bash -H "Content-Type: application/json" -d '{"command": "bash script.sh"}'

