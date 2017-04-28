function randomBlock() {
    blocktype = Math.floor(Math.random() * 3) + 1;
    rotation = 1;
    if (blocktype == 1) {
        L_block();
    } else if (blocktype == 2) {
        I_block();
    }
    else if (blocktype == 3) {
        I_L_block();
    }
}


//I BLOCK
function I_block() {
    playerRotationModifers[0].x = 0;
    playerRotationModifers[0].y = 0;
    playerRotationModifers[1].x = 0;
    playerRotationModifers[1].y = -1;
    playerRotationModifers[2].x = 0;
    playerRotationModifers[2].y = 1;
    playerRotationModifers[3].x = 0;
    playerRotationModifers[3].y = 2;
}


//L BLOCK
function L_block() {
    playerRotationModifers[0].x = 0;
    playerRotationModifers[0].y = 0;
    playerRotationModifers[1].x = 1;
    playerRotationModifers[1].y = 0;
    playerRotationModifers[2].x = -1;
    playerRotationModifers[2].y = 0;
    playerRotationModifers[3].x = -1;
    playerRotationModifers[3].y = 1;
}

//INVERTED L BLOCK
function I_L_block() {
    playerRotationModifers[0].x = 0;
    playerRotationModifers[0].y = 0;
    playerRotationModifers[1].x = 1;
    playerRotationModifers[1].y = 0;
    playerRotationModifers[2].x = -1;
    playerRotationModifers[2].y = 0;
    playerRotationModifers[3].x = 1;
    playerRotationModifers[3].y = 1;
}

function spinBlock() {
    console.log(blocktype + " " + rotation);
    //L BLOCK
    if (blocktype == 1) {

        if (rotation == 1) {
            playerRotationModifers[0].x = 0;
            playerRotationModifers[0].y = 0;
            playerRotationModifers[1].x = 1;
            playerRotationModifers[1].y = 0;
            playerRotationModifers[2].x = -1;
            playerRotationModifers[2].y = 0;
            playerRotationModifers[3].x = -1;
            playerRotationModifers[3].y = 1;

        } else if (rotation == 2) {

            playerRotationModifers[0].x = 0;
            playerRotationModifers[0].y = 0;
            playerRotationModifers[1].x = 0;
            playerRotationModifers[1].y = -1;
            playerRotationModifers[2].x = 0;
            playerRotationModifers[2].y = 1;
            playerRotationModifers[3].x = 1;
            playerRotationModifers[3].y = 1;

        } else if (rotation == 3) {

            playerRotationModifers[0].x = 0;
            playerRotationModifers[0].y = 1;
            playerRotationModifers[1].x = 1;
            playerRotationModifers[1].y = 1;
            playerRotationModifers[2].x = -1;
            playerRotationModifers[2].y = 1;
            playerRotationModifers[3].x = 1;
            playerRotationModifers[3].y = 0;

        } else if (rotation == 4) {

            playerRotationModifers[0].x = 0;
            playerRotationModifers[0].y = 0;
            playerRotationModifers[1].x = 0;
            playerRotationModifers[1].y = -1;
            playerRotationModifers[2].x = 0;
            playerRotationModifers[2].y = 1;
            playerRotationModifers[3].x = -1;
            playerRotationModifers[3].y = -1;
            rotation = 0;
        }
    }

    // I BLOCK
    else if (blocktype == 2) {
        if (rotation == 1) {
            playerRotationModifers[0].x = 0;
            playerRotationModifers[0].y = 0;
            playerRotationModifers[1].x = 0;
            playerRotationModifers[1].y = -1;
            playerRotationModifers[2].x = 0;
            playerRotationModifers[2].y = 1;
            playerRotationModifers[3].x = 0;
            playerRotationModifers[3].y = 2;

        } else if (rotation == 2) {

            playerRotationModifers[0].x = 0;
            playerRotationModifers[0].y = 0;
            playerRotationModifers[1].x = -1;
            playerRotationModifers[1].y = 0;
            playerRotationModifers[2].x = 1;
            playerRotationModifers[2].y = 0;
            playerRotationModifers[3].x = 2;
            playerRotationModifers[3].y = 0;

        } else if (rotation == 3) {

            playerRotationModifers[0].x = 0;
            playerRotationModifers[0].y = 0;
            playerRotationModifers[1].x = 0;
            playerRotationModifers[1].y = -1;
            playerRotationModifers[2].x = 0;
            playerRotationModifers[2].y = 1;
            playerRotationModifers[3].x = 0;
            playerRotationModifers[3].y = 2;

        } else if (rotation == 4) {

            playerRotationModifers[0].x = 0;
            playerRotationModifers[0].y = 0;
            playerRotationModifers[1].x = -1;
            playerRotationModifers[1].y = 0;
            playerRotationModifers[2].x = 1;
            playerRotationModifers[2].y = 0;
            playerRotationModifers[3].x = 2;
            playerRotationModifers[3].y = 0;
            rotation = 0;
        }
    }

    // INVERTED L Block
    else if (blocktype == 3) {
        if (rotation == 1) {
            playerRotationModifers[0].x = 0;
            playerRotationModifers[0].y = 0;
            playerRotationModifers[1].x = 1;
            playerRotationModifers[1].y = 0;
            playerRotationModifers[2].x = -1;
            playerRotationModifers[2].y = 0;
            playerRotationModifers[3].x = 1;
            playerRotationModifers[3].y = 1;

        } else if (rotation == 2) {

            playerRotationModifers[0].x = 1;
            playerRotationModifers[0].y = 0;
            playerRotationModifers[1].x = 1;
            playerRotationModifers[1].y = -1;
            playerRotationModifers[2].x = 1;
            playerRotationModifers[2].y = 1;
            playerRotationModifers[3].x = 0;
            playerRotationModifers[3].y = 1;

        } else if (rotation == 3) {

            playerRotationModifers[0].x = 0;
            playerRotationModifers[0].y = 1;
            playerRotationModifers[1].x = 1;
            playerRotationModifers[1].y = 1;
            playerRotationModifers[2].x = -1;
            playerRotationModifers[2].y = 1;
            playerRotationModifers[3].x = -1;
            playerRotationModifers[3].y = 0;

        } else if (rotation == 4) {

            playerRotationModifers[0].x = -1;
            playerRotationModifers[0].y = 0;
            playerRotationModifers[1].x = -1;
            playerRotationModifers[1].y = -1;
            playerRotationModifers[2].x = -1;
            playerRotationModifers[2].y = 1;
            playerRotationModifers[3].x = 0;
            playerRotationModifers[3].y = -1;
            rotation = 0;
        }
    }
}