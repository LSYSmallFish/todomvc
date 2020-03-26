var sqlMap = {
    todo: {
        add: 'insert into todo(id,text,isComplete,isEdit) values (0, ?, ?)'
    }
}
module.exports = sqlMap;