import { IonButtons, IonContent, IonMenuButton, IonPage } from '@ionic/react';

import { useParams } from 'react-router-dom';

const Checkout: React.FC = () => {
  const params = useParams<{}>();
  console.log(params);

  return (
    <IonPage>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>
      <IonContent>
        <div>
          <h1>Checkout</h1>
          <p>URL Parameter:</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Checkout;
