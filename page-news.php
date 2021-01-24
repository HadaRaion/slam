<?php get_header(); ?>

	<main class="wrapper news" data-barba="container" data-barba-namespace="news">
		<div class="page-header">
			<h2>News</h2>
		</div>

		<div class="container-fluid works__list">
			<?php echo do_shortcode('[kboard id=1]'); ?>
		</div>	
	</main>

<?php get_footer(); ?>
