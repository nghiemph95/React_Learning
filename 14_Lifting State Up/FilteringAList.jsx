import { useState } from "react";
import { foods, filterItems } from "./data.js";

export default function FilterableList() {
  const [filter, setFilter] = useState("");

  const handleSearchChange = (value) => {
    setFilter(value);
  };
  return (
    <>
      <SearchBar text={filter} onChange={handleSearchChange} />
      <hr />
      <List
        // items={foods}
        onFilter={filterItems(foods, filter)}
      />
    </>
  );
}

function SearchBar({ text, onChange }) {
  // const [query, setQuery] = useState('');

  function handleChange(e) {
    if (!onChange) return;
    onChange(e.target.value);
  }

  return (
    <label>
      Search: <input value={text} onChange={handleChange} />
    </label>
  );
}

function List({ onFilter }) {
  return (
    <table>
      <tbody>
        {onFilter.map((onFilter) => (
          <tr key={onFilter.id}>
            <td>{onFilter.name}</td>
            <td>{onFilter.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
