import React from "react";
import MySelect from "./ui/select/MySelect";
import MyInput from "./ui/input/MyInput";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Search..."
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Sort By"
        options={[
          { value: "title", name: "Title" },
          { value: "description", name: "Description" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
