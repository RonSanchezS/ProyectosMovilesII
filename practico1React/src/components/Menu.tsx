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
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

// const appPages: AppPage[] = [
//   {
//     title: 'Inbox',
//     url: '/page/Inbox',
//     iosIcon: mailOutline,
//     mdIcon: mailSharp
//   },
//   {
//     title: 'Outbox',
//     url: '/page/Outbox',
//     iosIcon: paperPlaneOutline,
//     mdIcon: paperPlaneSharp
//   },
//   {
//     title: 'Favorites',
//     url: '/page/Favorites',
//     iosIcon: heartOutline,
//     mdIcon: heartSharp
//   },
//   {
//     title: 'Archived',
//     url: '/page/Archived',
//     iosIcon: archiveOutline,
//     mdIcon: archiveSharp
//   },
//   {
//     title: 'Trash',
//     url: '/page/Trash',
//     iosIcon: trashOutline,
//     mdIcon: trashSharp
//   },
//   {
//     title: 'Spam',
//     url: '/page/Spam',
//     iosIcon: warningOutline,
//     mdIcon: warningSharp
//   }
// ];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Side menu</IonListHeader>
          <IonNote>Menu normalito nomás, pongame 100 xfa</IonNote>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
