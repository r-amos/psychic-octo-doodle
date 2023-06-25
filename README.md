# psychic-octo-doodle

# Docker

Before running ensure the following environment variables are set:

```env
# Application Name, Will Be Used to Prefix Docker Images
APP_NAME=
# Will Be Used As Tag For Image
APP_VERSION=
```

## Development

For convenience a make file has been created to allow the creation, running and tear down of a docker based development environment:

```bash
make build env=dev
make dev
make down
```

The application can be viewed in the browser:
```
http://localhost:8000/
```

MySQL is running on port 3306
```
localhost:3306
```

## Production

Production images can be build with:

```bash
make build env=prod
```
