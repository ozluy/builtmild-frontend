Currently you can:
- list project 
- go detail of a single project




- get all projects: GET http://127.0.0.1:8000/projects
- get project availability at specific date: GET http://127.0.0.1:8000/availability/{id}/{yyyy-mm-dd}
- get project at specific date: GET http://127.0.0.1:8000/availability/{id}/{yyyy-mm-dd}
- get last inserted project: GET  http://127.0.0.1:8000/project/last
- get project by ID: GET   http://127.0.0.1:8000/project/{id}
- get all apartments : GET http://127.0.0.1:8000/apartments 
- get  apartment  status at specific date: GET http://127.0.0.1:8000/apartment/{id}/{yyyy-mm-dd}
- get  apartment  at specific date: GET http://127.0.0.1:8000/status/{id}/{yyyy-mm-dd}
- get last inserted  apartment  : GET  http://127.0.0.1:8000/apartment/last
- get apartment by ID: GET   http://127.0.0.1:8000/apartment/{id}/