function localStorage() {
    JSON.parse(localStorage.getItem("todos"));
   JSON.parse(localStorage.getItem("project"));
}

export{localStorage}