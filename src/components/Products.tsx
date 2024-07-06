import { useRef } from 'react';
import { products } from '../lib/products';
import NumberInput from './NumberInput';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonIcon,
  IonImg,
} from '@ionic/react';
import { cartOutline } from 'ionicons/icons';

interface Props {
  submitTarget: string;
  enabled: boolean;
}

export default function Products({ submitTarget, enabled }: Props) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <IonCard>
      <form method="get" action={submitTarget} ref={formRef}>
        {products.map((product) => {
          return (
            <IonCardContent key={product.id}>
              <IonCardTitle>{product.name}</IonCardTitle>
              <IonCardContent>{product.description}</IonCardContent>
              <IonCardContent>
                <span>${product.priceUsd} USDC</span>
                {product.unitName && <span> /{product.unitName}</span>}
              </IonCardContent>
              <IonCardContent>
                <NumberInput name={product.id} formRef={formRef} />
              </IonCardContent>
            </IonCardContent>
          );
        })}
        <IonCardContent>
          <IonButton color="tertiary" type="submit" disabled={!enabled}>
            <IonIcon icon={cartOutline} slot="start" />
            Checkout
          </IonButton>
        </IonCardContent>
      </form>
    </IonCard>
  );
}
