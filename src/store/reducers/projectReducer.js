const initState = {
  projects:[
    {id:'1', title: "titlesdfa", content:'hladfa hfasdf adfa'},
    {id:'2', title: "titlessfa", content:'hladfa hfasdf adfa'},
    {id:'3', title: "titlesgfa", content:'hladfa hfasdf adfa'},
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type)  {
    case 'CREATE_PROJECT' :
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR' :
      console.log('created project error', action.err);
      return state;
    default:
      return state;
  }
}

export default projectReducer
