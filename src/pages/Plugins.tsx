import { IonButtons, IonContent, IonMenuButton, IonPage } from '@ionic/react';

const Plugins: React.FC = () => {
  return (
    <IonPage>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>
      <IonContent>
        <div>
          <h1>Plugins</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Plugins;
