// PART 1
// Section 5
// Given the URL structure of /[retailerType]/[wmid]
// parse the wmid from the url and pass it to the useRetailer hook

// PART 4
// Finish the retailers page to responsively display:
// Feel free to render information that you would find useful when researching a retailer
// Feel free to style the page as you see fit so that it looks nice on mobile
// Be sure to include name, stars, and hours at minimum

import React from "react";
import DefaultTemplate from "../templates/default";
import useRetailer from "../hooks/use-retailer";
import Stars from "../components/stars";
import Avatar from "../components/avatar";
import styled, { StyledComponent } from "styled-components";
import HoursOfBusiness from "../components/hours";
import { useParams } from "react-router-dom";
import isNil from "lodash/isNil";
import { MdPhone, MdEmail } from "react-icons/md";
import { IoCarSharp, IoStorefrontSharp } from "react-icons/io5";
import { toProperCapitalizeMult } from "../utils";

type TestId = {
  "data-testid": string;
};
type StyleProps = {};
/* Elush- I make the business name text larger when the screen gets smaller
 * since it now falls under the Retailer image
 */
const BusinessNameWrapper: StyledComponent<
  "div",
  any,
  TestId,
  never
> = styled.div<StyleProps>`
  color: rgb(37, 41, 53);
  font-weight: 700;
  word-break: break-word;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    letter-spacing: -0.003125rem;
    line-height: 1.75rem;
    text-align: center;
  }
`;

const RetailerWrapper: StyledComponent<
  "div",
  any,
  TestId,
  never
> = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

/* Elush- I make the flex direction change to column since the width of a
 * mobile device is not as large
 */
const ContentWrapper: StyledComponent<
  "div",
  any,
  TestId,
  never
> = styled.div<StyleProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

/* Elush- Since everything sits on top of one another, I center the contents
 * for a smaller screen
 */
const RetailerInfo: StyledComponent<
  "div",
  any,
  TestId,
  never
> = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 140px;
  max-width: 400px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const StyledRating: StyledComponent<
  "div",
  any,
  TestId,
  never
> = styled.div<StyleProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: left;
`;

const SpecialWrapper: StyledComponent<
  "div",
  any,
  TestId,
  never
> = styled.div<StyleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const SpecialFeature: StyledComponent<
  "div",
  any,
  TestId,
  never
> = styled.div<StyleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  font-weight: 400;
  color: rgb(37, 41, 53);
`;

const ContactWrapper: StyledComponent<
  "div",
  any,
  TestId,
  never
> = styled.div<StyleProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

const StyledContact = styled.button`
  border-radius: 0.1875rem;
  border: 0.0625rem solid rgb(165, 169, 177);
  padding: 0px 1rem;
  display: flex;
  align-items: center;
  place-content: center;
  gap: 10px;
  font-weight: 600;
  font-size: 0.875rem;
  height: 2.5rem;
  color: rgb(96, 100, 111);
  text-decoration: none;
`;

const DivText = styled.div`
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
  text-align: left;
`;

const HoursWrapper: StyledComponent<
  "div",
  any,
  TestId,
  never
> = styled.div<StyleProps>`
  display: flex;
  justify-content: center;
`;

/* Elush- There is more that can be done here, but I have just scratched the
 * surface. I just acquire the Retailer's services, but so much more can be
 * checked, such as License info, etc such as in weedmaps.com
 */
function SpecialFeatures(
  name: string,
  retailerServices: string[]
): JSX.Element | null {
  const servicesIcons: JSX.Element[] = retailerServices.map(
    (service: string) => {
      if (service === "delivery") {
        return (
          <SpecialFeature
            key={`${name}-${service}`}
            data-testid={`${name}-${service}`}
          >
            <IoCarSharp />
            {toProperCapitalizeMult(service)}
          </SpecialFeature>
        );
      } else {
        return (
          <SpecialFeature
            key={`${name}-${service}`}
            data-testid={`${name}-${service}`}
          >
            <IoStorefrontSharp size={10} />
            {toProperCapitalizeMult(service)}
          </SpecialFeature>
        );
      }
    }
  );

  return (
    <SpecialWrapper data-testid={`${name}-special-wrapper`}>
      {servicesIcons}
    </SpecialWrapper>
  );
}

/* Elush- I grab the Retailer's phone number and email address and wrap them
 * around a common button. They then are wrapped in a flex box to ensure they
 * are spread and positioned properly. The buttons also work in that if you
 * clicked them, they will call or email.
 */
function ContactInfo(phone_number: string, email: string): JSX.Element {
  return (
    <ContactWrapper data-testid="contact-wrapper">
      {!isNil(phone_number) && (
        <StyledContact as="a" href={`tel:${phone_number}`}>
          <MdPhone />
          {"Call"}
        </StyledContact>
      )}
      {!isNil(email) && (
        <StyledContact as="a" href={`mailto:${email}`}>
          <MdEmail />
          {"Email"}
        </StyledContact>
      )}
    </ContactWrapper>
  );
}

function Retailer() {
  // Elush- useParams is generic so I tell TS the contract I am expecting
  const { wmid } = useParams<{ wmid: string }>();
  const { data, isLoading, isError } = useRetailer(wmid);

  const {
    rating = 0,
    name = "",
    business_hours = {},
    reviews_count = 0,
    city = "",
    state = "",
    email = "",
    phone_number = "",
    retailer_services = [],
    avatar_image = {
      original_url: "",
    },
  } = data?.listing || {};

  /* Elush- did a small check that if data.listing is empty even after
   * isLoading finished, just show a simple message
   */
  return (
    <DefaultTemplate>
      <>
        {isError && <div> {isError} </div>}
        {isLoading && <div>loading</div>}
        {isNil(data?.listing) && !isLoading ? (
          <div>{"Retailer not found"}</div>
        ) : (
          <RetailerWrapper data-testid="retailer-wrapper">
            <ContentWrapper data-testid="content-wrapper">
              <Avatar
                height={"140px"}
                width={"140px"}
                img={avatar_image.original_url}
              />
              <RetailerInfo data-testid={`${name}-retailer-info`}>
                <BusinessName name={name} />
                <StyledRating data-testid="styled-rating">
                  <Stars rating={rating} />
                  <DivText>{`(${reviews_count})`}</DivText>
                </StyledRating>
                <DivText>{`${city}, ${state}`}</DivText>
                {SpecialFeatures(name, retailer_services)}
                {ContactInfo(phone_number, email)}
              </RetailerInfo>
            </ContentWrapper>
            <HoursWrapper data-testid={"hours-wrapper"}>
              {business_hours && (
                <HoursOfBusiness businessHours={business_hours} />
              )}
            </HoursWrapper>
          </RetailerWrapper>
        )}
      </>
    </DefaultTemplate>
  );
}

// ~~~~~~~~~~~~~~~~ DO NOT MODIFY BELOW THIS LINE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function BusinessName({ name }: { name: string }) {
  return (
    <BusinessNameWrapper data-testid="business-name">
      {name}
    </BusinessNameWrapper>
  );
}

export default Retailer;
