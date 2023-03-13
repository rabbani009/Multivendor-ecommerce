import { useState } from "react";
import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";
import { Button, Form } from "react-bootstrap";

const Search = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();

    if (search.length > 0) {
      router.push({
        pathname: '/search',
        query: {
          search: search
        }
      })
    }

  };

  return (
    <Form className="search-form" onSubmit={handleSearch}>
      <div className="input-group custom-input-group">
        <input
          type="text"
          name="query"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          className="form-control input-text"
          placeholder="Search"
        />
        <div className="input-group-append">
          <Button variant="primary" type="submit">
            <FaSearch />
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default Search;
