export const animate = (element: string, animation: string, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node && node.classList.add(`${prefix}animated`, animationName);
        // resolve('hola')
        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event: any) {
            event.stopPropagation();
            node && node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        node && node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });