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
} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/',
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    title: 'Plugins',
    url: '/Plugins',
    iosIcon: extensionPuzzleOutline,
    mdIcon: extensionPuzzleSharp,
  },
  {
    title: 'Developers',
    url: '/Developers',
    iosIcon: codeOutline,
    mdIcon: codeSharp,
  },
  {
    title: 'Get Started',
    url: '/GetStarted',
    iosIcon: constructOutline,
    mdIcon: constructSharp,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent color="secondary">
        <IonList id="inbox-list">
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
