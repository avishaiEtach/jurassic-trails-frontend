import { ListBox, ListBoxItem } from "react-aria-components";
import ArrowUpIcon from "../../../assets/images/arrow_up.svg?react";
import ArrowDownIcon from "../../../assets/images/arrow_down.svg?react";
import { DinoSortKey, DinoSortKeyMap } from "./useDinosFilter";

export const DinosFilterComps = () => {
  const SortValue = (sort: DinoSortKey | null, sortMap: DinoSortKeyMap) => {
    return sort ? (
      <>
        {sortMap[sort].icon === "up" ? (
          <ArrowUpIcon />
        ) : sortMap[sort].icon === "down" ? (
          <ArrowDownIcon />
        ) : (
          sortMap[sort].icon
        )}
        <span>{sortMap[sort].title}</span>
      </>
    ) : (
      <span>Sort By</span>
    );
  };

  const SortListBox = (sortMap: DinoSortKeyMap) => {
    return (
      <ListBox>
        {Object.entries(sortMap).map(([key, value]) => (
          <ListBoxItem id={key} key={key} className="select-list-box-item">
            {value.icon === "up" ? (
              <ArrowUpIcon />
            ) : value.icon === "down" ? (
              <ArrowDownIcon />
            ) : (
              value.icon
            )}
            <span>{value.title}</span>
          </ListBoxItem>
        ))}
      </ListBox>
    );
  };

  return { SortValue, SortListBox };
};
