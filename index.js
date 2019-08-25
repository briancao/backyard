window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    // Resize
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // Retangle
    ctx.strokeRect(200, 200, 200, 500);
    ctx.strokeStyle = "red";
    ctx.strokeRect(50, 50, 200, 500);

    // Lines
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(200, 100);
    ctx.lineTo(200, 150);
    ctx.closePath();
    ctx.stroke();

    // Variables
    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e)
    }

    function endPosition() {
        painting = false;
        ctx.beginPath();
    }

    function inch(e) {
        return e * 3;
    }

    function draw(e) {
        if (!painting) {
            return;
        }
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
    // Event Listeners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);
});
