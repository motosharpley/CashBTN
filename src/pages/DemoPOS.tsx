import { IonButtons, IonContent, IonMenuButton, IonPage } from '@ionic/react';
import Products from '../components/Products';

const DemoPOS: React.FC = () => {
  return (
    <IonPage>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>
      <IonContent>
        <div>
          <h1>Demo POS</h1>
        </div>
        <Products submitTarget="/checkout" enabled={true} />
      </IonContent>
    </IonPage>
  );
};

export default DemoPOS;
