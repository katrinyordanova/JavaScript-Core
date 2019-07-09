function manipulateStudents() {
    const baseUrl='https://baas.kinvey.com/appdata/';
    const appKey='kid_BJXTsSi-e/';
    const endPoint='students';
    const password='guest';
    const username='guest';
    const headers={
        'Authorization':`Basic ${btoa(username + ':' + password)}`,
        'Content-Type':'application/json'
    };

    $('.loadButton').on('click', loadStudents);
    $('.createButton').on('click', addStudent);

    async function loadStudents() {
        try {
            let students=await $.ajax({
                method:'GET',
                url: baseUrl + appKey + endPoint,
                headers
            });

            let alphabeticallyOrderedStudents=Array.from(students).sort((a,b) => a.ID - b.ID);
            let $table=$('#results');
            alphabeticallyOrderedStudents.forEach((student) => {
                let $tableRow=$('<tr>')
                    .append(`<td>${student.ID}</td>`)
                    .append(`<td>${student.FirstName}</td>`)
                    .append(`<td>${student.LastName}</td>`)
                    .append(`<td>${student.FacultyNumber}</td>`)
                    .append(`<td>${student.Grade}</td>`);
                $tableRow.appendTo($table);
            });
        }catch(error){
            console.log(error);
        }
    }

    async function addStudent() {
        try {
            let studentData={
                ID:100,
                FirstName:'Kanchev',
                LastName:'Nikolaevich',
                FacultyNumber:'69696969',
                Grade:6.90
            };

            await $.ajax({
                method:'POST',
                url:baseUrl + appKey + endPoint,
                data:JSON.stringify(studentData),
                headers
            });
        }catch (error) {
            console.log(error);
        }
    }
}
