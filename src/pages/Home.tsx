import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { cashOutline, cashSharp, ticketOutline } from 'ionicons/icons';
import { useState } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const [email, setEmail] = useState<string>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'medium'} id="navHeader">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonIcon slot="start" ios={cashOutline} md={cashSharp} />
          <IonTitle slot="start">CashBTN</IonTitle>
          <IonButtons>
            <IonButton href="#home">Home</IonButton>
            <IonButton href="#plugins">Plugins</IonButton>
            <IonButton href="#developers">Developers</IonButton>
            <IonButton href="#getStarted">Get Started</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="lander-container" id="Home">
          <IonToolbar color={'medium'} id="navHeader"></IonToolbar>
          <div className="cta">
            <h3>Crypto Payments Made Easy</h3>
            <p>Simple Plugins for Any Platform</p>
            <IonButton color={'tertiary'}>
              Start Accepting Crypto Today!
            </IonButton>
          </div>
        </div>
        {/* Plugins Section Start */}
        <div className="plugins-container" id="plugins">
          <IonGrid>
            <IonTitle>Ready to Collect</IonTitle>
            <p>How Will You Charge?</p>
            <IonRow>
              <IonCol>
                <IonCard className="tips-card">
                  <IonCardHeader>
                    <img src="../assets/light-purple-cube.png" />
                  </IonCardHeader>
                  <IonCardContent>
                    <h3>TipsBTN</h3>
                    <p>0.0001eth</p>
                    <p>Simple Configurable Tip Button</p>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard className="tips-card">
                  <IonCardHeader>
                    <img src="../assets/black-cube.png" />
                  </IonCardHeader>
                  <IonCardContent>
                    <h3>CashBTN</h3>
                    <p>0.0001eth</p>
                    <p>The works all your crypto payment needs</p>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard className="tips-card">
                  <IonCardHeader>
                    <img src="../assets/gold-cube.png" alt="" />
                  </IonCardHeader>
                  <IonCardContent>
                    <h3>SubBTN</h3>
                    <p>0.0001eth</p>
                    <p>
                      Subscription based sign up button for recurring crypto
                      payments
                    </p>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        {/* Plugins Section End */}
        <div className="subs-container" id="developers">
          <IonCard>
            <IonCardHeader>
              <h3>
                Subscribe to get Promos &#38; Insider Early Access Features
              </h3>
              <p>
                Subscribe to get the latest new feature updates and quick tips
                for easy cash!
              </p>
            </IonCardHeader>
            <IonCardContent>
              <IonInput
                value={email}
                placeholder="Enter your email here"
                onIonChange={(e) => setEmail(e.detail.value!)}
                clearInput
              >
                <IonButton>Subscribe</IonButton>
              </IonInput>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
