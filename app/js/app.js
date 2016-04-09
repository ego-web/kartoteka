
var app = angular.module("switchableGrid", ['ngResource']);

// Создаем и регистрируем новый сервис "instagram"

app.factory('instagram', function($resource){

  return {
    fetchPopular: function(callback){

      // В модуле ngResource уже прописан сервис $resource service.     // Он предназначен для оптимизации работы с AJAX. Здесь мы      
// используем приложения client_id. Если необходимо, вы можете      
// удалить или переместить его по своему усмотрению.

      var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK',{
        client_id: '642176ece1e7445e99244cec26f4de1f'
      },{
      // Этот код запускает функцию, которую мы назвали "fetch".        // Она отправляет JSONP-запрос к URL источника. При отклике на
 //JSONP-запрос к URL-адресам добавляется запись
// =JSON_CALLBACK
        
        fetch:{method:'JSONP'}
      });

      api.fetch(function(response){

      // Вызов функции, которая задает вывод результатов          // обработки данных
        callback(response.data);

      });
    }
  }

});

// Контроллер. Обратите внимание, что в него включен новый сервис instagram, 
// который мы задали ранее. Он будет доступен внутри функции автоматически.

function SwitchableGridController($scope, instagram){

  // Режим вывода по умолчанию. Кликнув на соответствующую кнопку, мы
  // можем выбрать тот вариант вывода, который нам нужен.
  
  $scope.layout = 'grid';

  $scope.pics = [1,2,3,4,5,6,7,8,9];

  // Запускаем сервис instagram и выводим список популярных фото.

  instagram.fetchPopular(function(data){

    // Задаем массив данных (фото), которые будут обработаны Angular 
    // автоматически.
    // $scope.pics = data;
  });
};