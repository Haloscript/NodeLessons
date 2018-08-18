app.service('local', localService);

function localService() {
  var vm = this;

  vm.getItem = function (key) {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key))
    } else {
      return []
    }
  }
  vm.setItem = function(item, key) {
    localStorage.setItem(key, JSON.stringify(item))
  }
  vm.addToCart = function (item, key) {
    var basket = vm.getItem('basket');

    var index = basket.findIndex(function(movie) {
      return movie.name == item.name
    })
    if (index !=-1) {
      basket[index].count = (basket[index].count*1)+1;
    }else{
      basket.push({
        name:item.name,
        genre: item.genre,
        year: item.year,
        price: item.price,
        file_link: item.file_link,
        count: 1
      })
    }
    vm.setItem(basket, 'basket')
  }
}
