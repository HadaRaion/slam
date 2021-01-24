<?php get_header(); ?>
<main class="wrapper works" data-barba="container" data-barba-namespace="works">
	<div class="page-header">
		<h2>Works</h2>
	</div>

	<div class="container-fluid works__list">
		<ul class="">
				<?php
					while(have_posts()) {
						the_post(); ?>
						<li class="works__list__item">
							<a class="works__image" href="<?php the_permalink(); ?>">
								<img src="<?php the_post_thumbnail_url('slam-works') ?>" alt="썸네일" />
							</a>
							<h4 class="works__title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
						</li>
						<?php } ?>
			</ul>


		 <!-- <?php echo paginate_links();?> -->
		<!-- <?php echo do_shortcode('[ajax_load_more posts_per_page="6" ]'); ?>
		<?php echo do_shortcode('[ajax_load_more id="slam-ajax" loading_style="grey" container_type="ul" post_type="post" posts_per_page="6" button_loading_label="Loading Works"]'); ?> -->
	</div>
</main>



<?php get_footer(); ?>