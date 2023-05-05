build:
	docker-compose -f docker-compose.yml -f docker-compose.$(env).yml build --no-cache
dev:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
test:
	docker compose -f docker-compose.dev.yml run api npm run test
down:
	docker-compose down