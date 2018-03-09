( function( $ ) {
	$( document ).ready( function() {
		function fcbkbttn_my_page() {
			if ( $( 'input[name="fcbkbttn_my_page"]' ).is( ':checked' ) ) {
				$( '.fcbkbttn_my_page_enabled' ).show();
			} else {
				$( '.fcbkbttn_my_page_enabled' ).hide();
			}
		}
		function fcbkbttn_display_option() {
			if ( $( 'input[name="fcbkbttn_display_option"]:checked' ).val() ==  'custom' ) {
				$( '#fcbkbttn_display_option_custom' ).show();
			} else {
				$( '#fcbkbttn_display_option_custom' ).hide();
			}
		}
		function fcbkbttn_like() {
			if ( $( 'input[name="fcbkbttn_like"]' ).is( ':checked' ) ) {
				$( '.fcbkbttn_like_enabled, .fcbkbttn_share_like_block' ).show();
				fcbkbttn_layout_option();
			} else {
				$( '.fcbkbttn_like_enabled, .fcbkbttn_like_standard_layout' ).hide();
				if( ! $( 'input[name="fcbkbttn_share"]' ).is( ':checked' ) ) {
					$( '.fcbkbttn_share_like_block' ).hide();
				} else {
					$( '.fcbkbttn_share_like_block' ).show();
				}
			}
		}
		function fcbkbttn_share() {
			if ( $( 'input[name="fcbkbttn_share"]' ).is( ':checked' ) ) {
				$( '.fcbkbttn_share_enabled' ).show();
			} else {
				$( '.fcbkbttn_share_enabled' ).hide();
				if( ! $( 'input[name="fcbkbttn_like"]' ).is( ':checked' ) ) {
					$( '.fcbkbttn_share_like_block' ).hide();
				} else {
					$( '.fcbkbttn_share_like_block' ).show();
				}
			}
		}
		function fcbkbttn_layout_option() {
			if ( $( 'input[name="fcbkbttn_like_layout"]:checked' ).val() ==  'standard' ) {
				$( '.fcbkbttn_like_standard_layout' ).show();
			} else {
				$( '.fcbkbttn_like_standard_layout' ).hide();
			}
		}

		fcbkbttn_my_page();
		$( 'input[name="fcbkbttn_my_page"]' ).on( 'change', function() {
			fcbkbttn_my_page();
		} );
		fcbkbttn_display_option();
		$( 'input[name="fcbkbttn_display_option"]' ).on( 'change', function() {
			fcbkbttn_display_option();
		} );
		fcbkbttn_layout_option();
		$( 'input[name="fcbkbttn_like_layout"]' ).on( 'change', function() {
			fcbkbttn_layout_option();
		} );
		fcbkbttn_like();
		$( 'input[name="fcbkbttn_like"]' ).on( 'change', function() {
			fcbkbttn_like();
		} );
		fcbkbttn_share();
		$( 'input[name="fcbkbttn_share"]' ).on( 'change', function() {
			fcbkbttn_share();
		} );

	});
	
} )( jQuery );