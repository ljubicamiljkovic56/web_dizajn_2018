$(document).ready(function(e){
    $('#loginForm').submit(function(e){
        e.preventDefault();

        var username = $("input[name=username]").val().trim();
        var password = $("input[name=password]").val().trim();
        
        if(username == "" || password == ""){
            alert("Prazno korisnicko ime ili loznika.")
        }else {
            $.ajax({
                url: $("#loginForm").attr("action"),
				type: "GET",
                dataType: "json",
                success: function(response){
                    var name = "";
                for(var i=0; i<response.length; i++){
                    var korisnik = response[i];
                    if(korisnik.email == username && korisnik.username == password){
                        name = korisnik.name;
                        break;
                    }
                }
                if(name == ""){
                    alert("Neispravni podaci")
                }else {
                    window.location.replace(
                        "letovi.html?user=" + name
                    );
                }
                },
                error: function(request, error, message) {
                    alert("GRESKA: " + message);
                }
            });
        }
    });
});