import { IonButtons, IonContent, IonMenuButton, IonPage } from '@ionic/react';

const GetStarted: React.FC = () => {
  return (
    <IonPage>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>
      <IonContent>
        <div>
          <h1>Get Started</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default GetStarted;
