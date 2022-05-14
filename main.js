

function updateCanvas()
{
    background("white");
    random_number=Math.floor((math.random()* quick_draw_data_set.length)+1);
    
    console.log(quick_draw_data_set[random.number]);
    sketch=quick_draw_data_set[random.number];
    document.getElementById('sketch_name').innerHTML= 'Sketch To Be Drawn:'+sketch;
 
}

function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    }

function draw()
    {
    
        strokeWeight(13);
    
        stroke(0);
    
        if(mouseIsPressed)
        {
            line(pmouseX, pmouseY, pmouseX, pmouseY);
        }
    }

function check_sketch()
{
    timer_counter++;
    document.getElementById('time').innerHTML='Timer:'+timer_counter;
    console.log(timer_counter)
    if(timer_counter > 400)
    {
        timer_counter= 0;
        timer_check="completed"
    }
    if(timer_check=="completed"|| answer_holder =="set")
    {
        timer_check="";
        answer_holder="";
        updateCanvas();
    }
}