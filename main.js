// String Data Type
    let valueStr="Hello Javascript";
    console.log(valueStr);

    // check type using typeof operator
    console.log(typeof(valueStr));

// Number Data Type
    let valueNum=11;
    console.log(valueNum);

    // check type using typeof operator
    console.log(typeof(valueNum));

// Boolean Data Type
    let valueBool=true; // or false;
    console.log(valueBool);

    // check type using typeof operator
    console.log(typeof(valueBool));

// null
    let valueNull=null;
        console.log(valueNull);

    let valueNull1=11;
        console.log(valueNull1);

    valueNull1=null;
        console.log(valueNull1);

//undefined
    let valueUndefined=undefined;
        console.log(undefined);

    valueUndefined="Hello Javascript";
        console.log(valueUndefined);

// var vs let

        //console.log(valueLet); // Cannot access 'valueLet' before initialization // it will throw exception
    let valueLet="11";
        console.log(valueLet); // Can access let variable value
    
        console.log(valueVar); // it will not throw exception but it will assign undefined value
    var valueVar="12";
        console.log(valueVar); // Can access var variable value


// Local Variable and Global Variable using let keyword

    let globalValLet="13"; // Global Variable

        {
            console.log(globalValLet); // Can access global variable inside the scope
            
            let localValLet="14";
                console.log(localValLet); // Can access local variable
        }
    
    console.log(globalValLet); // Can access global variable
    //console.log(localValLet); // Cannot access local variable outside the scope // it will throw run time exception


// local variable and global variable using var keyword.

    var globalValueVar=15; // global Variable
        
        {
            console.log(globalValueVar); // Can access global variable inside the scope

            var localValueVar=16; // local variable
                console.log(localValueVar); // Can access local variable
        }

    console.log(globalValueVar); // Can Access global variable
    console.log(localValueVar); // Cann access local variable outside the scope


