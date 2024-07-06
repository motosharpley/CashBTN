import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {
  codeOutline,
  codeSharp,
  constructOutline,
  constructSharp,
  cubeOutline,
  cubeSharp,
  extensionPuzzleOutline,
  extensionPuzzleSharp,
  homeOutline,
  homeSharp,
  playOutline,
  playSharp,
} from 'ionicons/icons';
import './Menu.css';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    title: 'Plugins',
    url: '/plugins',
    iosIcon: extensionPuzzleOutline,
    mdIcon: extensionPuzzleSharp,
  },
  {
    title: 'Developers',
    url: '/developers',
    iosIcon: codeOutline,
    mdIcon: codeSharp,
  },
  {
    title: 'Get Started',
    url: '/get-started',
    iosIcon: constructOutline,
    mdIcon: constructSharp,
  },
  {
    title: 'Demo',
    url: '/demo',
    iosIcon: playOutline,
    mdIcon: playSharp,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent color="secondary">
        <WalletMultiButton />
        <IonList>
          <IonIcon slot="start" ios={cubeOutline} md={cubeSharp} />
          <IonListHeader>CashBTN</IonListHeader>
          <IonNote>Crypto Payments Made Easy</IonNote>
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
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
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
