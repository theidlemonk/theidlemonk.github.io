var form = {
    initialize: function(form) {
        var _this = this;
        $(form).validator();
        _this.addSerializeObjectToJquery();
        $(form).validator().on('submit', function(e) {
            if (e.isDefaultPrevented()) {
                toastr.success('Thank you. I will get back to you as soon as I can.');
            } else {
                _this.sendMail(form.serializeObject());
                e.preventDefault();
            }
        });
    },
    addSerializeObjectToJquery: function() {
        $.fn.serializeObject = function() {
            var o = {};
            var a = this.serializeArray();
            $.each(a, function() {
                if (o[this.name]) {
                    if (!o[this.name].push) {
                        o[this.name] = [o[this.name]];
                    }
                    o[this.name].push(this.value || '');
                } else {
                    o[this.name] = this.value || '';
                }
            });
            return o;
        };
    },
    sendMail: function(formDetails) {
        console.log(formDetails);
        document.getElementById('form').reset();

        alert("sending mail");
        // $.ajax({
        //     url: "https://formspree.io/feignfroggie@gmail.com",
        //     method: "POST",
        //     data: {
        //         name: "Tirthankar",
        //         message: "hello!",
        //         _replyto: "tirthankar.bhattacharjee@gmail.com",
        //         _subject: "Message from website"
        //     },
        //     dataType: "json",
        //     success: function(response) {
        //         toastr.success('Thank you. I will get back to you as soon as I can.');
        //     },
        //     error: function(error) {
        //         toastr.error('Something bad happened :( Please email me directly.');
        //     }
        // });
    }
};

var form = Object.create(form);
