function locomotive() {
  gsap.registerPlugin(ScrollTrigger); //ScrollTrigger를 통해 스크롤 애니메이션을 관리하기위한 도구입니다.

  /* SMOOTH SCROLL */
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  //locoScroll객체를 생성, 스크롤 관련 동작을 제어하는데 사용됩니다.
  // el: document.querySelector("#main")--> #main이라는 CSS선택자로 해당하는 HTML요소를 스크롤 컨테이너로 지정합니다.(#main영역이 LocomotiveScroll이 적용되는 범위이다)
  //smooth: true  --> 부드러운 스크롤을 활성화합니다.

  locoScroll.on("scroll", ScrollTrigger.update); //LocomotiveScroll의 Scroll 이벤트가 발생할때마다 ScrollTrigger의 update함수를 호출합니다. 이것은 스크롤 이벤트와 ScrollTrigger간의 연동을 설정합니다.

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    //ScrollTrigger의 스크롤프록시(스크롤에 대한 인테페이스를 제어,조작)를 설정한다. 이 부분은 ScrollTrigger가 LocomotiveScroll와 함께 작동하도록 만듦

    getBoundingClientRect() {
      return {
        left: 0,
        top: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      }; //뷰포트의 크기를 반환하는 getBoundingClientRect() 함수를 정의함
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  }); //pinType은 #main 요소의 스타일 속성 transform이 설정되어 있으면 transform으로 , 그렇지 않으면 "fixed"로 설정함

  // "refresh" 이벤트를 감지하면 locoScroll.update() 함수를 호출하여 LocomotiveScroll을 업데이트합니다. 스크롤 컨테이너나 내용이 동적으로 변경될 때 사용됩니다.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh(); //ScrollTrigger를 초기화하고 설정을 적용합니다.
}
locomotive();
//---------------------------------------------

