import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const NavItem = (props) => {
  const { name, slug, subCategory, catImage } = props;

  let genName = (name) => name.replace(/&amp;/g, "&")

  return (
    <li className="nav-item">
      <Link href={`${process.env.NEXT_PUBLIC_OWN_BASE_URL}/category/${slug}`}>
        <a className="nav-link">
          {genName(name)} <FontAwesomeIcon icon={faChevronRight} />

          {
            subCategory.length !== 0 ? (
              <ul className="nav py-2 flex-column dropdown-root">
              {
                subCategory.map((subCat, _index) => {
                  const {subCategoryName, subCategorySlug, subSubCategory} = subCat

                  return (
                      <li className="nav-item" key={_index}>
                        <Link href={`${process.env.NEXT_PUBLIC_OWN_BASE_URL}/category/${subCategorySlug}`}>
                          <a className="nav-link">
                            {genName(subCategoryName)} <FontAwesomeIcon icon={faChevronRight} />

                            {
                              subSubCategory.length !== 0 ? (
                                <ul className="nav py-2 flex-column sub-dropdown-root">
                                  {
                                    subSubCategory.map((subSubCat, __index) => {
                                      const {subSubCategoryName, subSubSategorySlug} = subSubCat

                                      return (
                                        <li className="nav-item" key={__index}>
                                          <Link href={`${process.env.NEXT_PUBLIC_OWN_BASE_URL}/category/${subSubSategorySlug}`}>
                                            <a className="nav-link">
                                              {genName(subSubCategoryName)}
                                            </a>
                                          </Link>
                                        </li>
                                      )
                                    })
                                  }
                                </ul>
                              ) : null
                            }
                          </a>
                        </Link>
                    </li>
                  )
                })
              }

            <div className="cat-img text-center">
                <p className="mb-0 text-end">
                    <Image src={catImage || "https://dummyimage.com/600x400/fff/000"} alt={name} width={600} height={400} layout="responsive" property="true" />
                </p>
            </div>
          </ul>
            ) : null
          }
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
