let menuButton = document.querySelector('.nav__btn');
let navbar = document.querySelector('.header .nav');


//toggling the hidden menu and toggling the menu button class when the menu button is clicked
menuButton.addEventListener("click", () =>{
    menuButton.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

let themeBtn = document.querySelector('.nav__theme');



// switching themes when the theme button is clicked
themeBtn.addEventListener("click", () => {
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
})



// function that handles scrolling to the correct section when a nav link is  clicked
const handleLinks = (event) => {
    if (event.target.classList.contains('nav__link')) {
        event.preventDefault();
        /* getting the data name of the clicked link so we add the active class to it and remove the class from the previous one */
        let linkName = event.target.dataset.link;
        link = document.querySelector(`[data-link="${linkName}"]`);
        let previousLink = document.querySelector(".nav__link.active");
        previousLink.classList.remove('active');
        link.classList.add('active');
        /* selecting the element that the link scroll to by the using  the link data name */
        let selectedSection = document.getElementById(`${linkName}`);
        /* getting the position of the element we want to scroll to */
        let selectedSectionPosition = selectedSection.getBoundingClientRect().top + window.scrollY;
        /* finally scrolling to the element */
        window.scrollTo({
            top: selectedSectionPosition,
            left: 0,
            behavior: "smooth"
        });
    }
}


navbar.addEventListener("click", (e) => handleLinks(e));

//removing the active nav and the nav button class when scrolling (small screens), also increase the indicator width or decrease it to show how much the indicator is far from the end of the page
window.onscroll = () =>{
    menuButton.classList.remove('fa-times');
    navbar.classList.remove('active');

    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY) / maxHeight) * 100;
    document.querySelector(' .scroll-indicator').style.width = percentage + '%';
};