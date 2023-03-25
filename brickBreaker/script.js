var ball = document.querySelector('.ball');
var paddle = document.querySelector('.paddle');
var container = document.querySelector('.container');
var bricks = document.querySelector('.bricks');
var score = 0;

for (var i = 0; i < 20; i++) {
  var brick = document.createElement('div');
  brick.classList.add('brick');
  bricks.appendChild(brick);
}

var bricksArray = Array.from(document.querySelectorAll('.brick'));

var ballSpeedX = 3;
var ballSpeedY = -3;

function moveBall() {
  var ballX = ball.offsetLeft;
  var ballY = ball.offsetTop;

  if (ballX + ballSpeedX > container.offsetWidth - ball.offsetWidth || ballX + ballSpeedX < 0) {
    ballSpeedX = -ballSpeedX;
  }

  if (ballY + ballSpeedY < 0) {
    ballSpeedY = -ballSpeedY;
  }

  if (ballY + ballSpeedY > container.offsetHeight - ball.offsetHeight) {
    if (ballX + ball.offsetWidth >= paddle.offsetLeft && ballX <= paddle.offsetLeft + paddle.offsetWidth) {
      ballSpeedY = -ballSpeedY;
      score += 10;
      document.querySelector('.score').innerHTML = 'Score: ' + score;
    } else {
      clearInterval(intervalId);
      alert('Game Over');
    }
  }

  var brickCount = 0;

  for (var i = 0; i < bricksArray.length; i++) {
    if (bricksArray[i].style.display !== 'none') {
      brickCount++;
      if (ballY + ball.offsetHeight >= bricksArray[i].offsetTop && ballY <= bricksArray[i].offsetTop + bricksArray[i].offsetHeight && ballX + ball.offsetWidth >= bricksArray[i].offsetLeft && ballX <= bricksArray[i].offsetLeft + bricksArray[i].offsetWidth) {
        ballSpeedY = -ballSpeedY;
        bricksArray[i].style.display = 'none';
        score += 20;
        document.querySelector('.score').innerHTML = 'Score: ' + score;
      }
    }
  }

  if (brickCount === 0) {
    clearInterval(intervalId);
    alert('You Win!');
  }

  ball.style.top = ballY + ballSpeedY + 'px';
  ball.style.left = ballX + ballSpeedX + 'px';
}

var intervalId = setInterval(moveBall, 30);

document.addEventListener('mousemove', function(event) {
  var paddleX = event.clientX - container.offsetLeft - paddle.offsetWidth / 2;

  if (paddleX < 0) {
    paddleX = 0;
  }

  if (paddleX > container.offsetWidth - paddle.offsetWidth) {
    paddleX = container.offsetWidth - paddle.offsetWidth;
  }

  paddle.style.left = paddleX + 'px';
});

document.querySelector('.container').addEventListener('click', function(event) {
  if (event.target.classList.contains('brick')) {
    event.target.style.display = 'none';
    score += 5;
    document.querySelector('.score').innerHTML = 'Score: ' + score;
  }
});






