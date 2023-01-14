// module menu
const burgerIcon = document.querySelector("#burger");
const navbarMenu =  document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
	navbarMenu.classList.toggle("is-active");
});


// tabs
const tabs = document.querySelectorAll('.tabs li');
const tabContent = document.querySelectorAll('#tab-content > div');

tabs.foreach(( tab ) => {
	tab.addEventListener('click', () => {
		tabs.foreach(( item ) => item.classList.remove('is-active'));
		tab.classList.add('is-active');

		const target = tab.dataset.target;
		console.log(target);

		tabContent.foreach(( box ) => {
			if (box.getAttribute('id') === target) {
				box.classList.remove('is-hidden');
			}
			box.classList.add('is-hidden');
		});
	});
});
