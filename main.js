let availableKeywords= ['HTML',"CSS",'node','express','database','web design', 'What is passport js',"Adobe","bcrypt",'characteristic','deploy','efficency','for loop','gravity','hello','ice cream','jwt','kerala','layout','mongodb','norton','zoo','x-ray','quadrant','time','temperature']

const resultBox= document.querySelector('.resultBox')
const inputBox= document.getElementById('inputBox')

inputBox.onkeyup= function(){
    let result= [];
    let input= inputBox.value;
    if(input.length){
        result= availableKeywords.filter((keyword)=>{
       return keyword.toLowerCase().includes(input.toLowerCase())
        })
        console.log(result)
    }
    display(result)
    if(!result.length){
        resultBox.innerHTML=''
    }
}
function display(result){
    const content= result.map((list)=>{
        return "<li onClick=selectInput(this)>" + list+ "</li>"
    })
    resultBox.innerHTML= "<ul>"+ content.join('') + "</ul>"
}

function selectInput(list){
    inputBox.value= list.innerHTML;
    resultBox.innerHTML=""
}