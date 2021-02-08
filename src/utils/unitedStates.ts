import { usaStates } from "typed-usa-states";
import { toProperCapitalizeMult } from "./string";

/**
 * Get a US State or territory abbrevation by suppling the state's name
 * @param stateName
 */
export const getStateAbbrevation = (name: string): string => {
  const stateName = toProperCapitalizeMult(name);
  const state = usaStates.find((usaState) => usaState.name === stateName);
  return state?.abbreviation || "";
};

/**
 * Get a US State or territory name by suppling the state's abbrevation
 * @param stateAbbv
 */
export const getStateName = (abbv: string): string => {
  const stateAbbv = abbv.toUpperCase();
  const state = usaStates.find(
    (usaState) => usaState.abbreviation === stateAbbv
  );
  return state?.name || "";
};
