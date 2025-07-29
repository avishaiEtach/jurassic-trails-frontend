import React, { useEffect, useMemo, useState } from "react";
import { Dinosaur } from "../../../types/dinosaur";
import { dinosaurs } from "../../../assets/data/consts";
import { Key } from "react-aria-components";

export type DinoSortKey =
  | "UPABC"
  | "DWABC"
  | "UPH"
  | "DWH"
  | "UPL"
  | "DWL"
  | "UPW"
  | "DW_W"
  | "DI";

export type DinoSortKeyMap = Record<
  DinoSortKey,
  {
    title: string;
    icon: "up" | "down" | null;
    sortFunc: (a: Dinosaur, b: Dinosaur) => number;
  }
>;

const sortMap: DinoSortKeyMap = {
  UPABC: {
    title: "ABC",
    icon: "up",
    sortFunc: (a, b) => a.name.localeCompare(b.name),
  },
  DWABC: {
    title: "ABC",
    icon: "down",
    sortFunc: (a, b) => b.name.localeCompare(a.name),
  },
  UPH: {
    title: "Height",
    icon: "up",
    sortFunc: (a, b) => a.height - b.height,
  },
  DWH: {
    title: "Height",
    icon: "down",
    sortFunc: (a, b) => b.height - a.height,
  },
  UPL: {
    title: "Length",
    icon: "up",
    sortFunc: (a, b) => a.length - b.length,
  },
  DWL: {
    title: "Length",
    icon: "down",
    sortFunc: (a, b) => b.length - a.length,
  },
  UPW: {
    title: "Weight",
    icon: "up",
    sortFunc: (a, b) => a.weight - b.weight,
  },
  DW_W: {
    title: "Weight",
    icon: "down",
    sortFunc: (a, b) => b.weight - a.weight,
  },
  DI: {
    title: "Diet",
    icon: null,
    sortFunc: (a, b) => a.diet.localeCompare(b.diet),
  },
};

export const useDinosFilter = () => {
  const [searchedDino, setSearchedDino] = useState<null | Dinosaur>(null);
  const [sort, setSort] = useState<DinoSortKey | null>(null);
  const [dietFilter, setDietFilter] = useState<null | Dinosaur["diet"]>(null);
  const [isLoading, setIsLoading] = useState(false);

  const dinosaursMap = useMemo(() => {
    const map = new Map<string, Dinosaur>();
    dinosaurs.forEach((dino) => {
      map.set(dino.id, dino);
    });
    return map;
  }, [dinosaurs]);

  const dinosaursToGrid = useMemo(() => {
    if (searchedDino) {
      return [searchedDino];
    }
    let dinoArray = [...dinosaurs];
    dinoArray =
      sort && sortMap[sort]
        ? dinoArray.sort(sortMap[sort].sortFunc)
        : dinoArray;
    if (dietFilter) {
      return dinoArray.filter((dino) => dino.diet === dietFilter);
    }
    return dinoArray;
  }, [dinosaurs, dietFilter, searchedDino, sort]);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 2000);

    return () => clearTimeout(timeout);
  }, [dinosaursToGrid]);

  const handleOnSelectionChange = (dinoId: Key | null) => {
    if (!dinoId) return setSearchedDino(null);
    const searchedDino = dinosaursMap.get(dinoId as string);
    if (searchedDino) {
      setSearchedDino(searchedDino);
      setDietFilter(null);
      setSort(null);
    } else {
      setSearchedDino(null);
    }
  };

  const handleClearAutocomplete = () => {
    setSearchedDino(null);
  };

  const handleOnSelectionBlur = (
    ev: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    if (ev.target.value === "") {
      setSearchedDino(null);
    }
  };

  const handleSelectDiet = (key: Key) => {
    setDietFilter(key as Dinosaur["diet"]);
    setSearchedDino(null);
  };

  const onClearAllFilter = () => {
    setDietFilter(null);
    setSort(null);
  };

  const onClearDiet = () => {
    setDietFilter(null);
  };

  const onClearSort = () => {
    setSort(null);
  };

  return {
    dinosaursMap,
    searchedDino,
    dietFilter,
    sort,
    sortMap,
    handleOnSelectionChange,
    handleClearAutocomplete,
    handleOnSelectionBlur,
    setSearchedDino,
    setSort,
    setDietFilter,
    dinosaursToGrid,
    handleSelectDiet,
    onClearAllFilter,
    isLoading,
    onClearDiet,
    onClearSort,
  };
};
