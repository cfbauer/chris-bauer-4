/*
* General Project Javascript
 */

Drupal.behaviors.myBehavior = {
    attach: function (context, settings) {
        // javascript goes here

        jQuery('.field--name-field-portfolio-image').slick({
            slidesToShow: 1,

        });
    }
};