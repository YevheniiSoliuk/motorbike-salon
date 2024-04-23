const list = [
  {
    id: "1",
    photo: "photos/r1250rs/r1250rs-main.png",
    model: "R1250RS",
    price: "60000",
    description: [
      {
        color: [
          {
            name: "Styl Exclusive",
            photo: "darkblue",
            additionPhoto: "./photos/r1250rs/r1250rs-stylexclusive.jfif",
            price: "0",
            active: true,
            default: true,
          },
          {
            name: "Style Sport",
            photo: "grey",
            additionPhoto: "./photos/r1250rs/r1250rs-stylsport.jfif",
            price: "1500",
            active: false,
          },
        ],
        additions: [
          {
            name: "Standardowa gwarancja 2 lata",
            additionPhoto: "./photos/r1250rs/warranty-photo.jfif",
            price: "0",
            active: true,
            default: true,
          },
          {
            name: "Gwarancja + 3 lata",
            additionPhoto: "./photos/r1250rs/warranty-photo.jfif",
            price: "1000",
            active: false,
          },
          {
            name: "Gwarancja + 5 lata",
            additionPhoto: "./photos/r1250rs/warranty-photo.jfif",
            price: "1500,00",
            active: false,
          },
        ],
        description:
          "Szybka podróż czy sportowa przyjemność z pokonywania zakrętów: BMW R 1250 RS oferuje wyjątkowo dynamiczne połączenie sportowego charakteru i wysokiego komfortu podróży, zapewniając w rezultacie szczególne wrażenia podczas jazdy.",
      },
    ],
  },
  {
    id: "2",
    photo: "./photos/m1000rr/m1000rr-main.png",
    model: "M1000RR",
    price: "100000",
    description: [
      {
        color: [
          {
            name: "M Sport",
            photo: "red",
            additionPhoto: "./photos/m1000rr/m1000rr-lightwhite.jfif",
            price: "0,00",
            active: true,
            default: true,
          },
        ],
        additions: [
          {
            name: "Standardowa gwarancja 2 lata",
            additionPhoto: "./photos/m1000rr/warranty-photo.jfif",
            price: "0",
            active: true,
            default: true,
          },
          {
            name: "Gwarancja + 3 lata",
            additionPhoto: "./photos/m1000rr/warranty-photo.jfif",
            price: "1000",
            active: false,
          },
          {
            name: "Gwarancja + 5 lata",
            additionPhoto: "./photos/m1000rr/warranty-photo.jfif",
            price: "1500,00",
            active: false,
          },
        ],

        description:
          "Zdecydowanie przyhamować, zdobyć najwyższy punkt, a następnie bezkompromisowo przyspieszyć na następnej prostej.",
      },
    ],
  },
  {
    id: "3",
    photo: "./photos/f750gs/f750gs-main.jpg",
    model: "F750GS",
    price: "40000",
    description: [
      {
        color: [
          {
            name: "Bialy Light",
            photo: "white",
            additionPhoto: "./photos/f750gs/f750gs-bialylight.jfif",
            price: "0,00",
            active: true,
            default: true,
          },
          {
            name: "Styl Sport",
            photo: "darkblue",
            additionPhoto: "./photos/f750gs/f750gs-stylsport.jfif",
            price: "940",
          },
        ],
        additions: [
          {
            name: "Standardowa gwarancja 2 lata",
            additionPhoto: "./photos/f750gs/warranty-photo.jfif",
            price: "0",
            active: true,
            default: true,
          },
          {
            name: "Gwarancja + 3 lata",
            additionPhoto: "./photos/f750gs/warranty-photo.jfif",
            price: "1000,00",
          },
          {
            name: "Gwarancja + 5 lata",
            additionPhoto: "./photos/f750gs/warranty-photo.jfif",
            price: "1500,00",
          },
        ],

        description:
          "Zrób krótki wypad poza codzienność. Poszerzaj horyzonty. Razem z BMW F 750 GS.",
      },
    ],
  },
];
export default list;
