// PART 2
// Implement a star rating

// Given a rating X, render the star rating. Be sure to wrap the corresponding
// star within the provided components.

// Using EmptyStar, HalfStar, and FullStar wrappers, pass your star component to
// the corresponding wrappers

// Star decimals equate to:
// ((0, .25]) <- empty star
// ((.25, .75]) <- half star
// ((.75, 1]) <- full star
// where ( means inclusive and ] means exclusive

// Example:
// 0.1 = 5 empty stars
// 4.25 = 4 full stars, 1 half star
// 4.24 = 4 full stars, 1 empty star
// 4.74 = 4 full stars, 1 half star
// 4.75 = 5 full stars

import React from "react";
import styled, { StyledComponent } from "styled-components";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

// Constants
const STARS_MAX = 5;

type StarProps = {
  children?: any;
};
type RatingProps = {
  rating: number;
};
type StyleProps = {};
type StarsProps = {
  rating: number;
};
type TestId = {
  "data-testid": string;
};
const StarWrapper: StyledComponent<
  "div",
  any,
  TestId,
  never
> = styled.div<StyleProps>`
  color: #00cdbe;
`;
const RatingWrapper = styled(StarWrapper)``;

const ContentWrapper: StyledComponent<
  "div",
  any,
  TestId,
  never
> = styled.div<StyleProps>`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const StarsWrapper: StyledComponent<
  "div",
  any,
  TestId,
  never
> = styled.div<StyleProps>`
  display: flex;
  flex-direction: row;
`;

/* Elush- I render the stars in this function by going through a loop. Since
 * I know the `STARS_MAX` is 5, I loop through 5 times and subtract the rating
 * by the loop iteration. When it subtracts the rating to the decimal, I then
 *  check the decimal ranges for full, half, or empty star
 */
function renderStars(rating: number): JSX.Element[] {
  const starsArr = [];

  for (let i = 0; i < STARS_MAX; i++) {
    const ratingNum = rating - i;

    if (ratingNum >= 0.75) {
      starsArr.push(
        <FullStar key={`star-${i}`}>
          <BsStarFill />
        </FullStar>
      );
    } else if (ratingNum >= 0.25 && ratingNum < 0.75) {
      starsArr.push(
        <HalfStar key={`star-${i}`}>
          <BsStarHalf />
        </HalfStar>
      );
    } else {
      starsArr.push(
        <EmptyStar key={`star-${i}`}>
          <BsStar />
        </EmptyStar>
      );
    }
  }

  return starsArr;
}

function Stars({ rating }: StarsProps) {
  return (
    <ContentWrapper data-testid={"content-wrapper"}>
      <StarsWrapper data-testid={"stars-wrapper"}>
        {renderStars(rating)}
      </StarsWrapper>
      <Rating key={"ratings"} rating={rating} />
    </ContentWrapper>
  );
}

// ~~~~~~~~~~~~~~~~ DO NOT MODIFY BELOW THIS LINE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export default Stars;

function EmptyStar({ children, ...rest }: StarProps) {
  return (
    <StarWrapper data-testid="empty-star" {...rest}>
      {children}
    </StarWrapper>
  );
}

function HalfStar({ children, ...rest }: StarProps) {
  return (
    <StarWrapper data-testid="half-star" {...rest}>
      {children}
    </StarWrapper>
  );
}

function FullStar({ children, ...rest }: StarProps) {
  return (
    <StarWrapper data-testid="full-star" {...rest}>
      {children}
    </StarWrapper>
  );
}

function Rating({ rating, ...rest }: RatingProps) {
  return (
    <RatingWrapper data-testid="rating" {...rest}>
      {rating.toFixed(1)}
    </RatingWrapper>
  );
}
