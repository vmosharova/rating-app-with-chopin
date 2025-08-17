 # Rating App

This is a decentralized rating application built with Next.js and Chopin framework that allows users to submit ratings with blockchain-verified authenticity. The app highlights the perks of [Chopin](https://chopin.sh/docs) - the framework that allows "classic" Next.js apps to become Web3 apps that are verifiable on-chain. The framework injects an interceptor in front of the server using the existing infrastructure. It enables automatic wallet session management across the application.

## Requirements
- Node.js ^20
- pnpm ^10

## Start
- Clone this repository
- Install dependencies with `pnpm install`

## Running the app

1. Run `npx chopd init` - this command initializes the Chopin framework and sets up the necessary configuration. 

2. Then run `pnpm serve` (executes `pnpx chopd`) - it will start the Chopin proxy server which intercepts requests. It will start the proxy server on port 4000 instead of Next.js's 3000.

**! Important:** Do not run the app with `pnpm dev` - this will start the app on port 3000, and in this case the benefits of Chopin will not be provided. Run it only with `pnpm serve` (`pnpx chopd`) to allow the wallet authentication to work correctly.

3. Open `http://localhost:4000/` to open the app. Click the `Login` button to log in with a wallet. Write a title and description, then submit it by clicking the `Submit` button. The response from the server will give the notarized result - you can check it in the `Network` tab in the browser DevTools.


## Architecture and core concepts

- `middleware.ts` is used to intercept requests
- In the `< /Navbar>` component the Chopin `address` (`useAddress` hook) and `login` logic are used, providing a blockchain-native identity instead of a classic login with email and password
- In `src/app/api/ratings/route.ts` we get the wallet address. Chopin services intercept the requests and handle oracle functions for non-deterministic data
- Oracle module (in `src/app/api/ratings/route.ts`) creates a blockchain proof of captured data. It also captures non-deterministic values (like datetime) and stores them alongside the requests on Celestia for consistency.

#### Frontend (Next.js)
- React components with wallet integration via Chopin hooks
- Navbar component handles wallet connection using `useAddress` hook
- Rating submission form captures user input
- Automatic wallet session management

#### Backend (API Routes)
- `/api/ratings/route.ts` - Main API endpoint for rating submissions
- Receives wallet address from authenticated requests
- Integrates Oracle module for non-deterministic data handling


This demo does not implement any actual rollup logic (aggregating multiple data entries into rollup blocks or submitting rollups to Celestia). It simply creates a blockchain-based notarization of each individual request. This project is a part of [Camp Mamo](https://www.encodeclub.com/programmes/camp-mamo), Celestia builder bootcamp.