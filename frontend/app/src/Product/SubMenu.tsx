import "../Sass/SubMenu.scss";
import { useEffect } from "react";

const SubMenu = ({
  content,
  price,
  photoChange,
  cleared,
  clearedFunction,
}: any) => {
  const optionList = content;

  const handleClearContent = () => {
    optionList.map((element: any) => {
      if (!element.default) {
        return (element.active = false);
      } else {
        photoChange(element.photo);
        return (element.active = true);
      }
    });
    clearedFunction(false);
  };
  useEffect(() => {
    if (cleared) {
      handleClearContent();
    }
  });

  const handleClick = (option: any, photo: any, addOrRemove: number) => {
    if (addOrRemove === 1) {
      price(option);
    } else {
      price(option);
    }

    photoChange(photo);
  };

  const handleSelectOption = (selected: any) => {
    optionList.map((element: any) => {
      element.active = false;

      if (element.name === selected.name) {
        element.active = true;
      }

      return element;
    });

    //setOptionList(() => tab);
  };
  if (typeof content === "string") {
    return <>{content}</>;
  } else {
    return (
      <>
        {optionList.map((item: any) => {
          return (
            <div
              className={`box ${!item.active ? "" : "active"}`}
              onClick={() => handleSelectOption(item)}
              key={item.name}
            >
              <div
                className={`optionBox `}
                onClick={() => {
                  handleClick(item.price, item.photo, 1);
                }}
              >
                <img
                  className="optionImg"
                  src={item.additionPhoto}
                  alt="option"
                />
                <span className="optionDescription">
                  {item.name}, koszt {item.price} zl
                </span>
              </div>
            </div>
          );
        })}
      </>
    );
  }
};

export default SubMenu;
