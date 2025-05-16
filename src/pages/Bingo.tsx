import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/react';

const Bingo: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Bingo</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>
        Bingo Game Coming Soon!
      </h2>
    </IonContent>
  </IonPage>
);

export default Bingo;
