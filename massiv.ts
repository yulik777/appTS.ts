const skills: string[] = ['Dev', 'DevOps', 'Testing'];

for (const skill of skills) {
    console.log (skill.toLowerCase());
}

const result = skills
 .filter ((s: string) => s !== 'DevOps')// otfiltrovat vse crome "DevOps"
 .map (s => s + '! ')


 console.log( result);