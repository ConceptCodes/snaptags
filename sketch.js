const WIDTH = 400
const HEIGHT = 400

const ROWS = 20
const COLS = 20

const MAX_CHARACTERS = 10

function _encoder(data){
  //convert source message to string of bits
  //compute symbol_size & mode message
  //create reed-solomon codeword size
  //bit-stuffing the message into Reed–Solomon codewords
  //Padding the message to a codeword boundary
  //Appending check codewords
  //Arranging the complete message in a spiral around the core
}

function generate_background_pixels(){
  for (var x = 0; x < WIDTH; x += WIDTH / ROWS) {
		for (var y = 0; y < HEIGHT; y += HEIGHT / COLS) {
      stroke(0)
      fill(51)
			rect(x,y,ROWS,COLS)
		}
  }
}

function draw_pixel_at(x,y){
  fill(255)
  rect(x,y,ROWS,COLS)
}

function draw_bulleyes() {
  let bullseyes = {width: 13, height: 13}
  let center_point = WIDTH/2
  let move = ROWS
  // first draw square in the center
  draw_pixel_at(center_point,center_point)
  // then worry about making a bigger square
  draw_pixel_at(center_point-move,center_point)
  draw_pixel_at(center_point-move,center_point+move)
  draw_pixel_at(center_point,center_point+move)
  
}

function setup() {
  createCanvas(WIDTH, HEIGHT)
}

function draw() {
  //set background to white
  background(51)
  // create grid of pixels
  generate_background_pixels()
  draw_bulleyes()
}
