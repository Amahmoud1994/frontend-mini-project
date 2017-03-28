var addComment = function (commentText) {
  $('#comments-container').append(`
    <div class="comment">
      <div class="avatar__image" style="background-image:url('../images/user1.jpg')"></div>
      <div class="comment-details">
        <div class="name">
          <h6>7aga</h6>
          <span class="summary summary--medium">
            <i class="fa fa-calendar-o" aria-hidden="true"></i> 1 sec ago
          </span>
        </div>
          <p>
            ${commentText}
          </p>
      </div>
    <hr>
    `);
}
$(document).keypress(function(e) {
    if(e.which == 13&&$('#inputField').val().length>0) {
        addComment($('#inputField').val());
        $('#inputField').val('');
    }
});
