localStorage.setItem('User_Id',1998);

const addTolocalStorage = () =>{

    const idInput = document.getElementById('storage-id');
    const id =idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value =valueInput.value;
    if(id && value){
        localStorage.setItem(id,value);
    }

idInput.value='';
valueInput.value='';

}