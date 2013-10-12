'use strict';
       $(document).ready(function(){
           $('.main').onepage_scroll({
               sectionContainer: 'section'
           });
           $('.nav>li>a').on('click',function(e){
               e.preventDefault();
               var selected = $(this);
               $('.nav>li>a').removeClass('active');
               selected.addClass('active');
               $('.onepage-pagination>li>a[data-index='+ selected.data('index') +']').trigger('click');
           });
       });