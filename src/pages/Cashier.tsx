import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/react';
import { ActionButtonList } from '../components/ActionButtonList';
import { InfoList } from '../components/InfoList';

import { useState } from 'react';

const Cashier: React.FC = () => {
  const [transactionHash, setTransactionHash] = useState<string | undefined>(
    undefined
  );
  const [signedMsg, setSignedMsg] = useState('');
  const [balance, setBalance] = useState('');

  const receiveHash = (hash: string) => {
    setTransactionHash(hash); // Update the state with the transaction hash
  };

  const receiveSignedMsg = (signedMsg: string) => {
    setSignedMsg(signedMsg); // Update the state with the transaction hash
  };

  const receivebalance = (balance: string) => {
    setBalance(balance);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cashier</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>
          Crypto Cashier
        </h2>
        <ActionButtonList
          sendHash={receiveHash}
          sendSignMsg={receiveSignedMsg}
          sendBalance={receivebalance}
        />
        <InfoList
          hash={transactionHash}
          signedMsg={signedMsg}
          balance={balance}
        />
      </IonContent>
    </IonPage>
  );
};

export default Cashier;
