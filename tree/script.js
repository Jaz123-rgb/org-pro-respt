var chart = new OrgChart(document.getElementById("tree"), {
    mouseScrool: OrgChart.action.none,
    nodeBinding: {
        field_0: "name"
    },
    nodes: [
        { id: 1, name: "Amber McKenzie" },
        { id: 2, pid: 1, name: "Ava Field" },
        { id: 3, pid: 1, name: "Peter Stevens" },
        { id: 4, pid: 2, name: "Pruebas" },
        { id: 5, pid: 2, name: "Pruebas 2" },
        { id: 6, pid: 2, name: "Pruebas 3" },
        { id: 7, pid: 6, name: "Pruebas 3" }         
    ]
});