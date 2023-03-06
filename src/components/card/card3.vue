<template>
    <div class="wrapper">
        <div class="single-card">
            <div class="front"></div>
            <div class="back">
                <div class="content"></div><br>
                <h1>Name</h1>
                <h4>dddddddd</h4>
                <p class="text-center">
                    jjjjjjjjjjjj
                </p>
                <p class="socials">
                    <i class="fa fa-youtube"></i>
                </p>
            </div>
        </div>
    </div>
</template>
<style>
.wrapper,
.single-card {
    height: 300px;
    max-width: 300px;
    margin: auto;
    position: relative;
}

.wrapper {
    perspective: 900px;
}

.single-card {
    text-align: center;
    transition: all 1.5s cubic-bezier(0.7, -.5, 0.3, 1.8);
    transform-style: preserve-3d;
}

.wrapper:hover .single-card {
    transform: rotateY(180deg);

}

.front,
.back {
    width: 300px;
    position: relative;
    top: 0;
    left: 0;
    backface-visibility: hidden;
}

.front {
    cursor: pointer;
    height: 100%;
    background-image: url(1.png);
    backface-visibility: hidden;
    border-radius: 50px;
    background-size: cover;
    background-position: center center;

}

.back {
    transform: rotateY(180deg);
    background-image: url(1.png);
    position: absolute;
    border-radius: 50px;
    height: 300px;
    background: #000000;

}


.content {
    font-size: 350px;
    margin: 0;
    font-weight: 300;

}
</style>
  