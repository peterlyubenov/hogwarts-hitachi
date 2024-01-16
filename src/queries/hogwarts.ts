import { useQuery } from "react-query";
import { HogwartsHouse } from "./hogwarts.types";
import { hogwartsApi } from "./api";

const HOGWARTS_HOUSES_KEY = "hogwartsHouses";

export const useHogwartsHousesQuery = () => {
  return useQuery<HogwartsHouse[]>(HOGWARTS_HOUSES_KEY, async () => {
    const response = await hogwartsApi.get<HogwartsHouse[]>("/Houses");
    return response.data;
  });
};
