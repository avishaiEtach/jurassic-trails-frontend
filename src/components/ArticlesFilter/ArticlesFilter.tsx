import { Button, Label } from "react-aria-components";
import { Autocomplete } from "../Autocomplete/Autocomplete";
import { articles } from "../../assets/data/consts";
import { Select } from "../Select/Select";
import { ArticleSortKey, useArticlesFilter } from "./hooks/useArticlesFilter";
import { ArticlesFilterComps } from "./hooks/ArticlesFilterComps";

type ArticlesFilterProps = ReturnType<typeof useArticlesFilter>;

export const ArticlesFilter = (props: ArticlesFilterProps) => {
  const {
    searchedArticle,
    handleClearAutocomplete,
    handleOnSelectionChange,
    handleOnSelectionBlur,
    sort,
    setSort,
    sortMap,
    onClearAllFilter,
    onClearSort,
  } = props;
  const { SortListBox, SortValue } = ArticlesFilterComps();
  return (
    <div className="wrapper">
      <section className="articles-filter-main-container">
        <div className="flex align-center articles-filter-select-container">
          <div>
            <Label data-label-show={!!sort} className={`articles-filter-label`}>
              Sort by
            </Label>
            <Select
              isDisabled={!!searchedArticle}
              items={[]}
              onSelectionChange={(key) => setSort(key as ArticleSortKey)}
              selectValue={SortValue(sort, sortMap)}
              selectedKey={sort}
              CustomListBox={SortListBox(sortMap)}
              onClear={onClearSort}
              className={"articles-filter-sort-container"}
              popoverClassName={"articles-filter-popover-container"}
            />
          </div>
          <Button
            data-show={!!sort}
            isDisabled={!Boolean(sort)}
            onClick={onClearAllFilter}
            className="articles-filter-clear-button"
          >
            clear all
          </Button>
        </div>
        <div className="articles-filter-autocomplete-container">
          <Label
            data-label-show={!!searchedArticle}
            className={`articles-filter-label`}
          >
            Search for article
          </Label>
          <Autocomplete
            value={searchedArticle?.title}
            items={articles}
            displayKey={"title"}
            keyId={"id"}
            onSelectionChange={handleOnSelectionChange}
            onBlur={handleOnSelectionBlur}
            onClose={handleClearAutocomplete}
            buttonShow={!!searchedArticle}
            placeholder="Search for Article..."
          />
        </div>
      </section>
    </div>
  );
};
