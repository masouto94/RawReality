export const scroller =(id)=>{
    let element= document.getElementById(id)
    element.scrollIntoView({behavior: "smooth", block: "center"})
};

export const BackToTop = () => {
    window.scrollTo(0, 0);
  };
