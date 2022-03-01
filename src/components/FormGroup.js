const FormGroup = ({label, type, id, value, onChangeHandler}) => {
    return ( 
      <div className="form-group">
        <label htmlFor={id} className="control-label">{label}: </label>
        <input type={type} id={id} name={id} className="form-control" value={value} onChange={onChangeHandler}/>
      </div>
     );
}
 
export default FormGroup;