function canvas() {
  const canvas = document.querySelector("#myCanvas");
  const context = canvas.getContext("2d"); //canvas사용의 필수

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    // var data = `./img/male0001.png
    // ./img/male0002.png
    // ./img/male0003.png
    //  ./img/male0004.png
    //  ./img/male0005.png
    //  ./img/male0006.png
    //  ./img/male0007.png
    //  ./img/male0008.png
    //  ./img/male0009.png
    //  ./img/male0010.png
    //  ./img/male0011.png
    //  ./img/male0012.png
    //  ./img/male0013.png
    //  ./img/male0014.png
    //  ./img/male0015.png
    //  ./img/male0016.png
    //  ./img/male0017.png
    //  ./img/male0018.png
    //  ./img/male0019.png
    //  ./img/male0020.png
    //  ./img/male0021.png
    //  ./img/male0022.png
    //  ./img/male0023.png
    //  ./img/male0024.png
    //  ./img/male0025.png
    //  ./img/male0026.png
    //  ./img/male0027.png
    //  ./img/male0028.png
    //  ./img/male0029.png
    //  ./img/male0030.png
    //  ./img/male0031.png
    //  ./img/male0032.png
    //  ./img/male0033.png
    //  ./img/male0034.png
    //  ./img/male0035.png
    //  ./img/male0036.png
    //  ./img/male0037.png
    //  ./img/male0038.png
    //  ./img/male0039.png
    //  ./img/male0040.png
    //  ./img/male0041.png
    //  ./img/male0042.png
    //  ./img/male0043.png
    //  ./img/male0044.png
    //  ./img/male0045.png
    //  ./img/male0046.png
    //  ./img/male0047.png
    //  ./img/male0048.png
    //  ./img/male0049.png
    //  ./img/male0050.png
    //  ./img/male0051.png
    //  ./img/male0052.png
    //  ./img/male0053.png
    //  ./img/male0054.png
    //  ./img/male0055.png
    //  ./img/male0056.png
    //  ./img/male0057.png
    //  ./img/male0058.png
    //  ./img/male0059.png
    //  ./img/male0060.png
    //  ./img/male0061.png
    //  ./img/male0062.png
    //  ./img/male0063.png
    //  ./img/male0064.png
    //  ./img/male0065.png
    //  ./img/male0066.png
    //  ./img/male0067.png
    //  ./img/male0068.png
    //  ./img/male0069.png
    //  ./img/male0070.png
    //  ./img/male0071.png
    //  ./img/male0072.png
    //  ./img/male0073.png
    //  ./img/male0074.png
    //  ./img/male0075.png
    //  ./img/male0076.png
    //  ./img/male0077.png
    //  ./img/male0078.png
    //  ./img/male0079.png
    //  ./img/male0080.png
    //  ./img/male0081.png
    //  ./img/male0082.png
    //  ./img/male0083.png
    //  ./img/male0084.png
    //  ./img/male0085.png
    //  ./img/male0086.png
    //  ./img/male0087.png
    //  ./img/male0088.png
    //  ./img/male0089.png
    //  ./img/male0090.png
    //  ./img/male0091.png
    //  ./img/male0092.png
    //  ./img/male0093.png
    //  ./img/male0094.png
    //  ./img/male0095.png
    //  ./img/male0096.png
    //  ./img/male0097.png
    //  ./img/male0098.png
    //  ./img/male0099.png
    //  ./img/male0100.png
    //  ./img/male0101.png
    //  ./img/male0102.png
    //  ./img/male0103.png
    //  ./img/male0104.png
    //  ./img/male0105.png
    //  ./img/male0106.png
    //  ./img/male0107.png
    //  ./img/male0108.png
    //  ./img/male0109.png
    //  ./img/male0110.png
    //  ./img/male0111.png
    //  ./img/male0112.png
    //  ./img/male0113.png
    //  ./img/male0114.png
    //  ./img/male0115.png
    //  ./img/male0116.png
    //  ./img/male0117.png
    //  ./img/male0118.png
    //  ./img/male0119.png
    //  ./img/male0120.png
    //  ./img/male0121.png
    //  ./img/male0122.png
    //  ./img/male0123.png
    //  ./img/male0124.png
    //  ./img/male0125.png
    //  ./img/male0126.png
    //  ./img/male0127.png
    //  ./img/male0128.png
    //  ./img/male0129.png
    //  ./img/male0130.png
    //  ./img/male0131.png
    //  ./img/male0132.png
    //  ./img/male0133.png
    //  ./img/male0134.png
    //  ./img/male0135.png
    //  ./img/male0136.png
    //  ./img/male0137.png
    //  ./img/male0138.png
    //  ./img/male0139.png
    //  ./img/male0140.png
    //  ./img/male0141.png
    //  ./img/male0142.png
    //  ./img/male0143.png
    //  ./img/male0144.png
    //  ./img/male0145.png
    //  ./img/male0146.png
    //  ./img/male0147.png
    //  ./img/male0148.png
    //  ./img/male0149.png
    //  ./img/male0150.png
    //  ./img/male0151.png
    //  ./img/male0152.png
    //  ./img/male0153.png
    //  ./img/male0154.png
    //  ./img/male0155.png
    //  ./img/male0156.png
    //  ./img/male0157.png
    //  ./img/male0158.png
    //  ./img/male0159.png
    //  ./img/male0160.png
    //  ./img/male0161.png
    //  ./img/male0162.png
    //  ./img/male0163.png
    //  ./img/male0164.png
    //  ./img/male0165.png
    //  ./img/male0166.png
    //  ./img/male0167.png
    //  ./img/male0168.png
    //  ./img/male0169.png
    //  ./img/male0170.png
    //  ./img/male0171.png
    //  ./img/male0172.png
    //  ./img/male0173.png
    //  ./img/male0174.png
    //  ./img/male0175.png
    //  ./img/male0176.png
    //  ./img/male0177.png
    //  ./img/male0178.png
    //  ./img/male0179.png
    //  ./img/male0180.png
    //  ./img/male0181.png
    //  ./img/male0182.png
    //  ./img/male0183.png
    //  ./img/male0184.png
    //  ./img/male0185.png
    //  ./img/male0186.png
    //  ./img/male0187.png
    //  ./img/male0188.png
    //  ./img/male0189.png
    //  ./img/male0190.png
    //  ./img/male0191.png
    //  ./img/male0192.png
    //  ./img/male0193.png
    //  ./img/male0194.png
    //  ./img/male0195.png
    //  ./img/male0196.png
    //  ./img/male0197.png
    //  ./img/male0198.png
    //  ./img/male0199.png
    //  ./img/male0200.png
    //  ./img/male0201.png
    //  ./img/male0202.png
    //  ./img/male0203.png
    //  ./img/male0204.png
    //  ./img/male0205.png
    //  ./img/male0206.png
    //  ./img/male0207.png
    //  ./img/male0208.png
    //  ./img/male0209.png
    //  ./img/male0210.png
    //  ./img/male0211.png
    //  ./img/male0212.png
    //  ./img/male0213.png
    //  ./img/male0214.png
    //  ./img/male0215.png
    //  ./img/male0216.png
    //  ./img/male0217.png
    //  ./img/male0218.png
    //  ./img/male0219.png
    //  ./img/male0220.png
    //  ./img/male0221.png
    //  ./img/male0222.png
    //  ./img/male0223.png
    //  ./img/male0224.png
    //  ./img/male0225.png
    //  ./img/male0226.png
    //  ./img/male0227.png
    //  ./img/male0228.png
    //  ./img/male0229.png
    //  ./img/male0230.png
    //  ./img/male0231.png
    //  ./img/male0232.png
    //  ./img/male0233.png
    //  ./img/male0234.png
    //  ./img/male0235.png
    //  ./img/male0236.png
    //  ./img/male0237.png
    //  ./img/male0238.png
    //  ./img/male0239.png
    //  ./img/male0240.png
    //  ./img/male0241.png
    //  ./img/male0242.png
    //  ./img/male0243.png
    //  ./img/male0244.png
    //  ./img/male0245.png
    //  ./img/male0246.png
    //  ./img/male0247.png
    //  ./img/male0248.png
    //  ./img/male0249.png
    //  ./img/male0250.png
    //  ./img/male0251.png
    //  ./img/male0252.png
    //  ./img/male0253.png
    //  ./img/male0254.png
    //  ./img/male0255.png
    //  ./img/male0256.png
    //  ./img/male0257.png
    //  ./img/male0258.png
    //  ./img/male0259.png
    //  ./img/male0260.png
    //  ./img/male0261.png
    //  ./img/male0262.png
    //  ./img/male0263.png
    //  ./img/male0264.png
    //  ./img/male0265.png
    //  ./img/male0266.png
    //  ./img/male0267.png
    //  ./img/male0268.png
    //  ./img/male0269.png
    //  ./img/male0270.png
    //  ./img/male0271.png
    //  ./img/male0272.png
    //  ./img/male0273.png
    //  ./img/male0274.png
    //  ./img/male0275.png
    //  ./img/male0276.png
    //  ./img/male0277.png
    //  ./img/male0278.png
    //  ./img/male0279.png
    //  ./img/male0280.png
    //  ./img/male0281.png
    //  ./img/male0282.png
    //  ./img/male0283.png
    //  ./img/male0284.png
    //  ./img/male0285.png
    //  ./img/male0286.png
    //  ./img/male0287.png
    //  ./img/male0288.png
    //  ./img/male0289.png
    //  ./img/male0290.png
    //  ./img/male0291.png
    //  ./img/male0292.png
    //  ./img/male0293.png
    //  ./img/male0294.png
    //  ./img/male0295.png
    //  ./img/male0296.png
    //  ./img/male0297.png
    //  ./img/male0298.png
    //  ./img/male0299.png
    //  ./img/male0300.png`;

    var data=`https://cyberfiction.io/sequence/0001.png
    https://cyberfiction.io/sequence/0002.png
    https://cyberfiction.io/sequence/0003.png
    https://cyberfiction.io/sequence/0004.png
    https://cyberfiction.io/sequence/0005.png
    https://cyberfiction.io/sequence/0006.png
    https://cyberfiction.io/sequence/0007.png
    https://cyberfiction.io/sequence/0008.png
    https://cyberfiction.io/sequence/0009.png
    https://cyberfiction.io/sequence/0010.png
    https://cyberfiction.io/sequence/0011.png
    https://cyberfiction.io/sequence/0012.png
    https://cyberfiction.io/sequence/0013.png
    https://cyberfiction.io/sequence/0014.png
    https://cyberfiction.io/sequence/0015.png
    https://cyberfiction.io/sequence/0016.png
    https://cyberfiction.io/sequence/0017.png
    https://cyberfiction.io/sequence/0018.png
    https://cyberfiction.io/sequence/0019.png
    https://cyberfiction.io/sequence/0020.png
    https://cyberfiction.io/sequence/0021.png
    https://cyberfiction.io/sequence/0022.png
    https://cyberfiction.io/sequence/0023.png
    https://cyberfiction.io/sequence/0024.png
    https://cyberfiction.io/sequence/0025.png
    https://cyberfiction.io/sequence/0026.png
    https://cyberfiction.io/sequence/0027.png
    https://cyberfiction.io/sequence/0028.png
    https://cyberfiction.io/sequence/0029.png
    https://cyberfiction.io/sequence/0030.png
    https://cyberfiction.io/sequence/0031.png
    https://cyberfiction.io/sequence/0032.png
    https://cyberfiction.io/sequence/0033.png
    https://cyberfiction.io/sequence/0034.png
    https://cyberfiction.io/sequence/0035.png
    https://cyberfiction.io/sequence/0036.png
    https://cyberfiction.io/sequence/0037.png
    https://cyberfiction.io/sequence/0038.png
    https://cyberfiction.io/sequence/0039.png
    https://cyberfiction.io/sequence/0040.png
    https://cyberfiction.io/sequence/0041.png
    https://cyberfiction.io/sequence/0042.png
    https://cyberfiction.io/sequence/0043.png
    https://cyberfiction.io/sequence/0044.png
    https://cyberfiction.io/sequence/0045.png
    https://cyberfiction.io/sequence/0046.png
    https://cyberfiction.io/sequence/0047.png
    https://cyberfiction.io/sequence/0048.png
    https://cyberfiction.io/sequence/0049.png
    https://cyberfiction.io/sequence/0050.png
    https://cyberfiction.io/sequence/0051.png
    https://cyberfiction.io/sequence/0052.png
    https://cyberfiction.io/sequence/0053.png
    https://cyberfiction.io/sequence/0054.png
    https://cyberfiction.io/sequence/0055.png
    https://cyberfiction.io/sequence/0056.png
    https://cyberfiction.io/sequence/0057.png
    https://cyberfiction.io/sequence/0058.png
    https://cyberfiction.io/sequence/0059.png
    https://cyberfiction.io/sequence/0060.png
    https://cyberfiction.io/sequence/0061.png
    https://cyberfiction.io/sequence/0062.png
    https://cyberfiction.io/sequence/0063.png
    https://cyberfiction.io/sequence/0064.png
    https://cyberfiction.io/sequence/0065.png
    https://cyberfiction.io/sequence/0066.png
    https://cyberfiction.io/sequence/0067.png
    https://cyberfiction.io/sequence/0068.png
    https://cyberfiction.io/sequence/0069.png
    https://cyberfiction.io/sequence/0070.png
    https://cyberfiction.io/sequence/0071.png
    https://cyberfiction.io/sequence/0072.png
    https://cyberfiction.io/sequence/0073.png
    https://cyberfiction.io/sequence/0074.png
    https://cyberfiction.io/sequence/0075.png
    https://cyberfiction.io/sequence/0076.png
    https://cyberfiction.io/sequence/0077.png
    https://cyberfiction.io/sequence/0078.png
    https://cyberfiction.io/sequence/0079.png
    https://cyberfiction.io/sequence/0080.png
    https://cyberfiction.io/sequence/0081.png
    https://cyberfiction.io/sequence/0082.png
    https://cyberfiction.io/sequence/0083.png
    https://cyberfiction.io/sequence/0084.png
    https://cyberfiction.io/sequence/0085.png
    https://cyberfiction.io/sequence/0086.png
    https://cyberfiction.io/sequence/0087.png
    https://cyberfiction.io/sequence/0088.png
    https://cyberfiction.io/sequence/0089.png
    https://cyberfiction.io/sequence/0090.png
    https://cyberfiction.io/sequence/0091.png
    https://cyberfiction.io/sequence/0092.png
    https://cyberfiction.io/sequence/0093.png
    https://cyberfiction.io/sequence/0094.png
    https://cyberfiction.io/sequence/0095.png
    https://cyberfiction.io/sequence/0096.png
    https://cyberfiction.io/sequence/0097.png
    https://cyberfiction.io/sequence/0098.png
    https://cyberfiction.io/sequence/0099.png
    https://cyberfiction.io/sequence/0100.png
    https://cyberfiction.io/sequence/0101.png
    https://cyberfiction.io/sequence/0102.png
    https://cyberfiction.io/sequence/0103.png
    https://cyberfiction.io/sequence/0104.png
    https://cyberfiction.io/sequence/0105.png
    https://cyberfiction.io/sequence/0106.png
    https://cyberfiction.io/sequence/0107.png
    https://cyberfiction.io/sequence/0108.png
    https://cyberfiction.io/sequence/0109.png
    https://cyberfiction.io/sequence/0110.png
    https://cyberfiction.io/sequence/0111.png
    https://cyberfiction.io/sequence/0112.png
    https://cyberfiction.io/sequence/0113.png
    https://cyberfiction.io/sequence/0114.png
    https://cyberfiction.io/sequence/0115.png
    https://cyberfiction.io/sequence/0116.png
    https://cyberfiction.io/sequence/0117.png
    https://cyberfiction.io/sequence/0118.png
    https://cyberfiction.io/sequence/0119.png
    https://cyberfiction.io/sequence/0120.png
    https://cyberfiction.io/sequence/0121.png
    https://cyberfiction.io/sequence/0122.png
    https://cyberfiction.io/sequence/0123.png
    https://cyberfiction.io/sequence/0124.png
    https://cyberfiction.io/sequence/0125.png
    https://cyberfiction.io/sequence/0126.png
    https://cyberfiction.io/sequence/0127.png
    https://cyberfiction.io/sequence/0128.png
    https://cyberfiction.io/sequence/0129.png
    https://cyberfiction.io/sequence/0130.png
    https://cyberfiction.io/sequence/0131.png
    https://cyberfiction.io/sequence/0132.png
    https://cyberfiction.io/sequence/0133.png
    https://cyberfiction.io/sequence/0134.png
    https://cyberfiction.io/sequence/0135.png
    https://cyberfiction.io/sequence/0136.png
    https://cyberfiction.io/sequence/0137.png
    https://cyberfiction.io/sequence/0138.png
    https://cyberfiction.io/sequence/0139.png
    https://cyberfiction.io/sequence/0140.png
    https://cyberfiction.io/sequence/0141.png
    https://cyberfiction.io/sequence/0142.png
    https://cyberfiction.io/sequence/0143.png
    https://cyberfiction.io/sequence/0144.png
    https://cyberfiction.io/sequence/0145.png
    https://cyberfiction.io/sequence/0146.png
    https://cyberfiction.io/sequence/0147.png
    https://cyberfiction.io/sequence/0148.png
    https://cyberfiction.io/sequence/0149.png
    https://cyberfiction.io/sequence/0150.png
    https://cyberfiction.io/sequence/0151.png
    https://cyberfiction.io/sequence/0152.png
    https://cyberfiction.io/sequence/0153.png
    https://cyberfiction.io/sequence/0154.png
    https://cyberfiction.io/sequence/0155.png
    https://cyberfiction.io/sequence/0156.png
    https://cyberfiction.io/sequence/0157.png
    https://cyberfiction.io/sequence/0158.png
    https://cyberfiction.io/sequence/0159.png
    https://cyberfiction.io/sequence/0160.png
    https://cyberfiction.io/sequence/0161.png
    https://cyberfiction.io/sequence/0162.png
    https://cyberfiction.io/sequence/0163.png
    https://cyberfiction.io/sequence/0164.png
    https://cyberfiction.io/sequence/0165.png
    https://cyberfiction.io/sequence/0166.png
    https://cyberfiction.io/sequence/0167.png
    https://cyberfiction.io/sequence/0168.png
    https://cyberfiction.io/sequence/0169.png
    https://cyberfiction.io/sequence/0170.png
    https://cyberfiction.io/sequence/0171.png
    https://cyberfiction.io/sequence/0172.png
    https://cyberfiction.io/sequence/0173.png
    https://cyberfiction.io/sequence/0174.png
    https://cyberfiction.io/sequence/0175.png
    https://cyberfiction.io/sequence/0176.png
    https://cyberfiction.io/sequence/0177.png
    https://cyberfiction.io/sequence/0178.png
    https://cyberfiction.io/sequence/0179.png
    https://cyberfiction.io/sequence/0180.png
    https://cyberfiction.io/sequence/0181.png
    https://cyberfiction.io/sequence/0182.png
    https://cyberfiction.io/sequence/0183.png
    https://cyberfiction.io/sequence/0184.png
    https://cyberfiction.io/sequence/0185.png
    https://cyberfiction.io/sequence/0186.png
    https://cyberfiction.io/sequence/0187.png
    https://cyberfiction.io/sequence/0188.png
    https://cyberfiction.io/sequence/0189.png
    https://cyberfiction.io/sequence/0190.png
    https://cyberfiction.io/sequence/0191.png
    https://cyberfiction.io/sequence/0192.png
    https://cyberfiction.io/sequence/0193.png
    https://cyberfiction.io/sequence/0194.png
    https://cyberfiction.io/sequence/0195.png
    https://cyberfiction.io/sequence/0196.png
    https://cyberfiction.io/sequence/0197.png
    https://cyberfiction.io/sequence/0198.png
    https://cyberfiction.io/sequence/0199.png
    https://cyberfiction.io/sequence/0200.png
    https://cyberfiction.io/sequence/0201.png
    https://cyberfiction.io/sequence/0202.png
    https://cyberfiction.io/sequence/0203.png
    https://cyberfiction.io/sequence/0204.png
    https://cyberfiction.io/sequence/0205.png
    https://cyberfiction.io/sequence/0206.png
    https://cyberfiction.io/sequence/0207.png
    https://cyberfiction.io/sequence/0208.png
    https://cyberfiction.io/sequence/0209.png
    https://cyberfiction.io/sequence/0210.png
    https://cyberfiction.io/sequence/0211.png
    https://cyberfiction.io/sequence/0212.png
    https://cyberfiction.io/sequence/0213.png
    https://cyberfiction.io/sequence/0214.png
    https://cyberfiction.io/sequence/0215.png
    https://cyberfiction.io/sequence/0216.png
    https://cyberfiction.io/sequence/0217.png
    https://cyberfiction.io/sequence/0218.png
    https://cyberfiction.io/sequence/0219.png
    https://cyberfiction.io/sequence/0220.png
    https://cyberfiction.io/sequence/0221.png
    https://cyberfiction.io/sequence/0222.png
    https://cyberfiction.io/sequence/0223.png
    https://cyberfiction.io/sequence/0224.png
    https://cyberfiction.io/sequence/0225.png
    https://cyberfiction.io/sequence/0226.png
    https://cyberfiction.io/sequence/0227.png
    https://cyberfiction.io/sequence/0228.png
    https://cyberfiction.io/sequence/0229.png
    https://cyberfiction.io/sequence/0230.png
    https://cyberfiction.io/sequence/0231.png
    https://cyberfiction.io/sequence/0232.png
    https://cyberfiction.io/sequence/0233.png
    https://cyberfiction.io/sequence/0234.png
    https://cyberfiction.io/sequence/0235.png
    https://cyberfiction.io/sequence/0236.png
    https://cyberfiction.io/sequence/0237.png
    https://cyberfiction.io/sequence/0238.png
    https://cyberfiction.io/sequence/0239.png
    https://cyberfiction.io/sequence/0240.png
    https://cyberfiction.io/sequence/0241.png
    https://cyberfiction.io/sequence/0242.png
    https://cyberfiction.io/sequence/0243.png
    https://cyberfiction.io/sequence/0244.png
    https://cyberfiction.io/sequence/0245.png
    https://cyberfiction.io/sequence/0246.png
    https://cyberfiction.io/sequence/0247.png
    https://cyberfiction.io/sequence/0248.png
    https://cyberfiction.io/sequence/0249.png
    https://cyberfiction.io/sequence/0250.png
    https://cyberfiction.io/sequence/0251.png
    https://cyberfiction.io/sequence/0252.png
    https://cyberfiction.io/sequence/0253.png
    https://cyberfiction.io/sequence/0254.png
    https://cyberfiction.io/sequence/0255.png
    https://cyberfiction.io/sequence/0256.png
    https://cyberfiction.io/sequence/0257.png
    https://cyberfiction.io/sequence/0258.png
    https://cyberfiction.io/sequence/0259.png
    https://cyberfiction.io/sequence/0260.png
    https://cyberfiction.io/sequence/0261.png
    https://cyberfiction.io/sequence/0262.png
    https://cyberfiction.io/sequence/0263.png
    https://cyberfiction.io/sequence/0264.png
    https://cyberfiction.io/sequence/0265.png
    https://cyberfiction.io/sequence/0266.png
    https://cyberfiction.io/sequence/0267.png
    https://cyberfiction.io/sequence/0268.png
    https://cyberfiction.io/sequence/0269.png
    https://cyberfiction.io/sequence/0270.png
    https://cyberfiction.io/sequence/0271.png
    https://cyberfiction.io/sequence/0272.png
    https://cyberfiction.io/sequence/0273.png
    https://cyberfiction.io/sequence/0274.png
    https://cyberfiction.io/sequence/0275.png
    https://cyberfiction.io/sequence/0276.png
    https://cyberfiction.io/sequence/0277.png
    https://cyberfiction.io/sequence/0278.png
    https://cyberfiction.io/sequence/0279.png
    https://cyberfiction.io/sequence/0280.png
    https://cyberfiction.io/sequence/0281.png
    https://cyberfiction.io/sequence/0282.png
    https://cyberfiction.io/sequence/0283.png
    https://cyberfiction.io/sequence/0284.png
    https://cyberfiction.io/sequence/0285.png
    https://cyberfiction.io/sequence/0286.png
    https://cyberfiction.io/sequence/0287.png
    https://cyberfiction.io/sequence/0288.png
    https://cyberfiction.io/sequence/0289.png
    https://cyberfiction.io/sequence/0290.png
    https://cyberfiction.io/sequence/0291.png
    https://cyberfiction.io/sequence/0292.png
    https://cyberfiction.io/sequence/0293.png
    https://cyberfiction.io/sequence/0294.png
    https://cyberfiction.io/sequence/0295.png
    https://cyberfiction.io/sequence/0296.png
    https://cyberfiction.io/sequence/0297.png
    https://cyberfiction.io/sequence/0298.png
    https://cyberfiction.io/sequence/0299.png
    https://cyberfiction.io/sequence/0300.png
    https://cyberfiction.io/sequence/0301.png
    https://cyberfiction.io/sequence/0302.png
    https://cyberfiction.io/sequence/0303.png
    https://cyberfiction.io/sequence/0304.png
    https://cyberfiction.io/sequence/0305.png
    https://cyberfiction.io/sequence/0306.png
    https://cyberfiction.io/sequence/0307.png
    https://cyberfiction.io/sequence/0308.png
    https://cyberfiction.io/sequence/0309.png
    https://cyberfiction.io/sequence/0310.png
    https://cyberfiction.io/sequence/0311.png
    https://cyberfiction.io/sequence/0312.png
    https://cyberfiction.io/sequence/0313.png
    https://cyberfiction.io/sequence/0314.png
    https://cyberfiction.io/sequence/0315.png
    https://cyberfiction.io/sequence/0316.png
    https://cyberfiction.io/sequence/0317.png
    https://cyberfiction.io/sequence/0318.png
    https://cyberfiction.io/sequence/0319.png
    https://cyberfiction.io/sequence/0320.png
    https://cyberfiction.io/sequence/0321.png
    https://cyberfiction.io/sequence/0322.png
    https://cyberfiction.io/sequence/0323.png
    https://cyberfiction.io/sequence/0324.png
    https://cyberfiction.io/sequence/0325.png
    https://cyberfiction.io/sequence/0326.png
    https://cyberfiction.io/sequence/0327.png
    https://cyberfiction.io/sequence/0328.png
    https://cyberfiction.io/sequence/0329.png
    https://cyberfiction.io/sequence/0330.png
    https://cyberfiction.io/sequence/0331.png
    https://cyberfiction.io/sequence/0332.png
    https://cyberfiction.io/sequence/0333.png
    https://cyberfiction.io/sequence/0334.png
    https://cyberfiction.io/sequence/0335.png
    https://cyberfiction.io/sequence/0336.png
    https://cyberfiction.io/sequence/0337.png
    https://cyberfiction.io/sequence/0338.png
    https://cyberfiction.io/sequence/0339.png
    https://cyberfiction.io/sequence/0340.png
    https://cyberfiction.io/sequence/0341.png
    https://cyberfiction.io/sequence/0342.png
    https://cyberfiction.io/sequence/0343.png
    https://cyberfiction.io/sequence/0344.png
    https://cyberfiction.io/sequence/0345.png
    https://cyberfiction.io/sequence/0346.png
    https://cyberfiction.io/sequence/0347.png
    https://cyberfiction.io/sequence/0348.png
    https://cyberfiction.io/sequence/0349.png
    https://cyberfiction.io/sequence/0350.png
    https://cyberfiction.io/sequence/0351.png
    https://cyberfiction.io/sequence/0352.png
    https://cyberfiction.io/sequence/0353.png
    https://cyberfiction.io/sequence/0354.png
    https://cyberfiction.io/sequence/0355.png
    https://cyberfiction.io/sequence/0356.png
    https://cyberfiction.io/sequence/0357.png
    https://cyberfiction.io/sequence/0358.png
    https://cyberfiction.io/sequence/0359.png
    https://cyberfiction.io/sequence/0360.png
    https://cyberfiction.io/sequence/0361.png
    https://cyberfiction.io/sequence/0362.png
    https://cyberfiction.io/sequence/0363.png
    https://cyberfiction.io/sequence/0364.png
    https://cyberfiction.io/sequence/0365.png
    https://cyberfiction.io/sequence/0366.png
    https://cyberfiction.io/sequence/0367.png
    https://cyberfiction.io/sequence/0368.png
    https://cyberfiction.io/sequence/0369.png
    https://cyberfiction.io/sequence/0370.png
    https://cyberfiction.io/sequence/0371.png
    https://cyberfiction.io/sequence/0372.png
    https://cyberfiction.io/sequence/0373.png
    https://cyberfiction.io/sequence/0374.png
    https://cyberfiction.io/sequence/0375.png
    https://cyberfiction.io/sequence/0376.png
    https://cyberfiction.io/sequence/0377.png
    https://cyberfiction.io/sequence/0378.png
    https://cyberfiction.io/sequence/0379.png
    https://cyberfiction.io/sequence/0380.png
    https://cyberfiction.io/sequence/0381.png
    https://cyberfiction.io/sequence/0382.png
    https://cyberfiction.io/sequence/0383.png
    https://cyberfiction.io/sequence/0384.png
    https://cyberfiction.io/sequence/0385.png
    https://cyberfiction.io/sequence/0386.png
    https://cyberfiction.io/sequence/0387.png
    https://cyberfiction.io/sequence/0388.png
    https://cyberfiction.io/sequence/0389.png
    https://cyberfiction.io/sequence/0390.png
    https://cyberfiction.io/sequence/0391.png
    https://cyberfiction.io/sequence/0392.png
    https://cyberfiction.io/sequence/0393.png
    https://cyberfiction.io/sequence/0394.png
    https://cyberfiction.io/sequence/0395.png
    https://cyberfiction.io/sequence/0396.png
    https://cyberfiction.io/sequence/0397.png
    https://cyberfiction.io/sequence/0398.png
    https://cyberfiction.io/sequence/0399.png
    https://cyberfiction.io/sequence/0400.png
    https://cyberfiction.io/sequence/0401.png
    https://cyberfiction.io/sequence/0402.png
    https://cyberfiction.io/sequence/0403.png
    https://cyberfiction.io/sequence/0404.png
    https://cyberfiction.io/sequence/0405.png
    https://cyberfiction.io/sequence/0406.png
    https://cyberfiction.io/sequence/0407.png
    https://cyberfiction.io/sequence/0408.png
    https://cyberfiction.io/sequence/0409.png
    https://cyberfiction.io/sequence/0410.png
    https://cyberfiction.io/sequence/0411.png
    https://cyberfiction.io/sequence/0412.png
    https://cyberfiction.io/sequence/0413.png
    https://cyberfiction.io/sequence/0414.png
    https://cyberfiction.io/sequence/0415.png
    https://cyberfiction.io/sequence/0416.png
    https://cyberfiction.io/sequence/0417.png
    https://cyberfiction.io/sequence/0418.png
    https://cyberfiction.io/sequence/0419.png
    https://cyberfiction.io/sequence/0420.png
    https://cyberfiction.io/sequence/0421.png
    https://cyberfiction.io/sequence/0422.png
    https://cyberfiction.io/sequence/0423.png
    https://cyberfiction.io/sequence/0424.png
    https://cyberfiction.io/sequence/0425.png
    https://cyberfiction.io/sequence/0426.png
    https://cyberfiction.io/sequence/0427.png
    https://cyberfiction.io/sequence/0428.png
    https://cyberfiction.io/sequence/0429.png
    https://cyberfiction.io/sequence/0430.png
    https://cyberfiction.io/sequence/0431.png
    https://cyberfiction.io/sequence/0432.png
    https://cyberfiction.io/sequence/0433.png
    https://cyberfiction.io/sequence/0434.png
    https://cyberfiction.io/sequence/0435.png
    https://cyberfiction.io/sequence/0436.png
    https://cyberfiction.io/sequence/0437.png
    https://cyberfiction.io/sequence/0438.png
    https://cyberfiction.io/sequence/0439.png
    https://cyberfiction.io/sequence/0440.png
    https://cyberfiction.io/sequence/0441.png
    https://cyberfiction.io/sequence/0442.png
    https://cyberfiction.io/sequence/0443.png
    https://cyberfiction.io/sequence/0444.png
    https://cyberfiction.io/sequence/0445.png
    https://cyberfiction.io/sequence/0446.png
    https://cyberfiction.io/sequence/0447.png
    https://cyberfiction.io/sequence/0448.png
    https://cyberfiction.io/sequence/0449.png
    https://cyberfiction.io/sequence/0450.png
    https://cyberfiction.io/sequence/0451.png
    https://cyberfiction.io/sequence/0452.png
    https://cyberfiction.io/sequence/0453.png
    https://cyberfiction.io/sequence/0454.png
    https://cyberfiction.io/sequence/0455.png
    https://cyberfiction.io/sequence/0456.png
    https://cyberfiction.io/sequence/0457.png
    https://cyberfiction.io/sequence/0458.png
    https://cyberfiction.io/sequence/0459.png
    https://cyberfiction.io/sequence/0460.png
    https://cyberfiction.io/sequence/0461.png
    https://cyberfiction.io/sequence/0462.png
    https://cyberfiction.io/sequence/0463.png
    https://cyberfiction.io/sequence/0464.png
    https://cyberfiction.io/sequence/0465.png
    https://cyberfiction.io/sequence/0466.png
    https://cyberfiction.io/sequence/0467.png
    https://cyberfiction.io/sequence/0468.png
    https://cyberfiction.io/sequence/0469.png`;

    return data.split("\n")[index];
  }

  const frameCount = 469; //이미지전체갯수
  const images = [];
  const imageSeq = {
    frame: 0,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image(); //img태그만들기
    img.src = files(i);
    images.push(img);
  }
  //console.log(images)

  gsap.to(imageSeq, {
    frame: frameCount - 1, //마지막 프레임의 index번호
    snap: "frame", //"frame"은 프레임 단위로 값을 맞추겠다는 의미
    ease: "none",
    scrollTrigger: {
      scrub: 0.15,
      trigger: "#page>canvas",
      start: "top top",
      end: "1000% top",
      scroller: "#main",
    },
    onUpdate: render, //gsap.to가 변할때마다 업데이트가 일어남
  });

  images[0].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    let canvas = ctx.canvas;
    let hRatio = canvas.width / img.width;
    let vRatio = canvas.height / img.height;

    console.log(hRatio + "," + vRatio);

    //let ratio=Math.max(10, 20)//가장큰수를 찾음//20

    //이미지 500*500
    //넓은 화면일때 화면의 넓이가 1000 * 600 이라고 가정하면
    //hRatio =1000/500 =2  vRatio=600/500 = 1.2   ==>ratio=2

    //넓은 화면일때 화면의 넓이가 400 * 600 이라고 가정하면
    //hRatio =400/500 =0.8  vRatio=600/500 = 1.2   ==>ratio=1.2
    let ratio = Math.max(hRatio, vRatio);
    let centershift_x = (canvas.width - img.width * ratio) / 2;
    let centershift_y = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height); //화면정리
    //canvas에 이미지를 표현할때 drawImage(이미지, sx, sy, swidth, sheight,dx, dy, dwidth, dheight)  //sx, sy, swidth --> 소스자체 //dx, dy, dwidth, dheight-->소스가 만들어진후 설정
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centershift_x,
      centershift_y,
      img.width * ratio,
      img.height * ratio
    );
  }

  ScrollTrigger.create({
    trigger: "#page>canvas", //애니메이션이 시작될 요소
    scroller: "#main", //스크롤이 발생하는 요소
    pin: true, //스크롤하는 동안 트리거 요소 고정시킴
    start: "top top", //애니메이션 시작
    end: "1000% top", //애니메이션 종료
  });
} //canvas()

