<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">  

    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
	<div data-barba="wrapper">
		<div class="loader"></div>
		<div class="transition"></div>
		<div class="black-filter"></div>

		<header class="header">
			<div class="container-fluid header__container">
				<div class="row justify-content-between align-items-center row--direction-no-change">
					<div class="col">
						<a class="logo" href="<?php echo site_url() ?>"><img src=<?php echo get_theme_file_uri('/images/logo_white.svg'); ?>" alt="사이트로고" /></a>
					</div>
					<div class="col">
						<ul class="social">
							<li>
								<a class="social__icon fab fa-instagram" href="#" target="_blank"></a>
							</li>
							<li>
								<a class="social__icon fab fa-youtube" href="<?php echo site_url('/news') ?>"></a>
							</li>
						</ul>
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
				<ul>
					<li><a href="<?php echo site_url('/about') ?>">about</a></li>
					<li><a href="<?php echo site_url('/works') ?>">works</a></li>
					<li><a href="<?php echo site_url('/news') ?>">news</a></li>
					<li><a href="<?php echo site_url('/recruit') ?>">recruit</a></li>
					<li><a href="<?php echo site_url('/contact') ?>">contact</a></li>
				</ul>
			</nav>
		</div>
	</div>
