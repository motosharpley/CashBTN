import {
  IonButton,
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useState } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const [email, setEmail] = useState<string>();
  return (
    <IonPage>
      <IonContent>
        <div className="lander-container">
          <IonHeader id="navHeader">
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
        {/* Plugins Section Start */}
        <div className="plugins-container">
          <IonTitle>Ready to Collect</IonTitle>
          <p>How Will You Charge?</p>
          <IonCard className="tips-card">
            <h3>TipsBTN</h3>
            <p>0.0001eth</p>
            <p>Simple Configurable Tip Button</p>
          </IonCard>
          <IonCard className="tips-card">
            <h3>CashBTN</h3>
            <p>0.0001eth</p>
            <p>The works all your crypto payment needs</p>
          </IonCard>{' '}
          <IonCard className="tips-card">
            <h3>SubBTN</h3>
            <p>0.0001eth</p>
            <p>
              Subscription based sign up button for recurring crypto payments
            </p>
          </IonCard>
        </div>
        {/* Plugins Section End */}
        <div className="subs-container">
          <IonCard>
            <h3>Subscribe to get Promos Insider Early Access Features</h3>
            <p>
              Subscribe to get the latest new feature updates and quick tips for
              easy cash!
            </p>
            <IonInput
              value={email}
              placeholder="Enter your email here"
              onIonChange={(e) => setEmail(e.detail.value!)}
              clearInput
            >
              <IonButton>Subscribe</IonButton>
            </IonInput>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
