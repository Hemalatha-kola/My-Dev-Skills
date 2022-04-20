const skills = [
    {id: 1, skill: 'JavaScript', done:true},
    {id: 2, skill: 'HTML', done:true},
    {id: 3, skill: 'CSS', done:true},
    {id: 4, skill: 'Python', done:false}
];
module.exports = {
getAll,
getOne
};
function getAll(){
    return skills;
}
function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id ===id);
}