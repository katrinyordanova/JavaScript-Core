(function attachEvents () {
    $('#facebook-button').on('click',function () {
        swal({
                title: "Leave this site?",
                text: "If you click 'OK',you will be redirected to https://facebook.com",
                type: "warning",
                showCancelButton: true,
                confirmButtonClass: "btn-primary",
                confirmButtonText: 'OK',
                closeOnConfirm: false
            },
            function(){
                swal("Redirect", "You will be redirected to Facebook in a short notice", "success");
            });
    });

    $('#google-button').on('click',function () {
        swal({
                title: "Leave this site?",
                text: "If you click 'OK',you will be redirected to https://google.com",
                type: "warning",
                showCancelButton: true,
                confirmButtonClass: "btn-primary",
                cancelButtonClass: "btn-default",
                closeOnConfirm: false
            },
            function(){
                swal("Redirect", "You will be redirected to Google in a short notice", "success");
            });
    });

    $('.dropify').dropify();
}());