import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bodymovin from 'bodymovin'

gsap.registerPlugin(ScrollTrigger);

const loti = {
    container: document.querySelector('.lottie'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: '/public/birds.json'
}

var anim = bodymovin.loadAnimation(loti);

function playThis() {
    anim.play();
}


const animations = () => {
    const bannerOne = document.getElementById('banner-1');
    const bannerTwo = document.getElementById('banner-2');
    const bannerThree = document.getElementById('banner-3');
    const bannerFour = document.getElementById('banner-4');

    if (bannerOne && bannerTwo && bannerThree && bannerFour) {
        const tl = gsap.timeline();
        
        tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
            xPercent: 0,
        }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
            xPercent: 100,
            stagger: 0.2
        })
        .to('.header', {
            top: 0,
            duration: 1,
            ease: "power2.out"
        });

        gsap.to('.developer', {
            x: 20,
            stagger: 0.1,
            opacity: 1,
            delay: 0.7,
            ease: "power2.out"
        });

        gsap.to('.fullstack', {
            rotate: -3,
            scrollTrigger: {
                trigger: ".fullstack",
                start: "top 30%",
                end: "top 20%",
                // scrub: true,
                // markers: true
            }
        });

        gsap.to('.dp', {
            x: 0,
            y: 0,
            opacity: 1,
            delay: 2,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".dp",
                start: "top 90%",
                end: "top 80%",
                scrub: 2,
                // markers: true
            }
        });

        // ScrollTrigger.create({
        //     trigger: ".lottie",
        //     duration: "100%",
        //     markers: true,
        //     start: "top 50%",
        //     toggleActions: "play null reset reset",
        //     onEnter: playThis,
        // });
    }
};

export default animations;
