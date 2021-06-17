import { IonItem, IonIcon, IonList, IonLabel } from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";

const techs = [
  {
    title: "Angular",
    icon: "angular",
    description:
      "A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.",
    color: "#E63135",
    url: "/test",
  },
  {
    title: "CSS3",
    icon: "css3",
    description:
      "The latest version of cascading stylesheets - the styling language of the web!",
    color: "#0CA9EA",
    url: "/test2",
  },
];

const List: React.FC = () => {
  return (
    <>
      <IonList>
        {techs.map((tech) => (
          <IonItem button key={Math.random()} routerLink="/test">
            <IonIcon slot="end" icon={chevronForwardOutline}></IonIcon>
            <IonLabel>{tech.title}</IonLabel>
          </IonItem>
        ))}
        ;
      </IonList>
    </>
  );
};

export default List;
