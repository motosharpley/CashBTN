import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { cubeOutline, cubeSharp } from 'ionicons/icons';
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
          <IonIcon slot="start" ios={cubeOutline} md={cubeSharp} />
          <IonTitle slot="start">CashBTN</IonTitle>
          {/* <IonButtons>
            <IonButton href="/home">Home</IonButton>
            <IonButton href="/plugins">Plugins</IonButton>
            <IonButton href="/developers">Developers</IonButton>
            <IonButton href="/get-started">Get Started</IonButton>
            <IonButton href="/demo">Demo</IonButton>
          </IonButtons> */}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="lander-container" id="Home">
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
            <p>How Will You Charge?</p>
            <IonRow>
              <IonCol>
                <IonCard className="tips-card">
                  <IonCardHeader>
                    <IonCardTitle>
                      <img src="../assets/light-purple-cube.png" alt="" />
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <h3>TipsBTN</h3>
                    <p>1.00usdc</p>
                    <p>Simple Configurable Tip Button</p>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard className="tips-card">
                  <IonCardHeader>
                    <IonCardTitle>
                      <img src="../assets/black-cube.png" alt="" />
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <h3>CashBTN</h3>
                    <p>2.00usdc</p>
                    <p>The works all your crypto payment needs</p>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard className="tips-card">
                  <IonCardHeader>
                    <IonCardTitle>
                      <img src="../assets/gold-cube.png" alt="" />
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <h3>SubBTN</h3>
                    <p>3.00usdc</p>
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
                Subscribe to get Promos, Insider, &#38; Early Access Features
              </h3>
              <p>
                Get the latest new feature updates and quick tips for easy cash!
              </p>
            </IonCardHeader>
            <IonCardContent>
              <IonInput
                value={email}
                placeholder="Enter your email here"
                onIonChange={(e) => setEmail(e.detail.value!)}
                clearInput
              >
                <IonButton color={'tertiary'}>Subscribe</IonButton>
              </IonInput>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
