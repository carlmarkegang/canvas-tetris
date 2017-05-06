function randomBlock() {
    blocktype = Math.floor(Math.random() * 7) + 1;
    //blocktype = 2;
    rotation = 1;
    if (blocktype == 1) {
        L_block();
        color = cube1;
    } else if (blocktype == 2) {
        I_block();
        color = cube2;
    }
    else if (blocktype == 3) {
        I_L_block();
        color = cube3;
    }
    else if (blocktype == 4) {
        O_block();
        color = cube4;
    }
    else if (blocktype == 5) {
        T_block();
        color = cube5;
    }
    else if (blocktype == 6) {
        Z_block();
        color = cube6;
    }
    else if (blocktype == 7) {
        inverted_Z_block();
        color = cube7;
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

//O BLOCK
function O_block() {
    playerRotationModifers[0].x = 0;
    playerRotationModifers[0].y = 0;
    playerRotationModifers[1].x = 1;
    playerRotationModifers[1].y = 0;
    playerRotationModifers[2].x = 1;
    playerRotationModifers[2].y = 1;
    playerRotationModifers[3].x = 0;
    playerRotationModifers[3].y = 1;
}

//T BLOCK
function T_block() {
    playerRotationModifers[0].x = 0;
    playerRotationModifers[0].y = 0;
    playerRotationModifers[1].x = 0;
    playerRotationModifers[1].y = -1;
    playerRotationModifers[2].x = 1;
    playerRotationModifers[2].y = 0;
    playerRotationModifers[3].x = -1;
    playerRotationModifers[3].y = 0;
}
//Z BLOCK
function Z_block() {
    playerRotationModifers[0].x = 0;
    playerRotationModifers[0].y = 0;
    playerRotationModifers[1].x = -1;
    playerRotationModifers[1].y = 0;
    playerRotationModifers[2].x = 1;
    playerRotationModifers[2].y = 1;
    playerRotationModifers[3].x = 0;
    playerRotationModifers[3].y = 1;
}

//Inverted Z BLOCK
function inverted_Z_block() {
    playerRotationModifers[0].x = 0;
    playerRotationModifers[0].y = 0;
    playerRotationModifers[1].x = 0;
    playerRotationModifers[1].y = 1;
    playerRotationModifers[2].x = 1;
    playerRotationModifers[2].y = 0;
    playerRotationModifers[3].x = -1;
    playerRotationModifers[3].y = 1;
}

function spinBlock() {
    //console.log(blocktype + " " + rotation);
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
            rotation = 1;
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
            rotation = 1;
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
            rotation = 1;
        }
    }  else if (blocktype == 5) {
        if (rotation == 1){
            playerRotationModifers[0].x = 0;
            playerRotationModifers[0].y = 0;
            playerRotationModifers[1].x = 0;
            playerRotationModifers[1].y = -1;
            playerRotationModifers[2].x = 1;
            playerRotationModifers[2].y = 0;
            playerRotationModifers[3].x = -1;
            playerRotationModifers[3].y = 0;
        } else if (rotation == 2){
            playerRotationModifers[0].x = 0;
            playerRotationModifers[0].y = 0;
            playerRotationModifers[1].x = -1;
            playerRotationModifers[1].y = 0;
            playerRotationModifers[2].x = 0;
            playerRotationModifers[2].y = 1;
            playerRotationModifers[3].x = 0;
            playerRotationModifers[3].y = -1;
        } else if (rotation == 3){
            playerRotationModifers[0].x = 0;
            playerRotationModifers[0].y = 0;
            playerRotationModifers[1].x = 0;
            playerRotationModifers[1].y = 1;
            playerRotationModifers[2].x = 1;
            playerRotationModifers[2].y = 0;
            playerRotationModifers[3].x = -1;
            playerRotationModifers[3].y = 0;
        } else if (rotation == 4){
            playerRotationModifers[0].x = 0;
            playerRotationModifers[0].y = 0;
            playerRotationModifers[1].x = 1;
            playerRotationModifers[1].y = 0;
            playerRotationModifers[2].x = 0;
            playerRotationModifers[2].y = 1;
            playerRotationModifers[3].x = 0;
            playerRotationModifers[3].y = -1;
            rotation = 1;
        }
    } else if (blocktype == 6) {
        if (rotation == 1 || rotation == 3){
            playerRotationModifers[0].x = 0;
            playerRotationModifers[0].y = 0;
            playerRotationModifers[1].x = -1;
            playerRotationModifers[1].y = 0;
            playerRotationModifers[2].x = 1;
            playerRotationModifers[2].y = 1;
            playerRotationModifers[3].x = 0;
            playerRotationModifers[3].y = 1;
        } else if (rotation == 2 || rotation == 4){
            playerRotationModifers[0].x = 0;
            playerRotationModifers[0].y = 0;
            playerRotationModifers[1].x = 1;
            playerRotationModifers[1].y = -1;
            playerRotationModifers[2].x = 1;
            playerRotationModifers[2].y = 0;
            playerRotationModifers[3].x = 0;
            playerRotationModifers[3].y = 1;
            rotation = 1;
        }
    } else if (blocktype == 7) {
        if (rotation == 1 || rotation == 3){
            playerRotationModifers[0].x = 0;
            playerRotationModifers[0].y = 0;
            playerRotationModifers[1].x = 0;
            playerRotationModifers[1].y = 1;
            playerRotationModifers[2].x = 1;
            playerRotationModifers[2].y = 0;
            playerRotationModifers[3].x = -1;
            playerRotationModifers[3].y = 1;
        } else if (rotation == 2 || rotation == 4){
            playerRotationModifers[0].x = 0;
            playerRotationModifers[0].y = 0;
            playerRotationModifers[1].x = 0;
            playerRotationModifers[1].y = -1;
            playerRotationModifers[2].x = 1;
            playerRotationModifers[2].y = 0;
            playerRotationModifers[3].x = 1;
            playerRotationModifers[3].y = 1;
            rotation = 1;
        }
    }
}