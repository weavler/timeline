jQuery(document).ready(function($){


  $.getJSON('features.js').done(function (data) {

    // Template loded from templates/features.htm with id timelineBlocks
    $.get('https://raw.githubusercontent.com/weavler/marketing/gh-pages/templates/features.htm', function(templates){
      var template = $(templates).filter('#timelineBlocks').html();
      $('#feature-container').append(Mustache.render(template, data));

      // Animation function begin
      var timelineBlocks = $('.cd-timeline-block'),
    		offset = 0.8;

    	//hide timeline blocks which are outside the viewport
    	hideBlocks(timelineBlocks, offset);

    	//on scolling, show/animate timeline blocks when enter the viewport
    	$(window).on('scroll', function(){
    		(!window.requestAnimationFrame)
    			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
    			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
    	});

    	function hideBlocks(blocks, offset) {
    		blocks.each(function(){
    			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
    		});
    	}

    	function showBlocks(blocks, offset) {
    		blocks.each(function(){
    			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
    		});
    	}
    })
    // Animation functions ended

  });

});
