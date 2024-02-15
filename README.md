# fast-library-fastify

### Development Technology

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![VSCode](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![Fastify](https://img.shields.io/badge/fastify-202020?style=for-the-badge&logo=fastify&logoColor=white)
![Redis](https://img.shields.io/badge/redis-CC0000.svg?&style=for-the-badge&logo=redis&logoColor=white)
![Eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

## Description

- Development of a simple application, with the aim of studying redis. Listing author and book registrations directly from the cache, without the need to make a call to the database

## Installation

```bash
$ npm install
```

```bash
$ docker compose up -d
```

```bash
$ docker run -d -p 6379:6379 -i -t redis:3.2.5-alpine
```

## Running the app

```bash
# development watch mode
$ npm run dev

# production mode
$ npm run start

# build project
$ npm run build
```

## Note: Don't forget to run the Prisma commands and update the Prostgres container

## Stay in touch

- Author - [Gilberto Medeiros]

## License

[MIT licensed](LICENSE).
