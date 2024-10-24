<template>
<div class="card">
  <div class="outside">
    <div class="front">
        <div class="card-title">
            <h1><span>HAPPY</span><br>ANNIVERSARY</h1>
        </div>
        <!-- <p class="desc"> pick your perfect <span>bouquet</span></p> -->
        <div>
            <img class="flower"
                src="https://img.freepik.com/premium-vector/bright-sunflower-bouquet-illustration_53876-210273.jpg" />
        </div>

        <!-- <p class="account">don't have an account?</p> -->
        <div class="card-desc">
            <p>Join us in celebrating our love!</p>
            <h2>1 Year Together</h2>
        </div>
    </div>
    <div class="back"></div>
  </div>
  <div class="inside">
    <!-- <div class="card-header">
        <h1>Happy Anniversary</h1>
    </div> -->
    <div class="card-content">
        <!-- <p>Join us in celebrating our love!</p>
        <h2>1 Year Together</h2> -->
        <p>Dear Min-Dang T-Rak
        <br><br><br>Thank you for never leaving my side, and for always forgiving me, no matter what.
        <br><br>I’m sorry for the times I’ve upset you, but from now on, we will walk this journey together. 
        <br><br>No matter what lies ahead, I promise to take care of us and give my all for our happiness</p>
        <!-- <p>Time: 5:00 PM</p>
        <p>Venue: To Be Continuous</p> -->
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" id="svg5" version="1.1" viewBox="0 0 298 49">
        <filter id="blur">
            <feGaussianBlur stdDeviation="1.6" />
        </filter>
        <g transform="translate(44.1 -127.42)">
            <path id="line"
                d="M-28.73 167.2c26.43 9.21 68.46-9.46 85.45-12.03 18.45-2.78 32.82 4.86 28.75 9.83-3.82 4.66-25.77-21.18-14.81-31.5 9.54-8.98 17.64 10.64 16.42 17.06-1.51-6.2 2.95-26.6 14.74-22.11 11.7 4.46-4.33 49.03-15.44 44.08-6.97-3.1 15.44-16.26 26.1-16 23.03.56 55.6 27.51 126.63 3.36"
                pathLength="1" />
            <path filter="url(#blur)" id="point"
                d="M-28.73 167.2c26.43 9.21 68.46-9.46 85.45-12.03 18.45-2.78 32.82 4.86 28.75 9.83-3.82 4.66-25.77-21.18-14.81-31.5 9.54-8.98 17.64 10.64 16.42 17.06-1.51-6.2 2.95-26.6 14.74-22.11 11.7 4.46-4.33 49.03-15.44 44.08-6.97-3.1 15.44-16.26 26.1-16 23.03.56 55.6 27.51 126.63 3.36"
                pathLength="1" />
        </g>
    </svg>
    <div class="card-footer"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Celibrate'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


    .card {
        width: min(90vw, 90vh);
        height: min(64vw, 64vh);
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transition: 2s;
        transform-style: preserve-3d;
        /* -webkit-perspective: 1200px;
        perspective: 1200px; */

    }

    .card:hover {
        transform: rotate(-8deg);
    }

    .card:hover .outside {
        transform: rotateY(-130deg);
    }


    .flower {
        position: relative;
        width: min(20vw, 20vh);
        /* left: min(10vw, 10vh); */
        opacity: .7;
        margin: min(2vw, 2vh) min(10vw, 10vh);
    }

    svg #line {
        fill: none;
        stroke: #e00000;
        stroke-width: 1.5;
        stroke-linecap: butt;
        stroke-linejoin: round;
        stroke-miterlimit: 4;

        stroke-opacity: 1;
        stroke-dasharray: 1;
        stroke-dashoffset: 0;
    }

    svg #point {
        fill: none;
        stroke: #f00000;
        stroke-width: 5;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: .1;
        stroke-opacity: 1;
        stroke-dasharray: .0001, .9999;
        stroke-dashoffset: 1;
    }

    .outside,
    .inside {
        height: 100%;
        width: 50%;
        position: absolute;
        left: 50.05%;
        text-align: center;
    }

    .inside {
        background: linear-gradient(to right, #e7e7e7, #f6f6f6 30%);
        /* line-height: 2; */
        /* padding: 0 20px; */
        text-align: center;
        /* display: flex; */
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        /* left: 50%; */
    }

    .outside {
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        z-index: 1;
        transform-origin: left;
        transition: 2s;
        cursor: pointer;

    }

    .front,
    .back {
        height: 100%;
        width: 100%;
        position: absolute;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        transform: rotateX(0deg);
    }

    .front {
        background: #f6f6f6;
    }

    .back {
        transform: rotateY(180deg);
        background: linear-gradient(to left, #d7d7d7, #f6f6f6 30%);
    }

    /* .outside p {
        font-size: 23px;
        text-transform: uppercase;
        margin-top: 30px;
        text-align: center;
        letter-spacing: 6px;
        color: #000046;
    }

    .inside h1 {
        font-size: 120px;
        line-height: 120px;
    } */




    .card-title h1 {
        font-family: var(--serif);
        font-size: min(4vw, 4vh);
        letter-spacing: min(.8vw, .8vh);
        font-weight: 300;
        margin-top: 20%;
    }

    .card-title span {
        font-family: var(--serif);
        font-size: min(5vw, 5vh);
        letter-spacing: min(2vw, 2vh);
        color: var(--pale);
    }

    .card-desc p {
        font-size: min(1.5vw, 1.5vh);
        letter-spacing: min(.3vw, .3vh);
    }

    .card-desc h2 {
        font-size: min(3vw, 3vh);
        letter-spacing: min(.5vw, .5vh);
    }

    .card-content {
        margin: 37% 10% 33% 10%;
    }
    .card-content p {
        font-size: min(1.5vw, 1.5vh);
        margin: 0;
        text-align: left;
    }

    .card-content h2 {
        font-size: min(2vw, 2vh);
        margin: 5%;
    }

    .card-footer {
        margin: 5%;
    }
</style>
