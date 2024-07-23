const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e){
    removeBorder();
    removeShow();
    this.classList.add('tap-border');

    const tabContentItem =document.querySelector(`#${this.id}-content`);

    tabContentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(Item => Item.classList.remove('tap-border'));
}
function removeShow(){
    tabContentItems.forEach(Item => Item.classList.remove('show'));
}
tabItems.forEach(Item => Item.addEventListener('click', selectItem));