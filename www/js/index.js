var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        // note that this is an event handler so the scope is that of the event
        // so we need to call app.report(), and not this.report()
        app.report('deviceready');
    },
    report: function(id) { 
        console.log("report:" + id);
        // hide the .pending <p> and show the .complete <p>
        document.querySelector('#' + id + ' .pending').className += ' hide';
        var completeElem = document.querySelector('#' + id + ' .complete');
        completeElem.className = completeElem.className.split('hide').join('');
    }
};

$(function(){
	
	function loadBugs() {
		var bugs = $('#bugs ul');
		
		$.ajax({
			type: 'GET',
			url: 'http://www.argosapps.fr/refresh_comment/server/bugs.php?&jsoncallback=?', //jsoncallback très important sinon requête ne va pas marcher
			dataType: 'JSONp',
			timeout: 8000,
			success: function(data) {
				moment.lang('fr'); //format de langue, ici français
    
				$.each(data, function(i,item){
					//durée entre la date de publication et l'instant présent
					var datemoment = moment(item.datefr,"DD-MM-YYYY HH:mm").fromNow();
					bugs.append('<li>'+'De : '+'<b>'+item.pseudo+'</b>');
					bugs.append('Sujet : '+item.titre_com);
					bugs.append('<br/>'+'Date : '+datemoment);
					bugs.append('<br/>'+'Commentaire : '+item.commentaire)
				});
			},
			error: function(data) {
				bugs.append('<li>There was an error loading the bugs');
				alert('Buuuug');
			}
		});
	}
	
	

$('#add-bug form').submit(function(){
                var postData = $(this).serialize();

                $.ajax({
                        type: 'POST',
                        data: postData,
                        url: 'http://www.argosapps.fr/refresh_comment/server/add-bug.php',
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
		


	
	loadBugs();
	
	});
	
	
	$(function(){

	//test avec les notes
	function loadMark() {
		var mark = $('#note-user');
		
		$.ajax({
			type: 'GET',
			url: 'http://www.argosapps.fr/refresh_comment/server/marks.php?&jsoncallback=?',
			dataType: 'JSONp',
			timeout: 8000,
			success: function(data) {
			
				$.each(data, function(i,item){
					mark.append('<p>'+'Ma note : '+'<b>'+item.note+'</b></p>');
				});
			//mark.append('<b>'+note+'</b>');
				//$.each(markuser, function(i,itemnote){
				//	mark.append(itemnote.note);
				//});
				
				
				
				
				//oublier le code ci-dessous...
				
				//il faut d'abord enregistrer les valeurs des id correspondant à chaque option dans les notes (de 1 à 5)
			//	$.each(data, function(i,item){
			//		var value = item.id;
			//	});
			
				//var value = $(this).find('#notes form select option').attr('value');
				//la valeur value de option prend la valeur de l'id enregistré dans la bdd
			
				//tant qu'il ya des valeur value (item), on affecte ces valeurs à la value des "option"
			//	for (i=0;i<value;i++) {
			//		$('#notes form select option').attr('value', value);
				
				
				},
			error: function(data) {
				bugs.append('<li>There was an error loading the bugs');
				alert('Buuuug');
			}
			
		});
	}
	
	//En POST pour entrer la note dans la base :
	$('#notes form').submit(function(){
                var postDatamark = $(this).serialize();

                $.ajax({
                        type: 'POST',
                        data: postDatamark,
                        url: 'http://www.argosapps.fr/refresh_comment/server/addmark.php',
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
	
	
		loadMark();
		
		
		function loadMarkavg() {
		var markavg = $('#note-avg');
		$.ajax({
			type: 'GET',
			url: 'http://www.argosapps.fr/refresh_comment/server/avgnote.php?&jsoncallback=?',
			dataType: 'JSONp',
			timeout: 8000,
			success: function(data) {
				$.each(data, function(i,item){
					markavg.append('<p>La note du lieu : '+item.avgnote+'</p>');
				});
				
				
				},
			error: function(data) {
				markavg.append('<li>There was an error loading the bugs');
				alert('Buuuug');
			}
			
			
		});
	}
	
	loadMarkavg(); //à mettre obligatoirement
	
	//D'abord on enregistre ce qui a été saisi par l'utilisateur dans la barre de recherche
	});

	//RECHERCHE PERSO
	$(function(){

	
	//En POST pour entrer la note dans la base :
	$('#barre-recherche-perso form').submit(function(){
         var findperso = $('#barre-recherche-perso #recherche-perso');
		
		$.ajax({
			type: 'GET',
			url: 'http://www.argosapps.fr/refresh_comment/server/trouve-perso.php?&jsoncallback=?',
			dataType: 'JSONp',
			timeout: 8000,
			success: function(data) {
			
				$.each(data, function(i,item){
					findperso.append('<p>'+'Resultat de votre recherche : '+'<b>'+item.prenom+'</b></p>');
					console.log('Personnage : '+item.prenom);
				});
				
				},
			error: function(data) {
				bugs.append('<li>There was an error loading the bugs');
				alert('Buuuug');
			}
			
		});      
        });
	
	
		
});		


	
	
	
	//test refresh comment
//	$.ajax({
//    type: "GET",
 //   url: "http://www.argosapps.fr/refresh_comment/server/bugs.php?&jsoncallback=?",
 //   data: "confFile = " + id,
  //  success: function GotHere() {
   //     window.location.reload();
 //   }
//});

