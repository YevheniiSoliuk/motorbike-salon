import '../Sass/SubMenu.scss';
import { useEffect } from 'react';
import { ProductAddition } from '../api/products';

const SubMenu = ({
  content,
  price,
  photoChange,
  cleared,
  clearedFunction,
}: any) => {
  const optionList = content as ProductAddition[];

  const handleClearContent = () => {
    // optionList.map((element: ProductAddition) => {
    //   if (!element.isDefault) {
    //     return (element.active = false);
    //   } else {
    //     if (element.hasOwnProperty('option')) {
    //       photoChange(element.option);
    //     } else {
    //       photoChange(element.photo);
    //     }
    //     return (element.active = true);
    //   }
    // });
    clearedFunction(false);
  };
  useEffect(() => {
    if (cleared) {
      handleClearContent();
    }
  });

  const handleClick = (
    option: any,
    photo: any,
    addOrRemove: number,
    item: ProductAddition,
  ) => {
    if (addOrRemove === 1) {
      price(option);
    } else {
      price(option);
    }

    photoChange(item);
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

  if (typeof content === 'string') {
    return <>{content}</>;
  } else {
    return (
      <>
        {optionList?.map((item: ProductAddition) => {
          return (
            <div
              className={`box ${!item.isDefault ? '' : 'active'}`}
              onClick={() => handleSelectOption(item)}
              key={item.id}
            >
              <div
                className={`optionBox `}
                onClick={() => {
                  handleClick(
                    item.addition.price,
                    item.addition.images.length
                      ? item.addition.images[0].image.url
                      : '/photos/r1250rs/warranty-photo.jfif',
                    1,
                    item,
                  );
                }}
              >
                <img
                  className='optionImg'
                  src={
                    item.addition.images.length
                      ? item.addition.images[0].image.url
                      : '/photos/r1250rs/warranty-photo.jfif'
                  }
                  alt='option'
                />
                <span className='optionDescription'>
                  {item.addition.name}, koszt {item.addition.price} zł
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
