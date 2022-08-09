import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="content-container">
          <IonHeader>
            <IonToolbar>
              <IonTitle slot="start">CashBTN</IonTitle>
              <IonButtons slot="start">
                <IonButton>Home</IonButton>
                <IonButton>Plugins</IonButton>
                <IonButton>Developers</IonButton>
              </IonButtons>
              <IonButton color={'medium'}>Get Started</IonButton>
            </IonToolbar>
          </IonHeader>
          <div className="cta">
            <h3>Crypto Payments Made Easy</h3>
            <p>Simple Plugins for Any Platform</p>
            <IonButton color={'tertiary'}>
              Start Accepting Crypto Today!
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
