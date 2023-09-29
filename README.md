# Spoura
![Thumbnail Image](https://mtlh.vercel.app/assets/spoura_portfolio.e11818e6_Z1HFFFD.webp)

## About
Fully featured ecommerce platform, favourite and buy shoes from the best brands. Payment intergrated with Google Pay API and authentication using JWT sessions.

## Demo
This project is deployed directly onto Vercel. 
[spoura.vercel.app](https://spoura.vercel.app/)

## Technologies
- TailwindCSS
- Typescript
- Svelte (+ SvelteKit)
- Prisma
- PlanetScale (MySQL)
- JWT
- GooglePay API
- Vercel (hosting)

## How to deploy locally
Follow the steps below:
1. Download code from this repository.
2. Install every dependency.
```typescript
npm install
```
3. Create api keys from the following sources:
    `. [PlanetScale](https://app.planetscale.com/)

4. Get all required keys setup in a .env file.
```typescript
DATABASE_URL='planetscalegeneratedconnectionstring'
BASE_URL='http://localhost:3000/'
JWTSECRET="anylengthstring"
```
The BASE_URL must be configured based on which port you are using, when creating a hosted version this must be update to be the final url eg. https://spoura.vercel.app/

5. Generate prisma client and run locally
```typescript
 npx prisma generate
 npm run dev
```

6. Enjoy!
