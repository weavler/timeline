jQuery(document).ready(function($){
  var template = '{{#props}}\
    <ul>\
    {{#brands}}\
        <li>\
        {{#.}}\
            <b>{{.}}</b>\
        {{/.}}\
        </li>\
    {{/brands}}\
    </ul>\
    {{/props}}';

    var featureTemplate = '{{#features}}\
    <div class="cd-timeline-block"> \
			<div class="cd-timeline-img cd-movie"> \
				<img src="img/cd-icon-movie.svg" alt="Movie">\
			</div> \
			<div class="cd-timeline-content">\
				<h2>{{title}}</h2>\
				<p>{{content}}\
          <ul>\
          {{#tasks}}\
              <li>\
              {{#.}}\
                  <b>{{.}}</b>\
              {{/.}}\
              </li>\
          {{/tasks}}\
          </ul>\
        </p>\
				<a href="#0" class="cd-read-more">Read more</a>\
				<span class="cd-date">{{date}}</span>\
			</div> \
		</div>\
    {{/features}}';


    // var timelineBlocks = {
    //   "features":[
    //     {
    //       title: "First heading",
    //       content: "First content",
    //       date: "March 30, 2016"
    //     }
    //   ]
    // };

    $.getJSON('features.js').done(function (data) {
      var html = Mustache.to_html(featureTemplate, data);
      console.log(html);
      $('#testmustache').html(html);
    });

    //console.log(features);




});
