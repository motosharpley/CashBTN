import { createAppKit } from '@reown/appkit/react';
import { solana, solanaDevnet } from '@reown/appkit/networks';
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react';

const projectId = '1eb834a27c25cc7627a6cf12824e1382';
const solanaAdapter = new SolanaAdapter();

createAppKit({
  adapters: [solanaAdapter],
  networks: [solana, solanaDevnet],
  projectId,
  metadata: {
    name: 'CashBTN',
    description: 'Crypto Casino App',
    url: 'https://cashbtn.com',
    icons: [],
  },
});

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
