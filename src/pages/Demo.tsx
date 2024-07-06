import {
  IonButtons,
  IonContent,
  IonMenuButton,
  IonPage,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonHeader,
  IonTitle,
} from '@ionic/react';

const Demo: React.FC = () => {
  return (
    <IonPage>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>
      <IonContent>
        <IonHeader>
          <IonTitle>Demo</IonTitle>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol size="12" size-md="8" size-lg="6">
              {/* standard ecommerce checkout card */}
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Ecommerce</IonCardTitle>
                  <IonCardSubtitle>
                    Example Online Store Checkout
                  </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>
                    This example demonstrates the flow of an online store
                    checkout using a browser extension wallet
                  </p>
                  <IonButton color={'tertiary'} href="/demo-shop">
                    Demo Online Store
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" size-md="8" size-lg="6">
              {/* In Person POS checkout with mobile wallet */}
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>POS</IonCardTitle>
                  <IonCardSubtitle>
                    Example Point of Sale Checkout with Mobile Wallet
                  </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>
                    This example demonstrates the flow of a store checkout using
                    a mobile wallet.
                  </p>
                  <IonButton color={'tertiary'} href="/demo-pos">
                    Demo POS
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" size-md="8" size-lg="6">
              {/* In Person POS checkout with mobile wallet */}
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Blinks</IonCardTitle>
                  <IonCardSubtitle>
                    Example of a Blink Checkout with Browser Wallet
                  </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>
                    This example demonstrates the flow of a blink checkout using
                    a browser extension wallet.
                  </p>
                  <IonButton color={'tertiary'} href="/demo-pos">
                    Demo Blink
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Demo;
