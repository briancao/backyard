window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    // Resize
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // convert inches to pixels
    function i(e) {
        return e * 1.2;
    }

    // add a base position
    function b(e) {
        return i(e) + 50;
    }

    function measure(x, y, x2, y2, text) {
        let i;
        ctx.fillStyle = "black";

        if (x === x2) {
            i = y + (y2 - y) / 2;

            ctx.beginPath();
            ctx.moveTo(b(x), b(y));
            ctx.lineTo(b(x2), b(i - 10));
            ctx.closePath();
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(b(x), b(i + 10));
            ctx.lineTo(b(x2), b(y2));
            ctx.closePath();
            ctx.stroke();

            ctx.fillText(text ? text : `${y2 - y}"`, b(x - 6), b(i + 3));

            // end points
            ctx.beginPath();
            ctx.moveTo(b(x - 3), b(y));
            ctx.lineTo(b(x + 3), b(y));
            ctx.closePath();
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(b(x2 - 3), b(y2));
            ctx.lineTo(b(x2 + 3), b(y2));
            ctx.closePath();
            ctx.stroke();
        } else {
            i = x + (x2 - x) / 2;

            ctx.beginPath();
            ctx.moveTo(b(x), b(y));
            ctx.lineTo(b(i - 10), b(y2));
            ctx.closePath();
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(b(i + 10), b(y));
            ctx.lineTo(b(x2), b(y2));
            ctx.closePath();
            ctx.stroke();

            let center = x2 - x > 99 ? 8 : 4;
            ctx.fillText(text ? text : `${x2 - x}"`, b(i - center), b(y + 3));

            // end points
            ctx.beginPath();
            ctx.moveTo(b(x), b(y - 3));
            ctx.lineTo(b(x), b(y + 3));
            ctx.closePath();
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(b(x2), b(y2 - 3));
            ctx.lineTo(b(x2), b(y2 + 3));
            ctx.closePath();
            ctx.stroke();
        }
    }

    function newCement(x, y, width, height) {
        ctx.beginPath();
        ctx.moveTo(b(x), b(y));
        ctx.lineTo(b(x + width), b(y + height));
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(b(x + width), b(y));
        ctx.lineTo(b(x), b(y + height));
        ctx.closePath();
        ctx.stroke();
    }

    //Grass
    ctx.fillStyle = "#00A572";
    ctx.fillRect(b(55), b(0), i(50), i(85));
    ctx.fillRect(b(0), b(84), i(105), i(132 + 175 + 155));

    // Frame
    ctx.beginPath();
    ctx.moveTo(b(0), b(84));
    ctx.lineTo(b(55), b(84));
    ctx.lineTo(b(55), b(0));
    ctx.lineTo(b(105), b(0)); // top right
    ctx.lineTo(b(105), b(84 + 132 + 175 + 155));
    ctx.lineTo(b(0), b(84 + 132 + 175 + 155));
    ctx.closePath();
    ctx.stroke();

    // Buttom Cement
    ctx.fillStyle = "#7E8E96";
    ctx.fillRect(b(105), b(90), i(132), i(132));
    ctx.lineWidth = 1;
    ctx.strokeRect(b(105), b(90), i(132), i(132));

    // Buttom Cement
    ctx.fillStyle = "#7E8E96";
    ctx.fillRect(b(105), b(84 + 132 + 175), -i(35), i(155));
    ctx.lineWidth = 1;
    ctx.strokeRect(b(105), b(84 + 132 + 175), -i(35), i(155));

    // Air Conditioner
    ctx.fillStyle = "#FFFF00";
    ctx.fillRect(b(105 - 12), b(84 + 132 + 175 - 28), -i(30), -i(30));
    ctx.lineWidth = 1;
    ctx.strokeRect(b(105 - 12), b(84 + 132 + 175 - 28), -i(30), -i(30));

    // New Cement
    ctx.fillStyle = "#96abb4";
    ctx.fillRect(b(105 - 35), b(84 + 132 + 175), -i(105 - 12 - 35), i(155));
    ctx.lineWidth = 1;
    ctx.strokeRect(b(105 - 35), b(84 + 132 + 175), -i(105 - 12 - 35), i(155));
    newCement(12, 84 + 132 + 175, 105 - 12 - 35, 155);

    // New Cement
    ctx.fillStyle = "#96abb4";
    ctx.fillRect(b(105), b(90), -i(105 - 12), i(132));
    ctx.lineWidth = 1;
    ctx.strokeRect(b(105), b(90), -i(105 - 12), i(132));
    newCement(12, 90, 105 - 12, 132);

    // right side cement
    measure(105 + 132 + 12, 90, 105 + 132 + 12, 90 + 132);
    measure(115, 84 + 132 + 175, 115, 84 + 132 + 175 + 155);
    measure(135, 90 + 132 + 2, 135, 84 + 132 + 175 + 155, '324"');

    // top new cement
    measure(-10, 90, -10, 90 + 132);
    measure(115, 0, 115, 88, '84"');

    // entire left
    measure(-20, 84, -20, 84 + 132 + 175 + 155);

    // bottom cement
    ctx.fillText('12"', b(-2), b(84 + 132 + 175 + 155 + 12));
    measure(12, 84 + 132 + 175 + 155 + 10, 105 - 35, 84 + 132 + 175 + 155 + 10);
    measure(12 + 58, 84 + 132 + 175 + 155 + 10, 105, 84 + 132 + 175 + 155 + 10);
    measure(0, 84 + 132 + 175 + 155 + 25, 105, 84 + 132 + 175 + 155 + 25);

    measure(12, 132 + 90 + 10, 105-2, 132 + 90 + 10, '93"');

    // water vents
    ctx.fillStyle = '#FF0000';

    ctx.beginPath();
    ctx.arc(b(7), b(84 + 6 + (132/2)), 4, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.arc(b(30), b(84 + 132 + 100), 4, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(b(7), b(462), 4, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    // legend
    ctx.strokeRect(b(300), b(0), i(132), i(150));

    ctx.beginPath();
    ctx.arc(b(325), b(20), 4, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = 'black';
    ctx.fillText('Water Vent', b(340), b(22));

    ctx.fillStyle = "#96abb4";
    ctx.fillRect(b(315), b(30), i(20), i(20));
    ctx.lineWidth = 1;
    ctx.strokeRect(b(315), b(30), i(20), i(20));
    newCement(315, 30, 20, 20);
    ctx.fillStyle = 'black';
    ctx.fillText('New Cement', b(340), b(40));
    
    ctx.fillStyle = "#7E8E96";
    ctx.fillRect(b(315), b(60), i(20), i(20));
    ctx.lineWidth = 1;
    ctx.strokeRect(b(315), b(60), i(20), i(20));
    ctx.fillStyle = 'black';
    ctx.fillText('Pre-existing Cement', b(340), b(70));

    ctx.fillStyle = "#00A572";
    ctx.fillRect(b(315), b(90), i(20), i(20));
    ctx.fillStyle = 'black';
    ctx.fillText('Turf', b(340), b(100));

    ctx.fillStyle = "#FFFF00";
    ctx.fillRect(b(315), b(120), i(20), i(20));
    ctx.lineWidth = 1;
    ctx.strokeRect(b(315), b(120), i(20), i(20));
    ctx.fillStyle = 'black';
    ctx.fillText('Air Conditioner', b(340), b(130));
});
