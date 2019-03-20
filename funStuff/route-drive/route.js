$(document).ready(function() {
    bindAll();
});

function bindAll() {
    bindListItemClicks();
    bindProcessButtonClick();
};

function bindListItemClicks() {
    $(document).on("click", ".list-group-item", function(e) {
        e.preventDefault();
        $(this).toggleClass("active");
    });
};

function bindProcessButtonClick() {
    $(document).on("click", "#process", function(e) {
        e.preventDefault();
        process();
    });
};

function bindGoBackButtonClick() {
    $(document).on("click", "#go-back", function(e) {
        e.preventDefault();
        hideResultArea();
    });
}

function bindCopyToClipboardToButton() {
      $(document).on("click", "#copy", function(e) {
        e.preventDefault();
        copyToClip();
    });
}

function process() {
    var items = $(".list-group-item.active");
    if (items.length && items.length > 0) {
        items.each(function(index, item) {
            $("#for-display").append("<p>" + item.dataset.name + "</p>");
            $("#full-copy").append( item.dataset.address + ", \"" + item.dataset.name + "\" \n");
        });
        hideFormArea();
        bindCopyToClipboardToButton();
    } else { console.log("bad"); }
};

function hideFormArea() {
    $(".form").addClass("hide");
    $(".result").removeClass("hide");
    bindGoBackButtonClick();
};

function hideResultArea() {
    $(".result").addClass("hide");
    $(".form").removeClass("hide");
};

function copyToClip() {
  var str = document.getElementById('full-copy').textContent;
  function listener(e) {
    e.clipboardData.setData("text/html", str);
    e.clipboardData.setData("text/plain", str);
    e.preventDefault();
  }
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
};