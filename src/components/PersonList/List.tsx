import { useEffect, useState } from "react";
import { IonItem, IonIcon, IonList, IonLabel } from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";
import {
  createStore,
  appendUserData,
  updateDataListState,
} from "../../data/Storage";
import { getSocketData, socketInit } from "../../data/DataStream";

const List: React.FC = () => {
  const [data, setData] = useState([
    { uuid: "default", name: "Sharon", age: 48 },
  ]);
  useEffect(() => {
    createStore();

    socketInit();

    getSocketData((data: any) => {
      appendUserData(data);
    }, 10000);

    updateDataListState(setData, 5000);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <IonList>
        {data.map((user) => (
          <IonItem button key={Math.random()} routerLink="/test">
            <IonIcon slot="end" icon={chevronForwardOutline}></IonIcon>
            <IonLabel>{user?.name + "," + user?.age}</IonLabel>
          </IonItem>
        ))}
      </IonList>
    </>
  );
};

export default List;
