function insert(tableName, columnValuePairs) {
  //"insert into ${tableName} (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);"
  let keys = '';
  let values = '';
  for(let key in columnValuePairs){
    let val;
    if(keys.length === 0){
      keys+= `${key}`;
    }else{
      keys+= `, ${key}`;
    }
    if(typeof(columnValuePairs[key])=='string'){
      val= `'${columnValuePairs[key]}'`;
    }else{
      val= `${columnValuePairs[key]}`;
    }

    if(values.length === 0){
      values += `${val}`;
    }else{
      values += `, ${val}`;
    }
  }

  let result = `INSERT INTO ${tableName} (${keys}) VALUES (${values});`
  return result;
}