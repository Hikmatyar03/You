// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
    Swal.fire({
        title: 'Play background music?',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
            animationTimeline();
        } else {
            animationTimeline();
        }
    });
});

// animation timeline
const animationTimeline = () => {
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];
    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span>`;
    hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    };
    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    };

    const tl = new TimelineMax();

    tl.to(".container", 0.3, {
        visibility: "visible"
    })
    .from(".one", 0.4, {
        opacity: 0,
        y: 10
    })
    .from(".two", 0.2, {
        opacity: 0,
        y: 10
    })
    .to(".one", 0.4, {
        opacity: 0,
        y: 10
    }, "+=2")
    .to(".two", 0.4, {
        opacity: 0,
        y: 10
    }, "-=0.5")
    .from(".three", 0.4, {
        opacity: 0,
        y: 10
    })
    .to(".three", 0.4, {
        opacity: 0,
        y: 10
    }, "+=2")
    .from(".four", 0.4, {
        scale: 0.2,
        opacity: 0,
    })
    .from(".fake-btn", 0.2, {
        scale: 0.2,
        opacity: 0,
    })
    .staggerTo(".hbd-chatbox span", 0.8, {
        visibility: "visible"
    }, 0.03)
    .to(".fake-btn", 0.1, {
        backgroundColor: "rgb(127, 206, 248)"
    }, "+=2")
    .to(".four", 0.3, {
        scale: 0.2,
        opacity: 0,
        y: -150
    }, "+=0.5")
    .from(".idea-1", 0.4, ideaTextTrans)
    .to(".idea-1", 0.4, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.4, ideaTextTrans)
    .to(".idea-2", 0.4, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.4, ideaTextTrans)
    .to(".idea-3 strong", 0.3, {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff"
    })
    .to(".idea-3", 0.4, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.4, ideaTextTrans)
    .to(".idea-4", 0.4, ideaTextTransLeave, "+=1.5")
    .from(".idea-5", 0.4, {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0
    }, "+=1")
    .to(".idea-5 span", 0.4, {
        rotation: 90,
        x: 8
    }, "+=0.8")
    .to(".idea-5", 0.4, {
        scale: 0.2,
        opacity: 0
    }, "+=1")
    .staggerFrom(".idea-6 span", 0.5, {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut
    }, 0.1)
    .staggerTo(".idea-6 span", 0.5, {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut
    }, 0.1, "+=0.8")
    .staggerFromTo(".baloons img", 1.5, {
        opacity: 0.9,
        y: 1400
    }, {
        opacity: 1,
        y: -1000
    }, 0.1)
    .from(".profile-picture", 0.3, {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
    }, "-=1")
    .from(".hat", 0.3, {
        x: -100,
        y: 350,
        rotation: -180,
        opacity: 0
    })
    .staggerFrom(".wish-hbd span", 0.4, {
        opacity: 0,
        y: -50,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5)
    }, 0.05)
    .staggerFromTo(".wish-hbd span", 0.4, {
        scale: 1.4,
        rotationY: 150
    }, {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut
    }, 0.05, "party")
    .from(".wish h5", 0.3, {
        opacity: 0,
        y: 10,
        skewX: "-15deg"
    }, "party")
    .staggerTo(".eight svg", 1, {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 2,
        repeatDelay: 0.8
    }, 0.2)
    
    .to(".six", 0.3, {
        opacity: 0,
        y: 30,
        zIndex: "-1"
    })
    .staggerFrom(".nine p", 0.6, ideaTextTrans, 0.6)
    .to(".last-smile", 0.3, {
        rotation: 90
    }, "+=0.5");

    // Restart Animation on click
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
        tl.restart();
    });
};