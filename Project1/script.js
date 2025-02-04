function loco(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },

      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

loco()

var clutter = "";

document.querySelector("#page2>h1").textContent.split(" ").forEach((dets)=>{
  clutter += `<span> ${dets} </span>`
  console.log(clutter);
  document.querySelector("#page2>h1").innerHTML = clutter;
})

gsap.to("#page2>h1>span",{
  scrollTrigger : {
    trigger : "#page2>h1",
    scroller : "#main",
    start : 'top 120%',
    end : '',
    scrub : 2
  },
  stagger : .2,
  color : '#fff'
})