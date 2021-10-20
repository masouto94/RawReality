export const scroller =(id)=>{
    let element= document.getElementById(id)
    element.scrollIntoView({behavior: "smooth", block: "center"})
}