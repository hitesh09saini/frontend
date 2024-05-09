import gsap from 'gsap'

const animations = () => {
    const bannerOne = document.getElementById('banner-1')
    const bannerTwo = document.getElementById('banner-2')
    const bannerThree = document.getElementById('banner-3')
    const bannerFour = document.getElementById('banner-4')



    if (bannerOne && bannerTwo && bannerThree && bannerFour) {
        const tl = gsap.timeline();

        tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
            xPercent: 0,
        }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
            xPercent: 100,
            stagger: 0.2
        }).to('.img', {
            scale: 1
        }).to('.developer', {
            x: 20,
            stagger: 0.2,
            opacity: 1,
            ease: "power2.out"
        })

    }
}

export default animations