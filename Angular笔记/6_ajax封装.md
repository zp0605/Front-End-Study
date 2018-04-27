1. angular通过$http服务来提交ajax请求
2. GET请求
  * 方式一
    ```
    $http({
        method: "GET",
        url: "",
      params: myParams
    })
    .success(function (data, status, headers, config) {
       
    })
    .error(function (data, status, headers, config) {
        
    });
    ```
  * 方式二
    ```
    $http.get(url)
        .success(function (data, status, headers, config) {
           
        })
        .error(function (data, status, headers, config) {
            
        });
    ```
3. POST请求
  * 方式一:
    ```
    $http({
        method: "POST",
        url: "",
      data: myData,
    })
    .success(function (data, status, headers, config) {
       
    })
    .error(function (data, status, headers, config) {
        
    });
    ```
  
  * 方式二
    ```
    $http.post(url, data)
      .success(function (data, status, headers, config) {
         
      })
      .error(function (data, status, headers, config) {
          
      });
    ```
  
4. JSONP跨域请求
  ```
  $http.jsonp('http://localhost:3000/node_jsonp?callback=JSON_CALLBACK&username=Tom2&passwod=123abc2')
      .success(function (data) {
        $scope.persons = data;
      })
      .error(function (data) {
        alert(data);
      });
  ```