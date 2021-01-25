<?php
  
  get_header();
     ?>
<main class="wrapper detail" data-barba="container" data-barba-namespace="detail">
	<div class="container-fluid">
		<div class="detail__video">
			<iframe src="<?php echo the_field('slam_movie'); ?>?controls=0&autoplay=1" frameborder="0" allowfullscreen></iframe>
		</div>
	</div>

	<div class="container-fluid">
		<div class="mouse-scroll">
			<span>Scroll</span>

			<svg class="mouse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 130" preserveAspectRatio="xMidYMid meet">
				<g fill="none" fill-rule="evenodd">
					<rect width="70" height="110" x="1.5" y="1.5" stroke="#FFF" stroke-width="3" rx="36" />
					<circle class="scroll" cx="36.5" cy="31.5" r="5.6" fill="#FFF" />
				</g>
			</svg>
		</div>
	</div>

	<div class="container-fluid">
		<h4 class="detail__title"><?php the_title(); ?></h4>

		<div class="row row--detail">
			<div class="col col--detail-sub-title">
				<p class="detail__sub-title">제작진.</p>
			</div>
			<div class="col">
				<p>기획 / <?php the_field('slam_leader'); ?></p>
				<p>연출 / <?php the_field('slam_pd'); ?></p>
				<p>작가 / <?php the_field('slam_writer'); ?></p>
			</div>
		</div>

		<div class="row row--detail">
			<div class="col col--detail-sub-title">
				<p class="detail__sub-title">방영기간.</p>
			</div>
			<div class="col">
				<p><?php the_field('slam_period'); ?></p>
			</div>
		</div>

		<div class="row row--detail">
			<div class="col col--detail-sub-title">
				<p class="detail__sub-title">방송사.</p>
			</div>
			<div class="col">
				<p><?php the_field('slam_channel'); ?></p>
			</div>
		</div>

		<div class="row row--detail">
			<div class="col col--detail-sub-title">
				<p class="detail__sub-title">출연진.</p>
			</div>
			<div class="col">
				<p><?php the_field('slam_hosts'); ?></p>
			</div>
		</div>

		<div class="row row--detail">
			<div class="col col--detail-sub-title">
				<p class="detail__sub-title">기획의도.</p>
			</div>
			<div class="col">
				<p><?php the_field('slam_plot'); ?></p>
			</div>
		</div>


		<div class="row row--detail row--for-detail-link">
			<div class="col col--detail-sub-title">
				<p class="detail__sub-title"></p>
			</div>
			<div class="col">
				<p class="detail__link"><a href="<?php the_field('slam_link'); ?>" target="_blank" >공식홈페이지</a></p>
			</div>
		</div>
		<div class="row row--detail">
			<div class="col col--detail-sub-title">
				<p class="detail__sub-title">Image.</p>
			</div>
			<div class="col">
			
			</div>
		</div>
	</div>

	<div class="container-fluid">
		<div class="detail__slider-wrapper">
			<div id="image-slider" class="splide detail__slider">
				<div class="splide__track">
					<ul class="splide__list">
						<?php 
							$image = get_field('slam_img_1');
							if( !empty( $image ) ): ?>
								<li class="splide__slide">
									<img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
								</li>								
						<?php endif;

							$image2 = get_field('slam_img_2');
							if( !empty( $image2 ) ): ?>
								<li class="splide__slide">
									<img src="<?php echo esc_url($image2['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
								</li>								
						<?php endif;

						$image3 = get_field('slam_img_3');
						if( !empty( $image3 ) ): ?>
							<li class="splide__slide">
								<img src="<?php echo esc_url($image3['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
							</li>								
						<?php endif; 	
								
						$image4 = get_field('slam_img_4');
							if( !empty( $image4 ) ): ?>
								<li class="splide__slide">
									<img src="<?php echo esc_url($image4['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
								</li>								
						<?php endif; 

						$image5 = get_field('slam_img_5');
							if( !empty( $image5 ) ): ?>
								<li class="splide__slide">
									<img src="<?php echo esc_url($image5['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
								</li>								
						<?php endif;

						$image6 = get_field('slam_img_6');
							if( !empty( $image6 ) ): ?>
								<li class="splide__slide">
									<img src="<?php echo esc_url($image6['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
								</li>								
						<?php endif; ?>

					</ul>
				</div>
			</div>
		</div>

	</div>	

	<div class="container-fluid">
		<div class="detail__go-back">
			<a href="<?php echo site_url('/works') ?>">Back</a>
		</div>
		
	</div>
</main>


<?php get_footer(); ?>


