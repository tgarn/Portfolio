// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(() => {
    $('.expand-down').on('click', event => {
        $(event.currentTarget).children().slideToggle(300);
    });
    $('.skills-dropdown').on('click', event => {
        $(event.currentTarget).children().toggle(300);
    });
    $('.enlarging-links').on('mouseenter', event => {
        $(event.currentTarget).css('font-size','24px');
    });
    $('.enlarging-links').on('mouseleave', event => {
        $(event.currentTarget).css('font-size', '16px');
    });
    $('.hover-light').on('mouseenter', event => {
        $(event.currentTarget).css('color', 'gray');
    });
    $('.hover-light').on('mouseleave', event => {
        $(event.currentTarget).css('color', 'black');
    });

});