<?php get_header(); ?>
<main class="wrapper page" data-barba="container" data-barba-namespace="page">
	<div class="page-header">
		<h2>Page</h2>
	</div>
		<div class="container-fluid">
			<div id="image-slider" class="splide">
				<div class="splide__track">
					<ul class="splide__list">
						<li class="splide__slide">
							<img src="<?php echo get_theme_file_uri('/images/slam-member.jpg'); ?>">
						</li>
						<li class="splide__slide">
							<img src="<?php echo get_theme_file_uri('/images/slam-member.jpg'); ?>">
						</li>
						<li class="splide__slide">
							<img src="<?php echo get_theme_file_uri('/images/slam-member.jpg'); ?>">
						</li>
					</ul>
				</div>
			</div>
		</div>	
</main>

<?php get_footer(); ?>