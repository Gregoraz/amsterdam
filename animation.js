
				var canvas = document.getElementById('myCanvas'); //get canvas from html
			    var ctx = canvas.getContext('2d');
				
				function Ball(x,y) {                                //class Ball
					
                    this.x = x;
					this.y = y;
                    
					this.randomNumber = function(min, max) {
						return Math.floor(Math.random() * (max - min + 1)) + min;
					};
                    
                    
					this.randomize = function() {
                        this.speedx = this.randomNumber(15,35);
						this.speedy = this.randomNumber(15,35);
						this.radius = this.randomNumber(5,30);
						
					};
					this.reverseX = function() {
						this.speedx = -(this.speedx);
					};
					
					this.reverseY = function() {
						this.speedy = -(this.speedy);
					};
					
					this.updatePosition = function() {
						this.x += this.speedx;
						this.y += this.speedy;
					};
				}

               

				var ball = new Ball(30,30);                     //Create balls
				var ball2 = new Ball(50,120);
				var ball3 =  new Ball(120,150);
                var ball4 = new Ball(150,180);
                var ball5 = new Ball(200,220);
                var ball6 = new Ball(250,270);
                var ball7 = new Ball(300,320);
                
                
				var balls = [ball,ball2,ball3,ball4,ball5,ball6,ball7]; //balls array

                for(i=0;i<balls.length;i++) {       //randomize balls
                    balls[i].randomize();
                }
                
    
                var colors = ["#00ff00", "#0000ff", "#003300", "#ff9900", "#660066", "#0099cc", "#669900"]; //colors array
                var color = colors[0];
                var i=0;

                function pickColor() {
                    if(i==7) i=0;
                    color = colors[i];
                    i++
                }

				setInterval(draw, 35);               //every 35 ms, use animate function (hook)
                setInterval(pickColor, 1000);       //every 1 sec change color of balls

				function draw() {  
                                                            //draw
					ctx.clearRect(0,0, canvas.width, canvas.height);  //clear previous draw every 35ms
                  
					for(var i=0;i<balls.length;i++){
						if(((balls[i].x + balls[i].radius) >= canvas.width) || (balls[i].x - balls[i].radius < 0)) {
							balls[i].reverseX();            //go back in X
						}
						if(((balls[i].y + balls[i].radius) >= canvas.height) || (balls[i].y - balls[i].radius < 0)) {
							balls[i].reverseY();            //go back in Y
						}
			            
						balls[i].updatePosition();
                        
                        ctx.fillStyle = color;
						ctx.beginPath();
						ctx.arc(balls[i].x, balls[i].y, balls[i].radius, 0, 2 * Math.PI, false);
						ctx.fill();
						ctx.closePath();
					}
				}

