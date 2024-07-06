import { IonButtons, IonContent, IonMenuButton, IonPage } from '@ionic/react';

const DemoShop: React.FC = () => {
  return (
    <IonPage>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>
      <IonContent>
        <div>
          <h1>Demo Online Store</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DemoShop;
