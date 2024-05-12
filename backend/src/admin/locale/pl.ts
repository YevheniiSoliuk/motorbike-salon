export const pl = {
  messages: {
    welcomeOnBoard_title: 'Nowy tyluł pulpitu',
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
    AdditionImage: 'Obrazki dodatków',
    Products: 'Produkty',
    Additions: 'Dodatki',
    Users: 'Użytkownicy',
  },
  resources: {
    Discount: {
      properties: {
        name: 'Nazwa',
        amount: 'Liczba',
        fromDate: 'Od dnia',
        toDate: 'Do dnia',
      },
    },
    Category: {
      properties: {
        name: 'Nazwa',
        parentCategoryId: 'Nadkategoria',
      },
    },
    Product: {
      properties: {
        name: 'Nazwa',
        description: 'Opis',
        price: 'Cena',
        catalogNumber: 'Numer katalogowy',
      },
    },
    Image: {
      properties: {
        name: 'Nazwa',
      },
    },
    Model: {
      properties: {
        name: 'Nazwa',
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
      },
    },
    ProductModel: {
      properties: {
        name: 'Nazwa',
        productId: 'Id produktu',
        modelId: 'Id modelu',
      },
    },
    AdditionImage: {
      properties: {
        name: 'Nazwa',
        productId: 'Id produktu',
        additionId: 'Id dodatku',
      },
    },
  },
};
