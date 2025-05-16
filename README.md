# CashBTN: Crypto Casino App

## Overview

CashBTN is a modern crypto casino app built with Ionic React. It allows users to connect their crypto wallets, buy and use custom casino tokens (Cash Coins), play a variety of casino games, and cash out their winnings in cryptocurrency. The app leverages the Reown Appkit SDK for wallet integration and token management.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/motosharpley/CashBTN.git
   cd CashBTN
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App

To start the development server:

```sh
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173` by default.

### Project Structure

- `src/` - Main source code (components, pages, theme)
- `cypress/` - End-to-end tests
- `public/` - Static assets

## Planned Features

### 1. Crypto Wallet Integration

- Connect user wallets using Reown Appkit SDK
- Secure authentication and wallet management

### 2. Cashier & Cash Coins

- Buy Cash Coins (custom crypto token) with supported cryptocurrencies
- View and manage Cash Coin balance
- Swap/cash out Cash Coins for other cryptocurrencies

### 3. Casino Games

- **Slots**: Classic slot machine gameplay
- **Bingo**: Single player bingo experience
- **Craps**: Dice game with betting options
- **Blackjack**: Play against the dealer
- **Poker**: Single player poker

### 4. Player Balance Tracking

- Real-time tracking of Cash Coin balance across games
- Transaction history and game results

### 5. Security & Fairness

- Provably fair game logic
- Secure handling of wallet and token transactions

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your branch and open a pull request

## License

[MIT](LICENSE)
