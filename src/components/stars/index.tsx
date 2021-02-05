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
> = styled.div<StyleProps>``;
const RatingWrapper = styled(StarWrapper)``;

function Stars({ rating }: StarsProps) {
  return (
    <>
      {[
        <FullStar />,
        <FullStar />,
        <FullStar />,
        <HalfStar />,
        <EmptyStar />,
        <Rating rating={rating} />,
      ]}
    </>
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
