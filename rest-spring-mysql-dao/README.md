# Notes taking app

## env

Sample values for development environment. The use of direnv with a `.envrc` file is strongly recommended.

```bash
export DOCKER_COMPOSE_RUN_AS_USER="$(id -u):$(id -g)"
export APP_DB_PWD=root
export APP_AUTH_JWT_SECRET=b898c01c67ba512c627db45a439b15c0c7b81411b5757e4fb0246fd6e24fa74710f002430ae5cdabba38a7caad3db854b99695e76dffbfc8239fe2baf52016d7
export MYSQL_ROOT_PASSWORD=root
```

## Building and running

To build the app use:

```bash
docker-compose run build ./gradlew clean build
```

To run the app:

```bash
docker-compose run --service-ports app
```

