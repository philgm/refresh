	/*RECHERCHE PERSONNAGES*/
	//test avec les notes

		function loadPerso() {
		var persofind = $('#recherche-perso');
		
		$.ajax({
			type: 'GET',
			url: 'http://www.argosapps.fr/refresh_comment/server/recherche-perso.php?&jsoncallback=?',
			dataType: 'JSONp',
			timeout: 8000,
			success: function(data) {
				alert('hello');
				$.each(data, function(i,item){
					persofind.append('<h2>'+'Résultat de votre recherche : '+'<b>'+item.prenom+' '+item.nom'</b></h2>');
					
					/*récupérer l'id et mettre cette valeur en valeur pour href*/
					
				});
				
				},
			error: function(data) {
				persofind.append('<li>There was an error loading the bugs');
				alert('Buuuug');
			}
			
		});
	}
	
	
		$('#barre-recherche-perso form').submit(function(){
                var postDataperso = $(this).serialize();

                $.ajax({
                        type: 'POST',
                        data: postDataperso,
                        url: 'http://www.argosapps.fr/refresh_comment/server/recherche-perso.php',
                        success: function(data){
                                //do your thing
                                console.log('Bug added!');
                        },
                        error: function(){
                                //do your thing
                                console.log('There was an error');
                        }
                });

                return false;
        });
	
	
	
	loadPerso();