import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/react';

const Poker: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Poker</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>
        Poker Game Coming Soon!
      </h2>
    </IonContent>
  </IonPage>
);

export default Poker;
