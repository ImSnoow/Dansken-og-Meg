const model ={

  //app-nivå ting
  app: {
      currentPage: 'Home',
      Login: 'User'
  },

  //inputfelter til hver side


  //felles data
  categoriesFurniture: [
      {id: 1, name: 'møbler'},
      {id: 2, name: 'stoler', parentId: 1 },
      {id: 3, name: 'bord', parentId: 1 },

  ],
  categoriesClothes: [
      {id: 1, name: 'klær og tilbehør'},
      {id: 2, name: 'kjoler', parentId: 1 },
      {id: 3, name: 'bukser', parentId: 1 },

  ],

  categoriesKnicknacks: [
    {id: 1, name: 'Småting'},
    {id: 2, name: 'skåler', parentId: 1 },
    {id: 3, name: '', parentId: 1 },

],
  
  products: [
      {
      name : 'Wooden chair',
      price : 600,
      stock: 10,
      description: 'Komfortabel kjøkken stol',
      image:'',
      },
  ],

};
  /*
To spørsmål for hver side:

1. Hvilke data trenger vi i modellen for å kunne vise dette skjermbildet? (query)

2. Hva kan man gjøre på dette skjermbildet - og hvordan skal den endringen lagres i modellen? (command)
*/