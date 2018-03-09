( function( $ ) {
	$( window ).on( 'load', function() {

	var windowWidth= $( window ).width();
	console.log( windowWidth );

	  if ( windowWidth < 483 ) {
	    //$("._51m-._2pir._51mw").insertBefore($("._51m-.vTop.hCent"));
	    $("._51m-._2pir._51mw").before($("._51m-.vTop.hCent"));    
	  	console.log( 1 );
	  }
	  else {
	    $("._51m-.vTop.hCent").insertBefore($("._51m-._2pir._51mw")); 
	  	console.log( 2 );
	  }

	});
	
} )( jQuery );