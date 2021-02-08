import React from "react";
import DefaultTemplate from "../templates/default";
import get from "lodash.get";
import styled from "styled-components";
import ListingCards from "../components/listing-cards";
import useLocationRegions from "../hooks/use-location-regions";
import { toProperCapitalizeMult } from "../utils";
import { RetailerTypeCtx } from "../context";
import { AiFillCar, AiFillMedicineBox } from "react-icons/ai";
import { GiVanillaFlower } from "react-icons/gi";

type RetailerType = "delivery" | "dispensary" | "doctor";
type RegionLabelType = { label: string; icon: JSX.Element };
const regionTypes: RetailerType[] = ["delivery", "dispensary", "doctor"];
const regionLabels: {
  delivery: RegionLabelType;
  dispensary: RegionLabelType;
  doctor: RegionLabelType;
} = {
  delivery: { label: "deliveries", icon: <AiFillCar size={30} /> },
  dispensary: { label: "dispensaries", icon: <GiVanillaFlower size={30} /> },
  doctor: { label: "doctors", icon: <AiFillMedicineBox size={30} /> },
};

export const ListingHeader = styled.div`
  margin-top: 30px;
  color: #616161;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

// Elush- Made a call to a string util to ensure proper capitalizations
function getLabel(listings: any, label: string) {
  if (get(listings, "listings").length) {
    return (
      <div key={label}>
        <strong> {toProperCapitalizeMult(label)} </strong>
      </div>
    );
  }
  return <div />;
}

function Home() {
  const {
    // isLoading,
    isError,
    isIdle,
    data,
  } = useLocationRegions();
  const { regions, error } = data || {};

  return (
    <DefaultTemplate>
      <>
        {isError && error.length && <div> {error} </div>}
        {!isIdle && regions && !!Object.entries(regions).length && (
          <React.Fragment>
            {regionTypes.map((retailerType: RetailerType) => (
              <div key={retailerType}>
                <ListingHeader>
                  {regionLabels[retailerType].icon}
                  <h2>
                    {getLabel(
                      regions[retailerType],
                      regionLabels[retailerType].label
                    )}
                  </h2>
                </ListingHeader>
                <RetailerTypeCtx.Provider
                  value={regionLabels[retailerType].label}
                >
                  <ListingCards
                    listings={get(regions[retailerType], "listings")}
                  />
                </RetailerTypeCtx.Provider>
              </div>
            ))}
          </React.Fragment>
        )}
      </>
    </DefaultTemplate>
  );
}

export default Home;
