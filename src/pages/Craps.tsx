import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/react';

const Craps: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Craps</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>
        Craps Game Coming Soon!
      </h2>
    </IonContent>
  </IonPage>
);

export default Craps;
