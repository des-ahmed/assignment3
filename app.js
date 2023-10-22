(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    let ctrl = this;

    ctrl.searchTerm = "";
    ctrl.foundItems = [];
    
    ctrl.search = function() {
      MenuSearchService.getMatchedMenuItems(ctrl.searchTerm).then(function(items) {
        ctrl.foundItems = items;
      });
    };

    ctrl.removeItem = function(index) {
      ctrl.foundItems.splice(index, 1);
    };
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    this.getMatchedMenuItems = function(searchTerm) {
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(function(response) {
        let foundItems = response.data.menu_items.filter(item => item.description.toLowerCase().includes(searchTerm.toLowerCase()));
        return foundItems;
      });
    };
  }

  function FoundItemsDirective() {
    let ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<foundItems',
        onRemove: '&'
      }
    };

    return ddo;
  }

})();
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    let ctrl = this;

    ctrl.searchTerm = "";
    ctrl.foundItems = [];
    ctrl.isLoading = false;  // هنا تم تعريف الخاصية isLoading
    
    ctrl.search = function() {
        ctrl.isLoading = true; // تعيين القيمة إلى true قبل بدء عملية البحث
        MenuSearchService.getMatchedMenuItems(ctrl.searchTerm).then(function(items) {
            ctrl.foundItems = items;
            ctrl.isLoading = false; // تعيين القيمة إلى false بعد الانتهاء من عملية البحث
        });
    };

    ctrl.removeItem = function(index) {
        ctrl.foundItems.splice(index, 1);
    };
}

