app.controller('typesOfCharp1Ctrl', function($scope) {
    $('#next_button').prop('disabled', true);

    setTimeout(function() {
        $('#activityHolder,#circle_giff,#circle_star,#Holder,#speechBubblechat,#back_button,#next_button').show();
    }, 1500);


    setTimeout(function() {
        $('#next_button').prop('disabled', false);
        $('#next_button').removeClass('disabled');
    }, 9000)
    // $scope.clicked=function(){
    //  $state.go('flipeffect');
    // }
});
