 const exampleData  = {
    tasks    :{
      'task-1': { id: 1, content:'hello' },
      'task-2': { id: 1, content:'world' },
      'task-3': { id: 1, content:'we' },
      'task-4': { id: 1, content:'are' },
      'task-5': { id: 1, content:'here' }

    },
    columns: {
      'coloumn-1' :{
        id:'column-1',
        title:'To do',
        tasksIds:[ 'task-1','task-2','task-3','task-4','task-5']
      }

    },
    // facilitate column order later
    columnOrder : ['column-1']

};
export default exampleData;
