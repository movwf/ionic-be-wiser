import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButtons,
} from "@ionic/react";
import List from "../components/PersonList/List";
import { menuOutline } from "ionicons/icons";
import "./Profiles.css";

const Profiles: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonIcon icon={menuOutline} />
          </IonButtons>
          <IonTitle>Profiles</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <List />
      </IonContent>
    </IonPage>
  );
};

export default Profiles;
