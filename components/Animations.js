export const svgVariants={
    hidden:{
        x: -50,
    },
    visible:{
        x: 10,
        transition: {duration: 1}
    }
}

export const pathVariants = {
    hidden:{
        opacity: 0,
        pathLength: 0
    },
    visible:{
        opacity: 1,
        pathLength: 3,
        transition:{
            duration: 2,
            ease: "easeInOut"
        }
    }
}

export const transition = { duration: 1, delay:1.5, ease: "easeInOut" }