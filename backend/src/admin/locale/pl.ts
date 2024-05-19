export const pl = {
  messages: {
    welcomeOnBoard_title: 'Nowy tyluł pulpitu',
    nameRequiredError: 'Nazwa jest wymagana',
  },
  labels: {
    Dashboard: 'Panel główny',
    Category: 'Kategoria',
    Discount: 'Rabat',
    Product: 'Produkt',
    Image: 'Obrazek',
    Model: 'Model',
    Addition: 'Dodatek',
    User: 'Użytkownik',
    Role: 'Rola',
    ProductAddition: 'Dodatki produktów',
    ProductImage: 'Obrazki produktów',
    ProductModel: 'Modele produktów',
    ProductGuaranty: 'Gwarancje produktów',
    AdditionImage: 'Obrazki dodatków',
    Products: 'Produkty',
    Additions: 'Dodatki',
    Users: 'Użytkownicy',
    Duration: 'Czas trwania',
    Guaranty: 'Gwarancja',
  },
  resources: {
    Discount: {
      properties: {
        name: 'Nazwa',
        amount: 'Kwota odsetek',
        from_date: 'Od dnia',
        to_date: 'Do dnia',
        fromDate: 'Od dnia',
        toDate: 'Do dnia',
      },
    },
    Category: {
      properties: {
        name: 'Nazwa',
        parentCategoryId: 'Nadkategoria',
        parentCategory: 'Nadkategoria',
      },
    },
    Product: {
      properties: {
        name: 'Nazwa',
        description: 'Opis',
        price: 'Cena',
        catalogNumber: 'Numer katalogowy',
        category: 'Kategoria',
        discount: 'Rabat',
      },
    },
    Image: {
      properties: {
        name: 'Nazwa',
        file: 'Plik',
      },
    },
    Model: {
      properties: {
        name: 'Nazwa',
        file: 'Plik',
      },
    },
    Addition: {
      properties: {
        name: 'Nazwa',
        price: 'Cena',
        imageId: 'Id obrazku',
        productId: 'Id produktu',
      },
    },
    User: {
      properties: {
        firstName: 'Imię',
        lastName: 'Nazwisko',
        role: 'Rola',
      },
    },
    ProductAddition: {
      properties: {
        name: 'Nazwa',
        productId: 'Id produktu',
        additionId: 'Id dodatku',
        product: 'Produkt',
        addition: 'Dodatek',
      },
    },
    Role: {
      properties: {
        name: 'Nazwa',
      },
    },
    ProductImage: {
      properties: {
        name: 'Nazwa',
        productId: 'Id produktu',
        imageId: 'Id obrazku',
        product: 'Produkt',
        image: 'Obrazek',
      },
    },
    ProductModel: {
      properties: {
        name: 'Nazwa',
        productId: 'Id produktu',
        modelId: 'Id modelu',
        product: 'Produkt',
        model: 'Model',
      },
    },
    ProductGuaranty: {
      properties: {
        name: 'Nazwa',
        productId: 'Id produktu',
        guarantyId: 'Id gwarancji',
        guaranty: 'Gwarancja',
      },
    },
    AdditionImage: {
      properties: {
        name: 'Nazwa',
        image: 'Obrazek',
        addition: 'Dodatek',
        productId: 'Id produktu',
        additionId: 'Id dodatku',
      },
    },
    Guaranty: {
      properties: {
        name: 'Nazwa',
        description: 'Opis',
        price: 'Cena',
        durationId: 'Id czasu trwania',
        imageId: 'Id obrazku',
        period: 'Okres',
        duration: 'Czas trwania',
        image: 'Obrazek',
      },
    },
  },
};
