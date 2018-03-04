window.navigator.onLine || (console.info('%c error:: %cERR_INTERNET_DISCONNECTED ',
                                         "background: red; \
                                         color: white; font-weight:bold; font-size: 2em; \
                                         font-family: 'helvetica'; padding: 2px 0; \
                                         border-radius: 3px 0 0 3px",
                                         "background: rgba(100,100,100,0.8); color: black; \
                                         font-size: 1.8em; font-family:arial; padding: 3px 0; \
                                         border-radius: 0 3px 3px 0"),
							console.log('%cOffline mode active',
							            "font-weight: bold; font-family:sans-serif; \
							            color: purple;")
							)

$(document).ready(function() {

	const navDownArrow = $('header nav ul li a > span[rel=down-arrow]');
	const navDownAnchor = $('#profileNavToggle');
	const profileNav = $('ul#profileNav');

	function closeNav(event) {
		event.target.className = '';
		navDownArrow.removeClass('active');
		profileNav.fadeOut(200).removeClass('active');
	}

	function openNav(event) {
		event.target.className = 'active';
		navDownArrow.addClass('active');
		profileNav.fadeIn(300).addClass('active');
	}

	navDownAnchor.click(event=>{
		let classname = event.target.className;
		if(classname.indexOf('active') === 0)
		{	
			// class is already present therrefore no need to add again. Turn to remove "active" class
			closeNav(event);
		}else {
			
			// comparison gives -1 therefore "active" class is not present. Turn to add
			openNav(event);
		}
		
	});

	window.onclick = event =>{
		// console.log(event.target.parentNode);
		if(event.target != document.getElementById('profileNavToggle') && event.target != document.getElementById('profileNav'))
		{
			if(event.target.parentNode != document.querySelector('#profileNavToggle') && event.target.parentNode.parentNode != document.querySelector('#profileNav'))
			{
				profileNav.fadeOut(200).removeClass('active');
				navDownArrow.removeClass('active');
				navDownAnchor.removeClass('active');
			}
		}
	}
	
	// 	code for toggle primary navigation
	const primaryNav = $('header nav.primary-nav');
	const primaryNavToggle = $('.toggle-nav-box');
	primaryNavToggle.click(e=>{
		let ct = e.currentTarget;
		ct.className.indexOf('active') > 0 ? ct.classList.remove('active') : ct.classList.add('active');
// 		primaryNav.hasClass('active') ? primaryNav.removeClass('active') : primaryNav.addClass('active');
// 		console.log(primaryNav.hasClass('active'));
		primaryNav.slideToggle(200);
	});
	
	// 	code for pulling drawer and pushing
	const drawer = $('aside.left-container');
	const toggleDrawer = $('.toggle-drawer');
	toggleDrawer.click(e=>{
		let ct = e.currentTarget;
		ct.className.indexOf('active') > 0 ? ct.classList.remove('active') : ct.classList.add('active');
		drawer.hasClass('pull-drawer') ? drawer.removeClass('pull-drawer') : drawer.addClass('pull-drawer');
	});
	
});