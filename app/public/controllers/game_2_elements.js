app.controller('game2elementsCtrl', function($scope) {
$('.disabled').prop('disabled',true);
$scope.moveCap = function() {
      $scope.isCap = true;
        $('#cap').css("opacity", "0.5");
        $('#capPlaced').show();
         $scope.moveApple = function() {
          $scope.isApple = true;
            $('#apple').css("opacity", "0.5");
            $('#applePlaced').show();
             $scope.moveMonkey = function() {
              $scope.isMonkey = true;
                $('#monkey').css("opacity", "0.5");
                $('.cap').hide();
                $('#monkeyPlaced').show();
                 $scope.moveBg = function() {
                  $scope.isBg = true;
                    $('.chat_monkey').hide();
                    $('#bgPlaced').show();
                }
            }
        }
    }


    $scope.scoringRule = function() {
        $scope.isScoringRule = true;
        $('.chat_bg').hide();
        $('#scoringRule').css("opacity", "0.5");
        $scope.gameOverRule = function() {
            $scope.isgameOverRule = true;
            setTimeout(function() {
                $('.chat').show();
                $('.disabled').prop('disabled',false);
                $('.disabled').removeClass('disabled');
            }, 1500)

        }
    }

})
