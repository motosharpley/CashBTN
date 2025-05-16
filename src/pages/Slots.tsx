import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/react';

const Slots: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Slots</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>
        Slots Game Coming Soon!
      </h2>
    </IonContent>
  </IonPage>
);

export default Slots;
