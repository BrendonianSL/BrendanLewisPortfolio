//Creates A Variable Reference To Our Menu Stack
const menuStack = document.getElementById('menu-stack');

//Creates A Variable Reference For Our Close Menu Button 
const menuExit = document.getElementById('close-button');

//Creates A Reference To The Menu Options We Are Talking About
const mobileMenu = document.getElementById('mobile-menu');

//Creates An Evenet Listener Using Above Variable
menuStack.addEventListener('click', buttonClick);
menuExit.addEventListener('click', buttonClick);

console.log(menuStack);
//Creates A Function For What To Do With Button On Click
function buttonClick() {
    //If The Menu Options Isn't Rendered...
    if(mobileMenu.style.display === "none")
    {
        console.log('clicked on');
        //Render It
        mobileMenu.style.display = "flex";

        //When The Mobile Menu Is Displayed, Disable Scroll
        document.querySelector('body').classList.add('no-scroll');
    }
    else
    {
        console.log('clicked off');
        //If It Is, Unrender It
        mobileMenu.style.display = "none";

        //When Mobile Menu Is Removed, Enable Scroll
        document.querySelector('body').classList.remove('no-scroll');
    }
}
