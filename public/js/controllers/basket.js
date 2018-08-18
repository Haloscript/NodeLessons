app.controller('BasketCtrl', BasketCtrl);

BasketCtrl.$inject = ['$http', '$scope', 'local'];

function BasketCtrl($http, $scope, local) {
  var vm = this;
  vm.basket = local.getItem('basket');
  console.log(vm.basket);
    vm.getTotal = function () {
          return vm.basket.reduce(function(total, item) {
            return total + item.price * item.count
          }, 0)
    }
    console.log(vm.getTotal());
}
