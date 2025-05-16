import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/react';

const Cashier: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Cashier</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Crypto Cashier</h2>
      {/* Add cashier functionalities here */}
    </IonContent>
  </IonPage>
);

export default Cashier;
