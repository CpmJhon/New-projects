npm start
curl http://<glitch-project-url>/api
curl -X POST http://<glitch-project-url>/api/run-lua -H "Content-Type: application/json" -d '{"script": "print(\"Hello from Lua!\")"}'
