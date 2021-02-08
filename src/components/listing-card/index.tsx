// PART 1 - Routing
// Section 3
// Make listing card link to correct retailer url /[retailerType=(dispensaries|deliveries|doctors)]/[wmid]
// ie /deliveries/23456789, /dispensaries/0987654321, /doctors/5678909876
// Import and use react-routers Link component

import React, { useContext } from "react";
import Avatar from "../avatar";
import Stars from "../stars";
import styled, { StyledComponent } from "styled-components";
import get from "lodash.get";
import { Link } from "react-router-dom";
import { RetailerTypeCtx } from "../../context";
import {
  getStateAbbrevation,
  round,
  toProperCapitalizeMult,
} from "../../utils";

type TestId = {
  "data-testid": string;
};
type StyleProps = {};

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

// Elush- Made the listing card responsive with @media rules
const CardWrapper: StyledComponent<
  "div",
  any,
  TestId,
  never
> = styled.div<StyleProps>`
  height: 80px;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  box-shadow: 0 3px 3px #a8a8a8;
  background-color: #fff;
  padding: 10px;
  gap: 10px;

  &:hover {
    box-shadow: 0 5px 5px #a8a8a8;
  }

  @media (max-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const ContentWrapper: StyledComponent<
  "div",
  any,
  TestId,
  never
> = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
`;

const RetailerCity: StyledComponent<
  "div",
  any,
  TestId,
  never
> = styled.div<StyleProps>`
  font-weight: 400;
  margin: 0px;
  padding: 0px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(96, 100, 111);
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-wrap: normal;
`;

const RetailerName = styled.div<StyleProps>`
  margin: 0px;
  padding: 0px;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.00625rem;
  line-height: 1.25rem;
  color: rgb(37, 41, 53);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-wrap: break-word;
  text-align: left;
`;

const RetailerInfo = styled.div<StyleProps>`
  background: rgb(230, 229, 229);
  border-radius: 0.1875rem;
  color: rgb(37, 41, 53);
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.00625rem;
  margin: 0px 0.25rem 0.25rem 0px;
  padding: 0px 0.25rem;
  white-space: nowrap;
`;

const ListingCard = ({ listing }: { listing: any }) => {
  /* Elush- I decided to go with `useContext` here because although prop
   * drilling would not be terrible two levels down, it would be best
   * to avoid component coupling with useContext
   */
  const retailerType = useContext(RetailerTypeCtx);

  return (
    <StyledLink to={`/${retailerType}/${listing.wmid}/`}>
      <CardWrapper data-testid={`${listing.wmid}-card-wrapper`}>
        <Avatar img={`${get(listing, "avatar_image.small_url")}`} />
        <ContentWrapper data-testid={`${listing.wmid}-content-wrapper`}>
          <RetailerCity data-testid={`${listing.wmid}-retailer-city`}>
            {`${toProperCapitalizeMult(listing.city)}, ${getStateAbbrevation(
              listing.state
            )} | ${round(listing.distance, 1)} miles`}
          </RetailerCity>
          <RetailerName> {listing.name} </RetailerName>
          <Stars rating={listing.rating} />
          {listing.best_of_weedmaps && (
            <RetailerInfo>{"Best of Weedmaps"}</RetailerInfo>
          )}
        </ContentWrapper>
      </CardWrapper>
    </StyledLink>
  );
};

export default ListingCard;
