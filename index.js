$(function () {
    
    
    var myUrl = window.location.protocol + '//' + window.location.hostname;
    var ssoUrl = myUrl.replace('sso-jimmy-xu', 'portal-sso');
    
    document.getElementById('demo').innerHTML = myUrl;
    console.log(ssoUrl)
    $('#signInBtn').click(function () {
        window.location.href = ssoUrl + '/web/signIn.html?redirectUri=' + myUrl;

    });

    $('#signOutBtn').click(function () {
        window.location.href = ssoUrl + '/web/signOut.html?redirectUri=' + myUrl;
    });

    $.ajax({
        url: ssoUrl + '/v2.0/users/me',
        method: 'GET',
        xhrFields: {
            withCredentials: true
        }
    }).done(function (user) {
        $('#signOutBtn').show();
        $('#helloMsg').text('Hello, ' + user.firstName + ' ' + user.lastName + '!');
    }).fail(function (jqXHR, textStatus, errorThrown) {
        
        $('#signInBtn').show();
        $('#helloMsg').text('Hi, please sign in first.');
    });
   
    

});