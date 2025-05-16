import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import './Menu.css';

interface AppPage {
  url: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Cashier',
    url: '/Cashier',
  },
  {
    title: 'Slots',
    url: '/Slots',
  },
  {
    title: 'Bingo',
    url: '/Bingo',
  },
  {
    title: 'Craps',
    url: '/Craps',
  },
  {
    title: 'Poker',
    url: '/Poker',
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>CashBTN</IonListHeader>
          <IonNote>Crypto Casino</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? 'selected' : ''
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
