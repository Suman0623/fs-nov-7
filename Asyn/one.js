/* let employees = [{ id: 101, name: "Rahul Gandhi", sal: 45000 },
{ id: 102, name: "Sonia Gandhi", sal: 55000 }]


let createEmployee = () => {
    setTimeout(() => { 
        console.log("GM")
    }, [4000])
}
let getEmployees = () => {
    setTimeout(() => { 
        console.log("GN")
    }, [1000])
}
createEmployee();
getEmployees() */


let employees=[{id:101,name:"SUMAN",sal:55000},
               {id:102,name:"HARSHA",sal:65000},
               {id:103,name:"SAI",sal:75000}]
            
let suman=(emp)=>{
    setTimeout(()=>{
        //employees.push(emp)
    },[2000])
}

let harsha=()=>{
    setTimeout(()=>{
        let rows=''
        for(employee of employees){
        rows= rows + `<tr>
                     <td>${employee.id}</td>
                     <td>${employee.name}</td>
                     <td>${employee.sal}</td>
                      </tr>`
        }
        document.getElementById('abc').innerHTML=rows
    },[5000])
}
suman({id:104,name:"tharun",sal:65000})
harsha() 
