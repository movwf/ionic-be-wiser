import {
  IonContent,
  IonHeader,
  IonPage,
  IonGrid,
  IonCol,
  IonRow,
  IonText,
  IonIcon,
  IonTitle,
  IonAvatar,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonItemDivider,
} from "@ionic/react";
import { maleOutline, femaleOutline, openOutline } from "ionicons/icons";
import "./Profiles.css";
import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { get } from "../data/Storage";
import MockData, { emptyMock } from "../data/MockData";
import Skeleton from "../components/Profile/Skeleton";

interface IProfileDetailPage
  extends RouteComponentProps<{
    id: string;
  }> {}

const Test: React.FC<IProfileDetailPage> = ({ match }) => {
  const [data, setData] = useState(emptyMock);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get(match.params.id).then((res) => {
      setData(JSON.parse(res));
      setLoading(false);
    });
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Profile Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {!loading ? (
          <IonGrid>
            <IonRow
              className="ion-align-items-center"
              style={{ height: "100px" }}
            >
              <IonCol
                size="4"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  itemsAlign: "center",
                  justifyContent: "center",
                }}
              >
                <IonAvatar>
                  <img src={data.picture.large} alt="avatar" />
                </IonAvatar>
              </IonCol>
              <IonCol size="8">
                <IonRow>
                  <IonText color="medium" style={{ fontSize: "12px" }}>
                    Name
                  </IonText>
                </IonRow>
                <IonRow>
                  <IonText
                    color="dark"
                    style={{ fontSize: "18px", fontWeight: "bold" }}
                  >
                    {data.name.title +
                      ". " +
                      data.name.first +
                      " " +
                      data.name.last}
                  </IonText>
                </IonRow>
              </IonCol>
            </IonRow>
            <IonItemDivider />
            <IonRow style={{ height: "150px" }}>
              <IonCol>
                <IonRow>
                  <IonText color="medium" style={{ fontSize: "12px" }}>
                    Address
                  </IonText>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonRow>
                      <IonText>
                        {data.location.street.name +
                          ", " +
                          data.location.street.number}
                      </IonText>
                    </IonRow>
                    <IonRow>
                      <IonText>
                        {data.location.city +
                          " " +
                          data.location.state +
                          " " +
                          data.location.country}
                      </IonText>
                    </IonRow>
                    <IonRow>
                      <IonText>
                        {"Lon: " +
                          data.location.coordinates.longitude +
                          " Lat: " +
                          data.location.coordinates.latitude}
                        {/* https://www.google.com/maps/search/?api=1&query=28.6139,77.2090 */}
                        {/* {"{location -> coordinates -> longitude, latitude}"} */}
                      </IonText>
                    </IonRow>
                    <IonRow style={{ paddingTop: "10px" }}>
                      <a
                        href={
                          "https://www.google.com/maps/search/?api=1&query=" +
                          data.location.coordinates.longitude +
                          "," +
                          data.location.coordinates.latitude
                        }
                        style={{ fontSize: "20px" }}
                      >
                        Google Maps
                        <IonIcon
                          icon={openOutline}
                          style={{
                            fontSize: "24px",
                            marginLeft: "5px",
                            position: "absolute",
                          }}
                        ></IonIcon>
                      </a>
                    </IonRow>
                  </IonCol>
                </IonRow>
              </IonCol>
            </IonRow>
            <IonItemDivider />
            <IonRow
              style={{
                height: "120px",
                borderBottom: "2px solid rgba(0,0,0,0.08)",
              }}
            >
              <IonCol>
                <IonRow
                  style={{
                    height: "20%",
                    width: "80px",
                  }}
                >
                  <IonText color="medium" style={{ fontSize: "12px" }}>
                    Gender
                  </IonText>
                </IonRow>
                <IonRow
                  style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "col",
                    itemsAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <IonIcon
                    icon={
                      data.gender === "female" ? femaleOutline : maleOutline
                    }
                    style={{
                      fontSize: "64px",
                    }}
                  />
                </IonRow>
              </IonCol>
              <IonCol
                style={{
                  borderLeft: "2px solid rgba(0,0,0,0.08)",
                  height: "100%",
                }}
              >
                <IonRow
                  style={{
                    height: "20%",
                    width: "80px",
                  }}
                >
                  <IonText color="medium" style={{ fontSize: "12px" }}>
                    Age
                  </IonText>
                </IonRow>
                <IonRow
                  style={{
                    fontSize: "64px",
                    fontWeight: "bold",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "col",
                    itemsAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  {data.dob.age}
                </IonRow>
              </IonCol>
            </IonRow>
          </IonGrid>
        ) : (
          <Skeleton />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Test;
