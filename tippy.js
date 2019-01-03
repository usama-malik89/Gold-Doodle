//small library Tippy.js to create better looking popovers
function TippyPopup(){
    //creates better looking popovers when hovering over the tools
    tippy('.sideBarItem', {
        arrow: true,
        placement: 'left',
        distance: 15,
        followCursor: true,
        size: 'large'
    })
}