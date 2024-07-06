import { IonButtons, IonContent, IonMenuButton, IonPage } from '@ionic/react';

const Developers: React.FC = () => {
  return (
    <IonPage>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>
      <IonContent>
        <div>
          <h1>Developers</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Developers;
