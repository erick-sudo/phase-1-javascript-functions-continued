// code your solution here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(wrapper){
    switch(wrapper){
        case "*":
            return function(){
                return `You are ${wrapper}a hard worker${wrapper}!`
            }
        case "||":
            return function(){
                return `You are ${wrapper}a dedicated programmer${wrapper}!`
            }
    }
}