// Load the Server Modal HTML via Ajax call
function getServerModal(sid) {
  $j.getJSON(thisUrl + '?request=modal&modal=server&id=' + sid)
      .done(function(data) {
        if ( $j('#ServerModal').length ) {
          $j('#ServerModal').replaceWith(data.html);
        } else {
          $j("body").append(data.html);
        }
        $j('#ServerModal').modal('show');
        // Manage the Save button
        $j('#serverSubmitBtn').click(function(evt) {
          evt.preventDefault();
          $j('#serverModalForm').submit();
        });
      })
      .fail(logAjaxFail);
}

function enableServerModal() {
  $j(".serverCol").click(function(evt) {
    evt.preventDefault();
    var sid = $j(this).data('sid');
    getServerModal(sid);
  });
  $j('#NewServerBtn').click(function(evt) {
    evt.preventDefault();
    getServerModal(0);
  });
}

// Load the Storage Modal HTML via Ajax call
function getStorageModal(sid) {
  $j.getJSON(thisUrl + '?request=modal&modal=storage&id=' + sid)
      .done(function(data) {
        if ( $j('#storageModal').length ) {
          $j('#storageModal').replaceWith(data.html);
        } else {
          $j("body").append(data.html);
        }
        $j('#storageModal').modal('show');
        // Manage the Save button
        $j('#storageSubmitBtn').click(function(evt) {
          evt.preventDefault();
          $j('#storageModalForm').submit();
        });
      })
      .fail(logAjaxFail);
}

function enableStorageModal() {
  $j(".storageCol").click(function(evt) {
    evt.preventDefault();
    var sid = $j(this).data('sid');
    getStorageModal(sid);
  });
  $j('#NewStorageBtn').click(function(evt) {
    evt.preventDefault();
    getStorageModal(0);
  });
}

// Manage the Add New User button
function AddNewUser(el) {
  url = el.getAttribute('data-url');
  window.location.assign(url);
}

function initPage() {
  var NewStorageBtn = $j('#NewStorageBtn');
  var NewServerBtn = $j('#NewServerBtn');

  if ( canEditSystem ) enableStorageModal();
  if ( canEditSystem ) enableServerModal();

  NewStorageBtn.prop('disabled', !canEditSystem);
  NewServerBtn.prop('disabled', !canEditSystem);
}

$j(document).ready(function() {
  initPage();
});
