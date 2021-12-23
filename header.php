<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">  
		<meta name="Description" content="'다름'을 존중하고 창조하는 크리에이터들의 공간, 스튜디오 슬램의 홈페이지에 오신 것을 환영합니다.">
		<meta name="Keywords" content="스튜디오 슬램, 슬램, 슬램스튜디오, 예능, 예능프로그램, 드라마, 예능제작, 드라마제작, 콘텐츠, 미디어, 크리에이터, 트렌드리더, Studioslam, Studio slam, slam, jtbc, jtbc studio, jtbc 스튜디오, 레이블, 채용정보, 보도자료, 싱어게인, 무명가수전">
		<meta property="og:type" content="website"> 
		<meta property="og:title" content="스튜디오슬램">
		<meta property="og:description" content="'다름'을 존중하고 창조하는 크리에이터들의 공간, 스튜디오 슬램의 홈페이지에 오신 것을 환영합니다.">
		<meta property="og:image" content="https://studioslam.net/wp-content/uploads/2021/01/cropped-210121_slam_pavicon_2.png">
		<meta property="og:url" content="https://studioslam.net/">
		<meta name="naver-site-verification" content="e4e662b06ffab6f86470894a0621409a59da748b" />

    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
	<div data-barba="wrapper">
<!-- 		
		<div class="loader">
			<div class="loader__logo">
				<div class="loader__logo__top">
					<img src=<?php echo get_theme_file_uri('/images/slam_s.svg'); ?>" >
					<img src=<?php echo get_theme_file_uri('/images/slam_l.svg'); ?>" >
					<img src=<?php echo get_theme_file_uri('/images/slam_a.svg'); ?>" >
					<img src=<?php echo get_theme_file_uri('/images/slam_m.svg'); ?>" >
				</div>
				<div class="loader__logo__bottom">
					<img src=<?php echo get_theme_file_uri('/images/slam_studio.svg'); ?>" >
				</div>
			</div>
		</div>
		 -->
		<div class="transition"></div>
		<div class="black-filter"></div>

		<header class="header">
			<div class="container-fluid header__container">
				<div class="row justify-content-between align-items-center row--direction-no-change">
					<div class="col">
						<a class="logo" href="<?php echo site_url() ?>"><img src=<?php echo get_theme_file_uri('/images/logo_white.svg'); ?>" alt="사이트로고" /></a>
					</div>
					<div class="col">

					<ul class="languages">
						<?php pll_the_languages(); ?>
					</ul>

					<!-- <ul class="social">
						<li>
							<a class="social__icon fab fa-instagram" href="#" target="_blank"></a>
						</li>
						<li>
							<a class="social__icon fab fa-youtube" href="#"></a>
						</li>
					</ul> -->
					</div>
				</div>
			</div>
		</header>

		<div class="menu-btn-container">
			<div>
				<a href="" class="menu-btn">
					<span class="line line--1"></span>
					<span class="line line--2"></span>
					<div class="menu--text">
						<span data-hover>Menu</span>
						<span data-close>Close</span>
					</div>
					<span class="line line--3"></span>
				</a>
			</div>
		</div>

		<div class="menu">
			<div class="menu__overlay"></div>
			<nav class="menu__list">

			<?php 
			if(pll_current_language() == 'ko'): 
				wp_nav_menu(array(
					'them_location' => 'slamMenu',
				));
			else:
				wp_nav_menu(array(
					'them_location' => 'slamMenuEng',
				));
			endif;
			?>

			</nav>
		</div>
	</div>
