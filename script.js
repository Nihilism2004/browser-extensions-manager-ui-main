const all = document.getElementById('b1');
const active = document.getElementById('b2');
const inactive = document.getElementById('b3');
const div = document.querySelectorAll('#all > div');
all.addEventListener('click' , () => {
    div.forEach(div => {
        div.style.display = 'block'
    });
});
active.addEventListener('click' ,() =>{
    div.forEach(div => {
        const box = div.querySelector('input[type="checkbox"]')
        if (box.checked)
        {
            div.style.display = 'block'
        }
        else
        {
            div.style.display = 'none'
        }
    })
})
inactive.addEventListener('click' , ( )=>{
    div.forEach(div => {
        const box = div.querySelector('input[type="checkbox"]');
        if(box.checked)
        {
            div.style.display = 'none';
        }
          else
            {
                div.style.display = 'block';
            }  
    });
});
function dark()
{
    const body = document.body;
    const d1 = document.getElementById('a1');
    const d2 = document.getElementById('a2');
    const d3 = document.getElementById('a3');
    const d4 = document.getElementById('a4');
    const d5 = document.getElementById('a5');
    const d6 = document.getElementById('a6');
    const d7 = document.getElementById('a7');
    const d8 = document.getElementById('a8');
    const d9 = document.getElementById('a9');
    const d10 = document.getElementById('a10');
    const d11 = document.getElementById('a11');
    const d12 = document.getElementById('a12');
    const p1 = document.getElementById('p1');
    const p2 = document.getElementById('p2');
    const p3 = document.getElementById('p3');
    const p4 = document.getElementById('p4');
    const p5 = document.getElementById('p5');
    const p6 = document.getElementById('p6');
    const p7 = document.getElementById('p7');
    const p8 = document.getElementById('p8');
    const p9 = document.getElementById('p9');
    const p10 = document.getElementById('p10');
    const p11= document.getElementById('p11');
    const p12 = document.getElementById('p12');
    const icon = document.getElementById('icc');
    if (body.style.backgroundColor === 'rgb(237, 247, 249)'
    )
    {
        body.style.backgroundColor = 'rgb(5 , 11, 33)'
        body.style.color= 'white'
        d1.style.backgroundColor='rgb(31,37,53)'
        d2.style.backgroundColor='rgb(31,37,53)'
        d3.style.backgroundColor='rgb(31,37,53)'
        d4.style.backgroundColor='rgb(31,37,53)'
        d5.style.backgroundColor='rgb(31,37,53)'
        d6.style.backgroundColor='rgb(31,37,53)'
        d7.style.backgroundColor='rgb(31,37,53)'
        d8.style.backgroundColor='rgb(31,37,53)'
        d9.style.backgroundColor='rgb(31,37,53)'
        d10.style.backgroundColor='rgb(31,37,53)'
        d11.style.backgroundColor='rgb(31,37,53)'
        d12.style.backgroundColor='rgb(31,37,53)'
        p1.style.color = 'rgba(255, 255, 255, 0.5)'
        p2.style.color = 'rgba(255, 255, 255, 0.5)'
        p3.style.color = 'rgba(255, 255, 255, 0.5)'
        p4.style.color = 'rgba(255, 255, 255, 0.5)'
        p5.style.color = 'rgba(255, 255, 255, 0.5)'
        p6.style.color = 'rgba(255, 255, 255, 0.5)'
        p7.style.color = 'rgba(255, 255, 255, 0.5)'
        p8.style.color = 'rgba(255, 255, 255, 0.5)'
        p9.style.color = 'rgba(255, 255, 255, 0.5)'
        p10.style.color = 'rgba(255, 255, 255, 0.5)'
        p11.style.color = 'rgba(255, 255, 255, 0.5)'
        p12.style.color = 'rgba(255, 255, 255, 0.5)'
    }
    else
    {
        body.style.backgroundColor = 'rgb(237, 247, 249)'
        body.style.color = 'black'
        d1.style.backgroundColor='white'
        d2.style.backgroundColor='white'
        d3.style.backgroundColor='white'
        d4.style.backgroundColor='white'
        d5.style.backgroundColor='white'
        d6.style.backgroundColor='white'
        d7.style.backgroundColor='white'
        d8.style.backgroundColor='white'
        d9.style.backgroundColor='white'
        d10.style.backgroundColor='white'
        d11.style.backgroundColor='white'
        d12.style.backgroundColor='white'
        p1.style.color = 'rgba(0, 0, 0, 0.5)'
        p2.style.color = 'rgba(0, 0, 0, 0.5)'
        p3.style.color = 'rgba(0, 0, 0, 0.5)'
        p4.style.color = 'rgba(0, 0, 0, 0.5)'
        p5.style.color = 'rgba(0, 0, 0, 0.5)'
        p6.style.color = 'rgba(0, 0, 0, 0.5)'
        p7.style.color = 'rgba(0, 0, 0, 0.5)'
        p8.style.color = 'rgba(0, 0, 0, 0.5)'
        p9.style.color = 'rgba(0, 0, 0, 0.5)'
        p10.style.color = 'rgba(0, 0, 0, 0.5)'
        p11.style.color = 'rgba(0, 0, 0, 0.5)'
        p12.style.color = 'rgba(0, 0, 0, 0.5)'
    }

}
