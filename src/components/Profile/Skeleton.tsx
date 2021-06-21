import {
  IonGrid,
  IonCol,
  IonRow,
  IonText,
  IonAvatar,
  IonItemDivider,
  IonSkeletonText,
} from "@ionic/react";

function Skeleton() {
  return (
    <IonGrid>
      <IonRow className="ion-align-items-center" style={{ height: "100px" }}>
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
            <IonSkeletonText animated />
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
              <IonSkeletonText
                animated
                style={{
                  width: "200px",
                  height: "24px",
                }}
              />
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
                  <IonSkeletonText
                    animated
                    style={{
                      width: "200px",
                      height: "24px",
                    }}
                  />
                </IonText>
              </IonRow>
              <IonRow>
                <IonText>
                  <IonSkeletonText
                    animated
                    style={{
                      width: "350px",
                      height: "24px",
                    }}
                  />
                </IonText>
              </IonRow>
              <IonRow>
                <IonText>
                  <IonSkeletonText
                    animated
                    style={{
                      width: "200px",
                      height: "24px",
                    }}
                  />
                </IonText>
              </IonRow>
              <IonRow style={{ paddingTop: "10px" }}>
                <IonSkeletonText
                  animated
                  style={{
                    width: "100px",
                    height: "24px",
                  }}
                />
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
            <IonSkeletonText
              animated
              style={{
                width: "64px",
                height: "64px",
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
            <IonSkeletonText
              animated
              style={{
                width: "64px",
                height: "64px",
              }}
            />
          </IonRow>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
}

export default Skeleton;
