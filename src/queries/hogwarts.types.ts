export interface Head {
  id: string;
  firstName: string;
  lastName: string;
}

export interface Trait {
  id: string;
  name: string;
}

export interface HogwartsHouse {
  id: string;
  name: string;
  houseColours: string;
  founder: string;
  animal: string;
  element: string;
  ghost: string;
  commonRoom: string;
  heads: Head[];
  traits: Trait[];
}

export type HogwartsHouseTableRow = Pick<
  HogwartsHouse,
  "name" | "animal" | "ghost" | "commonRoom"
>;
