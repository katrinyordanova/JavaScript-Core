function loadRepos() {
    let reposHTML=$('#repos');
    reposHTML.html('');

    let username=$('#username').val();
    let url=`https://api.github.com/users/${username}/repos`;

    $.ajax({
        method:"GET",
        url:url,
        dataType:"json",
        success:function (repos) {
        $(repos).each((index,element) => {
            reposHTML.append("<li><a href='" + element.html_url + "'>" + element.full_name + "</a></li>");
        });
        },
        error:function () {
            reposHTML.append('<li>Error</li>');
        }
    })
}