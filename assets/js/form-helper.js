var form = {
    initialize: function(form) {
        var _this = this;
        $(form).validator();
        _this.addSerializeObjectToJquery();
        $(form).validator().on('submit', function(e) {
            if (e.isDefaultPrevented()) {
                // possible toastr warning
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
        document.getElementById('form').reset();
        var _this = this;
        $.ajax({
            url: _this.getUrl(),
            method: "POST",
            data: {
                name: formDetails.name,
                message: formDetails.message,
                _replyto: formDetails.email,
                _subject: "Message from website form submission - theidlemonk.github.io"
            },
            dataType: "json",
            success: function(response) {
                toastr.success('Thank you. I will get back to you as soon as I can.');
            },
            error: function(error) {
                toastr.error('Something bad happened :( \n Please email me directly.');
            }
        });
               // toastr.error('Something bad happened :( \n Please email me directly.');
    },
    getUrl: function () {
        return atob("aHR0cHM6Ly9mb3Jtc3ByZWUuaW8vZmVpZ25mcm9nZ2llQGdtYWlsLmNvbQ==");
    }
};

var form = Object.create(form);
