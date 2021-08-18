const model ={

  //app-nivå ting
  app: {
      currentPage: 'Home',
      Login: 'User'
  },

  //inputfelter til hver side


  //felles data
  categories: [
      {id: 1, name: 'møbler'},
      {id: 2, name: 'stoler', parentId: 1 },
      {id: 3, name: 'bord', parentId: 2 },

  ],
  categories: [
      {id: 1, name: 'klær og tilbehør'},
      {id: 2, name: 'kjoler', parentId: 1 },
      {id: 3, name: 'bukser', parentId: 2 },

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