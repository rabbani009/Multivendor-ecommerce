import NavItem from "../mainNav/nav-item";

const MegaMenu = (props) => {
  const { menus } = props;

  return (
    <ul className="nav py-2 flex-column mega-menu-root">
       {
         menus &&
          menus.map((menu, index) => {
          const { categoryName, categorySlug, categoryImage, subCategory } = menu['category'];

          return (
              <NavItem catImage={categoryImage} subCategory={subCategory} name={categoryName} slug={categorySlug} key={index} />
          )
        })
       }
    </ul>
  );
};

export default MegaMenu;
