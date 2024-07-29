<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="style.css">
	<title>Наличие</title>
</head>
<body>
	<button class="back-btn" onclick="redirectToIndex()">←</button>
	<div class="container">
		<div class="inner">
			<div class="item">
				<img src="1.png" alt="" class="img">
				<button class="btn" id="btn1">1hot</button>
			</div>
			<div class="item">
				<img src="1.png" alt="" class="img">
				<button class="btn" id="btn2">2</button>
			</div>
			<div class="item">
				<img src="1.png" alt="" class="img">
				<button class="btn" id="btn3">3</button>
			</div>
			<div class="item">
				<img src="1.png" alt="" class="img">
				<button class="btn" id="btn4">4</button>
			</div>
			<div class="item">
				<img src="1.png" alt="" class="img">
				<button class="btn" id="btn5">5</button>
			</div>
			<div class="item">
				<img src="1.png" alt="" class="img">
				<button class="btn" id="btn6">6</button>
			</div>
		</div>
	</div>
	<div class="usercard" id="usercard">
		
	</div>

	<script src="https://telegram.org/js/telegram-web-app.js"></script>
	<script src="app.js"></script>
	<script>
		function redirectToIndex(){
			window.location.href = 'index.html';
		}
	</script>
</body>
</html>







