const skills = [
    {id: 1, skill: 'JavaScript', done:true},
    {id: 2, skill: 'HTML', done:true},
    {id: 3, skill: 'CSS', done:true},
    {id: 4, skill: 'Python', done:false}
];
module.exports = {
getAll,
getOne,
create,
deleteOne
};
function getAll(){
    return skills;
}
function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id ===id);
}
function create(skill){
    skill.id = Date.now() % 100000;
    skill.done = false;
    skills.push(skill);
}
function deleteOne(id){
    const idx= skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx,1);
}