import { IonButtons, IonContent, IonMenuButton, IonPage } from '@ionic/react';
import { createQR } from '@solana/pay';
import { useEffect, createRef } from 'react';

const cashbtn_API_URL = 'solana:https://api.cashbtn.com/pay';

const Checkout: React.FC = () => {
  const qrRef = createRef<HTMLDivElement>();
  useEffect(() => {
    const qr = createQR(cashbtn_API_URL, 360, 'white', 'black');

    // Set the generated QR code on the QR ref element
    if (qrRef.current) {
      qrRef.current.innerHTML = '';
      qr.append(qrRef.current);
      console.log('appended');
    }
  }, [qrRef]);

  return (
    <IonPage>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>
      <IonContent>
        <div>
          <h1>Scan To Checkout:</h1>
          <div ref={qrRef} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Checkout;
