import { DinosFilterComps } from "./hooks/DinosFilterComps";
import { Button, Label } from "react-aria-components";
import { DinoSortKey, useDinosFilter } from "./hooks/useDinosFilter";
import { Autocomplete } from "../Autocomplete/Autocomplete";
import { dietArray, dinosaurs } from "../../assets/data/consts";
import { Select } from "../Select/Select";

type DinosFilterProps = ReturnType<typeof useDinosFilter>;

export const DinosFilter = (props: DinosFilterProps) => {
  const {
    searchedDino,
    handleClearAutocomplete,
    handleOnSelectionChange,
    handleOnSelectionBlur,
    dietFilter,
    handleSelectDiet,
    sort,
    setSort,
    sortMap,
    onClearAllFilter,
    onClearDiet,
    onClearSort,
  } = props;
  const { SortListBox, SortValue } = DinosFilterComps();
  return (
    <div className="wrapper">
      <section className="dinos-filter-main-container">
        <div className="flex dinos-filter-select-container">
          <div>
            <Label data-label-show={!!sort} className={`dinos-filter-label`}>
              Sort by
            </Label>
            <Select
              isDisabled={!!searchedDino}
              items={dietArray}
              onSelectionChange={(key) => setSort(key as DinoSortKey)}
              selectValue={SortValue(sort, sortMap)}
              selectedKey={sort}
              CustomListBox={SortListBox(sortMap)}
              onClear={onClearSort}
            />
          </div>
          <div>
            <Label
              data-label-show={!!dietFilter}
              className={`dinos-filter-label`}
            >
              Filter By Diet
            </Label>
            <Select
              isDisabled={!!searchedDino}
              items={dietArray}
              onSelectionChange={handleSelectDiet}
              selectValue={
                <div>{dietFilter ? dietFilter : "Choose a diet"}</div>
              }
              selectedKey={dietFilter}
              onClear={onClearDiet}
            />
          </div>
          <Button
            data-show={!!dietFilter || !!sort}
            isDisabled={!Boolean(dietFilter) && !Boolean(sort)}
            onClick={onClearAllFilter}
            className="dino-filter-clear-button"
          >
            clear all
          </Button>
        </div>
        <div className="dino-filter-autocomplete-container">
          <Label
            data-label-show={!!searchedDino}
            className={`dinos-filter-label`}
          >
            Search for Dinosaur
          </Label>
          <Autocomplete
            value={searchedDino?.name}
            items={dinosaurs}
            displayKey={"name"}
            keyId={"id"}
            onSelectionChange={handleOnSelectionChange}
            onBlur={handleOnSelectionBlur}
            onClose={handleClearAutocomplete}
            buttonShow={!!searchedDino}
            placeholder="Search for Dinosaur..."
          />
        </div>
      </section>
    </div>
  );
};
