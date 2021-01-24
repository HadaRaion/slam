<?php

function studio_slam_files()
{
    wp_enqueue_style('custom-google-fonts', '//fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');
    wp_enqueue_style('font-awesome', '//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css');

    if (strstr($_SERVER['SERVER_NAME'], 'studioslam.local')) {
        wp_enqueue_script('main-studio_slam-js', 'http://localhost:3000/bundled.js', NULL, '1.0', true);
      } else {
        wp_enqueue_script('our-vendors-js', get_theme_file_uri('/bundled-assets/undefined'), NULL, '1.0', true);
        wp_enqueue_script('main-studio_slam-js', get_theme_file_uri('/bundled-assets/scripts.be88e98c8311d2e727a7.js'), NULL, '1.0', true);
        wp_enqueue_style('our-main-styles', get_theme_file_uri('/bundled-assets/styles.be88e98c8311d2e727a7.css'));
      }
      
    wp_localize_script('main-studio_slam-js', 'studio_slamData', array(
        'root_url' => get_site_url(),
        'nonce' => wp_create_nonce('wp_rest')
    ));
}



add_action('wp_enqueue_scripts', 'studio_slam_files');

function studio_slam_features()
{
    add_theme_support('title-tag'); //title 생성
    add_theme_support('post-thumbnails');
    add_image_size('slam-works-retina', 800, 450, true);
    add_image_size('slam-works', 400, 225, true);
}

add_action('after_setup_theme', 'studio_slam_features');


// Redirect subscriber accounts out of admin and onto homepage
add_action('admin_init', 'redirectSubsToFrontend');

function redirectSubsToFrontend()
{
    $ourCurrentUser = wp_get_current_user();

    if (count($ourCurrentUser->roles) == 1 and $ourCurrentUser->roles[0] == 'subscriber') {
        wp_redirect(site_url('/'));
        exit;
    }
}

add_action('wp_loaded', 'noSubsAdminBar');

function noSubsAdminBar()
{
    $ourCurrentUser = wp_get_current_user();

    if (count($ourCurrentUser->roles) == 1 and $ourCurrentUser->roles[0] == 'subscriber') {
        show_admin_bar(false);
    }
}
