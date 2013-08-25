<html>
	<head>
		<title>Versions</title>
	</head>
	<body>
		<ul>
			<?php 
				$dirs = scandir('deploy', '..', '.');
				foreach($dirs as $dir) {
					print '<li><a href="deploy/'.$dir.'">' . $dir . "</a></li>";
				}
			?>
		</ul>
	</body>
</html>