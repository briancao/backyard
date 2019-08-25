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
        

        // main line
        ctx.beginPath();
        ctx.moveTo(b(x), b(y));
        ctx.lineTo(b(x2), b(y2));
        ctx.closePath();
        ctx.stroke();

        // end points
        ctx.beginPath();
        ctx.moveTo(b(x-3), b(y));
        ctx.lineTo(b(x+3), b(y));
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(b(x2-3), b(y2));
        ctx.lineTo(b(x2+3), b(y2));
        ctx.closePath();
        ctx.stroke();
    }

    measure(105+132 + 12, 90, 105+132 + 12, 90+132, 'test');

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
    newCement(12, 84 + 132 + 175, 105 - 12- 35, 155);
    
    // New Cement
    ctx.fillStyle = "#96abb4";
    ctx.fillRect(b(105), b(90), -i(105 - 12), i(132));    
    ctx.lineWidth = 1;
    ctx.strokeRect(b(105), b(90), -i(105 - 12), i(132));
    newCement(12, 90, 105 - 12, 132);
    
});
