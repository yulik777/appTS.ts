const skill : [number, string] = [1, 'Dev'];
const id = skill[0];
const skillName = skill[1]; //identifikacia elementov

skill.push ('sdfsf'); // add element

//const [id, skillName] = versia vitjagivania elementov

const arr: [number,string, ...boolean[]] = [1, 'sdfs', true, false]


/* Readonly*/

const skiils : readonly string[] = ['Dev', 'DevOps']; //readonly vmesto const
skiils [0];
