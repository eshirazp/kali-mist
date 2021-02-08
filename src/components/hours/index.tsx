// PART 3
// Implement retailer hours
// Using the provided component Time render the business hours for the whole week

// Include day and times for each day of the week
// Monday: Closed
// Tuesday: 8:00am to 8:00pm

import React from "react";
import styled, { StyledComponent } from "styled-components";
import isNil from "lodash/isNil";
import { toProperCapitalizeMult } from "../../utils";

type TestId = {
  "data-testid": string;
};
type StyleProps = {};
type Hours = {
  is_allday: boolean;
  is_closed: boolean;
  open: string;
  close: string;
};
const TimeWrapper: StyledComponent<
  "div",
  any,
  TestId,
  never
> = styled.div<StyleProps>`
  display: inline-block;
`;
const ClosedWrapper = styled(TimeWrapper)``;
const OpenWrapper = styled(TimeWrapper)``;
const DayWrapper = styled(TimeWrapper)``;

const StyledTable: StyledComponent<
  "table",
  any,
  TestId,
  never
> = styled.table<StyleProps>`
  border-spacing: 10px;
`;
const StyledTR: StyledComponent<
  "tr",
  any,
  TestId,
  never
> = styled.tr<StyleProps>`
  text-align: left;
`;
const StyledHeader = styled.th`
  min-width: 30px;
`;

const dateArr: Day[] = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

/* Elush- nest the return of renderHours inside the table and table body */
function DateTable({ children }: { children: any }) {
  return (
    <StyledTable data-testid={"styled-table-hours"}>
      <tbody>{children}</tbody>
    </StyledTable>
  );
}

/* Elush- Nest each day's hours into a table row */
function DateRow({ day, children }: { day: Day; children: any }) {
  return (
    <StyledTR data-testid={`${day}-styled-tr`}>
      <StyledHeader>
        <Day day={toProperCapitalizeMult(day) as Day} />
      </StyledHeader>
      <td>{children}</td>
    </StyledTR>
  );
}

/* Elush- created a fxn similar to `isClosed` for when its open 24/7 */
function OpenAllDay({ day }: { day: Day }) {
  return (
    <OpenWrapper data-testid={`${day}-open-all-day`}>Open 24 Hours</OpenWrapper>
  );
}

/* Elush- grab each day's hours object and check to see which attributes apply
 * before sending to the `DateRow` to be nested inside a table row
 */
function renderHours(day: Day, hours: Partial<Hours>): JSX.Element {
  if (hours?.is_allday) {
    return (
      <DateRow key={day} day={day}>
        <OpenAllDay day={day} />
      </DateRow>
    );
  } else if (hours?.is_closed) {
    return (
      <DateRow key={day} day={day}>
        <Closed day={day} />
      </DateRow>
    );
  } else if (!isNil(hours?.open) && !isNil(hours?.close)) {
    return (
      <DateRow key={day} day={day}>
        <Time time={hours.open} day={day} frame="open" />
        <span>{" to "}</span>
        <Time time={hours.close} day={day} frame="close" />
      </DateRow>
    );
  }

  return (
    <DateRow key={day} day={day}>
      <span>{"Hours not available"}</span>
    </DateRow>
  );
}

function HoursOfBusiness({ businessHours }: { businessHours: any }) {
  return (
    <DateTable>
      {dateArr.map((date: Day) => renderHours(date, businessHours[date]))}
    </DateTable>
  );
}

// ~~~~~~~~~~~~~~~~ DO NOT MODIFY BELOW THIS LINE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export default HoursOfBusiness;
type Day =
  | "sunday"
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday";
type Frame = "open" | "close";

function Day({ day }: { day: Day }) {
  return <DayWrapper data-testid={day}>{day}</DayWrapper>;
}

// use this when is_closed: true is returned
// NOTE: if you are not seeing retailers that return is_closed,
// change your latlng to Los Angeles. Many doctors are closed on the weekend.
function Closed({ day }: { day: Day }) {
  return <ClosedWrapper data-testid={`${day}-closed`}>Closed</ClosedWrapper>;
}

function Time({ time, day, frame }: { time?: string; day: Day; frame: Frame }) {
  return <TimeWrapper data-testid={`${day}-${frame}`}>{time}</TimeWrapper>;
}
