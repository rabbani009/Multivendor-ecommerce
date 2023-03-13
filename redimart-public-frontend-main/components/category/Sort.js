import { useState } from "react";
import {useRouter} from "next/router";
import { Button } from "react-bootstrap";
import Select from "react-select";
import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = ({ productCount, name }) => {
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState(null);

  // Sorting options
  const options = [
    { value: "lowestPrice", label: "price (lowest)" },
    { value: "highestPrice", label: "price (highest)" },
    { value: "a-z", label: "name (a-z)" },
    { value: "z-a", label: "name (z-a)" },
  ];

  // Handle select
  const handleSelect = (value)=> {
    // Sort by price/ abcd/dcba
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        sortBy: value
      }
    })
    // console.log('check value...', value)
  }

  return (
    <div className="sort-wrapper d-flex align-items-center justify-content-between flex-column flex-md-row">
      <div className="sort-item py-1">
        <small className="text-muted">
          {productCount} items found in {name}
        </small>
      </div>
      <div className="sort-item py-1">
        <div className="sort-body d-flex align-items-center justify-content-between flex-column flex-sm-row">
          <div className="sort-body-item d-flex align-items-center pe-0 pe-sm-2 py-1 py-sm-0">
            <label id="aria-label" htmlFor="sort" className="text-capitalize mb-0 pe-1">
              Sort By:
            </label>
            <Select
              instanceId
              classNamePrefix="react-select"
              isSearchable={false}
              aria-labelledby="aria-label"
              defaultValue={options[0]}
              onChange={(e) => handleSelect(e.value)}
              options={options}
            />
          </div>
          <div className="sort-body-item py-1 py-sm-0">
            <div className="btn-wrapper">
              <Button variant="default" className="p-1 mx-1">
                <BsFillGridFill />
              </Button>
              <Button variant="default" className="p-1 mx-1">
                <BsList />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sort;
