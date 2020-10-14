myNotification = {

    showNotification: function(icon, color, title, message) {
        //color = 'primary';

        $.notify({
            icon: icon,
            message: "<b>" + title + "</b> - " + message + "!"

        }, {
            type: color,
            timer: 2000,
            placement: {
                from: "top",
                align: "center"
            }
        });
    },

    showNotify: function(from, align, color, icon, title, message) {
        //color = 'primary';

        $.notify({
            icon: icon,
            message: "<b>" + title + "</b> - " + message + "!."

        }, {
            type: color,
            timer: 2000,
            placement: {
                from: from,
                align: align
            }
        });
    }


};

function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}