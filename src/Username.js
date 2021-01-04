import React  from "react";
import './css/username.css';
function Username({number}){
    let x=number;
    let table=[];
    if(x<=0){
        return <div></div>;
    }   
    for(let i=0;i<=10;i++){
        let h1=React.createElement('h1',null,x+" * "+ i + " = "+ x*i);
        table.push(h1);        
    }
    let div=React.createElement('div',{className:"table"},table);
    return div;
}

export default Username;