canvas();
//---------------------

gsap.to("#page1", {
    scrollTrigger:{
        trigger: "#page1", //애니메이션이 시작될 요소
        scroller: "#main", //스크롤이 발생하는 요소
        pin: true, //스크롤하는 동안 트리거 요소 고정시킴
        start: "top top", //애니메이션 시작
        end: "bottom top", //애니메이션 종료
        
    }
});

gsap.to("#page2", {
    scrollTrigger:{
        trigger: "#page2", //애니메이션이 시작될 요소
        scroller: "#main", //스크롤이 발생하는 요소
        pin: true, //스크롤하는 동안 트리거 요소 고정시킴
        start: "top top", //애니메이션 시작
        end: "bottom top", //애니메이션 종료
    }
});
gsap.to("#page3", {
    scrollTrigger:{
        trigger: "#page3", //애니메이션이 시작될 요소
        scroller: "#main", //스크롤이 발생하는 요소
        pin: true, //스크롤하는 동안 트리거 요소 고정시킴
        start: "top top", //애니메이션 시작
        end: "bottom top", //애니메이션 종료
    }
});
gsap.to("#page4", {
    scrollTrigger:{
        trigger: "#page4", //애니메이션이 시작될 요소
        scroller: "#main", //스크롤이 발생하는 요소
        pin: true, //스크롤하는 동안 트리거 요소 고정시킴
        start: "top top", //애니메이션 시작
        end: "bottom top", //애니메이션 종료
    }
});
gsap.to("#page5", {
    scrollTrigger:{
        trigger: "#page5", //애니메이션이 시작될 요소
        scroller: "#main", //스크롤이 발생하는 요소
        pin: true, //스크롤하는 동안 트리거 요소 고정시킴
        start: "top top", //애니메이션 시작
        end: "bottom top", //애니메이션 종료
    }
});





window.addEventListener("scroll",()=>{
    console.log("kdkdkd")
})







// javascript에서 img태그를 만드는 방법
//<img src="" alt="">
// 1) let imgEle=document.createElement('img')
// imgEle.src="이미지경로";
// imgEle.alt="이미지설명";
// document.body.appendChild(imgEle)

//2)let imgEle = new Image()//이미지태그 만들기
// console.log(imgEle)
// imgEle.src="../img.jpg"
// imgEle.alt="이미지설명"

// gsap.to("#page>canvas",{
//     scrollTrigger:{
//         trigger:"#page>canvas",//애니메이션이 시작될 요소
//         scroller:"#main",//스크롤이 발생하는 요소
//         pin:true,//스크롤하는 동안 트리거 요소 고정시킴
//         start:"top top",//애니메이션 시작
//         end:"600%  top" //애니메이션 종료

//     }
// })

// ScrollTrigger.create({
//     trigger:"#page>canvas",//애니메이션이 시작될 요소
//         scroller:"#main",//스크롤이 발생하는 요소
//         pin:true,//스크롤하는 동안 트리거 요소 고정시킴
//         start:"top top",//애니메이션 시작
//         end:"600%  top" //애니메이션 종료
// })
