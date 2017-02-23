function addComment() {
  event.preventDefault();
  var bodyText = document.getElementById("commentText").value;
  var commenter = document.getElementById("commenterName").value;

  var commentBody = createCommentBody(bodyText);
  var commenterLabel = createCommenterLabel(commenter);
  postNewComment(commentBody, commenterLabel);
}

function createCommentBody(comment) {
  var bodyDiv = document.createElement("div");//= <div></div>
  var bodyPara = document.createElement("p");//= <p></p>
  bodyPara.innerHTML = comment;//-> <p>comment</p>
  bodyDiv.appendChild(bodyPara);//-> <div><p>comment</p></div>
  return bodyDiv;//= <div><p>comment</p></div>
}

function createCommenterLabel(commenter) {
  var commenterDiv = document.createElement("div");
  var commenterLabel = document.createElement("p");
  commenterLabel.innerHTML = "posted by:&nbsp;";//-> <p>posted by: </p>
  var commenterName = document.createElement("span");
  commenterName.innerHTML = commenter;//-> <span>commenter</span>
  commenterLabel.appendChild(commenterName);//-> <p>posted by: <span>commenter</span></p>
  commenterDiv.appendChild(commenterLabel);//-> <div><p>posted by: <span>commenter</span></p></div>
  return commenterDiv;
}

function postNewComment(body, commenter) {
  var commentsDiv = document.getElementById("comments");
  var newCommentDiv = document.createElement("div");
  newCommentDiv.appendChild(body);
  newCommentDiv.appendChild(commenter);
  commentsDiv.appendChild(newCommentDiv);
}
