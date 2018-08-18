app.controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['$http', '$scope', 'local'];

function HomeCtrl($http, $scope, local) {
  var vm = this;

    vm.addToCart = local.addToCart;
    vm.movies = [
      {
        name:'Harry Potter',
        genre:'fantasy',
        year: 2001,
        price:20,
        file_link: ('../../images/1.jpg')
      },
      {
      name:'Harry Potter2',
      genre:'fantasy',
      year: 2002,
      price:12,
      file_link: ('../../images/2.jpg')
    },
      {
      name:'Harry Potter3',
      genre:'fantasy',
      year: 2003,
      price:16,
      file_link: ('../../images/3.jpg')
    },
      {
      name:'Harry Potter4',
      genre:'fantasy',
      year: 2004,
      price:17,
      file_link: ('../../images/4.jpg')
    },
      {
      name:'Harry Potter5',
      genre:'fantasy',
      year: 2005,
      price:19,
      file_link: ('../../images/5.jpg')
    },
      {
      name:'Harry Potter6',
      genre:'fantasy',
      year: 2006,
      price:20,
      file_link: ('../../images/6.jpg')
    },
      {
      name:'Harry Potter7',
      genre:'fantasy',
      year: 2007,
      price:21,
      file_link: ('../../images/7.jpg')
    },
      {
      name:'Harry Potter8',
      genre:'fantasy',
      year: 2010,
      price:40,
      file_link: ('../../images/8.jpg')
    },
    ]
}
