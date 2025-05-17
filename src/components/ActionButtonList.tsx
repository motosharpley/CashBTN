import {
  useDisconnect,
  useAppKit,
  useAppKitAccount,
  useAppKitProvider,
} from '@reown/appkit/react';
import type { Provider } from '@reown/appkit-adapter-solana/react';
import { useAppKitConnection } from '@reown/appkit-adapter-solana/react';
import {
  PublicKey,
  LAMPORTS_PER_SOL,
  Transaction,
  SystemProgram,
} from '@solana/web3.js';

interface ActionButtonListProps {
  sendHash: (hash: string) => void;
  sendSignMsg: (hash: string) => void;
  sendBalance: (balance: string) => void;
}

export const ActionButtonList = ({
  sendHash,
  sendSignMsg,
  sendBalance,
}: ActionButtonListProps) => {
  const { disconnect } = useDisconnect();
  const { open } = useAppKit();
  const { isConnected, address } = useAppKitAccount();
  const { connection } = useAppKitConnection();
  const { walletProvider } = useAppKitProvider<Provider>('solana');
  console.log('walletProvider: ', walletProvider);
  console.log('connection: ', connection);

  // function to send a tx
  const handleSendTx = async () => {
    if (!address || !connection) throw Error('user is disconnected');

    const wallet = new PublicKey(address);
    if (!wallet) throw Error('wallet provider is not available');

    const latestBlockhash = await connection.getLatestBlockhash();

    const transaction = new Transaction({
      feePayer: wallet,
      blockhash: latestBlockhash?.blockhash,
      lastValidBlockHeight: latestBlockhash?.lastValidBlockHeight,
    }).add(
      SystemProgram.transfer({
        fromPubkey: wallet,
        toPubkey: new PublicKey('GecG4KNjCg9Y2mNRB1bqhj3niv4ychPw8Tt2xDvGo7D1'), // destination address
        lamports: LAMPORTS_PER_SOL,
      })
    );

    const sig = await walletProvider.sendTransaction(transaction, connection);

    sendHash(sig);
  };

  // function to sing a msg
  const handleSignMsg = async () => {
    if (!walletProvider || !address) throw Error('user is disconnected');

    const encodedMessage = new TextEncoder().encode('Hello Reown AppKit!');
    const sig = await walletProvider.signMessage(encodedMessage);

    const signatureHex = Buffer.from(sig).toString('hex');
    sendSignMsg(signatureHex);
  };

  // function to get the balance
  const handleGetBalance = async () => {
    if (!address || !connection) throw Error('user is disconnected');

    const wallet = new PublicKey(address);
    const balance = await connection?.getBalance(wallet);
    if (balance !== undefined) {
      sendBalance(`${balance / LAMPORTS_PER_SOL} SOL`);
    } else {
      sendBalance('- SOL');
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
    } catch (error) {
      console.error('Failed to disconnect:', error);
    }
  };
  return (
    <>
      {isConnected ? (
        <div>
          <div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                style={{ borderRadius: '6px', padding: '8px 16px' }}
                onClick={() => open()}
              >
                Open
              </button>
              <button
                style={{ borderRadius: '6px', padding: '8px 16px' }}
                onClick={handleDisconnect}
              >
                Disconnect
              </button>
              <button
                style={{ borderRadius: '6px', padding: '8px 16px' }}
                onClick={handleSignMsg}
              >
                Sign msg
              </button>
              <button
                style={{ borderRadius: '6px', padding: '8px 16px' }}
                onClick={handleSendTx}
              >
                Send tx
              </button>
              <button
                style={{ borderRadius: '6px', padding: '8px 16px' }}
                onClick={handleGetBalance}
              >
                Get Balance
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
