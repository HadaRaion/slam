<?php get_header(); ?>
<main class="wrapper contact" data-barba="container" data-barba-namespace="contact">
			<div class="page-header">
				<h2>
					<span class="letter">C</span>
					<span class="letter">o</span>
					<span class="letter">n</span>
					<span class="letter">t</span>
					<span class="letter">a</span>
					<span class="letter">c</span>
					<span class="letter">t</span>
				</h2>
			</div>

			<?php if(pll_current_language() == 'ko'): ?> 

<?php else: ?> 

<?php endif; ?>
			<div class="container-fluid justify-content-between page-body">
				<div class="row--contact">
					<div class="col--contact col--contact-info">
						<div class="contact__info">
							<div class="contact__info__title">
								<p>Locatdion.</p>
							</div>
							<div class="contact__info__content">
								<p>서울시 마포구 상암산로34 디지털큐브 14층</p>
								<p>14F / 34, Sangamsan-ro, Mapo-gu, Seoul, Republic of Korea</p>
							</div>
						</div>

						<div class="contact__info">
							<div class="contact__info__title">
								<p>Tel.</p>
							</div>
							<div class="contact__info__content">
								<p><a href="tel:+82231510573">02. 3151. 0573</a></p>
							</div>
						</div>

						<div class="contact__info">
							<div class="contact__info__title">
								<p>Fax.</p>
							</div>
							<div class="contact__info__content">
								<p><a href="fax:+82263508930">02. 6350. 8930</a></p>
							</div>
						</div>

						<div class="contact__info">
							<div class="contact__info__title">
								<p>Mail.</p>
							</div>
							<div class="contact__info__content">
								<p><a mailto:contact@studioslam.net>contact@studioslam.net</a></p>
							</div>
						</div>

						<div class="contact__map">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.1027723887114!2d126.88705335179093!3d37.57619757969692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9913507f65dd%3A0xa13814ae2b69133!2z7IOB7JWU64-ZRE1D65SU7KeA7YS47YGQ67iM!5e0!3m2!1sko!2skr!4v1611229660630!5m2!1sko!2skr" frameborder="0" style="border: 0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
						</div>
					</div>

					<div class="col--contact contact__form col--contact-form">
						<?php echo do_shortcode('[contact-form-7 id="21" title="Slam Contact"]'); ?>
					</div>
				</div>
			</div>
		</main>
	
<?php get_footer(); ?>