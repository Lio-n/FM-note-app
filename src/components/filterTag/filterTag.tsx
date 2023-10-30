import { useState } from "react";
import TagButton from "../../ui/atoms/buttons/tag.button";

enum Tags {
  "All",
  "Active",
  "Completed",
}

interface FilterTagProps {
  onActiveTag: (tag: Tags) => void;
}

const FilterTag = ({ onActiveTag }: FilterTagProps) => {
  const [activeTag, setActiveTag] = useState<Tags>(Tags.All);

  const handleActiveTag = (tag: Tags) => {
    onActiveTag(tag);
    setActiveTag(tag);
  };

  return (
    <div style={{ display: "flex" }}>
      <TagButton activeText={activeTag === Tags.All} onClick={() => handleActiveTag(Tags.All)} text="All" ariaLabel={"Tag button : Show All notes"} />
      <TagButton
        activeText={activeTag === Tags.Active}
        onClick={() => handleActiveTag(Tags.Active)}
        text="Active"
        ariaLabel={"Tag button : Show Active notes"}
      />
      <TagButton
        activeText={activeTag === Tags.Completed}
        onClick={() => handleActiveTag(Tags.Completed)}
        text="Completed"
        ariaLabel={"Tag button : Show Completed notes"}
      />
    </div>
  );
};

export type { FilterTagProps };
export { Tags };
export default FilterTag;
