
//make trashcan remove link
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
});
//create new link
$("input[type='text']").keypress(function(e){
	if (e.which === 13){
		var url = $(this).val();
		$(this).val("");
$("ul").append("<li class='link active'><span><i class='fa fa-trash'></i></span> " + "<a href='" + url + "'>" + url + "</a></li>");
	}
});
//open all
$("#go").click(function() {
  $("a").each(function(){
    window.open($(this).attr("href") );
  });
});