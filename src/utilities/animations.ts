export const pageSlide = {
    initial:{
        opacity:0,
        y:"-1rem",
    },
    in:{
        opacity:1,
        y:0,
    },
    out: {
        opacity:0,
        y:"1rem",
    },
};
export const pageTransition = {
    type: "tween",
    duration: 0.2,
}
export const pageZoom = {
    initial:{
        opacity:0,
        scale:0.95,
    },
    in:{
        opacity:1,
        scale:1,
    },
    out:{
        opacity:0,
        scale: 0.95,
    },
};