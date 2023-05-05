build:
	docker-compose -f docker-compose.yml -f docker-compose.$(env).yml build --no-cache
dev:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
prod-node:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --no-deps api
test:
	docker compose -f docker-compose.dev.yml run api npm run test
down:
	docker-compose down