import './form-add.css'

const FormAdd = () => {
    return (
    <div className="form-add-div">  
        <input type="text" className="formadd" />
        <button className='btn-add' onClick={ () => {
            return console.log('click')}}>
        Сделаем!
        </button>
    </div>
    )
}

export default FormAdd;