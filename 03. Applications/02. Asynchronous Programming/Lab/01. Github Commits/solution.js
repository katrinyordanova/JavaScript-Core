function loadCommits() {
    let username=$('#username').val();
    let repository=$('#repo').val();

    if (username && repository){
        let url=`https://api.github.com/repos/${username}/${repository}/commits`;
        $.get(url)
            .then(printCommits)
            .catch(printError);
    }

    function printCommits(commits) {
        for (let commit of commits){
            $('#commits').append(`<li>${commit.commit.author.name}: ${commit.commit.message}</li>`)
        }
    }

    function printError(error) {
        $('#commits').append(`<li>Error: ${error.status} (${error.statusText})</li>`);
    }
}